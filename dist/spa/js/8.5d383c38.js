(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{c8e0:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("h1",[e._v("Weather Page - "+e._s(e.location))]),e._v("\n  "+e._s(e.weather)+"\n")])},n=[],i=(a("e6cf"),a("a79d"),a("bc3a")),c=a.n(i),l={name:"IndexPage",props:{location:{type:String,required:!0}},beforeMount(){this.location&&this.getLocationWeather()},data:()=>({weather:null}),methods:{getLocationWeather(){console.log("Calling weather API"),this.$q.loading.show();const e={key:"45129826589045a4a67172834201512",q:this.location};c.a.get("https://api.weatherapi.com/v1/current.json",{params:e}).then((e=>{this.weather=e.data})).catch((e=>{console.log("Go to location error page")})).finally((()=>this.$q.loading.hide()))}},watch:{location:function(e){e&&(console.log(`[${this.$route.name} Page] New weather API call with location: ${e}`),this.getLocationWeather())}}},r=l,s=a("2877"),h=a("9989"),g=a("eebe"),p=a.n(g),w=Object(s["a"])(r,o,n,!1,null,null,null);t["default"]=w.exports;p()(w,"components",{QPage:h["a"]})}}]);