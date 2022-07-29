import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import Trigger from "../trigger";

export default function Error(props: {children: string}) {

    const icon = <FaRegTimesCircle />
    
    return (
        <Trigger className="trigger-error" icon={icon} children={props.children} />
    );
}