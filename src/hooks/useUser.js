import { useState, useEffect } from 'react';
import { getUser } from '../api';

const useUser = (id) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((user) => setUser(user));
  }, []);

  return user;
};

export default useUser;
