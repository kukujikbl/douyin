import{u as a,g as c,t as r,_ as u}from"./common-BPpnT40K.js";import"./vendor-C7DIqufh.js";const l={class:"RequestUpdate",id:"RequestUpdate"},d={class:"content"},V={class:"request"},_={class:"list"},i={class:"left"},m=["src"],p={class:"name"},f={class:"time"},E=Vue.defineComponent({name:"MyRequestUpdate",__name:"MyRequestUpdate",setup(h){const s=a();return(v,t)=>{const n=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",l,[Vue.createVNode(n,null,{center:Vue.withCtx(()=>t[0]||(t[0]=[Vue.createElementVNode("span",{class:"f16"},"我的求更新记录",-1)])),_:1}),Vue.createElementVNode("div",d,[Vue.createElementVNode("div",V,[Vue.createElementVNode("div",_,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(s).friends.all,(e,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:o},[Vue.createElementVNode("div",i,[Vue.createElementVNode("img",{src:Vue.unref(c)(e.avatar)},null,8,m),Vue.createElementVNode("span",p,Vue.toDisplayString(e.name),1)]),Vue.createElementVNode("span",f,Vue.toDisplayString(Vue.unref(r)(e.lastLoginTime,"D")),1)]))),128))])])])])}}}),k=u(E,[["__scopeId","data-v-13014c92"]]);export{k as default};
