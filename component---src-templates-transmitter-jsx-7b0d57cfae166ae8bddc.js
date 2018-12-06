(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,a){"use strict";a.r(t);a(28);var i=a(6),n=a.n(i),l=a(0),o=a.n(l),s=(a(139),a(201)),r=a(157),c=a.n(r),m=a(166),d=a(46),u=a.n(d),p=a(4),g=a.n(p),E=a(230),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={elevationProfile:[],scriptElement:null},a.onScriptLoad=a.onScriptLoad.bind(u()(u()(a))),a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(window.google)this.onScriptLoad();else{var e=document.createElement("script");e.type="text/javascript",e.src="https://maps.google.com/maps/api/js?key=AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.setState({scriptElement:e}),e.addEventListener("load",this.onScriptLoad())}},a.componentWillUnmount=function(){var e=this.state.scriptElement;null!==e&&e.removeEventListener("load",this.onScriptLoad)},a.onScriptLoad=function(){var e=this,t=this.props,a=t.location1,i=t.location2,n=[{lat:a.latitude,lng:a.longitude},{lat:i.latitude,lng:i.longitude}],l=new window.google.maps.ElevationService,o={path:n,samples:256};new Promise(function(e,t){l||t(new Error("ElevationService not supported")),l.getElevationAlongPath(o,function(t){e(t)},function(){t(new Error("Permission denied"))})}).then(function(t){e.setState({elevationProfile:t})})},a.render=function(){var e=this.state.elevationProfile.map(function(e){return parseFloat(e.elevation.toFixed(2))}),t={labels:new Array(256),datasets:[{borderColor:"#673ab7",borderWidth:1,radius:0,label:"Elevation Profile",fill:!1,lineTension:0,data:e}]};return o.a.createElement("div",{className:"elevation-profile",style:{marginTop:"20px"}},o.a.createElement(E.a,{data:t,options:{legend:{display:!1},xAxes:[{display:!1,gridLines:{display:!1},labels:{show:!1}}],yAxes:[{display:!1,gridLines:{display:!1},labels:{show:!1}}]},height:100}))},t}(l.Component);h.propTypes={location1:g.a.shape.isRequired,location2:g.a.shape.isRequired};var v=h;a(197);a.d(t,"query",function(){return f});var N=function(e){function t(t){var a;(a=e.call(this,t)||this).getLocation=function(){var e=navigator.geolocation;new Promise(function(t,a){e||a(new Error("Not Supported")),e.getCurrentPosition(function(e){t(e)},function(){a(new Error("Permission denied"))})}).then(function(e){var t=c()({lat:e.coords.latitude,lng:e.coords.longitude},{lat:a.state.transmitter.latitude,lng:a.state.transmitter.longitude},{exact:!0,unit:"km"});a.setState({distance:t.toFixed(2),positionAcquired:!0,position:e})})};var i=t.data.transmitterListing20110702Json;return a.state={distance:0,key:"",positionAcquired:!1,position:{coords:{latitude:i.latitude,longitude:i.longitude}},transmitter:i},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.getLocation()},a.componentWillUnmount=function(){},a.render=function(){var e=this.state,t=e.distance,a=e.positionAcquired,i={lat:this.state.position.coords.latitude,lng:this.state.position.coords.longitude},n={latitude:this.state.position.coords.latitude,longitude:this.state.position.coords.longitude},l={latitude:this.state.transmitter.latitude,longitude:this.state.transmitter.longitude},r=null;a&&(r=o.a.createElement(v,{location1:n,location2:l}));var c=this.state.transmitter,d=c.antennaHeight,u=c.antennaPattern,p=c.areaServed,g=(c.bSL,c.band),E=c.callsign,h=(c.easting,c.frequency),N=c.hoursofOperation,f=(c.id,c.latitude),w=c.licenceArea,y=(c.licenceAreaID,c.licenceNumber),b=c.longitude,S=c.maximumCMF,L=c.maximumERP,x=(c.northing,c.onAirID,c.polarisation),A=c.purpose,P=(c.siteId,c.siteName),q=c.state,W=(c.status,c.technicalSpecificationNumber,c.transmitterPower);c.zone;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,E," ",h,g))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},"Site Details"),o.a.createElement("ul",{className:"list-group list-group-flush"},o.a.createElement("li",{className:"list-group-item"},P),o.a.createElement("li",{className:"list-group-item"},N),o.a.createElement("li",{className:"list-group-item"},t,"km away"),o.a.createElement("li",{className:"list-group-item"},o.a.createElement("a",{href:"http://maps.google.com.au/maps?q="+f+","+b},f,","," ",b)),o.a.createElement("li",{className:"list-group-item"},o.a.createElement("span",{className:"badge badge-primary"},A)),o.a.createElement("li",{className:"list-group-item"},p),o.a.createElement("li",{className:"list-group-item"},w),o.a.createElement("li",{className:"list-group-item"},q),o.a.createElement("li",{className:"list-group-item"},"License",y)))),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},"Transmitter Details"),o.a.createElement("ul",{className:"list-group list-group-flush"},o.a.createElement("li",{className:"list-group-item"},d,"m high"),o.a.createElement("li",{className:"list-group-item"},u),o.a.createElement("li",{className:"list-group-item"},W),o.a.createElement("li",{className:"list-group-item"},S),o.a.createElement("li",{className:"list-group-item"},L),o.a.createElement("li",{className:"list-group-item"},x))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card",style:{height:"200px"}},r)),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card",style:{height:"200px"}},o.a.createElement(s.Map,{google:this.props.google,zoom:10,style:{},initialCenter:i}))))))},t}(l.Component),f=(t.default=Object(s.GoogleApiWrapper)({apiKey:"AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg"})(N),"2337569289")}}]);
//# sourceMappingURL=component---src-templates-transmitter-jsx-7b0d57cfae166ae8bddc.js.map