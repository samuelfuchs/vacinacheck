import { useState } from "react";
import {
  Form,
  Button,
  Container,
  ListGroup,
  Card,
  Row,
  Col,
} from "react-bootstrap";

// Mock de dados do histórico de aplicação
const applicationHistoryMock = [
  {
    clientId: 1,
    clientName: "João Silva",
    date: "2023-10-15",
    vaccineName: "Vacina A",
  },
  {
    clientId: 2,
    clientName: "Maria Silva",
    date: "2023-10-14",
    vaccineName: "Vacina B",
  },
  // Adicione mais dados do histórico de aplicação conforme necessário
];

const HistoryList = ({ historyData, onViewDetails }) => {
  return (
    <ListGroup>
      {historyData.map((item) => (
        <ListGroup.Item key={item.clientId}>
          <Row>
            <Col>{item.clientName}</Col>
            <Col>{item.date}</Col>
            <Col>{item.vaccineName}</Col>
            <Col>
              <Button
                variant="primary"
                onClick={() => onViewDetails(item.clientId)}
              >
                View Details
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  // Função para filtrar o histórico com base na pesquisa
  const filterHistory = () => {
    const filtered = applicationHistoryMock.filter(
      (item) =>
        item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.clientId.toString().includes(searchTerm)
    );
    setFilteredHistory(filtered);
  };

  // Função para visualizar os detalhes de um cliente e seu histórico
  const viewClientDetails = (clientId) => {
    const clientDetails = applicationHistoryMock.find(
      (item) => item.clientId === clientId
    );
    setSelectedClient(clientDetails);
  };

  return (
    <Container>
      <h2>Application History</h2>
      <Form>
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="text"
            placeholder="Search by Name or CPF"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={filterHistory}>
          Search
        </Button>
      </Form>

      <HistoryList
        historyData={filteredHistory}
        onViewDetails={viewClientDetails}
      />

      {selectedClient && (
        <Card>
          <Card.Header>Client Details</Card.Header>
          <Card.Body>
            <Card.Title>{selectedClient.clientName}</Card.Title>
            <Card.Text>
              Date: {selectedClient.date}
              <br />
              Vaccine Name: {selectedClient.vaccineName}
              <br />
              {/* Adicione mais informações do cliente aqui */}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default HistoryPage;
