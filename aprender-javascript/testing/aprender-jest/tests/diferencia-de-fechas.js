
//Ejemplo de codigo no limpio

const parameters = {
    miliSecondsInSecond: 1000,
    secondsInMinute: 60,
    minutesInHours: 60,
    hoursInDay: 24,
}


const remainingDaysToDate = (targetDate) => {
    const todayDate = Date.now();
    const remainingMiliseconds = todayDate - targetDate;
    const { miliSecondsInSecond, secondsInMinute, minutesInHours, hoursInDay } = parameters;
    const remainingDays = remainingMiliseconds / miliSecondsInSecond / secondsInMinute / minutesInHours / hoursInDay;
    return remainingDays;
}

const remainingHoursToDate = (targetDate) => {
    const todayDate = Date.now();
    const remainingMiliseconds = todayDate - targetDate;
    const { miliSecondsInSecond, secondsInMinute, minutesInHours } = parameters;
    const remainingHours = remainingMiliseconds / miliSecondsInSecond / secondsInMinute / minutesInHours;
    return remainingHours;
}

const remainingMinutesToDate = (targetDate) => {
    const todayDate = Date.now();
    const remainingMiliseconds = todayDate - targetDate;
    const { miliSecondsInSecond, secondsInMinute } = parameters;
    const remainingMinutes = remainingMiliseconds / miliSecondsInSecond / secondsInMinute;
    return remainingMinutes;
}

const remainingSecondsToDate = (targetDate) => {
    const todayDate = Date.now();
    const remainingMiliseconds = todayDate - targetDate;
    const { miliSecondsInSecond } = parameters;
    const remainingSeconds = remainingMiliseconds / miliSecondsInSecond;
    return remainingSeconds;
}

//Ejemplo de codigo limpio:
/**
 * Objeto que almacena los factores de conversión entre unidades de tiempo.
 */
const timeUnits = {
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000,
};

/**
 * Calcula el tiempo restante en la unidad de tiempo especificada hasta la fecha objetivo.
 * @param {number} targetDate - La fecha objetivo en milisegundos desde el 1 de enero de 1970.
 * @param {string} unit - La unidad de tiempo en la que se desea obtener el resultado (por defecto: 'days').
 *Valores posibles: 'days', 'hours', 'minutes', 'seconds'.
 * @returns {number} El tiempo restante en la unidad de tiempo especificada.
 * @throws {Error} Si se especifica una unidad de tiempo no válida.
 */
const remainingTimeToDate = (targetDate, unit = 'days') => {
    const currentTime = Date.now();
    const remainingMilliseconds = Math.max(targetDate - currentTime, 0);
    const conversionFactor = timeUnits[unit];

    if (conversionFactor) {
        return remainingMilliseconds / conversionFactor;
    } else {
        throw new Error('Invalid time unit specified');
    }
};



module.exports = { remainingDaysToDate }