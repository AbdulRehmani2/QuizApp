function Result() {

    const setProgress = (prog:number) =>
    {
        const element = document.querySelector('.result-bar') as HTMLElement
        console.log(element);
        element.style.setProperty('width', `${(prog/35) * 100}%`)
    }
    return (
        <div className="question-result-container">
            <h1>Better luck next time</h1>
            <div className="result-show">
                <span>Total Questions</span>
                <span>35</span>
            </div>
            <div className="result-show">
                <span>Correct Questions</span>
                <span>10</span>
            </div>
            <span>{`${Math.ceil(10*100 / 35)}%`}</span>
            <div className="result-loader-container">
                <div className="result-bar"></div>
            </div>
            <button onClick={() => setProgress(10)}>Go Home</button>
        </div>
  )
}

export default Result