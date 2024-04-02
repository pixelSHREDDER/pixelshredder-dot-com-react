import { defaultKeywords } from "@mikeintosh/layout";
import { stripHTML, getWordCount } from "./utils";

function getKeywords(data: any, extraData: string[]) {
  if (!!data.schema.keywords) {
    return [...data.schema.keywords, ...extraData, ...defaultKeywords]
  } else {
    return [...extraData, ...defaultKeywords]
  }
}

function getSortDate(data: any) {
  if (!!data.schema.datePublished) {
    return data.schema.datePublished
  }
  if (!!data.schema.dateCreated) {
    return data.schema.dateCreated
  }
  return data.date
}

function populateArticle(data: any) {
  return {
    ...data,
    sortDate: getSortDate(data),
    schema: {
      '@type': 'BlogPosting',
      articleBody: stripHTML(data.body),
      author: 'Mike DeVine',
      description: data.description,
      headline: data.title,
      name: data.title,
      image: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/android-chrome-512x512.png`,
      inLanguage: 'en-US',
      isPartOf:  `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles`,
      url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/articles/${data.slug}`,
      wordCount: getWordCount(data.body).toString(),
      ...data.schema,
      keywords: getKeywords(data, data.tags)
    }
  }
}

function populateProject(data: any) {
  return {
    ...data,
    sortDate: getSortDate(data),
    schema: {
      '@type': 'BlogPosting',
      articleBody: stripHTML(data.body),
      author: 'Mike DeVine',
      description: data.description,
      headline: data.title,
      name: data.title,
      image: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/android-chrome-512x512.png`,
      inLanguage: 'en-US',
      isPartOf:  `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects`,
      url: `${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}/projects/${data.slug}`,
      wordCount: getWordCount(data.body).toString(),
      ...data.schema,
      keywords: getKeywords(data, [...data.tags, ...data.tech])
    }
  }
}

export function populateArticleData(data: any, callback: Function) {
  try {
    return callback(populateArticle(data))
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}

export function populateArticlesData(data: any, callback: Function) {
  try {
    return callback(data.map((d: any) => populateArticle(d)))
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}

export function populateProjectData(data: any, callback: Function) {
  try {
    return callback(populateProject(data))
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}

export function populateProjectsData(data: any, callback: Function) {
  try {
    return callback(data.map((d: any) => populateProject(d)))
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}