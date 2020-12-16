import { useQuery } from 'react-query';
import axios from 'axios';

// Every hook  is made up of 2 functions.
// 1. The actual react hook (i.e. useUsersList, useUserDetail) that returns the useQuery object to be used.
// 2. The hook's corresponding get function (i.e. getUsersList, getUserDetail). This function does the async fetching and returns a promise back for react-query to  use for the hook. 


// Users List

const getUsersList = async () => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return data;
}

export function useUsersList() {
    return useQuery("user-list", getUsersList);
}

// End Users List

// Get User By Id
const getUserById = async (userId) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
};

export function useUser(userId) {
    return useQuery(["user", userId], () => getUserById(userId));
}

// End Get User By Id