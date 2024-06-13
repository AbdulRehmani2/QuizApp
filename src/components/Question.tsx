import { useState } from "react";

import QuestionBar from "./QuestionBar";
import QuestionChoice from "./QuestionChoice";
import Result from "./Result";

type QuestionProp = {
    name: string
}

const questions = [
    {
      "id": 1,
      "question": "What does CPU stand for?",
      "options": ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
      "correct": 1
    },
    {
      "id": 2,
      "question": "Which of the following is not a programming language?",
      "options": ["Python", "Java", "HTML", "C++"],
      "correct": 2
    },
    {
      "id": 3,
      "question": "What is the main function of an operating system?",
      "options": ["Manage hardware resources", "Compile programs", "Translate high-level code", "Store data"],
      "correct": 0
    },
    {
      "id": 4,
      "question": "What does RAM stand for?",
      "options": ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Randomized Access Memory"],
      "correct": 0
    },
    {
      "id": 5,
      "question": "Which language is primarily used for web development?",
      "options": ["Python", "Java", "JavaScript", "C#"],
      "correct": 2
    },
    {
      "id": 6,
      "question": "What is the smallest unit of data in a computer?",
      "options": ["Bit", "Byte", "Kilobyte", "Megabyte"],
      "correct": 0
    },
    {
      "id": 7,
      "question": "Which of the following is a database management system?",
      "options": ["MySQL", "HTML", "CSS", "JavaScript"],
      "correct": 0
    },
    {
      "id": 8,
      "question": "What does HTTP stand for?",
      "options": ["HyperText Transfer Protocol", "HyperText Transfer Program", "HyperText Translate Protocol", "HyperText Transfer Package"],
      "correct": 0
    },
    {
      "id": 9,
      "question": "What is a loop that never ends called?",
      "options": ["While loop", "For loop", "Infinite loop", "Recursive loop"],
      "correct": 2
    },
    {
      "id": 10,
      "question": "Which of the following is a valid variable name in most programming languages?",
      "options": ["2variable", "variable_1", "variable-1", "variable 1"],
      "correct": 1
    },
    {
      "id": 11,
      "question": "Which company developed the Windows operating system?",
      "options": ["Apple", "IBM", "Microsoft", "Google"],
      "correct": 2
    },
    {
      "id": 12,
      "question": "What is the purpose of an IP address?",
      "options": ["Identify a network", "Identify a device on a network", "Encrypt data", "Store data"],
      "correct": 1
    },
    {
      "id": 13,
      "question": "Which protocol is used to send emails?",
      "options": ["HTTP", "FTP", "SMTP", "IMAP"],
      "correct": 2
    }
]

function Question({name}: QuestionProp) {

    const [question, setQuestion] = useState(0);
	const [correctAns, setCorrectAns] = useState(0);
    const [selectedAns, setSelectedAns] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function changeQuestion()
    {
        if(selectedAns == questions[question].correct)
        {
            setCorrectAns((prev) => prev + 1)
        }
        setQuestion((prev) => prev + 1)
    }

    return (
        <div className="question-container">
            <div className="question-form-container">
                <h1>Javascript Quiz</h1>
                <QuestionBar name={name} quesNo={`${questions[question].id + 1} | ${questions.length + 1}`} time={"2"}></QuestionBar>
                {!isFinished && <QuestionChoice setSelectedIndex={setSelectedAns} question={questions[question].question} options={questions[question].options}></QuestionChoice>}
                {isFinished && <Result correctAns={correctAns} totalAns={questions.length}></Result>}
                {!isFinished && <div className="question-submit-container">
                    {question == questions.length - 1 && <button className="question-submit-button" onClick={() => setIsFinished(true)}>Submit</button>}
                    {question != questions.length - 1 && <button className="question-submit-button" onClick={changeQuestion}>Next</button>}
                </div>}
            </div>
        </div>)
}

export default Question