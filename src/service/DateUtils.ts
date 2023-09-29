/*
 * DateTime String Format Used:
 * YYYY-MM-DD (e.g. 2023-09-23)
 */
export default class UtilService {
  static KR_OFFSET: number = 1000 * 60 * 60 * 9;

  private static StringifyDatetime(dateObj: Date): string {
    const result = new Date(dateObj.getTime() + this.KR_OFFSET)
      .toISOString()
      .slice(0, 10);
    return result;
  }

  static dateOffsetByDay(date: string, offset: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + offset);
    return newDate;
  }

  static getTodayDate() {
    return this.StringifyDatetime(new Date());
  }
}
