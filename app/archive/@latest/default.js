import NewsList from "@/components/newsList"
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage() {
    const latestNews = getLatestNews()
    return <>
        <h2>Latest news</h2>
        <NewsList news={latestNews} />
    </>
}