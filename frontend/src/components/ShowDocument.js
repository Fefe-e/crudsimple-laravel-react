import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo from "../LogoLaNuevaRuta.png";

const endpoint = "http://127.0.0.1:8000/api/v1";
const ShowDocument = () => {
  const [document, setDocument] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDocument(id);
  }, [id]);

  const getDocument = async (id) => {
    const response = await axios.get(`${endpoint}/document/${id}`);
    console.log(response.data.data);
    setDocument(response.data.data);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div class="receipt-main">
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div
          style={{
            height: "150px",
            border: "1px solid #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="imagen" height={100} width={300} />
        </div>
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            border: "1px solid #000000",
            justifySelf: "center",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          x
        </div>
        <div
          style={{
            height: "150px",
            border: "1px solid #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <div>
            <div class="receipt-title">
              <div>Recibo provisorio </div>
              <div style={{ fontSize: "7px", alignSelf: "center" }}>
                DOCUMENTO NO VÁLIDO CÓMO FACTURA
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div>Fecha</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                columnGap: "1px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  textAlign: "start",
                }}
              ></div>
              <div
                style={{
                  width: "50px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  textAlign: "start",
                }}
              ></div>
              <div
                style={{
                  width: "50px",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  textAlign: "start",
                }}
              ></div>
            </div>
            <div>Número: 000{document.id}</div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div class="receipt-section">
          <div class="receipt-label">Señor(es): {document.mister}</div>
        </div>

        <div class="receipt-section">
          <div class="receipt-label">Domicilio: {document.address}</div>
          <div class="receipt-label">Localidad: {document.locality}</div>
        </div>

        <div class="receipt-section">
          <div>Recibí(mos) la suma de pesos: {document.amount}</div>
        </div>

        <div class="receipt-section">
          <div>En concepto de: {document.concept}</div>
        </div>
      </div>
      <div class="receipt-line"></div>

      <div class="receipt-signature">
        <div>Operador: {document.operator}</div>
        <div>Servicio: {document.services}</div>
        <div>Fecha de salida: {document.departure_date}</div>
        <div>Destino: {document.destination}</div>
      </div>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div
          style={{
            height: "150px",
            border: "1px solid #000000",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div class="paddingTop">
                Efectivo / Cheque N°: {document.destination}
              </div>
              <div class="paddingTop">Banco: {document.bank}</div>
              <div class="paddingTop">Observaciones: {document.comments}</div>
            </div>
            <div class="invoice-total">
              <strong>Total:</strong> {document.total}
            </div>
          </div>
        </div>
        <div
          style={{
            height: "150px",
            border: "1px solid #000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            padding: 10,
          }}
        >
          Recibí conforme
        </div>
      </div>
      <div
        style={{
          padding: 25,
        }}
      >
        <button class="btn btn-back" onClick={() => handleGoBack()}>
          Atrás
        </button>
        <button class="btn btn-success" onClick={window.print}>
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default ShowDocument;
