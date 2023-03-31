// const dictionary = {
//   ru: {},
//   en: {}
// };

// function setLanguage(language) {
//   localStorage.setItem("language", language);

//   const texts = dictionary[language];
//   const inputs = document.querySelectorAll("[data-placeholder]");
//   inputs.forEach((input) => {
//     const placeholder = input.getAttribute(`data-placeholder-${language}`);
//     if (placeholder) {
//       input.setAttribute("placeholder", placeholder);
//     }
//   });

//   inputs.forEach((input) => {
//     const placeholder = input.getAttribute(`data-placeholder-${language}`);
//     if (placeholder) {
//       input.setAttribute("placeholder", placeholder);
//     }
//   });
// }

// const storedLanguage = localStorage.getItem("language");
// const language = storedLanguage || "ru";
// setLanguage(language);
