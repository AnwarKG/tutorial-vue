(function(e){function t(t){for(var o,c,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"041d":function(e,t,n){"use strict";n("525b")},"525b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app",class:"container"},a=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-12"},[Object(o["e"])("h1",null,"Personas")])],-1),c={class:"row"},l={class:"col-md-12"};function i(e,t,n,i,s,d){var u=Object(o["j"])("formulario-persona"),b=Object(o["j"])("tabla-personas");return Object(o["f"])(),Object(o["c"])("div",r,[a,Object(o["e"])("div",c,[Object(o["e"])("div",l,[Object(o["e"])(u,{onAddPersona:d.agregarPersona},null,8,["onAddPersona"]),Object(o["e"])(b,{personas:s.personas,onDeletePersona:d.eliminarPersona,onActualizarPersona:d.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])])])}var s=n("5530"),d=n("2909"),u=(n("99af"),n("4de4"),n("d81d"),{id:"tabla-personas"}),b={key:0,class:"alert alert-info",role:"alert"},p={class:"table"},f=Object(o["e"])("thead",null,[Object(o["e"])("tr",null,[Object(o["e"])("th",null,"Nombre"),Object(o["e"])("th",null,"Apellido"),Object(o["e"])("th",null,"Email"),Object(o["e"])("th",null,"Acciones")])],-1),j={key:0},m={key:1},O={key:2},h={key:3},v={key:4},y={key:5},g={key:6},k={key:7};function P(e,t,n,r,a,c){return Object(o["f"])(),Object(o["c"])("div",u,[n.personas.length?Object(o["d"])("",!0):(Object(o["f"])(),Object(o["c"])("div",b," No se han agregado personas ")),Object(o["e"])("table",p,[f,Object(o["e"])("tbody",null,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(n.personas,(function(t){return Object(o["f"])(),Object(o["c"])("tr",{key:t.id},[a.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",j,[Object(o["m"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.nombre=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.nombre]])])):(Object(o["f"])(),Object(o["c"])("td",m,Object(o["k"])(t.nombre),1)),a.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",O,[Object(o["m"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.apellido=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.apellido]])])):(Object(o["f"])(),Object(o["c"])("td",h,Object(o["k"])(t.apellido),1)),a.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",v,[Object(o["m"])(Object(o["e"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(e){return t.email=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.email]])])):(Object(o["f"])(),Object(o["c"])("td",y,Object(o["k"])(t.email),1)),a.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",g,[Object(o["e"])("button",{class:"btn btn-success",onClick:function(e){return c.guardarPersona(t)}}," 💾 Guardar ",8,["onClick"]),Object(o["e"])("button",{class:"btn btn-secondary ml-2",onClick:function(e){return c.cancelarEdicion(t)}}," ❌ Cancelar ",8,["onClick"])])):(Object(o["f"])(),Object(o["c"])("td",k,[Object(o["e"])("button",{class:"btn btn-info",onClick:function(e){return c.editarPersona(t)}}," ✏️ Editar ",8,["onClick"]),Object(o["e"])("button",{class:"btn btn-danger ml-2",onClick:function(n){return e.$emit("delete-persona",t.id)}}," 🗑️ Eliminar ",8,["onClick"])]))])})),128))])])])}var E={name:"tabla-personas",props:{personas:Array},data:function(){return{editando:null}},methods:{editarPersona:function(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona:function(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.personaEditada),this.editando=null}}};E.render=P;var w=E,x=Object(o["o"])("data-v-1c7f3f14");Object(o["h"])("data-v-1c7f3f14");var I={id:"formulario-persona"},A={class:"container"},C={class:"row"},U={class:"col-md-4"},V={class:"form-group"},_=Object(o["e"])("label",null,"Nombre",-1),F={class:"col-md-4"},S={class:"form-group"},z=Object(o["e"])("label",null,"Apellido",-1),T={class:"col-md-4"},D={class:"form-group"},M=Object(o["e"])("label",null,"Email",-1),N=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-4"},[Object(o["e"])("div",{class:"form-group"},[Object(o["e"])("button",{class:"btn btn-primary"},"Añadir persona")])])],-1),$={class:"container"},J={class:"row"},L={class:"col-md-12"},G={key:0,class:"alert alert-danger",role:"alert"},K={key:1,class:"alert alert-success",role:"alert"};Object(o["g"])();var q=x((function(e,t,n,r,a,c){return Object(o["f"])(),Object(o["c"])("div",I,[Object(o["e"])("form",{onSubmit:t[8]||(t[8]=Object(o["n"])((function(){return c.enviarFormulario&&c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(o["e"])("div",A,[Object(o["e"])("div",C,[Object(o["e"])("div",U,[Object(o["e"])("div",V,[_,Object(o["m"])(Object(o["e"])("input",{ref:"nombre","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.persona.nombre=e}),type:"text",class:["form-control",{"is-invalid":a.procesando&&c.nombreInvalido}],onFocus:t[2]||(t[2]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),onKeypress:t[3]||(t[3]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],a.persona.nombre]])])]),Object(o["e"])("div",F,[Object(o["e"])("div",S,[z,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.persona.apellido=e}),type:"text",class:["form-control",{"is-invalid":a.procesando&&c.apellidoInvalido}],onFocus:t[5]||(t[5]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],a.persona.apellido]])])]),Object(o["e"])("div",T,[Object(o["e"])("div",D,[M,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.persona.email=e}),type:"email",class:["form-control",{"is-invalid":a.procesando&&c.emailInvalido}],onFocus:t[7]||(t[7]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],a.persona.email]])])])]),N]),Object(o["e"])("div",$,[Object(o["e"])("div",J,[Object(o["e"])("div",L,[a.error&&a.procesando?(Object(o["f"])(),Object(o["c"])("div",G," Debes rellenar todos los campos! ")):Object(o["d"])("",!0),a.correcto?(Object(o["f"])(),Object(o["c"])("div",K," La persona ha sido agregada correctamente! ")):Object(o["d"])("",!0)])])])],32)])})),B={name:"formulario-persona",computed:{nombreInvalido:function(){return this.persona.nombre.length<1},apellidoInvalido:function(){return this.persona.apellido.length<1},emailInvalido:function(){return this.persona.email.length<1}},data:function(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}}};n("041d");B.render=q,B.__scopeId="data-v-1c7f3f14";var H=B,Q={name:"app",components:{TablaPersonas:w,FormularioPersona:H},data:function(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}},methods:{agregarPersona:function(e){var t=0;this.personas.length>0&&(t=this.personas[this.personas.length-1].id+1),this.personas=[].concat(Object(d["a"])(this.personas),[Object(s["a"])(Object(s["a"])({},e),{},{id:t})])},eliminarPersona:function(e){this.personas=this.personas.filter((function(t){return t.id!==e}))},actualizarPersona:function(e,t){this.personas=this.personas.map((function(n){return n.id===e?t:n}))}}};n("ca48");Q.render=i;var R=Q;Object(o["b"])(R).mount("#app")},b46b:function(e,t,n){},ca48:function(e,t,n){"use strict";n("b46b")}});
//# sourceMappingURL=app.29853748.js.map