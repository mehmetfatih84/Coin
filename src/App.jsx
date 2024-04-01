import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainController from "./controllers/MainController";
import HeaderView from "./views/HeaderView";
import DetailController from "./controllers/DetailController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
