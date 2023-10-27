export default function formatDate(inputDateString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = months[inputDate.getMonth()];
  const day = inputDate.getDate();

  const formattedDateString = `${month} ${day
    .toString()
    .padStart(2, "0")}, ${year}`;

  return formattedDateString;
}
