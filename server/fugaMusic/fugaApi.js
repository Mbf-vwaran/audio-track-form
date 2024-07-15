import axios from 'axios';

async function fugaFunction(gsToken, fugaData) {

    try {
        const response = await axios.post(`https://next.fugamusic.com/api/v2`,
            fugaData,
            {
                headers: {
                    'Authorization': `Bearer ${req.headers["gstoken"]}`
                }
            }
        );
        return response.data;
    }
    catch (error) {
        console.error('unable to authorize, having some issues: ', error.response ? error.response.data : error.message);
        throw error

    }
}

async function getFugaData(gsToken) {

    try {
        const response = await axios.get(`https://next.fugamusic.com/api/v2/products/`,
            {
                headers: {
                    'Authorization': `Bearer ${req.headers["gstoken"]}`
                }
            }
        );
        return response.data;
    }
    catch (error) {
        console.error('unable to authorize, having some issues:', error.response ? error.response.data : error.message);
        throw error

    }
}

module.exports = {
    fugaFunction,
    getFugaData
}