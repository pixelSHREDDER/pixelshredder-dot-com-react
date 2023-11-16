'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Multiselect from 'multiselect-react-dropdown'
import buttonGroupStyles from '@/components/ButtonGroup/buttonGroup.module.css'
import cardGridStyles from './cardGrid.module.css'
import mikeintoshExpandableStyles from '@/components/Expandable/mikeintoshExpandable.module.css'
import mikeintoshInfoBarStyles from '@/components/InfoBar/mikeintoshInfoBar.module.css'
import Loader from '@/components/Loader/Loader'
import mikeintoshMultiSelectStyles from '@/components/MultiSelect/mikeintoshMultiSelect.module.css'
import ProjectCard from '@/components/Card/ProjectCard'
import { ProjectClass } from '@/models/Project'

type Sort = {
  field: keyof ProjectClass,
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
  "journalism",
  "MERN stack",
  "non-profit",
  "open-source",
  "politics",
  "print design",
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
  "journalism",
  "MERN stack",
  "non-profit",
  "open-source",
  "print design",
  "promotions",
  "responsive design",
  "REST APIs",
  "web design",
  "web development",
]

export const defaultHiddenTags = [
  "politics"
]

export default function ProjectsGrid({projects}: {projects: ProjectClass[]}) {
  const searchParams = useSearchParams()
  const [queryString, setQueryString] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>()
  const expandTimeout = useRef<NodeJS.Timer>()
  const selectedValues = useRef<string[]>(defaultVisibleTags)
  const hiddenValues = useRef<string[]>(defaultHiddenTags)
  const [filteredProjects, setFilteredProjects] = useState<ProjectClass[]>(() => [...projects])
  const [sortedProjects, setSortedProjects] = useState<ProjectClass[]>(() => [...filteredProjects])
  const [sortBy, setSortBy] = useState<Sort>({
    field: 'sortDate',
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
      newSortBy.field = field as keyof ProjectClass
      newSortBy.asc = true
    }
    setSortBy(newSortBy)
  }, [])

  const filterProjects = useCallback((selectedTags: string[]) => {
    const searchTerm: string = inputRef!.current!.value!.toLowerCase() || ''
    setIsLoading(true)
    selectedValues.current = selectedTags
    hiddenValues.current = tags.filter((tag: string) => !selectedTags.includes(tag))
    setFilteredProjects(() => {
      if (searchTerm.length < 3) {
        return projects.filter((project: ProjectClass) => (
          project.tags.some((tag: string) => selectedValues.current.includes(tag)) &&
          !project.tags.some((tag: string) => hiddenValues.current.includes(tag))
        ))
      }
      return projects.filter((project: ProjectClass) => (
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
    setSortedProjects(filteredProjects.sort((a: ProjectClass, b: ProjectClass) => {
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
      <div className={mikeintoshInfoBarStyles.mikeintoshInfoBar}>
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
      <div id='advanced_search' className={clsx({
        [mikeintoshExpandableStyles.expanded]: !!isExpanded,
        [mikeintoshExpandableStyles.expanding]: !!isExpanding,
        [mikeintoshExpandableStyles.expandable]: !isExpanded && !isExpanding,
      })}>
      <Multiselect
        className={clsx({
          [mikeintoshMultiSelectStyles.mikeintoshMultiSelect]: !isLoading,
          [mikeintoshMultiSelectStyles.mikeintoshMultiSelectLoading]: !!isLoading
        })}
        customCloseIcon={<button>x</button>}
        options={tags}
        selectedValues={selectedValues.current}
        onSelect={filterProjects}
        onRemove={filterProjects}
        isObject={false} />
        <div className={buttonGroupStyles.buttonGroup}>
          <button onClick={() => toggleSort(sortBy, 'title')}>
            <sup>A</sup>/<sub>Z</sub>
            {!!sortBy.asc && sortBy.field === 'title' &&
              <span>&uarr;</span>
            }
            {!sortBy.asc && sortBy.field === 'title' &&
              <span>&darr;</span>
            }
          </button>
          <button onClick={() => toggleSort(sortBy, 'sortDate')}>
            <Image
              src='/images/noun-date-1360181.svg'
              alt='Date'
              width={16}
              height={16} />
            {!!sortBy.asc && sortBy.field === 'sortDate' &&
              <span>&uarr;</span>
            }
            {!sortBy.asc && sortBy.field === 'sortDate' &&
              <span>&darr;</span>
            }
          </button>
        </div>
      </div>
      {!!isLoading &&
        <Loader />
      }
      {!isLoading && !!sortedProjects.length &&
        <ul className={cardGridStyles.cardGrid}>
          {sortedProjects.map((project: ProjectClass, i: number) => (
            <ProjectCard project={project} key={`projects_grid_${i}`} />
          ))}
        </ul>
      }
      {!isLoading && !sortedProjects.length &&
        <p>No projects found matching your search criteria.</p>
      }
    </section>
  )
}