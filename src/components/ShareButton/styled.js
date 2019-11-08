import styled from "styled-components";

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
        
`;

export const ButtonLabel = styled.span`
        margin-left: 10px;
`;

export const Tooltip = styled.div`
        position: ${({type}) => type === 'list' ? 'static' : 'absolute'};
        left: -50px;
        top: 65px;
        background: #fff;
        font-size: 14px;
        padding: ${({type}) => type === 'list' ? '0' : '14px'};
        box-shadow: ${({type}) => type === 'list' ? 'none' : '0 0 5px 0 rgba(0, 0, 0, .25)'};
        
        ::before{
            display: ${({type}) => type === 'list' ? 'none' : ''};
            content: '\\25b2';
            color: #fff;
            font-size: 14px;
            position: absolute;
            top: -13px;
            left: 105px;
            transform: scaleX(2.5);
            text-shadow: 0 -2px 2px rgba(0, 0, 0, .25);
        }
`;