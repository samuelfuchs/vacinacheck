import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const { logout } = useAuth();
  const handleClose = () => setShowSidebar(false);

  return (
    <>
      <Offcanvas show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Vacina Check</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack className="h-100" direction="vertical" gap={3}>
            <Link to="/home" onClick={handleClose}>
              Início
            </Link>
            <Link to="/client-registration/new" onClick={handleClose}>
              Cadastro de Clientes
            </Link>
            <Link to="/vaccine-registration">Cadastro de Vacinas</Link>
            <Link to="/history-list">Listagem de Histórico de Aplicação</Link>
            <Link to="/client-details">
              Detalhamento do Histórico de Aplicação
            </Link>
            <Button className="mt-auto" onClick={logout}>
              Logout
            </Button>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
