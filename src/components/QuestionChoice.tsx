type Prop = {
  question: string,
  options: string[]
}

function QuestionChoice({question, options}: Prop)
{
  	let makeActive = (e:React.MouseEvent<HTMLUListElement>) => {
    	document.querySelectorAll(".question-choice-list>li").forEach((element) => {
    	    const liElement = element as HTMLElement
    	    liElement.style.backgroundColor = "#a9a9a9"
    	    if(e.target == liElement)
    	    {
    	        liElement.style.backgroundColor = "rgb(35, 193, 35)"
    	    }
    	})
  	}
    return(
    <div className="question-choice-container">
        <p>{question}</p>
        <ul className="question-choice-list" onClick={makeActive}>
            {options.map((element:string) => <li>{element}</li>)}
        </ul>
        <div className="question-submit-container">
            <button className="question-submit-button">Submit</button>
        </div>
    </div>
    )
}

export default QuestionChoice