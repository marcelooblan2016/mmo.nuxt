<template>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-5 p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center">
        <div class="col-span-1 lg:col-span-5 relative">
            <template v-for="(testimonial, index) in testimonials">
                <Transition name="slide-fade">
                    <template v-if="testimonailCurrent === index">
                        <section :class="testimonailCurrent != index ? 'hidden' : 'block'">
                            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 min-h-[400px]">
                                <figure class="max-w-screen-md mx-auto">
                                    <svg class="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                    </svg> 
                                    <blockquote>
                                        <p class="text-base lg:text-lg" v-text="testimonial.message"></p>
                                    </blockquote>
                                    <figcaption class="py-2 flex items-center justify-center mt-2 space-x-3 border-t-2 border-gray-100">
                                        <div class="flex items-center divide-x-2 divide-gray-400 font-bold">
                                            <div class="pr-3 text-gray-500" v-text="testimonial.name"></div>
                                            <div class="pl-3 text-sm text-gray-400" v-text="testimonial.position"></div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>
                    </template>
                </Transition>
            </template>
            <!-- Pagination -->
            <div class="p-2 flex items-center">
                <nav class="mx-auto">
                    <ul class="flex items-center -space-x-px h-8 text-sm">
                        <li>
                            <a href="#" v-on:click.prevent="testimonailCurrent = testimonailCurrent > 0 ? testimonailCurrent - 1 : (testimonials.length - 1)" class="flex items-center justify-center px-3 h-8 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Previous</span>
                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                        <template v-for="(t, index) in testimonials">
                            <li>
                                <a href="#"
                                    v-on:click.prevent="testimonailCurrent = index"
                                    class="flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                    v-text="(index + 1)"
                                    v-bind:class="{'bg-gray-500 text-gray-100': index == testimonailCurrent, 'bg-white text-gray-400' : index != testimonailCurrent }"></a>
                            </li>
                        </template>
                        <li>
                            <a href="#" v-on:click.prevent="testimonailCurrent = testimonailCurrent < (testimonials.length - 1) ? (testimonailCurrent + 1) : 0" class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Next</span>
                                 <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    </div>
</template>
<script>
import global from '~/mixins/global.js';

export default {
    mixins: [global],
    setup () {
        return {};
    },
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  display: none;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>