import firebase from 'firebase/app'

  /** --------------------------------------------------------------------------------------------- **/
  /** -------------------------------------- END: Import Scripts ---------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

export default async ({ res }, inject) => {
  const options = {"config":{"apiKey":"AIzaSyCcOobsVFzEB9uwPiR24PTepry9YmiHEzA","authDomain":"spacex-65b09.firebaseapp.com","databaseURL":"https:\u002F\u002Fspacex-65b09.firebaseio.com","projectId":"spacex-65b09","storageBucket":"spacex-65b09.appspot.com","messagingSenderId":"145811423911","appId":"1:145811423911:web:99107f67941e09a0a9d182"},"services":{"auth":true,"realtimeDb":true}}
  const firebaseConfig = options.config

  // Resolve the firebase app corresponding to the server user
  let session
  if (process.server && res && res.locals && res.locals.user) {
    session = firebase.apps.find(a => a.name === res.locals.user.uid) || firebase.initializeApp({
      ...firebaseConfig,
      _created: Date.now()
    }, res.locals.user.uid)
    res.locals._session = session
  } else {
    session = firebase.apps.find(a => a.name === '[DEFAULT]') || firebase.initializeApp(firebaseConfig)
  }

  /** --------------------------------------------------------------------------------------------- **/
  /** -------------------------------------- FIREBASE AUTH ---------------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

    await import('firebase/auth')

    const fireAuth = session.auth()
    const fireAuthObj = firebase.auth
    inject('fireAuth', fireAuth)
    inject('fireAuthObj', fireAuthObj)

    if (process.client && options.services.auth.persistence) {
      const persistence = options.services.auth.persistence

      try {
        await fireAuth.setPersistence(persistence)
      } catch (err) {
        if (err.code === 'auth/invalid-persistence-type') {
          console.warn(`[@nuxtjs/firebase]: Invalid persistence type '${persistence}' provided`)
        } else if (err.code === 'auth/unsupported-persistence-type') {
          console.warn(`[@nuxtjs/firebase]: Persistence type '${persistence}' is not supported in this environment.`)
        }
      }
    }

  /** --------------------------------------------------------------------------------------------- **/
  /** -------------------------------------- FIREBASE REALTIME DB --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

    await import('firebase/database')

    const fireDb = session.database()
    const fireDbObj = firebase.database
    inject('fireDb', fireDb)
    inject('fireDbObj', fireDbObj)

  /** --------------------------------------------------------------------------------------------- **/
  /** ---------------------------------------- FIREBASE FIRESTORE --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/
  /** ------------------------------------------ FIREBASE STORAGE --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/
  /** ---------------------------------------- FIREBASE FUNCTIONS --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/
  /** ---------------------------------------- FIREBASE MESSAGING --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  /** --------------------------------------------------------------------------------------------- **/
  /** -------------------------------------- FIREBASE REALTIME DB --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  // Firebase Performance can only be initiated on client side

  /** --------------------------------------------------------------------------------------------- **/
  /** ---------------------------------------- FIREBASE ANALYTICS --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  // Firebase Analytics can only be initiated on the client side

  /** --------------------------------------------------------------------------------------------- **/
  /** --------------------------------- FIREBASE REMOTE CONFIG DB --------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/
}
