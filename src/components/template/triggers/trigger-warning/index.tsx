import Trigger from "../trigger";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";

export default function TriggerWarning(props: {children: string}) {

    const icon = <FaExclamationTriangle />

    return (
        <Trigger className="trigger-warning" icon={icon} children={props.children} />
    );
}