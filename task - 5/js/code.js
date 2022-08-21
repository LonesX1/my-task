const input = document.getElementById('input-number');
const buttonPlus = document.getElementById('button-plus');
const buttonMinus = document.getElementById('button-minus');
// мои методы
const checkValueInput = (x, y) => {
    if (Number(input.value) === 0) {
        x.setAttribute('disabled', 0)
    } else if (Number(input.value) === 10) {
        y.setAttribute('disabled', 0)
    } else {
        x.removeAttribute('disabled')
        y.removeAttribute('disabled')
    };
};

input.setAttribute('value', 1);

buttonMinus.onclick = () => {
    input.value--;
    checkValueInput(buttonMinus, buttonPlus);
};

buttonPlus.onclick = () => {
    input.value++;
    checkValueInput(buttonMinus, buttonPlus);
};


