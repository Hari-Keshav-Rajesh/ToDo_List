(()=>{"use strict";var e={794:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),l=n.n(d)()(a());l.push([e.id,".content{\n    display: flex;\n    flex-direction: column;\n}\n\n.form{\n    display: flex;\n    flex-direction: column;\n    height:40vh;\n    width:30vh;\n    position: relative;\n    top: 25vh;\n    gap: 8vh;\n    font-size: 3vh;\n    padding: 4vh;\n    background-color: orange;\n    margin-left: 50vh;\n}\n\n.input{\n    display: flex;\n    gap:2vh;\n}\n\n#title, #description, #dueDate{\n    font-size: 1.5vh;\n}\n\n.formButtons{\n    display: flex;\n    gap: 10vh;\n}\n\n.formButtons button{\n    height:5vh;\n    width: 10vh;\n    font-size: 2vh;\n    font-weight: bold;\n    color: white;\n    background-color: #48BF91;\n}\n\n.formButtons button:hover{\n    color: black;\n}\n.radio{\n    background-color: orange;\n    padding: 5vh;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n    height:20vh;\n    width:40vh;\n    position: relative;\n    top:30vh;\n    margin-left: 50vh;\n}\n\n.radioText{\n   font-size: 5vh;\n}\n\n.radioButtons{\n    display: flex;\n    gap: 1vh;\n}\n\n.radioButtons label{\n    font-size: 3vh;\n    font-weight: bold;\n}\n\n.radioButtons input{\n    size: 3vh;\n}\n\n.confirmButton{\n    height:5vh;\n    width: 10vh;\n    font-size: 2vh;\n    font-weight: bold;\n    color: white;\n    background-color: #48BF91;\n}\n\n.confirmButton:hover{\n    color: black;\n}\n\n",""]);const r=l},93:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),l=n.n(d)()(a());l.push([e.id,".projectsBox{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10vh;\n    width:160vh;\n    background-color: azure;\n    border-color: #48BF91; \n    border-style: solid;\n    border-radius: 1vh;\n    border-width: 1vh;\n}\n\n.textBox{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.titleText{\n    font-size: 5vh;\n    font-weight: bold;\n}\n\n.descText{\n    font-size: 3vh;\n}\n\n.dateText{\n    font-size: 3vh;\n}\n\n.removeButton{\n    height:5vh;\n    width: 10vh;\n    font-size: 2vh;\n    font-weight: bold;\n    color: white;\n    background-color: #48BF91;\n}\n\n.removeButton:hover{\n    color: black;\n}",""]);const r=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,d){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(l[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&l[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},l=[],r=0;r<e.length;r++){var i=e[r],c=o.base?i[0]+o.base:i[0],s=d[c]||0,u="".concat(c," ").concat(s);d[c]=s+1;var p=n(u),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=a(h,o);o.byIndex=r,t.splice(r,0,{identifier:u,updater:m,references:1})}l.push(u)}return l}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var d=o(e=e||[],a=a||{});return function(e){e=e||[];for(var l=0;l<d.length;l++){var r=n(d[l]);t[r].references--}for(var i=o(e,a),c=0;c<d.length;c++){var s=n(d[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}d=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),d=n(569),l=n.n(d),r=n(565),i=n.n(r),c=n(216),s=n.n(c),u=n(589),p=n.n(u),h=n(794),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=s(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var v=n(93),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const y=(e,t,n,o)=>{var a=document.createElement("div");a.classList.add("projectsBox"),t.appendChild(a);var d=document.createElement("div");d.classList.add("textBox"),a.appendChild(d);var l=document.createElement("div");l.classList.add("titleText"),l.textContent=`${e[e.length-1].title}`,d.appendChild(l);var r=document.createElement("div");r.classList.add("descText"),r.textContent=`${e[e.length-1].description}`,d.appendChild(r);var i=document.createElement("div");i.classList.add("dateText"),i.innerHTML=`Due Date<br>${e[e.length-1].dueDate}`,a.appendChild(i);var c=document.createElement("button");c.classList.add("removeButton"),c.textContent="Done",a.appendChild(c),c.addEventListener("click",(()=>{let d=e[e.length-1].index;t.removeChild(a),e.splice(d,1);for(let t=d;t<e.length;t++)e[t].index-=1;let l=n[n.length-1].index;o.removeChild(s),n.splice(l,1);for(let e=l;e<n.length;e++)n[e].index-=1}));var s=document.createElement("div");s.classList.add("projectsBox"),o.appendChild(s);var u=document.createElement("div");u.classList.add("textBox"),s.appendChild(u);var p=document.createElement("div");p.classList.add("titleText"),p.textContent=`${n[n.length-1].title}`,u.appendChild(p);var h=document.createElement("div");h.classList.add("descText"),h.textContent=`${n[n.length-1].description}`,u.appendChild(h);var m=document.createElement("div");m.classList.add("dateText"),m.innerHTML=`Due Date<br>${n[n.length-1].dueDate}`,s.appendChild(m);var v=document.createElement("button");v.classList.add("removeButton"),v.textContent="Done",s.appendChild(v),v.addEventListener("click",(()=>{let d=e[e.length-1].index;t.removeChild(a),e.splice(d,1);for(let t=d;t<e.length;t++)e[t].index-=1;let l=n[n.length-1].index;o.removeChild(s),n.splice(l,1);for(let e=l;e<n.length;e++)n[e].index-=1}))},b=document.querySelector(".content"),x=(e,t,n,o)=>({title:e,description:t,dueDate:n,index:o}),C=document.createElement("table");C.classList.add("projectsTable"),b.appendChild(C);const g=document.createElement("table");g.classList.add("homeTable"),b.appendChild(g);const E=document.createElement("table");E.classList.add("workTable"),b.appendChild(E);const L=document.createElement("table");L.classList.add("otherTable"),b.appendChild(L);let k=[],T=[],w=[],B=[];document.querySelector(".addProject").addEventListener("click",(()=>{((e,t,n,o,a)=>{const d=document.querySelector(".content"),l=document.querySelector(".projectsTable"),r=document.querySelector(".homeTable"),i=document.querySelector(".workTable"),c=document.querySelector(".otherTable");d.classList.add("content");const s=document.createElement("form");s.classList.add("form"),d.appendChild(s);const u=document.createElement("div");u.classList.add("title","input"),s.appendChild(u);const p=document.createElement("label");p.textContent="Title",p.setAttribute("for","title"),u.appendChild(p);const h=document.createElement("input");h.setAttribute("type","text"),h.setAttribute("name","title"),h.setAttribute("id","title"),u.appendChild(h);const m=document.createElement("div");m.classList.add("description","input"),s.appendChild(m);const v=document.createElement("label");v.textContent="Note",v.setAttribute("for","description"),m.appendChild(v);const f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("name","description"),f.setAttribute("id","description"),m.appendChild(f);const b=document.createElement("div");b.classList.add("date","input"),s.appendChild(b);const x=document.createElement("label");x.textContent="Date",x.setAttribute("for","dueDate"),b.appendChild(x);const C=document.createElement("input");C.setAttribute("type","date"),C.setAttribute("name","dueDate"),C.setAttribute("id","dueDate"),b.appendChild(C);const g=document.createElement("div");g.classList.add("formButtons"),s.appendChild(g);const E=document.createElement("button");E.setAttribute("type","submit"),E.textContent="Add",E.classList.add("submitButton"),g.appendChild(E);const L=document.createElement("button");L.textContent="Cancel",L.classList.add("cancelButton"),g.appendChild(L);const k=document.createElement("div");k.classList.add("radio");const T=document.createElement("div");T.classList.add("radioText"),T.textContent="Select Type of work",k.appendChild(T);const w=document.createElement("div");w.classList.add("radioButtons"),k.appendChild(w);const B=document.createElement("label");B.htmlFor="home",B.textContent="Home",w.appendChild(B);const A=document.createElement("input");A.type="radio",A.value="home",A.name="radio",A.id="home",w.appendChild(A);const S=document.createElement("label");S.htmlFor="work",S.textContent="Work",w.appendChild(S);const D=document.createElement("input");D.type="radio",D.value="work",D.name="radio",D.id="work",w.appendChild(D);const j=document.createElement("label");j.htmlFor="other",j.textContent="Other",w.appendChild(j);const q=document.createElement("input");q.type="radio",q.value="other",q.name="radio",q.id="other",w.appendChild(q);const z=document.createElement("button");z.classList.add("confirmButton"),z.textContent="Confirm",k.appendChild(z),E.addEventListener("click",(n=>{n.preventDefault(),""===h.value==1||""===f.value==1||""===C.value==1?alert("Please enter all details"):(t.push(e(h.value,f.value,C.value,t.length)),d.removeChild(s),d.appendChild(k))})),L.addEventListener("click",(()=>{d.removeChild(s)})),z.addEventListener("click",(s=>{s.preventDefault(),A.checked?(n.push(e(h.value,f.value,C.value,n.length)),d.removeChild(k),y(t,l,n,r)):D.checked?(o.push(e(h.value,f.value,C.value,o.length)),d.removeChild(k),y(t,l,o,i)):q.checked?(a.push(e(h.value,f.value,C.value,a.length)),d.removeChild(k),y(t,l,a,c)):alert("Please select an option"),l.style.display="block",r.style.display="none",i.style.display="none",c.style.display="none"}))})(x,k,T,w,B)})),document.querySelector(".projects").addEventListener("click",(()=>{C.style.display="block",g.style.display="none",E.style.display="none",L.style.display="none"})),document.querySelector(".home").addEventListener("click",(()=>{g.style.display="block",C.style.display="none",E.style.display="none",L.style.display="none"})),document.querySelector(".work").addEventListener("click",(()=>{E.style.display="block",g.style.display="none",C.style.display="none",L.style.display="none"})),document.querySelector(".others").addEventListener("click",(()=>{L.style.display="block",g.style.display="none",E.style.display="none",C.style.display="none"}))})()})();