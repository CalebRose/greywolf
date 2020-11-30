const Player = require('../Models/player');
const Location = require('../Models/location');
const Landmark = require('../Models/landmark');
const World = require('../Models/world');
const utility = require('../Data/utility');
exports.run = async (client, msg, args, db, fs) => {
  // JSON Data
  var locationData;
  fs.readFile('./Data/locationData.json', 'utf8', (err, data) => {
    if (err) throw err;
    locationData = JSON.parse(data);
  });
  // Firebase
  try {
    // PLAYER
    let docRef = db.collection('Players').doc(msg.author.id);
    let getDoc = await docRef.get();
    const data = getDoc.data();
    if (!data) {
      throw 'It appears there is no information on you. Are you new here? Try registering or using !help for more info.';
    }
    let player = new Player(msg.author.username, data);
    // World Data
    let nation = player.Locale.CurrentNation;
    let loc = player.Locale.CurrentLocale;
    let locationInfo = new Location(locationData[nation][loc]);

    // Filters
    let isUsing = (res) => {
      res = res.toLowerCase();
      let acceptableResponses = ['yes', 'y', 'да', 'si', 'oui', 'yass'];
      return acceptableResponses.some((opt) => res.includes(opt));
    };

    let yesOrNoFilter = (m) => {
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
          `Are you joking with me sir? Do you wish to use this item or not?`
        );
        return false;
      }
      console.log('Pass?', pass);
      return pass;
    };

    if (!args || args.length < 1) {
      // Await Messages Filter
      let req = '';
      let itemFilter = (m, items) => {
        if (m.author.id !== msg.author.id) return false;
        let pass = false;
        let message = m.content;
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          if (isNaN(message)) {
            pass = item.Name === message ? true : false;
          } else {
            pass = i + 1 === parseInt(message) ? true : false;
          }
          if (pass) break;
        }
        return pass;
      };

      // Inventory Prompt
      let usableItems = player.Inventory.filter((x) => x.IsUsable === true);
      let fields = usableItems.map((x, key) => {
        return {
          name: `${key + 1}: ${x.Name} | ${x.ItemType}`,
          value: `${x.Description}`,
        };
      });
      msg.channel.send({
        embed: {
          color: 3447003,
          title: `Usable inventory`,
          description: `Which item would you like to use? (Please use Index)`,
          fields: fields,
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });

      const prompt = await msg.channel.awaitMessages(
        (m) => itemFilter(m, usableItems),
        {
          time: 60000,
          max: 1,
        }
      );

      req = prompt.first().content;

      let chosenItem = usableItems[parseInt(req) - 1];

      await msg.channel.send(
        `Are you sure you want to use ${chosenItem.Name}?`
      );
      const confirmationPrompt = await msg.channel.awaitMessages(
        yesOrNoFilter,
        {
          time: 60000,
          max: 1,
        }
      );
      let confirm = confirmationPrompt.first().content;
      let using = isUsing(confirm);
      if (using) {
        //
        let resultMessage = '';
        player, (resultMessage = player.useItem(chosenItem));
        let setDoc = await db
          .collection('Players')
          .doc(msg.author.id)
          .set(Object.assign({}, player));

        await msg.channel.send(`${resultMessage}`);
      } else {
        await msg.channel.send(`Decided against using ${chosenItem.Name}.`);
      }
    } else {
    }
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(err);
    }
  }
};
