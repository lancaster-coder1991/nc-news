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

export const getArticleById = (article_id) => {
  return instance.get(`/articles/${article_id}`);
};

export const updateArticleVotesById = (article_id) => {
  return instance.patch(`/articles/${article_id}`, { inc_votes: 1 });
};
