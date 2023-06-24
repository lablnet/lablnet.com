<template>
  <section id="login" class="p-4 flex flex-col max-w-md mx-auto">
    <div class="p-6 bg-sky-100 rounded">
      <div class="flex items-center justify-center font-black m-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 mr-3 text-red-600 animate-pulse"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
        <h1 class="tracking-wide text-3xl text-gray-900">Buy Me a Laptop</h1>
      </div>
      <div id="login_form" class="flex flex-col justify-center">
        <div class="flex justify-between items-center mb-3">
          <div class="inline-flex items-center self-start bg-green-500 p-2">
            <span class="font-bold text-gray-900">${{ amount }}</span>
          </div>
          <div class="flex">
            <button
              type="button"
              @click="minus()"
              class="bg-yellow-600 p-1.5 font-bold rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <input
              id="item_count"
              type="number"
              class="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
              v-model="amount"
            />

            <button
              type="button"
              @click="plus()"
              class="bg-green-600 p-1.5 font-bold rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <input
            type="radio"
            id="one_time"
            name="donation_type"
            value="1"
            checked
          />
          <label for="one_time" class="ml-2">One Time</label>
        </div>
        <div class="flex items-center mb-2">
          <input type="radio" id="recurring" name="donation_type" value="2" />
          <label for="recurring" class="ml-2">Recurring</label>
        </div>
        <button
          class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
          type="submit"
          v-if="!loading"
        >
          <span id="login_process_state" class="hidden">Sending :)</span>
          <span id="login_default_state" @click="donate()"
            >Donate<span id="subtotal"></span
          ></span>
        </button>
        <LoaderComp :loading="loading" />
        <!-- Error message -->
        <div v-if="errorMessage" class="text-red-500 mt-2">
          {{ errorMessage }}
        </div>
        <!-- Success message -->
        <div v-if="successMessage" class="text-green-500 mt-2">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import LoaderComp from '@/components/LoaderComp.vue'

export default {
    name: "DonationView",
    components: {
        LoaderComp
    },
    data() {
        return {
            amount: 5.0,
            type: 1,
            message: '',
            errorMessage: null,
            successMessage: null,
            loading: false,
        }
    },
    watch: {
        amount: function (val) {
            // if amount is empty, 0 or alphabet, set to 1.
            if (val === '' || val === 0 || isNaN(val)) {
                this.amount = 1
            }

            // convert to float.
            this.amount = parseFloat(this.amount)
        },
    },
    methods: {
        minus() {
            if (this.amount > 1) {
                this.amount -= 1
            }
        },
        plus() {
            this.amount += 1
        },
        async donate() {
            this.loading = true
            this.errorMessage = null
            this.successMessage = null
            let url = "https://payment.lablnet.com/donate"

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: this.amount,
                    type: this.type,
                    message: this.message
                })
            }).then(response => {
                return response.json()
            }).then(data => {
                this.successMessage = "You will be redirected to payment page."
                this.amount = 5.0
                this.message = ''
                this.type = 1
                this.loading = false
                let link = data.link
                // redirect to payment page after 1 seconds.
                setTimeout(() => {
                    window.location.href = link
                }, 1000)
            }).catch(err => {
                this.errorMessage = err.message
                this.loading = false
            })
        }
    }
}
</script>
