import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const ClientSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={handleSearch}
      >
        Pesquisar
      </Button>
    </InputGroup>
  );
};

export default ClientSearch;
