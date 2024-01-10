import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ missions, setMissions, setIsAdding }) => {
  const [uuid, setUUID] = useState(''); 
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [launchType, setLaunchType] = useState('');
  const [payload, setPayload] = useState('');
  const [link, setLink] = useState('');
  const [missionStatus, setMissionStatus] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    if (!uuid || !name || !serialNumber || !launchDate || !launchType || !payload || !link || !missionStatus) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newMission = {
      UUID: uuid,
      Name: name,
      SerialNumber: serialNumber,
      LaunchDate: launchDate,
      LaunchType: launchType,
      Payload: payload,
      Link: link,
      MissionStatus: missionStatus,
    };

    missions.push(newMission);
    localStorage.setItem('missions_data', JSON.stringify(missions));
    setMissions(missions);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Mission</h1>
        <label htmlFor="uuid">UUID</label>
        <input
          id="uuid"
          type="text"
          name="uuid"
          value={uuid}
          onChange={(e) => setUUID(e.target.value)}
        />
        <label htmlFor="name">Name</label>
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
          onChange={(e) => setMissionStatus(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
