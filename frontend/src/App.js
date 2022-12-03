import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>this is natureFresh</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
