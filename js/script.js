// массив с вопросами и ответами
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
        question: "Какой город ноит звание 'город-герой' за подвиги в года ВОВ?",
        correctAnswer: "Севастополь"
    },
    {
        question: "Где был подписан акт о безаговорной капитуляции гитлеровской Германии?",
        correctAnswer: "в Берлине"
    },
    {
        question: "Какая дата отмечается как Деень Победы в Великой Отечественной войне?",
        correctAnswer: "9 Мая"
    },
    {
        question: "Как назывался высший орден переода ВОВ?",
        correctAnswer: "Победа"
    }
]

let currentQuestion = 0 // текущий вопрос
let correctAnswer = 0 // колиество правильных ответов

function displayQuestion() {
    let questionElement = document.getElementById('question');
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    let optionsElement = document.getElementById('option');
    optionsElement.innerHTML='';

    
        let answerInput = document.getElementById('answerInput');
        let input = document.createElement('input');
        input.classList.add('input');   
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = '>';
        answerInput.append(input, btn);
        btn.addEventListener('click', (e) => {
            e.preventDefault
            nextQuestion(answerInput.value)
            let target = e.target;
            nextQuestion(target.textContent);
    }, { once: true });
}

// функция перехода к следующему вопросу
function nextQuestion(answer) {
    // если кликнули на правитьный ответ то 
    if (answer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
        // увеличиваем на 1 счетчик правильных ответов
        correctAnswers++;
    }
    currentQuestion++; // перейти к следующему вопросу 
    if (currentQuestion < questions.length) {
        displayQuestion(); // отобразить следующий вопрос
    } else {
        displayResult();
    }
};

// функция отображения результатов теста
function displayResult() {
    let questionElement = document.getElementById('question'); // получить блок с вопросом
    let optionsElement = document.getElementById('options'); // получить блок с кнопками
    let resultElement = document.getElementById('result'); // получить блок дл яотображения результата
    let wrongAnswer = question.value
    questionElement.style.display = 'none'; // выключить видимость блока вопросов
    optionsElement.style.display = 'none'; // выключить видимость блока ответов
    let procent = (correctAnswers / questions.length) * 100;
    resultElement.textContent = `правильных ответов ${correctAnswers} из ${questions.length} (${procent.toFixed(0)}%)`;// отобразить результат теста
}

displayQuestion();