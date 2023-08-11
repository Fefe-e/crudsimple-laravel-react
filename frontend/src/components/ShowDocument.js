import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo from "../LogoLaNuevaRuta.png";
import "../App.css";

const ShowDocument = () => {
  const [document, setDocument] = useState({});
  const printableRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    getDocument(id);
  }, [id]);

  const handlePrint = () => {
    const content = printableRef.current.innerHTML;
    const printWindow = window.open("", "_blank");

    const printDocument = printWindow.document;
    printDocument.open();
    printDocument.write("<html><head><title>Print</title></head><body>");
    printDocument.write(content);
    printDocument.write("</body></html>");
    printDocument.close();

    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  const getDocument = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_API}/document/${id}`
    );
    console.log("documento", response.data.data);
    setDocument(response.data.data);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="receipt-main" ref={printableRef}>
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
              border: "1.5px solid #000000",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="imagen" height={75} width={190} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              backgroundColor: "white",
              border: "1.5px solid #000000",
              justifySelf: "center",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            X
          </div>
          <div
            style={{
              height: "150px",
              border: "1.5px solid #000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            <div>
              <div className="receipt-title">
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
                justifyContent: "space-evenly",
              }}
            >
              <div>
                Fecha:{" "}
                {document.document_date_formatted
                  ? document.document_date_formatted
                  : "........................."}
              </div>
              <div>
                Número: 000
                {document.id ? document.id : "........................."}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1.2px solid #000000",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="receipt-section"
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <div
              style={{
                marginLeft: "15px",
              }}
            >
              <span className="receipt-label">Señor(es):</span>{" "}
              {document.mister}
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginTop: "30px",
                justifyContent: "flex-end",
              }}
            >
              <span className="receipt-label">Domicilio:</span>{" "}
              {document.address}
            </div>
          </div>

          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              marginLeft: "15px",
              marginTop: "30px",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                marginLeft: "15px",
              }}
            >
              <span className="receipt-label">Localidad:</span>{" "}
              {document.locality}
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1.2px solid #000000",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="receipt-section"
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <div
              style={{
                marginLeft: "15px",
              }}
            >
              <span className="receipt-label">
                Recibí(mos) la suma de pesos:
              </span>{" "}
              {document.amount ? document.amount : "........................."}
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                justifyContent: "flex-end",
              }}
            >
              <span className="receipt-label">En concepto de:</span>{" "}
              {document.concept
                ? document.concept
                : "........................."}
            </div>

            <div
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                justifyContent: "flex-end",
              }}
            >
              <span className="receipt-label">Operador:</span>{" "}
              {document.operator
                ? document.operator
                : "........................."}
            </div>

            <div
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                justifyContent: "flex-end",
              }}
            >
              <span className="receipt-label">Servicio:</span>{" "}
              {document.services
                ? document.services
                : "........................."}
            </div>

            <div
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                justifyContent: "flex-end",
              }}
            >
              <span className="receipt-label">Fecha de salida:</span>{" "}
              {document.departure_date
                ? document.departure_date
                : "........................."}
            </div>
          </div>

          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              marginLeft: "15px",
              marginTop: "30px",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                marginLeft: "15px",
              }}
            >
              <span className="receipt-label">Destino:</span>{" "}
              {document.destination
                ? document.destination
                : "........................."}
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
          <div
            style={{
              border: "1.5px solid #000000",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              className="receipt-section"
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  marginLeft: "15px",
                }}
              >
                <span className="receipt-label">Efectivo / Cheque N°:</span>{" "}
                {document.cash_checknumber
                  ? document.cash_checknumber
                  : "........................."}
              </div>
              <div
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  justifyContent: "flex-end",
                }}
              >
                <span className="receipt-label">Banco:</span>{" "}
                {document.bank ? document.bank : "........................."}
              </div>

              <div
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  justifyContent: "flex-end",
                }}
              >
                <span className="receipt-label">Observaciones:</span>{" "}
                {document.comments
                  ? document.comments
                  : "........................."}
              </div>

              <div
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  marginRight: "15px",
                  justifyContent: "flex-end",
                  width: "50%",
                  border: "1.5px solid #000000",
                  borderRadius: "100px",
                  padding: "8px",
                }}
              >
                <span className="receipt-label">Total:</span>{" "}
                {document.total ? document.total : "........................."}
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1.5px solid #000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              padding: 10,
            }}
          >
            <span className="receipt-label" style={{ marginLeft: "15px" }}>
              Recibí conforme
            </span>

            <span
              className="receipt-label"
              style={{ marginLeft: "15px", marginTop: "45px" }}
            >
              ..................................................
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 25,
        }}
      >
        <button
          className="btn btn-danger"
          style={{
            marginRight: "2px",
          }}
          onClick={() => handleGoBack()}
        >
          Atrás
        </button>
        <button className="btn btn-success" onClick={handlePrint}>
          Imprimir
        </button>
      </div>
    </>
  );
};

export default ShowDocument;
