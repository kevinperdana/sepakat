(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67a5a6fe"],{"277e":function(t,e,i){"use strict";i("a9e3");var a=i("f977"),n=i("d9bd"),o=i("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:a["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(n["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("fe6c"),n=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("a9e3"),i("b680"),i("c7cd");var a=i("5530"),n=(i("8b0d"),i("71d9")),o=i("f977"),r=i("3a66"),l=i("277e"),s=i("d10f"),c=i("f2e7"),u=i("80d2"),h=i("58df"),d=Object(h["a"])(n["a"],l["a"],s["a"],c["a"],Object(r["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=d.extend({name:"v-app-bar",directives:{Scroll:o["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return l["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(a["a"])({},n["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return n["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,a=i-e,o=a/this.computedScrollThreshold,r=this.currentScroll*o;return Math.max(e,i-r)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=n["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return n["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(a["a"])({},n["a"].options.computed.styles.call(this),{fontSize:Object(u["g"])(this.computedFontSize,"rem"),marginTop:Object(u["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(u["g"])(this.computedTransform),")"),left:Object(u["g"])(this.computedLeft),right:Object(u["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5d83":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FrontLayout",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"8"}},[i("h2",{staticClass:"subheading text-uppercase font-weight-medium mb-3"},[t._v("About")]),i("p",{staticClass:"font-weight-regular"},[t._v(" Aplikasi Sistem Elektronik Paralegal Masyarakat (SEPAKAT) merupakan rancangan aksi perubahan Pendidikan Kepemimpinan Pengawas Angkatan CXCII Tahun Anggaran 2020, yang disusun oleh Kasubid Penyuluhan Hukum Bantuan Hukum dan JDIH Kanwil Kemenkumham Kepulauan Riau bekerjasama dengan Sekolah Tinggi Teknologi Indonesia Tanjungpinang. ")]),i("p",[t._v(" SEPAKAT merupakan wujud komitmen Kanwil Kemenkumham Kepulauan Riau dalam meningkatkan pembinaan hukum dan kesadaran hukum masyarakat Provinsi Kepulauan Riau melalui pemberdayaan masyarakat dengan peran paralegal masyarakat yang dibina oleh Kanwil KemenkumhamKepulauan Riau dan stakeholder terkait yaitu Pemerintah Daerah dan LBH Terakreditasi. SEPAKAT adalah solusi terbaik dalam menjawab kendala pelayanan publik yang terbatas dari sisi kondisi geografis dan juga sumber daya manusia pelaksana pelayanan publik, khususnya dalam hal perluasan informasi hukum dan peningkatan kesadaran hukum di masyarakat. ")])])],1)],1)],1)},n=[],o=i("632e"),r={name:"About",data:function(){return{}},components:{FrontLayout:o["a"]}},l=r,s=i("2877"),c=i("6544"),u=i.n(c),h=i("62ad"),d=i("a523"),p=i("0fd9"),m=Object(s["a"])(l,a,n,!1,null,null,null);e["default"]=m.exports;u()(m,{VCol:h["a"],VContainer:d["a"],VRow:p["a"]})},"632e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticClass:"indigo darken-4 yellow--text",attrs:{dark:"",app:""}},[i("v-toolbar-title",[i("span",{staticClass:"hidden-sm-and-down"},[t._v(" "+t._s(t.namaAPPAlias)),i("br"),t._v(" ["),i("small",[t._v("Sistem Elektronik Paralegal Masyarakat")]),t._v("] ")])]),i("v-spacer"),i("v-btn",{staticClass:"mr-2",attrs:{to:"/",color:"yellow",text:"",large:""}},[t._v(" Home ")]),i("v-btn",{staticClass:"mr-2",attrs:{to:"/about",color:"yellow",text:"",large:""}},[t._v(" About ")]),i("v-btn",{attrs:{to:"/login",color:"yellow",text:"",large:""}},[t._v(" Login ")])],1),i("v-main",[t._t("default")],2)],1)},n=[],o=i("5530"),r=i("2f62"),l={name:"FrontLayout",created:function(){this.$store.dispatch("uifront/init",this.$ajax)},computed:Object(o["a"])({},Object(r["b"])("uifront",{namaAPPAlias:"getNamaAPPAlias"}))},s=l,c=i("2877"),u=i("6544"),h=i.n(u),d=i("40dc"),p=i("8336"),m=i("f6c4"),f=i("2fa4"),v=i("2a7f"),g=Object(c["a"])(s,a,n,!1,null,null,null);e["a"]=g.exports;h()(g,{VAppBar:d["a"],VBtn:p["a"],VMain:m["a"],VSpacer:f["a"],VToolbarTitle:v["a"]})},"8b0d":function(t,e,i){},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f6c4:function(t,e,i){"use strict";i("bd0c");var a=i("d10f");e["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,a=t.right,n=t.footer,o=t.insetFooter,r=t.bottom,l=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(n+o+r,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},f977:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("53ca");function n(t,e){var i=e.modifiers||{},n=i.self,o=void 0!==n&&n,r=e.value,l="object"===Object(a["a"])(r)&&r.options||{passive:!0},s="function"===typeof r||"handleEvent"in r?r:r.handler,c=o?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",s,l),t._onScroll={handler:s,options:l,target:o?void 0:c})}function o(t){if(t._onScroll){var e=t._onScroll,i=e.handler,a=e.options,n=e.target,o=void 0===n?t:n;o.removeEventListener("scroll",i,a),delete t._onScroll}}var r={inserted:n,unbind:o};e["b"]=r}}]);