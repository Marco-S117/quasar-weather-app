<template>
  <q-layout view="hHh Lpr fFf">
    <AppHeader />
    <AppFooter />
    <q-page-container>
      <transition name="page-change" mode="out-in" appear leave-absolute>
        <keep-alive>
          <router-view :content="content" />
        </keep-alive>
      </transition>
    </q-page-container>
    <q-img
      :src="HeaderBg"
      class="header-image absolute-top"
      position="top"
    />
  </q-layout>
</template>

<script>
import AppHeader from 'components/layout/AppHeader.vue'
import AppFooter from 'components/layout/AppFooter.vue'
import HeaderBg from 'assets/images/bg.jpg'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    HeaderBg
  })
}
</script>

<style lang="scss">
h1 {
  font-size: $h1-size;
  line-height: $h1-size;
}
h2 {
  font-size: $h2-size;
  line-height: $h2-size;
}
h3 {
  font-size: $h3-size;
  line-height: $h3-size;
}
h4 {
  font-size: $h4-size;
  line-height: $h4-size;
}
h5 {
  font-size: $h5-size;
  line-height: $h5-size;
}
h6 {
  font-size: $h6-size;
  line-height: $h6-size;
}
p,
span {
  font-size: $text-size;
  line-height: $text-size;
}

.header-image {
  z-index: -1;
  height: 100%;
  opacity: 0.4;
  filter: brightness(0.4);
}

.autocomplete-list {
  height: 130px;
  border-radius: 0 0 4px 4px;
  background: rgba(255, 255, 255, 0.07);
  padding-left: 8px;

  span:hover {
    color: red;
  }
}
</style>
