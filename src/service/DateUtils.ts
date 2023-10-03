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
    return this.StringifyDatetime(newDate);
  }

  static getTodayDate() {
    return this.StringifyDatetime(new Date());
  }

  static getDateFromString(str: string) {
    const [date, time] = str.split(" ");
    // reformat string into YYYY-MM-DDTHH:mm:ss.sssZ
    str = `${date}T${time}`;
    return new Date(str);
  }

  static calculateDiff(nextDateString: string, prevDateString: string) {
    const nextDate = this.getDateFromString(nextDateString).getTime();
    const prevDate = this.getDateFromString(prevDateString).getTime();

    let diff = Math.abs((nextDate - prevDate) / 1000);
    const hours = Math.floor(diff / (60 * 60));
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;
    const seconds = Math.floor(diff);

    return {
      hours,
      minutes,
      seconds,
    };
  }
}
