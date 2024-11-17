const { default: axios } = require("axios");
const { SOCKET_SERVER_URL } = require("../config/server.config");

    function sendPayloadSocketService(payload) {
        axios.post(`${SOCKET_SERVER_URL}/sendpayload`, payload)
            .then(response => {
                console.log('Response Data:', response.data); // Handle the response
            })
            .catch(error => {
                console.error('Error:ooooooooooo', error); // Handle errors
            });
    }



module.exports = sendPayloadSocketService;