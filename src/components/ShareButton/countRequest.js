import axios from "axios";


export function countRequest(socialList, propsSocialsShare) {


    async function getCounters() {

        let responses = {};
        const url = document.location.origin + document.location.pathname;
        for (let social of socialList) {
            const socialName = social.name;
            const urlCount = propsSocialsShare[socialName].urlCount;
            const requestUrl = urlCount.replace('{url}', url);


            try {
                const response = await axios(requestUrl);

                if (response.status === 200) {
                    responses[socialName] = response;
                }
            } catch (err) {
                console.error(err);
            }
        }
        return getCountsFromResponses(responses);
    }

    function getCountsFromResponses(responses) {
        let countObject = {};

        for (let responseName in responses) {
            if (responseName !== 'facebook') {
                countObject[responseName] = responses[responseName].data.count;
            } else {
                countObject[responseName] = responses[responseName].data.engagement.share_count;
            }
        }
        return countObject;
    }

    return getCounters();
}