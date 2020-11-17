// Models
const Player = require('../Models/player');
const Location = require('../Models/location');
const Landmark = require('../Models/landmark');
const World = require('../Models/world');
const utility = require('../Data/utility');

const {
  ExchangeOption,
  SkillCheckOption,
  MultipleDialogue,
  Options,
} = require('../Models/options');

exports.run = async (client, msg, args, db, fs) => {
  // JSON Data
  var locationData;
  fs.readFile('./Data/locationData.json', 'utf8', (err, data) => {
    if (err) throw err;
    locationData = JSON.parse(data);
  });

  var worldData;
  fs.readFile('./Data/world.json', 'utf8', (err, data) => {
    if (err) throw err;
    worldData = JSON.parse(data);
  });

  var itemData;
  fs.readFile('./Data/items.json', 'utf8', (err, data) => {
    if (err) throw err;
    itemData = JSON.parse(data);
  });
  // Firebase
  try {
    // PLAYER
    let docRef = db.collection('Players').doc(msg.author.id);
    let getDoc = await docRef.get();
    const data = getDoc.data();
    let player = new Player(msg.author.username, data);
    // World Data
    let nation = player.Locale.CurrentNation;
    let loc = player.Locale.CurrentLocale;
    let locationInfo = new Location(locationData[nation][loc]);
    let world = new World(worldData);

    if (!args || args.length < 1) {
      throw `Where are you trying to enter exactly? Please remember, you're in ${loc}. Use !locale for a list of establishments nearby.`;
    } else {
      let landmark = locationInfo.getLandmark(args);
      let location = new Landmark(landmark);
      if (landmark === undefined) {
        throw 'It appears that the landmark you are attempting to enter is not here. Please check your grammar if necessary. If all else fails, please reach out to the admin (TuscanSota) regarding this issue.';
      }
      let available = (day) => day === world.Time.DayText;
      let accessible = false;
      if (landmark.Availability[0] !== 'All') {
        accessible = landmark.Availability.some(available);
      } else {
        accessible = true;
      }
      if (accessible) {
        let populateOptions = (name, opts) => {
          let fields = [];
          if (opts.length > 0) {
            let options = ``;
            opts.map((opt) => {
              options += `${opt.Key}: ${opt.Value}\n`;
            });

            fields.push({
              name: name,
              value: options,
            });
          }
          return fields;
        };

        let name =
          locationInfo.LocationType.length > 1
            ? `Things to do at ${location.Name}`
            : `There is nothing of note to do at ${location.Name}`;
        let fields = populateOptions(name, landmark.Options);
        let desc = location.EnterText;
        let title = `Current Location: ${location.Name}`;
        let embed = {
          embed: {
            color: 3447003,
            title: title,
            description: `${desc}`,
            fields: fields,
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        };
        let confirmationFilter = (m) => {
          if (m.author.id !== msg.author.id) {
            return false;
          }
          let pass = false;
          let message = m.content.toLowerCase();
          let acceptable = [
            'yes',
            'no',
            'y',
            'n',
            'да',
            'нет',
            'si',
            'oui',
            'non',
            'yass',
            'nah',
          ];
          pass = acceptable.some((opt) => {
            return message.toLowerCase().includes(opt);
          });
          if (!pass) {
            msg.channel.send(
              `Are you joking with me sir? Do you wish to travel or not?`
            );
            return false;
          }
          return pass;
        };

        let isConfirmed = (res) => {
          res = res.toLowerCase();
          let acceptableResponses = ['yes', 'y', 'да', 'si', 'oui', 'yass'];
          return acceptableResponses.some((opt) => res.includes(opt));
        };

        const promptFilter = (m, opt) => {
          // Check if message is a number or not.
          let mes = m.content;
          let pass = false;
          //
          for (let i = 0; i < opt.length; i++) {
            if (isNaN(mes)) {
              if (opt[i].Value.toLowerCase() === mes.toLowerCase()) {
                pass = true;
                break;
              }
            } else {
              if (opt[i].Key === mes) {
                pass = true;
                break;
              }
            }
          }
          return !pass && m.author.id === msg.author.id;
        };

        let options = landmark;
        let pastOptions = options;
        let prevOptions = [pastOptions];
        let dataUpdated = false;
        while (true) {
          // If exiting
          if (options.IsExit) embed.embed.fields = [];
          msg.channel.send(embed);
          if (options.IsExit) break;

          const prompt = await msg.channel.awaitMessages(
            (m) => promptFilter(m, options),
            {
              time: 60000,
              max: 1,
            }
          );

          let index = prompt.first().content;
          pastOptions = options;
          options = options.Options[index - 1];
          if (options.OptionType === 'Train') {
            // Do dialogue
            // Converse?
            // Provide more options
          } else if (options.OptionType === 'SkillCheck') {
            options = new SkillCheckOption(options);
            // Roll for SkillCheck
            // check outcome
            // Provide dialogue based on outcome
            // If exit, break loop
            // Otherwise, provide more prompts
          } else if (options.OptionType === 'Dialogue') {
            // Continue providing dialogue. It's worldbuilding.
            if (options.FurtherDialogue) {
              fields = populateOptions(options.EmbedName, options.Options);
              embed.embed.fields = fields;
              if (options.IsSubMenu) prevOptions.push(options);
            }
            desc = options.Dialogue;
            embed.embed.title = '';
            embed.embed.description = desc;

            if (options.return || options.returnToSub) {
              embed.embed.title = title;
              if (options.return && !options.returnToSub) {
                options = landmark;
                fields = populateOptions(name, options.Options);
                prevOptions = [];
              } else if (!options.return && options.returnToSub) {
                let returnDialogue = options.ReturnDialogue;
                options = prevOptions.pop();
                fields = populateOptions(returnDialogue, options.Options);
              }
              embed.embed.fields = fields;
            }
            //
            //
          } else if (options.OptionType === 'Statement') {
            // Continue providing dialogue, but with no further possible options
            let len = options.DialogueOptions.length;
            let idx =
              len > 1
                ? Math.floor(Math.random() * options.DialogueOptions.length)
                : 0;
            embed.embed.description = options.DialogueOptions[idx];
            embed.embed.title = '';
            if (options.InDialogueChain) {
              embed.embed.fields[0].name = options.ReturnDialogue;
            }
            // Reset Options to pastOptions
            options = pastOptions;
            //
          } else if (options.OptionType === 'Purchase') {
            // Provide Dialogue
            msg.channel.send(
              options.Dialogue + options.Item + utility.ConfirmText
            );
            let confirm = await msg.channel.awaitMessages(confirmationFilter, {
              time: 60000,
              max: 1,
            });

            let confirmed = isConfirmed(confirm.first().content);
            if (confirmed) {
              // Get item
              var item = itemData[options.Region][options.Item];
              let canPurchase = player.checkForPurchase(
                locationInfo.Currency,
                options.Cost
              );
              // Check inventory space
              let hasSpace = player.checkInventorySpace();

              //
              if (canPurchase && hasSpace) {
                player.payForItem(locationInfo.Currency, options.Cost);
                // Add item to inventory
                item.Id = Math.floor(Math.random() * 999999);
                player.receiveItem(item);
                msg.channel.send(options.Options[0].PurchaseDialogue);
                dataUpdated = true;
                embed.embed.description = '';
                if (options.return) options = pastOptions;
              } else {
                if (!canPurchase) {
                  msg.channel.send(
                    `${options.Options[0].UnableToPay}\n${landmark.ExitText}`
                  );
                  break;
                } else if (!hasSpace) {
                  msg.channel.send(
                    `It appears that you do not have enough space in your inventory for ${options.Item}.\nI suggest making room in your bags or acquiring more bags.`
                  );
                  if (options.Options[1].return) {
                    options = pastOptions;
                  } else {
                    break;
                  }
                }
              }
            } else {
              msg.channel.send(options.Options[1].Dialogue);
              if (options.Options[1].return) {
                options = pastOptions;
              } else {
                break;
              }
            }
            // Calculate cost
            // Check if player can hold the item
            // Make exchange
            // Ask if the player wants to buy anything else?
            // resort to past options if necessary
          } else if (options.OptionType === 'Sell') {
            // Provide Dialogue
            // Provide player inventory. Select Item
            // Calculate cost
            // Make exchange
            // Ask if the player wants to do anything else?
            // resort to past options if necessary
          } else if (options.OptionType === 'Exit') {
            // Provide Dialogue
            // Update player data based on results
            // Break
            msg.channel.send(`${options.Dialogue}\n${landmark.ExitText}`);
            break;
          }
        }

        if (dataUpdated) {
          db.collection('Players')
            .doc(msg.author.id)
            .set(Object.assign({}, player));
        }
      } else {
        throw `It appears that ${location.Name} is not accessible at this time. Please try again another day.`;
      }
    }
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(err);
    }
  }
};
