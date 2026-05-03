<template>
    <div class="mt-[3em]">
        <div class="mb-[2em] w-full">
            <div class="flex sm:h-auto">
                <div class="m-auto w-full">
                    <!-- Name -->
                    <h1 class="text-4xl text-center font-normal leading-normal mb-2 mt-[3rem] md:mt-[3rem]">
                        <span class="title-font text-gray-500 dark:text-gray-300">Services</span>
                        <i class="fa fa-database align-middle mx-2"></i>
                    </h1>
                    <hr class="my-2 h-px border-dashed border-2 border-slate-300" />
                    <div class="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                        <template v-for="service in services">
                            <div class="p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(255,255,255,0.1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.5)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center mb-2">
                                <div class="px-3 md:px-[2em]">
                                    <!-- Skill Type-->
                                    <h2 class="text-lg font-bold text-left mt-0 mb-2">
                                        <span :class="[service.icon, `text-red-500`, 'mr-1', 'align-middle', 'text-3xl']"></span>

                                        <span>{{ service.title }}</span>
                                    </h2>
                                    <p v-html="service.description" class="text-left"></p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import global from '@utils/global.js';
export default {
    mixins: [global],
    setup () {
        useHead({
            title: 'Services | Marcelo Oblan',
        })

        return {};
    },
}
</script>