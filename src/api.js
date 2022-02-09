import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const itemUrl = `${baseUrl}/item`;
export const userUrl = `${baseUrl}/user`;

export const getStory = async (id) => {
  const story = await axios.get(`${itemUrl}/${id}.json`);
  return story;
}

export const getStories = async (type) => {
  const { data: storyIds } = await axios.get(`${baseUrl}/${type}stories.json`);
  const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
  return stories;
}

export const getUser = async (userId) => {
  const { data: userInfo } = await axios.get(`${userUrl}/${userId}.json`);
  // console.log(userInfo)
  return userInfo;
};

// export const getUser = async (userId) => {
//   const res = await axios.get(`${userUrl}/${userId}.json`);
//   console.log(res)
//   return res.data ? userFields(res.data) : null;
// };

// export const userFields = ({ id, created, karma, about, submitted } = {}) => ({
//   id,
//   created,
//   karma,
//   about,
//   submitted,
// });