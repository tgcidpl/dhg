import React, { useState } from "react";

function NPCGenerator() {
  const [randomNPC, setRandomNPC] = useState({
    arcana: "",
    malePrimitive: "",
    maleLow: "",
    maleHigh: "",
    maleArchaic: "",
    maleInformal: "",
    femalePrimitive: "",
    femaleLow: "",
    femaleHigh: "",
    femaleArchaic: "",
    femaleInformal: "",
  });
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
    "Temperance",
    "Devil",
    "Tower",
    "Star",
    "Moon",
    "Sun",
    "Judgement",
    "World",
  ];

  const malePrimitive = [
    "arz",
    "barik",
    "carm",
    "farn",
    "garak",
    "horst",
    "imk",
    "jart",
    "kulem",
    "larl",
    "mok",
    "narl",
    "oort",
    "pak",
    "ragaa",
    "salc",
    "tarl",
    "volc",
    "yarl",
    "zel",
  ];
  const maleLow = [
    "aaz",
    "canto",
    "darrial",
    "festus",
    "gaius",
    "harlon",
    "irlven",
    "jaspar",
    "killian",
    "lazarus",
    "mordicai",
    "nicodemus",
    "quinten",
    "rhaban",
    "silvanto",
    "titus",
    "uriah",
    "xerxes",
    "zariel",
  ];
  const maleHigh = [
    "azararch",
    "baranoth",
    "castess",
    "davrus",
    "erioch",
    "galliach",
    "harthos",
    "icharus",
    "karpath",
    "lothos",
    "marius",
    "noctine",
    "octavius",
    "partheos",
    "quellus",
    "ramalies",
    "severan",
    "tyruss",
    "ventium",
    "zarath",
  ];
  const maleArchaic = [
    "alaric",
    "barbosa",
    "caradoc",
    "draco",
    "eizen",
    "ferris",
    "grendal",
    "harlocke",
    "jenquin",
    "karlos",
    "lemant",
    "magnus",
    "naveen",
    "oscarl",
    "perrin",
    "romulus",
    "sabanth",
    "urial",
    "wolfe",
    "zarkov",
  ];
  const maleInformal = [
    "able",
    "bones",
    "cutter",
    "dakka",
    "dokk",
    "ergs",
    "fanz",
    "flair",
    "garrit",
    "hons",
    "ills",
    "jaq",
    "lax",
    "meng",
    "nast",
    "reddin",
    "scab",
    "shiv",
    "tranq",
    "wurm",
  ];
  const femalePrimitive = [
    `arda`,
    `cil`,
    `dara`,
    `elphet`,
    `frakka`,
    `garma`,
    `halli`,
    `ing`,
    `julla`,
    `kelle`,
    `merra`,
    `nimm`,
    `nulla`,
    `paz`,
    `russa`,
    `sulle`,
    `thima`,
    `vas`,
    `yanne`,
    `zanna`,
  ];
  const femaleLow = [
    `acadi`,
    `balida`,
    `cassa`,
    `darial`,
    `frennine`,
    `galatia`,
    `hannette`,
    `jinzia`,
    `karroleen`,
    `liri`,
    `magdala`,
    `narcia`,
    `pennette`,
    `quineel`,
    `rhia`,
    `sesselie`,
    `thesse`,
    `uri`,
    `xandra`,
    `zadori`,
  ];
  const femaleHigh = [
    `araleen`,
    `castella`,
    `elleantra`,
    `fausta`,
    `flavia`,
    `heras`,
    `irissa`,
    `jucinda`,
    `lucinda`,
    `mycandra`,
    `novianna`,
    `nuella`,
    `palanza`,
    `praenta`,
    `regia`,
    `scythia`,
    `temetria`,
    `thallia`,
    `venria`,
    `yemmise`,
  ];
  const femaleArchaic = [
    `aennisse`,
    `bianca`,
    `drusilla`,
    `eos`,
    `florenza`,
    `genevieve`,
    `hannette`,
    `jocasta`,
    `katarina`,
    `lethe`,
    `miranda`,
    `pollonia`,
    `rosalind`,
    `severine`,
    `tessera`,
    `tzarelle`,
    `urania`,
    `verity`,
    `wyniff`,
    `yasta`,
  ];
  const femaleInformal = [
    `alta`,
    `blue`,
    `echo`,
    `fatal`,
    `flame`,
    `gamma`,
    `grace`,
    `jaine`,
    `lho`,
    `mini`,
    `nerva`,
    `newt`,
    `pris`,
    `red`,
    `steel`,
    `starr`,
    `tanda`,
    `trix`,
    `xina`,
    `zedda`,
  ];
  // const categories = [
  //   arcana,
  //   malePrimitive,
  //   maleLow,
  //   maleHigh,
  //   maleHigh,
  //   maleArchaic,
  //   maleInformal,
  //   femalePrimitive,
  //   femaleLow.femaleHigh,
  //   femaleArchaic,
  //   femaleInformal,
  // ];
  const handleGenerate = (e) => {
    e.preventDefault;
    setRandomNPC({
      arcana: arcana[Math.floor(Math.random() * arcana.length)],
      malePrimitive:
        malePrimitive[Math.floor(Math.random() * malePrimitive.length)],
      maleLow: maleLow[Math.floor(Math.random() * maleLow.length)],
      maleHigh: maleHigh[Math.floor(Math.random() * maleHigh.length)],
      maleArchaic: maleArchaic[Math.floor(Math.random() * maleArchaic.length)],
      maleInformal:
        maleInformal[Math.floor(Math.random() * maleInformal.length)],
      femalePrimitive:
        femalePrimitive[Math.floor(Math.random() * femalePrimitive.length)],
      femaleLow: femaleLow[Math.floor(Math.random() * femaleLow.length)],
      femaleHigh: femaleHigh[Math.floor(Math.random() * femaleHigh.length)],
      femaleArchaic:
        femaleArchaic[Math.floor(Math.random() * femaleArchaic.length)],
      femaleInformal:
        femaleInformal[Math.floor(Math.random() * femaleInformal.length)],
    });
  };

  return (
    <div>
      <div>
        <p>Arcana: {randomNPC.arcana}</p>
        <div>
          <ul>
            Male:
            <li>Primitive: {randomNPC.malePrimitive}</li>
            <li>Low Gothic: {randomNPC.maleLow}</li>
            <li>High Gothic: {randomNPC.maleHigh}</li>
            <li>Archaic: {randomNPC.maleArchaic}</li>
            <li>Informal: {randomNPC.maleInformal}</li>
          </ul>
        </div>
        <div>
          <ul>
            Female:
            <li>Primitive: {randomNPC.femalePrimitive}</li>
            <li>Low Gothic: {randomNPC.femaleLow}</li>
            <li>High Gothic: {randomNPC.femaleHigh}</li>
            <li>Archaic: {randomNPC.femaleArchaic}</li>
            <li>Informal: {randomNPC.femaleInformal}</li>
          </ul>
        </div>
      </div>
      <button onClick={(e) => handleGenerate(e)}>Generate NPC</button>
    </div>
  );
}

export default NPCGenerator;
