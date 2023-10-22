/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { addUser, authenticateUser } from "../../data/userData";

const LoginPage = () => {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  const handleLogin = () => {
    const user = authenticateUser(email, password);

    if (user) {
      auth.login(user);
    } else {
      console.log("Authentication failed");
    }
  };

  const handleCreateAccount = () => {
    setShowCreateAccountModal(true);
  };

  const handleCloseCreateAccountModal = () => {
    setShowCreateAccountModal(false);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h1>Vacina Check</h1>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Entrar
            </Button>

            <Button variant="secondary" onClick={handleCreateAccount}>
              Criar Conta
            </Button>
          </Form>
        </Col>
      </Row>

      <CreateAccountModal
        show={showCreateAccountModal}
        onHide={handleCloseCreateAccountModal}
      />
    </Container>
  );
};

const CreateAccountModal = ({ show, onHide }) => {
  const auth = useAuth();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    if (newPassword !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("handleCreateAccount ");
      const userCreated = addUser(newEmail, newPassword);
      console.log("userCreated", userCreated);

      if (userCreated) {
        onHide();
        auth.login({ email: newEmail, password: newPassword });
      } else {
        console.log("User creation failed. User already exists.");
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Criar Conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNewEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNewPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirme a Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleCreateAccount}>
            Criar Conta
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginPage;
