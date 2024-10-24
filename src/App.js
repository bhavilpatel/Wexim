import { useEffect, useState } from 'react';
import Header from './Component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import AppSec from './Pages/AppSec';
import Pricing from './Pages/Pricing';
import Work from './Pages/Work';
import SideBar from './Component/SideBar';
import FixedBtn from './Component/FixedBtn';
import MainLoader from './Component/MainLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div>
      {/* <MainLoader /> */}
      <Header />
      <SideBar />
      <FixedBtn />
      <Home />
      <About />
      <Team />
      <Work />
      <Pricing />
      <AppSec />
      <Blog />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
