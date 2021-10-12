// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?utm_campaign=social-buttons&utm_medium=twitter&utm_source=challenge

const testStr = '12:01:00AM';
const testStr1 = '12:01:00PM';
const testStr2 = '07:05:45PM';

function timeConversion(s) {

  const isAM = s.toUpperCase().endsWith('AM');
  const minAndsec = s.substring(2, s.length - 2);
  const hour = s.substring(0, 2);

  const militaryHour = isAM && hour == 12 ? '00'
                      : !isAM && hour == 12 ? hour
                      : isAM ? hour
                      : parseInt(hour) + 12;

  const militayTime =`${militaryHour}${minAndsec}`;

  return militayTime;
}

console.log(timeConversion(testStr2));