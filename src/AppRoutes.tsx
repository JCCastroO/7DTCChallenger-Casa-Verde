import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
