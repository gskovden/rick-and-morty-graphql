import "./index.css";

import { Card, Row, Spin } from "antd";
import { Link } from "react-router-dom";

import { useGetCharactersQuery } from "./characters.generated";
const { Meta } = Card;

const Characters = () => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <Row
        className="loading-page"
        justify="center"
        align="middle"
        style={{ minHeight: "50vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  return (
    <Row className="characters-page">
      {data?.characters?.results?.map((character) => (
        <Link
          to={`/character/${character?.id}`}
          key={character?.id}
          className="character-link">
          <Card
            hoverable
            className="character-card"
            cover={
              <img alt="character-img" src={character?.image || undefined} />
            }>
            <Meta
              title={character?.name}
              description={
                <>
                  <p>Sex: {character?.gender}</p>
                  <p>Species: {character?.species}</p>
                  <p>Status: {character?.status}</p>
                  <p>Type: {character?.type}</p>
                </>
              }
            />
          </Card>
        </Link>
      ))}
    </Row>
  );
};

export default Characters;
