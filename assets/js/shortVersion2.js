const dictionary = {
  ru: {
    navMain: "Главная",
    navService: "Услуги",
    navAbout: "О компании"
  },
  en: {
    navMain: "Home",
    navService: "Services",
    navAbout: "About"
  }
};

const selectors = {
  navMain: ".navMain",
  navService: ".navService",
  navAbout: ".navAbout",
  inputs: "[data-placeholder]"
};

function setLanguage(language) {
  localStorage.setItem("language", language);

  const texts = dictionary[language];
  const inputs = document.querySelectorAll(selectors.inputs);

  inputs.forEach((input) => {
    const placeholder = input.getAttribute(`data-placeholder-${language}`);
    if (placeholder) {
      input.setAttribute("placeholder", placeholder);
    }
  });

  Object.keys(selectors).forEach((key) => {
    const selector = selectors[key];
    const element = document.querySelector(selector);

    if (element && key !== "inputs") {
      const text = texts[key];
      element.textContent = text;
    }
  });
}

const storedLanguage = localStorage.getItem("language");
const language = storedLanguage || "ru";
setLanguage(language);
