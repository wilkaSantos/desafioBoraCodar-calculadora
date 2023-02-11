const display = document.querySelector('#display');
const cleanButton = document.querySelector('.clean');
const butonns = document.querySelectorAll('.buttonDisplay');
const delButton = document.querySelector('.del');
const equalButton = document.querySelector('.equal');
const plusMinusButton = document.querySelector('.plusMinus');

cleanButton.addEventListener('click', cleanDisplay);
delButton.addEventListener('click', deleteAnElement);
equalButton.addEventListener('click', result);
plusMinusButton.addEventListener('click', changeNumberValue);

butonns.forEach((currentValue) => {
    currentValue.addEventListener('click', ()=>{
        let element;

        if(currentValue.value === 'x'){
            const newValue = '*';
            currentValue.value = newValue;

            element = currentValue.value;
            insertTypedElementIntoDisplay(element);    
            return;   
        }

        element = currentValue.value;
        insertTypedElementIntoDisplay(element);
    });
});

function insertTypedElementIntoDisplay(element){
    display.value += element;
}

function cleanDisplay(){
    display.value = '';
}

function deleteAnElement(){
    display.value = display.value.slice(0, -1);
}

function result(){
  const resultElement = eval(display.value);
  display.value = resultElement;
}

function changeNumberValue(){
    if(Number(display.value)){
        display.value = display.value * -1;
    }
}
