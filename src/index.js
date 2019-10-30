import React from 'react';
import ReactDOM from 'react-dom';
import Share from './components/ShareButton/ShareButton';

const socialList = [
	{name: 'vk', textButton: 'Вконтакте'},
	{name: 'mail', textButton: 'Мой мир'},
	{name: 'ok', textButton: 'Одноклассники'},
	{name: 'facebook', textButton: 'Facebook'},
	{name: 'twitter', textButton: 'Twitter'}
];

ReactDOM.render(
	<Share
		style={{position: 'relative', left: '10%', top: '0'}}
		type="button"
		textButton="Поделиться"
		socialList={socialList}
	/>,
	document.getElementById('root')
);
