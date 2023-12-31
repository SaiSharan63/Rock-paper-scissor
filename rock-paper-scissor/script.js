

const choices= document.querySelectorAll(".choice")
const msg= document.querySelector("#result")
let user_score= document.querySelector(".user-score")
let comp_score= document.querySelector(".comp-score")

comp_score.innerText=0
user_score.innerText=0

const comValGen=()=>{
    const options =["rock","paper","scissor"]
    ind=Math.floor(Math.random()*3)
    return options[ind]
}
const playGame=(user)=>{
    const computer= comValGen()
    if ((user=="rock" && computer=="paper") ||  (user=="paper" && computer=="scissor") ||(user=="scissor" && computer=="rock"))
    {
        // console.log("you were lost ")
        msg.innerText = "You lost! Better Luck Next Time";
        msg.style.backgroundColor="red"
        comp_score.innerText=parseInt(comp_score.innerText)+1

        
    }
    else if(user==computer){
        // console.log("This was tied")
        msg.innerText = "Tied ! Better Luck Next Time";
        msg.style.backgroundColor="white"
    }
    else if((user=="rock" && computer=="scissor")  || (user=="scissor" && computer=="paper") || (user=="paper" && computer=="rock"))
    {
        // console.log("you won the game")
        msg.innerText = "You won! Congratulations";
        msg.style.backgroundColor="green"
        user_score.innerText=parseInt(user_score.innerText)+1
    }
    // console.log(`computer choice is: ${computer}`)
    
}
choices.forEach(val => {
    
    val.addEventListener("click",()=>{
        const choiceId= val.getAttribute("id")
        playGame(choiceId)
        // console.log(`your choice : ${choiceId} `)
    })
    
});