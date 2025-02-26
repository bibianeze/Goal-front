import React from "react";
import { Link } from "react-router-dom";
import girl from "../assets/bro.png";

const CoverPage = () => {
  return (
    <div className="cover">
      <img src={girl} alt="" />

      <div>
        <h1>
          Improve Productivity By Managing <span>Your Goals</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa sed.
          Turpis ac aliquet lacinia justo turpis amet at arcu. Diam vulputate
          suspendisse aliquam enim sagittis cursiodio ultrices. Condimentum
          lacus nunc rhoncus massa. Tortorstiu ultricies neque aliquam sit non.
          Diam vehicula dignissimepei pellentesque eros vitae. Viverra in vitae
          nunc lorem eget lciou imperdiet tortor. Ac mauris vel non amet eget
          egestas inoriou pellentesque commodo amet. Facilisi sed ut nisi
          pellentesque diam egestas et turpis donor amet.
        </p>

        <Link to="/allgoals">Manage Goals</Link>
      </div>
    </div>
  );
};

export default CoverPage;
