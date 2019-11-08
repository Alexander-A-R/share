import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
       @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
`;

export const Wrapper = styled.div`
        display: inline-block;
`;

export const Button = styled.button`
		display: inline-flex;
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
        outline: none;
        transition: .2s background-color;
        font-family: 'Roboto', sans-serif;
        
        :hover{
            background-color: #e5f6fb;
        }
        ::before{
            content: '';
            height: 17px;
            width: 17px;
            margin-right: 10px; 
            background-repeat: no-repeat;
            background-image: url(https://zaycev.net/static/less/buttons/share/share-icon.svg);
        }
`;

export const Tooltip = styled.div`
        display: block;
        position: ${({type}) => type === 'list' ? 'static' : 'absolute'};
        left: -50px;
        top: 55px;
        padding-top: ${({type}) => type === 'list' ? '0' : '9px'};
        font-size: 14px;
`;

export const TooltipBox = styled.div`
        box-shadow: ${({type}) => type === 'list' ? 'none' : '0 0 5px 0 rgba(0, 0, 0, .25)'};
        background: #fff;
        padding: ${({type}) => type === 'list' ? '0' : '14px'};
        
        ::before{
            display: ${({type}) => type === 'list' ? 'none' : ''};
            content: '\\25b2';
            color: #fff;
            font-size: 14px;
            position: absolute;
            top: -5px;
            left: 105px;
            transform: scaleX(2.5);
            text-shadow: 0 -2px 2px rgba(0, 0, 0, .25);
        }
`;