
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
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices9.jpg?alt=media&token=f9be635e-d451-4a12-874e-bd0b02897242',
    label: "Manuelle Lymphdrainage",
    description: `Die manuelle Lymphdrainage ist eine spezielle Massagetechnik, die der Endstauung des Gewebes dient.
    Mit gezielten Handgriffen wird der Lymphfluss gefördert, durch Abtransport der Gewebeflüssigkeit das „Ödem“ beseitig und die überschüssige Flüssigkeit in den Körperkreislauf zurückgeführt.
    `,
  },
  service2: {
    id: "service2",
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices3.jpg?alt=media&token=5b5bb880-f1cd-4935-a332-be1be9b31480',
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
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices4.jpg?alt=media&token=4bfab71c-16c9-4976-8363-57301429d157',
    label: "Massage",
    description: `Bei der klassischen Massage wird die Muskulatur und der Bandapparat durch gezielte Griffe angesprochen.
    Die klassische Massage wird angewendet bei Erkrankungen des Bewegungsapparates
     und zur Nachbehandlung von Muskel und sonstigen Verletzungen.
    Die klassische Massage wird oft mit vorbereitender Wärme angewendet. Sie ist aber auch für einige krankengymnastische Behandlungstechniken als vorbereitende Maßnahme unerlässlich.
    `
  },
  service4: {
    id: "service4",
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices5.jpg?alt=media&token=7713fb30-101b-4e25-9806-a9ba4ae5ebbc',
    label: "Atlasterapie",
    description: `Eine Behandlungspraktik im Bereich der Halswirbelsäule
    Der Atlas ist der erste Halswirbel, unmittelbar unterhalb des Schädels lokalisiert. Ähnlich wie an allen anderen Regionen der Wirbelsäule kann durch eine Blockierung verursachte Störung seiner Funktion sehr unangenehme Symptome verursachen.
    Viele dieser Symptome können bei vorliegenden rückbildungsfähigen Funktionsstörungen (sog. Blockierungen) auch im Bereich des Atlas durch einen gezielten chirotherapeutischen Handgriff behandelt werden.
    `
  },
  service5: {
    id: "service5",
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fcarousel1.jpg?alt=media&token=bacc94c6-9799-4aca-a611-29c169a4b7a9',
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
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices8.jpg?alt=media&token=2d37e872-c5f6-4157-9bb1-e520ac020bec',
    label: "Fango",
    description: `Die Fangopackung wird mit etwa 50 Grad Celsius aufgelegt. 
    Die Behandlungsdauer liegt zwischen 20 und 30 Minuten. 
    In den behandelten Körperregionen wird die Durchblutung dadurch stark erhöht. 
    Die Fangopackungen haben eine schmerzlindernde und entzündungshemmende Wirkung.
    `
  },
  service7: {
    id: "service7",
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fcarousel6.jpg?alt=media&token=2bd5ae35-dcb0-4c74-a283-5f439098e067',
    label: "Eis-Therapie",
    description: `Unter Eis-Therapie, auch Kryotherapie genannt, versteht man die Anwendung von Eis zu therapeutischen Zwecken. Durch verschiedenartige Anwendungsformen mit unterschiedlichen Einwirkzeiten sollen Selbstheilungsprozesse unterstützt werden.
     Anwendungsformen sind : Eisbeutel, Silikatkompressen (Kryopack), Eismassage, -abreibung, Eistauchbad, Ganzkörperkältetherapie.
    `
  },
  service8: {
    id: "service8",
    img: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices7.jpg?alt=media&token=78f76a17-88bf-48ae-ba03-35adf943da1e',
    label: "Medi Taping",
  },
};
// =========================================

// News Page content

export const newsContent = {
  post1: {
    id: "post1",
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/postImages%2Fservices2.jpg?alt=media&token=314c69a1-eaa2-4914-92ef-b6481f4d2496',
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
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/postImages%2Fcarousel2.jpg?alt=media&token=65835b5b-66ae-42e2-93a6-57c02c55c9e2',
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
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/postImages%2Fcarousel3.webp?alt=media&token=b119aafd-76a0-485b-ba08-ae7761ea19da',
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
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/testimonials%2Fface1.jpg?alt=media&token=f11ccf01-a1be-4d38-b277-5ecc404ef34b',
    name: "Mirela Ionesc",
  },
  testimonial2: {
    id: "testimonial2",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Urna egestas diam nunc orci. Nulla bibendum cum tristique
    diam varius fringilla magna commodo at. Vel varius semper
    nisl cursus aliquam urna semper quam. Vivamus proin blandit
    pharetra quis porttitor massa.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/testimonials%2Fface2.jpg?alt=media&token=9dfd7031-7398-4be2-b64c-38dbb328b530',
    name: "Andrei Baciu",
  },
  testimonial3: {
    id: "testimonial3",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Urna egestas diam nunc orci. Nulla bibendum cum tristique
    diam varius fringilla magna commodo at. Vel varius semper
    nisl cursus aliquam urna semper quam. Vivamus proin blandit
    pharetra quis porttitor massa.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/testimonials%2Fface3.jpg?alt=media&token=8476aa05-9005-4419-acd8-f52162a37fed',
    name: "Delia Gruia",
  },
};

// BootstrapCarousel Images

export const carouselImages = [
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel4.webp?alt=media&token=4e850fe0-f0e5-4e73-baa1-fd15313925e6',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel2.jpg?alt=media&token=48f61a1f-39e1-4b82-97e3-221d555ab7a4',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel3.webp?alt=media&token=996d4194-38bd-483a-899c-92c3719dc626',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel5.jpg?alt=media&token=29be9c49-e611-44b5-b07b-a4d3ed8246ee',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel61.jpg?alt=media&token=c8a2ccee-925f-4322-b1b6-f094efe8366d',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel7.jpg?alt=media&token=c70a3bb4-a541-4408-8ca1-85426efd2bb3',
];
