import './App.css';
import React, {useState} from "react";


function App() {
  // set the initial state
  const [count, setCount] = useState(0);

  // set the initial state for name. good for single input data
  //const [name, setName] = useState("ex: john")

  //set state for multiple inputs. destructing userState
  const[inputs, setInputs] = useState({})

  //function to open an alert dialog when the form is submitted
  const submitform = function(event){
    event.preventDefault()
    alert(`welcome to react state ${inputs.username}. your lucky number is ${inputs.luckynumber} \nComments = ${textcomment}`)
  }

  // function to handle changes in multiple inputs
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value})) // spread statement
  }

  //set the state for text area
  const[textcomment, setTextcomment] = useState("")
  //function to collect the value of the textarea
  const submitted_comments = function(event){
    setTextcomment ( event.target.value )
  }

  // set the state for select (multiple choice)
  const[mygender, selectedGender] = useState("other")
  //function to collect the gender
  const collectedgender = function(event){
    selectedGender(event.target.value)
  }
  return (
   <section className='whole'>
    <h1> lab 14, react state</h1>
    <p>count = {count}</p>
    <button onClick={() => setCount(count+1)}>increment the count</button>
    <button onClick={() => setCount(0)}>reset</button>



    <h1> form application using state</h1>
    <form onSubmit={submitform}>
      <fieldset className='form'>
        <legend className='legend'>Forms in ReactJS</legend>
        <section className='inputs'>
        <label for="name">Enter your name:</label>
        <input
        type='text'
        id='username'
        name = 'username'
        value = {inputs.username}
        onChange = {handle_changes}
        />
        </section>


        <section className='inputs'>
          <label for ="luckynumber"> enter a luckynumber</label>
          <input
            type = 'number'
            id= 'luckynumber'
            name ='luckynumber'
            value={inputs.luckynumber}
            onChange={handle_changes}
            />
        </section>


        <section className='inputs'>
          <label for="comments">any question?</label>
          <textarea
            id='comments'
            value={textcomment}
            onChange={submitted_comments}
            />
        </section>

        <section className='inputs'>
        <select value = {mygender} onChange = {collectedgender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        </section>
        
        {/*submit form*/}
        
          <section>
            <input type='submit'/>
        </section>
       

      </fieldset>

      {/*test data in the form after submitsion*/}
      <p> name = {inputs.username}</p>
      <p> luckynumber = {inputs.luckynumber}</p>
      <p> comments = {textcomment}</p>
      <p> gender = {mygender}</p>
    </form>

   </section>
  );
}

export default App;
