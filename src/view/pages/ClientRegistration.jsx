import { useEffect, useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { addClient, getAllClients } from "../../data/clientData";

const ClientRegistration = () => {
  const { clientId } = useParams();
  console.log("clientId", clientId);
  const [name, setName] = useState("");
  const [selectedGender, setSelectedGender] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState();
  const [allergies, setAllergies] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (clientId !== "new") {
      const allClients = getAllClients();
      const existingClient = allClients.find(
        (client) => client.id === clientId
      );
      console.log("existingClient", existingClient, allClients);
      if (existingClient) {
        // Populate the state with existing client data
        setName(existingClient.name);
        setSelectedGender(existingClient.gender);
        setBirthday(existingClient.birthday);
        setCpf(existingClient.cpf);
        setRg(existingClient.rg);
        setMaritalStatus(existingClient.maritalStatus);
        setPhone(existingClient.phone);
        setEmail(existingClient.email);
        setEmergencyContact(existingClient.emergencyContact);
        setAllergies(existingClient.allergies);
        setAddress(existingClient.address);
      }
    }
  }, []);

  const generateClientId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientId = generateClientId();
    console.log("clientId", clientId);
    const newClient = {
      id: clientId,
      name,
      gender: selectedGender,
      birthday,
      cpf,
      rg,
      maritalStatus,
      phone,
      email,
      emergencyContact,
      allergies,
      address,
    };
    console.log("newClient", newClient);
    addClient(newClient);
  };

  return (
    <Container>
      <h2>Cadastro de Cliente</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nome Completo*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Gênero*</Form.Label>
            <Form.Select
              required
              aria-label="Default select example"
              value={selectedGender}
              onChange={(value) => setSelectedGender(value.target.value)}
            >
              <option>Selecione um gênero</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Outros</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridBirthday">
            <Form.Label>Data de Nascimento*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCPF">
            <Form.Label>CPF*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRG">
            <Form.Label>RG*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMartialState">
            <Form.Label>Estado Civil*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Telefone*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmergency">
            <Form.Label>Contato de Emergência*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAllergies">
            <Form.Label>Alergias*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Endereço*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default ClientRegistration;
