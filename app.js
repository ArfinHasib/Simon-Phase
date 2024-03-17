let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

let btns = ['red', 'green', 'blue', 'yellow'];

document.addEventListener('keypress', () => {
   if (started === false) {
      console.log('Game Started');
      started = true;

      levelUp();
   }
});

const gameFlash = (btn) => {
   btn.classList.add('flash');
   setTimeout(() => {
      btn.classList.remove('flash');
   }, 250);
};

const userFlash = (btn) => {
   btn.classList.add('userflash');
   setTimeout(() => {
      btn.classList.remove('userflash');
   }, 250);
};

const levelUp = () => {
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let randomIdx = Math.floor(Math.random() * 3);
   let randomColor = btns[randomIdx];
   let randomBtn = document.querySelector(`.${randomColor}`);

   gameSeq.push(randomColor);
   console.log(gameSeq);

   gameFlash(randomBtn);
};

const checkAnswer = () => {
   // console.log(`Curr Level ${level}`);
   let idx = level - 1;

   if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length === gameSeq.length) {
         setTimeout(() => {
            levelUp();
         }, 1000);
      }
   } else {
      h2.innerText = `Game Over! Press any key to start.`;
   }
};

const btnPress = (e) => {
   let btn = e.target;
   userFlash(btn);

   userColor = btn.getAttribute('id');
   userSeq.push(userColor);

   checkAnswer(userSeq.length - 1);
};

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
   btn.addEventListener('click', btnPress);
}
