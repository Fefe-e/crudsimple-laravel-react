import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Invoice.css";
import logo from "../x.png";

const endpoint = "http://127.0.0.1:8000/api/v1";
const ShowDocument = () => {
  const [document, setDocument] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDocument(id);
  }, []);

  const getDocument = async (id) => {
    const response = await axios.get(`${endpoint}/document/${id}`);
    console.log(response.data.data);
    setDocument(response.data.data);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div class="receipt-main">
        <div className="invoice-logo">
          <div className="square">
            <img width="110px" src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <p class="receipt-title">
          Recibo provisorio{" "}
          <smal style={{ fontSize: "10px" }}>
            DOCUMENTO NO VÁLIDO CÓMO FACTURA
          </smal>
        </p>

        <div class="receipt-section pull-left">
          <span class="receipt-label text-large">Número:</span>
          <span class="text-large">000{document.id}</span>
        </div>

        <div class="receipt-section">
          <span class="receipt-label">Señor(es):</span>
          <span>{document.mister}</span>
        </div>

        <div class="receipt-section">
          <span class="receipt-label">Domicilio:</span>
          <span>{document.address}</span>
          <span class="receipt-label">Localidad:</span>
          <span>{document.locality}</span>
        </div>

        <div class="receipt-section">
          <p>Recibí(mos) la suma de pesos:</p>
          <p>{document.amount}</p>
        </div>

        <div class="receipt-section">
          <p>En concepto de:</p>
          <p>{document.concept}</p>
        </div>

        <div class="receipt-signature col-xs-6">
          <p class="receipt-line"></p>
          <span>Operador: {document.operator}</span>
          <span>Servicio: {document.services}</span>
          <span>Fecha de salida: {document.departure_date}</span>
          <span>Destino: {document.destination}</span>
          <span>Efectivo / Cheque N°: {document.destination}</span>
          <span>Banco: {document.bank}</span>
        </div>

        <div class="receipt-signature col-xs-6">
          <p class="receipt-line"></p>
          <div className="invoice-total">
            <strong>Observaciones:</strong> {document.comments}
          </div>

          <div className="invoice-total">
            <strong>Total:</strong> {document.total}
          </div>
        </div>

        <button className="btn-back" onClick={() => handleGoBack()}>
          Atrás
        </button>
        <button className="btn-print" onClick={window.print}>
          Imprimir
        </button>
      </div>
    </>
  );
};

export default ShowDocument;
