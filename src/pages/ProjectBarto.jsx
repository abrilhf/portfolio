
import {Link} from "react-router-dom";

function ProjectBarto() {

  return (
    <article className="projectBarto">
      <div className="pageTop">
        <h2>Work</h2>
        <p>01</p>
      </div>

      <div className="bartoDescription">
        <p>User Thinking Design & App Design</p>
        <h3>Barto Project</h3>
      </div>

      <Link to={"/projectbarto"}>
        <i className="bi bi-arrow-right-short"></i>
      </Link>
    </article>
  );
}

export default ProjectBarto;
