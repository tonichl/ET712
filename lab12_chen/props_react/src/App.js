
import './App.css';
import User from"./comments"
import "./index.css"
//import images
import cat from "./images/cat.png"
import chicken from "./images/chicken.png"
import panda from "./images/panda.png"

function App() {
  return (
   <>
   <h1>User comments</h1>
   <main className="maincontainer">
    <User image={cat} username="Mr. cat" date="04/08/25" usercomment="great job"/>
    <User image={chicken} username="Mr. chicken" date="04/08/25" usercomment="glad to help"/>
    <User image={panda} username="Mr. panda" date="04/08/25" usercomment="relax"/>
   </main>

   </>
  );
}

export default App;
