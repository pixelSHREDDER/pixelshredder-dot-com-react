import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  prop,
} from '@typegoose/typegoose'
import mongoose from 'mongoose'
import type {
  AudioObject,
  Clip,
  CreativeWork,
  Date,
  DateTime,
  DefinedTerm,
  Event,
  Organization,
  Person,
  Place,
  PublicationEvent,
  Thing,
  URL,
  VideoObject,
} from 'schema-dts'

type TArticleSchema = {
  '@type': 'BlogPosting'
  alternativeHeadline?: string
  articleBody?: string
  articleSection?: string
  audio?: AudioObject
  award?: string
  backstory?: string
  citation?: string
  creativeWorkStatus?: DefinedTerm | string
  creditText?: string
  dateCreated?: Date
  dateModified?: Date
  datePublished?: Date
  description?: string
  disambiguatingDescription?: string
  editor?: Person
  headline?: string
  image?: URL
  inLanguage?: string
  isPartOf?: URL
  keywords?: string[]
  locationCreated?: Place
  mentions?: Thing
  name?: string
  pageEnd?: string
  pageStart?: string
  pagination?: string
  publisher?: Organization | Person
  recordedAt?: Event
  releasedEvent?: PublicationEvent
  sameAs?: URL
  sharedContent?: CreativeWork
  sourceOrganization?: Organization
  subjectOf?: CreativeWork | Event
  temporalCoverage?: DateTime | string | URL
  thumbnailUrl?: URL
  url?: URL
  video?: Clip | VideoObject
  wordCount?: number
}

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "articles",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })

class ArticleClass {
  @prop({ required: true })
  schema: TArticleSchema
  @prop({ default: '...' })
  body: string
  @prop({ required: true })
  date: Date
  @prop({ default: '...' })
  description: string
  @prop({ required: true })
  link: string
  @prop({ required: true, unique: true })
  slug: string
  @prop()
  sortDate: string
  @prop({ default: [] })
  tags: Array<string>
  @prop({ required: true })
  title: string
  _id: mongoose.Types.ObjectId
}

const Article = getModelForClass(ArticleClass)
export { Article, ArticleClass, type TArticleSchema }
