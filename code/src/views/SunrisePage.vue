<template>
  <div class="sunrise-page">
    <!-- 第一部分：全宽背景图和介绍 -->
    <div class="hero-section">
      <v-img
        src="/images/hero-wide.jpg" 
        :aspect-ratio="16/6"
        cover
        class="hero-image"
      >
       <!-- 需要替换为实际的图片路径 -->
        <div class="hero-overlay">
          <v-container>
            <v-row justify="center" align="center" style="height: 100%">
              <v-col cols="12" md="8" class="text-center">
                <h1 class="text-h2 font-weight-bold hero-title mb-6">
                  {{ t('sunrise.hero.title') }}
                </h1>
                <p class="text-h5 hero-subtitle">
                  {{ t('sunrise.hero.subtitle') }}
                </p>
                <v-btn
                  color="primary"
                  size="x-large"
                  class="mt-6"
                  elevation="2"
                >
                  {{ t('sunrise.hero.button') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </div>

    <!-- 第二部分：价格方案 -->
    <v-container class="my-15">
      <h2 class="text-h4 text-center mb-10">{{ t('sunrise.pricing.title') }}</h2>
      <v-row>
        <!-- 基础方案 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="2">
            <v-card-title class="text-center text-h5 pt-6">
              {{ t('sunrise.pricing.basic.name') }}
            </v-card-title>
            <v-card-text class="text-center">
              <div class="text-h4 mb-4">{{ t('sunrise.pricing.basic.price') }}</div>
              <v-list density="compact">
                <template v-for="(_, index) in 3" :key="index">
                  <v-list-item>
                    <v-list-item-title>
                      {{ t(`sunrise.pricing.basic.features.${index}`) }}
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-center pb-6">
              <v-btn color="primary">{{ t('sunrise.pricing.basic.button') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 进阶方案 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="4" color="primary">
            <v-card-title class="text-center text-h5 pt-6 white--text">
              {{ t('sunrise.pricing.pro.name') }}
            </v-card-title>
            <v-card-text class="text-center">
              <div class="text-h4 mb-4 white--text">{{ t('sunrise.pricing.pro.price') }}</div>
              <v-list>
                <template v-for="(_, index) in 3" :key="index">
                  <v-list-item>
                    <v-list-item-title>
                      {{ t(`sunrise.pricing.pro.features.${index}`) }}
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-center pb-6">
              <v-btn color="white" variant="elevated">{{ t('sunrise.pricing.pro.button') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 专业方案 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="2">
            <v-card-title class="text-center text-h5 pt-6">
              {{ t('sunrise.pricing.premium.name') }}
            </v-card-title>
            <v-card-text class="text-center">
              <div class="text-h4 mb-4">{{ t('sunrise.pricing.premium.price') }}</div>
              <v-list density="compact">
                <template v-for="(_, index) in 3" :key="index">
                  <v-list-item>
                    <v-list-item-title>
                      {{ t(`sunrise.pricing.premium.features.${index}`) }}
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
            <v-card-actions class="justify-center pb-6">
              <v-btn color="primary">{{ t('sunrise.pricing.premium.button') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 第三部分：开发理念 -->
    <v-container fluid class="philosophy-section grey lighten-4 py-15">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h4 mb-6">{{ t('sunrise.philosophy.title') }}</h2>
          <v-row>
            <v-col cols="12" md="4">
              <v-icon size="48" color="primary" class="mb-4">mdi-lightbulb</v-icon>
              <h3 class="text-h6 mb-2">{{ t('sunrise.philosophy.innovation.title') }}</h3>
              <p>{{ t('sunrise.philosophy.innovation.desc') }}</p>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon size="48" color="primary" class="mb-4">mdi-shield-check</v-icon>
              <h3 class="text-h6 mb-2">{{ t('sunrise.philosophy.quality.title') }}</h3>
              <p>{{ t('sunrise.philosophy.quality.desc') }}</p>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon size="48" color="primary" class="mb-4">mdi-account-group</v-icon>
              <h3 class="text-h6 mb-2">{{ t('sunrise.philosophy.userFirst.title') }}</h3>
              <p>{{ t('sunrise.philosophy.userFirst.desc') }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits(['update:currentRoute'])

const navigateToDatabase = () => {
  emit('update:currentRoute', 'database')
}
</script>

<style scoped>
.sunrise-page {
  overflow-x: hidden;
}

.hero-section {
  position: relative;
  width: 100%;
  margin-top: -64px; /* 抵消 app-bar 的高度 */
}

.hero-image {
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3)
  );
  display: flex;
  align-items: center;
}

.hero-title {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.philosophy-section {
  background-color: #f5f5f5;
}

.v-card-text {
  line-height: 1.6;
}
</style> 