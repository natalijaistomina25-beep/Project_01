import { useState } from "react";

export default function SpaceMissionForm(){
    const [name, setName] = useState("");
    const [planet, setPlanet] = useState("Mars");

    return (
        <div>
            <h2>Space Mission Registration</h2>

            <div>
                <label htmlFor="planet name">Planet Name:</label>
            <select value = {planet} onChange={(e)=> setPlanet(e.target.value)}>
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
      </select>
       
      </div>


      <div>
        <label htmlFor="austronaut name">Austronaut Name:</label>
      <input
        type="text"
        placeholder="Astronaut name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      </div>

      {name ? (
        <p>
            Astronaut {name} is headed to {planet}!

        </p>
      ) : (

        <p>Please enter your name to start your mission.</p>
      )}
            

        </div>
    );
}