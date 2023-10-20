const saveClientDataToLocalStorage = (clients) => {
  localStorage.setItem("clientData", JSON.stringify(clients));
};

const getClientDataFromLocalStorage = () => {
  const data = localStorage.getItem("clientData");
  return data ? JSON.parse(data) : [];
};

const addClient = (client) => {
  const clients = getClientDataFromLocalStorage();
  clients.push(client);
  saveClientDataToLocalStorage(clients);
};

const updateClient = (clientId, updatedClient) => {
  let clients = getClientDataFromLocalStorage();
  const index = clients.findIndex((client) => client.id === clientId);
  if (index !== -1) {
    clients[index] = { ...clients[index], ...updatedClient };
    saveClientDataToLocalStorage(clients);
  }
};

const deleteClient = (clientId) => {
  let clients = getClientDataFromLocalStorage();
  clients = clients.filter((client) => client.id !== clientId);
  saveClientDataToLocalStorage(clients);
};

const getAllClients = () => {
  return getClientDataFromLocalStorage();
};

export { addClient, updateClient, deleteClient, getAllClients };
