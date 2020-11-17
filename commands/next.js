const World = require('../Models/world');
exports.run = async (client, msg, args, db, fs) => {
  // JSON Data

  try {
    var masterData;
    fs.readFile('./Data/secret.json', 'utf8', (err, data) => {
      if (err) throw err;
      masterData = JSON.parse(data);

      if (msg.author.id.toString() !== masterData.MasterId) {
        throw "Yeah, sorry bud. You're not Tuscan. Can't let you use this command.";
      }
      var worldData;
      fs.readFile('./Data/world.json', 'utf8', (err, data) => {
        if (err) throw err;

        worldData = JSON.parse(data);
        let world = new World(worldData);
        console.log(world);
        world.IncrementCalendar();
        let worldText = `World has been updated.\nDay: ${world.Time.DayText}, Month: ${world.Time.MonthText}\nDay: ${world.Time.Day}, Month: ${world.Time.Month}`;
        if (world.Time.DayText === 'Zero Day') {
          worldText += `\n\n***Happy Zero Day! The New Year is ${world.Time.Year} of the ${world.Time.Era}th Era!***`;
        }
        let newJson = JSON.stringify(world);
        // Loop through characters

        // Calculate Health Recovery

        // Replenish Action Points and Travel Points
        console.log('TEXT');
        console.log(worldText);
        // Write new JSON
        fs.writeFile('./Data/world.json', newJson, 'utf8', (err) => {
          if (err) throw err;
          msg.channel.send(worldText);
        });
      });
    });
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(err);
    }
  }
};
