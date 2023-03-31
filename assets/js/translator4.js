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
    send3: "Отправить",
    our2: "Наши",
    services2: "услуги"
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
    send3: "Send",
    our2: "Our",
    services2: "Services"
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
  services2: ".services2"
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
