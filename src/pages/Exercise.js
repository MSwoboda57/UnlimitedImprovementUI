import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './pages.css';
import { Modal } from 'bootstrap';

export default function Exercise(user) {
  const [workouts, setWorkouts] = useState([]);
  const [mondayWo, setMondayWo] = useState('');
  const [tuesdayWo, setTuesdayWo] = useState('');
  const [wednesdayWo, setWednesdayWo] = useState('');
  const [thursdayWo, setThursdayWo] = useState('');
  const [fridayWo, setFridayWo] = useState('');
  const [saturdayWo, setSaturdayWo] = useState('');
  const [sundayWo, setSundayWo] = useState('');
  const [radio, setRadio] = useState('');

  const history = useHistory();

  useEffect(() => {
    fetch(`https://localhost:7087/api/Exercise/${user.user.$.a.c}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      });
  }, []);

  const submitNewEntry = (event) => {
    if (user === user) {
      const newWoEntry = {
        FirebaseId: user.user.$.a.c,
        Monday: mondayWo,
        Tuesday: tuesdayWo,
        Wednesday: wednesdayWo,
        Thursday: thursdayWo,
        Friday: fridayWo,
        Saturday: saturdayWo,
        Sunday: sundayWo,
      };

      fetch('https://localhost:7087/api/Exercise', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newWoEntry),
      }).then(window.location.reload(false));
    }
  };

  const deleteItem = (id) => {
    fetch(`https://localhost:7087/api/Exercise/${id}`, {
      method: 'DELETE',
    });
  };

  const updateExercise = (id) => {
    const updatedExercise = {
      Id: radio,
      FirebaseId: user.user.$.a.c,
      Monday: mondayWo,
      Tuesday: tuesdayWo,
      Wednesday: wednesdayWo,
      Thursday: thursdayWo,
      Friday: fridayWo,
      Saturday: saturdayWo,
      Sunday: sundayWo,
    };

    fetch(`https://localhost:7087/api/Exercise/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedExercise),
    }).then(window.location.reload(false));
  };
  console.log(workouts);
  return (
    <div className="workouts-week-display">
      <h1>Your Exercise Log: </h1>
      {workouts.map((workout) => (
        <div key={workout.id} className="day-and-workout">
          <div className="workouts-day-display">
            <div className="title">Monday:</div>
            <div className="dayData">
              {workout.monday ? workout.monday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Tuesday:</div>
            <div className="dayData">
              {workout.tuesday ? workout.tuesday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Wednesday:</div>
            <div className="dayData">
              {workout.wednesday ? workout.wednesday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Thursday:</div>
            <div className="dayData">
              {workout.thursday ? workout.thursday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Friday:</div>
            <div className="dayData">
              {workout.friday ? workout.friday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Saturday:</div>
            <div className="dayData">
              {workout.saturday ? workout.saturday : ''}
            </div>
          </div>

          <div className="workouts-day-display">
            <div className="title">Sunday:</div>
            <div className="dayData">
              {workout.sunday ? workout.sunday : ''}
            </div>
          </div>
          <button
            className="sign-out-div"
            onClick={() => {
              deleteItem(workout.id);
              window.location.reload(false);
            }}
          >
            Delete
          </button>

          <input
            type="radio"
            onChange={(e) => {
              setRadio(workout.id);
            }}
          />
        </div>
      ))}
      <textarea
        className="newMeal"
        onChange={(e) => setMondayWo(e.target.value)}
        placeholder="Monday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setTuesdayWo(e.target.value)}
        placeholder="Tuesday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setWednesdayWo(e.target.value)}
        placeholder="Wednesday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setThursdayWo(e.target.value)}
        placeholder="Thursday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setFridayWo(e.target.value)}
        placeholder="Friday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setSaturdayWo(e.target.value)}
        placeholder="Saturday.."
        type="text"
      ></textarea>

      <textarea
        className="newMeal"
        onChange={(e) => setSundayWo(e.target.value)}
        placeholder="Sunday.."
        type="text"
      ></textarea>

      <button style={{ marginTop: '10px' }} onClick={submitNewEntry}>
        Save Workout
      </button>
      <button
        style={{ marginTop: '10px' }}
        onClick={() => updateExercise(radio)}
      >
        Update Workout
      </button>
    </div>
  );
}
