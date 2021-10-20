<template>
  <div>
    <h3>This is the home page</h3>
    <div>
      <span>User: {{ user.data }}</span>
      <button
        v-if="user"
        @click="logout"
      >Logout</button>
    </div>
    <div style="margin-top: 15px">
      <span>Choose a file</span>
      <input
        type="file"
        ref="uploadInput"
        @change="getFile()"
      >
      <button @click="onUpload()">Upload</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, TaskEvent } from "firebase/storage";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      file: null,
    };
  },
  mounted() {
    // const auth = getAuth();
    // const user = auth.currentUser;
    // if (user) {
    //   this.user = user.email;
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/firebase.User
    //   // ...
    // } else {
    //   // No user is signed in.
    //   // this.user = "";
    // }
  },
  methods: {
    async logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.go(0);
        })
        .catch((error) => {
          // An error happened.
        });
    },
    getFile() {
      this.file = this.$refs.uploadInput.files[0];
    },
    onUpload() {
      const storage = getStorage();

      let prefixe = "";
      switch (this.file.type) {
        case "application/pdf":
          prefixe = "pdf/";
          break;
        case "image/jpeg":
          prefixe = "img/";
          break;
        case "image/png":
          prefixe = "img/";
          break;

        default:
          break;
      }

      const fileRef = ref(storage, prefixe + "newFile.jpg");

      const uploadTask = uploadBytes(fileRef, this.file)
        .then((snapshot) => {
          console.log("File has been uploaded!");
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/unknown":
              console.error("An unknown error occurred.");
              break;
            case "storage/unauthenticated":
              console.error("User is unauthenticated, please authenticate and try again.");
              break;

            default:
              console.error("An error occurred during the upload!");
              break;
          }
        })
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style>
</style>
