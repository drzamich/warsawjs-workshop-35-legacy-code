const DaysBar = require('./DaysBar');
const DayDate = require('./DayDate');

const greenSpace = '\x1B[42m \x1B[0m';
const redSpace = '\x1B[41m \x1B[0m';
const graySpace = '\x1B[43m \x1B[0m';

describe('DaysBar', () => {
  describe('for some checked and unchecked days', () => {
    test('returns proper bar', () => {
      const startDayDate = new DayDate('2019-08-10');
      const endDayDate = new DayDate('2019-08-13');
      const daysBar = new DaysBar(startDayDate, endDayDate);

      daysBar.addDayDate(new DayDate('2019-08-10'), true);
      daysBar.addDayDate(new DayDate('2019-08-11'), false);
      daysBar.addDayDate(new DayDate('2019-08-13'), false);

      expect(daysBar.generateBar()).toEqual(`${greenSpace}${redSpace}${graySpace}${redSpace}`);
    });
  });
});
