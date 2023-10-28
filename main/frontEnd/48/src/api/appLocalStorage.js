const timeOffset = 21600 * 1000;

function isTimeOut(localStorageData) {
    console.log(Date.now() - localStorageData.date, timeOffset)
    return (Date.now() - localStorageData.date) < timeOffset;
}

export default function appLocalStorage(key, data) {
    if (data) window.localStorage.setItem(key, JSON.stringify({
        data,
        date: Date.now(),
    }));

    if (!data) {
        const localStorageData = JSON.parse(window.localStorage.getItem(key));

        if (!localStorageData) return null;

        return isTimeOut(localStorageData) ? localStorageData.data : null;
    }
}
