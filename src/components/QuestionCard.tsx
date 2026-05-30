type props= {
    questionNumber : number;
    text : string;
}
export default function QuestionCard({
    questionNumber,
    text,
}:props){
    return(
        <>
            <h1>
                問題{questionNumber}
            </h1>
            
            <p>
                {text}
            </p>
        </>
    )
}