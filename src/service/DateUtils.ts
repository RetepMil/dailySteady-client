export default class UtilService {
  static KR_OFFSET: number = 1000 * 60 * 60 * 9;

  private static StringifyDate(date: Date): string {
    const result = new Date(date.getTime() + this.KR_OFFSET)
      .toISOString()
      .slice(0, 10);
    return result;
  }

  static dateOffsetByDay(date: string, offset: number) {
    return date;
  }

  static getTodayDate() {
    return this.StringifyDate(new Date());
  }
}
