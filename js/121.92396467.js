"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[121],{6633:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(6252),l=a(3577);const o=["href","target","disabled"],n=["disabled"];function s(e,t){return(0,r.wg)(),(0,r.iD)("div",null,["a"===e.b_type?((0,r.wg)(),(0,r.iD)("a",{key:0,href:e.link,class:(0,l.C_)(["mt-6 hover:underline font-bold rounded-full border-black-500 border-2 my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out arrow bg-white dark:border-white dark:bg-transparent",!0===e.gray?"border-black":""]),target:e.target,disabled:e.disable},(0,l.zw)(e.text),11,o)):((0,r.wg)(),(0,r.iD)("button",{key:1,class:(0,l.C_)(["mt-6 hover:underline font-bold rounded-full border-black-500 border-2 my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out arrow bg-white dark:border-white dark:bg-transparent",!0===e.gray?"border-black":""]),disabled:e.disable},(0,l.zw)(e.text),11,n))])}var i={name:"ButtonComp",props:{b_type:{type:String,default:"a"},text:{type:String,default:"Button"},link:{type:String,default:"javascript:void(1)"},target:{type:String,default:"_self"},gray:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}}},c=a(3744);const d=(0,c.Z)(i,[["render",s]]);var u=d},6321:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(6252),l=a(3577);const o=["href"],n=["src","alt"],s={class:"pl-5"},i={key:0,class:"pl-2 pr-2 mx-3 mr-0 rounded-full bg-white text-black dark:bg-gray-700 dark:text-gray-300"};function c(e,t){return(0,r.wg)(),(0,r.iD)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",class:"inline-flex relative px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-900 dark:text-gray-400 text-gray-800"},[(0,r._)("img",{class:"h-6 w-6 rounded-full border border-gray-100 shadow-sm absolute left-0.5 top-0.5",src:e.picture,alt:e.text},null,8,n),(0,r._)("span",s,(0,l.zw)(e.text),1),e.contributionsStatus?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",i,(0,l.zw)(e.contributions),1))],8,o)}var d={name:"CollaboratorComp",props:{text:{type:String,required:!0},picture:{type:String,default:a(8987)},link:{type:String,default:"javascript:void(1)"},contributions:{type:Number,default:1},contributionsStatus:{type:Boolean,default:!1}}},u=a(3744);const p=(0,u.Z)(d,[["render",c]]);var m=p},4746:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(6252);const l={key:0},o=(0,r.uE)('<div class="flex justify-center items-center" data-v-5fc02614><div class="loader bg-transparent p-5 rounded-full flex space-x-3" data-v-5fc02614><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-5fc02614></div></div></div>',1),n=[o];function s(e,t){return e.loading?((0,r.wg)(),(0,r.iD)("div",l,n)):(0,r.kq)("",!0)}var i={name:"LoaderComp",props:{loading:Boolean}},c=a(3744);const d=(0,c.Z)(i,[["render",s],["__scopeId","data-v-5fc02614"]]);var u=d},8121:function(e,t,a){a.r(t),a.d(t,{default:function(){return Mt}});var r=a(6252);const l={class:"flex-none md:flex py-10 px-5 container"},o={class:"flex-none md:flex-1"},n=(0,r._)("h1",{class:"title"},"Muhammad Umer Farooq",-1),s={class:"flex md:hidden"},i={class:"sm:px-0 mx-auto"},c=["src"],d=(0,r._)("p",{class:"text-justify dark:text-gray-300"}," Hi there, I'm a Software Developer. I love building and rebuilding open source products. ",-1),u=(0,r._)("p",{class:"text-justify dark:text-gray-300"}," I have experience in Full Stack software development, including Web, Mobile applications, Desktop applications, web scraping, web crawling, and API integrations, working on many projects. Beside all these I am also interested in deep learning, algorithm implementation, kernel, compilers, computer vision and Cryptography. ",-1),p=(0,r._)("p",{class:"text-justify mb-6 dark:text-gray-300"}," I am always passionate about working on open source projects and contributing with others. ",-1),m=(0,r._)("br",null,null,-1),g={class:"hidden md:flex"},f={class:"sm:px-0 md:px-20"},h=["src"],y={key:0,class:"mt-2 mb-2"},b={key:1,class:"mt-2 mb-2"},w={key:2,class:"mt-2 mb-2"},x=(0,r._)("section",{class:"py-10 px-5 container",id:"showcase"},[(0,r._)("div",{class:"grid grid-cols-1 gap-5 md:gap-8 xl:grid-cols-3 xl:gap-5"},[(0,r._)("div",{class:"flex flex-col items-center justify-center text-center md:flex-row md:text-left"})])],-1),k={key:3,class:"mt-2 mb-2"};function v(e,t){const v=(0,r.up)("CollaboratorComp"),_=(0,r.up)("ButtonComp"),S=(0,r.up)("SkillsView"),C=(0,r.up)("ProjectsView"),j=(0,r.up)("EducationView"),V=(0,r.up)("CertificatesView"),D=(0,r.up)("ContactView");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("section",l,[(0,r._)("div",o,[n,(0,r.Wm)(v,{text:"lablent",picture:a(4228),link:"https://github.com/lablnet",contributionsStatus:!0},null,8,["picture"]),(0,r._)("div",s,[(0,r._)("div",i,[(0,r._)("img",{class:"w-64 h-64 mx-auto rounded-full pointer-events-none",src:a(6229),alt:"Muhammad Umer Farooq"},null,8,c)])]),d,u,p,m,(0,r.Wm)(_,{text:"Contact Me",link:"#contact"})]),(0,r._)("div",g,[(0,r._)("div",f,[(0,r._)("img",{class:"w-64 h-64 ml-16 mt-24 rounded-full object-cover pointer-events-none",src:a(6229),alt:"Muhammad Umer Farooq"},null,8,h)])])]),"dark"===e.theme?((0,r.wg)(),(0,r.iD)("hr",y)):(0,r.kq)("",!0),(0,r.Wm)(S),"dark"===e.theme?((0,r.wg)(),(0,r.iD)("hr",b)):(0,r.kq)("",!0),(0,r.Wm)(C),"dark"===e.theme?((0,r.wg)(),(0,r.iD)("hr",w)):(0,r.kq)("",!0),(0,r.Wm)(j),x,(0,r.Wm)(V),"dark"===e.theme?((0,r.wg)(),(0,r.iD)("hr",k)):(0,r.kq)("",!0),(0,r.Wm)(D)])}var _=a(6633),S=a(3577);const C={class:"py-10 px-5 bg-gray-200 dark:bg-gray-900 dark:text-gray-400 container",id:"skills"},j=(0,r._)("h3",{class:"subtitle dark:text-white"},"Skills",-1),V=(0,r._)("p",null," As a student, I am constantly learning and expanding my knowledge. Some of the skills I have developed include: ",-1),D={class:"grid md:grid-cols-3 mx-auto py-5"},I={class:"flex-grow flex flex-col"},q={class:"mt-0 dark:text-white"},z={class:"text-justify line-clamp-4 flex-grow"};function Z(e,t){return(0,r.wg)(),(0,r.iD)("section",C,[j,V,(0,r._)("div",D,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.skills,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"flex flex-col px-4 py-4",key:e},[(0,r._)("div",I,[(0,r._)("h4",q,(0,S.zw)(e.title),1),(0,r._)("p",z,(0,S.zw)(e.description),1)])])))),128))])])}var U={name:"SkillsView",data(){return{skills:[{title:"Languages",description:"I am proficient in JavaScript, Python, and PHP, and have experience working with various databases such as MySql, Firebase, and mongodb. Additionally, I have expertise in web development with HTML and CSS. I have also worked with other languages such as Dart, C, C++, and Ruby."},{title:"Frameworks",description:"I use frameworks to speed up the development process and am open to exploring different options. I have experience working with Laravel, Codeigniter, Vue, React, Electron, Jquery, TailwindCSS, AntDesign, Bootstrap, MaterializeCSS, Flask, Flutter, Selenium, and Ruby on Rails."},{title:"Tools/Platform",description:"I use VS-Code, Jupyter Notebook, Git, and Docker on a daily basis. My primary operating system is Windows, but I also use Ubuntu inside Windows through WSL/WSLG."}]}}},P=a(3744);const W=(0,P.Z)(U,[["render",Z]]);var B=W;const M={class:"py-10 px-5 bg-gray-200 dark:bg-gray-900 container",id:"education"},R=(0,r._)("h3",{class:"subtitle dark:text-white"},"Education.",-1),T=(0,r._)("p",{class:"dark:text-gray-400"}," I enjoy facing challenges that are given by my teachers. Here is my educational background. ",-1),E={class:"body-font"},H={class:"container py-6 mx-auto flex flex-wrap"},F={class:"flex flex-wrap w-full"},L={class:""},A={key:0,class:"h-full w-10 absolute inset-0 flex items-center justify-center"},N=(0,r._)("div",{class:"h-full w-1 bg-indigo-500 pointer-events-none"},null,-1),J=[N],Y={class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"},G={class:"flex-grow pl-4 dark:text-gray-400"},K={class:"font-medium title-font mb-1"},O={class:"font-mediume title-font mb-1"},Q={class:"flex flex-col space-y-2"},X={class:"flex space-x-2"},$={style:{"padding-top":"0.1em","padding-bottom":"0.1rem"},class:"text-xs px-3 bg-blue-200 text-blue-800 rounded-full"},ee={class:"leading-relaxed"};function te(e,t){return(0,r.wg)(),(0,r.iD)("section",M,[R,T,(0,r._)("section",E,[(0,r._)("div",H,[(0,r._)("div",F,[(0,r._)("div",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.educations,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"flex relative pb-12",key:e},[1!==e.step?((0,r.wg)(),(0,r.iD)("div",A,J)):(0,r.kq)("",!0),(0,r._)("div",Y,(0,S.zw)(e.step),1),(0,r._)("div",G,[(0,r._)("h2",K,(0,S.zw)(e.program)+" ("+(0,S.zw)(e.major)+") ",1),(0,r._)("h5",O,[(0,r._)("i",null,(0,S.zw)(e.from+" - "+e.to),1)]),(0,r._)("div",Q,[(0,r._)("div",X,[(0,r._)("div",$,(0,S.zw)(e.grade),1)])]),(0,r._)("p",ee,(0,S.zw)(e.institute),1)])])))),128))])])])])])}var ae={name:"EducationView",data(){return{educations:[{institute:"Riphah International University (I-14 Islamabad)",from:"2020",to:"2024",grade:"3.82 out of 4.00",major:"Bachelor of Science in Software Engineering",program:"Bachelor (SEM-6)",step:3},{institute:"Punjab College Of Commerce, 661 Peshawar Road Rawalpindi Cantt(2833)",from:"2017",to:"2019",grade:"55%",major:"ICS (Computer Science with Mathematics)",program:"intermediate of Computer Science",step:2},{institute:"F G Boys Secondary School Nai Chawni Westridge-1 Rawalpindi Cantt",from:"2015",to:"2017",grade:"65%",major:"Science",program:"Secondary School Certificate",step:1}]}}};const re=(0,P.Z)(ae,[["render",te]]);var le=re;const oe={class:"py-10 px-5 container",id:"projects"},ne=(0,r._)("h3",{class:"subtitle"},"Projects I've worked on.",-1),se=(0,r._)("p",{class:"dark:text-gray-300"}," I enjoy taking on new projects and have worked on the following: ",-1),ie={class:"grid md:grid-cols-3 mx-auto py-5"},ce={class:"w-full flex-shrink-0"},de={class:""},ue=["src","data-caption"],pe={class:"flex-grow flex flex-col"},me={class:"mt-0"},ge={class:"text-justify line-clamp-4 flex-grow dark:text-gray-300"},fe={class:"mt-2"},he=(0,r.Uk)("Learn More "),ye=(0,r.Uk)("More Projects");function be(e,t){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",oe,[ne,se,(0,r._)("div",ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.projects,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"flex flex-col px-4 py-4",key:{project:e}},[(0,r._)("div",ce,[(0,r._)("div",de,[(0,r._)("img",{class:"rounded",src:e.image,"data-fancybox":"default","data-caption":e.name},null,8,ue)])]),(0,r._)("div",pe,[(0,r._)("h4",me,(0,S.zw)(e.name),1),(0,r._)("p",ge,(0,S.zw)(e.description),1),(0,r._)("div",fe,[(0,r.Wm)(a,{class:"float-left arrow",to:"/work/"+e.link},{default:(0,r.w5)((()=>[he])),_:2},1032,["to"])])])])))),128))]),(0,r.Wm)(a,{to:"/work/projects",class:"mr-4 float-right arrow"},{default:(0,r.w5)((()=>[ye])),_:1})])}var we={name:"ProjectsView",data(){return{projects:[{name:"Working at AlphaSoftHub (Pvt) Ltd.",description:"I started my own business, AlphaSoftHub (Private) Limited, on February 12, 2021. In this role, I serve as the lead developer for the company's various projects.",image:a(4239),link:"alphasofthub"},{name:"ResourcesR.",description:"I developed an app that offers a platform for students at Riphah University to share and access study resources.",image:a(3166),link:"resourcesr"},{name:"Zest Framework.",description:"Zest is a PHP MVC framework designed for rapid application development, particularly for small to medium scale apps and APIs. It offers a simple, yet powerful solution for creating efficient and scalable applications.",image:a(5065),link:"zest"},{name:"Riphah International University.",description:"The opportunity to work on building an alumni management system for Riphah International University was offered to me. This system was intended to be used by the university to manage and connect with its alumni. I was excited to take on the project and help the university strengthen its relationship with its graduates.",image:a(7071),link:"riphah"}]}}};const xe=(0,P.Z)(we,[["render",be]]);var ke=xe;const ve={class:"py-10 px-5 bg-gray-200 dark:bg-gray-900 container",id:"certificates"},_e=(0,r._)("h3",{class:"subtitle dark:text-white"},"Certificates.",-1),Se=(0,r._)("p",{class:"dark:text-gray-400"}," In addition to my formal education, I have completed a few courses to expand my knowledge and skills. ",-1),Ce={class:"body-font"},je={class:"container py-6 mx-auto flex flex-wrap"},Ve={class:"flex flex-wrap w-full"},De={class:""},Ie={key:0,class:"h-full w-10 absolute inset-0 flex items-center justify-center"},qe=(0,r._)("div",{class:"h-full w-1 bg-indigo-500 pointer-events-none"},null,-1),ze=[qe],Ze={class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"},Ue={class:"grid grid-cols-1 sm:grid-cols-2"},Pe={class:"col-span-1"},We=["src","alt","data-caption"],Be={class:"col-span-1"},Me={class:"flex-grow mt-10 sm:-mx-10 mb-10"},Re={class:"font-medium title-font mb-1"},Te={class:"font-mediume title-font dark:text-gray-400"},Ee={class:"dark:text-gray-400"},He={key:1,class:"mt-3 text-black dark:text-white"};function Fe(e,t){const a=(0,r.up)("ButtonComp");return(0,r.wg)(),(0,r.iD)("section",ve,[_e,Se,(0,r._)("section",Ce,[(0,r._)("div",je,[(0,r._)("div",Ve,[(0,r._)("div",De,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.certificates,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"flex relative pb-12",key:e},[1!==e.step?((0,r.wg)(),(0,r.iD)("div",Ie,ze)):(0,r.kq)("",!0),(0,r._)("div",Ze,(0,S.zw)(e.step),1),(0,r._)("div",Ue,[(0,r._)("div",Pe,[(0,r._)("img",{src:e.picture,alt:e.title,class:"object-contain h-48 w-96 rounded sm:-mx-7 mt-5","data-fancybox":"certificate","data-caption":e.title+" | "+e.institute},null,8,We)]),(0,r._)("div",Be,[(0,r._)("div",Me,[(0,r._)("h2",Re,(0,S.zw)(e.title),1),(0,r._)("h5",Te,[(0,r._)("i",null,(0,S.zw)(e.completed),1)]),(0,r._)("p",Ee,(0,S.zw)(e.institute),1)]),(0,r.Wm)(a,{text:"View on Coursera",link:e.link,target:"_blank",rel:"noopener noreferrer",gray:!0},null,8,["link"])])]),1!==e.step?((0,r.wg)(),(0,r.iD)("hr",He)):(0,r.kq)("",!0)])))),128))])])])])])}var Le={name:"CertificatesView",components:{ButtonComp:_.Z},data(){return{certificates:[{title:"Cryptography I",institute:"Coursera online course (Stanford)",completed:"Sep 15, 2022",picture:a(3457),link:"https://www.coursera.org/account/accomplishments/certificate/5DZ79VRJSBK3",step:3},{title:"Python For Everybody",institute:"Coursera online course (University of Michigan)",completed:"Aug 07, 2020",picture:a(5050),link:"https://www.coursera.org/account/accomplishments/specialization/certificate/8EWU75XUZ4XD",step:2},{title:"Open-Source-Software, Linux and Git",institute:"Coursera online course (The Linux Foundation)",completed:"Jul 25, 2020",picture:a(1024),link:"https://www.coursera.org/account/accomplishments/specialization/certificate/C9BQZMZYQMCT",step:1}]}}};const Ae=(0,P.Z)(Le,[["render",Fe]]);var Ne=Ae,Je=a(6321);const Ye={class:"py-10 px-5 container",id:"contact"},Ge={class:"grid grid-cols-1 md:grid-cols-2"},Ke={class:"col-span-1"},Oe=(0,r._)("h3",{class:"subtitle"},"Do you need my help?",-1),Qe=(0,r._)("div",{class:"dark:text-white text-gray-700 mt-8 dark:text-gray-300"},[(0,r.Uk)(" Hate forms? Send me an "),(0,r._)("a",{href:"mailto:umer@lablnet.com",class:"underline font-bold",target:"_blank",rel:"noopener noreferrer"},"email"),(0,r.Uk)(" instead. ")],-1),Xe={class:"mt-8 p-5 text-center hidden md:block"},$e=["src"],et={role:"form",class:"col-span-1"},tt={class:"mt-10"},at={class:"mt-8"},rt={class:"mt-8"},lt={class:"mt-8"},ot={class:"mt-8"},nt={class:"mt-3 mb-3"},st={key:0,class:"mt-3 mb-3 text-red-500"},it={key:1,class:"mt-3 mb-3 text-green-500"},ct=(0,r._)("p",{class:"text-justify dark:text-gray-300"},[(0,r.Uk)(" This site is protected by "),(0,r._)("a",{class:"text-blue-400",href:"https://www.google.com/recaptcha/about/",target:"_blank"}," reCAPTCHA"),(0,r.Uk)(" and the Google "),(0,r._)("a",{class:"text-blue-400",href:"https://policies.google.com/privacy",target:"_blank"},"Privacy Policy"),(0,r.Uk)(" and "),(0,r._)("a",{class:"text-blue-400",href:"https://policies.google.com/terms",target:"_blank"},"Terms of Service"),(0,r.Uk)(" apply. ")],-1);function dt(e,t){const l=(0,r.up)("InputComp"),o=(0,r.up)("TextareaComp"),n=(0,r.up)("LoaderComp"),s=(0,r.up)("ButtonComp");return(0,r.wg)(),(0,r.iD)("section",Ye,[(0,r._)("section",Ge,[(0,r._)("div",Ke,[Oe,Qe,(0,r._)("div",Xe,[(0,r._)("img",{src:a(5741),alt:"contact"},null,8,$e)])]),(0,r._)("form",et,[(0,r._)("div",tt,[(0,r.Wm)(l,{placeholder:"Name",required:!0,error:e.errors.name,label:"Name",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,8,["error","modelValue"])]),(0,r._)("div",at,[(0,r.Wm)(l,{placeholder:"Subject",required:!0,error:e.errors.subject,label:"Subject",type:"text",modelValue:e.subject,"onUpdate:modelValue":t[1]||(t[1]=t=>e.subject=t)},null,8,["error","modelValue"])]),(0,r._)("div",rt,[(0,r.Wm)(l,{placeholder:"Email",required:!0,error:e.errors.email,label:"Email",type:"email",modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t)},null,8,["error","modelValue"])]),(0,r._)("div",lt,[(0,r.Wm)(o,{placeholder:"Message",required:!0,error:e.errors.message,label:"Message",modelValue:e.message,"onUpdate:modelValue":t[3]||(t[3]=t=>e.message=t)},null,8,["error","modelValue"])]),(0,r._)("div",ot,[(0,r._)("span",nt,[(0,r.Wm)(n,{loading:e.loading},null,8,["loading"])]),e.error?((0,r.wg)(),(0,r.iD)("span",st,(0,S.zw)(e.error),1)):(0,r.kq)("",!0),e.success?((0,r.wg)(),(0,r.iD)("span",it," Your message has been sent successfully. ")):(0,r.kq)("",!0),ct,e.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(s,{key:2,text:"Send Message",onClick:e.doSubmi,disable:e.disabled,b_type:"button"},null,8,["onClick","disable"]))])])])])}const ut={class:"rounded-md shadow-sm"},pt=["for"],mt={key:0,class:"text-red-400"},gt=(0,r.Uk)(": "),ft=["id","name","type","autocomplete","required","placeholder","value"],ht={key:0,class:"text-red-500 p-2 mt-3"};function yt(e,t){return(0,r.wg)(),(0,r.iD)("div",ut,[(0,r._)("div",null,[(0,r._)("label",{for:e.id,class:"block text-sm font-medium leading-5 text-gray-700 dark:text-gray-200"},[(0,r.Uk)((0,S.zw)(e.label)+" ",1),1==e.required?((0,r.wg)(),(0,r.iD)("span",mt,"*")):(0,r.kq)("",!0),gt],8,pt),(0,r._)("input",{id:e.id,name:e.name,type:e.type,autocomplete:e.autocomplete,required:e.required,class:(0,S.C_)(["w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-gray-900 dark:text-gray-400",e.error?"border-red-500":""]),placeholder:e.placeholder,value:e.modelValue,onInput:t[0]||(t[0]=(...t)=>e.updateValue&&e.updateValue(...t))},null,42,ft),e.error?((0,r.wg)(),(0,r.iD)("span",ht,(0,S.zw)(e.error),1)):(0,r.kq)("",!0)])])}var bt={name:"InputComp",props:{id:{type:String,default:"text"},autocomplete:{type:String,default:"off"},type:{type:String,default:"text"},name:{type:String,default:"text"},placeholder:{type:String,default:null},modelValue:{type:String,default:null},required:{type:Boolean,default:!1},label:{type:String,default:null},error:{type:String,default:null}},methods:{updateValue(e){this.$emit("update:modelValue",e.target.value)}}};const wt=(0,P.Z)(bt,[["render",yt]]);var xt=wt;const kt={class:"rounded-md shadow-sm"},vt=["for"],_t=["id","name","cols","rows","autocomplete","required","placeholder","value"],St={key:0,class:"text-red-500 p-2 mt-3"};function Ct(e,t){return(0,r.wg)(),(0,r.iD)("div",kt,[(0,r._)("div",null,[(0,r._)("label",{for:e.id,class:"block text-sm font-medium leading-5 text-gray-700 dark:text-gray-200"},(0,S.zw)(e.label),9,vt),(0,r._)("textarea",{id:e.id,name:e.name,cols:e.cols,rows:e.rows,autocomplete:e.autocomplete,required:e.required,class:(0,S.C_)(["w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-gray-900 dark:text-gray-400",e.error?"border-red-500":""]),placeholder:e.placeholder,value:e.modelValue,onInput:t[0]||(t[0]=(...t)=>e.updateValue&&e.updateValue(...t))},null,42,_t),e.error?((0,r.wg)(),(0,r.iD)("span",St,(0,S.zw)(e.error),1)):(0,r.kq)("",!0)])])}var jt={name:"InputComp",props:{id:{type:String,default:"text"},autocomplete:{type:String,default:"off"},cols:{type:Number,default:5},rows:{type:Number,default:5},name:{type:String,default:"textarea"},placeholder:{type:String,default:null},modelValue:{type:String,default:null},required:{type:Boolean,default:!1},label:{type:String,default:null},error:{type:String,default:null}},methods:{updateValue(e){this.$emit("update:modelValue",e.target.value)}}};const Vt=(0,P.Z)(jt,[["render",Ct]]);var Dt=Vt,It=a(4746),qt=a(2024),zt={name:"ContactView",components:{ButtonComp:_.Z,InputComp:xt,TextareaComp:Dt,LoaderComp:It.Z},data(){return{loading:!1,success:!1,name:null,email:null,message:null,subject:null,error:null,errors:{name:null,email:null,message:null,subject:null}}},watch:{name(e){this.errors.name=e?null:"Please enter your name."},email(e){let t=/\S+@\S+\.\S+/;e&&t.test(e)?this.errors.email=null:this.errors.email="Please enter your email."},message(e){this.errors.message=e?null:"Please enter your message."},subject(e){this.errors.subject=e?null:"Please enter your subject."}},mounted(){let e=document.createElement("script");e.src=`https://www.google.com/recaptcha/api.js?render=${qt.Io}`,e.async=!0,e.defer=!0,document.head.appendChild(e)},methods:{doSubmi(e){if(e.preventDefault(),e.stopPropagation(),this.disabled)return;let t=this;t.success=!1,t.error=null,t.loading=!0,grecaptcha.ready((function(){grecaptcha.execute(qt.Io,{action:"submit"}).then((function(e){fetch(qt.jk.contact,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,message:t.message,subject:t.subject,captcha:e})}).then((e=>e.json())).then((e=>{200!==e.statusCode?(t.errors=e.body.errors,e.body?.errors?.captcha&&(t.error=e.body.errors.captcha)):(t.loading=!1,t.error=null,t.name=null,t.email=null,t.message=null,t.subject=null,t.success=!0),t.loading=!1})).catch((e=>{t.loading=!1,t.error="Unexpected error occured, please try again."}))})).catch((function(e){t.loading=!1,t.error="Google reCaptcha error, please try again."}))}))}},computed:{disabled(){return!this.name||!this.email||!this.message||!this.subject||this.errors.name||this.errors.email||this.errors.message||this.errors.subject||this.loading}}};const Zt=(0,P.Z)(zt,[["render",dt]]);var Ut=Zt,Pt=a(4558),Wt={name:"HomeView",components:{CollaboratorComp:Je.Z,ButtonComp:_.Z,EducationView:le,ProjectsView:ke,CertificatesView:Ne,ContactView:Ut,SkillsView:B},computed:{theme(){return(0,Pt.f)().theme}}};const Bt=(0,P.Z)(Wt,[["render",v]]);var Mt=Bt},5741:function(e,t,a){e.exports=a.p+"img/contact-art.30631425.svg"},4239:function(e,t,a){e.exports=a.p+"img/ash.4c6dc3cf.png"},8987:function(e,t,a){e.exports=a.p+"img/avatar.ab143444.png"},3457:function(e,t,a){e.exports=a.p+"img/Coursera 5DZ79VRJSBK3-1.bd282d67.jpg"},5050:function(e,t,a){e.exports=a.p+"img/Coursera 8EWU75XUZ4XD-1.82597cf2.jpg"},1024:function(e,t,a){e.exports=a.p+"img/Coursera C9BQZMZYQMCT-1.d60c94f6.jpg"},3166:function(e,t,a){e.exports=a.p+"img/resourcesr.46c33a45.png"},7071:function(e,t,a){e.exports=a.p+"img/riphah.9d3d3c86.png"},6229:function(e,t,a){e.exports=a.p+"img/umer-removebg-resized.ccf37adf.png"},4228:function(e,t,a){e.exports=a.p+"img/umer-removebg.9d028427.png"},5065:function(e,t,a){e.exports=a.p+"img/zest.ed6542bf.png"}}]);
//# sourceMappingURL=121.92396467.js.map