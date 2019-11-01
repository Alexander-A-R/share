import React from 'react';
import {ButtonSocialShare, Counter, LabelSocial} from "./styled";
import PropTypes from "prop-types";

/**
 * @return {null}
 */
function SocialButton(props) {

    if (!props.propsSocialShare) {
        return null;
    }

    const {
        socialName,
        textButton,
        counter,
        count,
        propsSocialShare
    } = props;

    const {urlShare, params} = propsSocialShare;

    function popupShare() {
        const url = document.location.origin + document.location.pathname;
        const requestUrl = urlShare.replace('{url}', url);

        window.open(requestUrl, 'windowShare', params);
    }

    return (
        <ButtonSocialShare socialName={socialName} onClick={popupShare}>
            <LabelSocial socialName={socialName}>{textButton}</LabelSocial>
            {counter && <Counter>{count}</Counter>}
        </ButtonSocialShare>
    );
}

SocialButton.propTypes = {
    propsSocialShare: PropTypes.shape({
        urlShare: PropTypes.string,
        urlCount: PropTypes.string,
        params: PropTypes.string
    }),
    textButton: PropTypes.string,
    socialName: PropTypes.string,
    counter: PropTypes.bool,
    count: PropTypes.string
};

export default SocialButton;