
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
// render will attach our React App component to the #root DOM element
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    , document.getElementById("root"));
