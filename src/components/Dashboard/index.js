import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { missionsData } from '../../data'; 

const Dashboard = ({ setIsAuthenticated }) => {
  const [missions, setMissions] = useState(missionsData);
  const [selectedMission, setSelectedMission] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('missions_data')); 
    if (data !== null && Object.keys(data).length !== 0) setMissions(data);
  }, []);

  const handleEdit = (id) => {
    const [mission] = missions.filter((mission) => mission.UUID === id);

    setSelectedMission(mission);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.value) {
        const [mission] = missions.filter((mission) => mission.UUID === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${mission.Name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const missionsCopy = missions.filter((mission) => mission.UUID !== id); 
        localStorage.setItem('missions_data', JSON.stringify(missionsCopy)); 
        setMissions(missionsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            missions={missions} 
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          missions={missions} 
          setMissions={setMissions}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          missions={missions} 
          selectedMission={selectedMission}
          setMissions={setMissions}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
