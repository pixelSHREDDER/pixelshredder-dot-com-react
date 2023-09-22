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
  Product,
  PublicationEvent,
  QuantitativeValue,
  SizeSpecification,
  Thing,
  URL,
  VideoObject,
} from 'schema-dts'

type TProjectSchema = {
  '@type': 'BlogPosting',
  articleBody?: string
  audio?: AudioObject
  award?: string
  citation?: string
  creativeWorkStatus?: DefinedTerm | string
  creditText?: string
  dateCreated?: Date
  datePublished?: Date
  description?: string
  disambiguatingDescription?: string
  headline?: string
  image?: URL,
  isPartOf?: URL,
  keywords?: string[],
  locationCreated?: Place
  material?: Product | string | URL
  materialExtent?: string
  mentions?: Thing
  name?: string,
  pattern?: DefinedTerm | string
  recordedAt?: Event
  releasedEvent?: PublicationEvent
  sameAs?: URL
  sharedContent?: CreativeWork
  size?: DefinedTerm | QuantitativeValue | SizeSpecification | string
  sourceOrganization?: Organization
  sponsor?: Organization | Person
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
    collection: "projects",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })

class ProjectClass {
  @prop({ required: true })
  schema: TProjectSchema
  @prop({ default: '...' })
  body: string
  @prop({ required: true })
  date: Date
  @prop({ default: '...' })
  description: string
  @prop({ required: true, unique: true })
  slug: string
  @prop()
  sortDate: string
  @prop({ default: [] })
  tags: Array<string>
  @prop({ default: [] })
  tech: Array<string>
  @prop({ required: true })
  title: string
  _id: mongoose.Types.ObjectId
}

const Project = getModelForClass(ProjectClass)
export { Project, ProjectClass, type TProjectSchema }
