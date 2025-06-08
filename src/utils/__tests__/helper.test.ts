import { formatDate, formatExperienceDate } from '../index';

function mockTimestamp(dateString: string | undefined) {
  return dateString
    ? { toDate: () => new Date(dateString) } as unknown as FirebaseFirestore.Timestamp
    : undefined;
}

describe('formatDate', () => {
  it('formats valid date', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('Jan 2023');
  });

  it('returns empty string for undefined', () => {
    expect(formatDate(undefined)).toBe('');
  });
});

describe('formatExperienceDate', () => {
  it('formats start and end dates', () => {
    const start = mockTimestamp('2020-06-01');
    const end = mockTimestamp('2021-06-01');
    expect(formatExperienceDate(start, end)).toBe('Jun 2020 - Jun 2021');
  });

  it('formats with no end date', () => {
    const start = mockTimestamp('2020-06-01');
    expect(formatExperienceDate(start, undefined)).toBe('Jun 2020 - Now');
  });

  it('returns "Now" when start date is undefined', () => {
    const end = mockTimestamp('2021-06-01');
    expect(formatExperienceDate(undefined, end)).toBe('Now');
  });
});
