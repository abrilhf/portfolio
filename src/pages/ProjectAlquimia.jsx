import { Link } from "react-router-dom"

function ProjectAlquimia(){
    return(
        <article className="projectAlquimia">
        <div className="pageTop">
          <h2>Work</h2>
          <p>04</p>
        </div>
  
        <div className="bartoDescription">
            <p className="tesis">Thesis</p>
            <p>Brand Design & Website with Laravel & MySQL</p>
            <h3 className="titleAlquimia">Alquimia Project</h3>
        </div>
  
        <Link to={"/projectalquimia"}>
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </article>
    )
}

export default ProjectAlquimia