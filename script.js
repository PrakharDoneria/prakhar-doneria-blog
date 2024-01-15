document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("loader").style.display = "none";

    // My Age Calculator
    setInterval(updateAge, 1000);
});

function updateAge() {
    const dob = new Date("2006-06-15T00:00:00Z");
    const now = new Date();

    const age = calculateAge(dob, now);

    const ageCounter = document.getElementById("age-counter");
    ageCounter.textContent = `My Age: ${age.years} Years ${age.months} Months ${age.days} Days ${age.hours} Hours ${age.minutes} Minutes ${age.seconds} Seconds ${age.milliseconds} Milliseconds`;
}

function calculateAge(dob, now) {
    const ageInMilliseconds = now - dob;

    const milliseconds = ageInMilliseconds % 1000;
    const seconds = Math.floor(ageInMilliseconds / 1000) % 60;
    const minutes = Math.floor(ageInMilliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(ageInMilliseconds / (1000 * 60 * 60)) % 24;
    const days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30; // Assuming a month is 30 days for simplicity
    const months = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30)) % 12;
    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30 * 12));

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}
