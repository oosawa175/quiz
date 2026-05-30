type props={
    text : string;
    disabled : boolean;
    onClick :() =>void;
    className : string;
}
export default function ChoiceButton({
    text,
    disabled,
    onClick,
    className,
}:props){
    return(
        <button
            disabled={disabled}
            className={`border p-3 rounded ${className}`}
            onClick ={onClick}
        >
            {text}
        </button>
    )
}
