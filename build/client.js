(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("client.jsx", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inferno = require("inferno");
// import Component from 'inferno-component'
// class Foo extends Component<any, any> {
//   render() {
//     return <div/>
//   }
// }
var createVNode = Inferno.createVNode;
Inferno.render(createVNode(2, "a", null, "Inferno + FuseBox"), document.getElementById('root'));
});
});

FuseBox.import("default/client.jsx");
FuseBox.main("default/client.jsx");
})
(FuseBox)