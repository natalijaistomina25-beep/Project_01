

// import Counter from './components/Counter/Counter';
// import IdealWeightCalculator from './components/IdealWeightCalculator/IdealWeightCalculator';
// import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';

// import GenderReveal from './components/GenderReveal/GenderReveal';
// import NationalityReveal from './components/NationalityReveal/NationalityReveal';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import NotFound from './pages/Home/NotFound/NotFound';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Layout from './layouts/Layout';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//            <Route path="/about" element={<About />} />
//            <Route path="/contact" element={<Contact />} />
//           <Route path="/gender-reveal" element={<GenderReveal />} />
//           <Route path="/nationality-reveal" element={<NationalityReveal />} />
//           <Route path="/counter" element={<Counter />} />
//           <Route path="/space-mision" element={<SpaceMissionForm />} />
//           <Route path="/ideal-weight" element={<IdealWeightCalculator />} />    
          
//           </Route>
//           <Route path="/*" element={<NotFound />} />  
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// import Counter from './components/Counter/Counter';
// import IdealWeightCalculator from './components/IdealWeightCalculator/IdealWeightCalculator';
// import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';
// import GenderReveal from './components/GenderReveal/GenderReveal';
// import NationalityReveal from './components/NationalityReveal/NationalityReveal';


// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from './pages/Home/Home';
// import NotFound from './pages/Home/NotFound/NotFound';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Layout from "./layouts/Layout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Главная страница */}
//           <Route index element={<Home />} />

//           {/* Новые страницы */}
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Остальные компоненты */}
//           <Route path="/gender-reveal" element={<GenderReveal />} />
//           <Route path="/nationality-reveal" element={<NationalityReveal />} />
//           <Route path="/counter" element={<Counter />} />
//           <Route path="/space-mission" element={<SpaceMissionForm />} />
//           <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
//         </Route>

//         {/* Если страница не найдена */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Counter from './components/Counter/Counter';
import IdealWeightCalculator from './components/IdealWeightCalculator/IdealWeightCalculator';
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';
import GenderReveal from './components/GenderReveal/GenderReveal';
import NationalityReveal from './components/NationalityReveal/NationalityReveal';


import Home from './pages/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';


import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />

          
          <Route path="/gender-reveal" element={<GenderReveal />} />
          <Route path="/nationality-reveal" element={<NationalityReveal />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/space-mission" element={<SpaceMissionForm />} />
          <Route path="/ideal-weight" element={<IdealWeightCalculator />} />

         
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;