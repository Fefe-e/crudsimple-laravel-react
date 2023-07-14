import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/v1";
const ShowDocuments = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getAllDocuments();
  }, []);

  const getAllDocuments = async () => {
    const response = await axios.get(`${endpoint}/documents`);
    setDocuments(response.data.data);
  };

  const deleteDocument = async (id) => {
    await axios.delete(`${endpoint}/document/${id}`);
    getAllDocuments();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>#Nro.</th>
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
                  ver
                </Link>{" "}
                <Link to={`/edit/${document.id}`} className="btn btn-info">
                  Edit
                </Link>{" "}
                <button
                  onClick={() => deleteDocument(document.id)}
                  className="btn btn-danger"
                >
                  Delete
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
