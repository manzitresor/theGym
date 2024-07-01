function displayNumber() {
    const intervalId = setInterval(() => {
        console.log(24);
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

displayNumber();
