const Player = require('../Models/player');
const Location = require('../Models/location');
const Landmark = require('../Models/landmark');
const World = require('../Models/world');

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

  try {
    let docRef = db.collection('Players').doc(msg.author.id);
    let getDoc = await docRef.get();
    const data = getDoc.data();
    let player = new Player(msg.author.username, data);
    let nation = player.Locale.CurrentNation;
    let loc = player.Locale.CurrentLocale;
    let locationInfo = new Location(locationData[nation][loc]);
    let world = new World(worldData);
    if (!args || args.length < 1) {
      // Lookup Location & Provide description
      let available = (day) => day === world.Time.DayText;
      let knownEstablishments = ``;
      if (locationInfo.Locations.length > 0) {
        locationInfo.Locations.map((loc) => {
          let accessible = false;
          if (loc.Availability[0] !== 'All') {
            accessible = loc.Availability.some(available);
            if (accessible) {
              knownEstablishments += `${loc.Id}: ${loc.Name} - ${loc.ShortDesc}\n`;
            }
          } else {
            knownEstablishments += `${loc.Id}: ${loc.Name} - ${loc.ShortDesc}\n`;
          }
        });
      }

      let destinations = ``;
      if (locationInfo.Station.length > 0) {
        locationInfo.Station.map((dest) => {
          destinations += `${dest.Id}: ${dest.Name} - Distance - ${dest.TravelDistance} - Cost - ${dest.Cost} ${locationInfo.Currency}\n`;
        });
      } else {
        destinations = `There appears to be no station here.`;
      }

      let nearby = ``;
      if (locationInfo.NearbyLocales.length > 0) {
        locationInfo.NearbyLocales.map((dest) => {
          nearby += `${dest.Id}: ${dest.Name} - Distance - ${dest.TravelDistance}\n`;
        });
      }

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
      let landmark = locationInfo.getLandmark(args);
      landmark = new Landmark(landmark);
      if (landmark === undefined) {
        throw 'It appears that the landmark you are looking for is not here. If the location you are looking for is listed, please reach out to the admin (TuscanSota) regarding this issue.';
      }

      let fields = [
        {
          name: `Location Type: `,
          value: `${landmark.LocationType}`,
        },
        { name: `Currency`, value: `${landmark.Currency}` },
      ];
      // Display info on this particular landmark
      if (landmark.StoreFeatures.length > 0) {
        let features = ``;
        landmark.StoreFeatures.map((ad) => {
          features += `${ad}\n`;
        });
        fields.push({
          name: 'Inquiries',
          value: features,
        });
      }

      msg.channel.send({
        embed: {
          color: 3447003,
          title: `Current Location: ${landmark.Name}`,
          description: `${landmark.ShortDesc}`,
          fields: fields,
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
    }
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(err);
    }
  }
};
