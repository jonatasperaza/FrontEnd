<script setup>
import FirstGraphsComp from '@/components/admin/Dashboard/graphs/FirstGraphsComp.vue';
import SectionCards from '@/components/admin/Dashboard/SectionCards.vue';
import ManageAllComp from '@/components/admin/ManageAll/ManageAllComp.vue';
import ManagePeoples from '@/components/admin/ManageAll/ManagePeoples.vue';
</script>

<template>
    <main>
        <SectionCards />
        <FirstGraphsComp />
        <ManageAllComp />
        <ManagePeoples />
    </main>
</template>
