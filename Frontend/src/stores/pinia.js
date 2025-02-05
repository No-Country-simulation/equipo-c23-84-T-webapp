import { createPinia } from "pinia";
import { usePersistPlugin } from "../plugins/piniaPersistPlugin";

const pinia = createPinia();

// Usa el plugin de persistencia
pinia.use(usePersistPlugin());

export default pinia;
