import React from "react";
import "./ComparisonTable.css";
import { useParams } from "react-router-dom";

const ComparisonTable = ({ data,onServiceClick }) => {
  const { address } = useParams();

  return (
    <div className="comparison-table">
      <div className="heading-area">
        <p>Compare</p>
        <p>
          Providers in <span>{address}</span>
        </p>
        <p>
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
      </div>
      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Speed</th>
            <th>Price</th>
            <th>Top Feature</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((provider, index) => (
            <tr key={index}>
              <td>{provider.provider}</td>
              <td>{provider.speed}</td>
              <td>{provider.price}</td>
              <td>{provider.features[0]}</td>
              <td>{provider.availability + address}</td>
              <td>
                <span className="view-plan-btn" onClick={onServiceClick}>View Plan</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ComparisonTable;
