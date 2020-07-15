const Player = require('../Models/player.js');

exports.run = async (client, msg, args, db, fs) => {
  // Import Necessary Json
  var dialog;
  fs.readFile('./Dialog/dialog.json', 'utf8', (err, data) => {
    if (err) throw err;
    dialog = JSON.parse(data);
  });

  var weapons;
  fs.readFile('./Data/weapons.json', 'utf8', (err, data) => {
    if (err) throw err;
    weapons = JSON.parse(data);
  });

  // Start Registration
  let docRef = db.collection('Players').doc(msg.author.id);
  const getDoc = await docRef.get();
  const data = getDoc.data();
  if (!args || args.length < 1) {
    // Starting Registration
    if (data) {
      if (data.Registration.isComplete === true) {
        msg.reply("You're already registered!");
      } else {
        // Fill out scenarios for completing the registration process
      }
    } else {
      let player = new Player(msg.author.username);
      // Set new player in DB
      //   db.collection('Players').doc(msg.author.username).set(player);
      const illegalNames = [
        'reg',
        'stats',
        'reload',
        'faq',
        'help',
        'fuck',
        'cunt',
        'travel',
        'equip',
        'socialize',
        'action',
        'Jorgen Konderstahl',
        'TuscanSota',
        'Tuscan Sota',
        'Toucan',
        'Toucan Soda',
        'ToucanSoda',
        'Tuscan',
      ];

      const nameFilter = (m, words) => {
        let pass = false;
        pass = words.some((word) => {
          return m.content.includes(word);
        });
        return !pass && m.author.id === msg.author.id;
      };

      const findNation = (input) => {
        if (input === 'Gol' || input === 'The Gol' || input === '1') {
          return 'The Gol Republic';
        } else if (input === 'Walderlund' || input === '2') {
          return 'The Walderlund';
        } else if (input === '3') {
          return 'Bregan';
        } else if (input === '4') {
          return 'Friedlerin';
        } else if (input === '5') {
          return 'Halvania';
        } else if (input === '6') {
          return 'Rubinia';
        } else if (input === '7') {
          return 'Nordank';
        } else if (input === '8' || input === 'Volka') {
          return 'The Volka';
        } else if (input === '9') {
          return 'Atalia';
        } else if (input === '10') {
          return 'Escagon';
        }
        return input;
      };

      const findAttribute = (input) => {
        if (input === '1') {
          return 'Strength';
        } else if (input === '2') {
          return 'Dexterity';
        } else if (input === '3') {
          return 'Perception';
        } else if (input === '4') {
          return 'Charisma';
        } else if (input === '5') {
          return 'Endurance';
        }
        return input;
      };

      const findSkill = (input) => {
        if (input === '1') {
          return 'CloseQuarterGuns';
        } else if (input === '2') {
          return 'LongRangeWeapons';
        } else if (input === '3') {
          return 'MeleeWeapons';
        } else if (input === '4') {
          return 'Fisticuffs';
        } else if (input === '5') {
          return 'Engineering';
        } else if (input === '6') {
          return 'Medicine';
        } else if (input === '7') {
          return 'Stealth';
        } else if (input === '8') {
          return 'Persuasion';
        } else if (input === '9') {
          return 'Pickpocket';
        } else if (input === '10') {
          return 'Bartering';
        } else if (input === '11') {
          return 'Vehicles';
        }
        return input;
      };

      const findProfession = (input) => {
        if (input === '1') {
          return 'Conscript';
        } else if (input === '2') {
          return 'Petty Criminal';
        } else if (input === '3') {
          return 'Merchant';
        } else if (input === '4') {
          return 'Vagrant';
        } else if (input === '5') {
          return 'Academic';
        }
        return input;
      };

      const nationFilter = (m) => {
        if (m.author.id !== msg.author.id) {
          return false;
        }
        let input = m.content;
        input = findNation(input);
        let pass = false;
        const nations = [
          'The Gol Republic',
          'The Walderlund',
          'Bregan',
          'Friedlerin',
          'Halvania',
          'Rubinia',
          'Nordank',
          'The Volka',
          'Atalia',
          'Escagon',
        ];
        pass = nations.some((nation) => {
          return input.includes(nation);
        });
        if (!pass) {
          msg.channel.send(
            `I'm sorry, but you're from *where* exactly? Please take this seriously and tell me where you're from.`
          );
          return false;
        }
        return pass && m.author.id === msg.author.id;
      };

      const genderAndAgeFilter = (m) => {
        if (m.author.id !== msg.author.id) {
          return false;
        }
        let pass = false;
        const genders = [
          'M',
          'F',
          'Male',
          'Female',
          'Boy',
          'Girl',
          'Man',
          'Woman',
          'N',
          'Neutral',
        ];
        const arr = m.content.split(' ');
        if (arr.length < 2) {
          msg.channel.send(
            `It appears as though you did not provide either a Gender or an Age. If there was a mishap in that you provided both, I highly suggest placing space between the two`
          );
          return false;
        }
        const chosenGender = arr[0];
        const age = parseInt(arr[1]);
        if (isNaN(age)) {
          msg.channel.send('Please input your age in numerals.');
          return false;
        }
        if (age < 16) {
          msg.channel.send(
            `I am sorry but it appears that you are too young to be employed by Konderstahl. Please return when you've grown a few inches.`
          );
          return false;
        }
        if (age > 54) {
          msg.channel.send(
            `Sir, are you sure you find yourself fit for this line of work? May I suggest another profession? Perhaps, baking or sewing? You could even enter my line of work if you dare feel up for it.`
          );
          return false;
        }
        pass = genders.some((g) => {
          return chosenGender.includes(g);
        });
        if (!pass) {
          msg.channel.send(
            `With all due respect sir, I do not think that is a gender. Take no offense, but we need something more specific.`
          );
          return false;
        }
        return pass && !isNaN(age) && m.author.id === msg.author.id;
      };

      const professionFilter = (m) => {
        if (m.author.id !== msg.author.id) {
          return false;
        }
        let input = findProfession(m.content);
        let pass = false;
        if (input.split(' ').length > 2) {
          msg.channel.send('You can only choose ONE profession.');
          return false;
        }
        const professions = [
          'Conscript',
          'Petty Criminal',
          'Merchant',
          'Vagrant',
          'Academic',
        ];
        pass = professions.some((prof) => {
          return input.includes(prof);
        });
        if (!pass) {
          msg.channel.send(
            `I'm sorry but ${input} is not a profession. Please take this seriously.`
          );
        }
        return pass && m.author.id === msg.author.id;
      };

      const attributeFilter = (m) => {
        if (m.author.id !== msg.author.id) {
          return false;
        }
        pass = false;
        const arr = m.content.split(' ');
        if (arr.length < 2) {
          msg.channel.send('You must choose two attributes.');
          return false;
        }
        if (arr[0] === arr[1]) {
          msg.channel.send('You cannot choose the same attribute twice.');
          return false;
        }
        arr[0] = findAttribute(arr[0]);
        arr[1] = findAttribute(arr[1]);

        const attributes = [
          'Strength',
          'Dexterity',
          'Perception',
          'Charisma',
          'Endurance',
        ];

        arr.forEach((attribute) => {
          pass = attributes.some((attr) => {
            return attribute.includes(attr);
          });
          if (!pass) {
            msg.channel.send(
              `I'm sorry but ${attribute} is not an attribute. Please try again`
            );
            return false;
          }
        });
        return pass && m.author.id === msg.author.id;
      };

      const skillFilter = (m) => {
        if (m.author.id !== msg.author.id) {
          return false;
        }
        pass = false;
        const arr = m.content.split(' ');
        if (arr.length < 2) {
          msg.channel.send('Pardon me, but you must select two skills.');
          return false;
        }
        if (arr[0] === arr[1]) {
          msg.channel.send('You cannot choose the same skill twice.');
          return false;
        }

        arr[0] = findSkill(arr[0]);
        arr[1] = findSkill(arr[1]);

        const skills = [
          'CloseQuarterGuns',
          'LongRangeWeapons',
          'MeleeWeapons',
          'Fisticuffs',
          'Engineering',
          'Medicine',
          'Stealth',
          'Persuasion',
          'Pickpocket',
          'Bartering',
          'Vehicles',
        ];

        arr.forEach((skill) => {
          pass = skills.some((s) => {
            return skill.includes(s);
          });
          if (!pass) {
            msg.channel.send(
              `I'm sorry but I believe that is not a skill. Please try again`
            );
            return false;
          }
        });
        return pass;
      };

      await msg.reply(
        `Greetings! Thank you for choosing to play The Last Kings: The Greywolf Crusades! We are pleased to have you with us today. Now, let's start with you name. Please type it below.`
      );

      const answer1 = await msg.channel.awaitMessages(
        (m) => nameFilter(m, illegalNames),
        {
          time: 60000,
          max: 1,
        }
      );
      player.Name = answer1.first().content;

      await msg.reply(
        `So you're name is ${
          answer1.first().content
        }? Noted. Now, please state your gender (M/F) and age (16-54).`
      );

      const answer2 = await msg.channel.awaitMessages(genderAndAgeFilter, {
        time: 60000,
        max: 1,
      });

      const answer2arr = answer2.first().content.split(' ');
      if (['M', 'Male', 'Boy', 'Man'].includes(answer2arr[0])) {
        player.Gender = 'Male';
      } else if (['F', 'Female', 'Girl', 'Woman'].includes(answer2arr[0])) {
        player.Gender = 'Female';
      } else {
        msg.channel.send(
          'Sir, that is not a gender. Please restart the process again and take this seriously.'
        );
        throw new error(
          'That is not a gender. Please restart the entire process.'
        );
      }

      player.Age = answer2arr[1];

      await msg.reply(
        `Thank you. Now, please select your nation:\n\n**1: The Gol Republic**- The First Republic off the Western Coast of Reges.\n**2: The Walderlund**- An economic powerhouse made up of smaller states.\n**3: Bregan**- A kingdom under rule by three kings in Northwest Reges.\n**4: Friedlerin**: A small, independent Waldish State within the Valley of the Mons.\n**5: Halvania**: A monarchy East of the Mons, led by one of the last Monarchs.\n**6: Rubinia**- A republic on the verge of bankruptcy within Northern Reges.\n**7: Nordank**- A Northern Kingdom on the verge of civil war.\n**8: The Volka**- An Empire on the far eastern edge of Continental Reges.\n**9: Atalia** A quiet republic within Southern Reges.\n**10: Escagon** The Traders' Paradise and the Gateway to Southern Reges.`
      );

      const answer3 = await msg.channel.awaitMessages(nationFilter, {
        time: 60000,
        max: 1,
      });

      let nation = findNation(answer3.first().content);

      player.OriginNation = nation;
      player = player.setLanguage(player.OriginNation);

      await msg.reply(
        `${dialog.Registration.Nation[nation]}\n\nNow, given your background, I have also adjusted your language aptitude accordingly. Now, tell me your profession:\n**1: Conscript** - A soldier with experience in battle.\n**2: Petty Criminal** - As the name goes, you're not only adept in the art of pilfrage and thievery, you are familiar with the streets.\n**3: Merchant** - A fellow involved in a certain trade, whether it be ethical or unethical is to your liking. No matter, Konderstahl does not mind.\n**4: Vagrant** - Hired muscle tasked with disposing of adversaries and obstacles with their physical might. A vital asset for any crime mogul.\n**5: Academic** - A bright mind. Where they lack in field experience or combat, they excel in knowledge.`
      );

      const answer4 = await msg.channel.awaitMessages(professionFilter, {
        time: 60000,
        max: 1,
      });

      let prof = findProfession(answer4.first().content);
      player.Profession = prof;

      await msg.reply(
        `${dialog.Registration.Profession[prof]}\n\n Anyways, please select two attributes:\n**1: Strength** - Your physical prowess. Measures melee combat and physical challenges.\n**2: Dexterity** - Measures your ability both with firearms and reaction time.\n**3: Perception** - Defines how well you are aware of your surroundings to the finest detail.\n**4: Charisma** - Your ability to socialize with others and express the art of conversation.\n**5: Endurance** -  Your survivability both in combat and recovery.`
      );

      const answer5 = await msg.channel.awaitMessages(attributeFilter, {
        time: 60000,
        max: 1,
      });

      const attributes = answer5.first().content.split(' ');
      for (let i = 0; i < attributes.length; i++) {
        let attr = findAttribute(attributes[i]);
        player = player.incrementAttribute(attr);
      }

      await msg.reply(
        `Very well. And finally, there are many skills to describe so I shall be brief. Please select two:\n\n**1: CloseQuarterGuns**\n**2: LongRangeWeapons**\n**3: MeleeWeapons**\n**4: Fisticuffs**\n**5: Engineering**\n**6: Medicine**\n**7: Stealth**\n**8: Persuasion**\n**9: Pickpocket**\n**10: Bartering**\n**11: Vehicles**`
      );

      const finalAnswer = await msg.channel.awaitMessages(skillFilter, {
        time: 60000,
        max: 1,
      });

      const skills = finalAnswer.first().content.split(' ');
      for (let i = 0; i < skills.length; i++) {
        let s = findSkill(skills[i]);
        player = player.incrementSkill(s);
      }

      //
      // PICKING YOUR WEAPON?

      //

      player.Registration.isComplete = true;
      player.Locale.CurrentNation = 'The Walderlund';
      player.Locale.CurrentLocale = 'Derdach';

      // Give player a weapon

      // Post to DB
      // console.log(player);
      // var role = msg.guild.roles.fetch('708356468038041662');
      // if (!msg.member.roles.cache.has(role.id)) {
      //   // Assign role
      //   msg.member.roles.add(role).catch(console.error);
      // }

      let setDoc = db
        .collection('Players')
        .doc(msg.author.id)
        .set(Object.assign({}, player));

      await msg.reply(
        `Thank you, ${player.Name}. Your application is complete. \n\nWelcome to the services of Konderstahl Industries. I must say, Konderstahl is deeply interested in your experience and having you on board. You will be transported to headquarters in Derdach immediately. Once you have arrived, please wait for further instructions. We expect great things from you.`
      );
    }
  }
};
