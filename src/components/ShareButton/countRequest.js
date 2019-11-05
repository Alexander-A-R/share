import axios from 'axios';

/**
 * 1. Мне кажется все опереции которые тут есть излишни, не проще было бы сделать
 *    к каждой соц. сети по отдельности. И если одна соц сеть сломается, то остальные не пострадают
 * */
function countRequest(socialList, propsSocialsShare) {
    function getCountsFromResponses(responses) {
        const countObject = {};

        for (const responseName of Object.keys(responses)) {
            if (responses[responseName].status === 200) {
                if (responseName !== 'facebook') {
                    /**
                     * а зачем все в строку переводить?
                     * */
                    countObject[responseName] = String(responses[responseName].data.count);
                } else {
                    countObject[responseName] = String(responses[responseName].data.engagement.share_count);
                }
            }
        }

        return countObject;
    }

    async function getCounters() {
        const responses = {};
        const requests = [];

        /**
         * document.location.href делает тоже самое
         * */
        const url = document.location.origin + document.location.pathname;

        socialList.forEach(social => {
            const {urlCount} = propsSocialsShare[social.name];
            const urlRequest = urlCount.replace('{url}', url);
            requests.push(urlRequest);
        });

        function promiseAxios(url) {
            /**
             * рекомендую async/await использовать
             * */
            return axios(url)
                .then(value => {
                    return {status: 'fulfilled', value: value};
                })
                .catch(error => {
                    return {status: 'rejected', reason: error};
                });
        }

        const promiseResponses = await Promise.all(requests.map(promiseAxios));

        socialList.forEach(social => {
            const response = promiseResponses.shift();
            if (response.status === 'fulfilled') {
                responses[social.name] = response.value;
            }
            else if (response.status === 'rejected') {
                console.error(`${social.name}: ${response.reason}`);
            }
        });
        return getCountsFromResponses(responses)
    }

    return getCounters();
}

export default countRequest;