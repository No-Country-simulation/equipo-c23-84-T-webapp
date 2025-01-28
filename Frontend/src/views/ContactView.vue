<script setup>
import ContactForm from '@/components/ContactForm.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import ContactOverview from '@/components/ContactOverview.vue';


</script>
<template>
    <div>
        <ContactOverview />
        <VContainer class="py-16">
            <VRow>
                <VCol cols="12" md="6">
                    <ContactInfo />
                </VCol>
                <VCol cols="12" md="6">
                    <ContactForm />
                </VCol>
            </VRow>
        </VContainer>

    </div>
</template>


<style lang="scss" scoped></style>