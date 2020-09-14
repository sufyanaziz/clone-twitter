export const generateYear = (date_start, date_end) => {
  let years = [];
  for (let year = date_start; year <= date_end; year++) {
    years.push(year);
  }
  return years;
};

export const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const monthInYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonth = () => {
  return monthInYear;
};

export const getTime = (date) => {
  const d = new Date(date);
  const hari = d.getDate();
  const bulan = monthInYear[d.getMonth()];
  const sliceMonth = bulan.slice(0, 3);
  const fullTanggal = `${sliceMonth} ${hari}`;
  return fullTanggal;
};
