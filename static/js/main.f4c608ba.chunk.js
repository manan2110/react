(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{128:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a.n(n),r=a(15),s=a.n(r),i=(a(128),a(76)),o=(a(129),a(4)),d="37c015a1fb6418e1a906906d9ec236bd",u="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),h=s[0],l=s[1];return Object(o.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>16?"App warm":"App",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search City",onChange:function(e){return c(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),c(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[h.name," , ",h.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\u2103"]}),Object(o.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,426)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()}},[[425,1,2]]]);
//# sourceMappingURL=main.f4c608ba.chunk.js.map