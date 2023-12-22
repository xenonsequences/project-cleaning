// Модалка
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.onclick = function () {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Набігаючі цифри
function runCounter(targetNumber, counterElementId) {
    let counterElement = document.getElementById(counterElementId);

    let currentNumber = 0;
    let interval = 10;

    let updateCounter = setInterval(function () {
        currentNumber += 1;
        counterElement.innerText = currentNumber;

        if (currentNumber === targetNumber) {
            clearInterval(updateCounter);
        }
    }, interval);
}

runCounter(3480, 'counter');
runCounter(12540, 'counter-2');
runCounter(100, 'counter-3');
runCounter(10, 'counter-4');
runCounter(5, 'counter-5');
runCounter(20, 'counter-6');

// Скрол
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
