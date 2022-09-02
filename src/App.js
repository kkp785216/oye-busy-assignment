import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss'
import './styles/Header.scss'
import './styles/Heading1.scss'
import './styles/ServiceCard.scss'
import './styles/PremiumService.scss'
import './styles/Home.scss'
import Home from "./pages/Home";
import Header from "./components/Header";
import config from "./lib/config";

const Layout = ({ children }) => {
  return (<>
    { children }
  </>);
}

function App() {
  return (
    <BrowserRouter basename={config.basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Header />
              <Home />
            </Layout>
          } />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
