import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [idToken, setIdToken] = useState('')

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();


    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                const direction = location?.state?.from || '/'
                history.push(direction)
                saveUser(user.email, user.displayName, "PUT")
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    const createUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser)


                //    set user to db
                saveUser(email, name, "POST")


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                history.push('/')
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    const login = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const direction = location?.state?.from || '/'
                history.push(direction)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setIdToken(idToken)
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.Admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // set user to db 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        createUser,
        error,
        logout,
        login,
        isLoading,
        googleSignIn,
        isAdmin,
        idToken
    }

}
export default useFirebase;