import projImg1 from "../assets/img/ST.png";
import projImg2 from "../assets/img/a2z.png";
import projImg3 from "../assets/img/danG.png";
import projImg4 from "../assets/img/TLP.png";
import projImg5 from "../assets/img/HS.png";
import projImg6 from "../assets/img/msf.png";
import ProjectCard from "../components/ProjectCard";
import Particle from "../components/Particle";

const Project = () => {
  return (
    <div className="container py-3" id="projects">
      <div className="row">
        <div className="col">
          <Particle />
          <h1>Projects</h1>
          <p>Here are a few projects i've worked on!</p>
          <div className="row row-cols-lg-3 g-3 row-cols-1">
            <div className="col">
              <ProjectCard
                imgPath={projImg1}
                title="SurfTaco"
                desc="A Taco Resturant Located throughout New Jersey"
                link="https://surftaco.com/"
              />
            </div>
            <div className="col">
              <ProjectCard
                imgPath={projImg2}
                title="A2Z Diagnostics"
                desc="A2Z Diagnostics is a leading-edge CAP-accredited, CLIA-certifed lab providing state-of-the-art pathology, with results"
                link="https://www.a2zdx.com/"
              />
            </div>
            <div className="col">
              <ProjectCard
                imgPath={projImg3}
                title="Dan Gentile Dog Training"
                desc="Dan Gentile's Dog Training Center, where we've been training dogs for over 40 years."
                link="https://njdog.com/"
              />
            </div>
            <div className="col">
              <ProjectCard
                imgPath={projImg4}
                title="The Laundry Place"
                desc="We are the FASTEST way to get laundry done! Our clean and inviting environment offers plenty of seating, folding tables, and entertainment options."
                link="https://thelaundryplace.com/"
              />
            </div>
            <div className="col">
              <ProjectCard
                imgPath={projImg5}
                title="Hudson Speed"
                desc="HUDSON SPEED helps athletes improve their athleticism and endurance so they can have the best sports performance"
                link="https://hudsonspeed.com/"
              />
            </div>
            <div className="col">
              <ProjectCard
                imgPath={projImg6}
                title="Movie Soundtrack Finder"
                desc="Helps you find Playlist on Spotify from movies"
                link="https://megsra17.github.io/movie-soundtrack-finder/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
