<script setup>
import {
  FirstSection,
  FourSection,
  LastSection,
  SecondSection,
  ThirdSection
} from '@/components/homeview/'
import { onMounted } from 'vue'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token')
    const passageUser = new PassageUser(authToken)
    const user = await passageUser.userInfo(authToken)
    if (user) {
      await authStore.setToken(authToken)
    } else {
      authStore.unsetToken()
    }
  } catch (error) {
    authStore.unsetToken()
  }
}

onMounted(async () => {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach((el) => observer.observe(el))
  await getUserInfo()
})
</script>
<template>
  <FirstSection class="hidden fade-in" />
  <SecondSection class="hidden fade-in" />
  <ThirdSection class="hidden fade-in" />
  <FourSection class="hidden fade-in" />
  <LastSection class="hidden fade-in" />
</template>
<style scoped>
.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s,
    transform 0.6s;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
