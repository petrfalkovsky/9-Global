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
    calc2: "Калькулятор",
    calc3: "калькулятор",
    onlineCalc: "Онлайн калькулятор",
    calcDesc: "Рассчитайте стоимость доставки вашего груза с помощью нашего ",
    calcDesc2: "онлайн калькулятора:",
    fieldName: "Имя",
    fieldPhone: "Телефон",
    fieldWeight: "Вес, кг",
    fieldVolume: "Объём, м³",
    fieldData: "Данные о грузе",
    fieldName2: "Your Name",
    fieldPhone2: "Your Phone",
    fieldEmail2: "Your e-mail",
    fieldWeight2: "0 kg",
    fieldVolume2: "0 m³",
    fieldData2: "Type of Cargo",
    from2: "Country and City",
    to2: "Country and City",
    from: "Откуда",
    to: "Куда",
    send1: "Отправить",
    send2: "Отправить",
    send3: "Отправить"
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
    calc3: "calculator",
    onlineCalc: "Online-Calculator",
    calcDesc: "Calculate the shipping cost of your shipment with our ",
    calcDesc2: "online calculator:",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldWeight: "Weight",
    fieldVolume: "Volume",
    fieldData: "Cargo data",
    from: "From",
    to: "To",
    fieldName2: "Your Name",
    fieldPhone2: "Your Phone",
    fieldEmail2: "Your e-mail",
    fieldWeight2: "0 kg",
    fieldVolume2: "0 m³",
    fieldData2: "Type of Cargo",
    from2: "Country and City",
    to2: "Country and City",
    send1: "Send",
    send2: "Send",
    send3: "Send"
  }
};

const selectors = {
  navMain: ".navMain",
  navService: ".navService",
  navAbout: ".navAbout",
  navDocs: ".navDocs",
  navContacts: ".navContacts",
  mainH1: ".mainH1",
  mainH1s: ".mainH1s",
  mainDesc: ".mainDesc",
  mainBtn: ".mainBtn",
  activeClients: ".activeClients",
  sucOperations: ".sucOperations",
  typesCargo: ".typesCargo",
  activeClients2: ".activeClients2",
  sucOperations2: ".sucOperations2",
  typesCargo2: ".typesCargo2",
  online: ".online",
  calc2: ".calc2",
  calc3: ".calc3",
  onlineCalc: ".onlineCalc",
  calcDesc: ".calcDesc",
  calcDesc2: ".calcDesc2",
  fieldName: ".fieldName",
  fieldPhone: ".fieldPhone",
  fieldWeight: ".fieldWeight",
  fieldVolume: ".fieldVolume",
  fieldData: ".fieldData",
  from: ".from",
  to: ".to",
  fieldName2: ".fieldName2",
  fieldPhone2: ".fieldPhone2",
  fieldEmail2: ".fieldEmail2",
  fieldWeight2: ".fieldWeight2",
  fieldVolume2: ".fieldVolume2",
  fieldData2: ".fieldData2",
  from2: ".from2",
  to2: ".to2",
  send1: ".send1",
  send2: ".send2",
  send3: ".send3",
  our2: ".our2",
  services2: ".services2",
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

// const dictionary = {
//   ru: {
//     navMain: "Главная",
//     navService: "Услуги",
//     navAbout: "О компании",
//     navDocs: "Документы",
//     navContacts: "Контакты",
//     mainH1: "Мы предоставляем комплексные",
//     mainH1s: "логистические решения",
//     mainDesc:
//       "Если вам нужно перевезти товары по стране или по всему миру, у нас есть опыт и ресурсы для выполнения этой работы. Наилучшие возможные варианты доставки и Конкурентоспособные Цены.",
//     mainBtn: "Связаться с нами",
//     activeClients: "Активных клиентов",
//     sucOperations: "Успешных перевозок",
//     typesCargo: "Типов Товаров",
//     activeClients2: "Активных клиентов",
//     sucOperations2: "Успешных перевозок",
//     typesCargo2: "Типов Товаров",
//     online: "Онлайн",
//     calc2: "Калькулятор",
//     calc3: "калькулятор",
//     onlineCalc: "Онлайн калькулятор",
//     calcDesc: "Рассчитайте стоимость доставки вашего груза с помощью нашего ",
//     calcDesc2: "онлайн калькулятора:",
//     fieldName: "Имя",
//     fieldPhone: "Телефон",
//     fieldWeight: "Вес, кг",
//     fieldVolume: "Объём, м³",
//     fieldData: "Данные о грузе",
//     fieldName2: "Your Name",
//     fieldPhone2: "Your Phone",
//     fieldEmail2: "Your e-mail",
//     fieldWeight2: "0 kg",
//     fieldVolume2: "0 m³",
//     fieldData2: "Type of Cargo",
//     from2: "Country and City",
//     to2: "Country and City",
//     from: "Откуда",
//     to: "Куда",
//     send1: "Отправить",
//     send2: "Отправить",
//     send3: "Отправить"
//   },
//   en: {
//     navMain: "Home",
//     navService: "Services",
//     navAbout: "About",
//     navDocs: "Documents",
//     navContacts: "Contacts",
//     mainH1: "We provide comprehensive",
//     mainH1s: "logistics solutions",
//     mainDesc:
//       "Whether you need to move goods around the country or around the world, we have the experience and resources to get the job done. Best possible shipping options and Competitive Prices.",
//     mainBtn: "Contact Us",
//     activeClients: "Active Clients",
//     sucOperations: "Succesful Operations",
//     typesCargo: "Types of cargo",
//     activeClients2: "Active Clients",
//     sucOperations2: "Succesful Operations",
//     typesCargo2: "Types of cargo",
//     online: "Online",
//     calc2: "Calculator",
//     calc3: "calculator",
//     onlineCalc: "Online-Calculator",
//     calcDesc: "Calculate the shipping cost of your shipment with our ",
//     calcDesc2: "online calculator:",
//     fieldName: "Name",
//     fieldPhone: "Phone",
//     fieldWeight: "Weight",
//     fieldVolume: "Volume",
//     fieldData: "Cargo data",
//     from: "From",
//     to: "To",
//     fieldName2: "Your Name",
//     fieldPhone2: "Your Phone",
//     fieldEmail2: "Your e-mail",
//     fieldWeight2: "0 kg",
//     fieldVolume2: "0 m³",
//     fieldData2: "Type of Cargo",
//     from2: "Country and City",
//     to2: "Country and City",
//     send1: "Send",
//     send2: "Send",
//     send3: "Send"
//   }
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

//   // функция для инпутов
//   inputs.forEach((input) => {
//     const placeholder = input.getAttribute(`data-placeholder-${language}`);
//     if (placeholder) {
//       input.setAttribute("placeholder", placeholder);
//     }
//   });

//   const navMain = document.querySelector(".navMain");
//   const navService = document.querySelector(".navService");
//   const navAbout = document.querySelector(".navAbout");
//   const navDocs = document.querySelector(".navDocs");
//   const navContacts = document.querySelector(".navContacts");
//   const mainH1 = document.querySelector(".mainH1");
//   const mainH1s = document.querySelector(".mainH1s");
//   const mainDesc = document.querySelector(".mainDesc");
//   const mainBtn = document.querySelector(".mainBtn");
//   const activeClients = document.querySelector(".activeClients");
//   const sucOperations = document.querySelector(".sucOperations");
//   const typesCargo = document.querySelector(".typesCargo");
//   const activeClients2 = document.querySelector(".activeClients2");
//   const sucOperations2 = document.querySelector(".sucOperations2");
//   const typesCargo2 = document.querySelector(".typesCargo2");
//   const online = document.querySelector(".online");
//   const calc2 = document.querySelector(".calc2");
//   const calc3 = document.querySelector(".calc3");
//   const onlineCalc = document.querySelector(".onlineCalc");
//   const calcDesc = document.querySelector(".calcDesc");
//   const calcDesc2 = document.querySelector(".calcDesc2");
//   const fieldName = document.querySelector(".fieldName");
//   const fieldPhone = document.querySelector(".fieldPhone");
//   const fieldWeight = document.querySelector(".fieldWeight");
//   const fieldVolume = document.querySelector(".fieldVolume");
//   const fieldData = document.querySelector(".fieldData");
//   const from = document.querySelector(".from");
//   const to = document.querySelector(".to");
//   const send1 = document.querySelector(".send1");
//   const send2 = document.querySelector(".send2");
//   const send3 = document.querySelector(".send3");

//   // Изменение текста
//   if (navMain) {
//     navMain.textContent = texts.navMain;
//   }

//   if (navService) {
//     navService.textContent = texts.navService;
//   }

//   if (navAbout) {
//     navAbout.textContent = texts.navAbout;
//   }

//   if (navDocs) {
//     navDocs.textContent = texts.navDocs;
//   }

//   if (navContacts) {
//     navContacts.textContent = texts.navContacts;
//   }

//   if (mainH1) {
//     mainH1.textContent = texts.mainH1;
//   }

//   if (mainH1s) {
//     mainH1s.textContent = texts.mainH1s;
//   }

//   if (mainDesc) {
//     mainDesc.textContent = texts.mainDesc;
//   }

//   if (mainBtn) {
//     mainBtn.textContent = texts.mainBtn;
//   }

//   if (activeClients) {
//     activeClients.textContent = texts.activeClients;
//   }

//   if (sucOperations) {
//     sucOperations.textContent = texts.sucOperations;
//   }

//   if (typesCargo) {
//     typesCargo.textContent = texts.typesCargo;
//   }

//   if (activeClients2) {
//     activeClients2.textContent = texts.activeClients2;
//   }

//   if (sucOperations2) {
//     sucOperations2.textContent = texts.sucOperations2;
//   }

//   if (typesCargo2) {
//     typesCargo2.textContent = texts.typesCargo2;
//   }

//   if (onlineCalc) {
//     onlineCalc.textContent = texts.onlineCalc;
//   }

//   if (calcDesc) {
//     calcDesc.textContent = texts.calcDesc;
//   }

//   if (calcDesc2) {
//     calcDesc2;
//     navService.textContent = texts.navService;
//   }

//   if (fieldName) {
//     fieldName.textContent = texts.fieldName;
//   }

//   if (fieldPhone) {
//     fieldPhone.textContent = texts.fieldPhone;
//   }

//   if (fieldWeight) {
//     fieldWeight.textContent = texts.fieldWeight;
//   }

//   if (fieldVolume) {
//     fieldVolume.textContent = texts.fieldVolume;
//   }

//   if (online) {
//     online.textContent = texts.online;
//   }

//   if (calc2) {
//     calc2.textContent = texts.calc2;
//   }

//   if (calc3) {
//     calc3.textContent = texts.calc3;
//   }

//   if (from) {
//     from.textContent = texts.from;
//   }

//   if (to) {
//     to.textContent = texts.to;
//   }

//   if (send1) {
//     send1.textContent = texts.send1;
//   }

//   if (send2) {
//     send2.textContent = texts.send2;
//   }

//   if (send3) {
//     send3.textContent = texts.send3;
//   }

//   if (fieldData) {
//     fieldData.textContent = texts.fieldData;
//   }
// }

// const storedLanguage = localStorage.getItem("language");
// const language = storedLanguage || "ru";
// setLanguage(language);
