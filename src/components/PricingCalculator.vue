<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive state
const users = ref(10)
const plan = ref<'basic' | 'pro' | 'enterprise'>('pro')

// Pricing tiers
const pricing = {
  basic: { basePrice: 29, perUser: 3, features: ['Email Support', 'Basic Analytics', '10GB Storage'] },
  pro: { basePrice: 99, perUser: 8, features: ['Priority Support', 'Advanced Analytics', '100GB Storage', 'API Access'] },
  enterprise: { basePrice: 299, perUser: 15, features: ['24/7 Support', 'Custom Analytics', 'Unlimited Storage', 'API Access', 'Dedicated Manager'] }
}

// Computed values
const selectedPlan = computed(() => pricing[plan.value])
const monthlyPrice = computed(() => {
  return selectedPlan.value.basePrice + (users.value * selectedPlan.value.perUser)
})
const annualPrice = computed(() => {
  return Math.round(monthlyPrice.value * 12 * 0.85) // 15% discount for annual
})
const savingsAmount = computed(() => {
  return (monthlyPrice.value * 12) - annualPrice.value
})

// Methods
const selectPlan = (selectedPlan: 'basic' | 'pro' | 'enterprise') => {
  plan.value = selectedPlan
}
</script>

<template>
  <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl">
    <!-- Plan Selection -->
    <div class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Select Your Plan</h3>
      <div class="grid grid-cols-3 gap-4">
        <button
          @click="selectPlan('basic')"
          :class="[
            'p-4 rounded-lg border-2 transition-all duration-200',
            plan === 'basic'
              ? 'border-indigo-600 bg-indigo-50 shadow-md'
              : 'border-gray-200 hover:border-indigo-300'
          ]"
        >
          <div class="font-bold text-gray-900">Basic</div>
          <div class="text-sm text-gray-600">${{ pricing.basic.basePrice }}/mo</div>
        </button>
        <button
          @click="selectPlan('pro')"
          :class="[
            'p-4 rounded-lg border-2 transition-all duration-200 relative',
            plan === 'pro'
              ? 'border-indigo-600 bg-indigo-50 shadow-md'
              : 'border-gray-200 hover:border-indigo-300'
          ]"
        >
          <div class="absolute -top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
            Popular
          </div>
          <div class="font-bold text-gray-900">Pro</div>
          <div class="text-sm text-gray-600">${{ pricing.pro.basePrice }}/mo</div>
        </button>
        <button
          @click="selectPlan('enterprise')"
          :class="[
            'p-4 rounded-lg border-2 transition-all duration-200',
            plan === 'enterprise'
              ? 'border-indigo-600 bg-indigo-50 shadow-md'
              : 'border-gray-200 hover:border-indigo-300'
          ]"
        >
          <div class="font-bold text-gray-900">Enterprise</div>
          <div class="text-sm text-gray-600">${{ pricing.enterprise.basePrice }}/mo</div>
        </button>
      </div>
    </div>

    <!-- User Count Slider -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-4">
        <label class="text-2xl font-bold text-gray-900">Number of Users</label>
        <div class="text-3xl font-bold text-indigo-600">{{ users }}</div>
      </div>
      <input
        v-model.number="users"
        type="range"
        min="1"
        max="100"
        class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div class="flex justify-between text-sm text-gray-600 mt-2">
        <span>1 user</span>
        <span>100 users</span>
      </div>
    </div>

    <!-- Price Display -->
    <div class="bg-white rounded-xl p-6 mb-6 shadow-md">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <div class="text-sm text-gray-600 mb-2">Monthly Price</div>
          <div class="text-4xl font-bold text-gray-900">
            ${{ monthlyPrice.toLocaleString() }}
            <span class="text-lg text-gray-600">/month</span>
          </div>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
          <div class="text-sm text-green-800 mb-2 font-semibold">Annual Price (Save 15%)</div>
          <div class="text-3xl font-bold text-green-900">
            ${{ annualPrice.toLocaleString() }}
            <span class="text-base text-green-700">/year</span>
          </div>
          <div class="text-sm text-green-700 mt-1">
            Save ${{ savingsAmount.toLocaleString() }} per year
          </div>
        </div>
      </div>
    </div>

    <!-- Features List -->
    <div class="mb-6">
      <h4 class="font-bold text-gray-900 mb-3">Included Features:</h4>
      <ul class="space-y-2">
        <li
          v-for="feature in selectedPlan.features"
          :key="feature"
          class="flex items-center text-gray-700"
        >
          <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- CTA Button -->
    <button class="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
      Get Started with {{ plan.charAt(0).toUpperCase() + plan.slice(1) }} Plan
    </button>
  </div>
</template>

<style scoped>
/* Custom slider styling */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  background: #4f46e5;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-webkit-slider-thumb:hover {
  background: #4338ca;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: #4f46e5;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb:hover {
  background: #4338ca;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
