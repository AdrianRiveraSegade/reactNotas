const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

//Funcion que calcula la diferencia en segundos entre dos fechas
const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000;

//Funcion que decide que unidad se va a utilizar para expresar la diferencia entre fechas.
//Una vez decidida se calcula la cantidad de dicha unidad
const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};

//Dada una fecha, calcula la diferencia entre esa fecha y hoy
//Y con eso decide en que unidad expresar la diferencia
const getTimeAgo = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat();

  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);
  return rtf.format(value, unit);
};

export default getTimeAgo;
