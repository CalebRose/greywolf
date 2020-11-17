class World {
  constructor(data) {
    this.CurrentLeader = data.CurrentLeader || null;
    this.HQLocale = data.HQLocale || null;
    this.Country = data.Country || null;
    this.Time = {
      Day: data.Time.Day || null,
      DayText: data.Time.DayText || null,
      Month: data.Time.Month || null,
      MonthText: data.Time.MonthText || null,
      Year: data.Time.Year || null,
      Era: data.Time.Era || null,
    };
    this.MonthData = [
      'Lunvare',
      'Vtorvare',
      'Maros',
      'Avril',
      'Maiya',
      'Junia',
      'Solvare',
      'Octav',
      'Noctember',
      'Dectember',
      'Odinver',
      'Halovare',
      'Duskare',
    ];
    this.DayData = [
      'Noctan', // 7th Day
      'Risan', // 1st Day of the Week
      'Dobran',
      'Triptan',
      'Midan',
      'Pentan',
      'Setan',
    ];
  }
  IncrementCalendar() {
    if (this.Time.Day === 28) {
      if (this.Time.Month === 13) {
        this.Time.Day = 'Zero';
        this.Time.DayText = 'Zero Day';
        this.Time.Month = 'Zero';
        this.Time.MonthText = 'Zero Day';
        this.Time.Year++;
      } else {
        this.Time.Day = 1;
        this.Time.MonthText = this.MonthData[this.Time.Month];
        this.Time.Month++;
      }
    } else if (this.Time.Day === 'Zero') {
      this.Time.MonthText = this.MonthData[0];
      this.Time.Month = 1;
      this.Time.Day = 1;
    } else {
      this.Time.Day++;
    }
    console.log('THIS DAY', this.Time.Day);
    if (this.Time.Day !== 'Zero') {
      this.Time.DayText = this.DayData[this.Time.Day % 7];
    }
  }
}

module.exports = World;
