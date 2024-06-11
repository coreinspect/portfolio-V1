import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          <main className="main">
            <Home />
            <About />
            <Skills />
          </main>
        </>
      )}
    </>
  );
}

export default App;
