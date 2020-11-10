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

export const todayDate = () => {
  const start = Date.now();
  const now = new Date(start);
  return now.toISOString().slice(0, 10);
};

export const day = (data) => {
  const selectedDay = new Date(data);
  return selectedDay.getDay();
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
     img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices5.jpg?alt=media&token=7713fb30-101b-4e25-9806-a9ba4ae5ebbc",
    label: "Manuelle Lymphdrainage",
    description: `Die manuelle Lymphdrainage ist eine spezielle Massagetechnik, die der Endstauung des Gewebes dient.
    Mit gezielten Handgriffen wird der Lymphfluss gefördert, durch Abtransport der Gewebeflüssigkeit das „Ödem“ beseitig und die überschüssige Flüssigkeit in den Körperkreislauf zurückgeführt.
    `,
  },
  service2: {
    id: "service2",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/services%2Fservices3.jpg?alt=media&token=c1a04da3-7422-4fa9-a392-a976d1296414",
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
    `,
  },
  service3: {
    id: "service3",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices4.jpg?alt=media&token=4bfab71c-16c9-4976-8363-57301429d157",
    label: "Massage",
    description: `Bei der klassischen Massage wird die Muskulatur und der Bandapparat durch gezielte Griffe angesprochen.
    Die klassische Massage wird angewendet bei Erkrankungen des Bewegungsapparates
     und zur Nachbehandlung von Muskel und sonstigen Verletzungen.
    Die klassische Massage wird oft mit vorbereitender Wärme angewendet. Sie ist aber auch für einige krankengymnastische Behandlungstechniken als vorbereitende Maßnahme unerlässlich.
    `,
  },
  service4: {
    id: "service4",
    img:
    "https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/services%2Fservices9.jpg?alt=media&token=f9be635e-d451-4a12-874e-bd0b02897242",
    label: "Atlasterapie",
    description: `Eine Behandlungspraktik im Bereich der Halswirbelsäule
    Der Atlas ist der erste Halswirbel, unmittelbar unterhalb des Schädels lokalisiert. Ähnlich wie an allen anderen Regionen der Wirbelsäule kann durch eine Blockierung verursachte Störung seiner Funktion sehr unangenehme Symptome verursachen.
    Viele dieser Symptome können bei vorliegenden rückbildungsfähigen Funktionsstörungen (sog. Blockierungen) auch im Bereich des Atlas durch einen gezielten chirotherapeutischen Handgriff behandelt werden.
    `,
  },
  service5: {
    id: "service5",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/services%2FWarmtherapie.jpg?alt=media&token=c6ef755a-89c5-4074-b38b-86349133c3c0",
    label: "Wärmetherapie",
    description: `Wärmetherapie wird lokal eingesetzt bei Erkrankungen des Bewegungsapparates, insbesondere bei Nackenschmerzen, chronischen Rückenschmerzen und Gelenkbeschwerden. Die positiven Wirkungen von Wärme bei bestimmten Erkrankungen sind seit Jahrhunderten bekannt. 
    Ziele der Wärmebehandlung sind Muskelentspannung, Verbesserung der Durchblutung, Verbesserung der Dehnbarkeit des Bindegewebes und Schmerzlinderung.
    `,
  },
  service6: {
    id: "service6",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/services%2FKiefergelenk%20Therapie.jpg?alt=media&token=a7f97f8b-4dae-415a-89f1-7eea0f091d88",
    label: "Kiefergelenk Therapie",
    description: `Symptome wie Kopfschmerz, Migräne, Schwindel, Gesichtsschmerzen, Ohrgeräusche, Knackgeräusche beim Öffnen oder schließen des Mundes, aber auch Nacken- oder Rückenschmerzen können die Ursache in einer Fehlfunktion des Kiefergelenkes haben. 
    Durch die Kiefergelenk-Therapie können am Kiefergelenk die Gelenkfunktion und die umgebenden Strukturen wie Muskeln, Bänder und Nerven behandelt werden.
    `,
  },
  service7: {
    id: "service7",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/services%2FEistherapie.jpg?alt=media&token=615480ee-a757-4573-b7bc-5a7558e871db",
    label: "Eistherapie",
    description: `Unter Eis-Therapie, auch Kryotherapie genannt, versteht man die Anwendung von Eis zu therapeutischen Zwecken. Durch verschiedenartige Anwendungsformen mit unterschiedlichen Einwirkzeiten sollen Selbstheilungsprozesse unterstützt werden.
     Anwendungsformen sind : Eisbeutel, Silikatkompressen (Kryopack), Eismassage, -abreibung, Eistauchbad, Ganzkörperkältetherapie.
    `,
  },
  service8: {
    id: "service8",
    img:
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/services%2FR%C3%BCckengesundheit.jpg?alt=media&token=54bb2506-79bf-450d-818a-d9222037071d",
    label: "Rückengesundheit",
    description: `Durch gezielte Kräftigung und Dehnung der Muskulatur, ausgewählte Übungen zur Verbesserung der Beweglichkeit, sowie Schulung und Beratung zu rückenfreundlichem Verhalten im Alltag,
     können Sie schnell den Trainingserfolg spüren.
   `,
  },
};
// =========================================

// BootstrapCarousel Images
export const carouselImages = [
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel8.jpg?alt=media&token=9db4bc2f-ab36-4160-bf84-1d6281c1215f",
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel9.jpg?alt=media&token=df0d9091-eada-4b3c-a9e3-bf83d422c44d",
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel1.jpg?alt=media&token=e83d7b4d-6165-4e4f-b398-a2fe17db933a",
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel2.jpg?alt=media&token=ae15f892-c277-4e1e-80c9-e8ba7e7110f5",
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel3.jpg?alt=media&token=c74329a9-877a-4871-adb1-f723a658ac2c",
  "https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/carouselImages%2Fcarousel4.jpg?alt=media&token=f3277189-0953-485d-8bb6-9822ce581b15",
];
