import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import Trigger from "../trigger";

export default function TriggerSuccess(props: {children: string}) {

    const icon = <FaRegCheckCircle />

    return (
        <Trigger className="trigger-success" icon={icon} children={props.children} />
    );
}