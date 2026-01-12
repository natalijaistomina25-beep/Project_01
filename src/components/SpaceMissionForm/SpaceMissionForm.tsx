import { useEffect, useState } from "react";
import s from "./SpaceMissionForm.module.css";
import { planetOptions } from "./selectOptions";
export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  // initial value - начальное значение
  // tuple - at first place we have state, and setter at second position
  const [planet, setPlanet] = useState<string>("Venus");
  // useEffect без массива зависимостей
  // при mount и при любых изменениях - update
  useEffect(() => {
    console.log("Use effect in Space Mission - no dependencies");
  });
  // useEffect с зависимостями
  // при mount
  // или когда меняется указанная в массиве переменная - name
  useEffect(() => {
    console.log("Use effect in Space Mission - with dependecie on name");
  }, [name]);
  return (
    <div className={s.container}>
      <h2>Space Mission Form</h2>
      <label htmlFor="astronautName">Name:</label>
      <input
        id="astronautName"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        name={planet}
        onChange={(e) => setPlanet(e.target.value)}
        value={planet}
      >
        {planetOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {name ? (
        <p>
          {name} is heading to {planet}
        </p>
      ) : (
        <p>Please enter your name to begin your mission</p>
      )}
    </div>
  );
} 

// {/* 
//   Условный рендеринг: показываем разный текст в зависимости от того, есть ли имя
//   1. Всё, что внутри фигурных скобок {}, это JS выражение в JSX
//   2. Тернарный оператор: условие ? если true : если false
// */}
// {
//   name ? ( // Если name не пустое
//     <p>
//       {/* Выводим имя астронавта и выбранную планету */}
//       Astronaut {name} is headed to {planet}!
//     </p>
//   ) : ( // Если name пустое
//     <p>
//       {/* Просим пользователя ввести имя */}
//       Please enter your name to start your mission.
//     </p>
// Подсказка для себя:
// name ? … : … = «если name есть, покажи одно, иначе покажи другое»
// {name} и {planet} внутри JSX — это динамическая вставка значений из состояния или пропсов
// Без фигурных скобок это не сработает — React не поймёт, что ты хочешь вставить JS
//   )
// }

//CALL BACK FUNCTION
// function print(x: string) {
//   console.log(x);
// }

// function printCaps(x: string) {
//   console.log(x.toUpperCase());
// }

// function foo(operation: (x: string) => void, value: string) {
//   operation(value);
// }