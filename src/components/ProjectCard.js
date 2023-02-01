const ProjectCard = (props) => {
  return (
    <div className="card h-100 project-card">
      <img src={props.imgPath} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>

        <a
          href={props.link}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          <i className="bi bi-link"></i> Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
