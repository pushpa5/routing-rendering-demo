function NewsDetails({ params }) {
    return (
        <>
            <h1>News details Page</h1>
            <p>news id: {params.id}</p>
        </>
    )
}

export default NewsDetails;