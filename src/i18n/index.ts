import { en } from './en'

export const languages = {
  en,
}

export type Language = keyof typeof languages

export const defaultLanguage: Language = 'en'

export function getTranslations(lang: Language) {
  return languages[lang] ?? languages.en
}