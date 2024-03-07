import{B as C,T as k}from"./TextareaComp.FsC_rNmi.js";import{_ as b}from"./_plugin-vue_export-helper.x3n3nnut.js";import{x as n,y as c,z as a,A as i,C as h,D as p,E as V,F as g,G as m,H as v,I as S}from"./runtime-core.esm-bundler.g1TQfZFf.js";import{L as j,r as f,u as w}from"./index.c9TmdDbI.js";const T={name:"InputComp",props:{id:{type:String,default:"text"},autocomplete:{type:String,default:"off"},type:{type:String,default:"text"},name:{type:String,default:"text"},placeholder:{type:String,default:null},modelValue:{type:String,default:null},required:{type:Boolean,default:!1},label:{type:String,default:null},error:{type:String,default:null}},methods:{updateValue(t){this.$emit("update:modelValue",t.target.value)}}},q={class:"rounded-md shadow-sm"},B=["for"],P={key:0,class:"text-red-400"},N=["id","name","type","autocomplete","required","placeholder","value"],E={key:0,class:"text-red-500 p-2 mt-3"};function I(t,e,s,l,r,u){return n(),c("div",q,[a("div",null,[a("label",{for:s.id,class:"block text-sm font-medium leading-5 text-gray-700 dark:text-gray-200"},[i(h(s.label)+" ",1),s.required==!0?(n(),c("span",P,"*")):p("",!0),i(": ")],8,B),a("input",{id:s.id,name:s.name,type:s.type,autocomplete:s.autocomplete,required:s.required,class:V(["w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-gray-900 dark:text-gray-400",s.error?"border-red-500":""]),placeholder:s.placeholder,value:s.modelValue,onInput:e[0]||(e[0]=(...d)=>u.updateValue&&u.updateValue(...d))},null,42,N),s.error?(n(),c("span",E,h(s.error),1)):p("",!0)])])}const U=b(T,[["render",I]]),D={name:"ContactView",components:{ButtonComp:C,InputComp:U,TextareaComp:k,LoaderComp:j},data(){return{loading:!1,success:!1,name:null,email:null,message:null,subject:null,error:null,errors:{name:null,email:null,message:null,subject:null}}},watch:{name(t){t?this.errors.name=null:this.errors.name="Please enter your name."},email(t){t&&/\S+@\S+\.\S+/.test(t)?this.errors.email=null:this.errors.email="Please enter your email."},message(t){t?this.errors.message=null:this.errors.message="Please enter your message."},subject(t){t?this.errors.subject=null:this.errors.subject="Please enter your subject."}},mounted(){let t=document.createElement("script");t.src=`https://www.google.com/recaptcha/api.js?render=${f}`,t.async=!0,t.defer=!0,document.head.appendChild(t)},methods:{doSubmi(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return;let e=this;e.success=!1,e.error=null,e.loading=!0,grecaptcha.ready(function(){grecaptcha.execute(f,{action:"submit"}).then(function(s){fetch(w.contact,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,message:e.message,subject:e.subject,captcha:s})}).then(l=>l.json()).then(l=>{l.statusCode!==200?(e.errors=l.body.errors,l.body?.errors?.captcha&&(e.error=l.body.errors.captcha)):(e.loading=!1,e.error=null,e.name=null,e.email=null,e.message=null,e.subject=null,e.success=!0),e.loading=!1}).catch(l=>{e.loading=!1,e.error="Unexpected error occured, please try again."})}).catch(function(s){e.loading=!1,e.error="Google reCaptcha error, please try again."})})}},computed:{disabled(){return!this.name||!this.email||!this.message||!this.subject||this.errors.name||this.errors.email||this.errors.message||this.errors.subject||this.loading}}},L={class:"py-10 px-5 container",id:"contact"},A={class:"grid grid-cols-1 md:grid-cols-2"},G=S('<div class="col-span-1"><h3 class="subtitle dark:text-gray-300">Do you need my help?</h3><div class="dark:text-white text-gray-700 mt-8 dark:text-gray-300"> Hate forms? Send me an <a href="mailto:umer@lablnet.com" class="underline font-bold" target="_blank" rel="noopener noreferrer">email</a> instead. </div><div class="mt-8 p-5 text-center hidden md:block"><img src="/assets/images/contact-art.svg" alt="contact"></div></div>',1),H={role:"form",class:"col-span-1"},M={class:"mt-10"},z={class:"mt-8"},O={class:"mt-8"},F={class:"mt-8"},J={class:"mt-8"},Y={class:"mt-3 mb-3"},K={key:0,class:"mt-3 mb-3 text-red-500"},Q={key:1,class:"mt-3 mb-3 text-green-500"},R=a("p",{class:"text-justify dark:text-gray-300"},[i(" This site is protected by "),a("a",{class:"text-blue-400",href:"https://www.google.com/recaptcha/about/",target:"_blank"}," reCAPTCHA"),i(" and the Google "),a("a",{class:"text-blue-400",href:"https://policies.google.com/privacy",target:"_blank"},"Privacy Policy"),i(" and "),a("a",{class:"text-blue-400",href:"https://policies.google.com/terms",target:"_blank"},"Terms of Service"),i(" apply. ")],-1);function W(t,e,s,l,r,u){const d=g("InputComp"),y=g("TextareaComp"),_=g("LoaderComp"),x=g("ButtonComp");return n(),c("section",L,[a("section",A,[G,a("form",H,[a("div",M,[m(d,{placeholder:"Name",required:!0,error:r.errors.name,label:"Name",modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=o=>r.name=o)},null,8,["error","modelValue"])]),a("div",z,[m(d,{placeholder:"Subject",required:!0,error:r.errors.subject,label:"Subject",type:"text",modelValue:r.subject,"onUpdate:modelValue":e[1]||(e[1]=o=>r.subject=o)},null,8,["error","modelValue"])]),a("div",O,[m(d,{placeholder:"Email",required:!0,error:r.errors.email,label:"Email",type:"email",modelValue:r.email,"onUpdate:modelValue":e[2]||(e[2]=o=>r.email=o)},null,8,["error","modelValue"])]),a("div",F,[m(y,{placeholder:"Message",required:!0,error:r.errors.message,label:"Message",modelValue:r.message,"onUpdate:modelValue":e[3]||(e[3]=o=>r.message=o)},null,8,["error","modelValue"])]),a("div",J,[a("span",Y,[m(_,{loading:r.loading},null,8,["loading"])]),r.error?(n(),c("span",K,h(r.error),1)):p("",!0),r.success?(n(),c("span",Q," Your message has been sent successfully. ")):p("",!0),R,r.loading?p("",!0):(n(),v(x,{key:2,text:"Send Message",onClick:u.doSubmi,disable:u.disabled,b_type:"button"},null,8,["onClick","disable"]))])])])])}const te=b(D,[["render",W]]);export{te as default};
