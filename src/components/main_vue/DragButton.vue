<template>
  <div ref="dragDiv" class="float-drag-button">
    <span>个人中心</span>
  </div>
</template>

<script>

export default {
  name: "DragButton",
  props:{
    username:{type:String,}
  },
  mounted() {
    this.$nextTick(() => {
      // 获取DOM元素
      let dragDiv = this.$refs.dragDiv;
      // 缓存 clientX clientY 的对象: 用于判断是点击事件还是移动事件
      let clientOffset = {};
      // 绑定鼠标按下事件
      dragDiv.addEventListener("mousedown", (event) => {
        this.$router.push({
          name : 'remember',
          params:{
            username:this.username
          }
        })
        let offsetX = dragDiv.getBoundingClientRect().left; // 获取当前的x轴距离
        let offsetY = dragDiv.getBoundingClientRect().top; // 获取当前的y轴距离
        let innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
        let innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
        console.log(offsetX, offsetY, innerX, innerY);
        // 缓存 clientX clientY
        clientOffset.clientX = event.clientX;
        clientOffset.clientY = event.clientY;
        // 鼠标移动的时候不停的修改div的left和top值
        document.onmousemove = function(event) {
          dragDiv.style.left = event.clientX - innerX + "px";
          dragDiv.style.top = event.clientY - innerY + "px";
          // dragDiv 距离顶部的距离
          let dragDivTop = window.innerHeight - dragDiv.getBoundingClientRect().height;
          // dragDiv 距离左部的距离
          let dragDivLeft = window.innerWidth - dragDiv.getBoundingClientRect().width;
          // 边界判断处理
          // 1、设置左右不能动
          dragDiv.style.left = dragDivLeft + "px";
          // 2、超出顶部处理
          if (dragDiv.getBoundingClientRect().top <= 0) {
            dragDiv.style.top = "0px";
          }
          // 3、超出底部处理
          if (dragDiv.getBoundingClientRect().top >= dragDivTop) {
            dragDiv.style.top = dragDivTop + "px";
          }
        };
        // 鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件；否则鼠标抬起后还可以继续拖拽方块
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }, false);
      // 绑定鼠标松开事件
      dragDiv.addEventListener('mouseup', (event) => {
        let clientX = event.clientX;
        let clientY = event.clientY;
        if (clientX === clientOffset.clientX && clientY === clientOffset.clientY) {
          console.log('click 事件');
        } else {
          console.log('drag 事件');
        }
      })
    });
  }
};
</script>
<style lang="scss" scoped>
.float-drag-button {
  color: #dc8f03;
  position: absolute;
  right: 0;
  top: 40%;
  z-index: 6666;
  padding: 13px;
  width: 15px;
  opacity: 1;
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 2px 15px 0px rgba(9,41,77,0.15);
  cursor: move;
  span {
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    user-select: none;
  }
}
.float-drag-button:hover{
  cursor:pointer;
}
</style>
