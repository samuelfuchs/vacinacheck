import { useState, useEffect } from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

// Mock de dados do histórico de aplicação
const applicationHistoryMock = [
  {
    clientId: 1,
    clientName: "João Silva",
    date: "2023-10-15",
    vaccineName: "Vacina A",
    vaccineLab: "Lab A",
    quantityApplied: 2.5,
    observations: "Observação 1",
  },
  {
    clientId: 1,
    clientName: "João Silva",
    date: "2023-10-14",
    vaccineName: "Vacina B",
    vaccineLab: "Lab B",
    quantityApplied: 3.0,
    observations: "Observação 2",
  },
  // Adicione mais dados do histórico de aplicação conforme necessário
];

const ClientDetails = ({ client }) => {
  return (
    <Card>
      <Card.Header>Client Details</Card.Header>
      <Card.Body>
        <Card.Title>{client.clientName}</Card.Title>
        <Card.Text>{/* Adicione as informações do cliente aqui */}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const ApplicationHistory = ({ historyData }) => {
  return (
    <Card>
      <Card.Header>Application History</Card.Header>
      <ListGroup variant="flush">
        {historyData.map((item, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col>Date: {item.date}</Col>
              <Col>Vaccine: {item.vaccineName}</Col>
              <Col>Laboratory: {item.vaccineLab}</Col>
              <Col>Quantity: {item.quantityApplied} ml</Col>
              <Col>Observations: {item.observations}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

const DetailPage = ({ match }) => {
  const [clientDetails, setClientDetails] = useState(null);

  // Simula o carregamento dos detalhes do cliente com base no ID da rota
  //   useEffect(() => {
  //     // const clientId = parseInt(match.params.clientId);
  //     const client = applicationHistoryMock.find(
  //       (item) => item.clientId === clientId
  //     );
  //     setClientDetails(client);
  //   }, [match.params.clientId]);

  return (
    <Container>
      <h2>Application History Details</h2>
      {clientDetails && (
        <>
          <ClientDetails client={clientDetails} />
          <ApplicationHistory
            historyData={applicationHistoryMock.filter(
              (item) => item.clientId === clientDetails.clientId
            )}
          />
        </>
      )}
    </Container>
  );
};

export default DetailPage;
