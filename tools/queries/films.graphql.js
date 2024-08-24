export default `query Query {
    allFilms {
        films {
            id
            director
            title
            releaseDate
            producers
            episodeID
        }
    }
}`;
