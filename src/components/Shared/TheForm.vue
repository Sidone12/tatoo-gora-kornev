<template>
  <div class="mt-20 flex justify-center sm:mt-10">
    <form @submit.prevent="submit" class="flex flex-col text-white">
      <!--  -->
      <label class="pb-3">
        Name
        <sup class="text-red-600">*</sup>
      </label>
      <div class="w-full flex justify-between sm:flex-col">
        <input type="text" name="firstName" required placeholder="Enter First Name"
          class="w-full h-9  text-brand-black-2 indent-2 border-transparent" />
        <input type="text" name="lastName" required placeholder="Enter Last Name"
          class="ml-5 w-full h-9 rounded-sm sm:ml-0 sm:mt-2 text-brand-black-2 indent-2" />
      </div>

      <label for="email" class="py-3">
        Email
        <sup class="text-red-600">*</sup>
      </label>
      <input name="email" type="email" required placeholder="Enter your email"
        class="w-full h-9 rounded-sm text-brand-black-2 indent-2" />

      <label for="phone" class="py-3">
        Phone
        <sup class="text-red-600">*</sup>
      </label>
      <VueTelInput placeholder="Enter a phone number" autocomplete="on" maxlength="25" name="phone" v-model="tellValue"
        class="text-brand-black-2 indent-2"></VueTelInput>
      <p class="text-xs my-2">Only for the booking, not for contacting</p>

      <label for="instagramNikname" class="py-3">
        Your instagram nickname
        <sup class="text-red-600">*</sup>
      </label>
      <input required type="text" name="instagramNikname" class="w-full h-9 rounded-sm text-brand-black-2 indent-2"
        placeholder="Enter your instagram nickname" />

      <label for="birthDate" class="py-3">
        Your birth date
        <sup class="text-red-600">*</sup>
      </label>
      <input required type="text" name="birthDate" class="w-full h-9 rounded-sm text-brand-black-2 indent-2"
        placeholder="Enter your birth date" />


      <div class="pt-3 align-middle">
        <p class="text-sm">
          Where are you located?
          <sup class="text-red-600">*</sup>
        </p>

        <label class="text-sm" for="Local"><input type="radio" id="Local" required name="location" value="Local"
            checked /> Local</label>
        <br />

        <label class="text-sm" for="Traveling"><input type="radio" id="Traveling" required name="location"
            value="Traveling" /> Traveling</label>
      </div>


      <label class="py-3">
        Description of what you want
        <sup class="text-red-600">*</sup>
      </label>
      <textarea placeholder="Type you escription of what you want" name="message" rows="5" cols="100"
        class="w-full rounded-sm text-brand-black-2 indent-2 py-2"></textarea>
      <p class="text-xs mt-2">Short but detailed.</p>


      <label for="TattooSize" class="py-3">
        Tattoo size in inch
        <sup class="text-red-600">*</sup>
      </label>
      <input type="text" name="TattooSize" placeholder="Enter the desired length in inch"
        class="w-full h-9 rounded-sm text-brand-black-2 indent-2" />


      <label for="Placement" class="py-3">
        Placement on body
        <sup class="text-red-600">*</sup>
      </label>
      <input type="text" name="Placement" placeholder="Enter part of body"
        class="w-full h-9 rounded-sm text-brand-black-2 indent-2" />

      <div class="pt-3 align-middle">
        <p class="text-sm">
          Skin tone
          <sup class="text-red-600">*</sup>
        </p>
        <div class="flex gap-2">
          <div>
            <label class="text-sm" for="Dark"><input type="radio" checked id="Dark" name="skinTone" value="Dark" />
              Dark</label>
          </div>
          <div>
            <label class="text-sm" for="Pale"><input type="radio" id="Pale" c name="skinTone" value="Pale" /> Pale</label>
          </div>
          <div>
            <label class="text-sm" for="Olive"><input type="radio" id="Olive" name="skinTone" value="Olive"
                class="pl-2" /> Olive</label>
          </div>
          <div>
            <label class="text-sm" for="Tan"><input type="radio" id="Tan" name="skinTone" value="Tan" /> Tan</label>
          </div>
        </div>
      </div>


      <label for="bodyPicture" class="py-3">
        Picture of the area you want to get tattooed (of you, not from internet)
        <sup class="text-red-600">*</sup>
      </label>

      <div>
        <div
          class="border border-white border-solid w-full rounded-sm h-20 flex flex-col justify-center items-center hover:bg-[#c4c4c4] transition-all duration-500"
          @click="$refs.bodyPicture.click()">
          <input @change="onChange" type="file" accept="image/*" class="hidden" ref="bodyPicture" name="bodyPicture"
            id="bodyPicture" />
          <span class="text-3xl text-brand-grey-2">
            <i class="uil uil-image-plus"></i>
          </span>
          <p class="text-xs text-brand-grey-2">Click this area to upload.</p>
        </div>
        <div class="flex" v-for="picture in bodyPicture " :key="picture.index">
          <h1>{{ picture.name }}</h1>
          <span @click="deleteImg" class="text-white hover:text-[#c4c4c4] ml-3">
            <i class="uil uil-times-square"></i>
          </span>
        </div>

        <p class="text-xs mt-2">If possible, draw on your phone a circle to show placement and approx. size.</p>
      </div>

      <label for="color" class="py-3">
        B/G or Color
        <sup class="text-red-600">*</sup>
      </label>
      <input type="text" name="tatooColor" required class="w-full h-9 rounded-sm text-brand-black-2 indent-2"
        placeholder="Enter your preferred color" />



      <label for="referencePictures" class="py-3">
        Reference pictures
        <sup class="text-red-600">*</sup>
      </label>

      <div>
        <div
          class="border border-white border-solid w-full rounded-sm h-20 flex flex-col justify-center items-center hover:bg-[#c4c4c4] transition-all duration-500"
          @click="$refs.referencePicturesUpload.click()">
          <input @change="onTattooImgChange" type="file" accept="image/*" class="hidden" ref="referencePicturesUpload"
            name="referencePictures" multiple />
          <span class="text-3xl text-brand-grey-2">
            <i class="uil uil-image-plus"></i>
          </span>
          <p class="text-xs text-brand-grey-2">Click this area to upload.</p>
        </div>
        <div class="flex" v-for="picture in referencePictures " :key="picture.index">
          <h1>{{ picture.name }}</h1>
          <span @click="deleteTattooImg" class="text-white hover:text-[#c4c4c4] ml-3">
            <i class="uil uil-times-square"></i>
          </span>
        </div>
      </div>

      <div class="pt-3 align-middle">
        <p class="text-sm">
          Whats your availability?
          <sup class="text-red-600">*</sup>
        </p>
        <label class="text-sm" for="Open"><input type="radio" id="Open" checked name="availability" value="Open" />
          Open</label>
        <br />
        <label class="text-sm" for="Specific"><input type="radio" id="Specific" name="availability" value="Specific" />
          Specific</label>
      </div>


      <label class="py-3">Other inquiries (optional)</label>
      <textarea placeholder="Not necessary only if need something to add" name="otherInquires" rows="5" cols="100"
        class="text-xs w-full rounded-sm text-brand-black-2 indent-2 py-2"></textarea>

      <label class="py-3">Contraindications <sup class="text-red-600">*</sup></label>
      <textarea placeholder="Please add you Allergies, diseases, etc" name="Contraindications" rows="5" cols="100"
        class="text-xs w-full rounded-sm text-brand-black-2 indent-2 py-2"></textarea>

      <label for="budget" class="py-3">Limit budget (ONLY if there is)</label>
      <input type="text" name="budget" class="w-full h-9 rounded-sm text-brand-black-2 indent-2"
        placeholder="I will count for you" />


      <div class="pt-3 align-middle">
        <p class="text-sm">
          Accept terms
          <sup class="text-red-600">*</sup>
        </p>

        <label class="text-sm"><input type="checkbox" required name="age" value="i`am over 18" /> I am over 18 or will be
          at the day of the appointment</label>
        <br />

        <label class="text-sm" for="Spamfolder"><input type="checkbox" id="Spamfolder" required name="checkSpam"
            value="Yes" />
          I am aware that the reply email might go into my Spam
          folder
        </label>
      </div>
      <p class="text-xs">Note that you will have to sign a form confirming you are over 18.</p>

      <div class="flex justify-center pt-8">
        <button type="submit" :disabled="isBusy"
          class="text-xs font-bold text-brand-black-1 bg-brand-grey-4 w-40 h-12   hover:opacity-25 transition-opacity duration-1000">
          <span v-if="!isBusy">Submit</span> <span v-if="isBusy">Submiting...</span></button>
      </div>

      <!-- <pre class="text-xs whitespace-pre-wrap">{{ serverMessage }}</pre> -->
    </form>
  </div>
</template>




<script>
// import Photo from "../Shared/Photo.vue"
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import axios from "axios";

export default {
  name: "TheForm",
  components: {
    VueTelInput,
    // Photo,
  },
  data() {
    return {
      userData: {},
      bodyPicture: [],
      referencePictures: [],
      tellValue: '',
      serverMessage: {},
      isBusy: false
    };
  },
  methods: {
    onChange(event) {
      // console.log("onBodyImgChange files", event.target.value);

      const files = event.target.files;
      // console.log("saved file", files);

      this.bodyPicture.push(...files); // перевірити чи є вже файл в масиві і якщо немає додати якщо є ні
      // console.log("bodyPicture", this.bodyPicture);
    },
    onTattooImgChange(event) {
      // console.log("onTattooImgChange files", event.target.value);
      const tattooFiles = event.target.files;

      // console.log("saved tattooFiles", tattooFiles);
      if (this.referencePictures.length + tattooFiles.length > 5) {
        alert("too many pictures please add only 5")
        return
      }
      this.referencePictures.push(...tattooFiles); // перевірити чи є вже файл в масиві і якщо немає додати якщо є ні
      // console.log("referencePictures", this.referencePictures);
    },
    deleteImg() {
      this.bodyPicture.shift();
    },
    deleteTattooImg() {
      this.referencePictures.shift();
    },

    resizeImg(fileData) {
      return new Promise((resolve, reject) => {
        var image = new Image();
        image.onload = function (imageEvent) {  // функція яка викликається після підгрузки картинки
          // Resize the image
          const max_size = 1000;// TODO : pull max size from a site config
          var canvas = document.createElement('canvas'),    //  за допомогою самого браузера ми перемальовуємо картинку і зміюємо її розмір

            width = image.width,
            height = image.height;
          if (width > height) {                 // перевірка та ресайз наших картинок
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(image, 0, 0, width, height); // малюємо картинку
          var dataUrl = canvas.toDataURL("image/jpeg");
          // document.body.appendChild(canvas)// відмальовуємо картинку в HTML
          resolve(dataUrl);
        }
        image.src = fileData;   // тут починаємо завантажувати картинку
      });
    },

    async readAndResizeImg(file) {
      var fileData = await this.readFile(file)
      var resizedImg = await this.resizeImg(fileData);
      let photo = {
        id: Date.now(),
        title: file.name,
        url: resizedImg,
      };
      return photo;
    },



    readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result)

        };
        reader.readAsDataURL(file);
        // reject({error: 'some error', number: number});
      });
    },

    async submit(event) {
      // console.log("before if", this.isBusy)
      if (this.isBusy) {
        return
      }
      // console.log("after if", this.isBusy)
      this.isBusy = true;

      const a = Object.fromEntries(new FormData(event.target));
      // console.log("Before image load bodyPicture data", this.bodyPicture);
      // console.log(
      //   "Before image load referencePictures data",
      //   this.referencePictures
      // );

      let images = []
      for (const element of this.bodyPicture) {
        images.push(this.readAndResizeImg(element));
      }

      for (const element of this.referencePictures) {
        images.push(this.readAndResizeImg(element));
        // console.log("received referencePictures file", element.name);
      }


      let tattooImgArray = await Promise.all(images);

      try {
        let response = await axios.post("https://nodemailer-server-two.vercel.app/sent", {
          ...a,
          tattooImgArray,
        });
        // this.serverMessage = JSON.stringify(response.data);
        console.log("Post response data", response.data);
        this.isBusy = false
        this.$emit('formSubmit')

      } catch (error) {
        console.log(error);
        // this.serverMessage = JSON.stringify(error.response?.data ?? error.message);
        this.$emit('formError')
      } finally {
        this.isBusy = false
      }
    },





    // let photo = await readFile(a.bodyPicture)
    // .then((photo) => {

    //  this.bodyPicture.forEach(async(element ) => {
    //       tattooImgArray.push(await readFile(element))
    //       console.log('received file', element.name)
    //   });


    // const file = event.target.files[0];
    // // this.bodyPicture.push()
    // console.log("onchange file info", file)
    // const reader = new FileReader();
    // reader.onload = () => {
    //   let photo = {
    //     id: Date.now(),
    //     title: this.title,
    //     url: reader.result,
    //   };

    //   console.log("PHoto info after load", photo);
    // }

    // axios
    // .post("/api/signup", { ...a, tattooImgArray: photo })
    // .then(function (response) {
    //   console.log("Post response data", response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // const reader = new FileReader();
    // reader.onload = () => {
    //   let photo = {
    //     id: Date.now(),
    //     title: a.bodyPicture.name,
    //     url: reader.result,
    //   };

    //   console.log("After image load", reader.result, reader);
    //   console.log("PHoto info after load", photo);

    // };
    // reader.readAsDataURL(a.bodyPicture);

    // axios
    //   .get("/api/order?username=alex&lastname=kat", a)
    //   .then(function (response) {
    //     console.log("get response", response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // getPosts() {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts?_limit=30")
    //     .then((response) => {
    //       this.profileData = response.data;
    //       console.log(this.profileData);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errMsg = "Error retriving data";
    //     });
    // },
  },
};
</script>

<style scoped>
.vue-tel-input .vti__input {
  background: transparent !important;
}

.vti__input::placeholder {
  color: #333333;
}

input {
  background: transparent;
  border-bottom: 1px solid white;
  color: white;
}

input::placeholder {
  color: #fff;
}

textarea {
  background: transparent;
  border: 1px solid white;
  color: white;
}

textarea::placeholder {
  color: #fff
}
</style>
