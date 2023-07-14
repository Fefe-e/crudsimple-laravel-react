import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowDocuments = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getAllDocuments();
  }, []);

  const getAllDocuments = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_API}/documents`
    );
    setDocuments(response.data.data);
  };

  const deleteDocument = async (id) => {
    await axios.delete(`${process.env.REACT_APP_ENDPOINT_API}/document/${id}`);
    getAllDocuments();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
          style={{ width: "40%" }}
        >
          + Nuevo documento
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>#Nro. documento</th>
            <th>Señor/es</th>
            <th>Dirección</th>
            <th>Localidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>{document.id}</td>
              <td>{document.mister}</td>
              <td>{document.address}</td>
              <td>{document.locality}</td>

              <td>
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
