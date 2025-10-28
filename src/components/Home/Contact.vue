<template>
  <section class="py-12 md:py-20 container" id="contact">
    <div class="glass-card liquid-interactive liquid-depth-2 p-4 sm:p-6 md:p-8 lg:p-12 mb-6 md:mb-12 animate-fade-in">
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 liquid-heading liquid-text">
          Let's Work Together
        </h2>
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 liquid-text">
          Ready to bring your ideas to life? Let's discuss your project!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <!-- Left Side - Contact Info -->
        <div class="space-y-6 md:space-y-8">
          <div class="glass-card liquid-interactive p-4 md:p-6 animate-slide-up">
            <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center liquid-text">
              <i class="fa-solid fa-envelope bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent mr-3 animate-liquid-pulse"></i>
              Get In Touch
            </h3>
            <div class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p class="mb-4">
                Hate forms? No problem! Send me a direct
                <a
                  href="mailto:umer@lablnet.com"
                  class="bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:bg-none font-semibold underline transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >email</a> instead.
              </p>
              <p>
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and innovation.
              </p>
            </div>
          </div>

          <div class="glass-card liquid-interactive p-4 md:p-6 animate-slide-up hidden lg:block" style="animation-delay: 0.2s;">
            <div class="relative">
              <img
                src="/assets/images/contact-art.svg"
                alt="Contact illustration"
                class="w-full h-auto opacity-80"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-muf-500/10 via-muf-blue-300/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- Right Side - Contact Form -->
        <form role="form" class="space-y-4 md:space-y-6 animate-slide-up" style="animation-delay: 0.4s;">
          <div class="glass-card liquid-interactive p-4 md:p-6">
            <div class="space-y-6">
              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fa-solid fa-user mr-2 bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent"></i>Name
                </label>
                <InputComp
                  placeholder="Your full name"
                  :required="true"
                  :error="errors.name"
                  v-model="name"
                  class="glass-input"
                />
              </div>

              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fa-solid fa-envelope mr-2 bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent"></i>Email
                </label>
                <InputComp
                  placeholder="your.email@example.com"
                  :required="true"
                  :error="errors.email"
                  type="email"
                  v-model="email"
                  class="glass-input"
                />
              </div>

              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fa-solid fa-tag mr-2 bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent"></i>Subject
                </label>
                <InputComp
                  placeholder="What's this about?"
                  :required="true"
                  :error="errors.subject"
                  type="text"
                  v-model="subject"
                  class="glass-input"
                />
              </div>

              <div class="form-group">
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <i class="fa-solid fa-message mr-2 bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent"></i>Message
                </label>
                <TextareaComp
                  placeholder="Tell me about your project or inquiry..."
                  :required="true"
                  :error="errors.message"
                  v-model="message"
                  class="glass-input min-h-[120px]"
                />
              </div>

              <!-- Status Messages -->
              <div class="space-y-3">
                <LoaderComp :loading="loading" v-if="loading" />
                
                <div v-if="error" class="glass-card p-4 border-red-300 bg-red-50/50 dark:bg-red-900/20">
                  <p class="text-red-600 dark:text-red-400 flex items-center">
                    <i class="fa-solid fa-exclamation-triangle mr-2"></i>
                    {{ error }}
                  </p>
                </div>
                
                <div v-if="success" class="glass-card p-4 border-green-300 bg-green-50/50 dark:bg-green-900/20">
                  <p class="text-green-600 dark:text-green-400 flex items-center">
                    <i class="fa-solid fa-check-circle mr-2"></i>
                    Your message has been sent successfully!
                  </p>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <button
                  v-if="!loading"
                  @click="doSubmi"
                  :disabled="disabled"
                  type="button"
                  class="w-full liquid-interactive px-8 py-4 text-white font-semibold rounded-xl 
                         bg-gradient-to-r from-muf-500 via-muf-blue-300 to-muf-blue-500
                         hover:from-muf-600 hover:via-muf-blue-400 hover:to-muf-blue-600
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-500 transform hover:scale-105
                         focus:outline-none focus:ring-4 focus:ring-muf-500/30
                         flex items-center justify-center space-x-2
                         backdrop-filter blur(16px) saturate(180%)
                         border border-white/20 shadow-lg
                         hover:shadow-xl hover:shadow-muf-500/25"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </div>

              <!-- reCAPTCHA Notice -->
              <div class="text-center">
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  This site is protected by
                  <a
                    class="bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:bg-none transition-all duration-300"
                    href="https://www.google.com/recaptcha/about/"
                    target="_blank"
                  >reCAPTCHA</a>
                  and the Google
                  <a
                    class="bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:bg-none transition-all duration-300"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                  >Privacy Policy</a>
                  and
                  <a
                    class="bg-gradient-to-r from-muf-500 to-muf-blue-500 bg-clip-text text-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:bg-none transition-all duration-300"
                    href="https://policies.google.com/terms"
                    target="_blank"
                  >Terms of Service</a>
                  apply.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
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