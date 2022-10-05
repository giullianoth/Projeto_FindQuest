import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import Trigger from "../trigger";

export default function Error(props: {children: string, outline?: boolean}) {

    const icon = <FaRegTimesCircle />
    let classOutline = (props.outline ? " trigger-outline" : "");
    
    return (
        <Trigger className={`trigger-error${classOutline}`} icon={icon} children={props.children} />
    );
}