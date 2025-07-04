const { PrayerTimes, Coordinates, CalculationMethod } = require('adhan');

function getPrayerTimes(lat, lng, methodId = 2) {
  const coordinates = new Coordinates(lat, lng);
  const date = new Date();

  let params;
  switch (parseInt(methodId)) {
    case 1: params = CalculationMethod.MuslimWorldLeague(); break;
    case 2: params = CalculationMethod.Egyptian(); break;
    case 3: params = CalculationMethod.Karachi(); break;
    case 4: params = CalculationMethod.UmmAlQura(); break;
    case 5: params = CalculationMethod.Dubai(); break;
    case 6: params = CalculationMethod.MoonsightingCommittee(); break;
    default: params = CalculationMethod.MuslimWorldLeague();
  }

  const prayerTimes = new PrayerTimes(coordinates, date, params);

  return {
    date: date.toISOString().split('T')[0],
    times: {
      fajr: prayerTimes.fajr.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      sunrise: prayerTimes.sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      dhuhr: prayerTimes.dhuhr.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      asr: prayerTimes.asr.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      maghrib: prayerTimes.maghrib.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isha: prayerTimes.isha.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    }
  };
}

module.exports = getPrayerTimes;
