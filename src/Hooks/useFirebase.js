import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, updateProfile, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [admin, setAdmin] = useState(false);
    

    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                history.replace('/');
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const googleSignIn = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    const userLogin = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError('');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
        })
            .finally(() => setLoading(false));

    }
    
    useEffect(() => {
        fetch(`https://hidden-beach-70560.herokuapp.com/admin?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data[0]?.email)
            })
    }, [user.email])

    useEffect(() => {
        const unsibscribed = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsibscribed;
    }, [auth])

    return {
        user,
        registerUser,
        logOut,
        userLogin,
        loading,
        error,
        googleSignIn,
        admin
    }
}

export default useFirebase;