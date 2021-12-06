import localforage from 'localforage'
import { firebaseCloudMessaging } from './webPush'

const initializeFCM = async () => {
  await firebaseCloudMessaging.init()
  const fcmToken = await localforage.getItem('fcm_token')
  console.log(fcmToken)
}

export default initializeFCM
