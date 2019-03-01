import { Config } from 'src/app/config';

export class BuildUrl {
  private baseUrl = Config.BASE_URL;
  private v = Config.VERSION;
  private lang = Config.LANGUAGE;
  private apiKey = Config.API_KEY;

  public fromPath(path: string, qParam?: string): string {
    if (!qParam) {
      return `${this.baseUrl}/${this.v}/${path}?api_key=${this.apiKey}&language=${this.lang}`;
    }

    return `${this.baseUrl}/${this.v}/${path}?api_key=${this.apiKey}&language=${this.lang}${qParam}`;
  }
}
