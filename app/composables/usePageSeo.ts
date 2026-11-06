import { content } from '@utils/content.js'

const SITE_URL = 'https://moblan.dev'
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`
const { person, social, footer, experiences } = content

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

export const personSchema = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: person.fullName,
    alternateName: 'Marcelo Oblan',
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${person.profileImg}`,
    jobTitle: 'Senior Full-Stack Engineer',
    description: person.summary,
    email: social.email.value,
    worksFor: { '@type': 'Organization', name: experiences[0].company },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Palawan State University' },
    knowsAbout: [
        'Laravel', 'PHP', 'Vue.js', 'Nuxt', 'TypeScript', 'Node.js', 'MySQL', 'PostgreSQL',
        'SaaS', 'AI integration', 'Automation', 'Web scraping', 'Claude', 'OpenAI', 'Google Gemini',
        'Playwright', 'Stagehand',
        'Legacy application modernization',
        'Docker', 'AWS', 'CI/CD',
    ],
    sameAs: footer.social.map((item) => item.href),
}

export const websiteSchema = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: person.fullName,
    url: `${SITE_URL}/`,
    publisher: { '@id': PERSON_ID },
}

interface PageSeo {
    title: string
    description: string
    path: string
    /** Visible page name used in breadcrumbs. Omit on the home page. */
    crumb?: string
    /** Breadcrumb level between Home and this page. */
    parent?: { name: string, path: string }
    /** Extra schema.org nodes for this page. */
    schema?: Record<string, unknown>[]
}

export function usePageSeo ({ title, description, path, crumb, parent, schema = [] }: PageSeo) {
    const url = `${SITE_URL}${path}`

    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogType: path === '/' ? 'profile' : 'website',
        ogUrl: url,
        ogSiteName: person.fullName,
        ogImage: OG_IMAGE,
        ogImageWidth: 1200,
        ogImageHeight: 630,
        ogImageAlt: `${person.fullName}, Senior Full-Stack Engineer`,
        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: OG_IMAGE,
    })

    const trail = [
        { name: 'Home', url: `${SITE_URL}/` },
        ...(parent ? [{ name: parent.name, url: `${SITE_URL}${parent.path}` }] : []),
        ...(crumb ? [{ name: crumb, url }] : []),
    ]

    const breadcrumb = crumb
        ? [{
            '@type': 'BreadcrumbList',
            itemListElement: trail.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url,
            })),
        }]
        : []

    useHead({
        link: [{ rel: 'canonical', href: url }],
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [websiteSchema, personSchema, ...breadcrumb, ...schema],
            }),
        }],
    })
}
