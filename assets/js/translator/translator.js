// function loadJSON(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// }

// Promise.all([
//   loadJSON("assets/js/translator/dictionary.json"),
//   loadJSON("assets/js/translator/selectors.json")
// ])
//   .then(([dictionary, selectors]) => {
//     function setLanguage(language) {
//       localStorage.setItem("language", language);

//       const texts = dictionary[language];
//       const inputs = document.querySelectorAll(selectors.inputs);

//       inputs.forEach((input) => {
//         const placeholder = input.getAttribute(`data-placeholder-${language}`);
//         if (placeholder) {
//           input.setAttribute("placeholder", placeholder);
//         }
//       });

//       Object.keys(selectors).forEach((key) => {
//         const selector = selectors[key];
//         const element = document.querySelector(selector);

//         if (element && key !== "inputs") {
//           const text = texts[key];
//           element.textContent = text;
//         }
//       });
//     }

//     const storedLanguage = localStorage.getItem("language");
//     const language = storedLanguage || "ru";
//     setLanguage(language);
//   })
//   .catch((error) => console.error(error));
