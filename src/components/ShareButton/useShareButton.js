import {useState, useEffect} from 'react';
import countRequest from './countRequest';

function useShareButton(type, socialList, propsSocialsShare) {
    const [tooltipState, setTooltip] = useState(type === 'list');
    const [makeRequest, setMakeRequest] = useState(true);
    const [counts, setCounts] = useState({});

    useEffect(() => {
        if (makeRequest && tooltipState) {
            makeRequestCounters();
        }
    });

    const toggleTooltipState = () => {
        setTooltip(!tooltipState);
    };

    const makeRequestCounters = () => {
        if (makeRequest) {
            countRequest(socialList, propsSocialsShare)
                .then(countsObject => setCounts(countsObject));
            setMakeRequest(false);
        }
    };

    return [
        tooltipState,
        toggleTooltipState,
        counts,
        makeRequestCounters
    ];
}

export default useShareButton;