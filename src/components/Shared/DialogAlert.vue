<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="formError">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto mx-5">
            <div class="flex min-h-full justify-center items-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden  rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-[#3c3c3c] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-stone-500">
                        <div class="sm:flex sm:items-start">
                            <div
                                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-white" id="modal-title">Error</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-white">There was a problem submitting the form, please try again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#3c3c3c] px-4 py-3 sm:flex sm:justify-center sm:px-6">
                        <button @click="formError = false" type="button"
                            class="inline-flex w-full justify-center rounded-md bg-red-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogAlert',
    props: {
        formError: Boolean,
        requared: true,
    },
    methods: {
        closeDialogue() {
            this.$emit('close', !props.formError)
        }
    }

}
</script>

<style lang="scss" scoped></style>