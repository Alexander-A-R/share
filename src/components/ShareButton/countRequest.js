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
        const url = document.location.origin + document.location.pathname;

        for (const social of socialList) {
            const {urlCount} = propsSocialsShare[social.name];
            const requestUrl = urlCount.replace('{url}', url);

            try {
                const response = await axios(requestUrl);

                if (response.status === 200) {
                    responses[social.name] = response;
                }
            } catch (err) {
                console.error(err);
            }
        }
        return getCountsFromResponses(responses);
    }

    return getCounters();
}

export default countRequest;