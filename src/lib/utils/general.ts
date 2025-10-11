/**
 * Formats a Date object into a readable string
 * @param date - The date to format
 * @param format - The format style: 'short' (Jan 2024), 'long' (January 2024), 'full' (January 15, 2024)
 * @returns Formatted date string
 */
export function formatDate(
  date: Date,
  format: 'short' | 'long' | 'full' = 'short'
): string {
  const options: Intl.DateTimeFormatOptions =
    format === 'short'
      ? { month: 'short', year: 'numeric' }
      : format === 'long'
        ? { month: 'long', year: 'numeric' }
        : { month: 'long', day: 'numeric', year: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}
