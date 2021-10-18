const constants = require('../Data/constants');

class Player {
  constructor(id, username, data) {
    this.ID = id;
    this.Username = username;
    this.Name = data.Name || '';
    this.Gender = data.Gender || '';
    this.Age = data.Age || 0;
    this.OriginNation = data.OriginNation || '';
    this.Profession = data.Profession || '';
    this.Attributes = {
      Strength: data.Attributes.Strength || 1,
      Dexterity: data.Attributes.Dexterity || 1,
      Perception: data.Attributes.Perception || 1,
      Charisma: data.Attributes.Charisma || 1,
      Endurance: data.Attributes.Endurance || 1,
    };
    this.Proficiencies = {
      CloseQuarterGuns: {
        Level: data.Proficiencies.CloseQuarterGuns.Level || 1,
        Modifier: data.Proficiencies.CloseQuarterGuns.Modifier || 0,
        Points: data.Proficiencies.CloseQuarterGuns.Points || 0,
        PointsRequired: data.Proficiencies.CloseQuarterGuns.PointsRequired || 5,
      },
      LongRangeWeapons: {
        Level: data.Proficiencies.LongRangeWeapons.Level || 1,
        Modifier: data.Proficiencies.LongRangeWeapons.Modifier || 0,
        Points: data.Proficiencies.LongRangeWeapons.Points || 0,
        PointsRequired: data.Proficiencies.LongRangeWeapons.PointsRequired || 5,
      },
      MeleeWeapons: {
        Level: data.Proficiencies.MeleeWeapons.Level || 1,
        Modifier: data.Proficiencies.MeleeWeapons.Modifier || 0,
        Points: data.Proficiencies.MeleeWeapons.Points || 0,
        PointsRequired: data.Proficiencies.MeleeWeapons.PointsRequired || 5,
      },
      Fisticuffs: {
        Level: data.Proficiencies.Fisticuffs.Level || 1,
        Modifier: data.Proficiencies.Fisticuffs.Modifier || 0,
        Points: data.Proficiencies.Fisticuffs.Points || 0,
        PointsRequired: data.Proficiencies.Fisticuffs.PointsRequired || 5,
      },
      Engineering: {
        Level: data.Proficiencies.Engineering.Level || 1,
        Modifier: data.Proficiencies.Engineering.Modifier || 0,
        Points: data.Proficiencies.Engineering.Points || 0,
        PointsRequired: data.Proficiencies.Engineering.PointsRequired || 5,
      },
      Armor: {
        Level: data.Proficiencies.Armor.Level || 1,
        Modifier: data.Proficiencies.Armor.Modifier || 0,
        Points: data.Proficiencies.Armor.Points || 0,
        PointsRequired: data.Proficiencies.Armor.PointsRequired || 5,
      },
      Medicine: {
        Level: data.Proficiencies.Medicine.Level || 1,
        Modifier: data.Proficiencies.Medicine.Modifier || 0,
        Points: data.Proficiencies.Medicine.Points || 0,
        PointsRequired: data.Proficiencies.Medicine.PointsRequired || 5,
      },
      Stealth: {
        Level: data.Proficiencies.Stealth.Level || 1,
        Modifier: data.Proficiencies.Stealth.Modifier || 0,
        Points: data.Proficiencies.Stealth.Points || 0,
        PointsRequired: data.Proficiencies.Stealth.PointsRequired || 5,
      },
      Persuasion: {
        Level: data.Proficiencies.Persuasion.Level || 1,
        Modifier: data.Proficiencies.Persuasion.Modifier || 0,
        Points: data.Proficiencies.Persuasion.Points || 0,
        PointsRequired: data.Proficiencies.Persuasion.PointsRequired || 5,
      },
      Pickpocket: {
        Level: data.Proficiencies.Pickpocket.Level || 1,
        Modifier: data.Proficiencies.Pickpocket.Modifier || 0,
        Points: data.Proficiencies.Pickpocket.Points || 0,
        PointsRequired: data.Proficiencies.Pickpocket.PointsRequired || 5,
      },
      Bartering: {
        Level: data.Proficiencies.Bartering.Level || 1,
        Modifier: data.Proficiencies.Bartering.Modifier || 0,
        Points: data.Proficiencies.Bartering.Points || 0,
        PointsRequired: data.Proficiencies.Bartering.PointsRequired || 5,
      },
      Vehicles: {
        Level: data.Proficiencies.Vehicles.Level || 1,
        Modifier: data.Proficiencies.Vehicles.Modifier || 0,
        Points: data.Proficiencies.Vehicles.Points || 0,
        PointsRequired: data.Proficiencies.Vehicles.PointsRequired || 5,
      },
      Gol: {
        Level: data.Proficiencies.Gol.Level || 1,
        Modifier: data.Proficiencies.Gol.Modifier || 0,
        Points: data.Proficiencies.Gol.Points || 0,
        PointsRequired: data.Proficiencies.Gol.PointsRequired || 5,
      },
      Waldish: {
        Level: data.Proficiencies.Waldish.Level || 1,
        Modifier: data.Proficiencies.Waldish.Modifier || 0,
        Points: data.Proficiencies.Waldish.Points || 0,
        PointsRequired: data.Proficiencies.Waldish.PointsRequired || 5,
      },
      Rubese: {
        Level: data.Proficiencies.Rubese.Level || 1,
        Modifier: data.Proficiencies.Rubese.Modifier || 0,
        Points: data.Proficiencies.Rubese.Points || 0,
        PointsRequired: data.Proficiencies.Rubese.PointsRequired || 5,
      },
      Nordish: {
        Level: data.Proficiencies.Nordish.Level || 1,
        Modifier: data.Proficiencies.Nordish.Modifier || 0,
        Points: data.Proficiencies.Nordish.Points || 0,
        PointsRequired: data.Proficiencies.Nordish.PointsRequired || 5,
      },
      Bregian: {
        Level: data.Proficiencies.Bregian.Level || 1,
        Modifier: data.Proficiencies.Bregian.Modifier || 0,
        Points: data.Proficiencies.Bregian.Points || 0,
        PointsRequired: data.Proficiencies.Bregian.PointsRequired || 5,
      },
      Numorean: {
        Level: data.Proficiencies.Numorean.Level || 1,
        Modifier: data.Proficiencies.Numorean.Modifier || 0,
        Points: data.Proficiencies.Numorean.Points || 0,
        PointsRequired: data.Proficiencies.Numorean.PointsRequired || 5,
      },
      Volkaic: {
        Level: data.Proficiencies.Volkaic.Level || 1,
        Modifier: data.Proficiencies.Volkaic.Modifier || 0,
        Points: data.Proficiencies.Volkaic.Points || 0,
        PointsRequired: data.Proficiencies.Volkaic.PointsRequired || 5,
      },
      Escanic: {
        Level: data.Proficiencies.Escanic.Level || 1,
        Modifier: data.Proficiencies.Escanic.Modifier || 0,
        Points: data.Proficiencies.Escanic.Points || 0,
        PointsRequired: data.Proficiencies.Escanic.PointsRequired || 5,
      },
    };
    this.Condition = data.Condition || constants.healthyConstant;
    this.HealthRating = data.HealthRating || 25;
    this.CurrentHealth = data.CurrentHealth || 25;
    this.Behavior = {
      Aggresion: data.Behavior.Aggresion || false,
      Curiosity: data.Behavior.Curiosity || false,
      Discovery: data.Behavior.Discovery || false,
      Persuasion: data.Behavior.Persuasion || false,
      BattleAggression: data.Behavior.BattleAggression || false,
      MedicalUse: data.Behavior.MedicalUse || false,
      EngagementThreshold: data.Behavior.EngagementThreshold || 0,
    };
    this.Inventory = data.Inventory || [];
    this.InventoryLimit = data.InventoryLimit || 10;
    this.Holster = data.Holster || [];
    this.HolsterLimit = data.HolsterLimit || 2;
    this.Level = data.Level || 1;
    this.Experience = data.Experience || 0;
    this.ExperienceRequired = data.ExperienceRequired || 25;
    this.Armor = data.Armor || {};
    this.Missions = data.Missions || {};
    this.InCover = data.InCover || false;
    this.Ready = data.Ready || false;
    this.HasFought = data.HasFought || false;
    // this.Feats = [];
    this.Locale = {
      CurrentNation: data.Locale.CurrentNation || '',
      CurrentEstablishment: data.Locale.CurrentEstablishment || '',
      CurrentLocale: data.Locale.CurrentLocale || '',
    };
    this.Action = {
      TravelPoints: data.Action.TravelPoints || 1,
      ActionPoints: data.Action.ActionPoints || 2,
      CurrentTravelPoints: data.Action.CurrentTravelPoints || 1,
      CurrentActionPoints: data.Action.CurrentActionPoints || 2,
    };
    this.Registration = {
      isComplete: data.Registration.isComplete || false,
      Step: data.Registration.Step || 1,
    };
    this.Weapon = data.Weapon || null;
    this.Stats = {
      AssassinationsMade: data.Stats.AssassinationsMade || 0,
      BarActions: data.Stats.BarActions || 0,
      BattlesEngaged: data.Stats.BattlesEngaged || 0,
      BossesDefeated: data.Stats.BossesDefeated || 0,
      DamageDone: data.Stats.DamageDone || 0,
      DamageTaken: data.Stats.DamageTaken || 0,
      DiscoveriesFound: data.Stats.DiscoveriesFound || 0,
      ItemsLooted: data.Stats.ItemsLooted || 0,
      ItemsStolen: data.Stats.ItemsStolen || 0,
      EnemiesKilled: data.Stats.EnemiesKilled || 0,
      FeatsActivated: data.Stats.FeatsActivated || 0,
      MajorInjuries: data.Stats.MajorInjuries || 0,
      MinorInjuries: data.Stats.MinorInjuries || 0,
      Missions: data.Stats.Missions || 0,
      ObjectivesCompleted: data.Stats.ObjectivesCompleted || 0,
      ObstaclesOvercome: data.Stats.ObstaclesOvercome || 0,
      PersonsRescued: data.Stats.PersonsRescued || 0,
      PersonsKidnapped: data.Stats.PersonsKidnapped || 0,
      PersuasionChecks: data.Stats.PersuasionChecks || 0,
      PersuasionChecksPassed: data.Stats.PersuasionChecksPassed || 0,
      PreferredWeapon: data.Stats.PreferredWeapon || '',
      PistolUse: data.Stats.PistolUse || 0,
      RifleUse: data.Stats.RifleUse || 0,
      ShotgunUse: data.Stats.ShotgunUse || 0,
      SniperRifleUse: data.Stats.SniperRifleUse || 0,
      FistsUse: data.Stats.FistsUse || 0,
      MeleeWeaponUse: data.Stats.MeleeWeaponUse || 0,
      Recoveries: data.Stats.Recoveries || 0,
      SevereInjuries: data.Stats.SevereInjuries || 0,
      ShotsFired: data.Stats.ShotsFired || 0,
      ShotsMade: data.Stats.ShotsMade || 0,
      TrainingActions: data.Stats.TrainingActions || 0,
    };
    this.Currencies = data.Currencies
      ? {
          WaldishMarks: (data && data.Currencies.WaldishMarks) || 0,
          GolicGols: (data && data.Currencies.GolicGols) || 0,
        }
      : { WaldishMarks: 0, GolicGols: 0 };
    this.Mods = data.Mods
      ? {
          HasEatenToday: data.Mods.HasEatenToday || false,
          HasReadToday: data.Mods.HasReadToday || false,
          SkillUp: {
            Skill: data.Mods.SkillUp.Skill || '',
            Level: data.Mods.SkillUp.Level || 0,
          },
        }
      : {
          HasEatenToday: false,
          HasReadToday: false,
          SkillUp: { Skill: '', Level: 0 },
        };
    this.DateCreated = data.DateCreated || Date.now();
  }

  incrementAttribute(attr) {
    attr = attr.toLowerCase();
    if (attr === 'strength') {
      this.Attributes.Strength += 1;
    } else if (attr === 'dexterity') {
      this.Attributes.Dexterity += 1;
    } else if (attr === 'perception') {
      this.Attributes.Perception += 1;
    } else if (attr === 'charisma') {
      this.Attributes.Charisma += 1;
    } else if (attr === 'endurance') {
      this.Attributes.Endurance += 1;
    }
    return this;
  }

  findSkillLevel(skill) {
    skill = skill.toLowerCase();
    if (skill === 'closequarterguns') {
      return this.Proficiencies.CloseQuarterGuns.Level;
    } else if (skill === 'longrangeweapons') {
      return this.Proficiencies.LongRangeWeapons.Level;
    } else if (skill === 'meleeweapons') {
      return this.Proficiencies.MeleeWeapons.Level;
    } else if (skill === 'fisticuffs') {
      return this.Proficiencies.Fisticuffs.Level;
    } else if (skill === 'medicine') {
      return this.Proficiencies.Medicine.Level;
    } else if (skill === 'stealth') {
      return this.Proficiencies.Stealth.Level;
    } else if (skill === 'persuasion') {
      return this.Proficiencies.Persuasion.Level;
    } else if (skill === 'pickpocket') {
      return this.Proficiencies.Pickpocket.Level;
    } else if (skill === 'bartering') {
      return this.Proficiencies.Bartering.Level;
    } else if (skill === 'vehicles') {
      return this.Proficiencies.Vehicles.Level;
    } else if (skill === 'gol') {
      return this.Proficiencies.Gol.Level;
    } else if (skill === 'waldish') {
      return this.Proficiencies.Waldish.Level;
    } else if (skill === 'rubese') {
      return this.Proficiencies.Rubese.Level;
    } else if (skill === 'nordish') {
      return this.Proficiencies.Nordish.Level;
    } else if (skill === 'bregian') {
      return this.Proficiencies.Bregian.Level;
    } else if (skill === 'numorean') {
      return this.Proficiencies.Numorean.Level;
    } else if (skill === 'volkaic') {
      return this.Proficiencies.Volkaic.Level;
    } else if (skill === 'escanic') {
      return this.Proficiencies.Escanic.Level;
    } else if (skill === 'atalian') {
      return this.Proficiencies.Atalian.Level;
    }
    return;
  }

  incrementSkill(skill) {
    skill = skill.toLowerCase();
    if (skill === 'closequarterguns') {
      this.Proficiencies.CloseQuarterGuns.Level += 1;
    } else if (skill === 'longrangeweapons') {
      this.Proficiencies.LongRangeWeapons.Level += 1;
    } else if (skill === 'meleeweapons') {
      this.Proficiencies.MeleeWeapons.Level += 1;
    } else if (skill === 'fisticuffs') {
      this.Proficiencies.Fisticuffs.Level += 1;
    } else if (skill === 'medicine') {
      this.Proficiencies.Medicine.Level += 1;
    } else if (skill === 'stealth') {
      this.Proficiencies.Stealth.Level += 1;
    } else if (skill === 'persuasion') {
      this.Proficiencies.Persuasion.Level += 1;
    } else if (skill === 'pickpocket') {
      this.Proficiencies.Pickpocket.Level += 1;
    } else if (skill === 'bartering') {
      this.Proficiencies.Bartering.Level += 1;
    } else if (skill === 'vehicles') {
      this.Proficiencies.Vehicles.Level += 1;
    } else if (skill === 'gol') {
      this.Proficiencies.Gol.Level += 1;
    } else if (skill === 'waldish') {
      this.Proficiencies.Waldish.Level += 1;
    } else if (skill === 'rubese') {
      this.Proficiencies.Rubese.Level += 1;
    } else if (skill === 'nordish') {
      this.Proficiencies.Nordish.Level += 1;
    } else if (skill === 'bregian') {
      this.Proficiencies.Bregian.Level += 1;
    } else if (skill === 'numorean') {
      this.Proficiencies.Numorean.Level += 1;
    } else if (skill === 'volkaic') {
      this.Proficiencies.Volkaic.Level += 1;
    } else if (skill === 'escanic') {
      this.Proficiencies.Escanic.Level += 1;
    } else if (skill === 'atalian') {
      this.Proficiencies.Atalian.Level += 1;
    }
    return this;
  }

  incrementSkillPoints(skill, points) {
    let skillName = skill.replace(/\s/g, '').toLowerCase();
    if (skillName === 'closequarterguns') {
      this.Proficiencies.CloseQuarterGuns.Points += points;
      if (
        this.Proficiencies.CloseQuarterGuns.Points >=
        this.Proficiencies.CloseQuarterGuns.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.CloseQuarterGuns.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.CloseQuarterGuns.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.CloseQuarterGuns.Level;
      }
    } else if (skillName === 'longrangeweapons') {
      this.Proficiencies.LongRangeWeapons.Points += points;
      if (
        this.Proficiencies.LongRangeWeapons.Points >=
        this.Proficiencies.LongRangeWeapons.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.LongRangeWeapons.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.LongRangeWeapons.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.LongRangeWeapons.Level;
      }
    } else if (skillName === 'meleeweapons') {
      this.Proficiencies.MeleeWeapons.Points += points;
      if (
        this.Proficiencies.MeleeWeapons.Points >=
        this.Proficiencies.MeleeWeapons.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.MeleeWeapons.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.MeleeWeapons.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.MeleeWeapons.Level;
      }
    } else if (skillName === 'fisticuffs') {
      this.Proficiencies.Fisticuffs.Points += points;
      if (
        this.Proficiencies.Fisticuffs.Points >=
        this.Proficiencies.Fisticuffs.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Fisticuffs.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Fisticuffs.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Fisticuffs.Level;
      }
    } else if (skillName === 'medicine') {
      this.Proficiencies.Medicine.Points += points;
      if (
        this.Proficiencies.Medicine.Points >=
        this.Proficiencies.Medicine.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Medicine.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Medicine.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Medicine.Level;
      }
    } else if (skillName === 'stealth') {
      this.Proficiencies.Stealth.Points += points;
      if (
        this.Proficiencies.Stealth.Points >=
        this.Proficiencies.Stealth.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Stealth.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Stealth.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Stealth.Level;
      }
    } else if (skillName === 'persuasion') {
      this.Proficiencies.Persuasion.Points += points;
      if (
        this.Proficiencies.Persuasion.Points >=
        this.Proficiencies.Persuasion.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Persuasion.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Persuasion.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Persuasion.Level;
      }
    } else if (skillName === 'pickpocket') {
      this.Proficiencies.Pickpocket.Points += points;
      if (
        this.Proficiencies.Pickpocket.Points >=
        this.Proficiencies.Pickpocket.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Pickpocket.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Pickpocket.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Pickpocket.Level;
      }
    } else if (skillName === 'bartering') {
      this.Proficiencies.Bartering.Points += points;
      if (
        this.Proficiencies.Bartering.Points >=
        this.Proficiencies.Bartering.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Bartering.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Bartering.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Bartering.Level;
      }
    } else if (skillName === 'vehicles') {
      this.Proficiencies.Vehicles.Points += points;
      if (
        this.Proficiencies.Vehicles.Points >=
        this.Proficiencies.Vehicles.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Vehicles.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Vehicles.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Vehicles.Level;
      }
    } else if (skillName === 'gol') {
      this.Proficiencies.Gol.Points += points;
      if (
        this.Proficiencies.Gol.Points >= this.Proficiencies.Gol.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Gol.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Gol.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Gol.Level;
      }
    } else if (skillName === 'waldish') {
      this.Proficiencies.Waldish.Points += points;
      if (
        this.Proficiencies.Waldish.Points >=
        this.Proficiencies.Waldish.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Waldish.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Waldish.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Waldish.Level;
      }
    } else if (skillName === 'rubese') {
      this.Proficiencies.Rubese.Points += points;
      if (
        this.Proficiencies.Rubese.Points >=
        this.Proficiencies.Rubese.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Rubese.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Rubese.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Rubese.Level;
      }
    } else if (skillName === 'nordish') {
      this.Proficiencies.Nordish.Points += points;
      if (
        this.Proficiencies.Nordish.Points >=
        this.Proficiencies.Nordish.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Nordish.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Nordish.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Nordish.Level;
      }
    } else if (skillName === 'bregian') {
      this.Proficiencies.Bregian.Points += points;
      if (
        this.Proficiencies.Bregian.Points >=
        this.Proficiencies.Bregian.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Bregian.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Bregian.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Bregian.Level;
      }
    } else if (skillName === 'numorean') {
      this.Proficiencies.Numorean.Points += points;
      if (
        this.Proficiencies.Numorean.Points >=
        this.Proficiencies.Numorean.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Numorean.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Numorean.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Numorean.Level;
      }
    } else if (skillName === 'volkaic') {
      this.Proficiencies.Volkaic.Points += points;
      if (
        this.Proficiencies.Volkaic.Points >=
        this.Proficiencies.Volkaic.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Volkaic.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Volkaic.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Volkaic.Level;
      }
    } else if (skillName === 'escanic') {
      this.Proficiencies.Escanic.Points += points;
      if (
        this.Proficiencies.Escanic.Points >=
        this.Proficiencies.Escanic.PointsRequired
      ) {
        this.incrementSkill(skill);
        this.Proficiencies.Escanic.PointsRequired += this.incrementPointsRequired(
          this.Proficiencies.Escanic.PointsRequired
        );
        this.Mods.SkillUp.Skill = skill;
        this.Mods.SkillUp.Level = this.Mods.Proficiencies.Escanic.Level;
      }
    }
    return this;
  }

  incrementPointsRequired(points) {
    return points + Math.ceil(points * 0.1);
  }

  pointsAndBonus(name, skill, points) {
    let skillName = skill.replace(/\s/g, '').toLowerCase();
    switch (name) {
      case 'Conscript':
        if (
          skillName === 'longrangeweapons' ||
          skillName === 'closequarterguns' ||
          skillName === 'meleeweapons'
        ) {
          return points + Math.ceil(points * 0.25);
        }
        break;
      case 'Petty Criminal':
        if (skillName === 'stealth' || skillName === 'pickpocket') {
          return points + Math.ceil(points * 0.25);
        }
        break;
      case 'Merchant':
        if (skillName === 'bartering' || skillName === 'persuasion') {
          return points + Math.ceil(points * 0.25);
        }
        break;
      case 'Vagrant':
        if (skillName === 'fisticuffs') {
          return points + Math.ceil(points * 0.25);
        }
        break;
      case 'Academic':
        if (skillName === 'engineering' || skillName === 'vehicle') {
          return points + Math.ceil(points * 0.25);
        }
        break;
      case 'The Gol Republic':
        if (skillName === 'gol') return points * Math.ceil(points * 0.5);
        break;
      case ('The Walderlund', 'Friedlerin', 'Halvania'):
        if (skillName === 'waldish') return points * Math.ceil(points * 0.5);
        break;
      case 'Bregan':
        if (skillName === 'bregian') return points * Math.ceil(points * 0.5);
        break;
      case 'Rubinia':
        if (skillName === 'rubese') return points * Math.ceil(points * 0.5);
        break;
      case 'Nordank':
        if (skillName === 'nordish') return points * Math.ceil(points * 0.5);
        break;
      case 'The Volka':
        if (skillName === 'volkaic') return points * Math.ceil(points * 0.5);
        break;
      case 'Atalia':
        if (skillName === 'numorean') return points * Math.ceil(points * 0.5);
        break;
      case 'Escagon':
        if (skillName === 'escanic') return points * Math.ceil(points * 0.5);
        break;
    }
  }

  checkForPurchase(currency, cost) {
    if (currency.toLowerCase() === 'marks') {
      if (cost > this.Currencies.WaldishMarks) {
        return false;
      }
      return true;
    } else if (currency.toLowerCase() === 'gols') {
      if (cost > this.Currencies.GolicGols) {
        return false;
      }
      return true;
    }
  }

  checkInventorySpace() {
    if (this.Inventory.length < this.InventoryLimit) {
      return true;
    }
    return false;
  }

  checkHolster() {
    return this.Holster.length < this.HolsterLimit;
  }

  payForItem(currency, cost) {
    if (currency.toLowerCase() === 'marks') {
      this.Currencies.WaldishMarks -= parseInt(cost);
    } else if (currency.toLowerCase() === 'gols') {
      this.Currencies.GolicGols -= parseInt(cost);
    }
  }

  receiveMoney(currency, amount) {
    if (currency.toLowerCase() === constants.marksConstant.toLowerCase()) {
      this.Currencies.WaldishMarks += amount;
    } else if (
      currency.toLowerCase() === constants.golsConstant.toLowerCase()
    ) {
      this.Currencies.GolicGols += amount;
    }
  }

  receiveItem(item) {
    // If Item Increases Limit
    if (
      item.ItemType.toLowerCase() === constants.inventoryConstant.toLowerCase()
    ) {
      this.InventoryLimit += item.ModifierValue;
    } else if (item.ItemType.toLowerCase() === constants.weaponConstant) {
      if (this.Holster.length < this.HolsterLimit) {
        this.Holster.push(item);
      }
    } else {
      // Generic Push
      if (this.Inventory.length < this.InventoryLimit) {
        this.Inventory.push(item);
      } else {
        return;
      }
    }
  }

  useItem(item) {
    let message = '';
    // Check Item Type
    // Food
    let remove = false;
    if (item.ItemType.toLowerCase() === constants.foodConstant.toLowerCase()) {
      // Check if already eaten?
      if (!this.Mods.HasEatenToday) {
        // Add to modifier
        this.Mods.HasEatenToday = true;
        remove = true;
        this.Proficiencies[item.Modifier].Modifier += item.ModifierValue;
        message = `${item.Name} was consumed. ${this.Name}'s ${item.Modifier} modifier has increased by ${item.ModifierValue} for the day.`;
      }
    }
    // Book
    else if (
      item.ItemType.toLowerCase() === constants.bookConstant.toLowerCase()
    ) {
      // Check if already read today.
      if (!this.Mods.HasReadToday) {
        item.CurrentReadCount++;
        if (item.ReadCount === item.CurrentReadCount) {
          remove = true;
          this.incrementSkillPoints(Modifier, ModifierValue);
          message = `${this.Name} has finished reading ${item.Name} and has increased their ${item.Modifier} proficiency by ${item.ModifierValue}.`;
        } else {
          message = `${this.Name} spent some time reading ${item.Name}. It appears they still have a bit more reading left to finish the book.`;
        }
      }
      // If not, increment read counter; check off read status
      // Add Points to target Proficiency
    }

    if (remove) {
      this.Inventory = this.removeItem(item);
    }
    return this, message;
  }

  removeItem(item) {
    return this.Inventory.filter((x) => x.Id !== item.Id);
  }

  // Replenish Health
  replenishHealth() {
    this.CurrentHealth = this.HealthRating;
  }
  // Calculate Health
  calculateHealth() {
    this.HealthRating = 25 + this.Attributes.Endurance * 5;
    this.CurrentHealth = this.HealthRating;
  }

  replenishPoints() {
    this.Action.CurrentTravelPoints = this.Action.TravelPoints;
    this.Action.CurrentActionPoints = this.Action.ActionPoints;
  }

  hasEnoughActionPoints() {
    return this.Action.CurrentActionPoints > 0;
  }

  hasEnoughTravelPoints() {
    return this.Action.CurrentTravelPoints > 0;
  }

  decrementActionPoints() {
    this.Action.CurrentActionPoints--;
  }

  decrementTravelPoints() {
    this.Action.CurrentTravelPoints--;
  }

  setLocale(loc) {
    this.Locale.CurrentLocale = loc.Name;
    this.Locale.CurrentNation = loc.Country;
  }

  setLanguage(nation) {
    // For the beginning of the game only
    this.Proficiencies.Waldish.Level = 3;
    if (nation.toLowerCase() === constants.golRepublicConstant.toLowerCase()) {
      this.Proficiencies.Gol.Level = 3;
    } else if (
      nation.toLowerCase() === constants.breganConstant.toLowerCase()
    ) {
      this.Proficiencies.Bregian.Level = 3;
    } else if (
      nation.toLowerCase() === constants.ataliaConstant.toLowerCase()
    ) {
      this.Proficiencies.Numorean.Level = 3;
    } else if (
      nation.toLowerCase() === constants.rubiniaConstant.toLowerCase()
    ) {
      this.Proficiencies.Rubese.Level = 3;
    } else if (
      nation.toLowerCase() === constants.nordankConstant.toLowerCase()
    ) {
      this.Proficiencies.Nordish.Level = 3;
    } else if (nation.toLowerCase() === constants.volkaConstant.toLowerCase()) {
      this.Proficiencies.Volkaic.Level = 3;
    } else if (
      nation.toLowerCase() === constants.esgaconConstant.toLowerCase()
    ) {
      this.Proficiencies.Escanic.Level = 3;
    } else if (
      nation.toLowerCase() === constants.walderlundConstant.toLowerCase() ||
      nation.toLowerCase() === constants.friedlerinConstant.toLowerCase() ||
      nation.toLowerCase() === constants.halvaniaConstant.toLowerCase()
    ) {
      this.Proficiencies.Waldish.Level += 1;
    }
    return this;
  }

  getMostUsedWeapon() {
    const WeaponUse = [
      { Name: 'Pistol', Value: this.Stats.PistolUse },
      { Name: 'Rifle', Value: this.Stats.RifleUse },
      { Name: 'Shotgun', Value: this.Stats.ShotgunUse },
      { Name: 'Sniper Rifle', Value: this.Stats.SniperRifleUse },
      { Name: 'Fists', Value: this.Stats.FistsUse },
      { Name: 'Melee Weapons', Value: this.Stats.MeleeWeaponUse },
    ];
    let max = WeaponUse[0];
    for (let i = 0; i < WeaponUse.length; i++) {
      let curr = WeaponUse[i];
      if (curr.Value > max.Value) {
        max = curr;
      }
    }
    return max.Name;
  }

  getStarterWeapon(json) {
    for (let i = 0; i < json[Player.OriginNation].length; i++) {
      switch (Player.OriginNation.toLowerCase()) {
        case constants.walderlundConstant.toLowerCase() ||
          constants.halvaniaConstant.toLowerCase() ||
          constants.friedlerinConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.golRepublicConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.breganConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (
              json[Player.OriginNation][i].Name === '4e38 Stanley-Onfielder'
            ) {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (
              json[Player.OriginNation][i].Name === "Bregian Officer's Sword"
            ) {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === '4e42 Weister') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.rubiniaConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.nordankConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Riffel 4e27') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Nordish Rapier') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Revolver 4e') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.volkaConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Vintovka Naganta') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Pistolet Impersky 4e6') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.ataliaConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Pistola Revelli') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case constants.esgaconConstant.toLowerCase():
          if (
            Player.Profession.toLowerCase() ===
            constants.conscriptConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (
            Player.Profession.toLowerCase() ===
            constants.vagrantConstant.toLowerCase()
          ) {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        default:
          break;
      }
    }
  }
}

module.exports = Player;
