const BaseStreak = require('./BaseStreak.js');

module.exports = class Streak extends BaseStreak {
  noDays() {
    const a = this.start;
    const b = this.last;
    // console.log('a', a);
    // console.log('b', b);
    const time = Math.abs(new Date(a).getTime() - new Date(b).getTime());
    const days = Math.ceil(time / 86400000);
    // console.log('days', days);
    return days;
  }
};
