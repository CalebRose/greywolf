exports.run = async (client, msg, args, db) => {
  //   if (!args || args.length < 1)
  //     return msg.reply('you must provide a command name to reload.');
  //   const commandName = args[0];
  let docRef = db.collection('Players').doc(msg.author.username);
  let getDoc = await docRef.get();
  console.log('Document data:', getDoc.data());
  const data = getDoc.data();
  try {
    if (!args || args.length < 1) {
      msg.channel.send({
        embed: {
          color: 3447003,
          title: data.Name,
          description: `${data.Profession === 'Academic' ? 'An' : 'A'} ${
            data.Profession
          } from ${data.OriginNation}`,
          fields: [
            {
              name: 'Current Locale',
              value: `${data.Locale.CurrentLocale}`,
            },
            {
              name: 'Attributes',
              value: `Strength: ${data.Attributes.Strength}, \nDexterity: ${data.Attributes.Dexterity}, \nPerception: ${data.Attributes.Perception}, \nCharisma: ${data.Attributes.Charisma}, \nEndurance: ${data.Attributes.Endurance}`,
            },
            {
              name: 'Level',
              value: data.Level,
            },
            {
              name: 'Experience',
              value: `Total: ${data.Experience}, To Next Level: ${data.ExperienceRequired}`,
            },
            {
              name: 'Condition',
              value: `${data.Condition}`,
            },
          ],
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
    } else {
      if (args[0].toLowerCase() === 'skills' || args[0].toLowerCase === 's') {
        const skills = data.Proficiencies;
        msg.channel.send({
          embed: {
            color: 3447003,
            title: `${data.Name}'s Skills`,
            description: `*The admirable skill set of ${data.Name}*`,
            fields: [
              {
                name: '**Weaponry Skills**',
                value: `Close Quarter Guns: ${skills.CloseQuarterGuns.Level},\n Long Range Weapons: ${skills.LongRangeWeapons.Level},\nMelee Weapons: ${skills.MeleeWeapons.Level},\nFisticuffs: ${skills.Fisticuffs.Level}`,
              },
              {
                name: '**Talent Skills**',
                value: `Engineering: ${skills.Engineering.Level}, \nMedicine: ${skills.Medicine.Level}, \nBartering: ${skills.Bartering.Level}, \nVehicles: ${skills.Vehicles.Level}`,
              },
              {
                name: '**Covert Skills**',
                value: `Stealth: ${skills.Stealth.Level},\nPersuasion: ${skills.Persuasion.Level},\nPickpocket: ${skills.Pickpocket.Level}`,
              },
              {
                name: '**Languages**',
                value: `Golic: ${skills.Gol.Level},\nWaldish: ${skills.Waldish.Level},\nRubese: ${skills.Rubese.Level},\nNordish: ${skills.Nordish.Level},\nBregian: ${skills.Bregian.Level},\nNumorean: ${skills.Numorean.Level},\nVolkaic: ${skills.Volkaic.Level},\nEscanic: ${skills.Escanic.Level}`,
              },
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });
      } else if (
        args[0].toLowerCase() === 'weapon' ||
        args[0].toLowerCase() === 'w'
      ) {
        msg.channel.send({
          embed: {
            color: 3447003,
            title: `${data.Name}'s Current Weapon`,
            description: ``,
            fields: [
              {
                name: '**To be added soon**',
                value: ``,
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
  } catch (err) {
    console.log('Error getting document', err);
    msg.channel.send(
      'An error as occured. Perhaps you have not registered yet? Please use the **!start** command to begin now.'
    );
  }
};
