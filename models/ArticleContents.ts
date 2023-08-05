import { Schema, Types, model, models } from 'mongoose'

export interface ArticleContent {
    articleId: Types.ObjectId
    content: string
}

const articleContentsSchema = new Schema()
articleContentsSchema.add({
    content: {
        default: '',
        required: true,
        type: String
    }
})

const ArticleContents = models.ArticleContents || model('ArticleContents', articleContentsSchema)

export default ArticleContents