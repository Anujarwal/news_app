const today = new Date(Date.now()).toLocaleDateString();

// let year = today.year("/")[2]
let day = today.split("/")[0];
let month = today.split("/")[1];
export const fetchNews = async (topic) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2024-0${month}-0${day}&sortBy=publishedAt&apiKey=202c188d1fe74f3285a0207f7aa32c6f`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    window.alert("Please Enter Valid Topic");
  }
};
