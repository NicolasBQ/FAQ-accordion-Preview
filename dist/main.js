let listItems = document.querySelectorAll('.main__faq-list-component');

const showAnswer = (e) => {
    let arrow = e.target.firstElementChild.lastElementChild;
    let question = e.target.firstElementChild.firstElementChild;
    let answer = e.target.lastElementChild;

    question.classList.toggle('question__active');
    arrow.classList.toggle('down-arrow__rotate');
    answer.classList.toggle('answer__active');
}


listItems.forEach(item => {
    item.addEventListener('click', showAnswer);
});