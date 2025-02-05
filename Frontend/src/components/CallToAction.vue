<template>
    <section class="py-16">
        <v-container class="cta-section">
            <v-row align="center" justify="space-between">
                <v-col cols="12" md="auto">
                    <div class="conten">
                        <h2 class="">
                            Conviértete En Voluntario O Dona Para Apoyar Nuestra Misión!!!
                        </h2>

                    </div>
                </v-col>
                <v-col cols="12" md="6" class="d-flex gap-4 justify-md-end">
                    <v-btn color="red-lighten-1" variant="flat" class="btn-custom">
                        Ser voluntario
                    </v-btn>
                    <v-btn color="teal-lighten-1" variant="flat" class="btn-custom">
                        Hacer donación
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>

    </section>
</template>

<style lang="scss" scoped>
section {
    background: #FF8C42;
    text-align: left;
}

.conten {
    max-width: 440px;

}

h2 {
    font-size: $fs-2xl;
    font-weight: 600;
    color: #F5F5F5;

}
</style>