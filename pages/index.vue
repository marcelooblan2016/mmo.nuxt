<template>
    <div class="flex sm:h-auto">
        <div class="m-auto">
            <div class="flex flex-col justify-center items-center px-2 py-2 mt-[5em] md:mt-[4em]">
                <img draggable="false" class="w-[150px] h-[150px] rounded-full ring-[1px] ring-gray-400 shadow-md" v-bind:src="person.profileImg" />
            </div>
            <div>
                <!-- Name -->
                <h1 class="text-4xl text-center mt-0 mb-0">
                    <span class="title-font text-gray-500" v-text="person.fullName"></span>
                    <span class="material-symbols-outlined">verified</span>
                    <div class="text-center text-sm md:text-xl text-gray-500">
                        <a class="block md:inline-block" v-bind:href="social.email.value" title="Email Me" v-html="`<span class='fa fa-envelope-o align-middle'></span>&nbsp;${social.email.text}`"></a>
                        &nbsp;
                        <a class="block md:inline-block" target="_blank" v-bind:href="social.github.value" title="See Github" v-html="`<span class='fa fa fa-github align-middle'></span>&nbsp;${social.github.text}`"></a>
                    </div>
                </h1>
                <hr class="my-2 h-px border-dashed border-2 border-slate-300" />
                <div class="p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center">
                    <!-- Title-->
                    <h2 class="text-2xl text-center font-normal mt-0 mb-2" v-text="person.title"></h2>
                    <!-- Summary -->
                    <p v-text="person.summary" class="p-5 text-center"></p>
                    <p>
                        <span class="text-gray-500">Github Contributions</span>
                        &bullet;
                        <a target="_blank" v-bind:href="social.github.value" class="text-gray-600 text-sm font-bold underline inline-block">See Reference</a>
                    </p>
                    <hr class="my-2"/>
                    <img class="w-full h-auto" :src="chartSrc" draggable="false"/>
                </div>
                <div class="text-center mt-[2em] md:mt-[3em] h-auto">
                    <NuxtLink v-bind:to="findMenuBySlug('portfolio').value" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded block md:inline-block mx-1">
                        See Portfolio
                        <span class="fa fa-star-o align-middle"></span>
                    </NuxtLink>

                    <NuxtLink v-bind:to="findMenuBySlug('work-experience').value" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded block md:inline-block mx-1">
                        See Work Experience
                        <span class="fa fa-list-alt align-middle"></span>
                    </NuxtLink>

                    <NuxtLink v-bind:to="findMenuBySlug('skills').value" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded block md:inline-block mx-1">
                        See Skills
                        <span class="fa fa-magic align-middle"></span>
                    </NuxtLink>

                    <a target="_blank" v-bind:href="externalLinks.resume" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded block md:inline-block mx-1">
                        Download Resume
                        <i class="fa fa-download align-middle"></i>
                    </a>
                </div>
                <!-- Testimonials -->
                <Testimonials />
                <!-- End Testimonials -->
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

    data () {
        return {};
    }
}
</script>
