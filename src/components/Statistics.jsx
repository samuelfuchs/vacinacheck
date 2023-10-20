import React from "react";

const Statistics = ({ totalClients, totalVaccines }) => {
  return (
    <div className="statistics">
      <h2>Estatísticas</h2>
      <p>Total de Clientes: {totalClients}</p>
      <p>Total de Vacinas Cadastradas: {totalVaccines}</p>
    </div>
  );
};

export default Statistics;
