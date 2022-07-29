import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import Trigger from "../trigger";

export default function Info(props: {children: string}) {

    const icon = <FaInfo />

    return (
        <Trigger className="trigger-info" icon={icon} children={props.children} />
    );
}