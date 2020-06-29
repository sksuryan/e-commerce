const functions = require('firebase-functions');
const admin =  require('firebase-admin');
const cors = require('cors')({origin: true});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp();

exports.getLatest = functions.https.onRequest((request, response) => {
    return cors(request, response,async () => {
        const productRef = admin.firestore().collection('/products');
        const latestOffers = admin.firestore().collection('/latest-offers');

        let productPromise = [];
        let snapshot;
        let products = [];

        try {
            snapshot = await latestOffers.get();
        } catch (err){
            console.log(err);
        }

        snapshot.forEach((doc) => productPromise.push(productRef.doc(doc.data().product).get()));

        const docs =  await Promise.all(productPromise);

        docs.forEach(doc => {
            if(doc.data())
                products.push({...doc.data(), id: doc.id})
        });

        response.jsonp(products);
    })
});