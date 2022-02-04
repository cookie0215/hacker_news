import { useState, useEffect } from 'react';
import { getStories } from '../api';

const useAxios = (type) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(type).then((stories) => setStories(stories));
    console.log(stories)
  }, [type]);
  return stories;
};

export default useAxios;