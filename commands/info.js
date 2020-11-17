exports.run = async (client, msg, args, db) => {
  //   if (!args || args.length < 1)
  //     return msg.reply('you must provide a command name to reload.');
  //   const commandName = args[0];
  let docRef = db.collection('Players').doc(msg.author.id);
  let getDoc = await docRef.get();
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
            {
              name: 'Currencies',
              value: `${data.Currencies.WaldishMarks} Marks\n ${data.Currencies.GolicGols} Gols`,
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
        let fields = [
          {
            name: `**Weapon Type**: ${data.Weapon.WeaponType}`,
            value: `**Attack Type**: ${data.Weapon.AttackType}\n**Originated From**: ${data.Weapon.WeaponOrigin}`,
          },
        ];
        if (data.Weapon.WeaponType !== 'Melee Weapon') {
          fields.push({
            name: `Weapon Stats`,
            value: `**Rating**: ${data.Weapon.WeaponRating}\n**Range**: ${data.Weapon.WeaponRange}\n**Accuracy**: ${data.Weapon.WeaponAccuracy}\n**Fire Rate**: ${data.Weapon.FireRate}\n**Cartridge Size**: ${data.Weapon.WeaponCartridge}\n**Reload Time**: ${data.Weapon.WeaponReloadTime}`,
          });
        } else {
          fields.push({
            name: `Weapon Stats`,
            value: `**Rating**: ${data.Weapon.WeaponRating}\n**Accuracy**: ${data.Weapon.WeaponAccuracy}\n**Attack Speed**: ${data.Weapon.FireRate}\n**Weapon Stamina**: ${data.Weapon.WeaponCartridge}\n**Recovery Rate**: ${data.Weapon.WeaponReloadTime}`,
          });
        }
        msg.channel.send({
          embed: {
            color: 3447003,
            title: `${data.Name}'s Current Weapon`,
            description: `**${data.Weapon.Name}**\n*${data.Weapon.WeaponDescription}*`,
            fields: fields,
            footer: {
              icon_url: client.user.avatarURL,
              text: '© Rubicon Innovations',
            },
          },
        });
      } else if (
        args[0].toLowerCase() === 'inventory' ||
        args[0].toLowerCase() === 'inv'
      ) {
        let fields = data.Inventory.map((x, key) => {
          return {
            name: `${key + 1}: ${x.Name}: ${x.ItemType}`,
            value: `${x.Description}`,
          };
        });
        if (fields.length === 0) {
          fields = {
            name: `An empty bag.`,
            value: `It appears that you have nothing in your inventory.`,
          };
        }
        msg.channel.send({
          embed: {
            color: 3447003,
            title: `${data.Name}'s Inventory`,
            description: `Total Inventory Space: ${
              data.InventoryLimit
            } | Used Space: ${data.Inventory.length} | Space Available: ${
              data.InventoryLimit - data.Inventory.length
            }`,
            fields: fields,
            footer: {
              icon_url: client.user.avatarURL,
              text: '@ Rubicon Innovations',
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
