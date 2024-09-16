<script setup>

import {onMounted, watch} from "vue";

const appStores = useAppStores()

const {menuModal} = storeToRefs(appStores)

function menuOpenClose() {
  appStores.setMenuModal(!menuModal.value)
}

const menu = ref([
  {name: 'Главная', path: '/'},
  {name: 'Преимущества Tele2', path: '/advantages/'},
  {name: 'Тарифы', path: '/tariffs/'},
  {name: 'Акции и спецпредложения', path: '/stock/'},
  {name: 'Промотариф Tele2', path: '/promo-tariffs/'},
  {name: 'Технология eSIM', path: '/esim/'},
  {name: 'Подключение нового абонента', path: '/add-user/'},
])


const activeLink = computed(() => {
  return useRoute()?.fullPath
})

watch(activeLink, () => {
  let namePage = menu.value.filter(e => {
    return e.path === useRoute()?.fullPath
  })[0]
  appStores.setNamePage(namePage)
})

onMounted(() => {
  let namePage = menu.value.filter(e => {
    return e.path === useRoute()?.fullPath
  })[0]
  appStores.setNamePage(namePage)
})

</script>
<template>
  <div class="min-h-full">
    <nav class="bg-[#1F2229]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <nuxt-link to="/">
              <i-tele class="!w-[40px] !h-[18px] text-white"></i-tele>
            </nuxt-link>

          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="flex relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <div class="flex mr-8 color-[#7C8792]"><i-location class="!w-[20px] !h-[20px] mr-1"/><div class="-mt-1">Москва и область</div> </div>
                <i-bell class="!w-[20px] !h-[20px] text-white"></i-bell>
              </div>
            </div>
          </div>
          <div class="flex md:hidden">
            <i-bell class="mt-1 mr-2 !w-[27px] !h-[27px] text-white"></i-bell>
            <div  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu" aria-expanded="false"
                  @click="menuOpenClose"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <i-burger v-if="!menuModal"/>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <i-close v-if="menuModal"/>
            </div>

          </div>
        </div>
      </div>

      <div class="md:hidden" id="mobile-menu">
        <div v-if="menuModal" class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <client-only>
            <nuxt-link
                v-for="link in menu"
                :class="activeLink === link.path
                ? 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'"
                :key="link.name"
                :to="link.path"
            >{{ link.name }}
            </nuxt-link>
          </client-only>
        </div>

      </div>
    </nav>
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <client-only>
            <nuxt-link
                v-for="link in menu"
                :class="activeLink === link.path
                ? 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'"
                :key="link.name"
                :to="link.path"
            >{{ link.name }}
            </nuxt-link>
          </client-only>
        </div>
      </div>
    </nav>
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <slot/>
      </div>
       <div class="md:hidden p-4 bg-[#F3F5F6] absolute bottom-0 flex mr-8 color-[#7C8792]"><i-location class="!w-[20px] !h-[20px] mr-1"/><div class="-mt-1">Москва и область</div> </div>

    </main>
  </div>
</template>