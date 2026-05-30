type props = {
    score : number;
    total : number;
}
export default function ResultScreen({
    score,
    total,
}:props){
    return(
        <>
            <h1>
                結果
            </h1>
            <p>
                あなたのスコアは{score}点です。
            </p>
            <p>
                正答率は{Math.round(score / total * 100)}%です。
            </p>
        </>
    )
}
