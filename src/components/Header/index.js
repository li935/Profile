import React from 'react';
import {HeaderBackgroundWrapper, HeaderWrapper} from "./style";
import HeaderTitle from "./HeaderTitle";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <HeaderBackgroundWrapper>
            <HeaderWrapper>
                <HeaderTitle/>
                <HeaderLink/>
            </HeaderWrapper>
        </HeaderBackgroundWrapper>
    );
};

export default Header;