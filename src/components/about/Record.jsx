import { useEffect, useRef, useState, useCallback } from "react";
import "./about.css"; // Import the CSS

const Records = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const countersRef = useRef([]);
  const sectionRef = useRef(null);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const countUp = (el, max) => {
    let current = 0;
    const increment = max / 200;
    const interval = setInterval(() => {
      current += increment;
      if (current >= max) {
        current = max;
        clearInterval(interval);
      }
      el.textContent = Math.floor(current);
    }, 10);
  };

  const startCounting = useCallback(() => {
    countersRef.current.forEach((counter) => {
      const max = parseInt(counter.getAttribute("data-num"), 10);
      countUp(counter, max);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasStarted && isElementInViewport(sectionRef.current)) {
        startCounting();
        setHasStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Check if the element is in view on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hasStarted, startCounting]);

  return (
    <section className="records" ref={sectionRef}>
      <div className="container">
        <div className="wrap">
          <div className="record-circle">
            <h2
              className="number"
              data-num="4"
              ref={(el) => (countersRef.current[0] = el)}
            >
              0
            </h2>
            <h4 className="record-sub-title">Projects</h4>
          </div>
        </div>

        <div className="wrap">
          <div className="record-circle active">
            <h2
              className="number"
              data-num="2"
              ref={(el) => (countersRef.current[1] = el)}
            >
              0
            </h2>
            <h4 className="record-sub-title">Happy Clients</h4>
          </div>
        </div>

        <div className="wrap">
          <div className="record-circle">
            <h2
              className="number"
              data-num="120"
              ref={(el) => (countersRef.current[2] = el)}
            >
              0
            </h2>
            <h4 className="record-sub-title">Work Hour</h4>
          </div>
        </div>

        <div className="wrap">
          <div className="record-circle">
            <h2
              className="number"
              data-num="0"
              ref={(el) => (countersRef.current[3] = el)}
            >
              0
            </h2>
            <h4 className="record-sub-title">Awards</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;
