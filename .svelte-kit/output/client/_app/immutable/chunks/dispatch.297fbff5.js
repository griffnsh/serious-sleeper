/**
 * @license
 * Copyright 2018 Google Inc.
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
 */function i(t,r){if(t.closest)return t.closest(r);for(var e=t;e;){if(c(e,r))return e;e=e.parentElement}return null}function c(t,r){var e=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return e.call(t,r)}function a(t){var r=t;if(r.offsetParent!==null)return r.scrollWidth;var e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var s=e.scrollWidth;return document.documentElement.removeChild(e),s}const u=Object.freeze(Object.defineProperty({__proto__:null,closest:i,estimateScrollWidth:a,matches:c},Symbol.toStringTag,{value:"Module"}));function d(t,r,e,s={bubbles:!0},l=!1){if(typeof Event<"u"&&t){const o=new CustomEvent(r,Object.assign(Object.assign({},s),{detail:e}));if(t==null||t.dispatchEvent(o),l&&r.startsWith("SMUI")){const n=new CustomEvent(r.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},s),{detail:e}));t==null||t.dispatchEvent(n),n.defaultPrevented&&o.preventDefault()}return o}}export{d,u as p};
