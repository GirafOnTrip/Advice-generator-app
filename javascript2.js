let numberAdvice = document.querySelector(".box__number");
let quotes = document.querySelector(".box__quotes");
let dice = document.querySelector(".box__bg-dice");

const url = 'https://api.adviceslip.com/advice';


axios.get(url)
    .then(function(data) {
            
        numberAdvice.textContent = data.data.slip.id;
        quotes.textContent = `"${data.data.slip.advice}"`;
    })

    .catch(function(error){

        console.log(error);
    })


dice.addEventListener('click', () => {

    location.reload();
    
     })

