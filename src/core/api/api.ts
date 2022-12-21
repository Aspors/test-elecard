export const API_BASE = "http://contest.elecard.ru/frontend_data/";
const DATA = "catalog.json";

export default class Api {
  private static request = async (
    url: string,
    METHOD = "GET",
    body = null
  ): Promise<any> => {
    return await fetch(url, {
      method: METHOD,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  static getItems = async () =>
    await this.request(`${API_BASE}${DATA}`).then((res) => {
      if (res && !res.ok) {
        throw res;
      }
      return res.json();
    });
}
