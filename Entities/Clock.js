export class Clock {
    #startTime;

    constructor() {
        this.#startTime = Clock.getTimeObject();
    }

    static getTimeObject() {
        const CURRENT_TIME = new Date();
        return {
            day: CURRENT_TIME.getDate(),
            month: CURRENT_TIME.getMonth() + 1, // Months are zero-indexed
            year: CURRENT_TIME.getFullYear(),
            hours: CURRENT_TIME.getHours(),
            minutes: CURRENT_TIME.getMinutes(),
            seconds: CURRENT_TIME.getSeconds()
        };
    }

    static getFormattedTimeDiff(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    restart() {
        this.#startTime = Clock.getTimeObject();
    }

    getTimeLapse() {
        return Clock.getTimeLapse(this.#startTime);
    }

    static getTimeLapse(startTime) {
        const currentTime = Clock.getTimeObject();
        const startDate = new Date(startTime.year, startTime.month - 1, startTime.day, startTime.hours, startTime.minutes, startTime.seconds);
        const currentDate = new Date(currentTime.year, currentTime.month - 1, currentTime.day, currentTime.hours, currentTime.minutes, currentTime.seconds);
        const timeDifference = currentDate - startDate;
        return Clock.getFormattedTimeDiff(timeDifference);
    }
}