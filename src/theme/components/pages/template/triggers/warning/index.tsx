import Trigger from "../trigger";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";

export default function Warning(props: {children: string, outline?: boolean}) {

    const icon = <FaExclamationTriangle />
    let classOutline = (props.outline ? " trigger-outline" : "");

    return (
        <Trigger className={`trigger-warning${classOutline}`} icon={icon} children={props.children} />
    );
}