
const translations = {
    en: {
        home: "Home",
        aboutus: "About Us",
        contactus: "Contact us",
        lestsgo: "Let's go",
        welcome: "Welcome to Take My Car",
        find: "Find the perfect car for you or generate income with our virtual fleet service.",
        more: "Learn more",
        ofer: "What we offer",
        give: "We give you the possibility to choose from a large number of vehicles near you and available for your use, so that you can choose the one that best suits your needs.",
        fast: "Fast",
        easy: "Easy",
        secure: "Safe",
        who: "About Us",
        platform: "At TakeMyCar we are a platform that seeks to improve the rental process, making it simpler, cheaper and more efficient.",
        mission: "Mission",
        vision: "Vision",
        mission2: "Facilitate access to shared vehicles through a digital platform that allows people to rent cars from other owners, taking advantage of technology to offer a more efficient and sustainable alternative to the traditional model.",
        vision2: "Creating a world where access to mobility is simple and shared, contributing to cleaner and more sustainable cities through the collaborative economy.",
        help: "We are here to help you. If you wish to make your reservation by phone or WhatsApp, please contact us. If you have any questions or need more information about how to earn with your unused vehicle, please do not hesitate to contact us.",
        phone: "Phone",
        address: "Address",
        rigths:"© 2024 TakeMyCar. All rights reserved.",
    },
    es: {
        home: "Inicio",
        aboutus: "Sobre Nosotros",
        contactus: "Contáctanos",
        lestsgo: "Comenzar",
        welcome: "Bienvenido a Take My Car",
        find: "Encuentra el auto perfecto para ti o genera ingresos con nuestro servicio de flota virtual.",
        more: "Saber Más",
        ofer: "¿Qué ofrecemos?",
        give : "Te damos la posibilidad de escoger entre una gran cantidad de vehículos cerca tuyo y disponibles a tu uso, para que escojas el que mejor se acople a tus necesidades.",
        fast: "Rápido",
        easy: "Fácil",
        secure: "Seguro",
        who: "¿Quiénes Somos?",
        platform: "En TakeMyCar somos una plataforma que busca mejorar el proceso de alquiler, haciéndolo más sencillo, barato y eficiente.",
        mission: "Misión",
        vision: "Visión",
        mission2: "Facilitar el acceso a vehículos compartidos mediante una plataforma digital que permita a las personas alquilar autos de otros propietarios, aprovechando la tecnología para ofrecer una alternativa más eficiente y sostenible al modelo tradicional.",
        vision2: "Crear un mundo donde el acceso a la movilidad sea sencillo y compartido, contribuyendo a ciudades más limpias y sostenibles mediante la economía colaborativa.",
        help: "Estamos aquí para ayudarte. Si deseas realizar tu reserva vía telefónica o vía Whatsapp, comunícate con nosotros. Si tienes alguna pregunta o necesitas más información acerca de cómo ganar con tu vehículo sin uso, no dudes en ponerte en contacto con nosotros.",
        phone: "Teléfono",
        address: "Dirección:",
        rigths:"© 2024 TakeMyCar. Todos los derechos reservados.",
    }
};

function changeLanguage(language) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[language][key];
    });
}