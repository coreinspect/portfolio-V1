import { useEffect, useRef, useState, useCallback } from "react";
import "./about.css"; // Import the CSS

const Records = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const countersRef = useRef([]);
  const sectionRef = useRef(null);

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
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          startCounting();
          setHasStarted(true);
          observer.unobserve(sectionRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust as needed
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
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
