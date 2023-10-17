import { Route, Routes } from "react-router-dom";
import DisplayListPage from "./pages/DisplayListPage";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Navigation from "./pages/Navigation";
import TodoPage from "./pages/TodoPage";
import Auth from "./components/Auth";

function App() {
  return (
    <div>
      <Auth>
        <Navigation />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />} >
            <Route path="todo" element={<DisplayListPage />} />
            <Route path="todo/:id" element={<TodoPage />} />
          </Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
