import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import Trigger from "../trigger";

export default function Info(props: {children: string, outline?: boolean}) {

    const icon = <FaInfo />
    let classOutline = (props.outline ? " trigger-outline" : "");

    return (
        <Trigger className={`trigger-info${classOutline}`} icon={icon} children={props.children} />
    );
}