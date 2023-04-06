// const dictionary2 = {
//   ru: {
//     selectProfession: "Выберите вид услуги",
//     zhdTr: "Железнодорожные перевозки",
//     truckTr: "Автомобильные перевозки",
//     airTr: "Авиа перевозки",
//     multiTr: "Мультимодальные перевозки",
//     carTr: "Перевозки автомобилей",
//     customTr: "Таможенные операции"
//   },
//   en: {
//     selectProfession: "Select a service",
//     zhdTr: "Railway transportation",
//     truckTr: "Trucking",
//     airTr: "Air transportation",
//     multiTr: "Multimodal transportation",
//     carTr: "Car transportation",
//     customTr: "Customs operations"
//   }
// };

// function setlanguageSelector(languageSelector) {
//   localStorage.setItem("languageSelector", languageSelector);

//   const texts = dictionary2[languageSelector];
//   const select = document.querySelector("#select-profession");

//   Array.from(select.options).forEach((option) => {
//     const id = option.getAttribute("class");
//     const text = texts[id];

//     if (text) {
//       option.textContent = text;
//     }
//   });
// }

// const storedSelectorlanguageSelector = localStorage.getItem("languageSelector");
// const languageSelector = storedSelectorlanguageSelector || "ru";
// setlanguageSelector(languageSelector);
