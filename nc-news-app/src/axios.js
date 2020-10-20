import axios from "axios";

const instance = axios.create({
  baseURL: "https://georges-nc-news.herokuapp.com/api",
});

export const getArticles = (topic, sort_by, order_by) => {
  return instance.get("/articles", {
    params: {
      topic,
      sort_by,
      order_by,
    },
  });
};
