class Player {
  constructor(username, data) {
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
        Points: data.Proficiencies.CloseQuarterGuns.Points || 0,
        PointsRequired: data.Proficiencies.CloseQuarterGuns.PointsRequired || 0,
      },
      LongRangeWeapons: {
        Level: data.Proficiencies.LongRangeWeapons.Level || 1,
        Points: data.Proficiencies.LongRangeWeapons.Points || 0,
        PointsRequired: data.Proficiencies.LongRangeWeapons.PointsRequired || 0,
      },
      MeleeWeapons: {
        Level: data.Proficiencies.MeleeWeapons.Level || 1,
        Points: data.Proficiencies.MeleeWeapons.Points || 0,
        PointsRequired: data.Proficiencies.MeleeWeapons.PointsRequired || 0,
      },
      Fisticuffs: {
        Level: data.Proficiencies.Fisticuffs.Level || 1,
        Points: data.Proficiencies.Fisticuffs.Points || 0,
        PointsRequired: data.Proficiencies.Fisticuffs.PointsRequired || 0,
      },
      Engineering: {
        Level: data.Proficiencies.Engineering.Level || 1,
        Points: data.Proficiencies.Engineering.Points || 0,
        PointsRequired: data.Proficiencies.Engineering.PointsRequired || 0,
      },
      Armor: {
        Level: data.Proficiencies.Armor.Level || 1,
        Points: data.Proficiencies.Armor.Points || 0,
        PointsRequired: data.Proficiencies.Armor.PointsRequired || 0,
      },
      Medicine: {
        Level: data.Proficiencies.Medicine.Level || 1,
        Points: data.Proficiencies.Medicine.Points || 0,
        PointsRequired: data.Proficiencies.Medicine.PointsRequired || 0,
      },
      Stealth: {
        Level: data.Proficiencies.Stealth.Level || 1,
        Points: data.Proficiencies.Stealth.Points || 0,
        PointsRequired: data.Proficiencies.Stealth.PointsRequired || 0,
      },
      Persuasion: {
        Level: data.Proficiencies.Persuasion.Level || 1,
        Points: data.Proficiencies.Persuasion.Points || 0,
        PointsRequired: data.Proficiencies.Persuasion.PointsRequired || 0,
      },
      Pickpocket: {
        Level: data.Proficiencies.Pickpocket.Level || 1,
        Points: data.Proficiencies.Pickpocket.Points || 0,
        PointsRequired: data.Proficiencies.Pickpocket.PointsRequired || 0,
      },
      Bartering: {
        Level: data.Proficiencies.Bartering.Level || 1,
        Points: data.Proficiencies.Bartering.Points || 0,
        PointsRequired: data.Proficiencies.Bartering.PointsRequired || 0,
      },
      Vehicles: {
        Level: data.Proficiencies.Vehicles.Level || 1,
        Points: data.Proficiencies.Vehicles.Points || 0,
        PointsRequired: data.Proficiencies.Vehicles.PointsRequired || 0,
      },
      Gol: {
        Level: data.Proficiencies.Gol.Level || 1,
        Points: data.Proficiencies.Gol.Points || 0,
        PointsRequired: data.Proficiencies.Gol.PointsRequired || 0,
      },
      Waldish: {
        Level: data.Proficiencies.Waldish.Level || 1,
        Points: data.Proficiencies.Waldish.Points || 0,
        PointsRequired: data.Proficiencies.Waldish.PointsRequired || 0,
      },
      Rubese: {
        Level: data.Proficiencies.Rubese.Level || 1,
        Points: data.Proficiencies.Rubese.Points || 0,
        PointsRequired: data.Proficiencies.Rubese.PointsRequired || 0,
      },
      Nordish: {
        Level: data.Proficiencies.Nordish.Level || 1,
        Points: data.Proficiencies.Nordish.Points || 0,
        PointsRequired: data.Proficiencies.Nordish.PointsRequired || 0,
      },
      Bregian: {
        Level: data.Proficiencies.Bregian.Level || 1,
        Points: data.Proficiencies.Bregian.Points || 0,
        PointsRequired: data.Proficiencies.Bregian.PointsRequired || 0,
      },
      Numorean: {
        Level: data.Proficiencies.Numorean.Level || 1,
        Points: data.Proficiencies.Numorean.Points || 0,
        PointsRequired: data.Proficiencies.Numorean.PointsRequired || 0,
      },
      Volkaic: {
        Level: data.Proficiencies.Volkaic.Level || 1,
        Points: data.Proficiencies.Volkaic.Points || 0,
        PointsRequired: data.Proficiencies.Volkaic.PointsRequired || 0,
      },
      Escanic: {
        Level: data.Proficiencies.Escanic.Level || 1,
        Points: data.Proficiencies.Escanic.Points || 0,
        PointsRequired: data.Proficiencies.Escanic.PointsRequired || 0,
      },
    };
    this.Condition = data.Condition || 'Healthy';
    this.HealthRating = data.HealthRating || 0;
    this.CurrentHealth = data.CurrentHealth || 0;
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
    }
    return this;
  }
  setLanguage(nation) {
    // For the beginning of the game only
    this.Proficiencies.Waldish.Level = 3;
    if (nation === 'The Gol Republic') {
      this.Proficiencies.Gol.Level = 3;
    } else if (nation === 'Bregan') {
      this.Proficiencies.Bregian.Level = 3;
    } else if (nation === 'Atalia') {
      this.Proficiencies.Numorean.Level = 3;
    } else if (nation === 'Rubinia') {
      this.Proficiencies.Rubese.Level = 3;
    } else if (nation === 'Nordank') {
      this.Proficiencies.Nordish.Level = 3;
    } else if (nation === 'The Volka') {
      this.Proficiencies.Volkaic.Level = 3;
    } else if (nation === 'Escagon') {
      this.Proficiencies.Escanic.Level = 3;
    } else if (
      nation === 'The Walderlund' ||
      nation === 'Friedlerin' ||
      nation === 'Halvania'
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
      switch (Player.OriginNation) {
        case 'The Walderlund' || 'Halvania' || 'Friedlerin':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'The Gol Republic':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'Bregan':
          if (Player.Profession === 'Conscript') {
            if (
              json[Player.OriginNation][i].Name === '4e38 Stanley-Onfielder'
            ) {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
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
        case 'Rubinia':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Rauber 4e32') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'Nordank':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Riffel 4e27') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === 'Nordish Rapier') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Revolver 4e') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'The Volka':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Vintovka Naganta') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Pistolet Impersky 4e6') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'Atalia':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === 'Berufene Rifle') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
            if (json[Player.OriginNation][i].Name === 'Derdarich Halberd') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else {
            if (json[Player.OriginNation][i].Name === 'Pistola Revelli') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          }
          break;
        case 'Escagon':
          if (Player.Profession === 'Conscript') {
            if (json[Player.OriginNation][i].Name === '') {
              Player.Weapon = json[Player.OriginNation][i];
            }
          } else if (Player.Profession === 'Vagrant') {
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
