const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progress_text = document.getElementById("progress_text");
const score_text = document.getElementById("score");
const progress_bar_full = document.getElementById("progress_bar_full");

let current_ques = {};
let accept_ans = false;
let score = 0;
let ques_count = 0;
let available_ques = [];

let questions = 
[
    {  
        question: "Which language runs in a web browser?",  
        choice1: "Java",  
        choice2: "C",  
        choice3: "Python",  
        choice4: "JavaScript",  
        answer: 4  
    },
    {  
        question: "What does CSS stand for?",  
        choice1: "Central Style Sheets",  
        choice2: "Cascading Style Sheets",  
        choice3: "Cascading Simple Sheets",  
        choice4: "Cars SUVs Sailboats",  
        answer: 2
    },
    {  
        question: "What does HTML stand for?",  
        choice1: "Hypertext Markup Language",  
        choice2: "Hypertext Markdown Language",  
        choice3: "Hyperloop Machine Language",  
        choice4: "Helicopters Terminals Motorboats Lamborginis",  
        answer: 1 
    },
    {  
        question: "What year was JavaScript launched?",  
        choice1: "1996",  
        choice2: "1995",  
        choice3: "1994",  
        choice4: "none of the above",  
        answer: 2  
    },
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
      }
]

const bonus = 10;
const max_ques = 4;

start_game = () => 
{
    ques_count = 0;
    score = 0;
    available_ques = [...questions];
    get_new_ques();
};

get_new_ques = () =>
{

    if(available_ques === 0 || ques_count >= max_ques)
    {
        localStorage.setItem("most_recent_score", score);
        return window.location.assign("end.html")
    }

    ques_count++;
    progress_text.innerText = `Questions ${ques_count} / ${max_ques}`;
    progress_bar_full.style.width = `${(ques_count / max_ques * 100)}%`;

    const ques_index = Math.floor(Math.random() * available_ques.length);
    current_ques = available_ques[ques_index];
    question.innerText = current_ques.question;

    choices.forEach(choice => 
    {
        const number = choice.dataset["number"];
        choice.innerText = current_ques["choice" + number];
    });
    available_ques.splice(ques_index, 1);
    accept_ans = true;
}
start_game();

choices.forEach(choice => 
{
    choice.addEventListener("click", e =>
    {
        if(!accept_ans)
            return;

        accept_ans = false;
        const selected_choice = e.target;
        const selected_ans = selected_choice.dataset["number"];

        const class_to_Apply =
            selected_ans == current_ques.answer ? 'correct' : 'incorrect';

        if(class_to_Apply === 'correct')
            increment_score(bonus)

        selected_choice.parentElement.classList.add(class_to_Apply);

        setTimeout(() => {
            selected_choice.parentElement.classList.remove(class_to_Apply);
            get_new_ques();
        }, 1000);
    })
});

increment_score = num =>
{
    score = score + num;
    score_text.innerText = score;
}