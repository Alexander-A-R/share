import {useState, useEffect} from 'react';
import countRequest from './countRequest';

function useShareButton(type, socialList, propsSocialsShare) {
    // не понял зачем ты присваешьваешь в initialState type === 'list'
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
            /**
             * async/await
             * */
            countRequest(socialList, propsSocialsShare)
                .then(countsObject => setCounts(countsObject));
            setMakeRequest(false);
        }
    };

    /**
     * Рекомендую отдавать объект, а не массив
     * */
    return [
        tooltipState,
        toggleTooltipState,
        counts,
        makeRequestCounters
    ];
}

export default useShareButton;