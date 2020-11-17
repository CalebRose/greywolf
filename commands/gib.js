// Models
const Player = require('../Models/player');

exports.run = async (client, msg, args, db, fs) => {
  var masterData;
  fs.readFile('./Data/secret.json', 'utf8', (err, data) => {
    if (err) throw err;
    masterData = JSON.parse(data);
  });

  try {
    let docRef = db.collection('Players').doc(msg.author.id);
    let getDoc = await docRef.get();
    const data = getDoc.data();
    let player = new Player(msg.author.username, data);
    if (msg.author.id.toString() !== masterData.MasterId) {
      msg.reply("You need money? Sure, let me... hold on, you're not Tuscan!");
    } else {
      if (!args || args.length < 1) {
        msg.channel.send('Just what on earth are you trying to do?');
      } else if (args.length === 1) {
        if (args[0].toLowerCase() === 'bison') {
          msg.reply('BYE SON!');
        } else {
          msg.channel.send(
            'Sure, you need money? What exactly? You need to be specific next time!'
          );
        }
      } else {
        let amount = parseInt(args[1]);
        if (isNaN(amount)) {
          msg.channel.send("That's not a number! Try again!");
        } else {
          player.receiveMoney(args[0], amount);
          if (amount > 9000) {
            msg.reply(
              `You have received an amount that's OVER NINE THOUSAAAAAAAAAND!!!`
            );
          } else {
            msg.reply(
              `You have received ${amount} ${args[0]} for being a good person and doing absolutely nothing.\nPlease remember, this is only for testing purposes`
            );
          }

          db.collection('Players')
            .doc(msg.author.id)
            .set(Object.assign({}, player));
        }
      }
    }
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
