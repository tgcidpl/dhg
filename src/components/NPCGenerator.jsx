import React, { useState } from "react";

function NPCGenerator() {
  const [randomNPCs, setRandomNPCs] = useState(null);
  const arcana = [
    "Fool",
    "Magician",
    "High Priestess",
    "Empress",
    "Emperor",
    "Hierophant",
    "Lovers",
    "Chariot",
    "Strength",
    "Hermit",
    "Wheel of Fortune",
    "Justice",
    "Hanged Man",
    "Death",
    "Temprance",
    "Devil",
    "Tower",
    "Star",
    "Moon",
    "Sun",
    "Judgement",
    "World",
  ];

  const handleGenerate = () => {
    setRandomNPCs([
      "arcana: " + arcana[Math.floor(Math.random() * arcana.length)],
    ]);
    console.log(randomNPCs);
  };
  return (
    <div>
      <button onClick={handleGenerate}>Generate NPCs</button>
      {randomNPCs && (
        <ul>
          {randomNPCs.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default NPCGenerator;
