import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/v1/document";

const EditDocument = () => {
  const [mister, setMister] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");
  const [operator, setOperator] = useState("");
  const [services, setServices] = useState("");
  const [departuredate, setDeparturedate] = useState("");
  const [destination, setDestination] = useState("");
  const [cashchecknumber, setCashchecknumber] = useState("");
  const [bank, setBank] = useState("");
  const [total, setTotal] = useState("");
  const [comments, setComments] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/${id}`, {
      mister: mister,
      address: address,
      locality: locality,
      amount: amount,
      concept: concept,
      operator: operator,
      services: services,
      departuredate: departuredate,
      destination: destination,
      cashchecknumber: cashchecknumber,
      bank: bank,
      total: total,
      comments: comments,
    });
    navigate("/");
  };

  useEffect(() => {
    const getDocumentById = async () => {
      const { data } = await axios.get(`${endpoint}/${id}`);

      setMister(data.data.mister);
      setAddress(data.data.address);
      setLocality(data.data.locality);
      setAmount(data.data.amount);
      setConcept(data.data.concept);
      setOperator(data.data.operator);
      setServices(data.data.services);
      setDeparturedate(data.data.departure_date);
      setDestination(data.data.destination);
      setCashchecknumber(data.data.cash_checknumber);
      setBank(data.data.bank);
      setTotal(data.data.total);
      setComments(data.data.comments);
    };
    getDocumentById();
  }, [id]);

  return (
    <div>
      <h2>Editar documento</h2>

      <form onSubmit={update}>
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
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditDocument;
