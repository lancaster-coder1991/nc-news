import axios from "axios";

const instance = axios.create({
  baseURL: "https://georges-nc-news.herokuapp.com/api",
});

export const checkTopics = () => {};

export const getArticles = (topic, sort_by, order_by, p) => {
  return instance
    .get("/topics")
    .then((topics) => {
      if (
        topic &&
        !topics.data.topics.find((topicEl) => topicEl.slug === topic)
      ) {
        return Promise.reject({
          response: { status: 404, data: { msg: "Topic not found" } },
        });
      }
    })
    .then(() => {
      return instance.get("/articles", {
        params: {
          topic,
          sort_by,
          order_by,
          p,
        },
      });
    });
};

export const getArticleById = (article_id) => {
  return instance.get(`/articles/${article_id}`);
};

export const updateVotesById = (id, dataType, increment) => {
  return instance.patch(`/${dataType}/${id}`, { inc_votes: increment });
};

export const getCommentsByArticleId = (article_id, sort_by, order_by) => {
  return instance.get(`/articles/${article_id}/comments`, {
    params: {
      sort_by,
      order_by,
    },
  });
};

export const createCommentByArticleId = (article_id, body) => {
  return instance.post(`/articles/${article_id}/comments`, {
    username: "jessjelly",
    body,
  });
};

export const deleteCommentByArticleId = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};

export const checkNoArticlePages = () => {
  return instance.get(`/articles`);
};
