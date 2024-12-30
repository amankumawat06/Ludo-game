const img = document.querySelector("img")

let allImags = ['Images/dice1.jpg','Images/dice2.jpg','Images/dice3.jpg','Images/dice4.jpg','Images/dice5.jpg','Images/dice6.jpg']

img.addEventListener('click', () =>{
    let rendom = Math.floor(Math.random() * 6 + 1)
    currIndex = (rendom+1) % allImags.length;
    img.src = allImags[currIndex];
});
