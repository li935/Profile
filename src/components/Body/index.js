import React from 'react';
import {BodyBackgroundWrapper, BodyWrapper, LeftBodyWrapper, RightBodyWrapper} from "./style";
import LeftBodyCodeArea from "./LeftBody/LeftBodyCodeArea";
import LeftBodyDescArea from "./LeftBody/LeftBodyDescArea";
import LeftBodyPostArea from "./LeftBody/LeftBodyPostArea";
import RightBody from "./RightBody";

const Body = () => {
    return (
        <BodyBackgroundWrapper>
            <BodyWrapper container maxWidth={"sm"}>
                <LeftBodyWrapper item xs={12} sm={6}>
                    <LeftBodyCodeArea/>
                    <LeftBodyDescArea/>
                    <LeftBodyPostArea/>
                </LeftBodyWrapper>
                <RightBodyWrapper item xs={12} sm={6}>
                    <RightBody/>
                </RightBodyWrapper>
            </BodyWrapper>
        </BodyBackgroundWrapper>
    );
};

export default Body;