const omdbAPIkey = `${process.env.REACT_APP_OMDB_API}`;

export interface OmbdData {
  Title: string;
  Poster: string;
}

const getOmbdAPIData = async (seriesName: string): Promise<OmbdData> =>
  await fetch(`https://www.omdbapi.com/?apikey=${omdbAPIkey}&t=${seriesName}`)
    .then(response => response.json())
    .catch(err => { console.error(err); });

export { getOmbdAPIData };
