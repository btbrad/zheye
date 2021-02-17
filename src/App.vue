<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: 'test1111',
    avatar: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=vue&step_word=&hs=0&pn=0&spn=0&di=3190&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3866427781%2C859233610&os=4083456895%2C2180831939&simid=150579757%2C808925494&adpicid=0&lpn=0&ln=1795&fr=&fmq=1613575903028_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fwww.linchaoqun.com%3A6003%2F2018-2-23%2Fa67cb6e0c68988848f41c1b92f8a569477c80920adb86b1c3a252d92d1cc07f5.jpg%26refer%3Dhttp%3A%2F%2Fwww.linchaoqun.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1616167907%26t%3Dc41235dde25bc99acdea290a8a6dd7e4&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bstgviw5q7g_z%26e3Bv54AzdH3Fip4sAzdH3Fv4fAzdH3Fv5gpjgp_z%26e3B3fr%3F4jg7%3De7j3f%26t1%3Dum0lu0jj-lk80-9dbb-kdca-0n8djcmkd9wl&gsm=1&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: 'test2222',
    avatar: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=vue&step_word=&hs=0&pn=0&spn=0&di=3190&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3866427781%2C859233610&os=4083456895%2C2180831939&simid=150579757%2C808925494&adpicid=0&lpn=0&ln=1795&fr=&fmq=1613575903028_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fwww.linchaoqun.com%3A6003%2F2018-2-23%2Fa67cb6e0c68988848f41c1b92f8a569477c80920adb86b1c3a252d92d1cc07f5.jpg%26refer%3Dhttp%3A%2F%2Fwww.linchaoqun.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1616167907%26t%3Dc41235dde25bc99acdea290a8a6dd7e4&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bstgviw5q7g_z%26e3Bv54AzdH3Fip4sAzdH3Fv4fAzdH3Fv5gpjgp_z%26e3B3fr%3F4jg7%3De7j3f%26t1%3Dum0lu0jj-lk80-9dbb-kdca-0n8djcmkd9wl&gsm=1&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
