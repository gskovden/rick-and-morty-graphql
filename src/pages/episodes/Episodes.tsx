import "./index.css";

import { Carousel, Col, Descriptions, Row, Spin } from "antd";
import dayjs from "dayjs";

import { useGetEpisodesQuery } from "./episodes.generated";

const { Item } = Descriptions;

const Episodes = () => {
  const { data, loading, error } = useGetEpisodesQuery();

  if (error) {
    return (
      <Row className="episodes-page">
        <Col className="error-info">Ошибка загрузки данных</Col>
      </Row>
    );
  }
  return (
    <div className="episodes-page">
      {loading && !data ? (
        <div className="spin-container">
          <Spin
            size="large"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
            }}
          />
        </div>
      ) : (
        <Carousel
          dots
          effect="scrollx"
          speed={1000}
          arrows
          className="carousel">
          {data?.episodes?.results?.map((episode) => (
            <Descriptions
              title="Episodes info"
              key={episode?.id}
              className="descriptions">
              <Item label="Air date">{episode?.air_date}</Item>
              <Item label="Created">
                {dayjs(episode?.created).format("DD.MM.YYYY")}
              </Item>
              <Item label="Episode">{episode?.episode}</Item>
              <Item label="Name">{episode?.name}</Item>
            </Descriptions>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Episodes;
