import type { FC } from "react";
import s from "./Results.module.css";
import type { NationalityInformation } from "../../types/NationalityInformation";

export const Results: FC<{ info: NationalityInformation | undefined }> = ({ info }) => {
  
  if (!info || !info.country || info.country.length === 0)
    return <p>No information yet. Please insert name</p>;

  
  const topCountries = info.country
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 3);

  return (
    <div className={s.results}>
      <h3>Results</h3>
      {topCountries.map((item) => (
        <p key={item.country_id}>
          {item.country_id} — {(item.probability * 100).toFixed(1)}%
        </p>
      ))}
    </div>
  );
};