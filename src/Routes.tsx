import { Routes, Route } from "react-router-dom";
import Alias from "./containers/games/Alias";
import Home from "./containers/Home";
import Rooms from "./containers/Rooms";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game">
        <Route path="alias/*" element={<Alias />} />
      </Route>
      <Route path="/rooms" element={<Rooms />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default AppRouter;
