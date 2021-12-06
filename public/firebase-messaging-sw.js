/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB-iUiB9LYH1DW-ueMIXsrxsKlrh99x9o0",
  projectId: "shoutmo",
  messagingSenderId: "923394516822",
  appId: "1:923394516822:web:f9e249ea57cf460cf698f7",
});
firebase.messaging();
