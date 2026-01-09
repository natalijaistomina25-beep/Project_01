
import './App.css';
import Counter from './components/Counter/Counter';
import Goodbye from './components/Goodbye/Goodbye';
import Tool from './components/Tool/Tool';
import ProfileCard from './components/ProfileCard/Profilecard';



function App() {
  return (
  <>
  <p>Hello, World!</p>

  <Tool />

  <ProfileCard
  avatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&h=100"
  name="Marry"
  description="Frontend developer"
/>

<ProfileCard
  avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
  name="Natalie"
  description="React student"
/>
   {/* <Greetings name ="Sarah"/>
   <Greetings name = "Natalie"/>     */}

   <Goodbye familyName="Poppins" score={90}/>
   <Goodbye familyName="Imbruglia" />

   <Counter/>
   <Counter/>
  </>
  );
      
}

export default App;
