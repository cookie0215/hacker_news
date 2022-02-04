import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const itemUrl = `${baseUrl}/item`;

export const getStory = async (id) => {
  const story = await axios.get(`${itemUrl}/${id}.json`);
  return story;
}

export const getStories = async (type) => {
  const { data: storyIds } = await axios.get(`${baseUrl}/${type}stories.json`);
  const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
  return stories;
}