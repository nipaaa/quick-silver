export const formateDate = (dateString) => {
  const inputDate = new Date(dateString);
  const formattedDate = inputDate.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
};
