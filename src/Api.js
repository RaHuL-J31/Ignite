//Base URL
const base_url = "https://api.rawg.io/api/";

const key = `key=${process.env.REACT_APP_RAWG}`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//POPULAR GAMES
const popular_games = `games?${key}&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `games?${key}&date=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?${key}&date=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//final
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcommingGamesURL = () => `${base_url}${upcomming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${key}`;

export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&${key}`;
