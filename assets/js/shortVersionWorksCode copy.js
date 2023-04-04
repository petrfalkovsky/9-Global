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

function setLanguage(language) {
  localStorage.setItem("language", language);

  const texts = dictionary[language];
  const inputs = document.querySelectorAll("[data-placeholder]");
  inputs.forEach((input) => {
    const placeholder = input.getAttribute(`data-placeholder-${language}`);
    if (placeholder) {
      input.setAttribute("placeholder", placeholder);
    }
  });

  const navMain = document.querySelector(".navMain");
  const navService = document.querySelector(".navService");
  const navAbout = document.querySelector(".navAbout");

  // функция для инпутов
  inputs.forEach((input) => {
    const placeholder = input.getAttribute(`data-placeholder-${language}`);
    if (placeholder) {
      input.setAttribute("placeholder", placeholder);
    }
  });

  // Изменение текста
  if (navMain) {
    navMain.textContent = texts.navMain;
  }

  if (navService) {
    navService.textContent = texts.navService;
  }

  if (navAbout) {
    navAbout.textContent = texts.navAbout;
  }
}

const storedLanguage = localStorage.getItem("language");
const language = storedLanguage || "ru";
setLanguage(language);
