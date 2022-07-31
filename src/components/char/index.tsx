type props = {
    children: React.ReactNode,
    flag: boolean
}

export default function Char( props:props ) : JSX.Element {

    return (
        <span className = {props.flag ? 'op1' : 'op0'} >{props.children}</span>
    )
}