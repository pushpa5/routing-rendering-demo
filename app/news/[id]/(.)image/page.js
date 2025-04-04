import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"

export default function InterceptionImagePage({ params }) {
    const newSlug = params.id
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newSlug)

    if (!newsItem) {
        notFound()
    }
    return (
        <>
        <h2>interception route</h2>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
        </>
    )
}