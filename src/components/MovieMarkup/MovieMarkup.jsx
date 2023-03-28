import { Card, Score, ScoreContainer, Main } from './MovieMarkpu.styled';
import BackLink from 'components/BackLink/BackLink';

export const MovieMarkup = ({ item, error }) => {
  const { poster_path, original_title, vote_average, overview, genres } = item;
  return (
    <Main>
      {item.length !== 0 && !error && (
        <>
          <BackLink />
          <Card>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={original_title}
            />
            <div>
              <h1>{original_title}</h1>
              <ScoreContainer>
                <Score>User Score:</Score>
                <p>{vote_average}</p>
              </ScoreContainer>
              <h3>Overview: </h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </Card>
          <hr />
        </>
      )}
    </Main>
  );
};