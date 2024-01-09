<template>
    <div>
        <div class="flex  items-center cursor-pointer" @click="toggleActive()">
            <span class="text-xl text-brand-grey-4 mr-3"><i class="uil uil-plus"></i></span>
            <h2 class=" text-lg tracking-tighter font-semibold h-full  text-brand-green-1 ">{{ heading.toLocaleUpperCase()
            }}
            </h2>

        </div>
        <transition name="info-fade" mode="out-in">
            <div v-if="active" class=" my-5 ml-8">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ToggleTitle",
    props: {
        heading: {
            type: String
        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggleActive() {
            this.active = !this.active
        }
    },
    watch: {
        active(value) {
            this.$emit('input', value)
        }
    }
}
</script>

<style scoped>
.info-fade-enter-active {
    transition: opacity 0.7s, transform 0.7s;
}

.info-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.info-fade-enter-from,
.info-fade-leave-to {
    opacity: 0;
    transform: translateY(-20%)
}
</style>