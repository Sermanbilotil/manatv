function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("season");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("activetab");
    }
    tablinks = document.getElementsByClassName("video-table__tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).classList.add("activetab");
    evt.currentTarget.className += " active";
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.querySelector('.settings-thumbnail__img').src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
if (document.querySelector('.settings-thumbnail__btn')) {
    document.querySelector('.settings-thumbnail__btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#myInput').click();
    });
    document.querySelector('.settings-thumbnail__remove').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#myInput').value = '';
        document.querySelector('.settings-thumbnail__img').src = 'img/user.png';
    });

}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.site-account__btn');
    const list = document.querySelector('.site-account__list');

// Обробник події для кнопки
    if(btn) {
        btn.addEventListener('click', function () {
            btn.classList.toggle('active');
            list.classList.toggle('active');
        });

    }
    const loginBtns = document.querySelectorAll('.btn--login, .modal__link--login');
    const signupBtns = document.querySelectorAll('.btn--signup, .modal__link--signup');
    const passwordBtns = document.querySelectorAll('.modal__link--password');
    const studyBtn = document.querySelector('.sidebar__btn');
    const studyItems = document.querySelectorAll('.dictionary-item__value');
    const modal = document.querySelector('.overlay--common');
    const modal2 = document.querySelector('.overlay--study');
    const modalClose = document.querySelectorAll('.overlay__bg, .modal__close');

    const modalOpen = (type) => {
        if (document.querySelector('.modal.opened')) {
            document.querySelector('.modal.opened').classList.remove('opened')
        }
        if (type === 'signup') {
            document.querySelector('.modal--signup').classList.add('opened')
        } else if (type === 'login') {
            document.querySelector('.modal--login').classList.add('opened')
        } else {
            document.querySelector('.modal--password').classList.add('opened')
        }
    }

// Обробник події для кнопки

    studyItems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            modal2.classList.toggle('active');
        });
    })
    if (studyBtn) {
        studyBtn.addEventListener('click', function () {
            modal2.classList.toggle('active');
        });
    }
    signupBtns.forEach(function (signupBtn) {
        signupBtn.addEventListener('click', function () {
            modal.classList.add('active');
            modalOpen('signup');
        });
    })
    loginBtns.forEach(function (loginBtn) {
        loginBtn.addEventListener('click', function () {
            modal.classList.add('active');
            modalOpen('login');
        });
    })
    passwordBtns.forEach(function (passwordBtn) {
        passwordBtn.addEventListener('click', function () {
            modal.classList.add('active');
            modalOpen('password');
        });
    })

    modalClose.forEach(function (elem) {
        elem.addEventListener('click', function () {
            if (modal2) {
                modal2.classList.remove('active');
            }
            modal.classList.remove('active');
        });
    });

    const moreButtons = document.querySelectorAll(".season-list-item__more");

// Додаємо подію "click" кожному елементу
    moreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Отримуємо батьківський елемент "season-list-item" для поточного елементу
            const parentItem = button.closest(".season-list-item");

            // Знаходимо елемент з класом "season-list-item__description" у батьківському елементі
            const description = parentItem.querySelector(".season-list-item__description");

            // Додаємо клас "opened" до елементу "season-list-item__description"
            description.classList.toggle("opened");

            if (button.dataset.closed === 'true') {
                button.textContent = button.dataset.less;
                button.dataset.closed = 'false';
            } else {
                button.dataset.closed = 'true';
                button.textContent = button.dataset.more;
            }
        });
    });
    const faqButtons = document.querySelectorAll(".faq-item__header");

// Додаємо подію "click" кожному елементу
    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Отримуємо батьківський елемент "season-list-item" для поточного елементу
            const parentItem = button.closest(".faq-item");

            // Знаходимо елемент з класом "season-list-item__description" у батьківському елементі

            // Додаємо клас "opened" до елементу "season-list-item__description"
            parentItem.classList.toggle("opened");
        });
    });

    const burgerButton = document.querySelector(".burger-btn");
    const menuNav = document.querySelector(".site-header-menu__nav");


// Додаємо подію "click" до елементу "burger-btn"
   if(burgerButton) {
       burgerButton.addEventListener("click", () => {
           // Додаємо клас "active" до елементу "site-header-menu__nav"
           menuNav.classList.toggle("active");
           burgerButton.classList.toggle("active");
       });
   }
})

// JavaScript код для створення кастомних селектів
const selectElements = document.querySelectorAll('.select');

selectElements.forEach(function (selectElement) {
    const options = selectElement.querySelectorAll('option');
    const customSelect = document.createElement('div');
    const selectHeader = document.createElement('div');
    const optionsList = document.createElement('ul');

    // Задати класи для створених елементів
    customSelect.classList.add('custom-select');
    selectHeader.classList.add('select-header');
    optionsList.classList.add('options-list');

    // Створити заголовок для кастомного селекта
    const selectedOption = document.createElement('span');
    selectedOption.classList.add('selected-option');
    selectedOption.textContent = 'Виберіть опцію';

    // Створити іконку для кастомного селекта (стрілка)
    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('arrow-icon');

    // Додати заголовок та іконку в заголовок селекта
    selectHeader.appendChild(selectedOption);
    selectHeader.appendChild(arrowIcon);

    // Додати пункти списку зі значень <option> у список опцій
    options.forEach(function (option) {
        const li = document.createElement('li');
        li.textContent = option.textContent;
        li.style.color = option.dataset.color;
        li.addEventListener('click', function (){
            selectedOption.textContent = li.textContent;
            selectedOption.style.color = option.dataset.color;
            selectHeader.classList.remove('opened')
            optionsList.classList.remove('opened')
        })
        optionsList.appendChild(li);
    });

    // Додати список опцій до кастомного селекта
    customSelect.appendChild(selectHeader);
    customSelect.appendChild(optionsList);

    selectHeader.addEventListener('click', function (){
        selectHeader.classList.toggle('opened')
        optionsList.classList.toggle('opened')
    })

    // Замінити початковий <select> на кастомний селект
    selectElement.parentNode.replaceChild(customSelect, selectElement);
});


// JavaScript код для додавання класу active при кліку
const favButtons = document.querySelectorAll('.videos-list-item__fav');

favButtons.forEach(function (favButton) {
    favButton.addEventListener('click', function (e) {
        e.preventDefault()
        this.classList.toggle('active');
    });
});

// Отримайте всі радіокнопки з name="dictionary-type"
var radioButtons = document.querySelectorAll('input[type="radio"][name="dictionary-type"]');

// Отримайте контейнер зі списком
var dictionaryList = document.querySelector('.dictionary-list');

// Додайте обробник подій для кожної радіокнопки
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
            // Отримайте значення вибраної радіокнопки
            var selectedValue = this.value;

            // Видаліть всі існуючі класи модифікатора
            dictionaryList.className = 'dictionary-list';

            // Додайте клас модифікатора, використовуючи значення радіокнопки
            dictionaryList.classList.add('dictionary-list--' + selectedValue);

            var listItems = document.querySelectorAll('.dictionary-item');
            listItems.forEach( function (listItem){
                var translationElement = listItem.querySelector('.dictionary-item__translation');
                var languagesElement = listItem.querySelector('.dictionary-item__languages');

                // Визначте контейнер, в який будемо переміщати елементи
                var destinationContainer;

                // Визначте місце, куди перемістити елементи в залежності від значення радіокнопки
                if (selectedValue === 'listing') {
                    // Якщо value === 'listing', перемістіть .dictionary-item__translation після .dictionary-item__value
                    destinationContainer = listItem.querySelector('.dictionary-item__value');
                    // Перемістіть .dictionary-item__translation в потрібний контейнер
                    destinationContainer.after(translationElement);
                } else {
                    // В іншому випадку перемістіть .dictionary-item__translation перед .dictionary-item__languages
                    destinationContainer = listItem.querySelector('.dictionary-item__body');
                    // Перемістіть .dictionary-item__translation в потрібний контейнер
                    destinationContainer.prepend(translationElement);
                }

            })
        }
    });
});


if (document.querySelector('.dictionary-item')) {
    // Отримуємо всі елементи з класом '.btn-icon.btn-icon--fav'
    const favoriteButtons = document.querySelectorAll('.btn-icon.btn-icon--fav');

// Перебираємо всі знайдені елементи та додаємо обробник подій для кожного з них
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Знаходимо батьківський блок .dictionary-item і видаляємо його
            const parentItem = button.closest('.dictionary-item');
            if (parentItem) {
                parentItem.remove();
            }
        });
    });
    document.querySelector('.btn-delete-all').addEventListener('click', () => {
        document.querySelectorAll('.dictionary-item').forEach(el => {
            el.remove();
        })
    })
    // Отримуємо чекбокс за його id
    const translationCheckbox = document.getElementById('translation');

// Отримуємо всі елементи з класом 'dictionary-item__translation'
    const translationElements = document.querySelectorAll('.dictionary-item__translation, .dictionary-item__languages, .dictionary-item__header, .dictionary-item');

// Додаємо обробник подій до чекбоксу
    translationCheckbox.addEventListener('change', () => {
        // Перевіряємо, чи чекнутий чекбокс
        if (translationCheckbox.checked) {
            // Якщо чекнутий, то видаляємо клас 'hidden' з усіх елементів з класом 'dictionary-item__translation'
            translationElements.forEach(element => {
                element.classList.remove('hidden');

            });
        } else {
            // Якщо не чекнутий, то додаємо клас 'hidden' усім елементам з класом 'dictionary-item__translation'
            translationElements.forEach(element => {
                element.classList.add('hidden');
            });
        }
    });

}
