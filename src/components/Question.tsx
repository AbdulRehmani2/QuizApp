function Question() {

    let makeActive = (e:React.MouseEvent<HTMLUListElement>) => {
        document.querySelectorAll(".question-choice-list>li").forEach((element) => {
            element.style.backgroundColor = "#a9a9a9"
            if(e.target == element)
            {
                element.style.backgroundColor = "rgb(35, 193, 35)"
            }
        })
    }

    return (
        <div className="question-container">
            <div className="question-form-container">
                <h1>Javascript Quiz</h1>
                <div className="question-data-container">
                    <p>Name</p>
                    <p>Question</p>
                    <p>Time</p>
                </div>
                <div className="question-choice-container">
                    <p>Statement</p>
                    <ul className="question-choice-list" onClick={makeActive}>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Question