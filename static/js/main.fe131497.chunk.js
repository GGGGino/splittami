(this.webpackJsonpcontify=this.webpackJsonpcontify||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),s=a.n(r),i=(a(80),a(38)),l=a.n(i),o=a(35),d=a(9),j=a(7),u=a(115),b=a(107),m=a(114),h=a(108),x=a(109),O=a(67),p=a(1);function f(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(b.a)().t,s=[r("Home.places.dinner"),r("Home.places.lunch"),r("Home.places.events")];return Object(c.useEffect)((function(){var e=setTimeout((function(){n((a+1)%s.length)}),2e3);return function(){return clearTimeout(e)}}),[a,s.length]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"position-relative overflow-hidden p-3 p-md-5 mb-3 text-center main-image",children:Object(p.jsxs)("div",{className:"my-3 py-3",children:[Object(p.jsx)("h1",{className:"display-1",children:"Contify"}),Object(p.jsxs)("p",{className:"lead",children:[Object(p.jsx)(m.a,{i18nKey:"Home.slogan"})," ",s[a]]})]})}),Object(p.jsxs)(h.a,{fluid:!0,children:[Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{children:Object(p.jsx)(u.a,{client:"ca-pub-5437738883571201",slot:"2740252059",style:{display:"block",height:"90px"},format:"auto",responsive:"true"})})}),Object(p.jsxs)(x.a,{className:"gx-3",children:[Object(p.jsx)(O.a,{md:6,lg:6,className:"text-center",children:Object(p.jsxs)("div",{className:"organize-box px-3 py-5 position-relative",children:[Object(p.jsx)("h2",{className:"display-5",children:Object(p.jsx)(m.a,{i18nKey:"Home.checkerTitle"})}),Object(p.jsx)("p",{className:"lead",children:Object(p.jsx)(m.a,{i18nKey:"Home.checkerBody"})}),Object(p.jsx)(o.b,{className:"btn btn-outline-secondary stretched-link",to:"/admin-page",children:Object(p.jsx)("i",{className:"bi bi-arrow-return-right"})})]})}),Object(p.jsx)(O.a,{md:6,lg:6,className:"text-white text-center",children:Object(p.jsxs)("div",{className:"settings-box px-3 py-5 position-relative",children:[Object(p.jsx)("h2",{className:"display-5",children:Object(p.jsx)(m.a,{i18nKey:"Home.userTitle"})}),Object(p.jsx)("p",{className:"lead",children:Object(p.jsx)(m.a,{i18nKey:"Home.userBody"})}),Object(p.jsx)(o.b,{className:"btn btn-outline-secondary stretched-link",to:"/user-page",children:Object(p.jsx)("i",{className:"bi bi-arrow-return-right"})})]})})]})]})]})}a(100),a(101),a(102),a(103);var v=a(19),g=a(113),y=a(116),N=a(110),_=a(112),P=a.p+"static/media/money.863bbeee.png";function C(){return Object(p.jsx)(_.a,{expand:"lg",children:Object(p.jsx)(h.a,{children:Object(p.jsxs)(_.a.Brand,{href:"/",children:[Object(p.jsx)("img",{src:P,width:"55",className:"d-inline-block align-top",alt:"React Bootstrap logo"}),"Contify"]})})})}var T=a(24),k=a(25),S=a(44),B=a(43),w=a(54);w.a.WORKER_PATH="contify/qr-scanner-worker.min.js";var H=function(e){Object(S.a)(a,e);var t=Object(B.a)(a);function a(){var e;Object(T.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).qrScanner=void 0,e.timerId=void 0,e.wait=void 0,e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){var t=document.getElementById("qr-video");e.qrScanner=new w.a(t,(function(t){e.props.onQrcodeScanned(t),e.qrScanner.stop()})),e.qrScanner.start()}),200)}},{key:"componentWillUnmount",value:function(){this.qrScanner&&this.qrScanner.destroy()}},{key:"render",value:function(){return Object(p.jsx)("video",{id:"qr-video"})}},{key:"debounceFn",value:function(e,t){clearTimeout(this.timerId),this.timerId=setTimeout(e,t)}},{key:"debounce",value:function(e,t){var a=this;this.wait||(this.wait=e,setTimeout((function(){console.log("insideTimout"),a.wait(),a.wait=void 0}),t))}}]),a}(c.Component),z=a(2);function I(e,t){e.toPut||(e.toPut=0),e.toPut+=t}var G=[["#fd696b","#fa616e","#f65871","#f15075"],["#4b8512","#1d960e","#1fb52d","#006902"],["#1a23fd","#3e49fa","#56a6f6","#21b2f1"],["#df19fd","#fa48d7","#f666e1","#e151f1"],["#fd7f15","#fa954d","#f6b57a","#f1bd26"],["#b49820","#fab53b","#f6b672","#f1d645"],["#fd696b","#fa616e","#f65871","#f15075"],["#fd696b","#fa616e","#f65871","#f15075"],["#fd696b","#fa616e","#f65871","#f15075"]];var A={calculate:function(e){var t=Object(v.a)(e);t.map((function(e){return e.toPut=0,e}));for(var a=e.reduce((function(e,t){return e+t.alreadyPutted}),0)+.7;a>1;){var c=a/t.length;for(var n in t){var r=Object(z.a)({},t[n]);if(!(r.maxToPut&&r.toPut>=r.maxToPut)){if(r.maxToPut){var s=r.toPut+c-r.maxToPut;r.maxToPut<c?(I(r,r.maxToPut),a-=r.maxToPut):s>0?(I(r,r.maxToPut-r.toPut),a-=r.maxToPut-r.toPut):(I(r,c),a-=c)}else I(r,c),a-=c;t[n]=r}}}for(var i in t)t[i].toPut=Math.round(t[i].toPut);return t},intToCurrString:function(e){return"".concat((e/100).toFixed(2)," \u20ac")},colorCardGenerator:function(){return function(e){return G[e%G.length]}},getColorCard:function(e){return G[e]}};a(104);function E(e){var t=e.gradients||A.getColorCard(0),a=e.config.alreadyPutted||0,c=e.config.alreadyPutted-e.config.toPut,n=e.config.toPut?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"card__label",children:c>0?"In credit":"In debit"}),Object(p.jsx)("p",{className:"card__info",children:A.intToCurrString(Math.abs(c))})]}):null,r="ccard ".concat(e.className||""),s={backgroundImage:"linear-gradient(to right bottom, ".concat(t.join(", "),")")},i=(e.nth+1).toString().padStart(16,"*").split(/([1-9A-Z*+]{4})/).join(" ");return Object(p.jsxs)("div",{className:r,children:[Object(p.jsxs)("div",{className:"card__front card__part",style:s,children:[Object(p.jsxs)("div",{className:"card__space-60",children:[Object(p.jsx)("span",{className:"card__label",children:"Card holder"}),Object(p.jsx)("p",{className:"card__info",children:e.config.name})]}),Object(p.jsxs)("div",{className:"card__space-40",children:[Object(p.jsx)("span",{className:"card__label",children:"Balance"}),Object(p.jsx)("p",{className:"card__info",children:A.intToCurrString(a)})]}),Object(p.jsxs)("div",{className:"card__space-60",children:[Object(p.jsx)("span",{className:"card__label",children:"Actions"}),Object(p.jsxs)("p",{className:"card__info",children:[Object(p.jsx)(y.a,{variant:"secondary",size:"sm",onClick:e.onEdit,children:Object(p.jsx)("i",{className:"bi bi-upc-scan"})})," ",Object(p.jsx)(y.a,{variant:"danger",size:"sm",onClick:e.onDelete,children:Object(p.jsx)("i",{className:"bi bi-trash"})})]})]}),Object(p.jsx)("div",{className:"card__space-40",children:n}),Object(p.jsx)("p",{className:"card_numer",children:i})]}),Object(p.jsxs)("div",{className:"card__back card__part",style:s,children:[Object(p.jsx)("div",{className:"card__black-line"}),Object(p.jsx)("div",{className:"card__back-content",children:Object(p.jsx)("div",{className:"card__secret",children:Object(p.jsx)("p",{className:"card__secret--last",children:"420"})})})]})]})}var M=[];function F(){var e=Object(c.useState)(M),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(M),s=Object(j.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)(!1),d=Object(j.a)(o,2),b=d[0],m=d[1],f=Object(c.useState)(null),_=Object(j.a)(f,2),P=_[0],T=_[1],k=A.colorCardGenerator(),S=function(){m(!0)},B=function(){m(!1)},w=i.map((function(e,t){return Object(p.jsx)(O.a,{className:"py-3 credit-card",xs:12,md:4,children:Object(p.jsx)(E,{nth:t,config:e,gradients:k(t),onEdit:function(){return e=t,m(!0),void T(e);var e},onDelete:function(){return e=t,a.splice(e,1),l(Object(v.a)(a)),void n(Object(v.a)(a));var e}})},t)}));return w.push(Object(p.jsx)(O.a,{className:"py-3",xs:12,md:4,children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(g.a.Header,{className:"card-header d-flex justify-content-between align-items-center",children:Object(p.jsx)(g.a.Title,{children:"Azioni"})}),Object(p.jsxs)(g.a.Body,{children:[Object(p.jsxs)(y.a,{variant:"secondary",size:"sm",onClick:S,children:[Object(p.jsx)("i",{className:"bi bi-upc-scan"})," Add"]})," ",Object(p.jsxs)(y.a,{variant:"secondary",size:"sm",onClick:S,children:[Object(p.jsx)("i",{className:"bi bi-input-cursor"})," Add"]})," ",Object(p.jsxs)(y.a,{variant:"danger",size:"sm",onClick:function(){l([]),n([])},children:[Object(p.jsx)("i",{className:"bi bi-input-cursor"})," Erase"]})]})]})},"extra")),Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{}),Object(p.jsx)(u.a,{client:"ca-pub-5437738883571201",slot:"2740252059",style:{display:"block",height:"90px"},format:"auto",responsive:"true"}),Object(p.jsx)(h.a,{className:"py-3 cards-container",children:Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{sm:12,children:Object(p.jsx)(x.a,{children:w})})})}),Object(p.jsxs)(N.a,{show:b,onHide:B,children:[Object(p.jsx)(N.a.Header,{closeButton:!0,children:Object(p.jsx)(N.a.Title,{children:"Scan code"})}),Object(p.jsx)(N.a.Body,{children:Object(p.jsx)(H,{onQrcodeScanned:function(e){B();var t=JSON.parse(atob(e));null!==P?a[P]=t:a.push(t);var c=A.calculate(a);l(c),n(Object(v.a)(a)),T(null)}})})]})]})}var q=a(8),L=a(111);function R(e){var t=Object(c.useState)({name:"",alreadyPutted:0,maxToPut:null}),a=Object(j.a)(t,2),n=a[0],r=a[1],s=function(e){var t=e.target,a=t.id;r(Object(z.a)(Object(z.a)({},n),{},Object(q.a)({},a,Math.trunc(100*parseFloat(t.value)))))};return Object(p.jsxs)(L.a,{children:[Object(p.jsxs)(L.a.Group,{className:"mb-3",controlId:"name",children:[Object(p.jsx)(L.a.Label,{children:"Name"}),Object(p.jsx)(L.a.Control,{type:"text",placeholder:"Name",onChange:function(e){var t=e.target,a=t.id;r(Object(z.a)(Object(z.a)({},n),{},Object(q.a)({},a,t.value)))}}),Object(p.jsx)(L.a.Text,{className:"text-muted",children:"Set your name"})]}),Object(p.jsxs)(L.a.Group,{className:"mb-3",controlId:"alreadyPutted",children:[Object(p.jsx)(L.a.Label,{children:"Already putted"}),Object(p.jsx)(L.a.Control,{type:"number",placeholder:"0",onChange:s})]}),Object(p.jsxs)(L.a.Group,{className:"mb-3",controlId:"maxToPut",children:[Object(p.jsx)(L.a.Label,{children:"Max import"}),Object(p.jsx)(L.a.Control,{type:"number",placeholder:"0",onChange:s})]}),Object(p.jsx)(y.a,{variant:"primary",onClick:function(t){e.submitCallback(n)},children:e.sendLabel})]})}function K(){var e=Object(c.useRef)(null),t=Object(c.useState)({name:"",alreadyPutted:0,maxToPut:null}),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),i=Object(j.a)(s,2),o=i[0],d=i[1];Object(c.useEffect)((function(){e&&e.current&&e.current.dialog&&(console.log(e.current),e.current.dialog.getElementsByTagName("svg")[0].setAttribute("viewBox","0 0 256 256"),e.current.dialog.getElementsByTagName("svg")[0].setAttribute("style","width: 100%; height: auto"))}),[n]);var b=o?Object(p.jsx)(l.a,{value:btoa(JSON.stringify(n))}):null;return Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{}),Object(p.jsxs)(h.a,{children:[Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{children:Object(p.jsx)("div",{className:"formGrey",children:Object(p.jsx)(R,{sendLabel:"Generate",submitCallback:function(e){r(Object(z.a)({},e)),d(!0)}})})})}),Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{children:Object(p.jsx)(u.a,{client:"ca-pub-5437738883571201",slot:"2740252059",style:{display:"block",height:"90px"},format:"auto",responsive:"true"})})})]}),Object(p.jsxs)(N.a,{show:o,onHide:function(){d(!1)},ref:e,size:"sm",children:[Object(p.jsx)(N.a.Header,{closeButton:!0,children:Object(p.jsx)(N.a.Title,{children:"QRCode Generated"})}),Object(p.jsx)(N.a.Body,{children:b})]})]})}var U={name:"Gino",maxImporto:0};function D(){return Object(p.jsx)(o.a,{children:Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("main",{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/generate-code",children:Object(p.jsx)(J,{})}),Object(p.jsx)(d.a,{path:"/capture",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(d.a,{path:"/user-page",children:Object(p.jsx)(K,{})}),Object(p.jsx)(d.a,{path:"/admin-page",children:Object(p.jsx)(F,{})}),Object(p.jsx)(d.a,{path:"/",children:Object(p.jsx)(f,{})})]})})})})}function J(){var e=btoa(JSON.stringify(U));return Object(p.jsx)(l.a,{value:e})}function Q(){return Object(p.jsx)("input",{type:"file",name:"image",accept:"image/*",capture:"environment"})}var W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,117)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},V=a(55),Z=a(21),X=a(73),Y={translation:{Home:{slogan:"Share with others the cost of your",checkerTitle:"Checker",checkerBody:"Handle the process of organizing the users and the prize they have to put in.",userTitle:"User",userBody:"Use this to only set your personal and economical information.",goButton:"Go",places:{dinner:"Dinner",lunch:"Lunch",events:"Events"}},User:{name:"Name",namePlaceholder:"Write your name",nameHelper:"Set your name",alreadyPutted:"Already putted",maxImport:"Max import",generate:"Generate"},Manager:{addSlave:"Add user",erase:"Erase",alreadyPutted:"Already putted",maxImport:"Max import",change:"Change",remove:"Remove",calculate:"Calculate"}}},$={translation:{Home:{slogan:"Condividi con altri il prezzo di",checkerTitle:"Organizzatore",checkerBody:"Gestisci gli utenti ed le loro configurazioni",userTitle:"Utente",userBody:"Configura le tue impostazioni",goButton:"Vai",places:{dinner:"cene",lunch:"pranzi",events:"eventi"}},User:{name:"Nome",namePlaceholder:"Scrivi il tuo nome",nameHelper:"Setta il tuo nome",alreadyPutted:"Gi\xe0 pagato",maxImport:"Massimo importo",generate:"Genera"},Manager:{addSlave:"Aggiungi utente",erase:"Elimina utenti",alreadyPutted:"Gi\xe0 pagato",maxImport:"Massimo importo",change:"Cambia",remove:"Rimuovi",calculate:"Calcola"}}};V.a.use(X.a).use(Z.e).init({debug:!1,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:Y,it:$}});V.a;s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),W()},80:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.fe131497.chunk.js.map