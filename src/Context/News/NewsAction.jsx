// const today = new Date(Date.now()).toLocaleDateString();

// let year = today.year("/")[2]
// let day = today.split("/")[0];
// let month = today.split("/")[1];
export const fetchNews = async () => {
  try {
    const response = await fetch(`https://news-api-ql1i.onrender.com/api/news`);
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert("Please Enter Valid Topic");
  }
};
