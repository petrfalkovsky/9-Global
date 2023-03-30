// первый вариант
// const btnChangeLanguage = document.getElementById("btn-change-language");
// const navEng = document.getElementById("nav-english");
// const navRu = document.getElementById("nav-russian");

// btnChangeLanguage.addEventListener("click", function () {
//   if (navEng.style.display !== "none") {
//     navEng.style.transition.opacity = "opacity 0.3s ease-in-out";
//     navEng.style.opacity = "0.3";
//     setTimeout(() => {
//       navEng.style.display = "none";
//       navRu.style.display = "block";
//       navRu.style.opacity = "1";
//     }, 300);
//   } else {
//     navRu.style.transition = "opacity 0.3s ease-in-out";
//     navRu.style.opacity = "0";
//     setTimeout(() => {
//       navRu.style.display = "none";
//       navEng.style.display = "block";
//       navEng.style.opacity = "1";
//     }, 300);
//   }
// });

// второй вариант
// const changeBtn = document.getElementById("btn-change-language");
// const changeTextElements = document.querySelectorAll(".");

// changeBtn.addEventListener("click", function () {
//   for (let i = 0; i < changeTextElements.length; i++) {
//     changeTextElements[0].textContent = "Перевод1";
//     changeTextElements[1].textContent = "Перевод2";
//   }
// });

// третий вариант
// const changeBtn = document.getElementById("btn-change-language");
// const changeTextElements = document.querySelectorAll(".");

// let isTextChanged = false;

// changeBtn.addEventListener("click", function () {
//   if (!isTextChanged) {
//     for (let i = 0; i < changeTextElements.length; i++) {
//       changeTextElements[0].textContent = "Перевод1";
//       changeTextElements[1].textContent = "Перевод2";
//     }
//     isTextChanged = true;
//   } else {
//     for (let i = 0; i < changeTextElements.length; i++) {
//       changeTextElements[0].textContent = "Исходный текст1";
//       changeTextElements[1].textContent = "Исходный текст2";
//     }
//     isTextChanged = false;
//   }
// });

//короткая запись функции
// const sourceText0 = "Исходный текст 0";
// const translate0 = "Перевод0";
// const changeBtn = document.getElementById("btn-change-language");
// const changeTextElements = document.querySelectorAll(".");

// let isTextChanged = false;

// changeBtn.addEventListener("click", function () {
//   if (!isTextChanged) {
//     for (let i = 0; i < changeTextElements.length; i++) {
//       changeTextElements[i].style.transition = "opacity 0.3s ease-in-out";
//       changeTextElements[i].style.opacity = "0";
//       setTimeout(() => {
//         changeTextElements[i].style.display = "none";
//         changeTextElements[i].style.display = "block";
//         changeTextElements[i].style.opacity = "1";
//       }, 300);
//     }
//     setTimeout(function () {
//       for (let i = 0; i < changeTextElements.length; i++) {
//         changeTextElements[0].textContent = translate0;

//       }
//     }, 300);
//     isTextChanged = true;
//   } else {
//     for (let i = 0; i < changeTextElements.length; i++) {
//       changeTextElements[i].style.transition = "opacity 0.3s ease-in-out";
//       changeTextElements[i].style.opacity = "0";
//       setTimeout(() => {
//         changeTextElements[i].style.display = "none";
//         changeTextElements[i].style.display = "block";
//         changeTextElements[i].style.opacity = "1";
//       }, 300);
//     }
//     setTimeout(function () {
//       for (let i = 0; i < changeTextElements.length; i++) {
//         changeTextElements[0].textContent = sourceText0;
//            }
//     }, 300);
//     isTextChanged = false;
//   }
// });

//исходный текст
const sourceText0 = "Исходный текст 0";
const sourceText1 = "Исходный текст 1";
const sourceText2 = "Исходный текст 2";

// переводы
const translate0 = "Перевод0";
const translate1 = "Перевод1";
const translate2 = "Перевод2";

//четвертый
const changeBtn = document.getElementById("btn-change-language");
const changeTextElements = document.querySelectorAll(".change-text");

// считать значение isTextChanged из локального хранилища
let isTextChanged = localStorage.getItem("isTextChanged") === "true";

// отобразить текст по умолчанию в соответствии со значением isTextChanged
for (let i = 0; i < changeTextElements.length; i++) {
  changeTextElements[i].textContent = isTextChanged ? translate0 : sourceText0;
}

changeBtn.addEventListener("click", function () {
  if (!isTextChanged) {
    for (let i = 0; i < changeTextElements.length; i++) {
      changeTextElements[i].style.transition = "opacity 0.3s ease-in-out";
      changeTextElements[i].style.opacity = "0";
      setTimeout(() => {
        changeTextElements[i].style.display = "none";
        changeTextElements[i].style.display = "block";
        changeTextElements[i].style.opacity = "1";
      }, 300);
    }
    setTimeout(function () {
      for (let i = 0; i < changeTextElements.length; i++) {
        changeTextElements[0].textContent = translate0;
        changeTextElements[1].textContent = translate1;
        changeTextElements[2].textContent = translate2;
      }
    }, 300);
    isTextChanged = true;
  } else {
    for (let i = 0; i < changeTextElements.length; i++) {
      changeTextElements[i].style.transition = "opacity 0.3s ease-in-out";
      changeTextElements[i].style.opacity = "0";
      setTimeout(() => {
        changeTextElements[i].style.display = "none";
        changeTextElements[i].style.display = "block";
        changeTextElements[i].style.opacity = "1";
      }, 300);
    }
    setTimeout(function () {
      for (let i = 0; i < changeTextElements.length; i++) {
        changeTextElements[0].textContent = sourceText0;
        changeTextElements[1].textContent = sourceText1;
        changeTextElements[2].textContent = sourceText2;
      }
    }, 300);
    isTextChanged = false;
  }
  // сохранить значение isTextChanged в локальном хранилище
  localStorage.setItem("isTextChanged", isTextChanged);
});
