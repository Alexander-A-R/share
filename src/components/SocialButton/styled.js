import styled from "styled-components";

const color = {
    vk: '#526e8f',
    mail: '#00468c',
    ok: '#f59310',
    facebook: '#2851a3',
    twitter: '#00b7ec'
};

const backgroundImage = {
    vk: `url(${process.env.PUBLIC_URL}/icons/vk.svg)`,
    mail: `url(${process.env.PUBLIC_URL}/icons/mail.svg)`,
    ok: `url(${process.env.PUBLIC_URL}/icons/ok.svg)`,
    facebook: `url(${process.env.PUBLIC_URL}/icons/facebook.svg)`,
    twitter: `url(${process.env.PUBLIC_URL}/icons/twitter.svg)`
};

const backgroundImageHover = {
    vk: `url(${process.env.PUBLIC_URL}/icons/vk_hover.svg)`,
    mail: `url(${process.env.PUBLIC_URL}/icons/mail_hover.svg)`,
    ok: `url(${process.env.PUBLIC_URL}/icons/ok_hover.svg)`,
    facebook: `url(${process.env.PUBLIC_URL}/icons/facebook_hover.svg)`,
    twitter: `url(${process.env.PUBLIC_URL}/icons/twitter_hover.svg)`
};


export const ButtonSocialShare = styled.a`
        display: block;
        text-decoration: none;
        margin: 7px;
        min-width: 13em;
        position: relative;
        background: #fff;
        border-width: 1px;
        border-style: solid;
        border-color: ${({socialName}) => color[socialName]};
        color: ${({socialName}) => color[socialName]};
        line-height: 1.7;
        cursor: pointer;
        font-family: Arial;
        
        &:hover{
            background-color: ${({socialName}) => color[socialName]};
            color: #fff;
        }
`;
export const LabelSocial = styled.span`
        padding-left: 1.8em;
        
        ::before{
            content: '';
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            background-image: ${({socialName}) => backgroundImage[socialName]};
            width: 20px;
            height: 16px; 
            top: 3px;
            left: 4px;
        }
        ${ButtonSocialShare}:hover &:before{
        	background-image: ${({socialName}) => backgroundImageHover[socialName]};
        }
`;

export const Counter = styled.span`
        padding-right: 6px;
        position: absolute;
        right: 0;
`;
