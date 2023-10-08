!function(){"use strict";var e,r={716:function(){var e=window.wp.blocks,r=window.React,t=window.wp.i18n,n=window.wp.components,o=window.wp.blockEditor,l=JSON.parse('{"u2":"dmg/alert","Y4":{"E":{"K":["notice","warning","error"]}}}');function a(e,r){return e.className=`dmg-alert dmg-${r.alertType}`,e}(0,e.registerBlockType)(l.u2,{edit:function({attributes:e,setAttributes:c}){const i=a((0,o.useBlockProps)(),e);return(0,r.createElement)("div",{...i},(0,r.createElement)(o.InspectorControls,null,(0,r.createElement)(n.PanelBody,null,(0,r.createElement)(n.SelectControl,{label:(0,t.__)("Alert Type"),value:e.alertType,options:l.Y4.E.K.map((e=>({label:e.replace(/^\w/,(e=>e.toUpperCase())),value:e}))),onChange:e=>{c({alertType:e})}}))),(0,r.createElement)(o.InnerBlocks,{allowedBlocks:["core/paragraph","core/list"],template:[["core/paragraph",{placeholder:"Add a title"}],["core/list",{placeholder:"Add a list"}]]}))},save:function({attributes:e}){const t=a(o.useBlockProps.save(),e);return(0,r.createElement)("div",{...t},(0,r.createElement)(o.InnerBlocks.Content,null))}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var l=t[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.m=r,e=[],n.O=function(r,t,o,l){if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],l=e[s][2];for(var c=!0,i=0;i<t.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(s--,1);var u=o();void 0!==u&&(r=u)}}return r}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[t,o,l]},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,l,a=t[0],c=t[1],i=t[2],u=0;if(a.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var s=i(n)}for(r&&r(t);u<a.length;u++)l=a[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},t=self.webpackChunkdmg_alert=self.webpackChunkdmg_alert||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[431],(function(){return n(716)}));o=n.O(o)}();