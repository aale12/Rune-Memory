(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Air",image:"/assets/images/Air_rune_detail.png"},{id:2,name:"Astral",image:"/assets/images/Astral_rune_detail.png"},{id:3,name:"Blood",image:"/assets/images/Blood_rune_detail.png"},{id:4,name:"Body",image:"/assets/images/Body_rune_detail.png"},{id:5,name:"Chaos",image:"/assets/images/Chaos_rune_detail.png"},{id:6,name:"Cosmic",image:"/assets/images/Cosmic_rune_detail.png"},{id:7,name:"Death",image:"/assets/images/Death_rune_detail.png"},{id:8,name:"Earth",image:"/assets/images/Earth_rune_detail.png"},{id:9,name:"Fire",image:"/assets/images/Fire_rune_detail.png"},{id:10,name:"Law",image:"/assets/images/Law_rune_detail.png"},{id:11,name:"Mind",image:"/assets/images/Mind_rune_detail.png"},{id:12,name:"Nature",image:"/assets/images/Nature_rune_detail.png"},{id:13,name:"Soul",image:"/assets/images/Soul_rune_detail.png"},{id:14,name:"Water",image:"/assets/images/Water_rune_detail.png"},{id:15,name:"Wrath",image:"/assets/images/Wrath_rune_detail.png"},{id:16,name:"Dust",image:"/assets/images/Dust_rune_detail.png"},{id:17,name:"Lava",image:"/assets/images/Lava_rune_detail.png"},{id:18,name:"Mist",image:"/assets/images/Mist_rune_detail.png"},{id:19,name:"Mud",image:"/assets/images/Mud_rune_detail.png"},{id:20,name:"Smoke",image:"/assets/images/Smoke_rune_detail.png"},{id:21,name:"Steam",image:"/assets/images/Steam_rune_detail.png"}]},,,,,,,,function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(3),r=t.n(i),m=t(4),d=t(5),o=t(7),c=t(6),l=t(8);t(15);var g=function(e){return n.a.createElement("div",{"data-id":e.id,onClick:function(){return e.removeFriend(e.id)},className:"remove col-sm-1 m-2 p-3 runeCard"},n.a.createElement("div",null,n.a.createElement("img",{className:"img-fluid",alt:e.name,src:e.image})),n.a.createElement("div",{className:"content"}))};t(17);var u=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};t(19);var h=function(e){return n.a.createElement("div",{className:"row col-sm-12"},n.a.createElement("h2",{className:"danger col-sm-1",onClick:function(){return e.setMode()}},"Hard Mode"),n.a.createElement("div",{className:"spacer col-sm-1"}),n.a.createElement("h2",{className:"peripheral modalButton col-sm-1"},"Instructions"),n.a.createElement("div",{className:"spacer col-sm-1"}),n.a.createElement("h1",{className:"title col-sm-4"},e.children),n.a.createElement("div",{className:"spacer col-sm-1"}),n.a.createElement("h2",{className:"peripheral col-sm-1"},"Score:",e.score),n.a.createElement("div",{className:"spacer col-sm-1"}),n.a.createElement("h2",{className:"peripheral col-sm-1"},"High Score:",e.highScore))},p=t(1),_=[],f=function(e){function a(){var e,t;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={mode:"normalMode",friends:p.slice(0,15),guessed:[],score:0,highScore:0},t.setMode=function(e){"normalMode"===t.state.mode?t.setState({mode:"hardMode",friends:p}):"hardMode"===t.state.mode&&t.setState({mode:"normalMode",friends:p.slice(0,15)})},t.removeFriend=function(e){var a=t.state.friends.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]});t.state.guessed.indexOf(e)<0?_.push(e):(t.state.highScore<_.length&&t.setState({highScore:_.length}),alert("wrong"),_=[]),t.setState({friends:a,guessed:_,score:_.length}),console.log(_)},t}return Object(l.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u,null,n.a.createElement(h,{setMode:this.setMode,score:this.state.score,highScore:this.state.highScore},"Rune Memorizer"),this.state.friends.map(function(a){return n.a.createElement(g,{removeFriend:e.removeFriend,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(s.Component);t(21);r.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.36992a33.chunk.js.map