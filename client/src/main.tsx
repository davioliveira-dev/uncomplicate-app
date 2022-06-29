import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "urql";
import App from "./App";
import { client } from "./services/client";

console.error = () => {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider value={client}>
    <ToastContainer autoClose={3000} theme="colored" />
    <App />
  </Provider>
);
