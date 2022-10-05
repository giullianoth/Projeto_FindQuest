export default function Button(props: {
    children: any,
    type?: "button" | "submit" | "reset" | undefined,
    className?: string,
    onClick?: any
}) {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick}>{props.children}</button>
    );
}