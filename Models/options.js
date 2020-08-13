class Options {
  // Most basic option. Provides dialogue, nothing more.
  constructor(data) {
    this.Key = data.Key || null;
    this.OptionType = data.OptionType || null;
    this.Value = data.Value || null;
    this.Options = data.Options || [];
    this.Dialogue = data.Dialogue || null;
    this.EmbedName = data.EmbedName || '';
    this.IsExit = data.IsExit || false;
    this.return = data.return || false;
  }
}

class MultipleDialogue extends Options {
  constructor(data) {
    super(data);
    this.DialogueOptions = data.DialogueOptions || [];
    this.ReturnDialogue = data.ReturnDialogue || '';
  }
}

class SkillCheckOption extends Options {
  // Uses Options as a Base Class
  constructor(data) {
    //
    super(data);
    this.Skill = data.Skill || null;
    this.Requirement = data.Requirement || null;
    this.SuccessDialogue = data.SuccessDialogue || null;
    this.FailureDialogue = data.FailureDialogue || null;
    this.ExitOnFailure = data.ExitOnFailure || null;
  }
}

class TrainingOption extends Options {
  constructor(data) {
    //
    super();
    this.Skill = data.Skill || null;
    this.Cost = data.Cost || null;
    this.Points = data.Points || null;
  }
}

class ExchangeOption extends Options {
  constructor(data) {
    //
    super(data);
    this.isBuying = data.isBuying || null;
    this.Items = data.Items || [];
    this.Cost = data.Cost || null;
  }
}

module.exports = {
  MultipleDialogue: MultipleDialogue,
  ExchangeOption: ExchangeOption,
  TrainingOption: TrainingOption,
  SkillCheckOption: SkillCheckOption,
  Options: Options,
};
