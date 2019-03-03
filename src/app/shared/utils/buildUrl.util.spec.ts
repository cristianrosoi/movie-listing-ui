import { Config } from './../../config';
import { BuildUrl } from './buildUrl.util';
import { ServiceUrls } from '../constants/service-urls.constant';

describe('BuildUrl', () => {
  let buildUrl: BuildUrl;

  beforeEach(() => {
    buildUrl = new BuildUrl();
  });

  it('create an instance', () => {
    expect(buildUrl).toBeTruthy();
  });

  it('should return a string', () => {
    const path = buildUrl.fromPath(ServiceUrls.NOW_PLAYING_URL, Config.PAGE);
    expect(typeof(path) === 'string').toBe(true);
  });

  it('should return an url', () => {
    const baseUrl = Config.BASE_URL;
    const v = Config.VERSION;
    const lang = Config.LANGUAGE;
    const apiKey = Config.API_KEY;

    const path = buildUrl.fromPath(ServiceUrls.NOW_PLAYING_URL, Config.PAGE);
    const returnPath = `${baseUrl}/${v}/${ServiceUrls.NOW_PLAYING_URL}?api_key=${apiKey}&language=${lang}${Config.PAGE}`;
    expect(path).toEqual(returnPath);
  });
});
