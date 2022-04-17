let numberAdvice = document.querySelector(".box__number");
let quotes = document.querySelector(".box__quotes");
let dice = document.querySelector(".box__bg-dice");

const url = 'https://api.adviceslip.com/advice';

async function getAdvice(){

    const request = await fetch(url, {

        method: 'GET'
    });

    if (!request.ok) {

        alert('An error has occurred')

    } else {

        let data = await request.json();
        numberAdvice.textContent = data.slip.id;
        quotes.textContent = `"${data.slip.advice}"`;
    }
}

dice.addEventListener('click', () => {

    location.reload();
    
     })


getAdvice();











