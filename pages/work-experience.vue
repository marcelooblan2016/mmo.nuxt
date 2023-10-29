<template>
	<div class="mt-[3em]">
        <div class="mb-[3em] md:mb-[10em] w-full">
			<div class="flex sm:h-auto">
                <div class="m-auto w-full">
                    <!-- Name -->
                    <h1 class="text-4xl text-center font-normal leading-normal mb-2 mt-[3rem] md:mt-[3rem]">
                        <span class="title-font text-gray-500">Work Experience</span>
                        <span class="fa fa-list-alt align-middle mx-3"></span>
                    </h1>
					<hr class="my-2 h-px border-dashed border-2 border-slate-300" />
                    <div class="grid md:grid-cols-1 gap-3 text-gray-700">
						<template v-for="experience in experiences">
							<div class="p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center">
								<div class="px-3 md:px-[2em] pb-[1em]">
									<!-- Experiece -->
									<h2 class="text-2xl text-left font-normal leading-normal mt-0 mb-2">
									    <span class="text-2xl" v-text="experience.company"></span>&nbsp;&bullet;&nbsp;
									    <span class="text-2xl" v-text="experience.type"></span>&nbsp;&bullet;&nbsp;
									    <span class="text-2xl" v-text="experience.time_frame"></span>
									</h2>
									<p x-html="`<span class='fa fa-map-pin text-gray-500'></span>&nbsp;${experience.location}`" class="text-left text-lg text-gray-500"></p>
									<!-- Experience Description -->
									<template v-for="list in experience.description">
										<p v-html="`<span class='fa fa-minus text-gray-500'></span>&nbsp;` + list" class="text-left" :class="{'text-amber-900': list.includes('Skills:')}"></p>
									</template>
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
import global from '~/mixins/global.js';
export default {
    mixins: [global],
    setup () {
        useHead({
            title: 'Work Experience | Marcelo Oblan',
        })

        return {};
    },
}
</script>