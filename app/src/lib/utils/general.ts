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

export function getTagHtml(tag: string, isDark: boolean = true): string {
  const bg = isDark ? 'bg-[var(--color-tag)]' : 'bg-[#E6E6E6]';
  return `<div><span class="inline-flex justify-center items-center rounded-full ${bg} px-4 h-8 text-sm leading-none">${tag}</span></div>`;
}

export function cover(title: string, tags: string[]): string {
  return `
      <div class="flex flex-col gap-8 items-center justify-start">
        <div class="flex w-full justify-center">
          <h2 class="w-full text-[5vw] font-instrument font-bold tracking-[0] uppercase leading-none">
            ${title}
          </h2>
        </div>
        <div class="flex flex-row justify-center items-center font-impressum gap-4">
          ${tags
            .map((tag) => getTagHtml(tag))
            .join('')}
        </div>
      </div>
      `;
}
