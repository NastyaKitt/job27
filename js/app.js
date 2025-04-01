document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".reviewItem");
    const totalReviews = reviews.length;
    let currentIndex = 0;
    const reviewsPerPage = 2; // Всегда показывать 4 отзыва

    // Функция для отображения текущих отзывов
    function showReviews() {
        // Сначала скрываем все отзывы
        reviews.forEach((review) => {
            review.classList.remove("show");
        });

        // Показываем 4 текущих отзыва
        for (let i = currentIndex; i < currentIndex + reviewsPerPage; i++) {
            const indexToShow = (i + totalReviews) % totalReviews; // Бесконечный эффект
            reviews[indexToShow].classList.add("show");
        }
    }

    // Функция для переключения влево
    function showPrevious() {
        currentIndex = (currentIndex - reviewsPerPage + totalReviews) % totalReviews;
        showReviews();
    }

    // Функция для переключения вправо
    function showNext() {
        currentIndex = (currentIndex + reviewsPerPage) % totalReviews;
        showReviews();
    }

    // Начальное отображение
    showReviews();

    // Обработчики событий для кнопок
    document.getElementById("left").addEventListener("click", showPrevious);
    document.getElementById("right").addEventListener("click", showNext);
});
//


let clsForm = document.getElementById('clsForm')
let formWin = document.getElementById('formWin')
let callForm = document.getElementById('callForm')
let callForm1 = document.getElementById('callForm1')
let callForm2 = document.getElementById('callForm2')
let callForm3 = document.getElementById('callForm3')
let callForm4 = document.getElementById('callForm4')
let callForm5 = document.getElementById('callForm5')
let callForm6 = document.getElementById('callForm6')
let callForm7 = document.getElementById('callForm7')

callForm.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm1.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm2.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm3.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm4.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm5.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm6.addEventListener('click', function() {
    formWin.classList.add('show')
})
callForm7.addEventListener('click', function() {
    formWin.classList.add('show')
})
clsForm.addEventListener('click', function() {
    formWin.classList.remove('show')
})


// 
let clsPolit = document.getElementById('clsPolit')
let popupPolit = document.getElementById('popupPolit')
let callPolit = document.getElementById('callPolit')


callPolit.addEventListener('click', function() {
    popupPolit.classList.add('show')
})
clsPolit.addEventListener('click', function() {
    popupPolit.classList.remove('show')
})


// 

function setCursorPosition(pos, input) {
    input.focus();
    if (input.setSelectionRange) {
        input.setSelectionRange(pos, pos);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(event) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""), // шаблон без нецифровых символов
        val = this.value.replace(/\D/g, ""); // текущее значение без нецифровых символов
    
    // Проверяем, чтобы длина значения не превышала длину шаблона
    if (def.length >= val.length) {
        val = def; 
    }

    // Используем регулярное выражение для создания маски
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"; // замена символов в маске на введенные значения
    });

    this.value = matrix; // обновляем значение input

    // Устанавливаем позицию курсора
    i = matrix.lastIndexOf(val.substr(-1));
    if (i < matrix.length && matrix !== this.placeholder) {
        i++;
    } else {
        i = matrix.indexOf("_");
    }
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel")]; // массив инпутов с телефонами
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false); // добавляем обработчик события на input
        input.addEventListener("focus", function() {
            if (this.value === "") {
                setCursorPosition(3, this); // устанавливаем курсор на пустом поле
            }
        }, false);
        input.addEventListener("blur", function() {
            if (this.value.replace(/\D/g, "").length === 0) {
                this.value = ""; // очищаем поле, если ничего не ввели
            }
        }, false);
    });
});