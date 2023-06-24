// Import the Firebase SDK and initialize an app
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const functions = require("firebase-functions");
const cors = require('cors')({origin: true});

initializeApp();

// Function
exports.customizeProduct = functions.https.onRequest(async (request, response) => {
    // Enable CORS using the `cors` express middleware.
    cors(request, response, async () => {

        // Check for POST request
        if(request.method !== "POST"){
            response.status(400).send('Please send a POST request');
            return;
        }

        // Get the API key from the request header
        const APIKEY = functions.config().transactioncloud.key;

        // Get the data from the request body
        const data = request.body;

        // Check if the data is valid
        if (!data) {
            response.status(400).send('Please provide a valid data');
            return;
        }

        // Check if the type is valid.
        if (data.type === 1) {
            var PID = functions.config().transactioncloud.pid1;
        } else if (data.type === 2) {
            var PID = functions.config().transactioncloud.pid2;
        } else {
            response.status(400).send('Please provide a valid type');
            return;
        }

        const amount = data.amount;
        // Set the url, headers and body for the API request
        let url = `https://api.transaction.cloud/v1/customize-product/${PID}`;
        let headers = {
            'Authorization': APIKEY,
            'Content-Type': 'application/json'
        };

        // Set the body
        let body = JSON.stringify({
            "prices": [
                {
                    "currency":"USD", 
                    "value" : amount
                }
            ]
        });


        // Send the API request
        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            });
            const d = await resp.json();
            return response.status(200).send(d);
        } catch (error) {
            return response.status(400).send(error.message);
        }
    });
});
