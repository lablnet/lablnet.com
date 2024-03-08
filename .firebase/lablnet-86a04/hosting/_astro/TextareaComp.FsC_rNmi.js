import{_ as s}from"./_plugin-vue_export-helper.x3n3nnut.js";import{x as t,y as a,E as u,C as r,z as n,D as m}from"./runtime-core.esm-bundler.g1TQfZFf.js";const b={name:"ButtonComp",props:{b_type:{type:String,default:"a"},text:{type:String,default:"Button"},link:{type:String,default:"javascript:void(1)"},target:{type:String,default:"_self"},gray:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}}},y=["href","target","disabled"],g=["disabled"];function _(l,o,e,i,c,d){return t(),a("div",null,[e.b_type==="a"?(t(),a("a",{key:0,href:e.link,class:u(["mt-6 hover:underline font-bold rounded-full border-black-500 border-2 my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-white dark:border-white dark:bg-transparent dark:text-white",e.gray===!0?"border-black":""]),target:e.target,disabled:e.disable},r(e.text),11,y)):(t(),a("button",{key:1,class:u(["mt-6 hover:underline font-bold rounded-full border-black-500 border-2 my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out arrow bg-white dark:border-white dark:bg-transparent dark:text-gray-300",e.gray===!0?"border-black":""]),disabled:e.disable},r(e.text),11,g))])}const V=s(b,[["render",_]]),h={name:"InputComp",props:{id:{type:String,default:"text"},autocomplete:{type:String,default:"off"},cols:{type:Number,default:5},rows:{type:Number,default:5},name:{type:String,default:"textarea"},placeholder:{type:String,default:null},modelValue:{type:String,default:null},required:{type:Boolean,default:!1},label:{type:String,default:null},error:{type:String,default:null}},methods:{updateValue(l){this.$emit("update:modelValue",l.target.value)}}},x={class:"rounded-md shadow-sm"},k=["for"],p=["id","name","cols","rows","autocomplete","required","placeholder","value"],w={key:0,class:"text-red-500 p-2 mt-3"};function v(l,o,e,i,c,d){return t(),a("div",x,[n("div",null,[n("label",{for:e.id,class:"block text-sm font-medium leading-5 text-gray-700 dark:text-gray-200"},r(e.label),9,k),n("textarea",{id:e.id,name:e.name,cols:e.cols,rows:e.rows,autocomplete:e.autocomplete,required:e.required,class:u(["w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-gray-900 dark:text-gray-400",e.error?"border-red-500":""]),placeholder:e.placeholder,value:e.modelValue,onInput:o[0]||(o[0]=(...f)=>d.updateValue&&d.updateValue(...f))},null,42,p),e.error?(t(),a("span",w,r(e.error),1)):m("",!0)])])}const C=s(h,[["render",v]]);export{V as B,C as T};