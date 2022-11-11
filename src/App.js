import "./App.css";
import { Routes, Route } from "react-router-dom";
import Copyright from "./components/copyright/Copyright";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Form from "./components/form/Form";
import Gallery from "./components/gallery/Gallery";
import Grid from "./components/grid2/Grid";
import Category from "./components/category/Category";

function App() {
  return (
    <div className="App fade-in-bottom">
      {/* <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> */}

      <Home />
      <Navbar />
      <Copyright />

      {/* <About /> */}

      {/* <Form /> */}

      {/* <Gallery /> */}

      {/* <Grid /> */}

      {/* <Category /> */}
    </div>
  );
}

export default App;
