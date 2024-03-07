<template>
  <transition name="modal">
    <div
      class="fixed top-16 z-10 inset-0 h-auto overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      @click="$emit('close')"
    >
      <div
        class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        @click.stop
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all "
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
};
</script>
