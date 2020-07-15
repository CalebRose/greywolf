class Location {
  constructor(data) {
    this.Name = data.Name || '';
    this.ShortDesc = data.ShortDesc || '';
    this.Description = data.Description || '';
    this.MoreInfo = data.MoreInfo || 'It appears as there is no more info.';
    this.LocationType = data.LocationType || '';
    this.Region = data.Region || '';
    this.Country = data.Country || '';
    this.Currency = data.Currency || '';
    this.Locations = data.Locations || [];
    this.Station = data.Station || [];
    this.NearbyLocales = data.NearbyLocales || [];
  }
}

module.exports = Location;
