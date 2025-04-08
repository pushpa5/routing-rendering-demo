import Link from "next/link";

import NewsList from "@/components/newsList"
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news"

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news;
    let links = getAvailableNewsYears();

    if(selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear);
    }

    if(selectedYear, selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    let newsContent =  <p>Please select the year and month to see the content</p>

    if (news && news.length) {
        newsContent =  <NewsList news={news} />
    } else if (selectedYear && selectedMonth) {
        newsContent = <p>no news found for selected yearand selected month</p>
    }

    if ((selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))) {
            throw new Error('path is invalid')
        }

    return (
        <>
            <header id="archive-header">
                <h1></h1>
                <nav>
                    <ul>
                        {links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` :  `/archive/${link}`                 
                        return(<li key={link}>
                            <Link href={href}>{link}</Link>
                        </li>)
                    })}
                    </ul>
                </nav>
            </header>
            <main>
               {newsContent}
            </main>
        </>
    )

} 