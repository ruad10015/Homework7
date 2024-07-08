import React, { useRef, useState } from 'react'
import { questions } from './Data'
import QuestionCircle from './QuestionCircle';

export default function Quiz() {

    const index = useRef(0);
    let [question, setQuestion] = useState(questions[index.current]);
    const check = useRef(null);
    const colorcheck = useRef();
    const check2 = useRef(false);
    const ans = useRef("");
    const count = useRef(0);
    const trueAns = useRef("");


    function nextQuestion() {
        if (check.current == null) {
            alert("Dont ");
            return;
        }

        if (check.current == true) {
            question.bgColor = "deepskyblue";
            question.color = "white";

            if (question.trueAnswer == ans.current) {

                question.isCheck = true;
            }
            else {
                question.isCheck = false;

            }

            questions[index.current] = question;
        }


        else if (check.current == false) {
            question.bgColor = "deepskyblue";
            question.color = "white";
            questions[index.current] = question;

        }

        index.current += 1;
        question = questions[index.current];
        setQuestion(questions[index.current]);

        if (question.e === "1") {
            var d = document.getElementById("1");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "2") {
            var d = document.getElementById("2");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "3") {
            var d = document.getElementById("3");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "4") {
            var d = document.getElementById("4");
            d.checked = true;
            check.current = false;

        }
        else {
            if (check.current != null) {
                colorcheck.current.target.checked = false;
                check.current = null;
            }

        }

    }

    function prevQuestion() {

        if (check.current == true) {
            question.bgColor = "deepskyblue";
            question.color = "white";

            if (question.trueAnswer == ans.current) {

                question.isCheck = true;
            }
            else {
                question.isCheck = false;

            }
            questions[index.current] = question;
        }


        else if (check.current == false || check.current == null) {
            question.bgColor = "red";
            question.color = "white";
            questions[index.current] = question;

        }

        index.current -= 1;
        question = questions[index.current];
        setQuestion(questions[index.current]);

        if (question.e === "1") {
            var d = document.getElementById("1");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "2") {
            var d = document.getElementById("2");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "3") {
            var d = document.getElementById("3");
            d.checked = true;
            check.current = true;

        }

        else if (question.e === "4") {
            var d = document.getElementById("4");
            d.checked = true;
            check.current = false;
        }
        else {
            check.current = false;
        }
    }

    function checkColor(checkk, answer, ee, no, an) {
        if (no == "1" || no == "2" || no == "3" || no == "4") {
            check.current = checkk;
            ans.current = an;
            question.e = no;
            colorcheck.current = ee;
        }

        setQuestion(question);
    }

    function finishQuiz() {

        if (question.trueAnswer == ans.current) {

            question.isCheck = true;
        }

        else {
            question.isCheck = false;
        }

        questions[index.current] = question;

        questions.map((q) => {
            if (q.isCheck == true) {
                count.current++;
                trueAns.current += `${q.id} - ${q.trueAnswer}, `;
            }
        });

        alert(`You asnwerd correct ${count.current}/${questions.length}.This is your correct answers ${trueAns.current}`);
        window.location.reload();
    }

    return (
        <section>
            <section style={{ backgroundColor: "white", color: "deepskyblue", margin: "auto", borderRadius: "20px", width: "40%", fontSize: "1.5em", marginTop: "2%" }}>
                <h1 style={{ padding: "20px 0px 20px 0px", textAlign: "center" }}>Quiz Application UI</h1>
            </section>

            <section style={{ backgroundColor: "white", borderRadius: "20px", width: "80%", margin: "auto", marginTop: "3%", padding: "0px 20px 20px 20px", display: "flex", justifyContent: "start" }}>
                <section style={{ width: "60%" }}>
                    <h1 style={{ paddingTop: "10px", textAlign: "center", fontSize: "1.2em" }}>Quiz Title</h1>
                    <section style={{ borderRadius: "10px", width: "100%", padding: "5px", border: "3px solid deepskyblue", marginTop: "20px", padding: "20px" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "1.2em" }}>Question {question.id}</h1>
                        <p style={{ fontSize: "1.5em", marginTop: "5px" }}>{question.question}</p>
                    </section>
                    <section style={{ display: "flex", padding: "10px 0px 10px 40px", marginTop: "30px", borderRadius: "10px", border: "3px solid lightgrey", width: "100%", fontSize: "1.5em" }}>
                        <input id='1' type='radio' name='answer' onClick={(colorcheck) => checkColor(true, question.answer1, colorcheck, "1", question.answer1)}></input>
                        <h1 style={{ marginLeft: "10px" }}>{question.answer1}</h1>
                    </section>
                    <section style={{ display: "flex", padding: "10px 0px 10px 40px", marginTop: "30px", borderRadius: "10px", border: "3px solid lightgrey", width: "100%", fontSize: "1.5em" }}>
                        <input id='2' type='radio' name='answer' onClick={(colorcheck) => checkColor(true, question.answer1, colorcheck, "2", question.answer2)}></input>
                        <h1 style={{ marginLeft: "10px" }}>{question.answer2}</h1>
                    </section>
                    <section style={{ display: "flex", padding: "10px 0px 10px 40px", marginTop: "30px", borderRadius: "10px", border: "3px solid lightgrey", width: "100%", fontSize: "1.5em" }}>
                        <input id='3' type='radio' name='answer' onClick={(colorcheck) => checkColor(true, question.answer1, colorcheck, "3", question.answer3)}></input>
                        <h1 style={{ marginLeft: "10px" }}>{question.answer3}</h1>
                    </section>
                    <section style={{ display: "flex", padding: "10px 0px 10px 40px", marginTop: "30px", borderRadius: "10px", border: "3px solid lightgrey", width: "100%", fontSize: "1.5em" }}>
                        <input id='4' type='radio' name='answer' onClick={(colorcheck) => checkColor(true, question.answer1, colorcheck, "4", question.answer4)}></input>
                        <h1 style={{ marginLeft: "10px" }}>{question.answer4}</h1>
                    </section>
                    <section style={{ display: "flex", justifyContent: "start", marginTop: "30px", width: "100%" }}>
                        <button disabled={question.id != 1 ? false : true} style={{ marginLeft: "300px", borderRadius: "10px", border: "2px solid lightgrey", backgroundColor: "white", padding: "5px", fontSize: "1.5em", width: "14%", fontWeight: "bold" }} onClick={prevQuestion}>Prev</button>
                        <button disabled={question.id != 10 ? false : true} style={{ marginLeft: "50px", borderRadius: "10px", border: "2px solid lightgrey", backgroundColor: "white", padding: "5px", fontSize: "1.5em", width: "14%", fontWeight: "bold" }} onClick={nextQuestion}>Next</button>
                        <button disabled={question.id != 10 ? true : false} style={{ marginLeft: "250px", borderRadius: "10px", border: "2px solid lightgrey", backgroundColor: "white", padding: "5px", fontSize: "1.5em", width: "14%", fontWeight: "bold" }} onClick={finishQuiz}>Finish</button>

                    </section>
                    <section style={{ borderRadius: "10px", width: "100%", padding: "5px", border: "2px solid lightgrey", marginTop: "20px", padding: "20px" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "1.2em" }}>Explanation </h1>
                        <p style={{ fontSize: "1.5em", marginTop: "5px" }}>{question.question}</p>
                    </section>
                </section>
                <section style={{ borderRadius: "10px", border: "2px solid lightgrey", width: "35%", marginLeft: "80px", marginTop: "60px", padding: "20px" }}>

                    <h1 style={{ fontWeight: "bold", fontSize: "1.5em", display: "inline-block" }}>Question {question.id}/{questions.length}</h1>
                    <h1 style={{ fontWeight: "bold", fontSize: "1.5em", display: "inline-block", float: "right" }}>Need Help?</h1>

                    <section style={{ marginTop: "50px" }}>
                        {
                            questions.map((q) => (<QuestionCircle data={q}></QuestionCircle>))
                        }
                    </section>

                </section>
            </section>

        </section>
    )
}
