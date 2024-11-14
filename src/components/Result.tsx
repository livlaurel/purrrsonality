import React from "react";
import CatProfileCard from "./bombay/bombayprofile";
import BSHCatProfileCard from "./bsh/bshprofile";
import CaliCatProfileCard from "./calico/caliprofile";
import RagCatProfileCard from "./ragdoll/ragprofile";

interface ResultProps {
  answers: string[];
}

const Result: React.FC<ResultProps> = ({ answers }) => {
  const getResult = () => {
    const counts: { [key: string]: number } = {};

    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    console.log("Answer counts:", counts);

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  const result = getResult();

  console.log("Quiz result:", result);

  if (result === "bombay") {
    return <CatProfileCard />;
  } else if (result === "bsh") {
    return <BSHCatProfileCard />;
  } else if (result === "calico") {
    return <CaliCatProfileCard />;
  } else if (result === "ragdoll") {
    return <RagCatProfileCard />;
  }

  return null;
};

export default Result;
