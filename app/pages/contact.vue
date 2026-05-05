<template>
    <div class="mt-[3em]">
        <div class="mb-[2em] w-full">
            <div class="flex sm:h-auto">
                <div class="m-auto w-full">
                    <!-- Name -->
                    <h1 class="text-4xl text-center font-normal leading-normal mb-2 mt-[3rem] md:mt-[3rem]">
                        <span class="title-font text-gray-500 text-gray-300">Let's Connect</span>
                        <span class="text-yellow-500">
                            <el-icon class="align-middle mx-3"><Message /></el-icon>
                        </span>
                        <p class="text-base text-gray-500">Use the form below to send us an email</p>
                    </h1>
                    <hr class="my-2 h-px border-dashed border-2 border-slate-300" />
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[2em]">
                        <div>
                            <Contact.AvailabilityCard variant="gradient-light-custom" />
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    title: 'Contact | Marcelo Oblan'
})
</script>