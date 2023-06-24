<template>
     <div class="min-h-screen flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="h-12 w-12 text-green-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
        </svg>
        <h1 class="text-2xl font-bold mt-4">Payment Successful!</h1>
        <p class="text-gray-600 mt-2">Thank you for your purchase.</p>
    </div>
</template>

<script>
export default {
    name: "SuccessView",
    mounted() {
        setTimeout(() => {
            this.$router.push({ name: "Home" });
        }, 10000);
    },
}
</script>
