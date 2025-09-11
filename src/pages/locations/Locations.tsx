import "./index.css";

import { Avatar, Col, Collapse, List, Row, Spin, Typography } from "antd";

import { useGetLocationsQuery } from "./locations.generated";

const { Panel } = Collapse;
const { Text } = Typography;

const Locations = () => {
  const { data, loading, error } = useGetLocationsQuery();

  if (error) {
    return (
      <Row className="locations-page">
        <Col className="error-info">Ошибка загрузки данных</Col>
      </Row>
    );
  }

  if (loading) {
    return (
      <Row className="locations-page" justify="center">
        <Spin size="large" />
      </Row>
    );
  }

  const locations = data?.locations?.results?.filter(Boolean) || [];

  return (
    <div className="locations-page">
      <Collapse accordion className="collapse" bordered={false}>
        {locations.map((location) => (
          <Panel
            className="panel"
            key={location?.id || "unknown"}
            header={
              <div>
                <Text strong>{location?.name}</Text>
                <br />
                <Text type="secondary">Type:&nbsp;{location?.type}</Text>
                <br />
                <Text type="secondary">
                  Dimension:&nbsp;{location?.dimension}
                </Text>
              </div>
            }>
            <List
              header={<Text strong>Residents:</Text>}
              bordered
              dataSource={location?.residents?.filter(Boolean) || []}
              renderItem={(resident) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={resident?.image}
                        alt={resident?.name as string}
                        size={64}
                      />
                    }
                    title={resident?.name}
                    description={
                      <Row justify="space-between">
                        <div>Status: {resident?.status}</div>
                        <div>Species: {resident?.species}</div>
                        <div>Gender: {resident?.gender}</div>
                      </Row>
                    }
                  />
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Locations;
