import axios from 'axios';

function countRequest(socialList, propsSocialsShare) {
    function getCountsFromResponses(responses) {
        const countObject = {};

        for (const responseName of Object.keys(responses)) {
            if (responseName !== 'facebook') {
                countObject[responseName] = String(responses[responseName].data.count);
            } else {
                countObject[responseName] = String(responses[responseName].data.engagement.share_count);
            }
        }

        return countObject;
    }

    async function getCounters() {
        const responses = {};
        const requests = [];

        const url = document.location.origin + document.location.pathname;

        socialList.forEach(social => {
            const {urlCount} = propsSocialsShare[social.name];
            const urlRequest = urlCount.replace('{url}', url);
            requests.push(urlRequest);
        });

        const promiseResponses = await Promise.allSettled(requests.map( url => axios(url)));

        socialList.forEach(social => {
            const response = promiseResponses.shift();
            if (response.status === 'fulfilled') {
                responses[social.name] = response.value;
            }
        });
        return getCountsFromResponses(responses)
    }

    return getCounters();
}

export default countRequest;