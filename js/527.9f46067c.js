"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[527],{4746:function(t,a,e){e.d(a,{Z:function(){return g}});var n=e(6252);const r={key:0},d=(0,n.uE)('<div class="flex justify-center items-center" data-v-5fc02614><div class="loader bg-transparent p-5 rounded-full flex space-x-3" data-v-5fc02614><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div></div></div>',1),o=[d];function i(t,a){return t.loading?((0,n.wg)(),(0,n.iD)("div",r,o)):(0,n.kq)("",!0)}var l={name:"LoaderComp",props:{loading:Boolean}},s=e(3744);const c=(0,s.Z)(l,[["render",i],["__scopeId","data-v-5fc02614"]]);var g=c},9527:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var n=e(6252),r=e(3577);const d={class:"flex-none py-10 px-5 container bg-gray-200 dark:bg-gray-900 mt-5 mb-5"},o=(0,n._)("h3",{class:"subtitle"},"Quotes.",-1),i=(0,n._)("p",{class:"dark:text-gray-300"},"These are quotes written by me in different situations.",-1),l={class:"mt-3 mb-3"},s={key:0,class:"grid grid-cols-1 md:grid-cols-2 gap-5"},c={class:"w-full mb-10"},g=(0,n._)("div",{class:"text-3xl text-black dark:text-gray-300 text-left leading-tight h-3"}," “ ",-1),u={class:"text-sm text-gray-600 dark:text-gray-300 text-center px-5"},f=(0,n._)("div",{class:"text-3xl text-black dark:text-gray-300 text-right leading-tight h-3 -mt-3"}," ” ",-1),b={key:1},p=(0,n._)("p",null,"Something went wrong, unable to load.",-1),v=[p];function m(t,a){const e=(0,n.up)("LoaderComp");return(0,n.wg)(),(0,n.iD)("section",d,[o,i,(0,n._)("span",l,[(0,n.Wm)(e,{loading:t.loading},null,8,["loading"])]),t.error?((0,n.wg)(),(0,n.iD)("div",b,v)):((0,n.wg)(),(0,n.iD)("div",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.data,((t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 text-gray-800 mt-5 dark:bg-gray-700 dark:text-gray-300",key:a},[(0,n._)("div",c,[g,(0,n._)("p",u,(0,r.zw)(t["title"]),1),f])])))),128))]))])}var h=e(4746),x={name:"QuotesView",components:{LoaderComp:h.Z},data(){return{data:[],loading:!0,error:!1}},async mounted(){await this.loadData()},methods:{async loadData(){fetch(`https://lablnet.github.io/portfolio-data/data/quotes.json?timestamp=${(new Date).getTime()}`).then((t=>t.json())).then((async t=>{this.data=t,this.loading=!1})).catch((function(t){this.error=!0}))}}},k=e(3744);const y=(0,k.Z)(x,[["render",m]]);var w=y}}]);
//# sourceMappingURL=527.9f46067c.js.map