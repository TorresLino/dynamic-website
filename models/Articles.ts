import { Schema, Types, model, models } from 'mongoose'

export interface Article {
    childArticles: Article[]
    contentId: Types.ObjectId
    path: string
    title: string
}

const articlesSchema = new Schema()
articlesSchema.add({
    childArticles: {
        default: [],
        type: [articlesSchema]
    },

    contentId: {
        required: true,
        type: Types.ObjectId
    },

    path: {
        required: true,
        trim: true,
        type: String,
        unique: true,
        validate: {
            message: 'Path does not match specified characters',
            validator: (data: string) => {
                return (/^[a-zA-Z0-9_-]*$/).test(data)
            }
        }
    },

    title: {
        default: '',
        required: true,
        type: String
    }
})

const Articles = models.Articles || model('Articles', articlesSchema)

export default Articles