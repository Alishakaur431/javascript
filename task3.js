let count = 0;

function increase() {
    count++;
    document.getElementById('number').innerText = count;
}

function decrease() {
    count--;
    document.getElementById('number').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('number').innerText = count;
}
