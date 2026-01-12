
import { useState } from "react";
import type { NationalityInformation } from "../../types/NationalityInformation";
import s from "./NationalityReveal.module.css";
import { Results } from "./Results";

export default function NationalityReveal() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<NationalityInformation | undefined>(undefined);

  
  const countryNames: { [key: string]: string } = {
    US: "United States",
    IE: "Ireland",
    LV: "Latvia",
    RU: "Russian Federation",
    IT:"Italy",
    ES:"Spain",
  };

  async function fetchNationality(name: string) {
    
    if (!name.trim()) {
      alert("Please enter a valid name");
      setInfo(undefined);
      return;
    }

    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    
    // Преобразуем страны в человекочитаемый формат
    const transformedData = {
      ...data,
      country: data.country.map((c: any) => ({
        ...c,
        country_name: countryNames[c.country_id] || c.country_id,
      })),
    };
    setInfo(transformedData);
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
      <button
        type="button"
        onClick={() => fetchNationality(name)}
      >
        Submit
      </button>
      <Results info={info} />
    </div>
  );
}