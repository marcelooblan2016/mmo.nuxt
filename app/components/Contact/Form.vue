<template>
    <div>
        <div class="mb-[2em] w-full">
            <div class="flex sm:h-auto">
                <div class="m-auto w-full max-w-lg">
                    <el-form label-position="top" :model="form" :rules="rules" ref="formRef" label-width="100px" @submit.prevent="submitForm">
                        <el-form-item prop="name">
                            <template #label>
                                <span class="text-md text-gray-500 dark:text-gray-300">
                                    Name
                                </span>
                            </template>
                            <el-input size="large" v-model="form.name" placeholder="Your name" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="email">
                            <template #label>
                                <span class="text-md text-gray-500 dark:text-gray-300">
                                    Email
                                </span>
                            </template>
                            <el-input size="large" v-model="form.email" placeholder="your@email.com" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="subject">
                            <template #label>
                                <span class="text-md text-gray-500 dark:text-gray-300">
                                    Subject
                                </span>
                            </template>
                            <el-input size="large" v-model="form.subject" placeholder="What is this about?" clearable></el-input>
                        </el-form-item>
                        <el-form-item prop="message">
                            <template #label>
                                <span class="text-md text-gray-500 dark:text-gray-300">
                                    Message
                                </span>
                            </template>
                            <el-input
                                size="large"
                                type="textarea"
                                v-model="form.message"
                                :rows="6"
                                placeholder="Your message..."
                            ></el-input>
                        </el-form-item>

                        <!-- Submit Button -->
                        <el-form-item>
                            <el-button size="large" type="primary" class="w-full" :loading="loading" native-type="submit">
                                <el-icon size="large" class="align-middle mx-1"><Position /></el-icon>
                                {{ loading ? 'Sending...' : 'Send Message' }}
                            </el-button>
                        </el-form-item>
                    </el-form>

                    <!-- Success Message -->
                    <el-alert v-if="successMessage" type="success" :closable="true" show-icon @close="successMessage = ''">
                        {{ successMessage }}
                    </el-alert>

                    <!-- Error Message -->
                    <el-alert v-if="errorMessage" type="error" :closable="true" show-icon @close="errorMessage = ''">
                        An error occurred while sending your message. Please try again later.
                    </el-alert>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const runtimeConfig = useRuntimeConfig()

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const rules = {
    name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
    email: [
        { required: true, message: 'Email is required', trigger: 'blur' },
        { type: 'email', message: 'Invalid email format', trigger: ['blur'] }
    ],
    subject: [{ required: true, message: 'Subject is required', trigger: 'blur' }],
    message: [{ required: true, message: 'Message is required', trigger: 'blur' }]
}

const formRef = ref()
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const apiUrl = ref(runtimeConfig.public.apiUrl || '')
const reCaptchaSiteKey = ref(runtimeConfig.public.recaptchaSiteKey || '')

onMounted(() => {
    // Load reCAPTCHA v3 script
    if (!window.grecaptcha) {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaSiteKey.value}`
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    }
})

const waitForGrecaptcha = (): Promise<void> => {
    return new Promise((resolve) => {
        if (window.grecaptcha) {
            resolve()
            return
        }
        const interval = setInterval(() => {
            if (window.grecaptcha) {
                clearInterval(interval)
                resolve()
            }
        }, 100)
    })
}

const submitForm = () => {
    formRef.value.validate(async (valid: boolean) => {
        if (!valid) return

        loading.value = true
        successMessage.value = ''
        errorMessage.value = ''
        try {
            // Wait for grecaptcha to be ready
            await waitForGrecaptcha()

            // Execute reCAPTCHA v3
            const captchaToken = await (window as any).grecaptcha.execute(reCaptchaSiteKey.value, { action: 'submit' })

            if (!captchaToken) {
                throw new Error('Failed to get reCAPTCHA token')
            }

            const response = await $fetch(`${apiUrl.value}/api/contact`, {
                method: 'POST',
                body: {
                    ...form.value,
                    captchaToken
                }
            })

            if (response.success) {
                successMessage.value = response.message

                // Reset form
                form.value = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }

                // Reset validation state
                formRef.value.clearValidate()

                // Clear success message after 5 seconds
                setTimeout(() => {
                    successMessage.value = ''
                }, 5000)
            }
        } catch (error: any) {
            errorMessage.value = error.data?.statusMessage || error.message || 'Failed to send message. Please try again.'
            console.error('❌ Contact form error:', error)
        } finally {
            loading.value = false
        }
    })
}
</script>
