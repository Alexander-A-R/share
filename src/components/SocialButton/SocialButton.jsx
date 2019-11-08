import React from 'react';
import {ButtonSocialShare, Counter, LabelSocial} from "./styled";
import PropTypes from "prop-types";


const SocialButton = ({socialName, textButton, counter, count, urlShare}) => {

    const url = document.location.href;
    const requestUrl = urlShare.replace('{url}', url);

    return (
        <ButtonSocialShare socialName={socialName} href={requestUrl} target={'_blank'}>
            <LabelSocial socialName={socialName}>{textButton}</LabelSocial>
            {counter && <Counter>{count}</Counter>}
        </ButtonSocialShare>
    );
};

SocialButton.propTypes = {
    propsSocialShare: PropTypes.shape({
        urlShare: PropTypes.string,
        urlCount: PropTypes.string,
        params: PropTypes.string
    }),
    textButton: PropTypes.string,
    socialName: PropTypes.string,
    counter: PropTypes.bool
};

export default SocialButton;