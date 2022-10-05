export default function Anchor(props: {
    children: any,
    href: string,
    className?: string,
    target?: string,
    rel?: string
}) {
    return (
        <a href={props.href} target={props.target} rel={props.rel} className={props.className}>{props.children}</a>
    );
}