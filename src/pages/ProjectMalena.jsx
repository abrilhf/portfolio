import { Link } from "react-router-dom"

function ProjectMalena() {
    return(
        <article className="projectMalena">
        <div className="pageTop">
          <h2>Work</h2>
          <p>03</p>
        </div>
  
        <div className="bartoDescription">
          <p>Website with Vue & Vuetify</p>
          <h3 className="titleAlquimia">Malena Project</h3>
        </div>
  
        <Link to={"/projectmalena"}>
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </article>
    )
}

export default ProjectMalena