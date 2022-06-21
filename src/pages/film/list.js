import React from "react";
import { useNavigate } from "react-router-dom";
import "./list.css";

import useFetch from "../../services/useFetch";

import Spinner from "../../components/loading-spinner/loading-spinner.component";

function List() {
  const { data, isLoading, error } = useFetch("https://swapi.dev/api/films/");

  const navigate = new useNavigate();

  function onClickRow(row) {
    navigate("/film/detail", {
      state: row,
    });
  }

  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && data && (
        <>
          <h1 className="title">Marvel Film List</h1>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Producer</th>
                <th>Director</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((res, index) => {
                  return (
                    <tr onClick={() => onClickRow(res)} key={index}>
                      <td>{index + 1}</td>
                      <td>{res.title}</td>
                      <td>{res.producer}</td>
                      <td>{res.director}</td>
                      <td>{res.release_date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default List;
