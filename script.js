'use strict';

let player = document.querySelector('.player--0');
let casino = document.querySelector('.player--1');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let cardEl = document.querySelector('.card');
let currentEl1 = document.getElementById('current--0');
let currentEl2 = document.getElementById('current--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');


let scores,activePlayer,playGame,currentScore;
let CasinoPulls=[0,0,0];  

const init = function()
{
    score1.textContent = '👨‍💼';
    score2.textContent=`🤵`;
    currentEl1.textContent = 0;
    currentEl2.textContent = 0;
    player.classList.remove('player--winner');
    casino.classList.remove('player--winner');
    player.classList.add('player--active');
    casino.classList.remove('player--active');
    cardEl.classList.add('hidden');
    currentScore = 0;
    scores = [0,0];
    playGame = true;
    activePlayer = 0;
    


}

init();

const switchPlayer=function()
{
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    

    player.classList.toggle('player--active');
    casino.classList.toggle('player--active');   
}

const rollCard=function()
{
   
   let card=Math.trunc(Math.random()*52)+1;
   cardEl.classList.remove('hidden');
   
   cardEl.src=`cards/${card}.png`;

   if(card<=4) 
   {
       currentScore+=2;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
       
   }  
   else if(card>4 && card<=8)
   {
       currentScore+=3;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>8 && card<=12)
   {
       currentScore+=4;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>12 && card<=16)
   {
       currentScore+=5;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>16 && card<=20)
   {
       currentScore+=6;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>20 && card<=24)
   {
       currentScore+=7;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>24 && card<=28)
   {
       currentScore+=8;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>28 && card<=32)
   {
       currentScore+=9;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else if(card>36 && card<=40)
   {
      if(currentScore+11>21)
      {
        currentScore+=1;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
      }
      else
      {
        currentScore+=11;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
      }
   }
   else
   {
     currentScore+=10;
     document.getElementById(`current--${activePlayer}`).textContent=currentScore;

       
   }
}

btnRoll.addEventListener('click', function()
{
    if(playGame)
    {
      if(currentAccount.balance>=10)
      {
        rollCard();

        if(document.getElementById(`current--0`).textContent>21)
        {
            
            document.querySelector(`.player--1`).classList.add('player--winner');
            document.querySelector(`.player--0`).classList.remove('player--active');
            document.querySelector('#score--1').textContent=`🤣`;
            document.getElementById(`score--0`).textContent='>21';
            playGame = false;
            kasaP();
        }

        if(document.getElementById(`current--0`).textContent==21)
        {
          
          document.querySelector(`.player--0`).classList.add('player--winner');
          document.querySelector('#score--1').textContent=`😡`;
          document.getElementById(`current--0`).textContent='WIN!';
          document.getElementById(`score--0`).textContent='21 pkt!';
          casino.classList.remove('player--active');
          kasaW();
          playGame = false;
        }
      }
      else
      {
        alert("Nie masz żetonów!");
      }
  }

})

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

btnHold.addEventListener('click',function()
{
    if(playGame)
    {
      if(document.getElementById(`current--0`).textContent>0) 
      {
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

            switchPlayer();
            
            document.getElementById(`current--1`).textContent=0;
            
            while(document.getElementById(`current--1`).textContent<scores[0])
            { 
              rollCard();                                          
            }
            cardEl.classList.add('hidden');

            if(document.getElementById(`current--1`).textContent==21)
              { 
                document.querySelector(`.player--1`).classList.add('player--winner');
                document.querySelector('#score--1').textContent=`🤣`;
                document.getElementById(`current--0`).textContent='LOSS!';  
                kasaP();
              }
            else if(document.getElementById(`current--1`).textContent<21)
              {
              document.querySelector(`.player--1`).classList.add('player--winner');
              document.querySelector('#score--1').textContent=`🤣`; 
              document.getElementById(`current--0`).textContent='LOSS!';
              kasaP();
              }
            else
              {
                document.querySelector(`.player--0`).classList.add('player--winner');
                document.querySelector('#score--1').textContent=`😡`;
                document.getElementById(`current--0`).textContent='WIN!';
                casino.classList.remove('player--active');
                kasaW();
              }

            playGame = false;
            
            
        
    }}
});

btnNew.addEventListener('click',function()
{
  cardEl.classList.add('hidden');
  init();
});


const account1 = {
  owner: 'Karol Przybysz',
  movements: [10, 10, 10,10,10],
  pin: 1111,
};

const account2 = {
  owner: 'Tina Turner',
  movements: [10,10,10],
  pin: 2222,
};

const account3 = {
  owner: 'Eros Ramazotti',
  movements: [-30,-30,-30],
  pin: 3333,
};

const accounts = [account1, account2, account3];

const labelWelcome = document.querySelector('.welcome');
const labelBalance = document.querySelector('.balance__value');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');


const displayMovements = function(movements, sort = false)
{
  containerMovements.innerHTML ='';
  const movs = sort ? movements.slice().sort((a,b) => a-b ) : movements;
  movs.forEach(function(mov, i)
  {
    const type = mov>0 ? 'wygrana' : 'przegrana';

    const html = `

      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

console.log(containerMovements);

const createUserNames = function(arr_with_accounts)
{
  arr_with_accounts.forEach(function(one_acc)
  {
    one_acc.username = one_acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
    
  });
};

createUserNames(accounts);
//console.log(accounts);

const updateUI=function(acc)
{ 
 displayMovements(acc.movements);
 calcDisplayBalance(acc);
}

const kasaP=function()
{  
  const amount=10; 

  if(currentAccount.balance>=amount)
  {
    currentAccount.movements.push(-amount);  
    updateUI(currentAccount);   
  }
}

const kasaW=function()
{
  
  const amount=10;
  
    currentAccount.movements.push(amount);
    updateUI(currentAccount);   
  
}

const calcDisplayBalance=function(acc)
{
  acc.balance = acc.movements.reduce((acc, mov) => acc+mov,0);
  labelBalance.textContent = `${acc.balance}`;
}


let currentAccount;
btnLogin.addEventListener('click', function(e)
{
  
  e.preventDefault();
  currentAccount=accounts.find(acc => acc.username === inputLoginUsername.value);
  //console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value))
  {
    
    labelWelcome.textContent=`Witaj ponownie, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;
   
    updateUI(currentAccount);
    
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
  }
  else {
    labelWelcome.textContent=`Podałeś złe dane`;
  }
})

btnLoan.addEventListener('click', function(e)
{
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);

  if(amount>0 && amount%10==0)
  {
    currentAccount.movements.push(amount);
    calcDisplayBalance(currentAccount);
    alert('Kupiono żetony! Z twojego konta bankowego zostały pobrane pieniądze!');
    inputLoanAmount.value=inputLoanAmount.value='';
    
  }
})

