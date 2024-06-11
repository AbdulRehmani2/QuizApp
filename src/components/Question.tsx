import QuestionBar from "./QuestionBar";

const defaultProps = {
    name: "Name",
    quesNo: "Question",
    time: "Time",
    question: "Statement",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"]
}

type QuestionProp = {
    name: string,
    quesNo: string,
    time: string,
    question: string,
    options: string[]
} & typeof defaultProps;

function Question({name, quesNo, time, question, options}: QuestionProp) {

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

    return (
        <div className="question-container">
            <div className="question-form-container">
                <h1>Javascript Quiz</h1>
                <QuestionBar name={name} quesNo={quesNo} time={time}></QuestionBar>
                <div className="question-choice-container">
                    <p>{question}</p>
                    <ul className="question-choice-list" onClick={makeActive}>
                        {options.map((element:string) => <li>{element}</li>)}
                    </ul>
                    <div className="question-submit-container">
                        <button className="question-submit-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question