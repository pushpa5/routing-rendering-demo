import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

function NewsDetails({ params }) {
    const newSlug = params.id
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newSlug)

    if (!newsItem) {
        notFound()
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newSlug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}

export default NewsDetails;