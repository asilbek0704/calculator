let switcher = document.querySelector('.switcher');
let switcherCircle = document.querySelector('.switcher .circle');

switcher.addEventListener('click', () => {
    switcherCircle.classList.toggle('switched');
    if (switcherCircle.classList.contains('switched') == true) {
        wrapper.classList.add('switched');
        result.classList.add('switched');
        switcher.classList.add('switched');
        for (let i = 0; i < signs.length; i++) {
            signs[i].classList.add('switched');
        }
    } else {
        wrapper.classList.remove('switched');
        result.classList.remove('switched');
        switcher.classList.remove('switched');
        for (let i = 0; i < signs.length; i++) {
            signs[i].classList.remove('switched');
        }
    }
})


let wrapper = document.querySelector('.wrapper'),
    result = document.querySelector('.mainDiv input'),
    signs = document.querySelectorAll('.mainDiv span');


let currentSign = [];
let currentNumber = 0;

let currentSign2 = [];
let currentNumber2 = 0;



for (let i = 0; i < signs.length; i++) {

    signs[i].addEventListener('click', () => {
    
        

        if (signs[i].getAttribute('data-sign') === 'clear') {
            currentSign = [];
            currentNumber = 0;
            result.value = '';
        } else if (signs[i].getAttribute('data-sign') === 'result') {
            
                result.value = eval(result.value);
                currentNumber = result.value;
                currentSign = [result.value];

            
        } else {

            currentSign.push(signs[i].getAttribute('data-sign'));
            currentNumber = currentSign.join('');

            if (currentNumber[0] == 0 || (signs[i].classList.contains('sign') && currentNumber[0] == signs[i].getAttribute('data-sign'))) {
                currentSign = [];
                currentNumber = 0;
            } else if (result.value.length > 20) {
                currentSign = [];
            } else {
                result.value = currentNumber;
            }



            // if (signs[i].classList.contains('sign')) {
            //     let mathOperation = signs[i].getAttribute('data-sign');
            //     result.value = mathOperation;



            // } else {
            //     currentSign2.push(signs[i].getAttribute('data-sign'));
            //     currentNumber2 = currentSign2.join('');

            //     if (currentNumber2[0] == 0 || (signs[i].classList.contains('sign') && currentNumber2[0] == signs[i].getAttribute('data-sign'))) {
            //         currentSign2 = [];
            //         currentNumber2 = 0;
            //     } else if (result.value.length > 10) {
            //         currentSign2 = [];
            //     } else {
            //         result.value = currentNumber2;
            //     }
            // }


        }

        // console.log(result.value.length);
        console.log(`result.value = ${result.value}`);
        console.log(`currentSign = ${currentSign}`);
        console.log(`currentNumber = ${currentNumber}`);
        // console.log('2-part');
        // console.log(currentSign2);
        // console.log(currentNumber2);
        // console.log('E\nN\nD');
    });




}



// eval() —— считает строчный пример // 

// for (let i = 0; i < signs.length; i++) {
//     function addSymbols() {
//         currentSign.push(signs[i].getAttribute('data-sign'));
//         result.value = currentSign.join('');
//         console.log(result.value.length);
//     }
//     signs[i].addEventListener('click', addSymbols);

//     if ()
// }






