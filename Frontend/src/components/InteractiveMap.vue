<script setup>
import { ref } from "vue";
// import { LMap, LTileLayer, LMarker, LPopup } from "vue-leaflet";

const center = ref([19.4326, -99.1332]); // Coordenadas de CDMX
const zoom = ref(13);
</script>
<template>
    <div class="map-container bg-amber">
        <h1>Mapa Interactivo</h1>
        <!-- <l-map :zoom="zoom" :center="center" style="height: 400px; width: 100%;">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <l-marker :lat-lng="center">
                <l-popup>¡Aquí estoy!</l-popup>
            </l-marker>
        </l-map> -->
    </div>
</template>


<style scoped>
.map-container {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
}
</style>