export const splitAddress = (address) => address.split(", ").slice(1);

export const formattedMileage = (mileage) => mileage.toLocaleString("ru-RU");

export const formatId = (id) => id.slice(0, 4);

export const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
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
