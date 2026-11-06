// Regenerates public/sitemap.xml and public/llms.txt from shared/utils/content.js.
// Run `npm run seo:generate` after changing site content, and commit the result.
import { writeFileSync } from 'node:fs';
import {
    content,
    experienceHighlights,
    experienceSkills,
    isRetired,
    PROJECT_RETIRED_LABEL,
    projectDates,
    visibleProjects,
} from '../shared/utils/content.js';

const SITE_URL = 'https://moblan.dev';
const today = new Date().toISOString().slice(0, 10);

const paths = [
    '/',
    ...content.menu.filter((item) => item.value !== '/').map((item) => item.value),
    ...visibleProjects.map((project) => `/portfolio/${project.slug}`),
];

const urls = paths
    .map((path) => `    <url>\n        <loc>${SITE_URL}${path}</loc>\n        <lastmod>${today}</lastmod>\n    </url>`)
    .join('\n\n');

writeFileSync(
    new URL('../public/sitemap.xml', import.meta.url),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urls}\n\n</urlset>\n`,
);

const { person, social, footer, skills, experiences, spotlight, externalLinks } = content;

const projectLine = (project) => {
    const meta = [projectDates(project), isRetired(project) ? PROJECT_RETIRED_LABEL : null].filter(Boolean).join(', ');
    return `- [${project.title}](${SITE_URL}/portfolio/${project.slug})${meta ? ` (${meta})` : ''}: ${project.description}`;
};

const experienceBlock = (experience) => [
    `### ${experience.title}, ${experience.company} (${experience.time_frame})`,
    '',
    `${experience.location} · ${experience.type}`,
    '',
    ...experienceHighlights(experience).map((line) => `- ${line}`),
    `- Stack: ${experienceSkills(experience).join(', ')}`,
].join('\n');

const llms = `# ${person.fullName}

> Senior Full-Stack Engineer with 14+ years of experience building SaaS, AI integrations and automation with Laravel and Vue. Remote, Pacific time.

${person.summary}

## Pages

- [About](${SITE_URL}/): Profile, GitHub activity, latest works and testimonials
- [Portfolio](${SITE_URL}/portfolio): ${visibleProjects.length} projects
- [Skills](${SITE_URL}/skills): Technical skills by category
- [Work Experience](${SITE_URL}/work-experience): Career history
- [Contact](${SITE_URL}/contact): Contact form and availability
- [Resume](${SITE_URL}${externalLinks.resume}): Resume PDF

## Contact

- Email: ${social.email.text}
- Hours: Monday - Friday, 1:00 PM - 11:00 PM Pacific (PDT, UTC-7) / 4:00 AM - 2:00 PM Philippines (PHT, UTC+8)
${footer.social.map((item) => `- ${item.text}: ${item.href}`).join('\n')}

## Skills

${skills.map((group) => `- ${group.type}: ${group.lists.join(', ')}`).join('\n')}

## Highlight

${spotlight.title} (${spotlight.label}): ${spotlight.description}

## Work Experience

${experiences.map(experienceBlock).join('\n\n')}

## Projects

${visibleProjects.map(projectLine).join('\n')}
`;

writeFileSync(new URL('../public/llms.txt', import.meta.url), llms);

console.log(`Wrote sitemap.xml (${paths.length} URLs) and llms.txt`);
