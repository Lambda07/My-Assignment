import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ missions, selectedMission, setMissions, setIsEditing }) => {

  const id = selectedMission?.UUID;

  const [name, setName] = useState(selectedMission?.Name || ''); 
  const [serialNumber, setSerialNumber] = useState(selectedMission?.SerialNumber || '');
  const [launchDate, setLaunchDate] = useState(selectedMission?.LaunchDate || '');
  const [launchType, setLaunchType] = useState(selectedMission?.LaunchType || '');
  const [payload, setPayload] = useState(selectedMission?.Payload || '');
  const [link, setLink] = useState(selectedMission?.Link || '');
  const [missionStatus, setMissionstatus] = useState(selectedMission?.MissionStatus || '');

  useEffect(() => {

    setName(selectedMission?.Name || '');
    setSerialNumber(selectedMission?.SerialNumber || '');
    setLaunchDate(selectedMission?.LaunchDate || '');
    setLaunchType(selectedMission?.LaunchType || '');
    setPayload(selectedMission?.Payload || '');
    setLink(selectedMission?.Link || '');
    setMissionstatus(selectedMission?.MissionStatus || '');
  }, [selectedMission]);

  const handleUpdate = (e) => {
    e.preventDefault();
  
    if (!missions || !Array.isArray(missions) || missions.length === 0) {
    
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Employee data is not available.',
        showConfirmButton: true,
      });
    }
  
    if (!id || !name || !serialNumber || !launchDate || !launchType || !payload || !link || !missionStatus) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
  
    const updatedMission = {
      UUID: id,
      Name: name,
      SerialNumber: serialNumber,
      LaunchDate: launchDate,
      LaunchType: launchType,
      Payload: payload,
      Link: link,
      MissionStatus: missionStatus,
    };
  
    const updatedmissions = missions.map((fun) => {
      return fun.UUID === id ? updatedMission : fun;
    });
  
    localStorage.setItem('missions_data', JSON.stringify(updatedmissions)); 
    setMissions(updatedmissions);
    setIsEditing(false);
  
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${updatedMission.Name} mission's data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Mission</h1>
        <label htmlFor="name">Mission Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="serialNumber">Serial Number</label>
        <input
          id="serialNumber"
          type="text"
          name="serialNumber"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <label htmlFor="launchDate">Launch Date</label>
        <input
          id="launchDate"
          type="date"
          name="launchDate"
          value={launchDate}
          onChange={(e) => setLaunchDate(e.target.value)}
        />
        <label htmlFor="launchType">Launch Type</label>
        <input
          id="launchType"
          type="text"
          name="launchType"
          value={launchType}
          onChange={(e) => setLaunchType(e.target.value)}
        />
        <label htmlFor="payload">Payload</label>
        <input
          id="payload"
          type="text"
          name="payload"
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
        />
        <label htmlFor="link">Link</label>
        <input
          id="link"
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="missionStatus">Mission Status</label>
        <input
          id="missionStatus"
          type="text"
          name="missionStatus"
          value={missionStatus}
          onChange={(e) => setMissionstatus(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
