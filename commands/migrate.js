const Player = require('../Models/player');

exports.run = async (client, msg, args, db) => {
  //   if (!args || args.length < 1)
  //     return msg.reply('you must provide a command name to reload.');
  //   const commandName = args[0];
  let docRef = db.collection('Players').doc(msg.author.id);
  let getDoc = await docRef.get();
  let data = getDoc.data();
  if (!data) {
    let oldRef = db.collection('Players').doc(msg.author.username);
    let oldDoc = await oldRef.get();
    let oldData = oldDoc.data();

    let player = new Player(msg.author.username, oldData);
    let weapon;
    if (player.Profession === 'Conscript') {
      if (
        player.OriginNation === 'Walderlund' ||
        player.OriginNation === 'Halvania' ||
        player.OriginNation === 'Friedlerin'
      ) {
        weapon = {
          Name: 'Berufene Rifle',
          WeaponType: 'Rifle',
          AttackType: 'Singular',
          WeaponValue: 60,
          WeaponDescription:
            'A Waldish Rifle commonly given to conscripts in the Waldish military corps.',
          WeaponOrigin: 'Walderlund',
          Requirement: 1,
          WeaponRating: 7,
          WeaponRange: 1,
          WeaponAccuracy: 65,
          WeaponCartridge: 8,
          CurrentCartridge: 8,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      } else if (player.OriginNation === 'The Volka') {
        weapon = {
          Name: 'Vintovka Naganta',
          WeaponType: 'Rifle',
          AttackType: 'Singular',
          WeaponValue: 60,
          WeaponDescription:
            'A Volkaic rifle commonly issued within the armed forces of the Empire of the Volka.',
          WeaponOrigin: 'The Volka',
          Requirement: 1,
          WeaponRating: 6,
          WeaponRange: 1,
          WeaponAccuracy: 70,
          WeaponCartridge: 5,
          CurrentCartridge: 5,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      }
    } else if (
      player.Profession === 'Merchant' ||
      player.Profession === 'Academic' ||
      player.Profession === 'Petty Criminal'
    ) {
      if (
        player.OriginNation === 'Walderlund' ||
        player.OriginNation === 'Halvania' ||
        player.OriginNation === 'Friedlerin'
      ) {
        weapon = {
          Name: 'Rauber 4e32',
          WeaponType: 'Pistol',
          AttackType: 'Singular',
          WeaponValue: 60,
          WeaponDescription:
            "A well known Waldish pistol, modernized from it's revolutionary predecessor",
          WeaponOrigin: 'Walderlund',
          Requirement: 1,
          WeaponRating: 6,
          WeaponRange: 1,
          WeaponAccuracy: 80,
          WeaponCartridge: 6,
          CurrentCartridge: 6,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      } else if (player.OriginNation === 'Atalia') {
        weapon = {
          Name: 'Pistola Revelli',
          WeaponType: 'Pistol',
          AttackType: 'Singular',
          WeaponValue: 60,
          WeaponDescription:
            "A well known Waldish pistol, modernized from it's revolutionary predecessor",
          WeaponOrigin: 'Atalia',
          Requirement: 1,
          WeaponRating: 6,
          WeaponRange: 1,
          WeaponAccuracy: 75,
          WeaponCartridge: 6,
          CurrentCartridge: 6,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      } else if (player.OriginNation === 'Bregan') {
        weapon = {
          Name: '4e42 Weister',
          WeaponType: 'Pistol',
          AttackType: 'Singular',
          WeaponValue: 60,
          WeaponDescription:
            'A sidearm commissioned for military use by the Bregian Military Corps.',
          WeaponOrigin: 'Bregan',
          Requirement: 1,
          WeaponRating: 6,
          WeaponRange: 1,
          WeaponAccuracy: 70,
          WeaponCartridge: 6,
          CurrentCartridge: 6,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      }
    } else if (player.Profession === 'Vagrant') {
      if (player.OriginNation === 'Nordank') {
        weapon = {
          Name: 'Nordish Rapier',
          WeaponType: 'Melee Weapon',
          AttackType: 'Singular',
          WeaponValue: 70,
          WeaponDescription:
            "A well known Waldish pistol, modernized from it's revolutionary predecessor",
          WeaponOrigin: 'Nordank',
          Requirement: 1,
          WeaponRating: 10,
          WeaponRange: 1,
          WeaponAccuracy: 70,
          WeaponCartridge: 2,
          CurrentCartridge: 2,
          WeaponReloadTime: 1,
          CurrentReload: 0,
          FireRate: 1,
          WasFired: false,
        };
      }
    }
    player.Weapon = weapon;
    console.log(player);
    let setDoc = db
      .collection('Players')
      .doc(msg.author.id)
      .set(Object.assign({}, player));

    msg.reply(
      `Thank you, ${player.Name} for your assistance with this migration. Your actions will not be unnoticed.`
    );
  } else {
    msg.reply(
      `It appears that your profile does not need migration at this time.`
    );
  }
};
