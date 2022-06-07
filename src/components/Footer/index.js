import React from 'react';
import {FooterBackgroundWrapper, FooterWrapper} from "./style";
import {FooterDescFont} from "../../font";

const Footer = () => {
    return (
        <FooterBackgroundWrapper>
            <FooterWrapper>
                <FooterDescFont>
                    {`© ${new Date().getFullYear()} Donghyun Kim`}
                </FooterDescFont>
            </FooterWrapper>
        </FooterBackgroundWrapper>
    );
};

export default Footer;