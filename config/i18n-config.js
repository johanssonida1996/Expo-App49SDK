import i18n from 'i18n-js';

// Import your language files
import en from '../i18n/en.json';
import sv from '../i18n/sv.json';

// Initialize i18n with your translations
i18n.MissingTranslation = { en, sv };
i18n.Locales = 'en'; // Set the default locale

export default i18n;