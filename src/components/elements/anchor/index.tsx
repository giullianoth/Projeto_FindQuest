export default function Anchor(props: {
    children: string,
    href: string,
    className?: string,
    target?: string,
    rel?: string
}) {
    const className = `transition ${props.className}`;

    return (
        <a href={props.href} target={props.target} rel={props.rel} className={className}>{props.children}</a>
    );
}