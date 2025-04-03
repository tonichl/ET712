import './App.css';
import treeimg from './images/tree.jpg'
function App() {
  // variable
  const msg ="welcome to ReactJS"

  //function
  function printsomething(){
    return "hello from function"
  }

  return (
    <div>
      <h1 style = {{color:"darkkhaki", textAlign:"center" }}>toni chen liang</h1>
      <p>this is my first reactJS app</p>
      <p>Bucket list</p>
      <ol>
        <li>give you thing to look forward to</li>
        <li>it makes life more meaningful</li>
      </ol>
      <h2 className='subtitle'>inline styling</h2>
    <label for="email">Enter e-mail: </label>
    <input type="text" id="email" placeholder="enter a email address..." style={{padding:"10px", backgroundColor:"darkkhaki", borderRadius:"5px", margin:"2px"}} />
    <button type="submit" style={{backgroundColor:"crimson", padding:"10px 20px", borderRadius:"5px"}}>submit</button>
    <hr></hr>
    <img src={treeimg} style={{width:"500px", display:"block", margin:"auto", border:"groove 10px darkkhaki"}}/>

    <h2 className='subtitle'>variable in JSX javascript xml</h2>

    <p> calling variable msg = {msg}</p>
    <p> calling function printsomething ={printsomething()}</p>

    </div>
  );
}

export default App;
