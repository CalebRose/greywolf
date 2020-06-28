class World {
  constructor(data) {
    this.CurrentLeader = data.CurrentLeader;
    this.HQLocale = data.HQLocale;
    this.Country = data.Country;
    this.Time = {
      Day: data.Time.Day,
      DayText: data.Time.DayText,
      Month: data.Time.Month,
      MonthText: data.Time.MonthText,
      Year: data.Time.Year,
      Era: data.Time.Era,
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
      'Nocta', // 7th Day
      'Risa', // 1st Day of the Week
      'Dobra',
      'Tripta',
      'Mida',
      'Penta',
      'Seta',
    ];
  }
  IncrementCalendar() {
    if (this.Time.Day === 28) {
      if (this.Time.Month === 13) {
        this.Time.Day = 0;
        this.Time.Month = 0;
        this.Time.MonthText = 'Zero Day';
        this.Time.Year++;
      } else {
        this.Time.Day = 1;
        this.Time.MonthText = this.MonthData[this.Time.Month];
        this.Time.Month++;
      }
    } else if (this.Time.Day === 0) {
      this.Time.MonthText = this.MonthData[this.Time.Month];
      this.Time.Month = 1;
      this.Time.Day++;
    } else {
      this.Time.Day++;
    }
    this.Time.DayText = this.DayData[this.Time.Day % 7];
  }
}
