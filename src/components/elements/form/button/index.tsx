export default function Button(props: {
    children: any,
    type?: "button" | "submit" | "reset" | undefined,
    className?: string,
    onClick?: any
}) {
    const className = `btn transition ${props.className}`;

    return (
        <button type={props.type} className={className} onClick={props.onClick}>{props.children}</button>
    );
}