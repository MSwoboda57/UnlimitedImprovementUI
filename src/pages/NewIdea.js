import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NewIdea(user) {
  const [data, setData] = useState([]);
  const [newIdea, setNewIdea] = useState('');

  const history = useHistory();

  useEffect(() => {
    fetch(`https://localhost:7087/api/NewIdea/${user.user.$.a.c}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const submitNewIdea = (event) => {
    if (event.key === 'Enter') {
      const newEntry = {
        FirebaseId: user.user.$.a.c,
        Date: new Date(),
        NewIdea: newIdea,
      };

      fetch('https://localhost:7087/api/NewIdea', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      }).then(window.location.reload(false));
    }
  };

  const deleteItem = (id) => {
    fetch(`https://localhost:7087/api/NewIdea/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="med-log">
      <h1 className="ideah1">Your Ideas! </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="med-log">
        {data.map((idea) => (
          <div key={idea.id} className="idea-div">
            <div className="date">
              {idea.date ? idea.date.slice(0, -9) : ''}
            </div>
            <div className="newIdeas">{idea.newIdea ? idea.newIdea : ''}</div>
            <button
              className="sign-out-div"
              onClick={() => {
                deleteItem(idea.id);
                window.location.reload(false);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <input
          id="sessionNotes"
          onChange={(e) => setNewIdea(e.target.value)}
          onKeyDown={submitNewIdea}
          placeholder="Your new great idea!"
          type="text"
        />
      </div>
    </div>
  );
}
