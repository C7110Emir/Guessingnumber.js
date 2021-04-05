const inputNumber = document.getElementById("number")
const guessButton = document.querySelector('#guess')
const infoMessage = document.querySelector('h2')
const attemptCount = document.querySelector('h5')
const ranNum = Math.floor(Math.random() * 1000)

console.log(ranNum)

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


let imgs = [
    'url("61e78b08a8dd18779132812218a9f2a8.jpg")',
    'url("photo-1469474968028-56623f02e42e.jpg")',
    'url("photo-1535320404287-416e2c6d2b41.jpg")',
    'url("b723bc52a4d351c90e7c7629dadd51c7.jpg")',
    'url("Cool-Desktop-Backgrounds-40-Cool-Wallpapers-To-Download-.jpg")',
    'url("cool-computer-backgrounds.jpg")'
];


function bgswitch() {
    const backgroundBody = document.body;    
    const bg = imgs[Math.floor(Math.random() * imgs.length)]
    backgroundBody.style.backgroundImage = bg
}

setInterval(bgswitch,5000)

guessButton.addEventListener('click',compare)

let attemptCounter = 0
    

infoMessage.innerHTML = "Do not worry, i will give you tips here";
function compare(){
    
    if(parseInt(inputNumber.value) > 1000||inputNumber.value == ""  || parseInt(inputNumber.value) == 0) {
        let erarray = ["Please give 1-1000", "why dont't you insert 1-1000","please do something works"]
        let z = Math.floor(Math.random() * erarray.length)
        attemptCount.innerHTML = "Attempts: " + attemptCounter;
        return infoMessage.innerHTML = erarray[z]
        
    }

    if(parseInt(inputNumber.value) > ranNum) {
        let lowerArray = ["mayday, you are too high","Isn't it cold up there?","Please think lower", "maybe win is right under , maybe more :)"]
        let b = Math.floor(Math.random() * lowerArray.length)
        infoMessage.innerHTML = lowerArray[b]
        attemptCounter += 1
        inputNumber.value = ""
        attemptCount.innerHTML = "Attempts: " + attemptCounter;
    }

    if(parseInt(inputNumber.value) < ranNum){
        let higherArray = ["Crawling, try higher","Fly, fly, fly","Please think higher", "maybe win is right above , maybe more :)"]
        let a = Math.floor(Math.random() * higherArray.length)
        infoMessage.innerHTML = higherArray[a]
        attemptCounter += 1
        inputNumber.value = ""
        attemptCount.innerHTML = "Attempts: " + attemptCounter;
    }
    if(parseInt(inputNumber.value) == ranNum) {
        winArray = ["Winner Winner Chicken Dinner","GGWP", "HEY YOU WON !", "VICTORY"]
        let c = Math.floor(Math.random() * winArray.length)
        infoMessage.innerHTML =  winArray[c]
        attemptCount.innerHTML = "Total Attempts: " + attemptCounter
        return


    }   
    
}