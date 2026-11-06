<template>
    <form class="rounded-2xl border border-line bg-surface p-6" novalidate @submit.prevent="submitForm" @focusin.once="loadRecaptcha">
        <div class="grid gap-5 sm:grid-cols-2">
            <div v-for="field in FIELDS" :key="field.name" :class="{ 'sm:col-span-2': field.wide }">
                <label :for="`contact-${field.name}`" class="mb-1.5 block text-sm font-medium">{{ field.label }}</label>
                <component
                    :is="field.rows ? 'textarea' : 'input'"
                    :id="`contact-${field.name}`"
                    :value="form[field.name]"
                    :name="field.name"
                    :type="field.rows ? undefined : field.type"
                    :rows="field.rows"
                    :autocomplete="field.autocomplete"
                    :placeholder="field.placeholder"
                    :aria-invalid="Boolean(errors[field.name])"
                    :aria-describedby="errors[field.name] ? `contact-${field.name}-error` : undefined"
                    required
                    class="w-full rounded-lg border bg-canvas px-3 py-2.5 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent"
                    :class="errors[field.name] ? 'border-red-500' : 'border-line'"
                    @input="form[field.name] = $event.target.value"
                    @blur="validateField(field.name)"
                />
                <p v-if="errors[field.name]" :id="`contact-${field.name}-error`" class="mt-1 text-sm text-red-600 dark:text-red-400">
                    {{ errors[field.name] }}
                </p>
            </div>
        </div>

        <button type="submit" :disabled="loading" class="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-on-accent transition-opacity hover:opacity-90 disabled:opacity-60">
            <Send class="size-4" aria-hidden="true" />
            {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <div aria-live="polite">
            <p v-if="successMessage" class="mt-4 rounded-lg bg-accent-soft px-4 py-3 text-sm">{{ successMessage }}</p>
            <p v-if="errorMessage" class="mt-4 rounded-lg border border-red-500 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                An error occurred while sending your message. Please try again later.
            </p>
        </div>

        <p class="mt-4 text-xs text-muted">
            Protected by reCAPTCHA. Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="underline">Privacy Policy</a>
            and <a href="https://policies.google.com/terms" target="_blank" rel="noopener" class="underline">Terms of Service</a> apply.
        </p>
    </form>
</template>

<script setup lang="ts">
import { Send } from 'lucide-vue-next'

type FieldName = 'name' | 'email' | 'subject' | 'message'

const FIELDS: { name: FieldName, label: string, placeholder: string, type?: string, autocomplete?: string, rows?: number, wide?: boolean }[] = [
    { name: 'name', label: 'Name', placeholder: 'Your name', type: 'text', autocomplete: 'name' },
    { name: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email', autocomplete: 'email' },
    { name: 'subject', label: 'Subject', placeholder: 'What is this about?', type: 'text', wide: true },
    { name: 'message', label: 'Message', placeholder: 'Your message...', rows: 6, wide: true },
]

const REQUIRED_MESSAGES: Record<FieldName, string> = {
    name: 'Name is required',
    email: 'Email is required',
    subject: 'Subject is required',
    message: 'Message is required',
}

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const runtimeConfig = useRuntimeConfig()

const emptyForm = (): Record<FieldName, string> => ({ name: '', email: '', subject: '', message: '' })

const form = ref(emptyForm())
const errors = ref<Partial<Record<FieldName, string>>>({})
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const apiUrl = runtimeConfig.public.apiUrl || ''
const reCaptchaSiteKey = runtimeConfig.public.recaptchaSiteKey || ''

function validateField (name: FieldName) {
    const value = form.value[name].trim()
    let error = ''
    if (!value) error = REQUIRED_MESSAGES[name]
    else if (name === 'email' && !EMAIL_FORMAT.test(value)) error = 'Invalid email format'
    errors.value[name] = error
    return !error
}

// Loaded on first interaction so reCAPTCHA doesn't slow down the initial page load.
function loadRecaptcha () {
    if ((window as any).grecaptcha || document.getElementById('recaptcha-script')) return
    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaSiteKey}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)
}

const waitForGrecaptcha = (): Promise<void> => {
    return new Promise((resolve) => {
        if ((window as any).grecaptcha) {
            resolve()
            return
        }
        const interval = setInterval(() => {
            if ((window as any).grecaptcha) {
                clearInterval(interval)
                resolve()
            }
        }, 100)
    })
}

async function submitForm () {
    const results = FIELDS.map((field) => validateField(field.name))
    if (results.includes(false)) return

    loading.value = true
    successMessage.value = ''
    errorMessage.value = ''
    try {
        loadRecaptcha()
        await waitForGrecaptcha()

        const grecaptcha = (window as any).grecaptcha
        await new Promise<void>((resolve) => grecaptcha.ready(resolve))
        const captchaToken = await grecaptcha.execute(reCaptchaSiteKey, { action: 'submit' })

        if (!captchaToken) {
            throw new Error('Failed to get reCAPTCHA token')
        }

        const response = await $fetch<{ success: boolean, message: string }>(`${apiUrl}/api/contact`, {
            method: 'POST',
            body: {
                ...form.value,
                captchaToken,
            },
        })

        if (response.success) {
            successMessage.value = response.message
            form.value = emptyForm()
            errors.value = {}

            setTimeout(() => {
                successMessage.value = ''
            }, 5000)
        }
    } catch (error: any) {
        errorMessage.value = error.data?.statusMessage || error.message || 'Failed to send message. Please try again.'
        console.error('Contact form error:', error)
    } finally {
        loading.value = false
    }
}
</script>
