
import './App.css';
import Counter from './components/Counter/Counter';
import Goodbye from './components/Goodbye/Goodbye';
import Tool from './components/Tool/Tool';
import ProfileCard from './components/ProfileCard/Profilecard';
import IdealWeightCalculator from './components/IdealWeightCalculator/IdealWeightCalculator';
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';
import RandomDog from './components/RandomDog/RandomDog';
import GenderReveal from './components/GenderReveal/GenderReveal';
import NationalityReveal from './components/NationalityReveal/NationalityReveal';

function App() {
  return (
  <>
  <p>Hello, World!</p>
  <Tool />
  <IdealWeightCalculator/ >
  <SpaceMissionForm/ >
  <RandomDog/ >
  <GenderReveal/ >
   <NationalityReveal/ >

  <ProfileCard
  avatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&h=100"
  name="Sarah"
  description="Frontend developer"
/>
<ProfileCard
  avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
  name="Natalie"
  description="React student"
/>
   {/* <Greetings name ="Natalie"/>
   <Greetings name = "Alisher"/>     */}
   <Goodbye familyName="Istomina" score={90}/>
   <Goodbye familyName="Istomina" />
   <Counter/>
   <Counter/>
   
  </>
  );
}
export default App;




