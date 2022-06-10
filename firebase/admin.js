const admin = require('firebase-admin');
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require('firebase-admin/firestore');

const serviceAccount = require('../config/key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL:
//     'https://studentforum-f11ce-default-rtdb.europe-west1.firebasedatabase.app/',
});



module.exports = {
    admin,
    getFirestore,
    Timestamp,
    FieldValue,
}