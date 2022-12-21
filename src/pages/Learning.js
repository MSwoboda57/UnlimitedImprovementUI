import React, { useEffect, useState } from 'react';

export default function Learning(user) {
  const [learnings, setLearnings] = useState([]);
  const [learningType, setLearningType] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    fetch(`https://localhost:7087/api/Learning/${user.user.$.a.c}`)
      .then((res) => res.json())
      .then((data) => {
        setLearnings(data);
      });
  }, []);

  const submitNewEntry = (event) => {
    if (user === user) {
      const newLearningEntry = {
        FirebaseId: user.user.$.a.c,
        LearningType: learningType,
        Title: title,
        Link: link,
      };

      fetch('https://localhost:7087/api/Learning', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newLearningEntry),
      }).then(window.location.reload(false));
    }
  };

  const deleteItem = (id) => {
    fetch(`https://localhost:7087/api/Learning/${id}`, {
      method: 'DELETE',
    });
  };

  const mediaType = [
    { id: '0', media: 'Choose Type' },
    { id: '1', media: 'Book' },
    { id: '2', media: 'Podcast' },
    { id: '3', media: 'Article' },
    { id: '4', media: 'Misc' },
  ];
  console.log(learnings);
  return (
    <div>
      <h1>Your Learning Resources: </h1>
      <div className="learning-container">
        <div className="typeContainer">
          <div>Books</div>
          {learnings
            .filter((learningType) => learningType.learningType === 'Book')
            .map((filteredNames) => (
              <div key={filteredNames.id} className="learningItems">
                <li>[{filteredNames.title}]</li>
                <li>[{filteredNames.link}]</li>

                <button
                  className="sign-out-div"
                  onClick={() => {
                    deleteItem(filteredNames.id);
                    window.location.reload(false);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="typeContainer">
          <div>Podcasts</div>
          {learnings
            .filter((learningType) => learningType.learningType === 'Podcast')
            .map((filteredNames) => (
              <div key={filteredNames.id} className="learningItems">
                <li>[{filteredNames.title}]</li>
                <li>[{filteredNames.link}]</li>

                <button
                  className="sign-out-div"
                  onClick={() => {
                    deleteItem(filteredNames.id);
                    window.location.reload(false);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="typeContainer">
          <div>Articles</div>
          {learnings
            .filter((learningType) => learningType.learningType === 'Article')
            .map((filteredNames) => (
              <div key={filteredNames.id} className="learningItems">
                <li>[{filteredNames.title}]</li>
                <li>[{filteredNames.link}]</li>

                <button
                  className="sign-out-div"
                  onClick={() => {
                    deleteItem(filteredNames.id);
                    window.location.reload(false);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="typeContainer">
          <div>Misc</div>
          {learnings
            .filter((learningType) => learningType.learningType === 'Misc')
            .map((filteredNames) => (
              <div key={filteredNames.id} className="learningItems">
                <li>[{filteredNames.title}]</li>
                <li>[{filteredNames.link}]</li>

                <button
                  className="sign-out-div"
                  onClick={() => {
                    deleteItem(filteredNames.id);
                    window.location.reload(false);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>

      <select onChange={(e) => setLearningType(e.target.value)}>
        {mediaType.map((item) => (
          <option key={item.id} value={item.media}>
            {item.media}
          </option>
        ))}
      </select>

      <input
        id="newMeal"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title.."
        type="text"
      />
      <input
        id="newMeal"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link.."
        type="text"
      />
      <button style={{ marginTop: '10px' }} onClick={submitNewEntry}>
        Save
      </button>
    </div>
  );
}
