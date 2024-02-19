import { Link } from "react-router-dom"

function ProjectLumiere() {
    return(
        <article className="projectLumiere">
        <div className="pageTop">
          <h2>Work</h2>
          <p>02</p>
        </div>
  
        <div className="bartoDescription">
          <p>Website with React, Node.js & MongoDB</p>
          <h3 className="titleAlquimia">Lumiere Project</h3>
        </div>
  
        <Link to={"/projectlumiere"}>
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </article>
    )
}

export default ProjectLumiere