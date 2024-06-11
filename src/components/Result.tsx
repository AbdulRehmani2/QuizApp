import { useEffect } from "react"

type Props = {
    correctAns: number,
    totalAns: number
}


function Result({correctAns, totalAns}: Props) {

    useEffect(() => {
        setProgress(correctAns)
    }, [])

    const setProgress = (prog:number) =>
    {
        const element = document.querySelector('.result-bar') as HTMLElement
        console.log(element);
        element.style.setProperty('width', `${(prog/35) * 100}%`)
    }
    return (
        <div className="question-result-container">
            {correctAns/totalAns*100 > 50 ? <h1>Better luck next time.</h1> : <h1>Congratulations on your success!</h1>}
            <div className="result-show">
                <span>Total Questions</span>
                <span>{totalAns}</span>
            </div>
            <div className="result-show">
                <span>Correct Questions</span>
                <span>{correctAns}</span>
            </div>
            <span>{`${Math.ceil(correctAns*100 / totalAns)}%`}</span>
            <div className="result-loader-container">
                <div className="result-bar"></div>
            </div>
            <button onClick={() => setProgress(10)}>Go Home</button>
        </div>
  )
}

export default Result