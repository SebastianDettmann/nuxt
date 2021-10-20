<template>
  <div>
    <TheHeader @sidenavToggle="onSideNavToggle"/>
    <TheSidenav :show="displaySideNav" @close="onSideNavClose"/>
    <nuxt/>
  </div>
</template>
<script>
import TheHeader  from '~/components/Navigation/TheHeader'
import TheSidenav  from '~/components/Navigation/TheSidenav'
export default {
  components: {
    TheHeader, TheSidenav
  },
  data() {
    return {
      displaySideNav: false
    }
  },
  methods: {
    onSideNavToggle() {
      this.displaySideNav = !this.displaySideNav;
    },
    onSideNavClose() {
      this.displaySideNav = false;
    }
  }
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
