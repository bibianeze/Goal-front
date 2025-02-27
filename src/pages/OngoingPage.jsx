// pages/OngoingPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pen from "../assets/pen.png";
import can from "../assets/can.png";

const OngoingPage = () => {
  const [goals, setGoals] = useState([]);

  const fetchOngoingGoals = async () => {
    try {
      const response = await fetch(
        "https://goal-back.onrender.com/api/goals/ongoing"
      );
      const data = await response.json();
      setGoals(data);
    } catch (error) {
      console.error("Error fetching ongoing goals:", error);
    }
  };

  useEffect(() => {
    fetchOngoingGoals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://goal-back.onrender.com/api/goals/${id}`, {
        method: "DELETE",
      });
      fetchOngoingGoals();
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return (
    <div className="ongoing">
      <div className="ongoing-one">
        <h2>Ongoing</h2>
        <Link to="/newgoal">+ Create New Goals</Link>
      </div>
      <div className="ongoing-con">
        {goals.map((goal) => (
          <div className="each-ongoing" key={goal._id}>
            <div className="top-ongoing">
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
            <div className="bottom-ongoing">
              <div className="progress">
                <div className="progress-text">
                  <p>Progress</p>
                  <p>{goal.progress}%</p>
                </div>
                <div className="loader-con">
                  <div
                    className="loader-per"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="ongoing-buttons">
                <Link to={`/progress/${goal._id}`} className="update">
                  <img src={pen} alt="" />
                  <p>Update Progress</p>
                </Link>
                <button
                  onClick={() => handleDelete(goal._id)}
                  className="deletez"
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <img src={can} alt="" />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingPage;
