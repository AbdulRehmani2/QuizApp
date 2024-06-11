import QuestionBar from "./QuestionBar";
// import QuestionChoice from "./QuestionChoice";
import Result from "./Result";

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

    return (
        <div className="question-container">
            <div className="question-form-container">
                <h1>Javascript Quiz</h1>
                <QuestionBar name={name} quesNo={quesNo} time={time}></QuestionBar>
                {/* <QuestionChoice question={question} options={options}></QuestionChoice> */}
                <Result totalAns={35} correctAns={10}></Result>
            </div>
        </div>)
}

export default Question