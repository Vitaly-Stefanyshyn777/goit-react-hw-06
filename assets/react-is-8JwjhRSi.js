var d={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,b=t?Symbol.for("react.element"):60103,S=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,c=t?Symbol.for("react.strict_mode"):60108,f=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,i=t?Symbol.for("react.context"):60110,$=t?Symbol.for("react.async_mode"):60111,u=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,l=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,p=t?Symbol.for("react.lazy"):60116,C=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,w=t?Symbol.for("react.responder"):60118,_=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var a=e.$$typeof;switch(a){case b:switch(e=e.type,e){case $:case u:case n:case f:case c:case l:return e;default:switch(e=e&&e.$$typeof,e){case i:case y:case p:case m:case s:return e;default:return a}}case S:return a}}}function x(e){return o(e)===u}r.AsyncMode=$;r.ConcurrentMode=u;r.ContextConsumer=i;r.ContextProvider=s;r.Element=b;r.ForwardRef=y;r.Fragment=n;r.Lazy=p;r.Memo=m;r.Portal=S;r.Profiler=f;r.StrictMode=c;r.Suspense=l;r.isAsyncMode=function(e){return x(e)||o(e)===$};r.isConcurrentMode=x;r.isContextConsumer=function(e){return o(e)===i};r.isContextProvider=function(e){return o(e)===s};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===b};r.isForwardRef=function(e){return o(e)===y};r.isFragment=function(e){return o(e)===n};r.isLazy=function(e){return o(e)===p};r.isMemo=function(e){return o(e)===m};r.isPortal=function(e){return o(e)===S};r.isProfiler=function(e){return o(e)===f};r.isStrictMode=function(e){return o(e)===c};r.isSuspense=function(e){return o(e)===l};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===n||e===u||e===f||e===c||e===l||e===v||typeof e=="object"&&e!==null&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===s||e.$$typeof===i||e.$$typeof===y||e.$$typeof===M||e.$$typeof===w||e.$$typeof===_||e.$$typeof===C)};r.typeOf=o;d.exports=r;var P=d.exports;export{P as r};
