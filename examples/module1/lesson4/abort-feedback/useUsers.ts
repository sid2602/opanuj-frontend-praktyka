import { useEffect, useState } from 'react';
interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isfetchProblem, setIsFetchProblem] = useState(false);

  const getUsers = async () => {
    try {
      setIsError(false);
      const request = await fetch(API_URL);
      const response = await request.json();
      if (request.ok) {
        setUsers(response.users);
        return;
      }
      setIsError(true);
      return;
    } catch (e) {
      setIsError(true);
    } finally {
      setIsFetchProblem(false);
    }
  };

  const checkIsLongFetch = async () => {
    new Promise((res, _) => {
      setTimeout(() => {
        res(setIsFetchProblem(true));
      }, 5000);
    });
  };

  const fetchData = () => Promise.all([getUsers(), checkIsLongFetch()]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    users,
    isError,
    isfetchProblem,
    fetchData,
  };
};
