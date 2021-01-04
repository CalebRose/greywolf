const Player = require('../Models/player');

exports.run = async (client, msg, args, db) => {
  let docRef = db.collection('Players').doc(msg.author.id);
  let getDoc = await docRef.get();
  console.log('Document data:', getDoc.data());
  const data = getDoc.data();
  try {
    if (!args || args.length < 1) {
      const pl = new Player(msg.author.id, msg.author.username, data);
      let weapon = pl.getMostUsedWeapon();
      const stats = pl.Stats;
      msg.channel.send({
        embed: {
          color: 3447003,
          title: data.Name,
          description: `The statistics and records of ${data.Name}.`,
          fields: [
            {
              name: '**Overall**',
              value: `Missions: ${stats.Missions},\nEntered Konderstahl's Service: `,
            },
            {
              name: '**Combat Actions**',
              value: `Battles Engaged: ${stats.BattlesEngaged},\nDamage Done: ${
                stats.DamageDone
              },\nDamageTaken: ${stats.DamageTaken},\nDamage Ratio: ${
                stats.DamageDone - stats.DamageTaken
              }\nShots Fired: ${stats.ShotsFired},\nShots Made: ${
                stats.ShotsMade
              },\nShot Accuracy: ${
                stats.ShotsFired === 0
                  ? '0'
                  : (stats.ShotsMade / stats.ShotsFired) * 100
              }%,\nMost Used Weapon Type: ${weapon},\nEnemiesKilled: ${
                stats.EnemiesKilled
              },\nBossesDefeated: ${stats.BossesDefeated}`,
            },
            {
              name: '**Non-Combat Actions**',
              value: `Discoveries Found: ${stats.DiscoveriesFound},\nItems Looted: ${stats.ItemsLooted},\nItemsStolen: ${stats.ItemsStolen},\nPersons Rescued: ${stats.PersonsRescued},\nPersons Kidnapped: ${stats.PersonsKidnapped},\nAssassinations: ${stats.AssassinationsMade},\nObstacles Overcame: ${stats.ObstaclesOvercome}\nObjectives Completed: ${stats.ObjectivesCompleted}`,
            },
            {
              name: '**Health**',
              value: `Recoveries: ${stats.Recoveries},\nMinor Injuries: ${stats.MinorInjuries},\nMajor Injuries: ${stats.MajorInjuries},\nSevere Injuries: ${stats.SevereInjuries}`,
            },
            {
              name: '**Non-Mission Actions**',
              value: `Bar Actions: ${stats.BarActions},\nTraining Actions: ${stats.TrainingActions}`,
            },
          ],
          footer: {
            icon_url: client.user.avatarURL,
            text: '© Rubicon Innovations',
          },
        },
      });
      // db.collection('Players')
      //   .doc(msg.author.username)
      //   .set(Object.assign({}, pl));
    } else {
      //
    }
  } catch (err) {
    console.log('ERROR:', err);
    msg.channel.send(
      'An error as occured. Perhaps you have not registered yet? Please use the **!start** command to begin now.'
    );
  }
};
