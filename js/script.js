// Массив с с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какого числа был проведен первый парад Победы на Красной площади в Москве?",
        correctAnswer: "24 июня 1945"
    },
    {
        question: "Какой город РФ в годы ВОВ выдержал 900-дневную осаду немецких оккупантов?",
        correctAnswer: "Ленинград"
    },
    {
        question: "Сколько лет продолжалась ВОВ?",
        correctAnswer: "4 года"
    },
    {
        question: "Какой город носит звание 'Город-герой' за подвиги в года ВОВ?",
        correctAnswer: "Севастополь"
    },
    {
        question: "Где был подписан акт о безоговорной капитуляции гитлеровской Германии?",
        correctAnswer: "в Берлине"
    },
    {
        question: "Какая дата отмечается как День Победы В Великой Отечественной войне?",
        correctAnswer: "9 мая"
    },
    {
        question: "Как назывался высший орден периода ВОВ?",
        correctAnswer: "Победа"
    }
]
let currentQuestion = 0 //текущий вопрос
let correctAnswers = 0 // количество правильных ответов
let questionElement = document.getElementById('question'); // 
let answerInput = document.getElementById('answerInput'); // получить блок для размещенния инпута и кнопки


function displayQuestion() {
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    answerInput.innerHTML = '';
    let input = document.createElement('input');
    input.classList.add('input');
    let btn = createElement('button');
    btn.classList.add('btn');
    btn.addEventlistener('click', (e) => {
        nextQuestion(input.value)
    })
}