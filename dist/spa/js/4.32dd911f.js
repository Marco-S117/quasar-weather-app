(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2c88":function(o,t,n){"use strict";n.r(t);var e=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("q-page",{attrs:{padding:""}},[n("h1",[o._v("Astronomy Page - "+o._s(o.content.location.name))]),o._v("\n  "+o._s(o.astronomy)+"\n")])},a=[],s=(n("e6cf"),n("a79d"),n("bc3a"),{name:"IndexPage",props:{content:{type:Object,required:!0}},beforeMount(){this.content&&this.content.location.name&&this.getLocationAstronomy()},data:()=>({astronomy:null}),methods:{getLocationAstronomy(){console.log("Calling astronomy API"),this.$q.loading.show();const o={key:"45129826589045a4a67172834201512",q:this.content.location.name};this.$axios.get("https://api.weatherapi.com/v1/astronomy.json",{params:o}).then((o=>{this.astronomy=o.data})).catch((o=>{console.log("Go to location error page")})).finally((()=>this.$q.loading.hide()))}},watch:{location:function(o){o&&(console.log(`[${this.$route.name} Page] New weather API call with location: ${o}`),this.getLocationAstronomy())}}}),c=s,i=n("2877"),l=n("9989"),r=n("eebe"),h=n.n(r),m=Object(i["a"])(c,e,a,!1,null,null,null);t["default"]=m.exports;h()(m,"components",{QPage:l["a"]})}}]);