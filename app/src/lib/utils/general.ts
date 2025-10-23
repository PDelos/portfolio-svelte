import type { DateRange } from '$lib/types/common';
/**
 * Formats a Date object into a readable string
 * @param date - The date to format
 * @param format - The format style: 'short' (Jan 2024), 'long' (January 2024), 'full' (January 15, 2024)
 * @returns Formatted date string
 */
export function formatDate(
  date?: Date | 'Ongoing',
  format: 'short' | 'long' | 'full' = 'short'
): string {
  if (!date) return '';
  if (date === 'Ongoing') return date;

  const options: Intl.DateTimeFormatOptions =
    format === 'short'
      ? { month: 'short', year: 'numeric' }
      : format === 'long'
        ? { month: 'long', year: 'numeric' }
        : { month: 'long', day: 'numeric', year: 'numeric' };
  return (date as Date).toLocaleDateString('en-US', options);
}

export function formatDateRange(
  duration: DateRange,
  format: 'short' | 'long' | 'full' = 'short'
): string {
  const startDate = formatDate(duration.start, format);
  const endDate = formatDate(duration.end, format);
  if (!endDate) return startDate;
  return `${startDate} - ${endDate}`;
}
