import React, { useEffect, useState } from "react";
import "./detail.css";
import { useLocation } from "react-router-dom";

function Detail() {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation().state;

  useEffect(() => {
    getCharacter();
    getPlanet();
  }, [location]);

  const getCharacter = () => {
    location &&
      location.characters.map((value) => {
        fetch(value)
          .then((response) => response.json())
          .then((data) => setCharacters((oldValue) => [...oldValue, data]));
      });
  };

  const getPlanet = () => {
    location &&
      location.planets.map((value) => {
        fetch(value)
          .then((response) => response.json())
          .then((data) => setPlanets((oldValue) => [...oldValue, data]));
      });
  };

  return (
    <>
      <h1>Detail Film</h1>
      <div className="flex">
        <div className="column1 label">Title</div>
        <div className="column2">: {location.title}</div>

        <div className="column1 label">Opening Crawl</div>
        <div className="column2">: {location.opening_crawl}</div>

        <div className="column1 label">Director</div>
        <div className="column2">: {location.director}</div>

        <div className="column1 label">Producer</div>
        <div className="column2">: {location.producer}</div>
      </div>

      {characters && (
        <>
          <div className="label">Character List</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair Color</th>
              </tr>
            </thead>
            <tbody>
              {characters &&
                characters.map((res, index) => {
                  return (
                    <tr key={index}>
                      <td>{res.name}</td>
                      <td>{res.gender}</td>
                      <td>{res.height}</td>
                      <td>{res.mass}</td>
                      <td>{res.hair_color}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}

      {planets && (
        <>
          <div className="label">Planet List</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Terrain</th>
                <th>Diameter</th>
                <th>Gravity</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {planets &&
                planets.map((res, index) => {
                  return (
                    <tr key={index}>
                      <td>{res.name}</td>
                      <td>{res.terrain}</td>
                      <td>{res.diameter}</td>
                      <td>{res.gravity}</td>
                      <td>{res.population}</td>
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

export default Detail;
