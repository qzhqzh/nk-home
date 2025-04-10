<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SunrisePage from './views/SunrisePage.vue'
import SunsetPage from './views/SunsetPage.vue'

const { locale } = useI18n()
const currentRoute = ref('sunrise')

// 语言切换处理
const toggleLanguage = (value) => {
  locale.value = value ? 'en' : 'zh'
}
</script>

<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <v-app-bar color="primary">
      <v-container class="d-flex align-center">
        <v-btn
          v-for="item in ['sunrise', 'sunset']"
          :key="item"
          :class="{ 'text-white': currentRoute === item }"
          variant="text"
          :active="currentRoute === item"
          @click="currentRoute = item"
        >
          {{ item.charAt(0).toUpperCase() + item.slice(1) }}
        </v-btn>
        
        <v-spacer />

        <!-- 语言切换开关 -->
        <div class="d-flex align-center">
          <span class="text-white mr-2">中</span>
          <v-switch
            v-model="locale"
            :true-value="'en'"
            :false-value="'zh'"
            hide-details
            inset
            density="compact"
            color="white"
          ></v-switch>
          <span class="text-white ml-2">En</span>
        </div>
      </v-container>
    </v-app-bar>

    <!-- 主要内容区域 -->
    <v-main class="mt-15">
      <component 
        :is="currentRoute === 'sunrise' ? SunrisePage : SunsetPage"
        v-model:currentRoute="currentRoute"
      />
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.v-switch {
  margin-top: 0;
}

/* 自定义开关样式 */
:deep(.v-switch__track) {
  opacity: 0.5;
}

:deep(.v-switch__thumb) {
  color: white;
}
</style>