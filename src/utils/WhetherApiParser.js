import $ from 'jquery';

class WhetherInfo {
  constructor() {
    this.taMax = null;
    this.taMin = null;
    this.precipitationMax = null;
    this.taSumAndCount = {
      "sum" : 0.0, 
      "count" : 0
    };
    this.wsSumAndCount = {
      "sum" : 0.0, 
      "count" : 0
    };
    this.hmSumAndCount = {
      "sum" : 0.0, 
      "count" : 0
    };
    this.precipitation = {
      "max" : null,
      "notRainCount" : 0,
      "lightRainCount" : 0,
      "moderateRainCount" : 0,
      "heavyRainCount" : 0
    };
    this.cloud = {
      "sunnyCount" : 0,
      "fewCloudsCount" : 0,
      "cloudyCount" : 0,
    }
  }

  toString() {
    return `
      taMax : ${this.taMax}
      taMin : ${this.taMin}
      precipitationMax : ${this.precipitationMax}
      preciptation-max : ${this.precipitation.max}
      notRainCount : ${this.precipitation.notRainCount}
      lightRainCount : ${this.precipitation.lightRainCount}
      moderateRainCount : ${this.precipitation.moderateRainCount} 
      heavyRainCount : ${this.precipitation.heavyRainCount}
      taSum : ${this.taSumAndCount.sum}
      taCount : ${this.taSumAndCount.count}
      wsSum : ${this.wsSumAndCount.sum}
      wsCount : ${this.wsSumAndCount.count}
      hmSum : ${this.hmSumAndCount.sum}
      hmCount : ${this.hmSumAndCount.count}
      sunnyCount : ${this.cloud.sunnyCount}
      fewCloudsCount : ${this.cloud.fewCloudsCount}
      cloudyCount : ${this.cloud.cloudyCount}
    `
  }

  getCapsule() {
    var output = "";
    var mainCloud = [0, "맑음", "맑고 "];
    var mainCloudCount = this.cloud.sunnyCount;
    var totalCloudCount = this.cloud.sunnyCount + this.cloud.fewCloudsCount + this.cloud.cloudyCount;
    if(this.cloud.fewCloudsCount >= mainCloudCount) {
      mainCloud = [1, "구름 많음", "구름 많고 "]
      mainCloudCount = this.cloud.fewCloudsCount;
    }
    if(this.cloud.cloudyCount >= mainCloudCount) {
      mainCloud = [2, "흐림", "흐리고 "]
      mainCloudCount = this.cloud.cloudyCount;
    }

    if(mainCloudCount / totalCloudCount < 0.7) {
      output += "대체로 ";
    }

    var noRainCount = this.precipitation.notRainCount;
    var mainRain = [0, "약한 비"];
    var mainRainCount = this.precipitation.lightRainCount;
    var totalRainCount = this.precipitation.notRainCount + this.precipitation.lightRainCount + this.precipitation.moderateRainCount + this.precipitation.heavyRainCount;
    if(this.precipitation.moderateRainCount >= mainRainCount) {
      mainRain = [1, "비"];
      mainRainCount = this.precipitation.moderateRainCount;
    }
    if(this.precipitation.heavyRainCount >= mainRainCount) {
      mainRain = [2, "강한 비"];
      mainRainCount = this.precipitation.heavyRainCount;
    }

    if(totalRainCount == 0) {
      output += mainCloud[1];
    } else if(noRainCount / totalRainCount >= 1) {
      output += mainCloud[1];
    } else if(noRainCount / totalRainCount > 0.7) {
      output += mainCloud[2];
      output += "일시적으로 ";
      output += mainRain[1];
    } else if(noRainCount / totalRainCount >= 0) {
      output += mainCloud[2];
      output += mainRain[1];
    }
    return output;
  }

  toJson() {
    return {
      "taMax" : this.taMax,
      "taMin" : this.taMin,
      "precipitationMax" : this.precipitationMax,
      "taAvg" : (this.taSumAndCount.sum / this.taSumAndCount.count).toFixed(1),
      "wsAvg" : this.wsSumAndCount.count == 0 ? null : (this.wsSumAndCount.sum / this.wsSumAndCount.count).toFixed(1),
      "hmAvg" : this.hmSumAndCount.count == 0 ? null : (this.hmSumAndCount.sum / this.hmSumAndCount.count).toFixed(1),
      "capsule" : this.getCapsule(),
    }
  }
}

class ShortForecastApi {
  baseUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  serviceKey = "iffyabM8wHi3iRgrODfoBtqnqCVePvR2IQ4n36bRgzwgh8bSGcm9m%2Bg%2BbW2AXPmfo8urYo3gH9BPxarKlRR61A%3D%3D";

  constructor(baseDate, baseTime, nx, ny) {
    this.numOfRows = 1000;
    this.pageNo = 1;
    this.baseDate = baseDate;
    this.baseTime = baseTime;
    this.nx = nx;
    this.ny = ny;
  }

  static createNewApi(dateTime, longitude, latitude) {
    var roughBaseTime = new Date(dateTime.getTime() - calcHourToMilliSec());
    var baseDateAndTimeCode = ShortForecastApi.getBaseDateAndTimeCodeByDateTime(roughBaseTime);
    var nxAndNy = ShortForecastApi.getNxAndNyByLongitudeAndLatitude(longitude, latitude);
    console.log(`단기 예보 (nx, ny) : (${nxAndNy[0]}, ${nxAndNy[1]})`);
    return new ShortForecastApi(baseDateAndTimeCode[0], baseDateAndTimeCode[1], nxAndNy[0], nxAndNy[1]);
  }

  static getBaseDateAndTimeCodeByDateTime(dateTime) {
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    var baseDate = `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}`;
    if(hour < 2) {
      dateTime = new Date(dateTime.getTime() - (24 * 60 * 60 * 1000))
      year = dateTime.getFullYear();
      month = dateTime.getMonth() + 1;
      date = dateTime.getDate();
      baseDate = `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}`;
      return [baseDate, "2300"];
    } else if(hour < 5) return [baseDate, "0200"];
    else if(hour < 8) return [baseDate, "0500"];
    else if(hour < 11) return [baseDate, "0800"];
    else if(hour < 14) return [baseDate, "1100"];
    else if(hour < 17) return [baseDate, "1400"];
    else if(hour < 20) return [baseDate, "1700"];
    else if(hour < 23) return [baseDate, "2000"];
    else return [baseDate, "2300"];
  }

  static getNxAndNyByLongitudeAndLatitude(longitude, latitude) {
    // TODO
    return [55, 127];
  }

  getUrl() {
    return `${this.baseUrl}?serviceKey=${this.serviceKey}&numOfRows=${this.numOfRows}&pageNo=${this.pageNo}&base_date=${this.baseDate}&base_time=${this.baseTime}&nx=${this.nx}&ny=${this.ny}&dataType=Json`;
  }
}

class MidTaForecastApi {
  baseUrl = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa";
  serviceKey = "iffyabM8wHi3iRgrODfoBtqnqCVePvR2IQ4n36bRgzwgh8bSGcm9m%2Bg%2BbW2AXPmfo8urYo3gH9BPxarKlRR61A%3D%3D";

  constructor(annTime ,regId) {
    this.numOfRows = 10;
    this.pageNo = 1;
    this.annTime = annTime;
    this.regId = regId;
  }

  static createNewApi(longitude, latitude) {
    var AnnTimeCode = MidTaForecastApi.getAnnTimeCodeByDateTime(toKrCurTime(new Date()));
    var regId = MidTaForecastApi.getRegIdByLongitudeAndLatitude(longitude, latitude);
    console.log(`중기 예보(기온) regId : ${regId}`);
    return new MidTaForecastApi(AnnTimeCode, regId);
  }

  static getAnnTimeCodeByDateTime(dateTime) {
    dateTime = MidTaForecastApi.getAnnTimeByDateTime(dateTime);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    return `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}${hour >= 10 ? hour : "0" + hour}00`;
  }

  static getAnnTimeByDateTime(dateTime) {
    var hour = dateTime.getHours();
    if(hour < 7) {
      dateTime = new Date(dateTime.getTime() - (24 * 60 * 60 * 1000));
      dateTime.setHours(18);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    } else if(hour < 19) {
      dateTime.setHours(6);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    } else {
      dateTime.setHours(18);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    }
    return dateTime;
  }

  static getRegIdByLongitudeAndLatitude(longitude, latitude) {
    // TODO
    return "11B10101";
  }

  getUrl() {
    return `${this.baseUrl}?serviceKey=${this.serviceKey}&numOfRows=${this.numOfRows}&pageNo=${this.pageNo}&regId=${this.regId}&tmFc=${this.annTime}&dataType=Json`;
  }
}

class MidRnForecastApi {
  baseUrl = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst";
  serviceKey = "iffyabM8wHi3iRgrODfoBtqnqCVePvR2IQ4n36bRgzwgh8bSGcm9m%2Bg%2BbW2AXPmfo8urYo3gH9BPxarKlRR61A%3D%3D";

  constructor(annTime ,regId) {
    this.numOfRows = 10;
    this.pageNo = 1;
    this.annTime = annTime;
    this.regId = regId;
  }

  static createNewApi(dateTime, longitude, latitude) {
    var AnnTimeCode = MidRnForecastApi.getAnnTimeCodeByDateTime(toKrCurTime(new Date()));
    var regId = MidRnForecastApi.getRegIdByLongitudeAndLatitude(longitude, latitude);
    console.log(`중기 예보(강수) regId : ${regId}`);
    return new MidRnForecastApi(AnnTimeCode, regId);
  }

  static getAnnTimeCodeByDateTime(dateTime) {
    dateTime = MidRnForecastApi.getAnnTimeByDateTime(dateTime);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    return `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}${hour >= 10 ? hour : "0" + hour}00`;
  }

  static getAnnTimeByDateTime(dateTime) {
    var hour = dateTime.getHours();
    if(hour < 7) {
      dateTime = new Date(dateTime.getTime() - (24 * 60 * 60 * 1000));
      dateTime.setHours(18);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    } else if(hour < 19) {
      dateTime.setHours(6);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    } else {
      dateTime.setHours(18);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    }
    return dateTime;
  }

  static getRegIdByLongitudeAndLatitude(longitude, latitude) {
    // TODO
    return "11B00000";
  }
  
  getUrl() {
    return `${this.baseUrl}?serviceKey=${this.serviceKey}&numOfRows=${this.numOfRows}&pageNo=${this.pageNo}&regId=${this.regId}&tmFc=${this.annTime}&dataType=Json`;
  }
}

class WhetherObserveApi {
  baseUrl = "http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList";
  serviceKey = "iffyabM8wHi3iRgrODfoBtqnqCVePvR2IQ4n36bRgzwgh8bSGcm9m%2Bg%2BbW2AXPmfo8urYo3gH9BPxarKlRR61A%3D%3D";

  constructor(startDt, startHh, endDt, endHh, regId) {
    this.numOfRows = 100;
    this.pageNo = 1;
    this.startDt = startDt;
    this.startHh = startHh;
    this.endDt = endDt;
    this.endHh = endHh;
    this.regId = regId;
  }
  
  static createNewApi(startDateTime, endDateTime, longitude, latitude) {
    var startDateAndTimeCode = WhetherObserveApi.getStartDateAndTimeCodeByDateTime(startDateTime);
    var endDateAndTimeCode = WhetherObserveApi.getEndDateAndTimeCodeByDateTime(endDateTime);
    var regId = WhetherObserveApi.getRegIdByLongitudeAndLatitude(longitude, latitude);
    console.log("지상(종관, ASOS) 시간자료 조회서비스 regId : ", regId);
    return new WhetherObserveApi(startDateAndTimeCode[0], startDateAndTimeCode[1], endDateAndTimeCode[0], endDateAndTimeCode[1], regId);
  }

  static getRegIdByLongitudeAndLatitude(longitude, latitude) {
    // TODO
    return "108";
  }

  
  static getStartDateAndTimeCodeByDateTime(dateTime) {
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours(); // 내림
    var baseDate = `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}`;
    var baseTime = `${hour >= 10 ? hour : "0" + hour}`
    return [baseDate, baseTime];
  }

  static getEndDateAndTimeCodeByDateTime(dateTime) {
    if(dateTime.getMinutes() != 0) { // 올림
      dateTime += new Date(dateTime.getTime() + calcHourToMilliSec());
      dateTime.setMinutes(0);
    }
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    var baseDate = `${year}${month >= 10 ? month : "0" + month}${date >= 10 ? date : "0" + date}`;
    var baseTime = `${hour >= 10 ? hour : "0" + hour}`

    return [baseDate, baseTime];
  }

  getUrl() {
    return `${this.baseUrl}?serviceKey=${this.serviceKey}&numOfRows=${this.numOfRows}&pageNo=${this.pageNo}&startDt=${this.startDt}&startHh=${this.startHh}&endDt=${this.endDt}&endHh=${this.endHh}&stnIds=${this.regId}&dataType=Json&dataCd=ASOS&dateCd=HR`;
  }
}

function getRequest(url) {
  return new Request(url, {
    method: 'GET',
  })
}

function getAjaxRequet(url, onSuccess) {
  return {
    url: url,
    type: 'GET',
    cache: false,
    async: false,
    success: onSuccess,
    error:function(request,status,error){
        alert("다시 시도해주세요.\n" + "code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    }
  }
}

function calcMinuteToMilliSec() {
  return 60 * 1000;
}

function calcHourToMilliSec() {
  return 60 * 60 * 1000;
}

function calcDayToMilliSec() {
  return 24 * 60 * 60 * 1000;
}

function calcDateTimeToMinuteInDay(dateTime) {
  return dateTime.getHours() * 60 + dateTime.getMinutes();
}

function toKrCurTime(time) {
  const utc = time.getTime() + (time.getTimezoneOffset() * calcMinuteToMilliSec());
  const KR_TIME_DIFF = 9 * calcHourToMilliSec();
  
  return new Date(utc + (KR_TIME_DIFF));
}

function nextShortFcstTime(dateTime) {
  var hour = dateTime.getHours();
  var output = new Date(dateTime.getTime());
  output.setMinutes(0);
  output.setSeconds(0);
  output.setMilliseconds(0);

  if(hour < 3) output.setHours(3);
  else if(hour < 6) output.setHours(6);
  else if(hour < 9) output.setHours(9);
  else if(hour < 12) output.setHours(12);
  else if(hour < 15) output.setHours(15);
  else if(hour < 18) output.setHours(18);
  else if(hour < 21) output.setHours(21);
  else {
    output = new Date(output.getTime() + calcDayToMilliSec())
    output.setHours(0);
  }
  return output;
}

function recentShortForecastFirstFcstTime() {
  let curTime = toKrCurTime(new Date());
  let curTimeToMinuteInDay = calcDateTimeToMinuteInDay(curTime);
  var output = new Date(curTime.getTime());
  output.setMinutes(0);
  output.setSeconds(0);
  output.setMilliseconds(0);

  if(curTimeToMinuteInDay < 2 * 60 + 20) output.setHours(0);
  else if(curTimeToMinuteInDay < 5 * 60 + 20) output.setHours(3);
  else if(curTimeToMinuteInDay < 8 * 60 + 20) output.setHours(6);
  else if(curTimeToMinuteInDay < 11 * 60 + 20) output.setHours(9);
  else if(curTimeToMinuteInDay < 14 * 60 + 20) output.setHours(12);
  else if(curTimeToMinuteInDay < 17 * 60 + 20) output.setHours(15);
  else if(curTimeToMinuteInDay < 20 * 60 + 20) output.setHours(18);
  else if(curTimeToMinuteInDay < 23 * 60 + 20) output.setHours(21);
  else {
    output = new Date(output.getTime() + calcDayToMilliSec())
    output.setHours(0);
  }

  return output;
}

// Boundary까지는 미포함
function getWhetherObserveBoundary() {
  let curTime = toKrCurTime(new Date());

  // 현재시간이 11시 10분 이후 일때
  // because 11시에 전일 자료가 업로드 됨
  if(calcDateTimeToMinuteInDay(curTime) >= 11 * 60 + 10) { 
    let today = new Date(curTime.getTime());
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return today.getTime();
  } else {
    let yesterday = new Date(curTime.getTime()-calcDayToMilliSec());
    yesterday.setHours(0);
    yesterday.setMinutes(0);
    yesterday.setSeconds(0);
    yesterday.setMilliseconds(0);
    return yesterday.getTime();
  }
}

function getShortForecastBoundary() {
  let curTime = toKrCurTime(new Date());

  // 현재시간이 17 10분 이후 일때
  // because 17시에 새로운 자료가 생김
  if(calcDateTimeToMinuteInDay(curTime) >= 17 * 60 + 20) {
    let fourDaysLater = new Date(curTime.getTime() + 4 * calcDayToMilliSec());
    fourDaysLater.setHours(1);
    fourDaysLater.setMinutes(0);
    fourDaysLater.setSeconds(0);
    fourDaysLater.setMilliseconds(0);
    return fourDaysLater.getTime();
  } else {
    let threeDaysLater = new Date(curTime.getTime() + 3 * calcDayToMilliSec());
    threeDaysLater.setHours(1);
    threeDaysLater.setMinutes(0);
    threeDaysLater.setSeconds(0);
    threeDaysLater.setMilliseconds(0);
    return threeDaysLater.getTime();
  }
}

function getMidForecastBoundary() {
  let curTime = toKrCurTime(new Date());
  let elevenDaysLater = new Date(curTime.getTime() + 11 * calcDayToMilliSec());
  elevenDaysLater.setHours(0);
  elevenDaysLater.setMinutes(0);
  elevenDaysLater.setSeconds(0);
  elevenDaysLater.setMilliseconds(0);
  return elevenDaysLater.getTime();
}

function getWhetherInfo(startTime, endTime, longitude, latitude) {
  let whetherObserveBoundary = getWhetherObserveBoundary();
  let shortForecastBoundary = getShortForecastBoundary();
  let midForecastBoundary = getMidForecastBoundary();
  let startTimestamp;
  let endTimestamp;

  console.log("longitude : ", longitude);
  console.log("latitude : ", latitude);
  console.log(`기상 관측은 ${new Date(whetherObserveBoundary)}까지`);
  console.log(`단기 예보는 ${new Date(shortForecastBoundary)}까지`);
  console.log(`중기 예보는 ${new Date(midForecastBoundary)}까지`);
  
  startTime = toKrCurTime(startTime);
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  startTime.setMilliseconds(0);
  startTimestamp = startTime.getTime();

  endTime = toKrCurTime(endTime);
  endTime = new Date(endTime.getTime() + calcHourToMilliSec());
  endTime.setMinutes(0);
  endTime.setSeconds(0);
  endTime.setMilliseconds(0);
  endTimestamp = endTime.getTime();

  var tmpTimestamp = startTimestamp;
  var api;
  var whetherInfo = new WhetherInfo();
  
  if(endTimestamp > midForecastBoundary) {
    //TODO Exception handle
  }
  while(tmpTimestamp < endTimestamp) {
    if(tmpTimestamp < whetherObserveBoundary) {
      if(endTimestamp < whetherObserveBoundary) {
        api = WhetherObserveApi.createNewApi(new Date(tmpTimestamp), new Date(endTimestamp), longitude, latitude);
        $.ajax(getAjaxRequet(api.getUrl(), function(data) {
          var response =  data.response;
          processWhetherObserveApiResponse(response, whetherInfo);
        }));
        tmpTimestamp = endTimestamp;
      } else {
        api = WhetherObserveApi.createNewApi(new Date(tmpTimestamp), new Date(whetherObserveBoundary - calcHourToMilliSec()), longitude, latitude);
        $.ajax(getAjaxRequet(api.getUrl(), function(data) {
          var response =  data.response;
          processWhetherObserveApiResponse(response, whetherInfo);
        }));
        tmpTimestamp = whetherObserveBoundary;
      }
    } else if(tmpTimestamp < shortForecastBoundary) {
      if(tmpTimestamp < recentShortForecastFirstFcstTime().getTime()) {
        api = ShortForecastApi.createNewApi(new Date(tmpTimestamp), longitude, latitude);
        $.ajax(getAjaxRequet(api.getUrl(), function(data) {
          var response = data.response;
          processAllShortForecastApiResponse(response, whetherInfo, new Date(tmpTimestamp), nextShortFcstTime(new Date(tmpTimestamp)));
        }));
        tmpTimestamp = nextShortFcstTime(new Date(tmpTimestamp)).getTime();
      } else {
        api = ShortForecastApi.createNewApi(recentShortForecastFirstFcstTime(), longitude, latitude);
        if(endTimestamp < shortForecastBoundary) {
          $.ajax(getAjaxRequet(api.getUrl(), function(data) {
            var response =  data.response;
            processAllShortForecastApiResponse(response, whetherInfo, new Date(tmpTimestamp), new Date(endTimestamp));
          }));
          tmpTimestamp = endTimestamp;
        } else {
          $.ajax(getAjaxRequet(api.getUrl(), function(data) {
            var response =  data.response;
            processAllShortForecastApiResponse(response, whetherInfo, new Date(tmpTimestamp), new Date(shortForecastBoundary));
          }));
          tmpTimestamp = shortForecastBoundary;
        }
      }
    } else {
      api = MidTaForecastApi.createNewApi(new Date(tmpTimestamp), longitude, latitude);
      $.ajax(getAjaxRequet(api.getUrl(), function(data) {
        var response =  data.response;
        processMidTaForecastApiResponse(response, whetherInfo, MidTaForecastApi.getAnnTimeByDateTime(toKrCurTime(new Date())), new Date(tmpTimestamp), new Date(endTimestamp));
      }));

      api = MidRnForecastApi.createNewApi(new Date(tmpTimestamp), longitude, latitude);
      $.ajax(getAjaxRequet(api.getUrl(), function(data) {
        var response =  data.response;
        processMidRnForecastApiResponse(response, whetherInfo, MidRnForecastApi.getAnnTimeByDateTime(toKrCurTime(new Date())), new Date(tmpTimestamp), new Date(endTimestamp));
      }));

      tmpTimestamp = endTimestamp;
    }  
  }
  console.log(whetherInfo.toString());
  return whetherInfo.toJson();
}

function processWhetherObserveApiResponse(response, target) {
  var responseItemList =  response.body.items.item;
  for(var i = 0; i < responseItemList.length; i++) {
    var responseItem = responseItemList[i];
    if(responseItem.taQcflg == "") {
      var taTmp = parseFloat(responseItem.ta);
      target.taSumAndCount["sum"] += taTmp;
      target.taSumAndCount["count"] += 1;
      if(target.taMax == null || taTmp > target.taMax) {
        target.taMax = taTmp;
      }
      if(target.taMin == null || taTmp < target.taMin) {
        target.taMin = taTmp;
      }
    }
    console.log("responseItem.rnQcflg : " + responseItem.rnQcflg);
    if(responseItem.rnQcflg == "") {
      console.log("responseItem.rn : " + responseItem.rn);
      var rnTmp = (responseItem.rn == "") ? 0.0 : parseFloat(responseItem.rn);
      if(target.precipitationMax == null || rnTmp > target.precipitationMax) {
        target.precipitationMax = rnTmp;
      }
      if(target.precipitation["max"] == null || rnTmp > target.precipitation["max"]) {
        target.precipitation["max"] = rnTmp;
      }
      if(rnTmp == 0.0) {
        target.precipitation["notRainCount"] += 1;
      } else if(rnTmp < 2.5) {
        target.precipitation["lightRainCount"] += 1;
      } else if(rnTmp < 7.5) {
        target.precipitation["moderateRainCount"] += 1;
      } else if(rnTmp > 0.0) {
        target.precipitation["heavyRainCount"] += 1;
      }
    }
    if(responseItem.wsQcflg == "") {
      var wsTmp = parseFloat(responseItem.ws);
      target.wsSumAndCount["sum"] += wsTmp;
      target.wsSumAndCount["count"] += 1;
    }
    if(responseItem.hmQcflg == "") {
      var hmTmp = parseFloat(responseItem.hm);
      target.hmSumAndCount["sum"] += hmTmp;
      target.hmSumAndCount["count"] += 1;
    }
    
    var cloudCover = parseInt(responseItem.dc10Tca);
    if(cloudCover < 3) {
      target.cloud["sunnyCount"] += 1;
    } else if(cloudCover < 8) {
      target.cloud["fewCloudsCount"] += 1;
    } else if(cloudCover <= 10) {
      target.cloud["cloudyCount"] += 1;
    }
  }
}

function processAllShortForecastApiResponse(response, target, startTime, endTime) {
  var responseItemList =  response.body.items.item;
  var startFcstDate = startTime.getFullYear() * 100 * 100 + (startTime.getMonth() + 1) * 100 + startTime.getDate();
  var startFcstTime = startTime.getHours() * 100;

  if(endTime.getTime() % calcHourToMilliSec() == 0) {
    endTime = new Date(endTime.getTime() - calcHourToMilliSec());
  }
  var endFcstDate = endTime.getFullYear() * 100 * 100 + (endTime.getMonth() + 1) * 100 + endTime.getDate();
  var endFcstTime = endTime.getHours() * 100;

  for(var i = 0; i < responseItemList.length; i++) {
    var responseItem = responseItemList[i];
    if(parseInt(responseItem.fcstDate) * 100 * 100 + parseInt(responseItem.fcstTime) < startFcstDate * 100 * 100 + startFcstTime) {
      continue;
    } else if(parseInt(responseItem.fcstDate) * 100 * 100 + parseInt(responseItem.fcstTime) > endFcstDate * 100 * 100 + endFcstTime) {
      break;
    }
    
    if(responseItem.category == "TMP") {
      var taTmp = parseFloat(responseItem.fcstValue);
      target.taSumAndCount["sum"] += taTmp;
      target.taSumAndCount["count"] += 1;
      if(target.taMax == null || taTmp > target.taMax) {
        target.taMax = taTmp;
      }
      if(target.taMin == null || taTmp < target.taMin) {
        target.taMin = taTmp;
      }
    } else if(responseItem.category == "PCP") {
      var rnTmp = isNaN(responseItem.fcstValue) ? 0.0 : parseFloat(responseItem.fcstValue);
      if(target.precipitationMax == null || rnTmp > target.precipitationMax) {
        target.precipitationMax = rnTmp;
      }
      if(target.precipitation["max"] == null || rnTmp > target.precipitation["max"]) {
        target.precipitation["max"] = rnTmp;
      }
      if(rnTmp == 0.0) {
        target.precipitation["notRainCount"] += 1;
      } else if(rnTmp < 2.5) {
        target.precipitation["lightRainCount"] += 1;
      } else if(rnTmp < 7.5) {
        target.precipitation["moderateRainCount"] += 1;
      } else if(rnTmp > 0.0) {
        target.precipitation["heavyRainCount"] += 1;
      }
    } else if(responseItem.category == "WSD") {
      var wsTmp = parseFloat(responseItem.fcstValue);
      target.wsSumAndCount["sum"] += wsTmp;
      target.wsSumAndCount["count"] += 1;
    } else if(responseItem.category == "REH") {
      var hmTmp = parseFloat(responseItem.fcstValue);
      target.hmSumAndCount["sum"] += hmTmp;
      target.hmSumAndCount["count"] += 1;
    } else if(responseItem.category == "SKY") {
      var skyStatus = parseInt(responseItem.fcstValue);
      if(skyStatus == 1) {
        target.cloud["sunnyCount"] += 1;
      } else if(skyStatus == 3) {
        target.cloud["fewCloudsCount"] += 1;
      } else if(skyStatus == 4) {
        target.cloud["cloudyCount"] += 1;
      }
    }
    else {
      continue;
    }
  }
}

function processMidTaForecastApiResponse(response, target, fcstTime, startTime, endTime) {
  var responseItem =  response.body.items.item[0];

  fcstTime.setHours(0);
  fcstTime.setMinutes(0);
  fcstTime.setSeconds(0);
  fcstTime.setMilliseconds(0);

  while(true) {
    var lastMinuteOfStartDay = new Date(startTime.getTime());
    lastMinuteOfStartDay.setHours(23);
    lastMinuteOfStartDay.setMinutes(59);
    lastMinuteOfStartDay.setSeconds(59);
    lastMinuteOfStartDay.setMilliseconds(99);

    var dateDiffFromFcstTime = parseInt((startTime.getTime() - fcstTime.getTime()) / calcDayToMilliSec());
    var count;
    if(lastMinuteOfStartDay.getTime() < endTime.getTime()) {
      count = parseInt((lastMinuteOfStartDay.getTime() - startTime.getTime() + 1) / calcHourToMilliSec());
    } else if(startTime.getTime() < endTime.getTime()) {
      count = parseInt((endTime.getTime() - startTime.getTime() + 1) / calcHourToMilliSec());
    } else {
      break;
    }

    var taMaxTmp = responseItem["taMax" + dateDiffFromFcstTime];
    var taMinTmp = responseItem["taMin" + dateDiffFromFcstTime];

    target.taSumAndCount["sum"] += ((taMaxTmp + taMinTmp) / 2) * count;
    target.taSumAndCount["count"] += count;
    if(count != 0 && target.taMax == null || taMaxTmp > target.taMax) {
      target.taMax = taMaxTmp;
    }
    if(count != 0 && target.taMin == null || taMinTmp < target.taMin) {
      target.taMin = taMinTmp;
    }
    startTime = new Date(startTime.getTime() + calcDayToMilliSec());
    startTime.setHours(0);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);
  }
}

function processMidRnForecastApiResponse(response, target, fcstTime, startTime, endTime) {
  var responseItem =  response.body.items.item[0];

  fcstTime.setHours(0);
  fcstTime.setMinutes(0);
  fcstTime.setSeconds(0);
  fcstTime.setMilliseconds(0);

  while(true) {
    var lastMinuteOfStartDay = new Date(startTime.getTime());
    lastMinuteOfStartDay.setHours(23);
    lastMinuteOfStartDay.setMinutes(59);
    lastMinuteOfStartDay.setSeconds(59);
    lastMinuteOfStartDay.setMilliseconds(99);

    var dateDiffFromFcstTime = parseInt((startTime.getTime() - fcstTime.getTime()) / calcDayToMilliSec());
    var count;
    if(lastMinuteOfStartDay.getTime() < endTime.getTime()) {
      count = parseInt((lastMinuteOfStartDay.getTime() - startTime.getTime() + 1) / calcHourToMilliSec());
    } else if(startTime.getTime() < endTime.getTime()) {
      count = parseInt((endTime.getTime() - startTime.getTime() + 1) / calcHourToMilliSec());
    } else {
      break;
    }

    var isRain = false;
    if(dateDiffFromFcstTime < 8) {
      if(parseInt(responseItem["rnSt" + dateDiffFromFcstTime + "Pm"]) >= 50 || parseInt(responseItem["rnSt" + dateDiffFromFcstTime + "Am"]) >= 50) {
        isRain = true;
      }
    } else {
      if(parseInt(responseItem["rnSt" + dateDiffFromFcstTime]) >= 50) {
        isRain = true;
      }
    }

    if(isRain) {
      if(target.precipitationMax == null || target.precipitationMax < 3.0) {
        target.precipitationMax = 3.0;
      }
      if(target.precipitation["max"] == null || target.precipitation["max"] < 3.0) {
        target.precipitation["max"] = 3.0;
      }
      target.precipitation["moderateRainCount"] += count;
    } else {
      if(target.precipitationMax == null) {
        target.precipitationMax = 0.0;
      }
      if(target.precipitation["max"] == null) {
        target.precipitation["max"] = 0.0;
      }
      target.precipitation["notRainCount"] += count;
    }

    if(dateDiffFromFcstTime < 8) {
      if(responseItem["wf" + dateDiffFromFcstTime + "Pm"].includes("맑")) {
        target.cloud["sunnyCount"] += count;
      } else if(responseItem["wf" + dateDiffFromFcstTime + "Pm"].includes("구름많")) {
        target.cloud["fewCloudsCount"] += count;
      } else if(responseItem["wf" + dateDiffFromFcstTime + "Pm"].includes("흐")) {
        target.cloud["cloudyCount"] += count;
      }
    } else {
      if(responseItem["wf" + dateDiffFromFcstTime].includes("맑")) {
        target.cloud["sunnyCount"] += count;
      } else if(responseItem["wf" + dateDiffFromFcstTime].includes("구름많")) {
        target.cloud["fewCloudsCount"] += count;
      } else if(responseItem["wf" + dateDiffFromFcstTime].includes("흐")) {
        target.cloud["cloudyCount"] += count;
      }
    }

    
    startTime = new Date(startTime.getTime() + calcDayToMilliSec());
    startTime.setHours(0);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);
  }
}

export default getWhetherInfo;
