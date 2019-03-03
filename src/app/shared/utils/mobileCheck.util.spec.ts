import { MobileCheck } from './mobileCheck.util';

describe('MobileCheck', () => {
  it('create an instance', () => {
    expect(MobileCheck).toBeTruthy();
  });

  it('should return a boolean', () => {
    expect(typeof(MobileCheck.isMobile()) === 'boolean').toBe(true);
  });
});
