// pages/CompletedPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pen from "../assets/pen.png";
import can from "../assets/can.png";

const CompletedPage = () => {
  const [goals, setGoals] = useState([]);

  const fetchCompletedGoals = async () => {
    try {
      const response = await fetch(
        "https://goal-back-1.onrender.com/api/goals/completed"
      );
      const data = await response.json();
      setGoals(data);
    } catch (error) {
      console.error("Error fetching completed goals:", error);
    }
  };

  useEffect(() => {
    fetchCompletedGoals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://goal-back-1.onrender.com/api/goals/${id}`, {
        method: "DELETE",
      });
      fetchCompletedGoals();
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return (
    <div className="ongoing">
      <div className="ongoing-one">
        <h2>Completed</h2>
        <Link to="/newgoal">+ Create New Goals</Link>
      </div>
      <div className="ongoing-con">
        {goals.map((goal) => (
          <div className="each-ongoing" key={goal._id}>
            <div className="top-ongoing">
              <h4>Congratulations 🎉</h4>
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
                    className="loader-bar"
                    style={{
                      width: `${goal.progress}%`,
                      backgroundColor:
                        goal.progress < 50 ? "#ff0000cc" : "#339933",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ongoing-buttonss">
                <Link to={`/progress/${goal._id}`} className="update">
                  <img src={pen} alt="" />
                  <p>Edit</p>
                </Link>
                <button
                  onClick={() => handleDelete(goal._id)}
                  className="deletez"
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

export default CompletedPage;
