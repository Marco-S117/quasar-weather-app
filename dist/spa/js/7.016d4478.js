(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"5ead":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{attrs:{padding:""}},[o("h1",[t._v("Sports Page - "+t._s(t.location))]),t._v("\n  "+t._s(t.events)+"\n")])},a=[],s=(o("e6cf"),o("a79d"),o("bc3a")),i=o.n(s),l={name:"SportsPage",props:{location:{type:String,required:!0}},beforeMount(){this.location&&this.getLocationEvents()},data:()=>({events:null}),methods:{getLocationEvents(){console.log("Calling events API"),this.$q.loading.show();const t={key:"45129826589045a4a67172834201512",q:this.location};i.a.get("https://api.weatherapi.com/v1/sports.json",{params:t}).then((t=>{this.events=t.data})).catch((t=>{console.log("Go to location error page")})).finally((()=>this.$q.loading.hide()))}},watch:{location:function(t){console.log(t),t&&(console.log(`[${this.$route.name} Page] New weather API call with location: ${t}`),this.getLocationEvents())}}},c=l,r=o("2877"),h=o("9989"),p=o("eebe"),g=o.n(p),d=Object(r["a"])(c,n,a,!1,null,null,null);e["default"]=d.exports;g()(d,"components",{QPage:h["a"]})}}]);