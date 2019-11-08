import {useState, useEffect} from 'react';
import countRequest from './countRequest';

function useShareButton(type, countShare, socialList) {
    const [tooltipState, setTooltip] = useState(type === 'list');       //это чтобы при типе лист сразу делался запрос счетчиков
    const [makeRequest, setMakeRequest] = useState(countShare);
    const [counts, setCounts] = useState({});

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

    useEffect(() => {
        if (tooltipState) {
            makeRequestCounters();
        }
    });

    const makeRequestCounters = async () => {
        if (makeRequest) {
            setMakeRequest(false);
            setCounts(await countRequest(socialList, propsSocialsShare));
        }
    };

    const toggleTooltip = () => {
        setTooltip(!tooltipState);
        makeRequestCounters();
    };

    return {
        tooltipState,
        toggleTooltip,
        counts,
        propsSocialsShare
    };
}

export default useShareButton;