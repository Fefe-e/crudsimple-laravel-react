import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateDocument = () => {
  const [mister, setMister] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");
  const [operator, setOperator] = useState("");
  const [services, setServices] = useState("");
  const [documentdate, setDocumentdate] = useState("");
  const [departuredate, setDeparturedate] = useState("");
  const [destination, setDestination] = useState("");
  const [cashchecknumber, setCashchecknumber] = useState("");
  const [bank, setBank] = useState("");
  const [total, setTotal] = useState("");
  const [comments, setComments] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_ENDPOINT_API}/document`, {
      mister: mister,
      address: address,
      locality: locality,
      amount: amount,
      concept: concept,
      operator: operator,
      services: services,
      documentdate: documentdate,
      departuredate: departuredate,
      destination: destination,
      cashchecknumber: cashchecknumber,
      bank: bank,
      total: total,
      comments: comments,
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Crear nuevo documento</h2>

      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Señor(es)</label>
          <input
            value={mister}
            onChange={(e) => setMister(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Localidad</label>
          <input
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Suma de pesos</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">En concepto</label>
          <input
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Operador</label>
          <input
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Servicios</label>
          <input
            value={services}
            onChange={(e) => setServices(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            value={documentdate}
            onChange={(e) => setDocumentdate(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de salida</label>
          <input
            value={departuredate}
            onChange={(e) => setDeparturedate(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Destino</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Efectivo / Cheque Nro.</label>
          <input
            value={cashchecknumber}
            onChange={(e) => setCashchecknumber(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Banco</label>
          <input
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total</label>
          <input
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <input
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateDocument;
