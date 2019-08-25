const genSpaces = require('../src/genSpaces.js');
const CounterBar = require('../src/CounterBar');

module.exports = class Streaks {
  constructor(streaks) {
    this.streaks = streaks;
  }

  printStreaks(max, best, last) {
    const { streaks, name } = this;
    if (best) {
      const streak = streaks
        .sort((a, b) => { if (a.noDays() < b.noDays()) { return -1; } if (a.noDays() > b.noDays()) { return 1; } return 0; })
        .pop();
      console.log(`\x1B[37;1m${name}\x1B[0m: ${genSpaces(max - name.length)}${new CounterBar(streak).getBar()}\x1B[32;1m${streak.noDays()} days\x1B[0m\x1B[37m (${streak.getStart().toString().replace(',', '')} - ${streak.last.toString().replace(',', '')})\x1B[0m`); // eslint-disable-line no-console
    }

    let currentStreak;

    if (last) {
      const lastStreak = streaks[streaks.length - 1];
      if (lastStreak) {
        if (this.isCurrent(lastStreak) === true) {
          currentStreak = streaks[streaks.length - 1];
        } else {
          currentStreak = 'none';
        }
      }

      if (currentStreak !== 'none') {
        console.log(`\x1B[37;1m${name}\x1B[0m: ${new CounterBar(currentStreak).getBar()}\x1B[32;1m${currentStreak.noDays()} days\x1B[0m\x1B[37m (since ${currentStreak.getStart().toString().replace(',', '')})\x1B[0m`); // eslint-disable-line no-console
      } else {
        console.log(`\x1B[37;1m${name}\x1B[0m: ${currentStreak}`); // eslint-disable-line no-console
      }
    }
  }


  isCurrent(streak) {
    let td = new Date('2019-08-25');
    let mon = `${td.getMonth() + 1}`;
    if (td.getMonth() < 10) mon = `0${mon}`;
    let day = td.getDate();
    if (td.getDate() < 10) day = `0${day}`;
    td = `${td.getFullYear()}-${mon}-${day}`;
    const ld = streak.last;
    if (ld.toString() === td || ld.getNext().toString() === td) {
      streak.current = true;
    } else {
      streak.current = false;
    }
    return streak.current;
  }
};
