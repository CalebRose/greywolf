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
    this.ArrivalByFoot = data.ArrivalByFoot || '';
    this.DepartureByFoot = data.DepartureByFoot || '';
    this.ArrivalByStation = data.ArrivalByStation || '';
    this.DepartureByStation = data.DepartureByStation || '';
    this.Locations = data.Locations || [];
    this.Station = data.Station || [];
    this.NearbyLocales = data.NearbyLocales || [];
  }

  getLandmark(args) {
    let arg = args.join(' ');
    let landmark;
    if (isNaN(arg)) {
      arg = arg.toLowerCase();
      landmark = this.Locations.find((loc) => {
        let name = loc.Name.toLowerCase();
        return name === arg;
      });
    } else if (!isNaN(arg)) {
      arg = parseInt(arg);
      landmark = this.Locations.find((loc) => loc.Id === arg);
    }
    return landmark;
  }

  getNearbyLocale(args) {
    let dest;
    let req;
    if (isNaN(args)) {
      req = args.toLowerCase();
      dest = this.NearbyLocales.find((loc) => {
        let name = loc.Name.toLowerCase();
        return name === req;
      });
    } else if (!isNaN(args)) {
      req = parseInt(args);
      dest = this.NearbyLocales.find((loc) => loc.Id === req);
    }
    return dest;
  }

  getStationDestination(args) {
    let dest;
    let req;
    if (isNaN(args)) {
      req = args.toLowerCase();
      dest = this.Station.find((loc) => {
        let name = loc.Name.toLowerCase();
        return name === req;
      });
    } else if (!isNaN(args)) {
      req = parseInt(args);
      dest = this.Station.find((loc) => loc.Id === req);
    }
    return dest;
  }
}

module.exports = Location;
