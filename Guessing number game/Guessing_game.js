const StartButton = document.getElementById("StartButton");
const ResetButton = document.getElementById("ResetButton");
let Buttons = document.querySelectorAll(".Button1");
const Notification = document.getElementById("Notification");
ResetButton.style.display = "none";
const maxnum = 100;
let attempts = 0;
const Buttons1 = Buttons;


StartButton.onclick = function() {
    StartButton.style.display = "none";
    ResetButton.style.display = "block";

    let answer = Math.floor(Math.random() * maxnum) + 1;

    Buttons.forEach((btn, index) =>{
        btn.disabled = false;
        let guess = index + 1;
        btn.addEventListener('click', () =>{
            if(guess == answer){
                Notification.textContent = "Congratulation, You guessed the number";
                btn.classList.add('correct');
                Buttons.forEach( b => b.disabled = true);
            }
            else if(guess > answer){
                Notification.textContent = "Your guess number is higher than the number";
                btn.classList.add('higher');
            }
            else if(guess < answer){
                Notification.textContent = "Your guess number is lesser than the number";
                btn.classList.add('lesser');
            } 
        });
    });
}
ResetButton.addEventListener('click', function(){
    StartButton.style.display = "block";
    ResetButton.style.display = "none";
    Notification.textContent = "Try to Guess with less attempts";
    Buttons.forEach((btn, index) => {
        btn.classList.remove('correct', 'higher', 'lesser');
        const newbtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newbtn, btn);
    });
    Buttons = document.querySelectorAll(".Button1");
});