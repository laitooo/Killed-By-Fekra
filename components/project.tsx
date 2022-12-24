import { Project } from '../models/project'

const ProjectCard = (probs: {project: Project}) => {
  return (
    <div>
      <div className="card card-compact w-auto max-w-[24rem] bg-violet-700/[.5] shadow-xl">
        <figure>
          <img src={probs.project.logo} alt={probs.project.name} className="mt-6 w-40 h-40" />
        </figure>
        <div className="card-body h-60 xl:h-80">
          <h2 className="mt-8 text-white text-2xl font-semibold">{probs.project.name}</h2>
          <p className="mt-4 text-base text-justify">{probs.project.description}</p>
          <p className="mt-4 text-base text-justify">Killed at {probs.project.date.toDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
