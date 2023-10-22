import { Route, Routes } from "react-router-dom";
import LoginPage from "./view/pages/Login";
import Home from "./view/pages/Home";
import ProtectedRoute from "./view/ProtectedRoute";
import ClientRegistration from "./view/pages/ClientRegistration";
import VaccineRegistration from "./view/pages/VaccineRegistration";
import HistoryList from "./view/pages/HistoryList";
import ClientDetails from "./view/pages/ClientDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute pageTitle="Início">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client-registration/:clientId"
        element={
          <ProtectedRoute pageTitle="Cadastro de Cliente">
            <ClientRegistration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vaccine-registration"
        element={
          <ProtectedRoute pageTitle="Cadastro de Vacinas">
            <VaccineRegistration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history-list"
        element={
          <ProtectedRoute pageTitle="Página de Listagem de Histórico de Aplicação">
            <HistoryList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client-details"
        element={
          <ProtectedRoute pageTitle="Página de Detalhamento do Histórico de Aplicação">
            <ClientDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
