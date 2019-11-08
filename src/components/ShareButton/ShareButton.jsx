import React from 'react';
import PropTypes from 'prop-types';
import {GlobalStyle, Wrapper, Button, Tooltip, TooltipIconBox, TooltipIcon, TooltipBox} from './styled';
import InlineSVG from 'svg-inline-react';
import ShareIcon from './share-icon.svg';
import SocialButton from '../SocialButton/SocialButton';
import useShareButton from './useShareButton';

const ShareButton = ({className, style, type, textButton, countShare, socialList}) => {

	const {tooltipState, toggleTooltip, counts, propsSocialsShare} = useShareButton(type, countShare, socialList);

	return (
		<Wrapper className={className} style={style}>
			<GlobalStyle />
			{type === 'list' || <Button onClick={toggleTooltip}>
				<InlineSVG svg={ShareIcon} />
				{textButton}
            </Button>}

			{tooltipState && <Tooltip type={type}>
                <TooltipBox type={type}>
                    {socialList.map(({name, textButton}) => (
                        <SocialButton socialName={name}
                                      textButton={textButton}
                                      counter={countShare}
                                      count={counts[name]}
                                      urlShare={propsSocialsShare[name].urlShare}
                                      key={name}
                        />
                    ))}
                </TooltipBox>
            </Tooltip>}
		</Wrapper>
	);
};

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
