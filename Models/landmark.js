class Landmark {
  constructor(data) {
    this.Name = data.Name || '';
    this.ShortDesc = data.ShortDesc || '';
    this.Description = data.Desc || '';
    this.MoreInfo = data.MoreInfo || 'It appears as there is no more info.';
    this.LocationType = data.LocationType || '';
    this.Currency = data.Currency || '';
    this.Options = data.Options || [];
    this.StoreFeatures = data.StoreFeatures || [];
    this.EnterText = data.EnterText || '';
    this.ExitText = data.ExitText || '';
    this.Availability = data.Availability || [];
  }
}

module.exports = Landmark;
