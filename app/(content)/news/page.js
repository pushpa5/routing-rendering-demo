// import { DUMMY_NEWS } from "@/dummy-news";
// import NewsList from "@/components/newsList";

// function News() {
//     return (
//         <>
//             <h1>News Page</h1>
//             <NewsList news={DUMMY_NEWS} />
//         </>
//     )
// }

// export default News;

'use client'

import NewsList from "@/components/newsList";
import { useEffect, useState } from "react";

function News() {
    const [news, setNews] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getNews() {
            setLoading(true)
            const response = await fetch('http://localhost:8080/news')
            const news = await response.json();
            if (!response.ok) {
                setError('Failed to fetch the news')
                setLoading(false)
            }
            console.log('news', news)
            setNews(news)
            setLoading(false)
        }
        getNews()
    }, [])

    const errorContent = !loading && error && <p>unable to fetch the data</p>

    const newsContent = !loading && news?.length ?  <NewsList news={news} /> : <p>fetching the data</p>
    return (
        <>
            <h1>News Page</h1>
            {error ? errorContent : newsContent}
        </>
    )
}

export default News;

