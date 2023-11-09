import ArticleContents, { ArticleContent } from '@/models/ArticleContents'
import Articles, { Article } from '@/models/Articles'
import PageEditSwitch from '@/components/PageEditSwitch'
import connectMongo from '@/lib/mongoose'
import { notFound } from 'next/navigation'

export default async function Page({ params: { route } }: { params: { route: string[] } }) {
    await connectMongo()

    const articles = await Articles.find()

    const getArticle = (route: string[], articles: Article[]): Article | undefined => {
        const path = route.shift()

        if (!path) {
            return undefined
        }

        const article = articles.find(a => a.path === path)

        if (!article) {
            return undefined
        }

        return route.length === 0
            ? article
            : getArticle(route, article.childArticles)
    }

    const article = getArticle(route, articles)

    if (!article) {
        notFound()
    }

    const content = await ArticleContents.findById(article.contentId) as ArticleContent

    if (!content) {
        notFound()
    }

    return <PageEditSwitch content={content.content} />
}
