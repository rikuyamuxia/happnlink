import{_ as c,C as u,av as V,a as p,b as m,d as C,a0 as v}from"./common-Cj2DXq7d.js";import{L as f}from"./LoginInput-BtWIv_vi.js";import{T as N}from"./Tooltip-C8ynZJbl.js";import{B as h}from"./Base-BkRnk7Bb.js";import"./vendor-EcFAmbRN.js";const k={name:"RetrievePassword",extends:h,components:{Check:u,Tooltip:N,LoginInput:f},data(){return{phone:"",password:"",code:"",notice:"",isSendVerificationCode:!0,showVoiceCode:!1}},computed:{disabled(){return!(this.code&&this.password)}},created(){setTimeout(()=>{this.showVoiceCode=!0},3e3)},methods:{getVoiceCode(){return V("语音验证码","我们将以电话的方式告知你验证码，请注意接听","",()=>{setTimeout(()=>{v("","您的手机可能由于空号/欠费/停机无法收到验证码，请恢复手机号状态，如果您因为换号无法收到验证码，可以尝试找回账号","",()=>{},null,"找回账号","返回","")},2e3)},"知道了")},async sendCode(){p(),await m(500),C(),this.isSendVerificationCode=!0},async login(){await this.check()&&(this.loading=!0)}}},g=o=>(Vue.pushScopeId("data-v-44ab1bde"),o=o(),Vue.popScopeId(),o),w={class:"RetrievePassword"},_={class:"content"},b=g(()=>Vue.createElementVNode("div",{class:"desc"},[Vue.createElementVNode("div",{class:"title"},"找回密码"),Vue.createElementVNode("div",{class:"sub-title"}," 验证码已通过短信发送到+86 13800138000。 密码为8 - 20位，至少包含字母、数字、符号2种组合 ")],-1)),y={class:"left"},E={class:"right"},T={key:0,class:"notice"},S={key:1,class:"options"};function B(o,e,I,L,s,n){const i=Vue.resolveComponent("BaseHeader"),d=Vue.resolveComponent("LoginInput"),l=Vue.resolveComponent("Tooltip"),a=Vue.resolveComponent("Check"),r=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createVNode(i,{mode:"light",backMode:"dark",backImg:"back"}),Vue.createElementVNode("div",_,[b,Vue.createVNode(d,{autofocus:"",type:"code",modelValue:s.code,"onUpdate:modelValue":e[0]||(e[0]=t=>s.code=t),placeholder:"请输入验证码",isSendVerificationCode:s.isSendVerificationCode,"onUpdate:isSendVerificationCode":e[1]||(e[1]=t=>s.isSendVerificationCode=t),onSend:n.sendCode},null,8,["modelValue","isSendVerificationCode","onSend"]),Vue.createVNode(d,{class:"mt1r",autofocus:"",type:"password",modelValue:s.password,"onUpdate:modelValue":e[2]||(e[2]=t=>s.password=t),placeholder:"请输入密码"},null,8,["modelValue"]),Vue.createElementVNode("div",{class:Vue.normalizeClass(["protocol",o.showAnim?"anim-bounce":""])},[Vue.createVNode(l,{style:{top:"-150%",left:"-10rem"},modelValue:o.showTooltip,"onUpdate:modelValue":e[3]||(e[3]=t=>o.showTooltip=t)},null,8,["modelValue"]),Vue.createElementVNode("div",y,[Vue.createVNode(a,{modelValue:o.isAgree,"onUpdate:modelValue":e[4]||(e[4]=t=>o.isAgree=t)},null,8,["modelValue"])]),Vue.createElementVNode("div",E,[Vue.createTextVNode(" 已阅读并同意 "),Vue.createElementVNode("span",{class:"link",onClick:e[5]||(e[5]=t=>o.$router.push("/service-protocol",{type:"“抖音”用户服务协议"}))},"用户协议"),Vue.createTextVNode(" 和 "),Vue.createElementVNode("span",{class:"link",onClick:e[6]||(e[6]=t=>o.$router.push("/service-protocol",{type:"“抖音”隐私政策"}))},"隐私政策"),Vue.createTextVNode(" ，同时登录并使用抖音火山版（原“火山小视频”）和抖音 ")])],2),s.notice?(Vue.openBlock(),Vue.createElementBlock("div",T,Vue.toDisplayString(s.notice),1)):Vue.createCommentVNode("",!0),Vue.createVNode(r,{type:"primary",loading:o.loading,active:!1,loadingWithText:!0,disabled:n.disabled,onClick:n.login},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 完成 ")]),_:1},8,["loading","disabled","onClick"]),s.showVoiceCode?(Vue.openBlock(),Vue.createElementBlock("div",S,[Vue.createElementVNode("span",null,[Vue.createTextVNode(" 收不到短信？"),Vue.createElementVNode("span",{class:"link",onClick:e[7]||(e[7]=(...t)=>n.getVoiceCode&&n.getVoiceCode(...t))},"获取语音验证码")])])):Vue.createCommentVNode("",!0)])])}const R=c(k,[["render",B],["__scopeId","data-v-44ab1bde"]]);export{R as default};
