import React from 'react';
import {HeaderLinkRef, HeaderLinkWrapper, Logo} from "./style";
import {LINK} from "../../../constants";

const HeaderLink = () => {
    return (
        <HeaderLinkWrapper>
            <HeaderLinkRef href={LINK.NOTION} target={"_blank"}>
                <Logo src={"img/Notion-icon.svg"} alt={"Notion"}/>
            </HeaderLinkRef>
            <HeaderLinkRef href={LINK.GITHUB} target={"_blank"}>
                <Logo src={"img/Github-icon.svg"} alt={"Github"}/>
            </HeaderLinkRef>
            <HeaderLinkRef href={LINK.LINKED_IN} target={"_blank"}>
                <Logo src={"img/LinkedIn-icon.svg"} alt={"LinkedIn"}/>
            </HeaderLinkRef>
        </HeaderLinkWrapper>
    );
};

export default HeaderLink;