import{p as z}from"./dispatch.297fbff5.js";import{V as B}from"./index.78a9f0bb.js";import{_ as I,a as b,o as g,M as k}from"./index.svelte_svelte_type_style_lang.1b9663cd.js";/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function X(o){return o===void 0&&(o=window),q(o)?{passive:!0}:!1}function q(o){o===void 0&&(o=window);var i=!1;try{var t={get passive(){return i=!0,!1}},e=function(){};o.document.addEventListener("test",e,t),o.document.removeEventListener("test",e,t)}catch{i=!1}return i}const O=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:X},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var V={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},j={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},L={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},A;function P(o,i){i===void 0&&(i=!1);var t=o.CSS,e=A;if(typeof A=="boolean"&&!i)return A;var a=t&&typeof t.supports=="function";if(!a)return!1;var r=t.supports("--css-vars","yes"),n=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=r||n,i||(A=e),e}function W(o,i,t){if(!o)return{x:0,y:0};var e=i.x,a=i.y,r=e+t.left,n=a+t.top,d,u;if(o.type==="touchstart"){var v=o;d=v.changedTouches[0].pageX-r,u=v.changedTouches[0].pageY-n}else{var f=o;d=f.pageX-r,u=f.pageY-n}return{x:d,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var x=["touchstart","pointerdown","mousedown","keydown"],U=["touchend","pointerup","mouseup","contextmenu"],R=[],Z=function(o){I(i,o);function i(t){var e=o.call(this,b(b({},i.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(a){e.activateImpl(a)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var a=i.cssClasses,r=a.ROOT,n=a.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(n),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,a=e.ROOT,r=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(a),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var e,a;if(t){try{for(var r=g(x),n=r.next();!n.done;n=r.next()){var d=n.value;this.adapter.registerInteractionHandler(d,this.activateHandler)}}catch(u){e={error:u}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var e,a;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=g(U),n=r.next();!n.done;n=r.next()){var d=n.value;this.adapter.registerDocumentInteractionHandler(d,this.deactivateHandler)}}catch(u){e={error:u}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(e)throw e.error}}},i.prototype.deregisterRootHandlers=function(){var t,e;try{for(var a=g(x),r=a.next();!r.done;r=a.next()){var n=r.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(d){t={error:d}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=g(U),r=a.next();!r.done;r=a.next()){var n=r.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(d){t={error:d}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,e=i.strings,a=Object.keys(e);a.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[r],null)})},i.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var r=this.previousActivationEvent,n=r&&t!==void 0&&r.type!==t.type;if(!n){a.isActivated=!0,a.isProgrammatic=t===void 0,a.activationEvent=t,a.wasActivatedByPointer=a.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var d=t!==void 0&&R.length>0&&R.some(function(u){return e.adapter.containsEventTarget(u)});if(d){this.resetActivationState();return}t!==void 0&&(R.push(t.target),this.registerDeactivationHandlers(t)),a.wasElementMadeActive=this.checkElementMadeActive(t),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){R=[],!a.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(a.wasElementMadeActive=e.checkElementMadeActive(t),a.wasElementMadeActive&&e.animateActivation()),a.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,e=i.strings,a=e.VAR_FG_TRANSLATE_START,r=e.VAR_FG_TRANSLATE_END,n=i.cssClasses,d=n.FG_DEACTIVATION,u=n.FG_ACTIVATION,v=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",c="";if(!this.adapter.isUnbounded()){var m=this.getFgTranslationCoordinates(),h=m.startPoint,s=m.endPoint;f=h.x+"px, "+h.y+"px",c=s.x+"px, "+s.y+"px"}this.adapter.updateCssVariable(a,f),this.adapter.updateCssVariable(r,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(d),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},v)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,a=t.wasActivatedByPointer,r;a?r=W(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var n={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:n}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,a=this.activationState,r=a.hasDeactivationUXRun,n=a.isActivated,d=r||!n;d&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},L.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var a=b({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(a),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,a=t.wasElementMadeActive;(e||a)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),a=function(){var n=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return n+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:a();var r=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,e=t.VAR_FG_SIZE,a=t.VAR_LEFT,r=t.VAR_TOP,n=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(n,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},i}(k);const{applyPassive:w}=O,{matches:_}=z;function Q(o,{ripple:i=!0,surface:t=!1,unbounded:e=!1,disabled:a=!1,color:r,active:n,rippleElement:d,eventTarget:u,activeTarget:v,addClass:f=s=>o.classList.add(s),removeClass:c=s=>o.classList.remove(s),addStyle:m=(s,y)=>o.style.setProperty(s,y),initPromise:h=Promise.resolve()}={}){let s,y=B("SMUI:addLayoutListener"),S,F=n,C=u,D=v;function H(){t?(f("mdc-ripple-surface"),r==="primary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):r==="secondary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),s&&F!==n&&(F=n,n?s.activate():n===!1&&s.deactivate()),i&&!s?(s=new Z({addClass:f,browserSupportsCssVars:()=>P(window),computeBoundingRect:()=>(d||o).getBoundingClientRect(),containsEventTarget:l=>o.contains(l),deregisterDocumentInteractionHandler:(l,p)=>document.documentElement.removeEventListener(l,p,w()),deregisterInteractionHandler:(l,p)=>(u||o).removeEventListener(l,p,w()),deregisterResizeHandler:l=>window.removeEventListener("resize",l),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>n??_(v||o,":active"),isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!e,registerDocumentInteractionHandler:(l,p)=>document.documentElement.addEventListener(l,p,w()),registerInteractionHandler:(l,p)=>(u||o).addEventListener(l,p,w()),registerResizeHandler:l=>window.addEventListener("resize",l),removeClass:c,updateCssVariable:m}),h.then(()=>{s&&(s.init(),s.setUnbounded(e))})):s&&!i&&h.then(()=>{s&&(s.destroy(),s=void 0)}),s&&(C!==u||D!==v)&&(C=u,D=v,s.destroy(),requestAnimationFrame(()=>{s&&(s.init(),s.setUnbounded(e))})),!i&&e&&f("mdc-ripple-upgraded--unbounded")}H(),y&&(S=y(M));function M(){s&&s.layout()}return{update(l){({ripple:i,surface:t,unbounded:e,disabled:a,color:r,active:n,rippleElement:d,eventTarget:u,activeTarget:v,addClass:f,removeClass:c,addStyle:m,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>o.classList.add(p),removeClass:p=>o.classList.remove(p),addStyle:(p,G)=>o.style.setProperty(p,G),initPromise:Promise.resolve()},l)),H()},destroy(){s&&(s.destroy(),s=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),S&&S()}}}export{Q as R,O as e};