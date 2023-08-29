import Nav from '@/components/Nav';
import { ProjectClass } from '@/models/Project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | Projects',
  description: 'Let\'s take a quick peek under the hood.',
}

const getProjects = async () => {
  const projects = await fetch(`${process.env.BASE_URL}/api/projects`)
  .then((res) => res.json())
  return projects.projects
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <section>
        <ul>
        {projects.map((project: ProjectClass, i: number) => {
          <li key={`projects_${i}`}>
            <h3>Project: {project.title}</h3>
            <p>{project.description}</p>
          </li>
        })}
        </ul>
      </section>
      <Nav />
    </article>
  )
}