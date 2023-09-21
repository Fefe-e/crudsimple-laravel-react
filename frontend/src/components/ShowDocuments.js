import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowDocuments = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getAllDocuments();
  }, []);

  const getAllDocuments = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_API}/documents`
    );
    setDocuments(response.data.data);
  },[]);

  const deleteDocument = async (id) => {
    await axios.delete(`${process.env.REACT_APP_ENDPOINT_API}/document/${id}`);
    getAllDocuments();
  };

  return (
    <div className="container">
      <div className="header-flex">
        <h1>Resumen</h1>
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          + Nuevo documento
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>#</th>
            <th>Señor/es</th>
            <th>Dirección</th>
            <th>Localidad</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td className="align-middle">{document.id}</td>
              <td className="align-middle">{document.mister}</td>
              <td className="align-middle">{document.address}</td>
              <td className="align-middle">{document.locality}</td>
              <td className="align-middle">{document.document_date_formatted}</td>
              <td className="actionButtons">
                <Link to={`/view/${document.id}`} className="btn btn-success">
                  Ver
                </Link>{" "}
                <Link to={`/edit/${document.id}`} className="btn btn-primary">
                  Editar
                </Link>{" "}
                <button
                  onClick={() => deleteDocument(document.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDocuments;
