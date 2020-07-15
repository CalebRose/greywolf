const Player = require('../Models/player');
const Location = require('../Models/location');

exports.run = async (client, msg, args, db, fs) => {
  var locationData;
  fs.readFile('./Data/locationData.json', 'utf8', (err, data) => {
    if (err) throw err;
    locationData = JSON.parse(data);
  });

  try {
    let docRef = db.collection('Players').doc(msg.author.id);
    let getDoc = await docRef.get();
    const data = getDoc.data();
    let player = new Player(msg.author.username, data);
    if (!args || args.length < 1) {
      // Lookup Location & Provide description
      let nation = player.Locale.CurrentNation;
      let loc = player.Locale.CurrentLocale;
      let locationInfo = new Location(locationData[nation][loc]);
      console.log(locationInfo);
      let knownEstablishments = ``;
      locationInfo.Locations.map((loc) => {
        knownEstablishments += `${loc.Id}: ${loc.Name} - ${loc.ShortDesc}\n`;
      });
      let destinations = ``;
      locationInfo.Station.map((dest) => {
        destinations += `${dest.Id}: ${dest.Name} - Distance - ${dest.TravelDistance} - Cost - ${dest.Cost} ${locationInfo.Currency}\n`;
      });
      let nearby = ``;
      locationInfo.NearbyLocales.map((dest) => {
        nearby += `${dest.Id}: ${dest.Name} - Distance - ${dest.TravelDistance}\n`;
      });
      console.log(locationInfo);
      msg.channel.send({
        embed: {
          color: 3447003,
          title: `Current Location: ${locationInfo.Name}`,
          description: `${locationInfo.ShortDesc}`,
          fields: [
            {
              name: `Location Type: `,
              value: `${locationInfo.LocationType}`,
            },
            {
              name: `Geography: `,
              value: `${locationInfo.Region}, ${locationInfo.Country}`,
            },
            {
              name: `Known Establishments`,
              value: `${knownEstablishments}`,
            },
            {
              name: `Station`,
              value: `${destinations}`,
            },
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
    } else {
      // Shops
      // Landmarks
      // Station
      // Nearby
    }
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(
        'It appears that something wrong has occurred. Please message the admin (TuscanSota) in regards to this issue'
      );
    }
  }
};
