import axios from "axios";

const instance = axios.create({
  baseURL: "https://georges-nc-news.herokuapp.com/api",
});

export const getAllArticles = () => {
  return instance.get("/articles", {
    params: {},
  });
};
