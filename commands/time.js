const World = require('../Models/world');
exports.run = async (client, msg, args, db, fs) => {
  // JSON Data
  try {
    var worldData;
    fs.readFile('./Data/world.json', 'utf8', (err, data) => {
      if (err) throw err;
      worldData = JSON.parse(data);
      let world = new World(worldData);
      if (world.Time.DayText === 'Zero Day') {
        msg.channel.send(
          `Happy Zero Day! The New Year is the ${world.Time.Year} of the ${world.Time.Era}th Era!`
        );
      } else {
        let dayText = ``;
        if (world.Time.Day === 1 || world.Time.Day === 21) {
          dayText = `${world.Time.Day}st`;
        } else if (world.Time.Day === 2 || world.Time.Day === 22) {
          dayText = `${world.Time.Day}nd`;
        } else if (world.Time.Day === 3 || world.Time.Day === 23) {
          dayText = `${world.Time.Day}rd`;
        } else {
          dayText = `${world.Time.Day}th`;
        }

        msg.channel.send(
          `Today is the ${dayText} of ${world.Time.MonthText}, Year ${world.Time.Year} of the ${world.Time.Era}th Era.\nDay of the Week: ${world.Time.DayText}\nMonth of the Year: ${world.Time.Month}, ${world.Time.MonthText}`
        );
      }
    });
  } catch (err) {
    if (err) {
      console.log('Error:', err);
      msg.channel.send(err);
    }
  }
};
