// Nastavenie aplikácie T9 Tréning.
// Po nasadení Cloudflare Workera nahraď TVOJ-SUBDOMENA skutočnou adresou Workera.
// Kým tu ostane TVOJ-SUBDOMENA, tutor beží bez AI z pripravených nápovied.
window.T9_CONFIG = {
  tutorUrl: "https://t9-tutor.TVOJ-SUBDOMENA.workers.dev/tutor",
  reportEmail: ""
};
