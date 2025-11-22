<template>
  <section class="py-20 container relative z-10" id="contact">
    <div class="glass-panel p-8 md:p-12 animate-fade-in relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Let's <span class="text-gradient">Work Together</span>
        </h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to discuss new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Contact Info -->
        <div class="space-y-8">
          <div class="glass-card p-8 hover:bg-white/5 transition-colors duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <i class="fa-solid fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-white">Get In Touch</h3>
                <p class="text-slate-300 leading-relaxed mb-4">
                  Prefer email? No problem! Send me a direct message and I'll get back to you as soon as possible.
                </p>
                <a
                  href="mailto:umer@lablnet.com"
                  class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                >
                  umer@lablnet.com
                  <i class="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:bg-white/5 transition-colors duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <i class="fa-solid fa-handshake text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-white">Collaboration</h3>
                <p class="text-slate-300 leading-relaxed">
                  I'm open to freelance projects, open-source contributions, and full-time opportunities. Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Illustration or Call to Action -->
        <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div class="glass-panel p-8 flex flex-col items-center justify-center text-center min-h-[300px] border-white/10">
                <i class="fa-solid fa-paper-plane text-6xl text-slate-500/50 mb-6"></i>
                <h3 class="text-2xl font-bold mb-2">Start a Project</h3>
                <p class="text-slate-400 mb-8">Have a project in mind? Let's discuss the details.</p>
                <a 
                    href="mailto:umer@lablnet.com"
                    class="glass-button px-3 lg:px-4 py-2 bg-gradient-to-r from-muf-500 to-muf-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:from-muf-600 hover:to-muf-blue-600 transition-all duration-300 flex items-center space-x-1 lg:space-x-2 text-sm lg:text-base"
                >
                    Say Hello
                </a>
            </div>
        </div>
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