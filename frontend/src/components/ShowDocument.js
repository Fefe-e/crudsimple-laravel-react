import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Invoice.css";

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
      <div className="invoice">
        <h1>
          Recibo provisorio{" "}
          <smal style={{ fontSize: "10px" }}>
            DOCUMENTO NO VÁLIDO CÓMO FACTURA
          </smal>
        </h1>
        <div className="invoice-details">
          <div>
            <strong>N°</strong> 000{document.id}
          </div>
          <div>
            <strong>Fecha:</strong>
          </div>
        </div>

        <table className="invoice-items">
          <tbody>
            <tr>
              <td>Señor(es)</td>
              <td>{document.mister}</td>
            </tr>
            <tr>
              <td>Domicilio</td>
              <td>{document.address}</td>
              <td>Localidad</td>
              <td>{document.locality}</td>
            </tr>
            <tr>
              <td>Recibí(mos) la suma de pesos:</td>
              <td>{document.amount}</td>
            </tr>
            <tr>
              <td>En concepto de:</td>
              <td>{document.concept}</td>
            </tr>
            <tr>
              <td>Operador:</td>
              <td>{document.operator}</td>
            </tr>
            <tr>
              <td>Servicio:</td>
              <td>{document.services}</td>
            </tr>
            <tr>
              <td>Fecha de salida:</td>
              <td>{document.departure_date}</td>
              <td>Destino</td>
              <td>{document.destination}</td>
            </tr>
            <tr>
              <td>Efectivo / Cheque N°:</td>
              <td>{document.cash_checknumber}</td>
            </tr>
            <tr>
              <td>Banco:</td>
              <td>{document.bank}</td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-total">
          <strong>Observaciones:</strong> {document.comments}
        </div>

        <div className="invoice-total">
          <strong>Total:</strong> {document.total}
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
