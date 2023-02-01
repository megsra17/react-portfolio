import headerImg from "../assets/img/Cute-astronaut-floating-with-balloon.png";
import { useState, useEffect } from "react";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDelete) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDelete && updatedText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && updatedText === "") {
      setIsDelete(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Megan A `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              My name is Megan Rakow and I was born and rasied in Mequon, WI. I
              went to college at the University of Wisconsin Whitewater. I
              graduated UWW in 2021 with a Bachelor Degree in MAGD and minor in
              graphic design. I then moved up to Greenbay, Wisconsin and Im
              currently working for RC MOWERS USA.
              <a href="#contact">
                Lets Connect <i className="bi bi-arrow-right ps-3"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-5">
            <img src={headerImg} alt="flying man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
