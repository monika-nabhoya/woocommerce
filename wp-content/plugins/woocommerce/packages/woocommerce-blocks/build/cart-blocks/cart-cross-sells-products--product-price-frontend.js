(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{113:function(e,t,r){"use strict";var c=r(0),n=r(147),a=r(4),l=r.n(a);r(222);const o=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=({className:e,value:t,currency:r,onValueChange:a,displayType:i="text",...s})=>{var u;const p="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(p))return null;const m=p/10**r.minorUnit;if(!Number.isFinite(m))return null;const d=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),b=null!==(u=s.decimalScale)&&void 0!==u?u:null==r?void 0:r.minorUnit,v={...s,...o(r),decimalScale:b,value:void 0,currency:void 0,onValueChange:void 0},y=a?e=>{const t=+e.value*10**r.minorUnit;a(t)}:()=>{};return Object(c.createElement)(n.a,{className:d,displayType:i,...v,value:m,onValueChange:y})}},222:function(e,t){},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var c=function(){return c=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};Object.create,Object.create},287:function(e,t,r){"use strict";function c(e){return e.toLowerCase()}r.d(t,"a",(function(){return l}));var n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function l(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,l=void 0===r?n:r,i=t.stripRegexp,s=void 0===i?a:i,u=t.transform,p=void 0===u?c:u,m=t.delimiter,d=void 0===m?" ":m,b=o(o(e,l,"$1\0$2"),s,"\0"),v=0,y=b.length;"\0"===b.charAt(v);)v++;for(;"\0"===b.charAt(y-1);)y--;return b.slice(v,y).split("\0").map(p).join(d)}function o(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},290:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(286),n=r(287);function a(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(n.a)(e,Object(c.a)({delimiter:"."},t))}(e,Object(c.a)({delimiter:"-"},t))}},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var c=r(4),n=r.n(c),a=r(20),l=r(29),o=r(290),i=r(132);function s(e={}){const t={};return Object(i.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function u(e,t){return e&&t?`has-${Object(o.a)(t)}-${e}`:""}const p=e=>{const t=(e=>{const t=Object(a.a)(e)?e:{style:{}};let r=t.style;return Object(l.a)(r)&&(r=JSON.parse(r)||{}),Object(a.a)(r)||(r={}),{...t,style:r}})(e),r=function(e){var t,r,c,l,o,i,p;const{backgroundColor:m,textColor:d,gradient:b,style:v}=e,y=u("background-color",m),f=u("color",d),g=function(e){if(e)return`has-${e}-gradient-background`}(b),O=g||(null==v||null===(t=v.color)||void 0===t?void 0:t.gradient);return{className:n()(f,g,{[y]:!O&&!!y,"has-text-color":d||(null==v||null===(r=v.color)||void 0===r?void 0:r.text),"has-background":m||(null==v||null===(c=v.color)||void 0===c?void 0:c.background)||b||(null==v||null===(l=v.color)||void 0===l?void 0:l.gradient),"has-link-color":Object(a.a)(null==v||null===(o=v.elements)||void 0===o?void 0:o.link)?null==v||null===(i=v.elements)||void 0===i||null===(p=i.link)||void 0===p?void 0:p.color:void 0}),style:s({color:(null==v?void 0:v.color)||{}})}}(t),c=function(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:c}=e,a=r?u("border-color",r):"";return n()({"has-border-color":!!r||!(null==c||null===(t=c.border)||void 0===t||!t.color),[a]:!!a})}(e),style:s({border:r})}}(t),o=function(e){var t;return{className:void 0,style:s({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),i=(e=>{const t=Object(a.a)(e.style.typography)?e.style.typography:{},r=Object(l.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:n()(i.className,r.className,c.className,o.className),style:{...i.style,...r.style,...c.style,...o.style}}}},340:function(e,t,r){"use strict";var c=r(0),n=r(1),a=r(113),l=r(4),o=r.n(l),i=r(39);r(341);const s=({currency:e,maxPrice:t,minPrice:r,priceClassName:l,priceStyle:s={}})=>Object(c.createElement)(c.Fragment,null,Object(c.createElement)("span",{className:"screen-reader-text"},Object(n.sprintf)(/* translators: %1$s min price, %2$s max price */
Object(n.__)("Price between %1$s and %2$s","woocommerce"),Object(i.formatPrice)(r),Object(i.formatPrice)(t))),Object(c.createElement)("span",{"aria-hidden":!0},Object(c.createElement)(a.a,{className:o()("wc-block-components-product-price__value",l),currency:e,value:r,style:s})," — ",Object(c.createElement)(a.a,{className:o()("wc-block-components-product-price__value",l),currency:e,value:t,style:s}))),u=({currency:e,regularPriceClassName:t,regularPriceStyle:r,regularPrice:l,priceClassName:i,priceStyle:s,price:u})=>Object(c.createElement)(c.Fragment,null,Object(c.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Previous price:","woocommerce")),Object(c.createElement)(a.a,{currency:e,renderText:e=>Object(c.createElement)("del",{className:o()("wc-block-components-product-price__regular",t),style:r},e),value:l}),Object(c.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:","woocommerce")),Object(c.createElement)(a.a,{currency:e,renderText:e=>Object(c.createElement)("ins",{className:o()("wc-block-components-product-price__value","is-discounted",i),style:s},e),value:u}));t.a=({align:e,className:t,currency:r,format:n="<price/>",maxPrice:l,minPrice:i,price:p,priceClassName:m,priceStyle:d,regularPrice:b,regularPriceClassName:v,regularPriceStyle:y,style:f})=>{const g=o()(t,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});n.includes("<price/>")||(n="<price/>",console.error("Price formats need to include the `<price/>` tag."));const O=b&&p!==b;let j=Object(c.createElement)("span",{className:o()("wc-block-components-product-price__value",m)});return O?j=Object(c.createElement)(u,{currency:r,price:p,priceClassName:m,priceStyle:d,regularPrice:b,regularPriceClassName:v,regularPriceStyle:y}):void 0!==i&&void 0!==l?j=Object(c.createElement)(s,{currency:r,maxPrice:l,minPrice:i,priceClassName:m,priceStyle:d}):p&&(j=Object(c.createElement)(a.a,{className:o()("wc-block-components-product-price__value",m),currency:r,value:p,style:d})),Object(c.createElement)("span",{className:g,style:f},Object(c.createInterpolateElement)(n,{price:j}))}},341:function(e,t){},425:function(e,t,r){"use strict";r.r(t),r.d(t,"Block",(function(){return p}));var c=r(0),n=r(4),a=r.n(n),l=r(340),o=r(39),i=r(60),s=r(291),u=r(145);const p=e=>{var t,r;const{className:n,textAlign:u,isDescendentOfSingleProductTemplate:p}=e,m=Object(s.a)(e),{parentName:d,parentClassName:b}=Object(i.useInnerBlockLayoutContext)(),{product:v}=Object(i.useProductDataContext)(),y="woocommerce/all-products"===d,f=a()("wc-block-components-product-price",n,m.className,{[`${b}__product-price`]:b});if(!v.id&&!p){const e=Object(c.createElement)(l.a,{align:u,className:f});return y?Object(c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const g=v.prices,O=p?Object(o.getCurrencyFromPriceResponse)():Object(o.getCurrencyFromPriceResponse)(g),j="5000",N=g.price!==g.regular_price,_=a()({[`${b}__product-price__value`]:b,[`${b}__product-price__value--on-sale`]:N}),P=Object(c.createElement)(l.a,{align:u,className:f,style:m.style,regularPriceStyle:m.style,priceStyle:m.style,priceClassName:_,currency:O,price:p?j:g.price,minPrice:null==g||null===(t=g.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==g||null===(r=g.price_range)||void 0===r?void 0:r.max_amount,regularPrice:p?j:g.regular_price,regularPriceClassName:a()({[`${b}__product-price__regular`]:b})});return y?Object(c.createElement)("div",{className:"wp-block-woocommerce-product-price"},P):P};t.default=e=>e.isDescendentOfSingleProductTemplate?Object(c.createElement)(p,{...e}):Object(u.withProductDataContext)(p)(e)}}]);