(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae944"],{"0b51":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AdminLayout",[e("ModuleHeader",{scopedSlots:a._u([{key:"icon",fn:function(){return[a._v(" mdi-calendar-blank-multiple ")]},proxy:!0},{key:"name",fn:function(){return[a._v(" KONSULTASI KEGIATAN PARALEGAL ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:a.breadcrumbs},scopedSlots:a._u([{key:"divider",fn:function(){return[e("v-icon",[a._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Halaman ini berisi daftar kegiatan konsultasi hukum paralegal ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:a.search,callback:function(t){a.search=t},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:a.headers,items:a.datatable,search:a.search,"item-key":"kegiatan_id","sort-by":"name","show-expand":"",expanded:a.expanded,"single-expand":!0,loading:a.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(t){a.expanded=t},"click:row":a.dataTableRowClicked},scopedSlots:a._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[a._v("DAFTAR KEGIATAN")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),"paralegal"==a.dashboard||"kumham"==a.dashboard||"superadmin"==a.dashboard?e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",to:"/konsultasi/kegiatan/tambah"}},[a._v("TAMBAH")]):a._e()],1)]},proxy:!0},{key:"item.id",fn:function(t){var e=t.item;return[a._v(" "+a._s(e.id)+" ")]}},{key:"item.actions",fn:function(t){var n=t.item;return[e("v-btn",{attrs:{small:"",icon:""},on:{click:function(t){return t.stopPropagation(),a.$router.push("/konsultasi/kegiatan/"+n.kegiatan_id+"/detail")}}},[e("v-icon",[a._v(" mdi-eye ")])],1),"paralegal"==a.dashboard||"kumham"==a.dashboard||"superadmin"==a.dashboard?e("v-btn",{attrs:{small:"",icon:"",to:{path:"/konsultasi/kegiatan/"+n.kegiatan_id+"/ubah"}}},[e("v-icon",[a._v(" mdi-pencil ")])],1):a._e(),"paralegal"==a.dashboard||"kumham"==a.dashboard||"superadmin"==a.dashboard?e("v-btn",{attrs:{small:"",icon:"",loading:a.btnLoading,disabled:a.btnLoading},on:{click:function(t){return t.stopPropagation(),a.deleteItem(n)}}},[e("v-icon",[a._v(" mdi-delete ")])],1):a._e()]}},{key:"expanded-item",fn:function(t){var n=t.headers,i=t.item;return[e("td",{staticClass:"text-center",attrs:{colspan:n.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[a._v("ID:")]),a._v(a._s(i.kegiatan_id)+" "),e("strong",[a._v("created_at:")]),a._v(a._s(a.$date(i.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[a._v("updated_at:")]),a._v(a._s(a.$date(i.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[a._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},i=[],r=(e("c975"),e("a434"),e("96cf"),e("1da1")),o=e("a1b3"),d=e("e477"),s={name:"KonsultasiKegiatan",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KONSULTASI",disabled:!1,href:"#"},{text:"KEGIATAN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PEMOHON",value:"pemohon"},{text:"JENIS KEGIATAN",value:"nama_jenis"},{text:"NAMA KEGIATAN",value:"nama_kegiatan"},{text:"AKSI",value:"actions",sortable:!1,width:150}],search:""}},methods:{initialize:function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(){var t=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return this.datatableLoading=!0,a.next=3,this.$ajax.get("/konsultasi/kegiatan",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.datatable=e.daftar_kegiatan,t.datatableLoading=!1})).catch((function(){t.datatableLoading=!1}));case 3:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}(),dataTableRowClicked:function(a){a===this.expanded[0]?this.expanded=[]:this.expanded=[a]},viewItem:function(a){this.formdata=a,this.dialogdetailitem=!0},deleteItem:function(a){var t=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data konsultasi kegiatan dengan ID "+a.kegiatan_id+" ?",{color:"red",width:600}).then((function(e){e&&(t.btnLoading=!0,t.$ajax.post("/konsultasi/kegiatan/"+a.kegiatan_id,{_method:"DELETE"},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(){var e=t.datatable.indexOf(a);t.datatable.splice(e,1),t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}))}},components:{AdminLayout:o["a"],ModuleHeader:d["a"]}},l=s,c=e("2877"),u=e("6544"),h=e.n(u),b=e("0798"),m=e("2bc5"),p=e("8336"),f=e("b0af"),v=e("99d9"),g=e("62ad"),k=e("a523"),_=e("8fea"),x=e("ce7e"),A=e("132d"),y=e("0fd9"),w=e("2fa4"),T=e("8654"),L=e("71d9"),I=e("2a7f"),V=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=V.exports;h()(V,{VAlert:b["a"],VBreadcrumbs:m["a"],VBtn:p["a"],VCard:f["a"],VCardText:v["c"],VCol:g["a"],VContainer:k["a"],VDataTable:_["a"],VDivider:x["a"],VIcon:A["a"],VRow:y["a"],VSpacer:w["a"],VTextField:T["a"],VToolbar:L["a"],VToolbarTitle:I["a"]})}}]);