let heartIconClick = document.getElementsByClassName('heart-icon');

for(let heart of heartIconClick) {

    heart.addEventListener('click', function(){
        let heartPlus = 1;

        let heartAdd = document.getElementById('heart-add');
       let currentValue  = Number(heartAdd.innerText);

        let mainHeart = heartPlus + currentValue;
        heartAdd.innerText = mainHeart;

        console.log(heart.innerText);
        



    })

}

// Call function config
let countCoin = 20;
let callFunction = document.getElementsByClassName('call-function');
let serviceNames = document.getElementsByClassName('service-name');
let serviceNumbers = document.getElementsByClassName('service-number');

for (let i = 0; i < callFunction.length; i++) {
    callFunction[i].addEventListener('click', function() {

        let name = serviceNames[i].innerText;
        let number = serviceNumbers[i].innerText;

        let coinMinus = document.getElementById('coin-minus');
        let finalLeftCoin = Number(coinMinus.innerText) - countCoin;

        if (finalLeftCoin < 0) {
            alert('You do not have left any coins! You need 20 coins to call');
            return;
        }



        coinMinus.innerText = finalLeftCoin;


        alert(`You are calling to ${name}: ${number}`);

        let addDiv = document.getElementById('section-id');
        let newDiv = document.createElement("div");
        newDiv.className = 'clear-main-history';
        newDiv.innerHTML = `
            <div class="flex justify-between bg-[#FAFAFA] rounded-[8px] p-[16px] items-center mb-[15px] section-in">
                <div>
                    <h2 class="font-semibold text-[18px] font-roboto text-[#111111]">${name}</h2>
                    <p>${number}</p>
                </div>
                <div><p>${new Date().toLocaleTimeString()}</p></div>
            </div>
        `;


        addDiv.appendChild(newDiv);  
    });
}




// Copy button Config




let copyButton = document.getElementsByClassName('btn-copy');
let copyCount = document.getElementById('copy-count');




for (let i = 0; i < copyButton.length; i++) {
    copyButton[i].addEventListener('click', function() {
        let number = serviceNumbers[i].innerText;
        copyCount.innerText = Number(copyCount.innerText) + 1;
        navigator.clipboard.writeText(number);
        alert(`Number Copied: ${number}`);
    });
}


// Clear History Button Config


let clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener('click', function(){
    let clearFinalHistory = document.getElementById('section-id');

    clearFinalHistory.innerHTML = '';
})


