this.BX=this.BX||{},this.BX.Polus=this.BX.Polus||{},this.BX.Polus.Plugins=this.BX.Polus.Plugins||{},function(a,b){'use strict';var c=function(){this.data=null,this.signedParameters=null,this.options=null,this.url=null};c.prototype.setSignedParameters=function(a){return this.signedParameters=a,this},c.prototype.setData=function(a){return this.data=a,this},c.prototype.setOptions=function(a){return this.options=a,this},c.prototype.setUrl=function(a){return this.url=a,this},c.prototype.send=function(){var a=this,b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,c=this.url,d=this.data;return new Promise(function(e,f){var g=null===b?a.sendToModule(c,d):a.sendToComponent(c,d,b);g.then(function(a){"success"===a.status&&a.hasOwnProperty("data")?e(a.data):f(a)}).catch(function(a){if(a.hasOwnProperty("errors")){var b=[],c=a.errors;for(var d in c)b.push(c[d].message);f(b.join("</br>"))}else f(a)})})},c.prototype.sendToModule=function(a,b){return BX.ajax.runAction(a,{data:b,preparePost:!0,enctype:"multipart/form-data"})},c.prototype.sendToComponent=function(a,b,c){return BX.ajax.runComponentAction(a,c,{data:b,mode:"class",signedParameters:this.signedParameters})},c.install=function(a){a.prototype.$request=new c},b.Vue.use(c),a.default=c}(this.BX.Polus.Plugins.Request=this.BX.Polus.Plugins.Request||{},BX);
//# sourceMappingURL=main.bundle.js.map
