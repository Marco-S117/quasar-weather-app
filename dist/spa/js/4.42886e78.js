(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2c88":function(o,t,n){"use strict";n.r(t);var a=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("q-page",{attrs:{padding:""}},[n("h1",[o._v("Astronomy Page - "+o._s(o.location))]),o._v("\n  "+o._s(o.astronomy)+"\n")])},e=[],s=(n("e6cf"),n("a79d"),n("bc3a")),i=n.n(s),c={name:"IndexPage",props:{location:{type:String,required:!0}},beforeMount(){this.location&&this.getLocationAstronomy()},data:()=>({astronomy:null}),methods:{getLocationAstronomy(){console.log("Calling astronomy API"),this.$q.loading.show();const o={key:"45129826589045a4a67172834201512",q:this.location};i.a.get("https://api.weatherapi.com/v1/astronomy.json",{params:o}).then((o=>{this.astronomy=o.data})).catch((o=>{console.log("Go to location error page")})).finally((()=>this.$q.loading.hide()))}},watch:{location:function(o){o&&(console.log(`[${this.$route.name} Page] New weather API call with location: ${o}`),this.getLocationAstronomy())}}},l=c,r=n("2877"),h=n("9989"),g=n("eebe"),p=n.n(g),m=Object(r["a"])(l,a,e,!1,null,null,null);t["default"]=m.exports;p()(m,"components",{QPage:h["a"]})}}]);