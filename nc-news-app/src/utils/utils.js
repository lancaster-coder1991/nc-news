export const convertToCapitalised = (str) => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const reformatDate = (date) => {
  return date
    .toString()
    .replace(/:\d{2}\.\d{3}Z/, "")
    .replace("T", "  ");
};
