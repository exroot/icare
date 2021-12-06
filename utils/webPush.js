import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => localforage.getItem("fcm_token"),

  async init() {
    if (!firebase.apps.length) {
      try {
        firebase.initializeApp({
          apiKey: "AIzaSyB-iUiB9LYH1DW-ueMIXsrxsKlrh99x9o0",
          projectId: "shoutmo",
          messagingSenderId: "923394516822",
          appId: "1:923394516822:web:f9e249ea57cf460cf698f7",
        });
      } catch (err) {
        console.error("Firebase initialization error raised ", err.stack);
      }
    }

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }
      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const fcmToken = await messaging.getToken();

      localforage.setItem("fcm_token", fcmToken);
      console.log("fcm_token", fcmToken);
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
