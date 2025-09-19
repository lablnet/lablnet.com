<template>
  <section class="py-10 px-5 container" id="contact">
    <section class="grid grid-cols-1 md:grid-cols-2">
      <div class="col-span-1">
        <h3 class="subtitle dark:text-gray-300">Do you need my help?</h3>
        <div class="dark:text-white text-gray-700 mt-8 dark:text-gray-300">
          Hate forms? Send me an
          <a
            href="mailto:umer@lablnet.com"
            class="underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
            >email</a
          >
          instead.
        </div>

        <div class="mt-8 p-5 text-center hidden md:block">
          <img
            src="/assets/images/contact-art.svg"
            alt="contact"
          />
        </div>
      </div>
      <form role="form" class="col-span-1">
        <div class="mt-10">
          <InputComp
            placeholder="Name"
            :required="true"
            :error="errors.name"
            label="Name"
            v-model="name"
          />
        </div>
        <div class="mt-8">
          <InputComp
            placeholder="Subject"
            :required="true"
            :error="errors.subject"
            label="Subject"
            type="text"
            v-model="subject"
          />
        </div>
        <div class="mt-8">
          <InputComp
            placeholder="Email"
            :required="true"
            :error="errors.email"
            label="Email"
            type="email"
            v-model="email"
          />
        </div>
        <div class="mt-8">
          <TextareaComp
            placeholder="Message"
            :required="true"
            :error="errors.message"
            label="Message"
            v-model="message"
          />
        </div>
        <div class="mt-8">
          <span class="mt-3 mb-3"><LoaderComp :loading="loading" /></span>
          <span class="mt-3 mb-3 text-red-500" v-if="error">{{ error }}</span>
          <span class="mt-3 mb-3 text-green-500" v-if="success">
            Your message has been sent successfully.
          </span>

          <!-- It is totally legal to hide the reCAPTCHA badge. -->
          <!-- As long as we include below lines. -->
          <!-- source: https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed -->
          <p class="text-justify dark:text-gray-300">
            This site is protected by
            <a
              class="text-blue-400"
              href="https://www.google.com/recaptcha/about/"
              target="_blank"
            >
              reCAPTCHA</a
            >
            and the Google
            <a
              class="text-blue-400"
              href="https://policies.google.com/privacy"
              target="_blank"
              >Privacy Policy</a
            >
            and
            <a
              class="text-blue-400"
              href="https://policies.google.com/terms"
              target="_blank"
              >Terms of Service</a
            >
            apply.
          </p>
          <ButtonComp
            v-if="!loading"
            text="Send Message"
            @click="doSubmi"
            :disable="disabled"
            b_type="button"
          />
        </div>
      </form>
    </section>
  </section>
</template>

<script lang="js">

import ButtonComp from "../../components/ButtonComp.vue";
import InputComp from "../../components/InputComp.vue";
import TextareaComp from "../../components/TextareaComp.vue";
import LoaderComp from "../../components/LoaderComp.vue";
import { urls, recaptchaToken } from "../../utils";

export default {
  name: "ContactView",
  components: {
    ButtonComp,
    InputComp,
    TextareaComp,
    LoaderComp
  },
  data() {
    return {
      loading: false,
      success: false,
      name: null,
      email: null,
      message: null,
      subject: null,
      error: null,
      errors: {
        name: null,
        email: null,
        message: null,
        subject: null,
      }
    }
  },
  
  watch: {
    name(val) {
      // check if name not empty
      if (val) {
        this.errors.name = null;
      } else {
        this.errors.name = "Please enter your name.";
      }
    },
    email(val) {
      // validate that the email is not empty
      // validate email regex.
      let validEmail = /\S+@\S+\.\S+/;
      if (val && validEmail.test(val)) {
        this.errors.email = null;
      } else {
        this.errors.email = "Please enter your email.";
      }
    },
    message(val) {
      // check if message not empty
      if (val) {
        this.errors.message = null;
      } else {
        this.errors.message = "Please enter your message.";
      }
    },
    subject(val) {
      // check if subject not empty
      if (val) {
        this.errors.subject = null;
      } else {
        this.errors.subject = "Please enter your subject.";
      }
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaToken}`;
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    doSubmi(e) {
      e.preventDefault();
      e.stopPropagation();
    
      if (this.disabled) return;
    
      let self = this;
      self.success = false;
      self.error = null;
      self.loading = true;
    
      // Use reCAPTCHA but with mailto fallback since Firebase functions are removed
      // eslint-disable-next-line no-undef
      grecaptcha.ready(function() {
        // eslint-disable-next-line no-undef
        grecaptcha.execute(recaptchaToken, {action: 'submit'}).then(function(token) {
          // Since Firebase functions are removed, we'll use mailto after reCAPTCHA validation
          const subject = encodeURIComponent(self.subject);
          const body = encodeURIComponent(
            `Name: ${self.name}\nEmail: ${self.email}\n\nMessage:\n${self.message}\n\nreCAPTCHA Token: ${token}`
          );
          const mailtoLink = `mailto:umer@lablnet.com?subject=${subject}&body=${body}`;
          
          // Open default email client
          window.location.href = mailtoLink;
          
          // Show success message
          self.loading = false;
          self.error = null;
          self.name = null;
          self.email = null;
          self.message = null;
          self.subject = null;
          self.success = true;
        }).catch(function(error) {
          self.loading = false;
          self.error = "Google reCaptcha verification failed, please try again.";
        });
      });
    }
  },
  computed: {
    disabled() {
      return (
        !this.name ||
        !this.email ||
        !this.message ||
        !this.subject ||
        this.errors.name ||
        this.errors.email ||
        this.errors.message ||
        this.errors.subject ||
        this.loading
      );
    }
  }
}
</script>