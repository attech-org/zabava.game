import { Routes, Route } from "react-router-dom";
import AliasDemo from "./containers/AliasDemo";
import Home from "./containers/Home";
import About from "./containers/About";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room" element={<>Room</>} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default AppRouter;
