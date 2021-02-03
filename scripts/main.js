const getHour = () => {
    const date = document.getElementById('date');

    const time = new Date;
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const hour = `${hours}:${minutes}`
    return date.textContent = hour
}

getHour();


