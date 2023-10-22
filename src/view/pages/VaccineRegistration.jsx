import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const VaccineRegistration = () => {
  const [formData, setFormData] = useState({
    vaccineName: "",
    vaccineLab: "",
    applicationDate: "",
    applicationTime: "",
    quantityApplied: "",
    observations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valide e envie os dados do formulário, e.g., para a API de cadastro
  };

  return (
    <Container>
      <h2>Vaccine Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="vaccineName">
              <Form.Label>Name of Vaccine:</Form.Label>
              <Form.Control
                type="text"
                name="vaccineName"
                value={formData.vaccineName}
                onChange={handleChange}
                required
                minLength={5}
                maxLength={50}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="vaccineLab">
              <Form.Label>Vaccine Laboratory:</Form.Label>
              <Form.Control
                type="text"
                name="vaccineLab"
                value={formData.vaccineLab}
                onChange={handleChange}
                required
                minLength={5}
                maxLength={50}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="applicationDate">
              <Form.Label>Application Date:</Form.Label>
              <Form.Control
                type="date"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="applicationTime">
              <Form.Label>Application Time:</Form.Label>
              <Form.Control
                type="time"
                name="applicationTime"
                value={formData.applicationTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="quantityApplied">
          <Form.Label>Quantity Applied (ml):</Form.Label>
          <Form.Control
            type="number"
            name="quantityApplied"
            value={formData.quantityApplied}
            onChange={handleChange}
            required
            step="0.01"
          />
        </Form.Group>

        <Form.Group controlId="observations">
          <Form.Label>Observations:</Form.Label>
          <Form.Control
            as="textarea"
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            minLength={10}
            maxLength={1000}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default VaccineRegistration;
