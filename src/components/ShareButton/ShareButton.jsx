import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Wrapper,
	Button,
	Icon,
	Tooltip,
	TooltipIcon,
	TooltipBox,
	ButtonSocialShare,
	LabelSocial,
	Counter
} from './styled';
import {countRequest} from "./countRequest";



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
		counter: PropTypes.bool
	};

function Share(props) {
	const {
		className,
		style,
		type,
		textButton,
		countShare,
		socialList
	} = props;

	const [tooltipState, setTooltip] = useState(type === 'list');
	const [makeRequest, setMakeRequest] = useState(true);
	const [count, setCount] = useState({});

	const propsSocialsShare = {
		vk: {
			urlShare: 'https://vk.com/share.php?&url={url}',
			urlCount: 'https://zaycev.net/api/external/social/vk?url={url}',
			params: 'width=650, height=570'
		},
		mail: {
			urlShare: 'http://connect.mail.ru/share?share_url={url}',
			urlCount: 'https://zaycev.net/api/external/social/mail?url={url}',
			params: 'width=550, height=360'
		},
		ok: {
			urlShare: 'https://connect.ok.ru/offer?url={url}',
			urlCount: 'https://zaycev.net/api/external/social/ok?url={url}',
			params: 'width=550, height=360'
		},
		facebook: {
			urlShare: 'http://www.facebook.com/sharer/sharer.php?u={url}',
			urlCount: 'https://graph.facebook.com/?id={url}&fields=engagement&access_token=554151405320632|TC5PKffr4rEmq5idMRyGsmdhTzg',
			params: 'width=600, height=500'
		},
		twitter: {
			urlShare: 'http://twitter.com/intent/tweet?url={url}',
			urlCount: 'https://counts.twitcount.com/counts.php?url={url}',
			params: 'width=600, height=450'
		}
	};

	function toggleTooltip() {
		setTooltip(!tooltipState);
		if (makeRequest) {
			countRequest(socialList, propsSocialsShare)
				.then(responses => setCount(responses));
		}
		setMakeRequest(false);
	}

    if (type === 'list' && makeRequest) {
        countRequest(socialList, propsSocialsShare)
            .then(responses => setCount(responses));
        setMakeRequest(false);
    }

	return (
		<Wrapper className={className} style={style}>

			{type === 'list' ||
            <Button onClick={toggleTooltip}>
                <Icon/>
                {textButton}
            </Button>}

			{tooltipState &&
            <Tooltip type={type}>
                {type === 'list' || <TooltipIcon />}
                <TooltipBox type={type}>
                    {socialList.map(({name, textButton}) => (
                        <SocialButton socialName={name}
                                      textButton={textButton}
                                      counter={countShare}
                                      count={count[name]}
                                      propsSocialShare={propsSocialsShare[name]}
                                      key={name}
                        />
                    ))}
                </TooltipBox>
            </Tooltip>}
		</Wrapper>
	);
}

Share.propTypes = {
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	type: PropTypes.oneOf(['button', 'list']),
	textButton: PropTypes.string,
	countShare: PropTypes.bool,
	socialList: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter']),
		textButton: PropTypes.string
	}))
};

Share.defaultProps = {
	type: 'button',
	textButton: 'Поделиться',
	countShare: true,
	socialList: [
		{name: 'vk', textButton: 'Вконтакте'},
		{name: 'mail', textButton: 'Мой мир'},
		{name: 'ok', textButton: 'Одноклассники'},
		{name: 'facebook', textButton: 'Facebook'},
		{name: 'twitter', textButton: 'Twitter'}
	]
};

export default Share;
