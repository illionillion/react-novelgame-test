import charprops from "../../interface/charprops";

export default function Char( props: charprops ) : JSX.Element {

    return (
        <span className = {props.flag ? 'op1' : 'op0'} >{props.children}</span>
    )
}