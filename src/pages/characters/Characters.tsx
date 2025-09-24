import "./index.css";

import { Button, Card, Col, Row, Spin } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useGetCharactersQuery } from "./characters.generated";
import CreateNewCharacterModal from "./CreateNewCharacterModal";
const { Meta } = Card;

const Characters = () => {
  const { data, loading } = useGetCharactersQuery();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <>
      <div className="create-button-container">
        <Button
          size="large"
          onClick={() => setIsModalVisible(true)}
          className="create-button">
          Create New Character
        </Button>
      </div>

      <Row className="characters-page" gutter={[24, 24]}>
        {data?.characters?.results?.map((character) => (
          <Col key={character?.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Link to={`/character/${character?.id}`} className="character-link">
              <Card
                hoverable
                className="character-card"
                cover={
                  <img
                    alt="character-img"
                    src={character?.image || undefined}
                    className="character-card__cover"
                  />
                }>
                <Meta
                  title={character?.name}
                  description={
                    <div className="character-card__desc">
                      <p>Sex: {character?.gender}</p>
                      <p>Species: {character?.species}</p>
                      <p>Status: {character?.status}</p>
                      <p>Type: {character?.type}</p>
                    </div>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <CreateNewCharacterModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Characters;
