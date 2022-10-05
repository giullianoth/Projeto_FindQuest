export default function Trigger(props: {
    children: any,
    className?: string,
    icon?: any
}) {
    return (
        <div className={`trigger ${props.className}`}>{props.icon}{props.children}</div>
    );
}