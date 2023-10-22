import { useEffect, useState } from "react";
import Statistics from "../../components/Statistics";
import ClientSearch from "../../components/ClientSearch";
import ClientList from "../../components/ClientList";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../data/clientData";

const Home = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    const clientData = getAllClients();
    setClients(clientData);
    setFilteredClients(clientData);
  }, []);

  const searchClients = (query) => {
    if (!query) {
      setFilteredClients(clients);
    } else {
      const filtered = clients.filter(
        (client) =>
          client.name.toLowerCase().includes(query.toLowerCase()) ||
          client.cpf.includes(query)
      );
      setFilteredClients(filtered);
    }
  };

  const viewClientDetails = (client) => {
    navigate(`/client-registration/${client.id}`);
  };

  return (
    <Container>
      <Statistics totalClients={clients.length} totalVaccines="0" />
      <ClientSearch onSearch={searchClients} />
      <ClientList clients={filteredClients} onClientClick={viewClientDetails} />
    </Container>
  );
};

export default Home;
