import type { FC } from "react";
import type NationalityInfo from "./types/NationalityInfo";
import getCountryNameByCode from "./Nationalize"

const NationalityResults: FC<NationalityInfo | undefined> = (info) => {
  return (
    <div>
      <h3>Results</h3>
      <p>Name: {info?.name}</p>
      <p>Count: {info?.count}</p>
      <ul>
        {info?.country.map((c) => (
          <li key={c.country_id}>
            {getCountryNameByCode(c.country_id)} - {(c.probability * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NationalityResults;