import React from 'react';

const Table = ({ missions, handleEdit, handleDelete }) => {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Serial Number</th>
            <th>Launch Date</th>
            <th>Launch Type</th>
            <th>Payload</th>
            <th>Link</th>
            <th>Mission Status</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.length > 0 ? (
            missions.map((mission, i) => (
              <tr key={mission.UUID}>
                <td>{mission.UUID}</td>
                <td>{mission.Name}</td>
                <td>{mission.SerialNumber}</td>
                <td>{mission.LaunchDate}</td>
                <td>{mission.LaunchType}</td>
                <td>{mission.Payload}</td>
                <td>
                  <a href={mission.Link} target="_blank" rel="noopener noreferrer">
                    {mission.Link}
                  </a>
                </td>
                <td>{mission.MissionStatus}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(mission.UUID)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(mission.UUID)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>No Missions</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
