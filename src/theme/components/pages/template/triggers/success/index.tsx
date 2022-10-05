import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import Trigger from "../trigger";

export default function Success(props: {children: string, outline?: boolean}) {

    const icon = <FaRegCheckCircle />
    let classOutline = (props.outline ? " trigger-outline" : "");

    return (
        <Trigger className={`trigger-success${classOutline}`} icon={icon} children={props.children} />
    );
}