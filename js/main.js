
let arrCharacter = [];
let mainScreenDiv = document.getElementById('mainScreen');
let fightScreenDiv = document.getElementById('fightScreen');
let winnerDiv = document.getElementById('winnerText');
let healthBar1 = document.getElementById('healthBarP1');
let healthBar2 = document.getElementById('healthBarP2');
let winnerText = document.getElementById('theWinnerIs');

class Character {
    constructor(name, attack, defense, life, speed, quote, picture) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.life = life;
        this.speed = speed;
        this.quote = quote;
        this.picture = picture;

    }
}

fightScreenDiv.style.visibility = 'hidden';
winnerDiv.style.visibility = 'hidden';


let f1 = new Character("dk", 4, 2, 100, 8, "Don King Kong Win!", "dk.png");
let f2 = new Character("kd", 4, 2, 100, 8, "King Dedede win", "kd.png");
let f3 = new Character("Link", 4, 2, 100, 8, "Link win", "Link.png");
let f4 = new Character("boy", 4, 2, 100, 8, "Inkling win", "boy.png");


function characterSelect(character) {
    if (character == 'Character1') {
        printCharacter("dk.png")
        arrCharacter.push(f1);
    } else if (character == 'Character2') {
        printCharacter("kd.png")
        arrCharacter.push(f2);
    } else if (character == 'Character3') {
        printCharacter("Link.png")
        arrCharacter.push(f3);
    } else {
        printCharacter("boy.png")
        arrCharacter.push(f4);
    }
}

function printCharacter(character) {
    if (arrCharacter.length < 2) {
        if (arrCharacter.length == 1) {
            let img = document.createElement('img');
            img.src = '/img/p1/' + character;
            document.getElementById('p2vs').appendChild(img)
        } else {
            let img = document.createElement('img');
            img.src = '/img/p1/' + character;
            document.getElementById('p1vs').appendChild(img)

        }
    }
}

function startFight (){
    let img = document.createElement('img');
    img.src = '/img/p1/' + arrCharacter[0].picture;
    document.getElementById('imageP1').appendChild(img)

    let img2 = document.createElement('img');
    img2.src = '/img/p1/' + arrCharacter[1].picture;
    document.getElementById('imageP2').appendChild(img2)
}

function startGameClick() {
    if (arrCharacter.length == 2) {
        mainScreenDiv.style.visibility = 'hidden';
        fightScreenDiv.style.visibility = 'visible';
        startFight();
    }
}

function attack (fighter) {
    if (fighter == 0){
        if ((healthBar2.value + arrCharacter[0].defense) - arrCharacter[1].attack >= 0){
        healthBar2.value -=  arrCharacter[1].attack - arrCharacter[0].defense;
        } else{
            healthBar2.value = 0;
            finish (0);
        }
    }else{
        if ((healthBar1.value + arrCharacter[1].defense) - arrCharacter[0].attack >= 0){
            healthBar1.value -= arrCharacter[0].attack - arrCharacter[1].defense;
        } else{
            healthBar2.value = 0;
             finish (1);
        }
    }
}

function finish (winner){
    fightScreenDiv.style.visibility = 'hidden';
    winnerDiv.style.visibility = 'visible';
    winnerText.textContent += arrCharacter[winner].quote;
}


