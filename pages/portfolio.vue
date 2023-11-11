<template>
	<div class="mt-[3em]">
        <div class="mb-[2em] w-full">
			<div class="flex sm:h-auto">
                <div class="m-auto w-full">
                    <!-- Name -->
                    <h1 class="text-4xl text-center font-normal leading-normal mb-2 mt-[3rem] md:mt-[3rem]">
                        <span class="title-font text-gray-500">Portfolio</span>
                        <span class="fa fa-star-o align-middle mx-3"></span>
                    </h1>
					<hr class="my-2 h-px border-dashed border-2 border-slate-300" />
					<!-- Portfolio -->
                    <Portfolio :portofolioItems="portfolios" />
					<!-- End Portfolio -->
                </div>
			</div>
		</div>
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
    setup () {
        useHead({
            title: 'Porfolio | Marcelo Oblan',
        })

        return {};
    },
}

</script>