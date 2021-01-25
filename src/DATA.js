// Formating Date
export const formatDate = (date) => {
  const now = new Date(date);

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

export const latestArticles = (array)=> array.filter((item,index)=>index<5)


