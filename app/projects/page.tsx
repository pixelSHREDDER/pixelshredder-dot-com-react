import Nav from '@/components/Nav';
import { ProjectClass } from '@/models/Project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike DeVine | Projects',
  description: 'Let\'s take a quick peek under the hood.',
}

/*export async function generateStaticParams() {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`)
    .then((res) => res.json())
    return projects.projects
  } catch (error: any) {
    throw error
  }
}

const getProjects = async () => {
  try {
    const projects = await fetch(`${process.env.BASE_URL}/projects/api`)
    .then((res) => res.json())
    return projects.projects
  } catch (error: any) {
    throw error
  }
}
*/
export default async function Projects() {
  /*const projects = await getProjects()

  return (
    <article>
      <Nav />
      <h1>Projects</h1>
      <section>
        <ul>
        {projects.map((project: ProjectClass) => {
          <li key={`projects_${project._id}`}>
            <h3>Project: {project.title}</h3>
            <p>{project.description}</p>
          </li>
        })}
        </ul>
      </section>
      <Nav />
    </article>
  )*/
  return (
    <article>
      <Nav />
      <h1>BABY DON'T HURT ME</h1>
      <Nav />
    </article>
  )
}