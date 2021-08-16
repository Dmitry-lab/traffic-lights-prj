<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    /* Отображаем сохраненное состояние при переходе по маршруту '/', в противном случае обнуляем состояние*/
    if (location.pathname === '/') {
      const savedState = JSON.parse(localStorage.getItem('saved-state'))
      savedState?.prevLight
        ? this.$router.push({name: 'Yellow', params: {prevLight: savedState.prevLight}})
        : savedState
          ? this.$router.push(`/${savedState.color}`)
          : this.$router.push('/red')
      return
    }
    localStorage.removeItem('saved-state')
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
