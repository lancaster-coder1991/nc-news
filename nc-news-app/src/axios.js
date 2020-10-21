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

export const updateVotesById = (id, dataType) => {
  return instance.patch(`/${dataType}/${id}`, { inc_votes: 1 });
};

export const getCommentsByArticleId = (article_id) => {
  return instance.get(`articles/${article_id}/comments`);
};
