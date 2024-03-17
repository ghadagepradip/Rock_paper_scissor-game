let yourscore = 0;
let compscore = 0;

// const rock =document.querySelector(".rock");
// const paper =document.querySelector(".paper");
// const scissor =document.querySelector(".scissor");

// console.log("js running..");
// console.log(rock);
// console.log(paper);
// console.log(scissor);
// console.log(opt);


const choices = document.querySelectorAll(".h");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#usersco");
const computerscorepara = document.querySelector("#comsco");

// console.log(msg);

const gencomchoice = () =>
{
    const options = ["rock","paper","scissor"];
    const randomindx = Math.floor(Math.random()*3);
    return options[randomindx];

};  

const drawgame =()=>
{
    msg.innerText = "Game draw.Play again...";
    msg.style.backgroundColor ="#333";
}

const winner = (userwin,userchoice,comchoice)=>
{
    if(userwin)
    {
        yourscore++;
        userscorepara.innerText = yourscore;
       msg.innerText = `You win! your ${userchoice} beats ${comchoice}`;
       msg.style. backgroundColor ="green";
    }
    else
    {
        compscore++;
        computerscorepara.innerText = compscore;
        msg.innerText = `You lost. ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playgame = (userchoice)=>{
    // console.log("userchoice ",userchoice);
    const comchoice = gencomchoice();
    // console.log("computerchoice ",comchoice);

    if(userchoice === comchoice)
    {
        drawgame();
    }
    else
    {
        let userwin =true;
        if(userchoice === "rock")
        {
            userwin = comchoice === "paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            userwin = comchoice ==="scissor"?false:true;
        }
        else
        {
            userwin = comchoice ==="rock"?false:true;
        }
        winner(userwin,userchoice,comchoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        var userchoice =choice.getAttribute("id");
        console.log("clicked ",userchoice);   
        playgame(userchoice);     
    });
});


