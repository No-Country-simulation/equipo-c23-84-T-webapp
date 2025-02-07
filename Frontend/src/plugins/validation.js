import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import es from "@vee-validate/i18n/dist/locale/es.json";

// Configurar Vee-Validate con localización en español
configure({
    generateMessage: localize({
        es,
    }),
    validateOnInput: true, // Valida mientras el usuario escribe
});
