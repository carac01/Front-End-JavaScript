function calculateAge(birthdayDate) {
    let todayTimestamp = new Date().getTime();
    let birthdayDateTimestamp = (new Date(birthdayDate)).getTime();
    let oversightDaysInSeconds = 777600000;
    let yearsInMilliseconds = 31536000000;
    return Math.trunc((todayTimestamp - birthdayDateTimestamp - oversightDaysInSeconds)/yearsInMilliseconds);
}

const name = "Denisse Robles";
const birthdayDate = "1987-07-11";
const age = calculateAge(birthdayDate);

console.info(`${name} was born ${birthdayDate} and has ${age} years`);