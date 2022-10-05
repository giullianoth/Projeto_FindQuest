export default function Input(props: {
    type: "text" | "email" | "password" | undefined,
    name: string,
    id: string,
    placeholder?: string,
    value?: string,
    className?: string
}) {
    return (
        <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} className={props.className} />
    );
}