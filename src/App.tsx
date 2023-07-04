import { useState, useEffect } from 'react';
import Navbar from './scenes/Navbar';
import { SelectedPage } from './shared/types.tsx';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits/index.tsx'
import OurClasses from './scenes/OurClasses/index.tsx';
import ContactUs from './scenes/ContactUs/index.tsx';
import Footer from './scenes/Footer/index.tsx';

// enums



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>

      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>


    </>
  )
}

export default App;
