import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Nutrition(user) {
  const [meals, setMeals] = useState([]);
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');
  const [radio, setRadio] = useState('');

  const history = useHistory();

  useEffect(() => {
    fetch(`https://localhost:7087/api/Nutrition/${user.user.$.a.c}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  const submitNewEntry = (event) => {
    if (user === user) {
      const newEntry = {
        FirebaseId: user.user.$.a.c,
        Monday: monday,
        Tuesday: tuesday,
        Wednesday: wednesday,
        Thursday: thursday,
        Friday: friday,
        Saturday: saturday,
        Sunday: sunday,
      };

      fetch('https://localhost:7087/api/Nutrition', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      }).then(window.location.reload(false));
    }
  };

  const deleteItem = (id) => {
    fetch(`https://localhost:7087/api/Nutrition/${id}`, {
      method: 'DELETE',
    });
  };

  const updateMeals = (id) => {
    const updatedNutrition = {
      Id: radio,
      FirebaseId: user.user.$.a.c,
      Monday: monday,
      Tuesday: tuesday,
      Wednesday: wednesday,
      Thursday: thursday,
      Friday: friday,
      Saturday: saturday,
      Sunday: sunday,
    };

    fetch(`https://localhost:7087/api/Nutrition/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNutrition),
    }).then(window.location.reload(false));
  };

  return (
    <div className="workouts-week-display">
      <h1>Your Meal Log: </h1>
      {meals.map((meal) => (
        <div key={meal.id} className="day-and-workout">
          <div className="workouts-day-display">
            <div className="title">Monday:</div>
            <div className="dayData">{meal.monday ? meal.monday : ''}</div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Tuesday:</div>
            <div className="dayData">{meal.tuesday ? meal.tuesday : ''}</div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Wednesday:</div>
            <div className="dayData">
              {meal.wednesday ? meal.wednesday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Thursday:</div>
            <div className="dayData">{meal.thursday ? meal.thursday : ''}</div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Friday:</div>
            <div className="dayData">{meal.friday ? meal.friday : ''}</div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Saturday:</div>
            <div className="dayData">{meal.saturday ? meal.saturday : ''}</div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Sunday:</div>
            <div className="dayData">{meal.sunday ? meal.sunday : ''}</div>
          </div>
          <button
            className="sign-out-div"
            onClick={() => {
              deleteItem(meal.id);
              window.location.reload(false);
            }}
          >
            Delete
          </button>
          <input
            type="radio"
            onChange={(e) => {
              setRadio(meal.id);
            }}
          />
        </div>
      ))}
      <textarea
        className="newMeal"
        onChange={(e) => setMonday(e.target.value)}
        placeholder="Monday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setTuesday(e.target.value)}
        placeholder="Tuesday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setWednesday(e.target.value)}
        placeholder="Wednesday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setThursday(e.target.value)}
        placeholder="Thursday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setFriday(e.target.value)}
        placeholder="Friday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setSaturday(e.target.value)}
        placeholder="Saturday.."
        type="text"
      ></textarea>
      <textarea
        className="newMeal"
        onChange={(e) => setSunday(e.target.value)}
        placeholder="Sunday.."
        type="text"
      ></textarea>
      <button style={{ marginTop: '10px' }} onClick={submitNewEntry}>
        Save Meals
      </button>
      <button style={{ marginTop: '10px' }} onClick={() => updateMeals(radio)}>
        Update Meals
      </button>
    </div>
  );
}
