import TabButton from "../TabButton/TabButton";

export default function Tabs({children, buttons, ButtonsContainer = "div"}) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            <div id="tab-content">{children}</div>
        </>
    )
}
