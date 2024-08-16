const df = new Intl.DateTimeFormat(void 0, {
  month: "short",
  year: "numeric"
});
const compareByDate = (a, b) => {
  if (!b.data.endDate && !a.data.endDate) {
    return +b.data.startDate - +a.data.startDate;
  }
  if (!b.data.endDate) {
    return 1;
  }
  if (!a.data.endDate) {
    return -1;
  }
  return +b.data.endDate - +a.data.endDate;
};

export { compareByDate as c, df as d };
