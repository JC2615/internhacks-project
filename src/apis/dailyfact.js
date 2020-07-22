const axios = require("axios");
const cheerio = require("cheerio");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
const month = monthNames[d.getMonth()];
const day = d.getDate();
const year = d.getFullYear();
const fullDate = month + " " + day + ", " + year;

async function getDailyFact() {

  const base = `http://blackhistorydaily.com/on_this_day/${month}_${day}/`;
  const infoBase = "http://blackhistorydaily.com/";

  const factInfo = { title: "", info: "", date: "" };

  function getLinkAndTitle() {
    const $ = cheerio.load(request.data);
    const title = $("h3").first().text();
    const link = $("h3").first().next().attr()["href"];
    return { link, title };
  }

  function getFactInfo() {
    const $ = cheerio.load(secondRequest.data);
    const fact = $("p").first().text();
    factInfo.info = fact;
    return fact;
  }

  let request = await axios.get("https://cors-anywhere.herokuapp.com/" + base, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });

  let secondRequest = await axios.get(
    "https://cors-anywhere.herokuapp.com/" + infoBase + getLinkAndTitle().link,
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );

  factInfo.title = getLinkAndTitle().title;
  factInfo.info = getFactInfo();
  factInfo.date = fullDate;

  return factInfo;
}
getDailyFact().then((fact) => console.log(fact));

export default getDailyFact;
