
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

export const todayDate = ()=>{
  const start = Date.now();
  const now = new Date(start);
 return now.toISOString().slice(0,10);
}

export const day = ()=>{
  const start = Date.now();
  const now = new Date(start);
 return now.getDay();
}

// Formating Ttitle
export const arangedTitle = (title) => {
  let nonSpaceRegex = /\S/g;
  let titleWithoutSpaces = title.match(nonSpaceRegex);
  return titleWithoutSpaces.join("");
};



// BootstrapCarousel Images
export const carouselImages = [
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel4.jpg?alt=media&token=a685c404-5210-432e-8402-c964435e22f2',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel2.jpg?alt=media&token=48f61a1f-39e1-4b82-97e3-221d555ab7a4',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel3.jpg?alt=media&token=0680467a-800a-4568-9fd0-0fa6d8b3993e',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel5.jpg?alt=media&token=29be9c49-e611-44b5-b07b-a4d3ed8246ee',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel61.jpg?alt=media&token=c8a2ccee-925f-4322-b1b6-f094efe8366d',
  'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/carouselImages%2Fcarousel7.jpg?alt=media&token=c70a3bb4-a541-4408-8ca1-85426efd2bb3',
];
