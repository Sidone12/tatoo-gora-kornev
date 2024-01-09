<template>
    <div class="flex bg-[#cfebfe] p-4 rounded mb-5">
            <div class="flex items-center text-2xl mr-5 text-blue-400"><i class="uil uil-info-circle"></i></div>
            <p class="text-xs text-[#5e7f96]">{{ text }}</p>
    </div>
</template>

<script>
    export default {
    name: "InfoBlock",
    text: {
      type: String,
      required: true,
      default: "add text",
    },
    }
</script>

<style lang="scss" scoped>

</style>