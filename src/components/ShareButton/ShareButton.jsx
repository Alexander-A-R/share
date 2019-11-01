import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Button, Icon, Tooltip, TooltipIcon, TooltipBox} from './styled';
import SocialButton from './SocialButton';
import useShareButton from './useShareButton';

function ShareButton(props) {
	const {
		className,
		style,
		type,
		textButton,
		countShare,
		socialList
	} = props;

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

	const [tooltipState, toggleTooltipState, counts, makeRequestCounters] = useShareButton(type, socialList, propsSocialsShare);

	function toggleTooltip() {
		toggleTooltipState();
		makeRequestCounters();
	}

	return (
		<Wrapper className={className} style={style}>

			{type === 'list' || <Button onClick={toggleTooltip}>
             <Icon/>
				{textButton}
            </Button>}

			{tooltipState && <Tooltip type={type}>
                {type === 'list' || <TooltipIcon />}
                <TooltipBox type={type}>
                    {socialList.map(({name, textButton}) => (
                        <SocialButton socialName={name}
                                      textButton={textButton}
                                      counter={countShare}
                                      count={counts[name]}
                                      propsSocialShare={propsSocialsShare[name]}
                                      key={name}
                        />
                    ))}
                </TooltipBox>
            </Tooltip>}
		</Wrapper>
	);
}

ShareButton.propTypes = {
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

ShareButton.defaultProps = {
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

export default ShareButton;
