import styled from "styled-components";


export const Wrapper = styled.div`
        display: inline-block;
`;

export const Button = styled.div`
		@import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
		display: flex;
		align-items: center;
		justify-content: center;
        position: relative; 
        padding: 10px;
        background-color: #fff;
        color: #00aadc;
        border: 1px solid #00aadc;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        height: 18px;
        transition: .2s background-color;
        font-family: 'Roboto',arial,sans-serif;
        
        &:hover{
            background-color: #e5f6fb;
        }
`;
export const Icon = styled.i`
		display: inline-block;
        height: 17px;
        width: 17px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-image: url(https://zaycev.net/static/less/buttons/share/share-icon.svg);
`;
export const Tooltip = styled.div`
        display: block;
        position: ${props => props.type === 'list' ? 'static' : 'absolute'};
        left: -50px;
        top: 40px;
        padding-top: ${props => props.type === 'list' ? '0' : '9px'};
        font-size: 14px;
`;
export const TooltipIcon = styled.div`
        background-image: url(https://zaycev.net/static/images/icons.png);
        background-position: -146px -28px;
        height: 12px;
        width: 30px;
        margin: 0 auto;
`;
export const TooltipBox = styled.div`
        box-shadow: ${props => props.type === 'list' ? 'none' : '0 0 5px 0 rgba(0,0,0,.25)'};
        background: #fff;
        padding: ${props => props.type === 'list' ? '0' : '14px'};
`;
export const ButtonSocialShare = styled.div`
        margin: 7px;
        min-width: 13em;
        position: relative;
        background: #fff;
        border-width: 1px;
        border-style: solid;
        border-color: ${props => props.socialName === 'vk' ? '#526e8f'
                            : props.socialName === 'mail' ? '#00468c'
                            : props.socialName === 'ok' ? '#f59310'
                            : props.socialName === 'facebook' ? '#2851A3'
                            : props.socialName === 'twitter' ? '#00b7ec' : '#999'
    };
        color: ${props => props.socialName === 'vk' ? '#526e8f'
                     : props.socialName === 'mail' ? '#00468c'
                     : props.socialName === 'ok' ? '#f59310'
                     : props.socialName === 'facebook' ? '#2851A3'
                     : props.socialName === 'twitter' ? '#00b7ec' : '#999'
    };
        line-height: 1.7;
        cursor: pointer;
        font-family: "Helvetica Neue", Arial, sans-serif;
        
        &:hover{
            background-color: ${props => props.socialName === 'vk' ? '#526e8f'
                                    : props.socialName === 'mail' ? '#00468c'
                                    : props.socialName === 'ok' ? '#f59310'
                                    : props.socialName === 'facebook' ? '#2851A3'
                                    : props.socialName === 'twitter' ? '#00b7ec' : '#999'
    };
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
            background-image: ${props => props.socialName === 'vk' ? `url(${process.env.PUBLIC_URL}/icons/vk.svg)`
                                     : props.socialName === 'mail' ? `url(${process.env.PUBLIC_URL}/icons/mail.svg)`
                                     : props.socialName === 'ok' ? `url(${process.env.PUBLIC_URL}/icons/ok.svg)`
                                     : props.socialName === 'facebook' ? `url(${process.env.PUBLIC_URL}/icons/facebook.svg)` 
                                     : props.socialName === 'twitter' ? `url(${process.env.PUBLIC_URL}/icons/twitter.svg)` : ''
    };
            width: 20px;
            height: 16px; 
            top: 3px;
            left: 4px;
        }
        ${ButtonSocialShare}:hover &:before{
        	background-image: ${props => props.socialName === 'vk' ? `url(${process.env.PUBLIC_URL}/icons/vk_hover.svg)`
                                : props.socialName === 'mail' ? `url(${process.env.PUBLIC_URL}/icons/mail_hover.svg)`
                                : props.socialName === 'ok' ? `url(${process.env.PUBLIC_URL}/icons/ok_hover.svg)` 
                                : props.socialName === 'facebook' ? `url(${process.env.PUBLIC_URL}/icons/facebook_hover.svg)`
                                : props.socialName === 'twitter' ? `url(${process.env.PUBLIC_URL}/icons/twitter_hover.svg)` : ''
    };
        }
`;

export const Counter = styled.span`
        padding-right: 6px;
        position: absolute;
        right: 0;
`;
