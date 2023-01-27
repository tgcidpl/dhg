import React, { useState } from "react";

function SettingGenerator() {
  const [randomSet, setRandomSet] = useState(null);

  const world = [
    "feral world",
    "feudal world",
    "forge world",
    "hive world",
    "shrine world",
    "voidstation",
    "voidship",
  ];

  const organisation = [
    "adeptus mechanicus",
    "adeptus ministorum",
    "adeptus astra telepathica",
    "adeptus administratum",
    "adeptus arbites",
    "imperial guard",
    "rogue traders",
    "inquisition",
  ];

  const issue = [
    "xenos",
    "mutants",
    "heretics",
    "enemy inquisitor",
    "conflict of power",
  ];

  const style = ["noir", "horror", "action", "suspense", "drama"];

  const chaos = [
    "Slaanesh",
    "Nurgle",
    "Khorne",
    "Tzeentch",
    "Chaos undivided",
    "Malal",
  ];

  const handleGenerate = () => {
    setRandomSet([
      "Location: " + world[Math.floor(Math.random() * world.length)],
      "Organisation: " +
        organisation[Math.floor(Math.random() * organisation.length)],
      "Issue: " + issue[Math.floor(Math.random() * issue.length)],
      "Style: " + style[Math.floor(Math.random() * style.length)],
      "Chaos: " + chaos[Math.floor(Math.random() * chaos.length)],
    ]);
  };
  return (
    <div>
      <button onClick={handleGenerate}>Generate Setting</button>
      {randomSet && (
        <ul>
          {randomSet.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default SettingGenerator;
