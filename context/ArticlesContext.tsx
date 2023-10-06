import { ReactElement, createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Article } from '@/models/Articles'

export interface ArticlesContextData {
    articles: Article[]
}

export type ArticlesContextValue = [
    articles: ArticlesContextData,
    fetchArticles: () => Promise<void>
]

const defaultValues = {
    articles: []
} as ArticlesContextData

const ArticlesContext = createContext<ArticlesContextValue>([defaultValues, async () => {}])

export function ArticlesContextProvider({ children }: { children: ReactElement }) {
    const [articleData, setArticleData] = useState<ArticlesContextData>(defaultValues)

    const fetchArticles = useCallback(async () => {
        const res = await fetch('/api/articles')
        const { articles } = await res.json() as { articles: Article[] }

        setArticleData({ articles })
    }, [])

    useEffect(() => {
        fetchArticles()
    }, [fetchArticles])

    return (
        <ArticlesContext.Provider value={[articleData, fetchArticles]}>
            { children }
        </ArticlesContext.Provider>
    )
}

export function useArticlesContext() {
    return useContext(ArticlesContext)
}