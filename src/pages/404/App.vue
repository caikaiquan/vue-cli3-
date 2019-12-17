<template>
  <div id="app">
    <div class="error-content">
      <img src="../../assets/images/system-error.png" alt="">
      <span>系统出了个小差，程序员小哥哥正在快马加鞭的修复中，请您体谅！</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  padding-top: 1px;
  background: #fff;
  .error-content{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      margin-top: 20px;
      font-size: 16px;
      color: #333;
    }
  }  
}
</style>
