const dictionary = {
  ru: {
    navMain: "Главная",
    navService: "Услуги",
    navAbout: "О компании",
    navDocs: "Документы",
    navContacts: "Контакты",
    mainH1: "Мы предоставляем комплексные",
    mainH1s: "логистические решения",
    mainDesc:
      "Если вам нужно перевезти товары по стране или по всему миру, у нас есть опыт и ресурсы для выполнения этой работы. Наилучшие возможные варианты доставки и Конкурентоспособные Цены.",
    mainBtn: "Связаться с нами",
    activeClients: "Активных клиентов",
    sucOperations: "Успешных перевозок",
    typesCargo: "Типов Товаров",
    activeClients2: "Активных клиентов",
    sucOperations2: "Успешных перевозок",
    typesCargo2: "Типов Товаров",

    online: "Онлайн",
    calc2: "калькулятор",
    onlineCalc: "Онлайн калькулятор",
    calcDesc: "Рассчитайте стоимость доставки вашего груза с помощью нашего ",
    calcDesc2: "онлайн калькулятора:",
    fieldName: "Имя",
    fieldPhone: "Телефон",
    fieldWeight: "Вес, кг",
    fieldVolume: "Объём, м³",
    fieldData: "Данные о грузе"
  },
  en: {
    navMain: "Home",
    navService: "Services",
    navAbout: "About",
    navDocs: "Documents",
    navContacts: "Contacts",
    mainH1: "We provide comprehensive",
    mainH1s: "logistics solutions",
    mainDesc:
      "Whether you need to move goods around the country or around the world, we have the experience and resources to get the job done. Best possible shipping options and Competitive Prices.",
    mainBtn: "Contact Us",
    activeClients: "Active Clients",
    sucOperations: "Succesful Operations",
    typesCargo: "Types of cargo",
    activeClients2: "Active Clients",
    sucOperations2: "Succesful Operations",
    typesCargo2: "Types of cargo",

    online: "Online",
    calc2: "Calculator",
    onlineCalc: "Online-Calculator",
    calcDesc: "Calculate the shipping cost of your shipment with our ",
    calcDesc2: "online calculator:",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldWeight: "Weight",
    fieldVolume: "Volume",
    fieldData: "Cargo data"
  }
};

function setLanguage(language) {
  localStorage.setItem("language", language);

  const texts = dictionary[language];

  const navMain = document.querySelector(".navMain");
  const navService = document.querySelector(".navService");
  const navAbout = document.querySelector(".navAbout");
  const navDocs = document.querySelector(".navDocs");
  const navContacts = document.querySelector(".navContacts");
  const mainH1 = document.querySelector(".mainH1");
  const mainH1s = document.querySelector(".mainH1s");
  const mainDesc = document.querySelector(".mainDesc");
  const mainBtn = document.querySelector(".mainBtn");
  const activeClients = document.querySelector(".activeClients");
  const sucOperations = document.querySelector(".sucOperations");
  const typesCargo = document.querySelector(".typesCargo");
  const activeClients2 = document.querySelector(".activeClients2");
  const sucOperations2 = document.querySelector(".sucOperations2");
  const typesCargo2 = document.querySelector(".typesCargo2");

  const online = document.querySelector(".online");
  const calc2 = document.querySelector(".calc2");
  const onlineCalc = document.querySelector(".onlineCalc");
  const calcDesc = document.querySelector(".calcDesc");
  const calcDesc2 = document.querySelector(".calcDesc2");
  const fieldName = document.querySelector(".fieldName");
  const fieldPhone = document.querySelector(".fieldPhone");
  const fieldWeight = document.querySelector(".fieldWeight");
  const fieldVolume = document.querySelector(".fieldVolume");
  const fieldData = document.querySelector(".fieldData");

  // const textContainer = document.querySelector(
  //   ".change-text-animated-container"
  // );

  // Скрытие текущего текста
  // textContainer.classList.remove("show");

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

  if (navDocs) {
    navDocs.textContent = texts.navDocs;
  }

  if (navContacts) {
    navContacts.textContent = texts.navContacts;
  }

  if (mainH1) {
    mainH1.textContent = texts.mainH1;
  }

  if (mainH1s) {
    mainH1s.textContent = texts.mainH1s;
  }

  if (mainDesc) {
    mainDesc.textContent = texts.mainDesc;
  }

  if (mainBtn) {
    mainBtn.textContent = texts.mainBtn;
  }

  if (activeClients) {
    activeClients.textContent = texts.activeClients;
  }

  if (sucOperations) {
    sucOperations.textContent = texts.sucOperations;
  }

  if (typesCargo) {
    typesCargo.textContent = texts.typesCargo;
  }

  if (activeClients2) {
    activeClients2.textContent = texts.activeClients2;
  }

  if (sucOperations2) {
    sucOperations2.textContent = texts.sucOperations2;
  }

  if (typesCargo2) {
    typesCargo2.textContent = texts.typesCargo2;
  }

  if (onlineCalc) {
    onlineCalc.textContent = texts.onlineCalc;
  }

  if (calcDesc) {
    calcDesc.textContent = texts.calcDesc;
  }

  if (calcDesc2) {
    calcDesc2;
    navService.textContent = texts.navService;
  }

  if (fieldName) {
    fieldName.textContent = texts.fieldName;
  }

  if (fieldPhone) {
    fieldPhone.textContent = texts.fieldPhone;
  }

  if (fieldWeight) {
    fieldWeight.textContent = texts.fieldWeight;
  }

  if (fieldVolume) {
    fieldVolume.textContent = texts.fieldVolume;
  }

  if (online) {
    online.textContent = texts.online;
  }

  if (calc2) {
    calc2.textContent = texts.calc2;
  }

  if (fieldData) {
    fieldData.textContent = texts.fieldData;
  }

  // setTimeout(() => {
  //   textContainer.classList.add("shows");
  //   textContainer.classList.add("show100");
  // }, 300);
}

const storedLanguage = localStorage.getItem("language");
const language = storedLanguage || "ru";
setLanguage(language);

// работает код без анимации
// function setLanguage(language) {
//   localStorage.setItem("language", language);

//   const texts = dictionary[language];

//   const main = document.querySelector(".main");
//   const service = document.querySelector(".service");

//   if (main) {
//     main.textContent = texts.main;
//   }

//   if (service) {
//     service.textContent = texts.service;
//   }
// }

// const storedLanguage = localStorage.getItem("language");
// const language = storedLanguage || "en";
// setLanguage(language);
