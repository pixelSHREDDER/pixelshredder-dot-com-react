'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Multiselect from 'multiselect-react-dropdown'
import buttonGroupStyles from '@/components/ButtonGroup/buttonGroup.module.css'
import cardGridStyles from './cardGrid.module.css'
import articlesExpandableStyles from '@/components/Expandable/articlesExpandable.module.css'
import articlesInfoBarStyles from '@/components/InfoBar/articlesInfoBar.module.css'
import Loader from '@/components/Loader/Loader'
import articlesMultiSelectStyles from '@/components/MultiSelect/articlesMultiSelect.module.css'
import ArticleCard from '@/components/Card/ArticleCard'
import { ArticleClass } from '@/models/Article'

type Sort = {
  field: keyof ArticleClass,
  asc: boolean,
}

export const tags = [
  "journalism",
  "politics"
]

export const defaultVisibleTags = [
  "journalism"
]

export const defaultHiddenTags = [
  "politics"
]

export default function ArticlesGrid({articles}: {articles: ArticleClass[]}) {
  const searchParams = useSearchParams()
  const [queryString, setQueryString] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>()
  const expandTimeout = useRef<NodeJS.Timer>()
  const selectedValues = useRef<string[]>(defaultVisibleTags)
  const hiddenValues = useRef<string[]>(defaultHiddenTags)
  const [filteredArticles, setFilteredArticles] = useState<ArticleClass[]>(() => [...articles])
  const [sortedArticles, setSortedArticles] = useState<ArticleClass[]>(() => [...filteredArticles])
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
      newSortBy.field = field as keyof ArticleClass
      newSortBy.asc = true
    }
    setSortBy(newSortBy)
  }, [])

  const filterArticles = useCallback((selectedTags: string[]) => {
    const searchTerm: string = inputRef!.current!.value!.toLowerCase() || ''
    setIsLoading(true)
    selectedValues.current = selectedTags
    hiddenValues.current = tags.filter((tag: string) => !selectedTags.includes(tag))
    setFilteredArticles(() => {
      if (searchTerm.length < 3) {
        return articles.filter((article: ArticleClass) => (
          article.tags.some((tag: string) => selectedValues.current.includes(tag)) &&
          !article.tags.some((tag: string) => hiddenValues.current.includes(tag))
        ))
      }
      return articles.filter((article: ArticleClass) => (
        article.title.toLowerCase().includes(searchTerm) ||
        article.schema.alternativeHeadline?.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm) ||
        article.tags.join().toLowerCase().includes(searchTerm) ||
        article.tags.includes(searchTerm)
      ) &&
      article.tags.some((tag: string) => selectedValues.current.includes(tag)) &&
      !article.tags.some((tag: string) => hiddenValues.current.includes(tag)))
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
    setSortedArticles(filteredArticles.sort((a: ArticleClass, b: ArticleClass) => {
      if (a[sortBy.field] < b[sortBy.field]) {
        return sortBy.asc === true ? -1 : 1
      } else if (a[sortBy.field] > b[sortBy.field]) {
        return sortBy.asc === true ? 1 : -1
      } else {
        return 0
      }
    }))
  }, [sortBy, filteredArticles])

  useEffect(() => {
    setIsLoading(false)
  }, [sortedArticles])

  useEffect(() => {
    if (!queryString.length)  {
      filterArticles(selectedValues.current)
      return
    }
    selectedValues.current = [...selectedValues.current, ...queryString.split(',')]
    setQueryString('')
    filterArticles(selectedValues.current)
  }, [queryString])

  useEffect(() => {
    setQueryString(searchParams.get('tags') || '')
    return () => clearTimeout(expandTimeout.current)
  }, [])

  return (
    <section>
      <div className={articlesInfoBarStyles.articlesInfoBar}>
        <input
          type='text'
          placeholder='Search....'
          ref={inputRef as any}
          onChange={() => filterArticles(selectedValues.current)} />
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
        [articlesExpandableStyles.expanded]: !!isExpanded,
        [articlesExpandableStyles.expanding]: !!isExpanding,
        [articlesExpandableStyles.expandable]: !isExpanded && !isExpanding,
      })}>
      <Multiselect
        className={clsx({
          [articlesMultiSelectStyles.articlesMultiSelect]: !isLoading,
          [articlesMultiSelectStyles.articlesMultiSelectLoading]: !!isLoading
        })}
        customCloseIcon={<button>x</button>}
        options={tags}
        selectedValues={selectedValues.current}
        onSelect={filterArticles}
        onRemove={filterArticles}
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
      {!isLoading && !!sortedArticles.length &&
        <ul className={cardGridStyles.cardGrid}>
          {sortedArticles.map((article: ArticleClass, i: number) =>
            <ArticleCard article={article} key={`articles_grid_${i}`} />
          )}
        </ul>
      }
      {!isLoading && !sortedArticles.length &&
        <p>No articles found matching your search criteria.</p>
      }
    </section>
  )
}