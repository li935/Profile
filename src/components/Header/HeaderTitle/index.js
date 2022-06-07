import React from 'react';
import {HeaderTitleWrapper} from "./style";
import {CustomHeaderFont} from "../../../font";

const HeaderTitle = () => {
    return (
        <HeaderTitleWrapper>
            <CustomHeaderFont>
                Profile
            </CustomHeaderFont>
        </HeaderTitleWrapper>
    );
};

export default HeaderTitle;