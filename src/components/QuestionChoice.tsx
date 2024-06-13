type Prop = {
  question: string,
  options: string[],
  setCorrectAns: React.Dispatch<React.SetStateAction<number>>,
  correctIdx: number
}

function QuestionChoice({question, options, setCorrectAns, correctIdx}: Prop)
{

  	let makeActive = (e:React.MouseEvent<HTMLUListElement>) => {
    	document.querySelectorAll(".question-choice-list>li").forEach((element, index) => {
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
    </div>
    )
}

export default QuestionChoice