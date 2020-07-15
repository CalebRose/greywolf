exports.run = (client, msg, args) => {
  if (args.length === 0) {
    msg.channel.send({
      embed: {
        color: 3447003,
        title: 'Commands Guide',
        description: 'This is only a test.',
        fields: [
          {
            name: '!start',
            value: 'Use this command to register for the game.',
          },
          {
            name: '!info',
            value:
              'I provide you with basic information regarding your character.',
          },
          {
            name: '!stats',
            value:
              'I will provide you with your latest records & achievements.',
          },
          {
            name: '!ready {Mission Name}',
            value:
              'This will indicate that you are prepared for the next mission. Indicating the name will allow me to properly prepare any travel requirements needed for you to embark with your group.',
          },
          {
            name: '!travel',
            value:
              'This is the command used for your character to travel across Reges.',
          },
          {
            name: '!help',
            value:
              'I provide this list to help you with additional commands. Clearly sir, you know of this command.',
          },
        ],
        footer: {
          icon_url: client.user.avatarURL,
          text: '© Rubicon Innovations',
        },
      },
    });
  } else {
    if (args[0] === 'start') {
      msg.channel.send({
        embed: {
          color: 3447003,
          title: 'Registration (Start) Guide',
          description: 'A guide for registration',
          fields: [
            {
              name: 'First Step',
              value:
                'A prompt will appear asking for your name. All you need to do below is insert "!reg", followed by any name afterwards.',
            },
            {
              name: 'Second Step',
              value:
                'The next step will be to determine your class. There are four available: Conscript, Merchant, Thief, and ----. Please spell the name correctly.',
            },
            {
              name: 'Third Step',
              value:
                'You will be provided a list of attributes. I will provide a suggestion based on your class, but it is up to you to decide which two attributes you wish to highlight.',
            },
            {
              name: 'Final Step',
              value:
                'The Final Step is to select two proficiencies from a list provided. Again, I will suggest two, and it is up to you on what you wish to decide.',
            },
            {
              name: 'Anything else?',
              value:
                'That will be all. Please, do not hesitate once you begin registration. Konderstahl does not take procrastination lightly...',
            },
            {
              name: 'Clarifications:',
              value:
                'Please do not select the same attributes or proficiencies when making your selections.',
            },
          ],
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
    } else if (args[0] === 'ready') {
      msg.channel.send({
        embed: {
          color: 3447003,
          title: 'Readiness Guide',
          description: 'A guide for preparing for missions',
          fields: [
            {
              name: '!ready {mission name}',
              value:
                'Preparing for a mission is vital. By readying up, you will inform me that you are suited and prepared for the next mission.',
            },
            {
              name: '!ready pass',
              value:
                "By passing, you change your mind on readying up, and therefore will not embark on the party's next mission. Please don't abuse this feature.",
            },
            {
              name: 'Clarification 1',
              value:
                "To prepare and ready up for a mission, you must be within the borders of the region the mission shall take place. You cannot ready up when you're halfway across the globe. We cannot afford those kind of travel arrangements at this time.",
            },
            {
              name: 'Clarification 2',
              value:
                "Upon readying up, it is suggested that you don't participate in any sort of activities of which include rough-housing, brawling, and debauchery. The last thing Konderstahl needs is to depend on a drunken man-whore for his business operations.",
            },
          ],
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
    } else if (args[0] === 'info') {
      if (args[1] !== undefined) {
        if (args[1] === 'w' || args[1] === 'weapon') {
          msg.channel.send({
            embed: {
              color: 3447003,
              title: 'Info-Weapon Guide',
              description: 'Information regarding the weapon window',
              fields: [
                {
                  name: '!info weapon (w)',
                  value: 'The command to use to view your current weapon info',
                },
                {
                  name: 'Weapon Typing',
                  value:
                    'Weapon Type: The type of your current weapon\nAttackType: The attack type of your weapon\nOriginated From: Where your weapon was manufactured or crafted.',
                },
                {
                  name: 'Ranged Weapon Stats',
                  value:
                    'Rating: The strength of your weapon\nAccuracy: The accuracy of your current weapon.\nFire Rate: The firing rate of your weapon. Most weapons can fire only one round at a time.\nCartridge Size: How much ammunition your weapon can hold at a time before reloading.\nReload Time: The amount of turns it takes to reload your weapon.',
                },
                {
                  name: 'Melee Weapon Stats',
                  value:
                    'Rating: The strength of your weapon\nAccuracy: The accuracy of your current weapon.\nAttack Speed: The strike rate of your weapon under your curent stamina.\nWeapon Stamina: How many strikes your character can do until it needs to take a breath.\nRecovery Rate: The amount of turns it takes to rejuvenate your weapon stamina.',
                },
              ],
              footer: {
                icon_url: client.user.avatarURL,
                text: '© Rubicon Innovations',
              },
            },
          });
        }
      } else {
        msg.channel.send({
          embed: {
            color: 3447003,
            title: 'Info Guide',
            description: 'A guide for preparing for missions',
            fields: [
              {
                name: '!info',
                value:
                  "I will provide you with general information on yourself. Who you are, where you're from, and your current condition",
              },
              {
                name: '!info Weapon',
                value: 'Information on your current weapon, sir.',
              },
              {
                name: '!info skills',
                value: 'A list of all skills you are proficient at.',
              },
              {
                name: '!info Feats',
                value:
                  "Your feats, sir. Unfortunately this section doesn't appear to be quite ready. Please be patient.",
              },
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });
      }
    } else if (args[0] === 'stats') {
      msg.channel.send({
        embed: {
          color: 3447003,
          title: 'Stats Guide',
          description: 'Player-Related Statistics and Records from Gameplay',
          fields: [
            {
              name: '!stats',
              value:
                'I will provide you with all of your latest achievements and records.',
            },
          ],
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
    }
  }
};
