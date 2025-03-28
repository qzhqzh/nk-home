<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SunrisePage from './views/SunrisePage.vue'
import SunsetPage from './views/SunsetPage.vue'

const { locale } = useI18n()
const currentRoute = ref('sunrise')

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' }
]
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

        <!-- 语言切换菜单 -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              class="text-white"
            >
              {{ languages.find(lang => lang.code === locale)?.name }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="lang in languages"
              :key="lang.code"
              :value="lang.code"
              @click="locale = lang.code"
            >
              <v-list-item-title>{{ lang.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
</style>