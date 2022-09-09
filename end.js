const user_name = document.getElementById("user_name");
const save_score_btn = document.getElementById("save_score_btn");
const final_score = document.getElementById('final_score');
const most_recent_score = localStorage.getItem('most_recent_score');

const high_score = JSON.parse(localStorage.getItem("high_score")) || [];

const max_high_score = 5;

final_score.innerText = most_recent_score;


user_name.addEventListener("keyup", () =>
{
    save_score_btn.disabled = !user_name.value;
});

save_high_score = e =>
{
    console.log("clicked the save button");
    e.preventDefault();

    const score =
    {
        score: most_recent_score,
        name: user_name.value
    };
    high_score.push(score);
    high_score.sort((a,b) => b.score - a.score)
    high_score.splice(5);

    localStorage.setItem("high_score", JSON.stringify(high_score));
    window.location.assign("quiz.html");
}