// pages/ProgressPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ladda from "../assets/amico.png";

const ProgressPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goal, setGoal] = useState(null);
  const [newProgress, setNewProgress] = useState("");

  const fetchGoal = async () => {
    try {
      const response = await fetch(
        `https://goal-back-1.onrender.com/api/goals/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setGoal(data);
        setNewProgress(data.progress);
      } else {
        console.error("Goal not found");
      }
    } catch (error) {
      console.error("Error fetching goal:", error);
    }
  };

  useEffect(() => {
    fetchGoal();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://goal-back-1.onrender.com/api/goals/${id}/progress`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ progress: Number(newProgress) }),
        }
      );
      if (response.ok) {
        navigate("/allgoals");
      } else {
        console.error("Failed to update progress");
      }
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  if (!goal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="newgoal">
      <form className="new-forms" onSubmit={handleSubmit}>
        <h2>Progress</h2>
        <div className="uper-form">
          <div className="goal-t">
            <h4>Goal Title</h4>
            <p>{goal.title}</p>
          </div>
          <div className="goal-d">
            <h4>Goal Description</h4>
            <p>{goal.description}</p>
          </div>
        </div>
        <div className="lower-form">
          <input
            type="number"
            placeholder="Goal Progress"
            value={newProgress}
            onChange={(e) => setNewProgress(e.target.value)}
            required
          />
          <div className="progress">
            <div className="progress-text">
              <p>Progress</p>
              <p>{newProgress}%</p>
            </div>
            <div className="loader-con">
              <div
                className="loader-per"
                style={{ width: `${newProgress}%` }}
              ></div>
            </div>
          </div>
          <button type="submit">Update Progress</button>
        </div>
      </form>
      <span>
        <img src={ladda} alt="" />
      </span>
    </div>
  );
};

export default ProgressPage;
