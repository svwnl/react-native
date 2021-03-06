/**
 * https://elephant-api.herokuapp.com/?ref=public-apis
 *
 * List all elephants
 * https://elephant-api.herokuapp.com/elephants
 *
 * Random elephant
 * https://elephant-api.herokuapp.com/elephants/random
 *
 * By sex
 * https://elephant-api.herokuapp.com/elephants/sex/{SEX}
 *
 * By name
 * https://elephant-api.herokuapp.com/elephants/name/{NAME}
 * FYI Names with a space do not seem to return data..?
 * i.e
 * https://elephant-api.herokuapp.com/elephants/name/topsy OK
 * https://elephant-api.herokuapp.com/elephants/name/Black Diamond empty
 * https://elephant-api.herokuapp.com/elephants/name/Black%20Diamond empty
 *
 *
 * By species
 * https://elephant-api.herokuapp.com/species/{SPECIES}
 *
 * @returns {Promise<void>}
 */

export const fetchElephants = async () => {

    // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    // Send your request through a CORS proxy, like this:
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://elephant-api.herokuapp.com/elephants'
    fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(
            function(jsonData) {
                console.table(jsonData);
                return JSON.stringify(jsonData);
            }
            //data => {
            //console.table(data);
            //console.log('data fetched');
            //return data;
        //}
        )
        .catch(e => {
            console.log(e);
            return e;
        });
};
