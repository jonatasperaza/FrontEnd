<script setup>
import FirstSection from '@/components/homeview/FirstSection.vue';
import SecondSection from '@/components/homeview/SecondSection.vue';
import ThirdSection from '@/components/homeview/ThirdSection.vue';
import FourSection from '@/components/homeview/FourSection.vue';
import LastSection from '@/components/homeview/LastSection.vue';

import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(async () => {
  await getUserInfo();
});
</script>
<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourSection />
    <LastSection />
</template>
<style scoped>
</style>
