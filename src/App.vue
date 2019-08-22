<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{ outline: none; -webkit-tap-highlight-color: transparent;  -webkit-touch-callout:none;-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0}
html,body,fieldset,img,iframe,abbr{border:0;}
body, html {width: 100%; font-weight: normal;}
body{ margin: 0;padding: 0;background: #F1F1F1}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;}
li{list-style:none;}
textarea{overflow:auto;resize:none;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
a,a:hover{text-decoration:none;}
a{text-decoration:none;  }
input{-webkit-appearance:none; }
img{vertical-align: top;border:none;}
.pull-left{float: left;}
.pull-right{float: right;}
.text-center{text-align: center;}
.text-left{text-align: left;}
.text-right{text-align: right;}
.clearfix{clear: both;}
.el-button--success{background-color: #409EFF;border-color: #409EFF;}
body{padding-top: 90px;}
.inner{width: 1400px;margin: auto;display: inline-block;position: relative;}

@media screen and (min-width: 1400px) {
  .inner{width: 1400px;}
}
@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .inner{width: 1200px;}
}
@media screen and (max-width: 1199px) {
  .inner{width: 1000px;}
}

</style>
