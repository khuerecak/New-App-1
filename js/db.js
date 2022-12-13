import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: 'https://{project-id}.firebaseio.com',
  apiKey: "AIzaSyC9mKvVjlu-QDt1JbRX-f7CUoDZedx0IYg",
  authDomain: "progress-2c6b3.firebaseapp.com",
  projectId: "progress-2c6b3",
  storageBucket: "progress-2c6b3.appspot.com",
  messagingSenderId: "774101896467",
  appId: "1:774101896467:web:3a8cd98a5978cff5589ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getProgressions(db) {
  const progressionsCol = collection(db, "progressions");
  const progressionsSnapshot = await getDocs(progressionsCol);
  const progressionsList = progressionsSnapshot.docs.map((doc) => doc);
  return progressionsList;
}

const unsub = onSnapshot(collection(db, "progressions"), (doc) => {
  //   console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderProgression(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
    //  removeProgression(change.doc.id);
    }
  });
});

//new progression
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  addDoc(collection(db, "progressions"), {
    title: form.title.value,
    type: form.type.value,
  }).catch((error) => console.log(error));
  form.title.value = "";
  form.type.value = "";
});

//delete a progression

const progContainer = document.querySelector(".progressions");
progContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const id = event.target.getAttribute("data-id");
    deleteDoc(doc(db, "progressions", id));
  }
});

