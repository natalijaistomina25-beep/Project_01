import { useState } from "react";
import type NationalityInfo from "./types/NationalityInfo";
import NationalityResults from "./NationalityResults";

export default function Nationalize(country_id: string) {
  console.log(country_id);
  const [name, setName] = useState<string>("");
  const [natinalityInfo, setNationalityInfo] = useState<
    undefined | NationalityInfo
  >(undefined);

  function handleLearnNationality() {
    fetchNationalityByName(name);
  }
  const fetchNationalityByName = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    setNationalityInfo(data);
  };

  return (
    <div>
      <h2>Nationalize</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="button" onClick={handleLearnNationality}>
        Learn nationality
      </button>

      {natinalityInfo  && <NationalityResults {...natinalityInfo} />}
    </div>
  );
}