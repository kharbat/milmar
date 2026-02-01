import { ui, defaultLang, languages } from './ui';
export { languages };

export function getLangFromUrl(url: URL) {
    // Path is like /website/ar/resume-tech/ or /website/resume-tech/
    // We need to check the segment AFTER 'website'
    const segments = url.pathname.split('/').filter(s => s !== '');
    // segments = ['website', 'ar', 'resume-tech'] or ['website', 'resume-tech']

    // Check index 1 (after 'website') for language code
    if (segments.length > 1 && segments[1] in ui) {
        return segments[1] as keyof typeof ui;
    }
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
