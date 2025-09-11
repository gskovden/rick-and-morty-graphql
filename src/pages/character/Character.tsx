import "./index.css";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Descriptions, Row, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetCharacterQuery } from "./characters.generated";

const { Item } = Descriptions;
const { Title } = Typography;

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetCharacterQuery({
    variables: {
      characterId: id as string,
    },
  });

  if (error) {
    return (
      <Row className="character-page">
        <Col className="error-info">Ошибка загрузки данных</Col>
      </Row>
    );
  }

  if (loading) {
    return (
      <Row className="character-page" justify="center">
        <Spin size="large" />
      </Row>
    );
  }

  const character = data?.character;
  return (
    <div className="character-page">
      <Link to="/characters" className="back-link">
        <Button icon={<ArrowLeftOutlined />} className="back-button">
          Back
        </Button>
      </Link>
      <Row className="row-link-image">
        <Avatar size={300} src={character?.image as string} />
      </Row>
      <Row>
        <Title className="character-title">{character?.name}</Title>
      </Row>
      <Row>
        <Descriptions className="descriptions">
          <Item label="Species">{character?.species}</Item>
          <Item label="Gender">{character?.gender}</Item>
          <Item label="Status">{character?.status}</Item>
          <Item label="Created">
            {dayjs(character?.created).format("DD.MM.YYYY")}
          </Item>
          <Item label="Type">{character?.type}</Item>
        </Descriptions>
      </Row>
    </div>
  );
};

export default Character;
