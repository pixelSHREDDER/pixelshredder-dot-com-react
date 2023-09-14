'use client'

import { ProjectResponse } from '@/models/Project'
import styles from '@/app/utils.module.css'
import layoutStyles from '@/app/layout.module.css'
import clsx from 'clsx'
import ProjectCard from '@/components/ProjectCard'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Multiselect from 'multiselect-react-dropdown'
import { useSearchParams } from 'next/navigation'

type Sort = {
  field: keyof ProjectResponse,
  asc: boolean,
}

export const tags = [
  "accessibility",
  "authentication",
  "business",
  "computer repair",
  "e2e testing",
  "electronics",
  "entrepreneurship",
  "full-stack",
  "game design",
  "graphic design",
  "hardware",
  "installation design",
  "MERN stack",
  "non-profit",
  "open-source",
  "politics",
  "promotions",
  "responsive design",
  "REST APIs",
  "web design",
  "web development",
]

export const defaultVisibleTags = [
  "accessibility",
  "authentication",
  "business",
  "computer repair",
  "e2e testing",
  "electronics",
  "entrepreneurship",
  "full-stack",
  "game design",
  "graphic design",
  "hardware",
  "installation design",
  "MERN stack",
  "non-profit",
  "open-source",
  "promotions",
  "responsive design",
  "REST APIs",
  "web design",
  "web development",
]

export const defaultHiddenTags = [
  "politics"
]

export default function ProjectsGrid({projects}: {projects: ProjectResponse[]}) {
  const searchParams = useSearchParams()
  const [queryString, setQueryString] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>()
  const expandTimeout = useRef<NodeJS.Timer>()
  const selectedValues = useRef<string[]>(defaultVisibleTags)
  const hiddenValues = useRef<string[]>(defaultHiddenTags)
  const [filteredProjects, setFilteredProjects] = useState<ProjectResponse[]>(() => [...projects])
  const [sortedProjects, setSortedProjects] = useState<ProjectResponse[]>(() => [...filteredProjects])
  const [sortBy, setSortBy] = useState<Sort>({
    field: 'dateString',
    asc: false,
  })
  const [isExpanded, setIsExpanded] = useState<boolean>(() => false)
  const [isExpanding, setIsExpanding] = useState<boolean>(() => false)
  const [isLoading, setIsLoading] = useState<boolean>(() => true)

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

  const filterProjects = useCallback((selectedTags: string[]) => {
    const searchTerm: string = inputRef!.current!.value!.toLowerCase() || ''
    setIsLoading(true)
    selectedValues.current = selectedTags
    hiddenValues.current = tags.filter((tag: string) => !selectedTags.includes(tag))
    console.log(selectedValues.current, hiddenValues.current)
    setFilteredProjects(() => {
      if (searchTerm.length < 3) {
        return projects.filter((project: ProjectResponse) => (
          project.tags.some((tag: string) => selectedValues.current.includes(tag)) &&
          !project.tags.some((tag: string) => hiddenValues.current.includes(tag))
        ))
      }
      return projects.filter((project: ProjectResponse) => (
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tags.join().toLowerCase().includes(searchTerm) ||
        project.tech.join().toLowerCase().includes(searchTerm) ||
        project.tags.includes(searchTerm)
      ) &&
      project.tags.some((tag: string) => selectedValues.current.includes(tag)) &&
      !project.tags.some((tag: string) => hiddenValues.current.includes(tag)))
    })
  }, [inputRef.current, hiddenValues.current, selectedValues.current])

  const toggleExpandable = useCallback((expand: boolean) => {
    if (expand === false) {
      setIsExpanded(false)
      setIsExpanding(false)
      return
    }
    setIsExpanding(true)
    expandTimeout.current = setTimeout(() => {
      setIsExpanding(false)
      setIsExpanded(true)
    }, 500)
  }, [isExpanding, isExpanded])

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

  useEffect(() => {
    setIsLoading(false)
  }, [sortedProjects])

  useEffect(() => {
    if (!queryString.length)  {
      filterProjects(selectedValues.current)
      return
    }
    selectedValues.current = [...selectedValues.current, ...queryString.split(',')]
    setQueryString('')
    filterProjects(selectedValues.current)
  }, [queryString])

  useEffect(() => {
    setQueryString(searchParams.get('tags') || '')
    return () => clearTimeout(expandTimeout.current)
  }, [])

  return (
    <section>
      <div className={styles.infobar}>
        <input
          type='text'
          placeholder='Search....'
          ref={inputRef as any}
          onChange={() => filterProjects(selectedValues.current)} />
        <button
          aria-expanded={isExpanded || isExpanding}
          aria-label='Advanced Search'
          aria-controls='advanced_search'
          onClick={() => toggleExpandable(!isExpanded)}>
            <Image
              src='/images/noun-search-settings-4841336.svg'
              alt='Advanced Search'
              width={18}
              height={18} />
              <span aria-hidden></span>
        </button>
      </div>
      <div id='advanced_search' className={clsx(styles.infobar, styles.expandable, {
        [styles.expanded]: !!isExpanded,
        [styles.expanding]: !!isExpanding
      })}>
      <Multiselect
        className={clsx(layoutStyles.multiSelect, {
          [layoutStyles.multiSelectLoading]: !!isLoading
        })}
        customCloseIcon={<button>x</button>}
        options={tags}
        selectedValues={selectedValues.current}
        onSelect={filterProjects}
        onRemove={filterProjects}
        isObject={false} />
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
      {!!isLoading ?
        <div className={styles.loader}>&bull;</div>
      :
        <ul className={clsx(styles.grid, styles.projectsGrid)}>
          {sortedProjects.map((project: ProjectResponse, i: number) => (
            <ProjectCard project={project} key={`projects_grid_${i}`} />
          ))}
        </ul>
      }
    </section>
  )
}