'use client'

import { ProjectResponse } from '@/models/Project'
import styles from '@/app/utils.module.css'
import clsx from 'clsx'
import ProjectCard from '@/components/ProjectCard'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Sort = {
  field: keyof ProjectResponse,
  asc: boolean,
}

export default function ProjectsGrid({projects}: {projects: ProjectResponse[]}) {
  const inputRef = useRef<HTMLInputElement>()
  const [filteredProjects, setFilteredProjects] = useState<ProjectResponse[]>(() => [...projects])
  const [sortedProjects, setSortedProjects] = useState<ProjectResponse[]>(() => [...filteredProjects])
  const [sortBy, setSortBy] = useState<Sort>({
    field: 'dateString',
    asc: false,
  })

  const toggleSort = useCallback((prevSort: Sort, field: string) => {
    const newSortBy: Sort = {...prevSort}
    if (prevSort.field === field) {
      newSortBy.asc = !newSortBy.asc
    } else {
      newSortBy.field = field as keyof ProjectResponse
      newSortBy.asc = true
    }
    setSortBy(newSortBy)
  }, [])

  const filterProjects = useCallback(() => {
    const searchTerm: string = inputRef!.current!.value!.toLowerCase() || ''
    setFilteredProjects(() => {
      if (searchTerm.length < 3) {
        return projects
      }
      return projects.filter((project: ProjectResponse) => (
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tags.join().toLowerCase().includes(searchTerm) ||
        project.tech.join().toLowerCase().includes(searchTerm)
      ))
    })
  }, [inputRef.current])

  useEffect(() => {
    setSortedProjects(filteredProjects.sort((a: ProjectResponse, b: ProjectResponse) => {
      if (a[sortBy.field] < b[sortBy.field]) {
        return sortBy.asc === true ? -1 : 1
      } else if (a[sortBy.field] > b[sortBy.field]) {
        return sortBy.asc === true ? 1 : -1
      } else {
        return 0
      }
    }))
  }, [sortBy, filteredProjects])

  return (
    <section>
      <div className={styles.infobar}>
        <input type='text' placeholder='Search....' ref={inputRef as any} onChange={() => filterProjects()} />
        <div className={styles.buttonGroup}>
          <button onClick={() => toggleSort(sortBy, 'title')}>
              <sup>A</sup>/<sub>Z</sub>
              {!!sortBy.asc && sortBy.field === 'title' &&
                <span>&uarr;</span>
              }
              {!sortBy.asc && sortBy.field === 'title' &&
                <span>&darr;</span>
              }
            </button>
            <button onClick={() => toggleSort(sortBy, 'dateString')}>
              <Image
                src='/images/noun-date-1360181.svg'
                alt='Date'
                width={16}
                height={16} />
              {!!sortBy.asc && sortBy.field === 'dateString' &&
                <span>&uarr;</span>
              }
              {!sortBy.asc && sortBy.field === 'dateString' &&
                <span>&darr;</span>
              }
            </button>
        </div>
      </div>
      <ul className={clsx(styles.grid, styles.projectsGrid)}>
        {sortedProjects.map((project: ProjectResponse, i: number) => (
          <ProjectCard project={project} key={`projects_grid_${i}`} />
        ))}
      </ul>
    </section>
  )
}