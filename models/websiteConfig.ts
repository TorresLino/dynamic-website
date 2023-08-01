import { Schema, Types, model, models } from 'mongoose'

const websiteConfigSchema = new Schema()
websiteConfigSchema.add({
    navbar: {
        pages: {
            default: [],
            type: [Types.ObjectId]
        }
    }
})

const WebsiteConfig = models.WebsiteConfig || model('WebsiteConfig', websiteConfigSchema)

export default WebsiteConfig