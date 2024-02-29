export const globalState = {
  selectedLanguage: process.client ? localStorage.getItem('selectedLanguage') || 'en' : 'en',
}
