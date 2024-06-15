type Props = {
    name: string,
    quesNo: string,
    time: string
}


function QuestionBar({name, quesNo, time}: Props) {
  
  return (
    <div className="question-data-container">
        <span>{quesNo}</span>
        <span>{name}</span>
        <span>{time}</span>
    </div>
  )
}

export default QuestionBar