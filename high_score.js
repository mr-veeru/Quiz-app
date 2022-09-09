const high_score_list = document.getElementById("high_score_list");
const high_score = JSON.parse(localStorage.getItem("high_score")) || [];

high_score_list.innerHTML = 
high_score.map(score =>
{
    return `<li class="high_score"> ${score.name} - ${score.score} </li>`;
}).join("");
