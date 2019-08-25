const greenSpace = '\x1B[42m \x1B[0m';
const redSpace = '\x1B[41m \x1B[0m';
const graySpace = '\x1B[43m \x1B[0m';

module.exports = class DaysBar {
  constructor(from, to) {
    this.range = { from, to };
    this.dayDates = [];
  }

  addDayDate(dayDate, isChecked) {
    // TODO: investigate why replace(',', '') is needed
    this.dayDates.push([dayDate.toString().replace(',', ''), isChecked]);
  }

  generateBar() {
    let currentDayDate = this.range.from;
    let bar = '';

    while (currentDayDate.toString() <= this.range.to.toString()) {
      const curdaystring = currentDayDate.toString();
      const dayDate = this.dayDates.find((e) => e[0].toString()
                                                === curdaystring);


      if (dayDate) {
        if (dayDate[1]) {
          // use green color
          bar += greenSpace;
        } else {
          // use red color
          bar += redSpace;
        }
      } else {
        // use gray color
        bar += graySpace;
      }
      currentDayDate = currentDayDate.getNext();
    }

    return bar;
    // console.log(bar); // eslint-disable-line no-console
  }
};
