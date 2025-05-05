export function calculateTime(timeInMinutes: number) {
  const minutes = timeInMinutes % 60;
  const hours = Math.floor(timeInMinutes / 60);
  if (timeInMinutes < 59) return `${minutes}m`;
  if (timeInMinutes % 60 === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}
