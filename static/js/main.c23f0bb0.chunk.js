(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Air",image:"images/Air_rune_detail.png"},{id:2,name:"Astral",image:"images/Astral_rune_detail.png"},{id:3,name:"Blood",image:"images/Blood_rune_detail.png"},{id:4,name:"Body",image:"images/Body_rune_detail.png"},{id:5,name:"Chaos",image:"images/Chaos_rune_detail.png"},{id:6,name:"Cosmic",image:"images/Cosmic_rune_detail.png"},{id:7,name:"Death",image:"images/Death_rune_detail.png"},{id:8,name:"Earth",image:"images/Earth_rune_detail.png"},{id:9,name:"Fire",image:"images/Fire_rune_detail.png"},{id:10,name:"Law",image:"images/Law_rune_detail.png"},{id:11,name:"Mind",image:"images/Mind_rune_detail.png"},{id:12,name:"Nature",image:"images/Nature_rune_detail.png"},{id:13,name:"Soul",image:"images/Soul_rune_detail.png"},{id:14,name:"Water",image:"images/Water_rune_detail.png"},{id:15,name:"Wrath",image:"images/Wrath_rune_detail.png"},{id:16,name:"Dust",image:"images/Dust_rune_detail.png"},{id:17,name:"Lava",image:"images/Lava_rune_detail.png"},{id:18,name:"Mist",image:"images/Mist_rune_detail.png"},{id:19,name:"Mud",image:"images/Mud_rune_detail.png"},{id:20,name:"Smoke",image:"images/Smoke_rune_detail.png"},{id:21,name:"Steam",image:"images/Steam_rune_detail.png"}]},,,,,,,,function(e,a,n){e.exports=n(23)},,,,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(3),m=n.n(r),s=n(4),d=n(5),o=n(7),c=n(6),l=n(8);n(15);var g=function(e){return i.a.createElement("div",{"data-id":e.id,onClick:function(){return e.removeFriend(e.id)},className:"remove col-sm-1 m-2 p-3 runeCard"},i.a.createElement("div",null,i.a.createElement("img",{className:"img-fluid",alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"}))};n(17);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(19);var h=function(e){return i.a.createElement("div",{className:"row col-sm-12"},i.a.createElement("h2",{className:"danger col-sm-1",onClick:function(){return e.setMode()}},"Hard Mode"),i.a.createElement("div",{className:"spacer col-sm-1"}),i.a.createElement("h2",{className:"peripheral modalButton col-sm-1"},"Instructions"),i.a.createElement("div",{className:"spacer col-sm-1"}),i.a.createElement("h1",{className:"title col-sm-4"},e.children),i.a.createElement("div",{className:"spacer col-sm-1"}),i.a.createElement("h2",{className:"peripheral col-sm-1"},"Score:",e.score),i.a.createElement("div",{className:"spacer col-sm-1"}),i.a.createElement("h2",{className:"peripheral col-sm-1"},"High Score:",e.highScore))},p=n(1),_=[],f=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).state={mode:"normalMode",friends:p.slice(0,15),guessed:[],score:0,highScore:0},n.setMode=function(e){"normalMode"===n.state.mode?n.setState({mode:"hardMode",friends:p}):"hardMode"===n.state.mode&&n.setState({mode:"normalMode",friends:p.slice(0,15)})},n.removeFriend=function(e){var a=n.state.friends.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]});n.state.guessed.indexOf(e)<0?_.push(e):(n.state.highScore<_.length&&n.setState({highScore:_.length}),alert("wrong"),_=[]),n.setState({friends:a,guessed:_,score:_.length}),console.log(_)},n}return Object(l.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(h,{setMode:this.setMode,score:this.state.score,highScore:this.state.highScore},"Rune Memorizer"),this.state.friends.map(function(a){return i.a.createElement(g,{removeFriend:e.removeFriend,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(t.Component);n(21);m.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.c23f0bb0.chunk.js.map