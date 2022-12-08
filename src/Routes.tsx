import { Routes, Route } from "react-router-dom";
import Alias from "./containers/games/Alias";
import Home from "./containers/Home";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game">
        <Route path="alias/*" element={<Alias />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default AppRouter;
