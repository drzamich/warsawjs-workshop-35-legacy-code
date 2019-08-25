module.exports = class Streak {
  constructor() {
    this.start = null;
    this.last = null;
    this.current = null;
  }

  getStart() {
    return this.start;
  }

  getLast() {
    return this.last;
  }

  setStartDate(date) {
    this.start = date;
  }

  setEndDate(date) {
    this.last = date;
  }
};
