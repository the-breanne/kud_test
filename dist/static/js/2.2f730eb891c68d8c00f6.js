webpackJsonp([2],{AJqI:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("SNjt"),o={data:function(){return{subscription:{}}},created:function(){var t=this;i.a.collection("subscriptions").doc(this.$route.params.id).get().then(function(s){t.subscription=s.data()}).catch(function(t){console.log(t)})},methods:{onUpdateForm:function(t){var s=this;t.preventDefault(),i.a.collection("subscriptions").doc(this.$route.params.id).update(this.subscription).then(function(){console.log("Subscription successfully updated!"),s.$router.push("/list")}).catch(function(t){console.log(t)})}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-5"},[e("h3",{staticClass:"text-center"},[t._v("Update Subscription")]),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.onUpdateForm.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.subscription.name,expression:"subscription.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.subscription.name},on:{input:function(s){s.target.composing||t.$set(t.subscription,"name",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Description")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.subscription.description,expression:"subscription.description"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.subscription.description},on:{input:function(s){s.target.composing||t.$set(t.subscription,"description",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Amount")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.subscription.amount,expression:"subscription.amount"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.subscription.amount},on:{input:function(s){s.target.composing||t.$set(t.subscription,"amount",s.target.value)}}})]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block"},[this._v("Add Subscription")])])}]},r=e("VU/8")(o,n,!1,null,null,null);s.default=r.exports}});
//# sourceMappingURL=2.2f730eb891c68d8c00f6.js.map