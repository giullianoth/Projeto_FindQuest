export default function MobileIcon(props: { onClick: any, active: string }) {
    return (
        <span onClick={props.onClick} className={ `menu_hamb_icon ${props.active}` }></span>
    );
}
