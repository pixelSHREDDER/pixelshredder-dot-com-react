import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  prop,
} from '@typegoose/typegoose'
import mongoose from 'mongoose'

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
  @prop({ required: true, unique: true })
  slug: string
  @prop({ required: true })
  title: string
  @prop({ default: '...' })
  description: string
  @prop({ default: '...' })
  body: string
  @prop({ default: [] })
  tags: Array<string>
  @prop({ default: [] })
  tech: Array<string>
  _id: mongoose.Types.ObjectId
}

const Project = getModelForClass(ProjectClass)
export { Project, ProjectClass }
