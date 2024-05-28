import { useState } from "react";
import "./Buscador.css";
import { FaSearchLocation } from "react-icons/fa";
import api from "../../services/api";

export const Buscador = () => {
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState({});

  async function searchCep() {
    if (cep == "") {
      alert("Preencha os dados!");
      return;
    }

    try {
      const response = await api.get(`${cep}/json`);
      setDadosCep(response.data);
      setCep("");
    } catch {
      alert("CEP não encontrado!");
    }
  }

  return (
    <div className="container">
      <h1>Buscador CEP</h1>
      <div className="containerInput">
        <input
          id="inputCep"
          type="number"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />
        <button className="buttonSearch" onClick={searchCep}>
          <FaSearchLocation className="icon" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: {dadosCep.cep}</h2>
        <div className="dados">
          <span>
            Rua:{" "}
            {dadosCep.logradouro != "" ? dadosCep.logradouro : "Indefinida"}
          </span>
          <span>
            Complemento:{" "}
            {dadosCep.complemento != "" ? dadosCep.complemento : "Indefinido"}
          </span>
          <span>
            Bairro: {dadosCep.bairro != "" ? dadosCep.bairro : "Indefinido"}
          </span>
          <span>
            {dadosCep.localidade} - {dadosCep.uf}
          </span>
        </div>
      </main>
    </div>
  );
};
