import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBkQe0tqgET22AuM-ZrDSO-Exigu8dPvUU',
  authDomain: 'lablnet-86a04.firebaseapp.com',
  projectId: 'lablnet-86a04',
  storageBucket: 'lablnet-86a04.appspot.com',
  messagingSenderId: '489647771343',
  appId: '1:489647771343:web:50c27805ebd74a1049f1ba'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const firestore = getFirestore(app)

export { app, analytics, firestore }
