import Services1 from "./assets/carousel1.jpg";
import Services2 from "./assets/services3.jpg";
import Services3 from "./assets/services4.jpg";
import Services4 from "./assets/services5.jpg";
import Services5 from "./assets/services7.jpg";
import Services6 from "./assets/services8.jpg";
import Services7 from "./assets/carousel6.jpg";
import Services8 from "./assets/services9.jpg";

export const columnImageContainerContentArray = {
  service1: {
    id: "service1",
    img: Services8,
    label: "Krankengymnastik an den Geräten",
  },
  service2: {
    id: "service2",
    img: Services2,
    label: "Massage",
  },
  service3: {
    id: "service3",
    img: Services3,
    label: "PNF",
  },
  service4: {
    id: "service4",
    img: Services4,
    label: "Elektrotherapie",
  },
  service5: {
    id: "service5",
    img: Services1,
    label: "Krankengymnastik",
  },
  service6: {
    id: "service6",
    img: Services6,
    label: "Moorpackung und Heißluft",
  },
  service7: {
    id: "service7",
    img: Services7,
    label: "Fußreflexzonenmassage",
  },
  service8: {
    id: "service8",
    img: Services5,
    label: "Medi Taping",
  },
};


export const formatDate = () => {
  const start = Date.now();
  const now = new Date(start);

  const options = {  year: 'numeric', month: 'long', day: 'numeric' };

  const todayUTC = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );
  return todayUTC.toLocaleDateString(undefined, options);
};