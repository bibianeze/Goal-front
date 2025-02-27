// pages/NewGoal.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ladda from "../assets/amico.png";

const NewGoal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGoal = { title, description, progress: Number(progress) };

    try {
      const response = await fetch(
        "https://goal-back-1.onrender.com/api/goals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGoal),
        }
      );
      if (response.ok) {
        navigate("/allgoals");
      } else {
        console.error("Failed to create goal");
      }
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  return (
    <div className="newgoal">
      <form className="new-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows="15"
          placeholder="Goal Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Goal Progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          required
        />
        <button type="submit">Create Goal</button>
      </form>
      <span>
        <img src={ladda} alt="" />
      </span>
    </div>
  );
};

export default NewGoal;
