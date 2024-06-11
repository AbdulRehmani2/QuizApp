function TestMenu() {
  return (
    <div className="testmenu-container">
        <div className="testmenu-form-container">
            <h1>Quiz Form</h1>
            <input type="text" name="fName" id="fname-input" placeholder="Enter First Name"/>
            <input type="text" name="lName" id="lname-input" placeholder="Enter Last Name"/>
            <input type="text" name="tName" id="tname-input" placeholder="Test Name"/>
            <button className="start-button">Start Test</button>
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