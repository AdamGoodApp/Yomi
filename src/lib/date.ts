export const getMonth = (month: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];

    return months[month - 1];
};

export const parseDate = (timestamp: number): string => {
  const milliseconds = timestamp * 1000;
  const date = new Date(milliseconds);
  const humanDateFormat = date.toLocaleString("en-US", {month: "short", day: 'numeric', year: 'numeric'})

  return humanDateFormat;
}