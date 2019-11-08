import axios from 'axios';

function countRequest(socialList, propsSocialsShare) {

    function getCountsFromResponses(responses) {
        const countObject = {};

        for (const responseName of Object.keys(responses)) {
            if (responses[responseName].status === 200) {

                switch(responseName) {
                    case 'facebook':
                        try {
                            countObject[responseName] = responses[responseName].data.engagement.share_count;
                        } catch(err) {
                            console.error(err);
                        }
                        break;
                    default:
                        try {
                            countObject[responseName] = responses[responseName].data.count;
                        } catch(err) {
                            console.error(err);
                        }
                        break;
                }
            }
        }
        return countObject;
    }

    async function getCounters() {
        const responses = {};
        const requests = [];

        const url = document.location.href;

        socialList.forEach(({name}) => {
            const {urlCount} = propsSocialsShare[name];
            const urlRequest = urlCount.replace('{url}', url);
            requests.push(urlRequest);
        });

        async function promiseAxios(url) {
            return await axios(url).catch(err => console.error(err));
        }

        const promiseResponses = await Promise.all(requests.map(promiseAxios));

        socialList.forEach(({name}) => {
            const response = promiseResponses.shift();
            if (response) {
                responses[name] = response;
            }
        });
        return getCountsFromResponses(responses);
    }

    return getCounters();
}

export default countRequest;