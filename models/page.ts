import { Schema, Types, model, models } from 'mongoose'

const pageSchema = new Schema()
pageSchema.add({
    childPages: {
        default: [],
        type: [pageSchema]
    },

    content: String,
    // necessary?
    parentPage: Types.ObjectId,

    path: {
        required: true,
        trim: true,
        type: String,
        unique: true,
        validate: {
            message: 'Page path does not match specified characters',
            validator: (data: string) => {
                return (/^[a-zA-Z0-9_-]*$/).test(data)
            }
        }
    },
    // necessary?
    rootPage: Types.ObjectId,

    title: {
        required: true,
        type: String
    }
})

const Page = models.Page || model('Page', pageSchema)

export default Page