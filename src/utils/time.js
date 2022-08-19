export const calcMinuteToMilliSec = () => {
  return 60 * 1000;
}

export const calcHourToMilliSec = () => {
  return 60 * 60 * 1000;
}

export const calcDayToMilliSec = () => {
  return 24 * 60 * 60 * 1000;
}

export const toKrCurTime = (time) => {
  const utc = time.getTime() + (time.getTimezoneOffset() * calcMinuteToMilliSec());
  const KR_TIME_DIFF = 9 * calcHourToMilliSec();
  
  return new Date(utc + (KR_TIME_DIFF));
}