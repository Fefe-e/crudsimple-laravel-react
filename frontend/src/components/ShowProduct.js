import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Invoice.css";

const endpoint = "http://127.0.0.1:8000/api/v1";
const ShowProducts = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);

  const getProduct = async (product_id) => {
    const response = await axios.get(`${endpoint}/product/${product_id}`);
    console.log("Product");
    console.log(response);
    setProduct(response.data.data);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const invoiceData = {
    invoiceNumber: "F2023001",
    date: "13 de Julio de 2023",
    items: [
      { description: "Producto 1", quantity: 2, unitPrice: 10 },
      { description: "Producto 2", quantity: 1, unitPrice: 20 },
      { description: "Producto 3", quantity: 3, unitPrice: 15 },
    ],
    total: 95,
  };

  return (
    <>
      <div className="invoice">
        <h1>Factura</h1>
        <div className="invoice-details">
          <div>
            <strong>Número de factura:</strong> # {invoiceData.invoiceNumber}
          </div>
          <div>
            <strong>Fecha:</strong> {invoiceData.date}
          </div>
        </div>
        <table className="invoice-items">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>${item.unitPrice}</td>
                <td>${item.quantity * item.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-total">
          <strong>Total:</strong> ${invoiceData.total}
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

export default ShowProducts;
