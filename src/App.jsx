import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ToDoListPage from "./ToDoListPage";

export default function App() {
  return (
    <div className="py-8">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/todolistpage" element={<ToDoListPage />} />
          </Routes>
    </div>
  );
}
