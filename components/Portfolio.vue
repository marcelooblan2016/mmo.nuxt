<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
		<template v-for="portfolio in portofolioItems">
			<div class="p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center">
				<!-- COLUMN START -->
				<div class="p-6 w-full bg-[rgba(255,255,255,0)] rounded-lg my-1">
					<div>
						<div class="my-2">
                            <v-lazy-image draggable="false" class="object-contain h-auto w-full p-1 bg-gray-600 border border-1 border-gray-300 rounded min-h-[250px] md:min-h-[300px]" 
                                v-bind:src="`/images/portfolio/${frontPhoto(portfolio.photos)}`"
                                :src-placeholder="loadingImg"
                                />
						</div>
						<h2 class="text-2xl text-center font-normal leading-normal mt-0" v-text="portfolio.title"></h2>
						<hr class="w-[20%] border-gray-300 mx-auto mb-1"/>
					    <div v-show="portfolio.url != null" class="text-md text-gray-500">
							<a v-bind:href="portfolio['url']" target="_blank" class="break-all" v-html="`<span class='fa fa-link align-middle'></span>&nbsp;${portfolio.url}`"></a>
						</div>
						<p class="mb-3 text-sm font-normal text-center" v-html="`<span class='fa fa-hourglass-start'></span>&nbsp;${getPortfolioDateFromAndTo(portfolio)}`" v-show="getPortfolioDateFromAndTo(portfolio) != null"></p>
						<p class="mb-3 font-normal" v-text="portfolio.description"></p>
						<template v-for="tech in portfolio.tech_used">
							<span class="bg-gray-100 inline-block text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 border border-1" v-text="tech"></span>
						</template>
					</div>
				</div>
				<!-- COLUMN END -->
			</div>
		</template>
   </div>
</template>
<script>
import global from '~/mixins/global.js';
import VLazyImage from "v-lazy-image";

export default {
    components: {
        VLazyImage
    },
    mixins: [global],
	props: {
       portofolioItems: {
       	    required: true,
       }
	},
    setup () {
        return {};
    },
}
</script>