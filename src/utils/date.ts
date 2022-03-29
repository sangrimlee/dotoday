export function isToday(date: Date) {
  const today = new Date(new Date().toDateString());
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
}
