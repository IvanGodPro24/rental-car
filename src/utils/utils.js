export const splitAddress = (address) => address.split(", ").slice(1);

export const formattedMileage = (mileage) => mileage.toLocaleString("ru-RU");

export const formatId = (id) => id.slice(0, 4);
