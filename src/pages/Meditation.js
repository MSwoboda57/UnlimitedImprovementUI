import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Meditation(user) {
  const [data, setData] = useState([]);
  const [sessionNotes, setSessionNotes] = useState('');

  const history = useHistory();

  useEffect(() => {
    fetch(`https://localhost:7087/api/Meditation/${user.user.$.a.c}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const submitNewEntry = (event) => {
    if (event.key === 'Enter') {
      const newEntry = {
        FirebaseId: user.user.$.a.c,
        Date: new Date(),
        SessionNotes: sessionNotes,
      };

      fetch('https://localhost:7087/api/Meditation', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      }).then(window.location.reload(false));
    }
  };

  const deleteItem = (id) => {
    fetch(`https://localhost:7087/api/Meditation/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="med-log">
      <h1 className="ideah1">Meditation Log: </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="med-log">
        {data.map((med) => (
          <div key={med.id} className="idea-div">
            <div className="date">{med.date ? med.date.slice(0, -9) : ''}</div>
            <div className="sessionNotes">
              {med.sessionNotes ? med.sessionNotes : ''}
            </div>
            <button
              className="sign-out-div"
              onClick={() => {
                deleteItem(med.id);
                window.location.reload(false);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <input
          id="sessionNotes" //onChange={event => setSessionNotes(event.target.value)}
          onChange={(e) => setSessionNotes(e.target.value)}
          onKeyDown={submitNewEntry}
          placeholder="New Meditation Entry..."
          type="text"
        />
      </div>
    </div>
  );
}
