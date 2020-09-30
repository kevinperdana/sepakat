(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215cff"],{c095:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AdminLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-calendar-blank-multiple ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" LAPORAN KEGIATAN PARALEGAL ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi laporan kegiatan konsultasi hukum paralegal ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"kegiatan_id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR KEGIATAN")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer")],1)]},proxy:!0},{key:"item.id",fn:function(a){var e=a.item;return[t._v(" "+t._s(e.id)+" ")]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-btn",{attrs:{small:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.printpdf(n)}}},[e("v-icon",[t._v(" mdi-printer ")])],1)]}},{key:"expanded-item",fn:function(a){var n=a.headers,r=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:n.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(r.kegiatan_id)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(r.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(r.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogprintpdf,callback:function(a){t.dialogprintpdf=a},expression:"dialogprintpdf"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Print to PDF")])]),e("v-card-text",[e("v-btn",{attrs:{color:"green",text:"",href:this.$api.url+"/"+t.file_pdf}},[t._v(" Download ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogprintpdf(a)}}},[t._v("BATAL")])],1)],1)],1)],1)],1)},r=[],i=(e("96cf"),e("1da1")),o=e("a1b3"),d=e("e477"),s={name:"LaporanKegiatan",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KONSULTASI",disabled:!1,href:"#"},{text:"KEGIATAN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PEMOHON",value:"pemohon"},{text:"JENIS KEGIATAN",value:"nama_jenis"},{text:"NAMA KEGIATAN",value:"nama_kegiatan"},{text:"STATUS",value:"id_status",sortable:!1,width:100},{text:"AKSI",value:"actions",sortable:!1,width:150}],search:"",dialogprintpdf:!1,file_pdf:null}},methods:{initialize:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/report/kegiatan",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.daftar_kegiatan,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},printpdf:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.btnLoading=!0,e.next=3,a.$ajax.post("/report/kegiatan/printpdf",{kegiatan_id:t.kegiatan_id},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.file_pdf=e.pdf_file,a.dialogprintpdf=!0,a.btnLoading=!1})).catch((function(){a.btnLoading=!1}));case 3:case"end":return e.stop()}}),e)})))()},closedialogprintpdf:function(){var t=this;setTimeout((function(){t.file_pdf=null,t.dialogprintpdf=!1}),300)}},components:{AdminLayout:o["a"],ModuleHeader:d["a"]}},c=s,l=e("2877"),u=e("6544"),p=e.n(u),f=e("0798"),v=e("2bc5"),h=e("8336"),b=e("b0af"),g=e("99d9"),m=e("62ad"),x=e("a523"),_=e("8fea"),k=e("169a"),A=e("ce7e"),w=e("132d"),y=e("0fd9"),T=e("2fa4"),L=e("8654"),V=e("71d9"),C=e("2a7f"),D=Object(l["a"])(c,n,r,!1,null,null,null);a["default"]=D.exports;p()(D,{VAlert:f["a"],VBreadcrumbs:v["a"],VBtn:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:m["a"],VContainer:x["a"],VDataTable:_["a"],VDialog:k["a"],VDivider:A["a"],VIcon:w["a"],VRow:y["a"],VSpacer:T["a"],VTextField:L["a"],VToolbar:V["a"],VToolbarTitle:C["a"]})}}]);