import { useState } from "react"
import { useNavigate} from "react-router-dom"

type Props = {
	setUserName: React.Dispatch<React.SetStateAction<string>>
}

function TestMenu({setUserName}: Props) {

	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');

	const history = useNavigate();

	function handleFirstName()
	{
		const input = document.getElementById('fname-input') as HTMLInputElement;
		const name:string = input.value
		setFName(name);
	}

	function handleLastName()
	{
		const input = document.getElementById('lname-input') as HTMLInputElement;
		const name:string = input.value
		setLName(name);
	}

	function startTest()
	{
		if(fName != '' && lName != '')
		{
			setUserName(`${fName} ${lName}`)
		}
		history('/quiz');
	}

  	return (
  	  <div className="testmenu-container">
  	      <div className="testmenu-form-container">
  	          <h1>Quiz Form</h1>
  	          <input type="text" name="fName" id="fname-input" placeholder="Enter First Name" value={fName} onChange={() => handleFirstName()}/>
  	          <input type="text" name="lName" id="lname-input" placeholder="Enter Last Name" value={lName} onChange={() => handleLastName()}/>
  	          <button className="start-button" onClick={startTest}>Start Test</button>
  	      </div>
  	      <ul className="testmenu-rules-list">
  	          <li>00 Questions are given in Quiz.</li>
  	          <li>Option once selected cannot be changed.</li>
  	          <li>10 minutes are given, then quiz will end automatically.</li>
  	          <li>Scoring below 70% means you did not pass.</li>
  	      </ul>
  	  </div>
  	)
}

export default TestMenu