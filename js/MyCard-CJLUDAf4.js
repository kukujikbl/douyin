import{i as l}from"./other-CDXShWW_.js";import{u,g as d,f as s,q as i,_ as V}from"./common-BPpnT40K.js";import"./vendor-C7DIqufh.js";const c=""+new URL("../assets/code-bg-D9skOJ9I.png",import.meta.url).href,m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADhUExURf///////////////////////////0dwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0uxjokAAABLdFJOU+av4DE6AQoArnRz5Z7Ex4g523mtF9alNqsqtWuJehDjYhxTDgUE4XinNUp9uwub3jugnQ+RqD1cKxPULYAzURROuOIZZj/asHJl2IwBloMAAAFqSURBVFjD7dnpTsJAEADgKaW1VlBuBUVUCooHnqiI4n2+/wMZ291tS0lqujOJJjM/p8yXwC7s7AALBAGMEqJW6eCs6ohY21j9RbG9XpAFzt7F1X0CNR8hFktbqeZmMV5yvOvF0YcczERuOw1dmS0B4yiK3vUTL4CdNHQ5WXMaQa1DwEFhP0Qv5zzO8vYB3kP0Nvk0w0L5ZecKLQSZJyP7lpKfxbVCq2LxNDb8iUBLCnWChKOB5gWaZ5RRKrQRJBoaqClQU6GVIFHRQO2OT3RshdbqP4l6TedgavtoO/Ij3WwBtJpap13PLUPZ7cXOqG5X+xC1ni1uJhhllFHPndMWZYi30SREh4AV/YlEB4AXI4l+IqJfEp0iokWJjm/wUFct1CuaOvTCfTqefiwixMuAv6aMMkqHErSSFE0vSXtOcpEgufLw3ZTR/4CSDLtIxnIkA0S8UadBPJQlGR/TDLppRvI0fx5wh/K30W+t2bJvKRewXQAAAABJRU5ErkJggg==",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURf///////////////////////////0dwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4w4PKQAAAA6dFJOU+YGoi1KEboAdOOoxAVmm3M14dTl2BNRcs3aQnhqzOQnhg9eoJI/ELdSAdJIOAKELiWvWGWBTSih2XaucbhsAAABnklEQVRYw+3Y526DMBAAYKfQNoEEkjaze++9+/4vVppAMOZWpIsqpb4/ICM+IeEbstlcQpjVQ4OoH6dtXTTomSwSXTQy0+iqopMZ2lFFZ6ZpetSjHvWoRz3q0b9Ar08ux6cfi6F3o71DEn34fbMXLoA2zrLlVodAn2avtkIx2librh884uiLwVQEbXzmD3Zx9NZgKozm35nFEY4e32AqiJamuSJ+1E4LUSHUMp/vqX0aIiqAWubGOr35EbWO4iaQUbBaQwkTSlNQdVHKBHMfUh2UNOGCAqhVlDaRKlVXKyhjYqWvptooZ6L11FUtlDXxIu2oJcqbROWvqnNUYFLtpKIWqMQke5St5jffEpNufJaaX2OJyXTTUnWDMrkWjamkyfZ9WKVNfpiAVMYUTCh1lTMlY4+rsqZolqqqvCkb0GxVYAqnvlKVmNJRMtzOM0piiufT96m6f6F9LPc1flM+lvvvR50eXVm0ncZGIyZRUKKJ0YpeUKBdoxdRgb4qov0CHSqicYEOtvTQdP6jztXUpF3u08Fw1FSITten6ZLQH9iMoij01E5dAAAAAElFTkSuQmCC",E={id:"MyCard"},v={class:"header"},U={class:"content"},f={class:"qrcode"},C=["src"],q={class:"footer"},g=Vue.defineComponent({name:"MyCard",__name:"MyCard",setup(k){const r=VueRouter.useRouter(),n=u(),t=Vue.reactive({isSharing:!1,okText:"",showSharePassword:!1,shareToFriend:!1,shareType:-1,showDouyinCode:!1});return Vue.watch(()=>t.shareType,a=>{if(a!==-1)switch(t.showSharePassword=!0,a){case 2:case 3:return t.okText="去微信粘贴";case 4:case 5:return t.okText="去QQ粘贴";case 8:return t.okText="去微博粘贴"}}),(a,e)=>{const A=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",E,[Vue.createElementVNode("div",v,[Vue.createVNode(A,{mode:"light",onClick:Vue.unref(r).back},null,8,["onClick"]),Vue.createElementVNode("img",{class:"share",src:l,onClick:e[0]||(e[0]=o=>t.isSharing=!0)})]),Vue.createElementVNode("div",U,[Vue.createElementVNode("div",f,[e[4]||(e[4]=Vue.createElementVNode("img",{class:"qrcode-bg",src:c,alt:""},null,-1)),Vue.createElementVNode("img",{class:"avatar",src:Vue.unref(d)(Vue.unref(n).userinfo.cover_url[0].url_list[0]),alt:""},null,8,C)]),e[5]||(e[5]=Vue.createElementVNode("span",{class:"name"},"ZZZZZZZZZZ",-1)),e[6]||(e[6]=Vue.createElementVNode("span",{class:"notice"},"抖音扫一扫，立即关注我",-1))]),Vue.createElementVNode("div",q,[Vue.createElementVNode("div",{class:"btn",onClick:e[1]||(e[1]=(...o)=>Vue.unref(s)&&Vue.unref(s)(...o))},e[7]||(e[7]=[Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("img",{src:m,alt:""})],-1),Vue.createElementVNode("span",null,"扫一扫",-1)])),Vue.createElementVNode("div",{class:"btn",onClick:e[2]||(e[2]=(...o)=>Vue.unref(s)&&Vue.unref(s)(...o))},e[8]||(e[8]=[Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("img",{src:p,alt:""})],-1),Vue.createElementVNode("span",null,"保存",-1)]))]),Vue.createVNode(i,{value:t.isSharing,"onUpdate:value":e[3]||(e[3]=o=>t.isSharing=o),mode:"qrcode",ref:"share","page-id":"MyCard"},null,8,["value"])])}}}),O=V(g,[["__scopeId","data-v-90597bc4"]]);export{O as default};
