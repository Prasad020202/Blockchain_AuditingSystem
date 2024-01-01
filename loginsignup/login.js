// Initialize Firebase using the firebaseConfig from firebaseConfig.js
firebase.initializeApp(firebaseConfig);

// Function to handle the login process
function login() {
    const email = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            const db = firebase.firestore();

            // Fetch user data from Firestore based on the user's UID
            db.collection('users').doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const userData = doc.data();

                        // Check for specific fields to determine the user's role
                        if (userData.officeID) {
                            // User is a Govt. Body
                            window.location.href = 'http://localhost:8080/dashboards/dashboard.html';
                        } else if (userData.companyName) {
                            // User is a Contractor
                            window.location.href = 'http://localhost:8080/dashboards/dashboard0.html';
                        } else if (userData.employeeID) {
                            // User is an Auditor
                            window.location.href = 'http://localhost:8080/dashboards/dashboard1.html';
                        } else {
                            // Handle other scenarios here
                            console.log("Unknown role");
                        }
                    } else {
                        console.log("User data not found");
                    }
                })
                .catch((error) => {
                    // Handle Firestore data retrieval errors
                    console.error(error);
                });
        })
        .catch((error) => {
            // Handle login errors
            console.error(error);
        });
}
