import { Button, Container, Image, Stack } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Toolbar = ({ pageTitle, handleShow }) => {
  const { user } = useAuth();
  return (
    <Stack direction="horizontal" className="container" gap={3}>
      <div className="p-2">
        <Button variant="outline" onClick={handleShow}>
          Abrir Menu
        </Button>
      </div>
      <div className="p-2 text-secondary">{pageTitle}</div>
      <div className="p-2 ms-auto">
        <Stack direction="horizontal" gap={1}>
          <span className="text-secondary">{user.email}</span>
          {user.photo ? (
            <Image src={""} roundedCircle width={32} height={32} />
          ) : (
            <div
              className="bg-primary rounded-circle"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          )}
        </Stack>
      </div>
    </Stack>
  );
};

export default Toolbar;
