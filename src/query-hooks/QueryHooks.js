import { useQuery } from 'react-query';
import axios from 'axios';

// Every hook  is made up of 2 functions.
// 1. The actual react hook (i.e. useUsersList, useUserDetail) that returns the useQuery object to be used.
// 2. The hook's corresponding get function (i.e. getUsersList, getUserDetail). This function does the async fetching and returns a promise back for react-query to  use for the hook. 


// UsersList

const getUsersList = async () => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return data;
   const filteredData = [];
    data.forEach((person) => {
        filteredData.push({
            userID: person.id,
            userName: person.name,
            userUserName: person.username,
        });
    });
    return filteredData;
}

export function useUsersList() {
    return useQuery("user-list", getUsersList);
}

// End UsersList

// 
const getUserById = async (userId) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users${userId}`
    );
    return data;
  };
  
  export default function usePost(userId) {
    return useQuery(["user", userId], () => getUserById(userId));
  }