import{ao as t,ap as l,_ as d}from"./common-BPpnT40K.js";import"./vendor-C7DIqufh.js";const i={class:"DisplayType"},p={class:"content"},m={key:0,class:"right"},c={key:0,class:"right"},y={key:0,class:"right"},E=Vue.defineComponent({name:"DisplayType",__name:"DisplayType",setup(T){const r=VueRouter.useRouter(),a=VueRouter.useRoute(),o=Vue.reactive({displayType:t.DISPLAY_TYPE.ALL});Vue.onMounted(()=>{o.displayType=~~a.query.displayType});function s(n){o.displayType=n,localStorage.setItem("changeDisplayType",n),r.back()}return(n,e)=>{const V=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",i,[Vue.createVNode(V,null,{center:Vue.withCtx(()=>e[3]||(e[3]=[Vue.createElementVNode("span",{class:"f16"},"展示范围",-1)])),_:1}),Vue.createElementVNode("div",p,[Vue.createElementVNode("div",{class:"row",onClick:e[0]||(e[0]=u=>s(Vue.unref(t).DISPLAY_TYPE.ALL))},[e[5]||(e[5]=Vue.createElementVNode("div",{class:"left"},"公开可见",-1)),o.displayType===Vue.unref(t).DISPLAY_TYPE.ALL?(Vue.openBlock(),Vue.createElementBlock("div",m,e[4]||(e[4]=[Vue.createElementVNode("img",{src:l,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:e[1]||(e[1]=u=>s(Vue.unref(t).DISPLAY_TYPE.SCHOOL))},[e[7]||(e[7]=Vue.createElementVNode("div",{class:"left"},"校友可见",-1)),o.displayType===Vue.unref(t).DISPLAY_TYPE.SCHOOL?(Vue.openBlock(),Vue.createElementBlock("div",c,e[6]||(e[6]=[Vue.createElementVNode("img",{src:l,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:e[2]||(e[2]=u=>s(Vue.unref(t).DISPLAY_TYPE.ME))},[e[9]||(e[9]=Vue.createElementVNode("div",{class:"left"},"仅自己可见",-1)),o.displayType===Vue.unref(t).DISPLAY_TYPE.ME?(Vue.openBlock(),Vue.createElementBlock("div",y,e[8]||(e[8]=[Vue.createElementVNode("img",{src:l,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)])])])}}}),k=d(E,[["__scopeId","data-v-53244791"]]);export{k as default};
