/**
 * Calculates the difference in days between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} The number of days between the two dates.
 */
const calculateDaysDifference = (date1, date2) => {

}


const remainingDaysToDate = (targetDate) => {
    const todayDate = Date.now();
    const remainingMiliseconds = todayDate - targetDate;
    const miliSecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHours = 60;
    const hoursInDay = 24;
    1000 /  

    return remainingMiliseconds;
}


module.exports = { remainingDaysToDate }