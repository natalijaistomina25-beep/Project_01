
import { useState } from "react";
import s from "./NationalityReveal.module.css";
import { Results } from "./Results";


type CountryInfo = {
  country_id: string;
  probability: number;
};

type NationalityInformation = {
  name: string;
  country: CountryInfo[];
};


export default function NationalityReveal() {
   const [name, setName] = useState<string>("");
   const [info, setInfo] = useState<NationalityInformation | undefined>(undefined);

    async function fetchNationality(name: string) {
    if (!name.trim()) return; 
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data: NationalityInformation = await res.json();
    setInfo(data); 
  }

  return (
    <div className={s.container}>
      <h2>Nationality Reveal</h2>

      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />

      
      <button type="button" onClick={() => fetchNationality(name)}>
        Submit
      </button>

      
      <Results info={info} />
    </div>
  );
}