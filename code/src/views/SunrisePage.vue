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
      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 mb-4">{{ t('sunrise.pricing.title') }}</h2>
          <p class="text-body-1 mb-8">{{ t('sunrise.pricing.subtitle') }}</p>
        </v-col>
      </v-row>

      <v-row>
        <!-- 网站搭建服务 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="2">
            <v-card-title class="text-center text-h5 pt-6">
              <v-icon size="large" color="primary" class="mb-2">mdi-web</v-icon>
              <div>{{ t('sunrise.pricing.website.name') }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.website.features.0') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.website.features.1') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.website.features.2') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 数据分析服务 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="4" color="primary">
            <v-card-title class="text-center text-h5 pt-6 white--text">
              <v-icon size="large" class="mb-2 white--text">mdi-chart-bar</v-icon>
              <div>{{ t('sunrise.pricing.data.name') }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <v-list>
                <v-list-item>
                  <v-list-item-title class="white--text">{{ t('sunrise.pricing.data.features.0') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="white--text">{{ t('sunrise.pricing.data.features.1') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="white--text">{{ t('sunrise.pricing.data.features.2') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 科技写作服务 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" elevation="2">
            <v-card-title class="text-center text-h5 pt-6">
              <v-icon size="large" color="primary" class="mb-2">mdi-pencil</v-icon>
              <div>{{ t('sunrise.pricing.writing.name') }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.writing.features.0') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.writing.features.1') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>{{ t('sunrise.pricing.writing.features.2') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
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

    <!-- 第四部分：价格计算器 -->
    <v-container class="my-15">
      <h2 class="text-h4 text-center mb-10">{{ t('sunrise.calculator.title') }}</h2>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-6" elevation="2">
            <!-- 基础设置 -->
            <div class="mb-6">
              <h3 class="text-h6 mb-4">{{ t('sunrise.calculator.basicSettings') }}</h3>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="developmentWeeks"
                    type="number"
                    :label="t('sunrise.calculator.weeks')"
                    min="1"
                    step="1"
                    variant="outlined"
                    :rules="[v => !!v || 'Required']"
                    required
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <!-- 可选服务 -->
            <div class="mb-6">
              <h3 class="text-h6 mb-4">{{ t('sunrise.calculator.optionalServices') }}</h3>
              <v-row>
                <!-- 立项与架构 -->
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="includeSetup"
                    :label="t('sunrise.calculator.includeSetup')"
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-text-field
                    v-if="includeSetup"
                    v-model="setupCost"
                    type="number"
                    :label="t('sunrise.calculator.setupCost')"
                    min="0"
                    step="1000"
                    variant="outlined"
                    density="compact"
                    class="mt-2"
                  ></v-text-field>
                </v-col>
                <!-- 维护服务 -->
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="includeMaintenance"
                    :label="t('sunrise.calculator.includeMaintenance')"
                    color="primary"
                    density="compact"
                  ></v-checkbox>
                  <v-select
                    v-if="includeMaintenance"
                    v-model="maintenanceYears"
                    :items="maintenanceOptions"
                    :label="t('sunrise.calculator.maintenanceYears')"
                    variant="outlined"
                    density="compact"
                    class="mt-2"
                  ></v-select>
                </v-col>
              </v-row>
            </div>

            <!-- 计算结果 -->
            <v-divider class="my-4"></v-divider>
            <div class="text-center">
              <h3 class="text-h5 mb-4">{{ t('sunrise.calculator.result') }}</h3>
              <div class="text-h4 primary--text font-weight-bold">
                ¥{{ calculatedPrice.toLocaleString() }}
              </div>
              <p class="text-body-2 mt-4 text-medium-emphasis">
                {{ t('sunrise.calculator.description') }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 页脚 -->
    <v-footer class="mt-15">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <p class="text-body-2">© 2025 Wuhan NuanKong Technology Co., Ltd. All rights reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t } = useI18n()

const emit = defineEmits(['update:currentRoute'])

const developmentWeeks = ref(1)
const includeSetup = ref(true)
const setupCost = ref(5000)
const includeMaintenance = ref(true)
const maintenanceYears = ref('1')
const weeklyRate = ref(5000) // 默认周价格
const calculatorRate = ref(5000) // 计算器使用的周价格

const maintenanceOptions = [
  { title: '1年', value: '1' },
  { title: '3年', value: '3' },
  { title: '5年', value: '5' },
  { title: '终身', value: 'lifetime' }
]

const calculatedPrice = computed(() => {
  let basePrice = calculatorRate.value * developmentWeeks.value

  if (includeSetup.value) {
    basePrice += Number(setupCost.value)
  }

  if (includeMaintenance.value) {
    const maintenanceMultiplier = {
      '1': 1.3,    // 首年30%
      '2': 1.5,    // 首年30% + 1年20%
      '3': 1.7,    // 首年30% + 2年20%
      '4': 1.9,    // 首年30% + 2年20% + 1年40%
      '5': 1.9,    // 首年30% + 2年20% + 2年40%
      'lifetime': 2 // 首年30% + 终身维护
    }
    basePrice *= maintenanceMultiplier[maintenanceYears.value]
  }

  return basePrice
})

const setWeeklyRate = (rate) => {
  weeklyRate.value = rate
}

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
  margin-top: -16px;
  transform: translateY(-16px);
}

.hero-image {
  width: 100%;
  margin-top: -16px;
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

.v-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}
</style> 