(this["webpackJsonpfrench-for-kids"]=this["webpackJsonpfrench-for-kids"]||[]).push([[0],{41:function(e,a,t){e.exports=t(50)},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),i=t(38),l=t(16),m=t(37),s=t(91),p=t(79),g=t(81),u=t(82),d=t(28),f=Object(p.a)((function(e){return{toolbar:{backgroundImage:"linear-gradient(to right, #314755, #1765A3);"}}})),h=function(e){var a=f();return r.a.createElement(g.a,{position:"static"},r.a.createElement(u.a,{className:a.toolbar},r.a.createElement(d.a,{variant:"h4",color:"inherit"},"French Vocabulary")))},b=t(39),y=t(92),E=t(83),v=function(e){var a=e.categories,t=e.category,n=e.onSelect,c="all"===t?0:a.findIndex((function(e){return e===t}));return r.a.createElement(b.a,null,r.a.createElement(y.a,{value:c,onChange:function(e,t){n(a[t])},indicatorColor:"primary",textColor:"primary",centered:!0},a?a.map((function(e){return r.a.createElement(E.a,{key:e,label:e})})):null))},j=t(27),x=t(88),_=t(89),O=t(93),k=t(90),U=t(84),N=t(85),T=t(87),S=t(86),w=Object(p.a)({root:{maxWidth:300,margin:"10px auto"},media:{height:200},enText:{color:"#2196f3"},frText:{color:"#f44336"}});function B(e){var a=e.vocab,t=w();return console.log(a),r.a.createElement(U.a,{className:t.root},r.a.createElement(N.a,null,r.a.createElement(S.a,{className:t.media,image:a.imageUrl,alt:a.en}),r.a.createElement(T.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",className:t.enText},a.en),r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",className:t.frText},a.fr),a.feminine?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",display:"inline",className:t.frText},a.feminine),r.a.createElement(d.a,{gutterBottom:!0,varient:"subtitle2",display:"inline"},"\xa0(fem.)")):null,a.masculine?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",display:"inline",className:t.frText},a.masculine),r.a.createElement(d.a,{gutterBottom:!0,varient:"subtitle2",display:"inline"},"\xa0(masc.)")):null)))}var I=Object(p.a)((function(e){var a;return{gridItem:{height:"80vh"},paper:{padding:20,marginTop:10,overflow:"auto",height:"100%"},categoryWrapper:{padding:0},categoryText:(a={textTransform:"capitalize",color:"#fff",backgroundImage:"linear-gradient(to right, #0F2027, #203A43, #2C5364);"},Object(j.a)(a,"backgroundImage","linear-gradient(to right, #314755,#1765A3);"),Object(j.a)(a,"marginTop",10),Object(j.a)(a,"padding",8),a),vocabListWrapper:{marginTop:2,padding:0,background:"#EEF1F4"}}})),F=function(e){var a=e.category,t=e.vocabs,n=e.vocab,c=e.onVocabSelect,o=I();return console.log("vocab",n),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:12,sm:!0,md:3,className:o.gridItem},r.a.createElement(b.a,{className:o.paper},t.map((function(e,t){var n=Object(l.a)(e,2),i=n[0],m=n[1];return"all"===a||a===i?r.a.createElement("div",{key:t},r.a.createElement(d.a,{variant:"h6",className:o.categoryText},i),m.map((function(e){return r.a.createElement(_.a,{key:e.id,component:"ul","aria-label":"vocab",className:o.vocabListWrapper,onClick:function(){return c(e.id)}},r.a.createElement(O.a,{button:!0},r.a.createElement(k.a,{primary:e.en})))}))):null})))),r.a.createElement(x.a,{item:!0,xs:12,sm:!0,md:9},r.a.createElement(b.a,{className:o.paper},n.id?r.a.createElement(B,{vocab:n}):r.a.createElement(d.a,null,"Welcome"))))},C=["all","animals","clothes","colors","food","shapes"],W=[{id:"cat",en:"cat",fr:"",feminine:"chatte",masculine:"chat",imageUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",category:"animals"},{id:"dog",en:"dog",fr:"",feminine:"chienne",masculine:"chien",imageUrl:"https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649_960_720.jpg",category:"animals"},{id:"unicorn",en:"unicorn",fr:"licorne",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2016/07/25/00/24/gem-1539624_960_720.png",category:"animals"},{id:"icecream",en:"ice cream",fr:"cr\xe8me glac\xe9e",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_960_720.jpg",category:"food"},{id:"cheese",en:"cheese",fr:"fromage",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2015/12/26/11/08/kaseplatte-1108564_960_720.jpg",category:"food"},{id:"star",en:"star",fr:"une \xe9toile",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2012/02/26/10/52/backdrop-17047_960_720.jpg",category:"shapes"},{id:"heart",en:"heart",fr:"un c\u0153ur",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2016/10/04/16/33/heart-shape-1714807_960_720.jpg",category:"shapes"},{id:"arrow",en:"arrow",fr:"une fl\xe8che",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2017/04/06/09/16/arrow-2207748_960_720.png",category:"shapes"},{id:"dress",en:"dress",fr:"robe",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486004_960_720.jpg",category:"clothes"},{id:"jacket",en:"jacket",fr:"veste",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg",category:"clothes"},{id:"shoe",en:"shoe",fr:"chaussure",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2015/09/02/13/19/holding-hands-918990_960_720.jpg",category:"clothes"},{id:"red",en:"red",fr:"rouge",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2014/06/22/05/49/rose-374318_960_720.jpg",category:"colors"},{id:"gold",en:"gold",fr:"or",feminine:"",masculine:"",imageUrl:"https://cdn.pixabay.com/photo/2016/11/29/06/56/abstract-1867935_960_720.jpg",category:"colors"},{id:"green",en:"green",fr:"vert",feminine:"verte",masculine:"vert",imageUrl:"https://cdn.pixabay.com/photo/2015/04/28/20/55/aurora-borealis-744351_960_720.jpg",category:"colors"}],A=Object(m.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#f44336"},info:{main:"#456990"},success:{main:"#70c1b3"}}});var V=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),m=Object(l.a)(o,2),p=m[0],g=m[1],u=Object(n.useState)("all"),d=Object(l.a)(u,2),f=d[0],b=d[1];return Object(n.useEffect)((function(){!function(){var e=W.reduce((function(e,a){var t=a.category;return e[t]=e[t]?[].concat(Object(i.a)(e[t]),[a]):[a],e}),{});c(Object.entries(e))}()}),[]),r.a.createElement(s.a,{theme:A},r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(v,{categories:C,category:f,onSelect:function(e){b(e)}}),r.a.createElement(F,{category:f,vocabs:t,vocab:p,onVocabSelect:function(e){g(W.find((function(a){return a.id===e})))}})))};t(49);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9d91d40d.chunk.js.map