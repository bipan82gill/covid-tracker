(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3Xxrs",card:"Cards_card__wHE0a",infected:"Cards_infected__19s5-",recovered:"Cards_recovered__1FStN",deaths:"Cards_deaths__1Gczs"}},201:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(66),o=a.n(c),s=a(6),l=a.n(s),u=a(13),i=a(67),d=a(68),m=a(79),f=a(77),p=a(215),v=a(218),h=a(217),E=a(219),b=a(28),x=a.n(b),y=a(29),g=a.n(y),_=a(11),w=a.n(_),O=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return console.log(a),a?n.a.createElement("div",{className:w.a.container},n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(w.a.card,w.a.infected)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0}," Infected "),n.a.createElement(E.a,{varaint:"h5"},n.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(w.a.card,w.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0}," Recovered"),n.a.createElement(E.a,{varaint:"h5"},n.a.createElement(x.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(w.a.card,w.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0}," Deaths "),n.a.createElement(E.a,{varaint:"h5"},n.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of death cases of COVID-19"))))):"Loading......"},C=a(78),j=a(40),k=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r,n,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(D);case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:r,recovered:n,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=a(73),B=a(75),U=a.n(B),V=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(a),e()}));var o=a.length?n.a.createElement(I.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:U.a.container},o)},A=function(){return n.a.createElement("h1",null,"CountryPicker")},J=a(76),z=a.n(J),F=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:z.a.container},n.a.createElement(O,{data:e}),n.a.createElement(V,null),n.a.createElement(A,null))}}]),a}(n.a.Component);o.a.render(n.a.createElement(F,null),document.getElementById("root"))},75:function(e,t,a){},76:function(e,t,a){e.exports={container:"App_container__1Q6i9"}},81:function(e,t,a){e.exports=a(201)}},[[81,1,2]]]);
//# sourceMappingURL=main.c70c6966.chunk.js.map