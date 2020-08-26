let cards = document.querySelectorAll('.card');
let cardFliped = false;
let firstCard;
let secondCard;
let board = document.querySelector('.board')
let matched = [];
let overlay = document.querySelector('.overlay');
let score = 0;
let username = document.getElementById('inputName');
username.value = window.localStorage.getItem('username');
let form = document.querySelector('form');
let warning = document.querySelector('.warning');
let leaderboardBtn = document.querySelector('.leaderboard');
let backBtn = document.querySelector('.back');
let backBtnBoard = document.querySelector('.backBoard');
let noCards = 0;
let currentPlayer = document.querySelector('.currentPlayer');
let difRadioBoard = document.querySelectorAll('input[name="levelBoard"]')
let changeDifBtn = document.querySelector('.changeDif');
let proceedBtn = document.querySelector('.proceed');
let cancelBtn = document.querySelector('.cancel');
let diff = document.getElementById('diff')
let boardLeaderboardBtn = document.querySelector('.leaderboard-click')
let timer = document.querySelector('.timer')
let timerSec = parseInt(timer.textContent)
let highScore = 0;
let table = document.querySelector('table');
let tableNoob = document.querySelector('.table-diff .noob')
let tableNewbie = document.querySelector('.table-diff .newbie')
let tablePro = document.querySelector('.table-diff .pro')
let tableLegend = document.querySelector('.table-diff .legend')
let themeSong = document.getElementById('background_audio')
let congrats = document.querySelector('.congrats')
themeSong.volume = 0.25;

let firstPlaceNoob = {
    username: localStorage.getItem('1'),
    time: localStorage.getItem('1Time'),
    diff: 'Noob'
}
let secondPlaceNoob = {
    username: localStorage.getItem('2'),
    time: localStorage.getItem('2Time'),
    diff: 'Noob'
}
let thirdPlaceNoob = {
    username: localStorage.getItem('3'),
    time: localStorage.getItem('3Time'),
    diff: 'Noob'
}
let fourthPlaceNoob = {
    username: localStorage.getItem('4'),
    time: localStorage.getItem('4Time'),
    diff: 'Noob'

}
let fifthPlaceNoob = {
    username: localStorage.getItem('5'),
    time: localStorage.getItem('5Time'),
    diff: 'Noob'
}
let firstPlaceNewbie = {
    username: localStorage.getItem('1Newbie'),
    time: localStorage.getItem('1TimeNewbie'),
    diff: 'Newbie'
}
let secondPlaceNewbie = {
    username: localStorage.getItem('2Newbie'),
    time: localStorage.getItem('2TimeNewbie'),
    diff: 'Newbie'
}
let thirdPlaceNewbie = {
    username: localStorage.getItem('3Newbie'),
    time: localStorage.getItem('3TimeNewbie'),
    diff: 'Newbie'
}
let fourthPlaceNewbie = {
    username: localStorage.getItem('4Newbie'),
    time: localStorage.getItem('4TimeNewbie'),
    diff: 'Newbie'

}
let fifthPlaceNewbie = {
    username: localStorage.getItem('5Newbie'),
    time: localStorage.getItem('5TimeNewbie'),
    diff: 'Newbie'
}
let firstPlacePro = {
    username: localStorage.getItem('1Pro'),
    time: localStorage.getItem('1TimePro'),
    diff: 'Pro'
}
let secondPlacePro = {
    username: localStorage.getItem('2Pro'),
    time: localStorage.getItem('2TimePro'),
    diff: 'Pro'
}
let thirdPlacePro = {
    username: localStorage.getItem('3Pro'),
    time: localStorage.getItem('3TimePro'),
    diff: 'Pro'
}
let fourthPlacePro = {
    username: localStorage.getItem('4Pro'),
    time: localStorage.getItem('4TimePro'),
    diff: 'Pro'

}
let fifthPlacePro = {
    username: localStorage.getItem('5Pro'),
    time: localStorage.getItem('5TimePro'),
    diff: 'Pro'
}
let firstPlaceLegend = {
    username: localStorage.getItem('1Legend'),
    time: localStorage.getItem('1TimeLegend'),
    diff: 'Legend'
}
let secondPlaceLegend = {
    username: localStorage.getItem('2Legend'),
    time: localStorage.getItem('2TimeLegend'),
    diff: 'Legend'
}
let thirdPlaceLegend = {
    username: localStorage.getItem('3Legend'),
    time: localStorage.getItem('3TimeLegend'),
    diff: 'Legend'
}
let fourthPlaceLegend = {
    username: localStorage.getItem('4Legend'),
    time: localStorage.getItem('4TimeLegend'),
    diff: 'Legend'

}
let fifthPlaceLegend = {
    username: localStorage.getItem('5Legend'),
    time: localStorage.getItem('5TimeLegend'),
    diff: 'Legend'
}



for (let i = 1; i<=5; i++) {
    tableNoob.style.color= "#b0c3d9"
    table.innerHTML+=`<tr><td>${i}</td><td>${localStorage.getItem(`${i}`)}</td><td>${localStorage.getItem(`${i}Time`)}</td></td>`
}
tableNoob.addEventListener('click', ()=> {
    tableNewbie.style.color="#fff";
    tablePro.style.color="#fff";
    tableLegend.style.color="#fff";
    tableNoob.style.color= "#b0c3d9"
    table.innerHTML='';
    for (let i = 1; i<=5; i++) {
        table.innerHTML+=`<tr><td>${i}</td><td>${localStorage.getItem(`${i}`)}</td><td>${localStorage.getItem(`${i}Time`)}</td></td>`
    }
})
tableNewbie.addEventListener('click', ()=> {
    tableNoob.style.color="#fff";
    tablePro.style.color="#fff";
    tableLegend.style.color="#fff";
    tableNewbie.style.color= "#4b69ff";
    table.innerHTML='';
    for (let i = 1; i<=5; i++) {
        table.innerHTML+=`<tr><td>${i}</td><td>${localStorage.getItem(`${i}Newbie`)}</td><td>${localStorage.getItem(`${i}TimeNewbie`)}</td></td>`
    }
})
tablePro.addEventListener('click', ()=> {
    tableNewbie.style.color="#fff";
    tableNoob.style.color="#fff";
    tableLegend.style.color="#fff";
    tablePro.style.color= "#8847ff"
    table.innerHTML='';
    for (let i = 1; i<=5; i++) {
        table.innerHTML+=`<tr><td>${i}</td><td>${localStorage.getItem(`${i}Pro`)}</td><td>${localStorage.getItem(`${i}TimePro`)}</td></td>`
    }
})
tableLegend.addEventListener('click', ()=> {
    tableNewbie.style.color="#fff";
    tablePro.style.color="#fff";
    tableNoob.style.color="#fff";
    tableLegend.style.color= "#fff34f"
    table.innerHTML='';
    for (let i = 1; i<=5; i++) {
        table.innerHTML+=`<tr><td>${i}</td><td>${localStorage.getItem(`${i}Legend`)}</td><td>${localStorage.getItem(`${i}TimeLegend`)}</td></td>`
    }
})



boardLeaderboardBtn.addEventListener('click', ()=>{
    document.querySelector('.leaderboard-container').style.display = "block";
    backBtn.style.display="none";
    backBtnBoard.style.display = "block";
    setTimeout(() => {
        document.querySelector('.leaderboard-container').style.left = "0";
    }, 50);
})
backBtnBoard.addEventListener('click', () =>{
    document.querySelector('.leaderboard-container').style.left = "100%";
    backBtn.style.display="block";
    backBtnBoard.style.display = "none";
    setTimeout(() => {
        document.querySelector('.leaderboard-container').style.display = "none";
    }, 500);
})
changeDifBtn.addEventListener('click', () => {
    document.querySelector('.notification').style.display="block"
})

cancelBtn.addEventListener('click', () => {
    document.querySelector('.notification').style.display="none";
})

proceedBtn.addEventListener('click', () => {
    cardFliped=false;
    matched = [];
    console.log(matched);
    timerSec=0;
    cards.forEach(card => {
        card.classList.remove('show-card');
        card.classList.remove('flipCard');
    })

    setTimeout(() => {    
        document.querySelector('.notification').style.display="none";
        let checkedBoardDif = document.querySelector('input[name="levelBoard"]:checked')
        difLevel(checkedBoardDif);
        printCards(); 
    }, 500);
    
})

leaderboardBtn.addEventListener('click', () => {
    
    document.querySelector('.main-content').style.display = "none";
    document.querySelector('.leaderboard-container').style.display = "block";
    setTimeout(() => {
        document.querySelector('.leaderboard-container').style.left = "0";
    }, 50);
    
})
backBtn.addEventListener('click', () => {
    document.querySelector('.leaderboard-container').style.left = "100%";
    setTimeout(() => {
        document.querySelector('.leaderboard-container').style.display = "none";
        document.querySelector('.main-content').style.display="block";
    }, 500);
    
    
    
})

function difLevel(checked) {

    if (checked.value == 'easy') {
        diff.innerHTML="noob"
        diff.style.color="#b0c3d9"
        noCards = 16; 
        board.classList.add('board-width');
        board.style.margin = "auto";
        board.style.gridTemplateRows="auto auto auto auto"
        board.style.gridTemplateColumns="auto auto auto auto"
        cards.forEach(card => {
            card.style.width = "70%";
            card.style.margin = "15px";
        })
    }
    else if (checked.value == 'medium') {
        diff.innerHTML="newbie"
        diff.style.color="#4b69ff"
        noCards = 36; 
        board.classList.add('board-width');
        board.style.gridTemplateRows="auto auto auto auto auto auto"
        board.style.gridTemplateColumns="auto auto auto auto auto auto"
        cards.forEach(card => {
            card.style.width = "90%";
            card.style.margin = "3px";
        })
        console.log(noCards);
    }
    else if (checked.value == 'hard') {
        diff.innerHTML="pro"
        diff.style.color="#8847ff"
        noCards = 64; 
        board.classList.add('board-width');
        board.style.gridTemplateRows="auto auto auto auto auto auto  auto auto"
        board.style.gridTemplateColumns="auto auto auto auto auto auto  auto auto"

        cards.forEach(card => {
            card.style.width = "90%";
            card.style.margin = "3px";

        })
        console.log(noCards);
    }
    else  {
        diff.innerHTML="legend"
        diff.style.color="#fff34f"
        noCards = 100; 
        board.classList.add('board-width');
        board.style.gridTemplateRows="auto auto auto auto auto auto auto auto auto auto"
        board.style.gridTemplateColumns="auto auto auto auto auto auto auto auto auto auto"
        cards.forEach(card => {
            card.style.width = "90%";
            card.style.margin = "3px";
        })
        console.log(noCards);
        
        
    }
}
function printCards() {
    for (let i = 0; i<noCards; i++) {
        randomNo = Math.floor(Math.random() * noCards);
        cards[i].classList.add('show-card');
        cards[i].style.order = randomNo;
    }
    cards.forEach(card => {
        card.addEventListener('click', flip)
    })
}


function flip() {
    this.classList.toggle('flipCard');
    if (cardFliped==false) {
            cardFliped=true
            firstCard=this;
            firstCardValue = this.getAttribute('value');
            firstCard.removeEventListener('click', flip);
            matched.push(firstCardValue);
    }
    else {
        cardFliped=false;
        secondCard=this;
        secondCardValue = this.getAttribute('value');
        secondCard.removeEventListener('click', flip);
        matched.push(secondCardValue);
        if (matched.length == 2)  {
            overlay.style.display="block";
            setTimeout(() => {
                overlay.style.display="none";
                matched=[];
            }, 1000);
        }
        if (matched[0]==matched[1]) {
            if (matched[0] == 'abbadon') {
                let abbadonvoice = document.getElementById('abbadonvoice')
                abbadonvoice.volume = 0.3;
                abbadonvoice.play();
            }
            if (matched[0] == 'bane') {
                let banevoice = document.getElementById('banevoice')
                banevoice.volume = 0.1;
                banevoice.play();
            }
            if (matched[0] == 'bloodseeker') {
                let bsvoice = document.getElementById('bsvoice')
                bsvoice.volume = 0.1;
                bsvoice.play();
            }
            if (matched[0] == 'bountyhunter') {
                let bhvoice = document.getElementById('bhvoice')
                bhvoice.volume = 0.1;
                bhvoice.play();
            }
            if (matched[0] == 'chaosknight') {
                let ckvoice = document.getElementById('ckvoice')
                ckvoice.volume = 0.3;
                ckvoice.play();
            }
            if (matched[0] == 'disruptor') {
                let disruptorvoice = document.getElementById('disruptorvoice')
                disruptorvoice.volume = 0.1;
                disruptorvoice.play();
            }
            if (matched[0] == 'dragonknight') {
                let dragonvoice = document.getElementById('dragonvoice')
                dragonvoice.volume = 0.1;
                dragonvoice.play();
            }
            if (matched[0] == 'drowranger') {
                let drvoice = document.getElementById('drvoice')
                drvoice.volume = 0.1;
                drvoice.play();
            }
            if (matched[0] == 'boneflecher') {
                let clinkzvoice = document.getElementById('clinkzvoice')
                clinkzvoice.volume = 0.1;
                clinkzvoice.play();
            }
            if (matched[0] == 'earthspirit') {
                let earthspiritvoice = document.getElementById('earthspiritvoice')
                earthspiritvoice.volume = 0.3;
                earthspiritvoice.play();
            }
            if (matched[0] == 'ember') {
                let emberspiritvoice = document.getElementById('emberspiritvoice')
                emberspiritvoice.volume = 0.1;
                emberspiritvoice.play();
            }
            if (matched[0] == 'void') {
                let voidvoice = document.getElementById('voidvoice')
                voidvoice.volume = 0.1;
                voidvoice.play();
            }
            if (matched[0] == 'enigma') {
                let enigmavoice = document.getElementById('enigmavoice')
                enigmavoice.volume = 0.1;
                enigmavoice.play();
            }
            if (matched[0] == 'huskar') {
                let huskarvoice = document.getElementById('huskarvoice')
                huskarvoice.volume = 0.3;
                huskarvoice.play();
            }
            if (matched[0] == 'invoker') {
                let invokervoice = document.getElementById('invokervoice')
                invokervoice.volume = 0.1;
                invokervoice.play();
            }
            if (matched[0] == 'juggernaut') {
                let juggernautvoice = document.getElementById('juggernautvoice')
                juggernautvoice.volume = 0.1;
                juggernautvoice.play();
            }
            if (matched[0] == 'kunkka') {
                let kunkkavoice = document.getElementById('kunkkavoice')
                kunkkavoice.volume = 0.1;
                kunkkavoice.play();
            }
            if (matched[0] == 'leshrac') {
                let leshrackvoice = document.getElementById('leshrackvoice')
                leshrackvoice.volume = 0.3;
                leshrackvoice.play();
            }
            if (matched[0] == 'lich') {
                let lichvoice = document.getElementById('lichvoice')
                lichvoice.volume = 0.1;
                lichvoice.play();
            }
            if (matched[0] == 'lion') {
                let lionvoice = document.getElementById('lionvoice')
                lionvoice.volume = 0.1;
                lionvoice.play();
            }
            if (matched[0] == 'medusa') {
                let medusavoice = document.getElementById('medusavoice')
                medusavoice.volume = 0.1;
                medusavoice.play();
            }
            matched=[];
            score++;

        }
        else {
            matched=[];
            firstCard.addEventListener('click', flip);
            secondCard.addEventListener('click', flip);
            setTimeout(() => {
                firstCard.classList.remove('flipCard');
                secondCard.classList.remove('flipCard');
            }, 1000);
            
            
        }
    } 
}
function place(fifthT, fourthT, thirdT, secondT, firstT, fifthP, fourthP, thirdP, secondP, firstP) {
    let currentPlayer = localStorage.getItem('username')
    let currentTime = localStorage.getItem('time');
    if (localStorage.getItem(firstT) == null) {
        localStorage.setItem(firstT, currentTime)
        localStorage.setItem(firstP, currentPlayer)
        congrats.innerHTML=`Congrats, you are 1st on leaderboard!`
    }  
    else if (localStorage.getItem(firstT) != null) {
        if (currentTime < localStorage.getItem(firstT)) {
            localStorage.setItem(fifthT, localStorage.getItem(fourthT))
            localStorage.setItem(fifthP, localStorage.getItem(fourthP))
            localStorage.setItem(fourthT, localStorage.getItem(thirdT))
            localStorage.setItem(fourthP, localStorage.getItem(thirdP))
            localStorage.setItem(thirdT, localStorage.getItem(secondT))
            localStorage.setItem(thirdP, localStorage.getItem(secondP))
            localStorage.setItem(secondT, localStorage.getItem(firstT))
            localStorage.setItem(secondP, localStorage.getItem(firstP))
            localStorage.setItem(firstT, currentTime);
            localStorage.setItem(firstP, currentPlayer)
            congrats.innerHTML=`Congrats, you are 1st on leaderboard!`
        } else if (currentTime < localStorage.getItem(secondT) || localStorage.getItem(secondT) == null){
            localStorage.setItem(fifthT, localStorage.getItem(fourthT))
            localStorage.setItem(fifthP, localStorage.getItem(fourthP))
            localStorage.setItem(fourthT, localStorage.getItem(thirdT))
            localStorage.setItem(fourthP, localStorage.getItem(thirdP))
            localStorage.setItem(thirdT, localStorage.getItem(secondT))
            localStorage.setItem(thirdP, localStorage.getItem(secondP))
            localStorage.setItem(secondT, currentTime)
            localStorage.setItem(secondP, currentPlayer)
            congrats.innerHTML=`Congrats, you are 2nd on leaderboard!`
        } else if (currentTime < localStorage.getItem(thirdT) || localStorage.getItem(thirdT) == null){
            localStorage.setItem(fifthT, localStorage.getItem(fourthT))
            localStorage.setItem(fifthP, localStorage.getItem(fourthP))
            localStorage.setItem(fourthT, localStorage.getItem(thirdT))
            localStorage.setItem(fourthP, localStorage.getItem(thirdP))
            localStorage.setItem(thirdT, currentTime)
            localStorage.setItem(thirdP, currentPlayer)
            congrats.innerHTML=`Congrats, you are 3rd on leaderboard!`
        } else if (currentTime < localStorage.getItem(fourthT) || localStorage.getItem(fourthT) == null){
            localStorage.setItem(fifthT, localStorage.getItem(fourthT))
            localStorage.setItem(fifthP, localStorage.getItem(fourthP))
            localStorage.setItem(fourthT, currentTime)
            localStorage.setItem(fourthP, currentPlayer)
            congrats.innerHTML=`Congrats, you are 4th on leaderboard!`
        }
        else if (currentTime < localStorage.getItem(fifthT) || localStorage.getItem(fifthT) == null){
            localStorage.setItem(fifthT, currentTime)
            localStorage.setItem(fifthP, currentTime)
            congrats.innerHTML=`Congrats, you are 5th on leaderboard!`
        }
    }
    else {
        congrats.innerHTML='';
    }
}
function countDown() {
    let counter = setInterval(() => {
        timer.style.display="block";
        timerSec = timerSec+1;
        timer.textContent = timerSec;
        let counter = 0;
        //game end
        
        if (score == noCards/2) {
            let checkedRadio = document.querySelector('input[name="levelBoard"]:checked').value
            localStorage.setItem('time', timerSec)
            
            if (checkedRadio=='easy') {
                place('5Time', '4Time', '3Time', '2Time', '1Time', '5', '4', '3', '2', '1')
            }
            else if(checkedRadio =='medium') {
                place('5TimeNewbie', '4TimeNewbie', '3TimeNewbie', '2TimeNewbie', '1TimeNewbie', '5Newbie', '4Newbie', '3Newbie', '2Newbie', '1Newbie')
            } 
            else if(checkedRadio =='hard') {
                place('5TimePro', '4TimePro', '3TimePro', '2TimePro', '1TimePro', '5Pro', '4Pro', '3Pro', '2Pro', '1Pro')
            } 
            else if(checkedRadio =='expert') {
                place('5TimeLegend', '4TimeLegend', '3TimeLegend', '2TimeLegend', '1TimeLegend', '5Legend', '4Legend', '3Legend', '2Legend', '1Legend')
            } 
            let counter = 0;
            proceedAgainBtn = document.querySelector('.proceedAgain');
            proceedAgainBtn.addEventListener('click', ()=>{
                timer.style.display="block";
                cards.forEach(card => {
                    card.classList.remove('show-card');
                    card.classList.remove('flipCard');
                })
            
                setTimeout(() => {    
                    document.querySelector('.notificationPlayAgain').style.display="none";
                    clearInterval(counter);
                    timerSec=0;
                    score=0;
                    printCards();
                }, 500);
                
            })
            cancelAgain = document.querySelector('.cancelAgain');
            cancelAgain.addEventListener('click', ()=>{
                location.href = "index.html"
            })
            setTimeout(() => {
                document.querySelector('.notificationPlayAgain').style.display="block";
                clearInterval(counter);
                score = 0;
                timerSec = 0;
                }, 300);
            }

    }, 1000);

}
form.addEventListener('submit', event => {
    event.preventDefault();
    let checkedDif = document.querySelector('input[type=radio]:checked')
    let checkedBoardDif = document.querySelectorAll('input[name="levelBoard"]')
    checkedBoardDif.forEach(box => {
        if (box.value==checkedDif.value) {
            box.checked = true;
        }
    })

    //game start
    currentPlayer.textContent=username.value;
    localStorage.setItem('username', username.value);
    difLevel(checkedDif);
    printCards();
    
    if (username.value == '') {
        warning.style.opacity="0";
        setTimeout(() => {
            warning.innerHTML="Please enter username"
            warning.style.color="#d80000"
            warning.style.opacity="1";
        }, 300);
    } else {
        checkedDif.checked=false;
        document.getElementById('horn').play();
        overlay.style.display='block';
        document.body.style.opacity = "0";
        setTimeout(() => {
        document.querySelector('.main-content').style.display="none";
        document.querySelector('.board-content').style.display="block";
        overlay.style.display='none';
        document.body.style.opacity = "1";
        themeSong.play();
        countDown()
        }, 2000);
    }
    
})
