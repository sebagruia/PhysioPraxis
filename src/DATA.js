import Services1 from "./assets/carousel1.jpg";
import Services2 from "./assets/services3.jpg";
import Services3 from "./assets/services4.jpg";
import Services4 from "./assets/services5.jpg";
import Services5 from "./assets/services7.jpg";
import Services6 from "./assets/services8.jpg";
import Services7 from "./assets/carousel6.jpg";
import Services8 from "./assets/services9.jpg";

import PostImage1 from "./assets/services2.jpg";
import PostImage2 from "./assets/carousel2.jpg";
import PostImage3 from "./assets/carousel3.webp";

import Face1 from "./assets/face1.jpg";
import Face2 from "./assets/face2.jpg";
import Face3 from "./assets/face3.jpg";

import CaruselFoto1 from "./assets/carousel4.webp";
import CaruselFoto2 from "./assets/carousel2.jpg";
import CaruselFoto3 from "./assets/carousel3.webp";
import CaruselFoto4 from "./assets/carousel5.jpg";
import CaruselFoto5 from "./assets/carousel61.jpg";
import CaruselFoto6 from "./assets/carousel7.jpg";

// Formating Date
export const formatDate = () => {
  const start = Date.now();
  const now = new Date(start);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const todayUTC = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );
  return todayUTC.toLocaleDateString(undefined, options);
};

// Formating Ttitle
export const arangedTitle = (title) => {
  let nonSpaceRegex = /\S/g;
  let titleWithoutSpaces = title.match(nonSpaceRegex);
  return titleWithoutSpaces.join("");
};

// Services Page content
export const services = {
  service1: {
    id: "service1",
    img: Services8,
    label: "Manuelle Lymphdrainage",
    description: `Die manuelle Lymphdrainage ist eine spezielle Massagetechnik, die der Endstauung des Gewebes dient.
    Mit gezielten Handgriffen wird der Lymphfluss gefördert, durch Abtransport der Gewebeflüssigkeit das „Ödem“ beseitig und die überschüssige Flüssigkeit in den Körperkreislauf zurückgeführt.
    `,
  },
  service2: {
    id: "service2",
    img: Services2,
    label: "KPE",
    description: `Anschließen wird, um das Behandlungsergebnis zu halten, 
    ein Kompressionsverband, mit dafür geeigneten Bandagebinden angelegt.
    Das Bandagematerial wird vom Arzt gesondert als Verbandsmaterial verordnet.
    Anwendungsbeispiele sind:
    Brustoperationen / Unterleibsoperationen,
    Alle Krebsoperationen bei denen Lymphknoten entfernt wurden,
    Beinödeme z.B. durch Inaktivität / Lähmung,
    Blutergüsse, Zerrungen, Verstauchungen die mit starker Schwellung einhergehen,
    Nach chirurgischen Eingriffen, bei denen Lymphbahnen durchtrennt wurden,
    Bei allen angeborenen oder erworbenen Erkrankungen des Lymphgefäßsystems.
    `
  },
  service3: {
    id: "service3",
    img: Services3,
    label: "Massage",
    description: `Bei der klassischen Massage wird die Muskulatur und der Bandapparat durch gezielte Griffe angesprochen.
    Die klassische Massage wird angewendet bei Erkrankungen des Bewegungsapparates
     und zur Nachbehandlung von Muskel und sonstigen Verletzungen.
    Die klassische Massage wird oft mit vorbereitender Wärme angewendet. Sie ist aber auch für einige krankengymnastische Behandlungstechniken als vorbereitende Maßnahme unerlässlich.
    `
  },
  service4: {
    id: "service4",
    img: Services4,
    label: "Atlasterapie",
    description: `Eine Behandlungspraktik im Bereich der Halswirbelsäule
    Der Atlas ist der erste Halswirbel, unmittelbar unterhalb des Schädels lokalisiert. Ähnlich wie an allen anderen Regionen der Wirbelsäule kann durch eine Blockierung verursachte Störung seiner Funktion sehr unangenehme Symptome verursachen.
    Viele dieser Symptome können bei vorliegenden rückbildungsfähigen Funktionsstörungen (sog. Blockierungen) auch im Bereich des Atlas durch einen gezielten chirotherapeutischen Handgriff behandelt werden.
    `
  },
  service5: {
    id: "service5",
    img: Services1,
    label: "Heißluft",
    description: `Ist ein Gerät mit mehreren Rotlichtglühbirnen die eine intensive Wärme ausstrahlen. 
    Man liegt/sitzt in einem Abstand von 40-90 cm unter dieser Bestrahlung. 
    Die Wärme führt zu einer oberflächlichen Durchblutungssteigerung, 
    die Bestrahlungszeit liegt bei 15-20 min.Durch intensives Rotlicht (ca. 42 Grad) 
    kommt es zu einer vermehrten Hautdurchblutung. Die Muskulatur wird gelockert und die anschließende Massage angenehmer.
    `
  },
  service6: {
    id: "service6",
    img: Services6,
    label: "Fango",
    description: `Die Fangopackung wird mit etwa 50 Grad Celsius aufgelegt. 
    Die Behandlungsdauer liegt zwischen 20 und 30 Minuten. 
    In den behandelten Körperregionen wird die Durchblutung dadurch stark erhöht. 
    Die Fangopackungen haben eine schmerzlindernde und entzündungshemmende Wirkung.
    `
  },
  service7: {
    id: "service7",
    img: Services7,
    label: "Eis-Therapie",
    description: `Unter Eis-Therapie, auch Kryotherapie genannt, versteht man die Anwendung von Eis zu therapeutischen Zwecken. Durch verschiedenartige Anwendungsformen mit unterschiedlichen Einwirkzeiten sollen Selbstheilungsprozesse unterstützt werden.
     Anwendungsformen sind : Eisbeutel, Silikatkompressen (Kryopack), Eismassage, -abreibung, Eistauchbad, Ganzkörperkältetherapie.
    `
  },
  service8: {
    id: "service8",
    img: Services5,
    label: "Medi Taping",
  },
};
// =========================================

// News Page content

export const newsContent = {
  post1: {
    id: "post1",
    image: PostImage1,
    date: formatDate(),
    postTitle: "Was ist Physiotherapie?.",
    postText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornar
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.`,
  },
  post2: {
    id: "post2",
    image: PostImage2,
    date: formatDate(),
    postTitle: "Sportphysiotherapie.",
    postText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornar
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.`,
  },
  post3: {
    id: "post3",
    image: PostImage3,
    date: formatDate(),
    postTitle: "CMD-Physiotherapie.",
    postText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornar
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
    vulputate maecenas eget tristique pharetra eu id eu molestie. In id
    non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
    commodo fermentum blandit a quis quis neque tellus.`,
  },
};

// Testimonials Content

export const testimonialsContent = {
  testimonial1: {
    id: "testimonial1",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Urna egestas diam nunc orci. Nulla bibendum cum tristique
    diam varius fringilla magna commodo at. Vel varius semper
    nisl cursus aliquam urna semper quam. Vivamus proin blandit
    pharetra quis porttitor massa.`,
    image: Face1,
    name: "Mirela Ionesc",
  },
  testimonial2: {
    id: "testimonial2",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Urna egestas diam nunc orci. Nulla bibendum cum tristique
    diam varius fringilla magna commodo at. Vel varius semper
    nisl cursus aliquam urna semper quam. Vivamus proin blandit
    pharetra quis porttitor massa.`,
    image: Face2,
    name: "Andrei Baciu",
  },
  testimonial3: {
    id: "testimonial3",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Urna egestas diam nunc orci. Nulla bibendum cum tristique
    diam varius fringilla magna commodo at. Vel varius semper
    nisl cursus aliquam urna semper quam. Vivamus proin blandit
    pharetra quis porttitor massa.`,
    image: Face3,
    name: "Delia Gruia",
  },
};

// BootstrapCarousel Images

export const carouselImages = [
  CaruselFoto1,
  CaruselFoto2,
  CaruselFoto3,
  CaruselFoto4,
  CaruselFoto5,
  CaruselFoto6,
];
