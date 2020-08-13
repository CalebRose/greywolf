// Models
const Player = require('../Models/player');
const Location = require('../Models/location');

exports.run = async (client, msg, args, db, fs) => {
  // JSON Data
  var locationData;
  fs.readFile('./Data/locationData.json', 'utf8', (err, data) => {
    if (err) throw err;
    locationData = JSON.parse(data);
  });

  // Filters
  let isTraveling = (res) => {
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
      console.log(opt);
      return message.toLowerCase().includes(opt);
    });
    if (!pass) {
      msg.channel.send(
        `Are you joking with me sir? Do you wish to travel or not?`
      );
      return false;
    }
    console.log('Pass?', pass);
    return pass;
  };

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
    let nation = player.Locale.CurrentNation;
    let loc = player.Locale.CurrentLocale;
    if (!loc || loc.length < 1) {
      throw 'Good heavens, where on Reges are you? Please consult with the admin on this issue...';
    }
    let locationInfo = new Location(locationData[nation][loc]);
    if (locationInfo.NearbyLocales.length > 0) {
      let req = '';
      if (!args || args.length < 1) {
        let travelFilter = (m, nearby) => {
          if (m.author.id !== msg.author.id) {
            return false;
          }
          let pass = false;
          let message = m.content;
          for (let i = 0; i < nearby.length; i++) {
            let loc = nearby[i];
            if (isNaN(message)) {
              pass = loc.Name === message ? true : false;
            } else {
              pass = loc.Id === parseInt(message) ? true : false;
            }
            if (pass) break;
          }
          console.log('Pass?', pass);
          return pass;
        };
        let nearby = ``;
        locationInfo.NearbyLocales.map((dest) => {
          nearby += `${dest.Id}: ${dest.Name} - Distance - ${dest.TravelDistance}\n`;
        });
        msg.channel.send({
          embed: {
            color: 3447003,
            title: `...and where are you looking to travel to?`,
            description: `Current Location: ${locationInfo.Name}`,
            fields: [
              {
                name: `Nearby Locales`,
                value: `${nearby}`,
              },
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });

        const prompt = await msg.channel.awaitMessages(
          (m) => travelFilter(m, locationInfo.NearbyLocales),
          {
            time: 60000,
            max: 1,
          }
        );

        req = prompt.first().content;
      } else {
        req = args.join(' ');
      }

      req = locationInfo.getNearbyLocale(req);

      msg.channel.send(`Are you sure you want to travel to ${req.Name}?`);

      const confirmationPrompt = await msg.channel.awaitMessages(
        yesOrNoFilter,
        {
          time: 60000,
          max: 1,
        }
      );
      let confirm = confirmationPrompt.first().content;
      let traveling = isTraveling(confirm);
      if (traveling) {
        let newLoc = locationData[player.Locale.CurrentNation][req.Name];
        if (!newLoc) {
          for (let nation in locationData) {
            if (nation[req.Name]) {
              newLoc = nation[req.Name];
            }
          }
        }
        if (!newLoc) {
          throw `It appears that ${req.Name} has not been implemented yet. We apologize for this awkward circumstance.`;
        }

        player.setLocale(newLoc);
        // switch player's current locale & country with that of which they're traveling to
        let setDoc = db
          .collection('Players')
          .doc(msg.author.id)
          .set(Object.assign({}, player));

        await msg.reply(
          `*${locationInfo.DepartureByFoot}*\n\n*${newLoc.ArrivalByFoot}*`
        );

        await msg.channel.send({
          embed: {
            color: 3447003,
            title: `You've arrived in ${newLoc.Name}`,
            description: `${newLoc.ShortDesc}\nPlease use !locale for more information about this ${newLoc.LocationType}.`,
            fields: [],
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });
      } else {
        msg.channel.send(
          `Staying in ${player.Locale.CurrentLocale} are we? Well, suit yourself.`
        );
      }
    } else {
      throw 'It appears there are no towns within walking distance. If you believe this to be an issue, please consult with the admin @TuscanSota.';
    }
  } catch (err) {
    if (err) {
      console.log(err);
      msg.channel.send(err);
    }
  }
};
