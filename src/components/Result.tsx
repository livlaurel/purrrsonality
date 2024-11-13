import React from "react";
import calico from "../images/calico.png";
import ragdoll from "../images/ragdoll.png";
import CatProfileCard from "./bombay/bombayprofile";
import BSHCatProfileCard from "./bsh/bshprofile";

interface ResultProps {
  answers: string[];
}

const Result: React.FC<ResultProps> = ({ answers }) => {
  const getResult = () => {
    const counts: { [key: string]: number } = {};

    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  const result = getResult();

  const images: { [key: string]: string } = {
    calico: calico,
    ragdoll: ragdoll,
  };

  // If the result is "Bombay," display the CatProfileCard component
  if (result === "bombay") {
    return <CatProfileCard />;
  }

  else if (result === "bsh") {
    return <BSHCatProfileCard />;
  }

  // Otherwise, display the corresponding image
  const imageSrc = images[result];

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt={result} style={{ maxWidth: "90%", height: "90%" }} />
      ) : (
        <p>No matching result found.</p>
      )}
    </div>
  );
};

export default Result;
