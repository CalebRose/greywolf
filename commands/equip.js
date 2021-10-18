// Required Modules
const Player = require('../Models/player');

exports.run = async (client, msg, args, db) => {
  //   if (!args || args.length < 1)
  //     return msg.reply('you must provide a command name to reload.');
  //   const commandName = args[0];
  let docRef = db.collection('Players').doc(msg.author.id);
  let getDoc = await docRef.get();
  const data = getDoc.data();
  let player = new Player(msg.author.id, msg.author.username, data);
  try {
    if (!args || args.length < 1) {
      // Display Holster
      let displayHolster = ``;
      if (player.Holster.length > 0) {
        player.Holster.map((weapon, key) => {
          displayHolster += `${key + 1}: ${weapon.Name} | ${
            weapon.WeaponType
          } \nDamage: ${weapon.WeaponRating} | Accuracy: ${
            weapon.WeaponAccuracy
          } \nCartridge: ${weapon.WeaponCartridge} | Reload Time: ${
            weapon.WeaponReloadTime
          } Turns \nAttack Type: ${weapon.AttackType} | Fire Rate: ${
            weapon.FireRate
          } Bullet Per Turn\n\n`;
        });
        let displayWeapon = `${player.Weapon.Name} | ${player.Weapon.WeaponType} \nDamage: ${player.Weapon.WeaponRating} | Accuracy: ${player.Weapon.WeaponAccuracy} \nCartridge: ${player.Weapon.WeaponCartridge} | Reload Time: ${player.Weapon.WeaponReloadTime} Turns \nAttack Type: ${player.Weapon.AttackType} | Fire Rate: ${player.Weapon.FireRate} Bullet Per Turn`;
        msg.channel.send({
          embed: {
            color: 3447003,
            title: player.Name,
            description: `Weapon Holster`,
            fields: [
              {
                name: 'Equipped Weapon',
                value: displayWeapon,
              },
              { name: `Holster`, value: displayHolster },
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });
      } else {
        msg.channel.send('There is nothing in your holster!');
      }

      // TO COMPLETE
      // Should weapons be held in inventory, and use holster as weapons in battle? Most likely
      //
      /*
        player.Weapon is the weapon the player is holding. Holster is what the player has on hand
      */
    }
  } catch (err) {
    console.log('Error getting document', err);
    msg.channel.send(
      'An error as occured. Perhaps you have not registered yet? Please use the **!start** command to begin now.'
    );
  }
};
