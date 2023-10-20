import React from "react";
import { Button, Card, Stack } from "react-bootstrap";

const ClientList = ({ clients, onClientClick }) => {
  return (
    <div className="client-list">
      {clients.map((client, index) => (
        <Card key={index} role="button">
          <Card.Body onClick={() => onClientClick(client)}>
            <Stack direction="horizontal">
              <div>
                <strong>Nome: </strong>
                {client.name}
                <br />
                <small>
                  <strong>E-mail: </strong>
                  {client.email}
                </small>
                <br />
                <small>
                  <strong>Idade: </strong>
                  {client.age}
                </small>
              </div>
              <div className="p-2 ms-auto">
                <Button>Expandir</Button>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ClientList;
