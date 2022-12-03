import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Routes>
      <div>
        <Header />
        <main className="my-3">
          <Container>
            <h1>this is natureFresh</h1>
            <Route path="/" element={<HomeScreen />} />
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </div>
    </Routes>
  );
}

export default App;
