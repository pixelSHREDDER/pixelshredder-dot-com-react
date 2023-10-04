import { defaultKeywords } from "@mikeintosh/layout";
import { stripHTML, getWordCount } from "./utils";

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
      description: data.description,
      headline: data.title,
      keywords: [...data.keywords, ...defaultKeywords],
      name: data.title,
      image: 'https://www.pixel-shredder.com/android-chrome-512x512.png',
      inLanguage: 'en-US',
      isPartOf:  'https://www.pixel-shredder.com/articles',
      url: `https://www.pixel-shredder.com/articles/${data.slug}`,
      wordCount: getWordCount(data.body).toString(),
      ...data.schema,
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
      description: data.description,
      headline: data.title,
      keywords: [...data.tags, ...data.tech, ...defaultKeywords],
      name: data.title,
      image: 'https://www.pixel-shredder.com/android-chrome-512x512.png',
      inLanguage: 'en-US',
      isPartOf:  'https://www.pixel-shredder.com/projects',
      url: `https://www.pixel-shredder.com/projects/${data.slug}`,
      wordCount: getWordCount(data.body).toString(),
      ...data.schema,
    }
  }
}

export function populateArticleData(data: any, callback: Function) {
  try {
    if (data instanceof Array) {
      return callback(data.map((d) => populateArticle(d)))
    } else {
      return callback(populateArticle(data))
    }
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}

export function populateProjectData(data: any, callback: Function) {
  try {
    if (data instanceof Array) {
      return callback(data.map((d) => populateProject(d)))
    } else {
      return callback(populateProject(data))
    }
  } catch(err: any) {
      data['exception'] = err.toString();
      return callback(data, err);
  }
}