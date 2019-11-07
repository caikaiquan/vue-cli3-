<template>
  <div class="sweep-cod">
    <h1>这里是扫码枪事件Demo</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keycode: "",
      lastTime: null,
      nextTime: null,
      lastCode: null,
      nextCode: null
    };
  },
  created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      // 当前输入的code
      let nowcode;
      // 兼容处理
      if (window.event) {
        nowcode = e.keyCode;
      } else if (e.which) {
        nowcode = e.which;
      }
      // 获取当前时间
      let nowTime = new Date().getTime();
      // 条码存在 输入时间小于30毫秒 以回车结束  判断认定为扫码结束
      if ( nowcode === 13 && this.keycode != "" && nowTime - this.lastTime <= 30 ) {
        console.log(this.keycode);
        this.keycode = "";
        this.lastCode = null;
        this.lastTime = null;
      } else {
        if (this.lastTime == null && this.lastCode == null) {
          // 初始化赋值
          this.keycode = String.fromCharCode(nowcode);
        } else if ( this.lastCode != null && this.lastTime != null && nowTime - this.lastTime <= 30 ) {
          this.keycode += String.fromCharCode(nowcode);
        } else { 
          this.keycode = "";  
          this.lastCode = null;
          this.lastTime = null;
        }
        this.lastCode = nowcode;
        this.lastTime = nowTime;
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
};
</script>

<style lang='scss' scoped>
</style>
/* 
// 扫码枪事件
      var keycode = "";
      var lastTime = null;
      var nextTime = null;
      var lastCode = null;
      var nextCode = null;

      document.onkeydown = function(e) {
        console.log(111);
        //兼容性处理
        if (window.event) {
          nextCode = e.keyCode;
        } else if (e.which) {
          nextCode = e.which;
        }

        //获取当前时间
        nextTime = new Date().getTime();

        if (nextCode == 13 && keycode != "" && nextTime - lastTime <= 30) {
          //回车字符
          console.log(keycode);
          keycode = "";
          lastCode = null;
          lastTime = null;
        } else {
          //此处可以增加限制nextCode的种类例如数字
          if (lastCode == null && lastTime == null) {
            //初始字母
            keycode = String.fromCharCode(nextCode);
          } else if (
            lastCode != null &&
            lastTime != null &&
            nextTime - lastTime <= 30
          ) {
            keycode += String.fromCharCode(nextCode);
          } else {
            //手动输入
            keycode = "";
            lastCode = null;
            lastTime = null;
          }
          lastCode = nextCode;
          lastTime = nextTime;
        }
      };


 */
