import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="skill-box">
              <h2>Skills</h2>
              <p>MY KNOWLEDGE LEVEL IN SOFTWARE</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="90, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      90%
                    </text>
                  </svg>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="60, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      60%
                    </text>
                  </svg>
                  <h5>Mobile App Developement</h5>
                </div>
                <div className="item">
                  <svg viewBox="0 0 36 36" class="circular-chart blue">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="80, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      80%
                    </text>
                  </svg>
                  <h5>Full Stack</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
