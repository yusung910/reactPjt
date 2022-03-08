import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./components/expenses";
import Files from "./components/filelist";
import Home from "./components/home";
import Join from "./components/join";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />  
        <Route path="join" element={<Join />} />  
        <Route path="expenses" element={<Expenses />} />
        <Route path="files" element={<Files />}>
        <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an files</p>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);