import { Routes, Route } from "react-router-dom";
import AliasDemo from "./containers/AliasDemo";
import Home from "./containers/Home";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alias" element={<AliasDemo />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default AppRouter;
