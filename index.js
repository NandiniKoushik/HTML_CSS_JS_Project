const questionEl = document.getElementById("question")
const answerEl = document.getElementById("answer_input")
const questionform = document.getElementById("quest_form")
const scoreEl = document.getElementById("score")
let stroedanswer;
let score = localStorage.getItem("score");
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generatequestion = () => {
    const randomnumber1 = randomNumber(1, 10);
    const randomnumber2 = randomNumber(1, 10);
    let questionvalue = randomNumber(1, 4)
    let question;
    let answer;
    let firstnum;
    let secondnum;
    if (randomnumber1 < randomnumber2 && questionvalue > 2) {
        firstnum = randomnumber2;
        secondnum = randomnumber1;
    }
    else {
        firstnum = randomnumber1;
        secondnum = randomnumber2;
    }
    switch (questionvalue) {
        case 1:
            {
                question = `Q:What is ${firstnum} multiply by ${secondnum}?`;
                answer = firstnum * secondnum;
                break;
            }
        case 2:
            {
                question = `Q:What is ${firstnum} Added to ${secondnum}?`;
                answer = firstnum + secondnum;
                break;
            }
        case 3:
            {
                question = `Q:What is ${firstnum} Divided by ${secondnum}?`;
                answer = firstnum / secondnum;
                break;
            }
        case 4:
            {
                question = `Q:What is ${firstnum} Subtracted from ${secondnum}?`;
                answer = firstnum - secondnum;
                break;
            }
    }
    return { question, answer }
}
const showcontent = () => {
    let { question, answer } = generatequestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
    stroedanswer = answer;
}
showcontent();
const getdata = (event) => {
    event.preventDefault();
    let data = new FormData(questionform);
    const userAnswer = +data.get("answer")
    if (userAnswer === stroedanswer) {
        score += 1;
        Toastify({
            text: `Your answer is correct! your score is now ${score}`,
            className: "info",
            gravity: "bottom",
            position:"center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
    else {
        score -= 1;
        Toastify({
            text: `Your answer is wrong! your score is now ${score}`,
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #e33217, #ff001e)",
            }
        }).showToast();
    }
    scoreEl.innerText = score;
    localStorage.setItem("score", score)
    event.target.reset();
    showcontent();
}

