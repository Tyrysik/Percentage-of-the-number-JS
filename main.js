let Btn = document.querySelector(".btn")
Btn.addEventListener('click', function (number, procent){
    let valueNumber = document.querySelector('.numbers').value;
    let valueProcent = document.querySelector('.procent').value;
    let tenNumber = valueProcent / 100;
    document.querySelector('.ecual').innerText = valueNumber * tenNumber;
}
 )
