(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.hM(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.hN(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dS(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={dA:function dA(){},
dR:function(a,b,c){if(a==null)throw H.h(new H.aZ(b,c.k("aZ<0>")))
return a},
fC:function(a,b,c,d){P.eg(b,"start")
return new H.b3(a,b,c,d.k("b3<0>"))},
fn:function(){return new P.b1("Too few elements")},
bE:function bE(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.$ti=b},
aN:function aN(){},
aS:function aS(){},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(){},
eS:function(a){var t,s=H.eR(a)
if(s!=null)return s
t="minified:"+a
return t},
ip:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.E.b(a)},
j:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aJ(a)
if(typeof t!="string")throw H.h(H.eH(a))
return t},
b_:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cz:function(a){return H.fq(a)},
fq:function(a){var t,s,r
if(a instanceof P.o)return H.J(H.Z(a),null)
if(J.bo(a)===C.D||u.U.b(a)){t=C.o(a)
if(H.ef(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.ef(r))return r}}return H.J(H.Z(a),null)},
ef:function(a){var t=a!=="Object"&&a!==""
return t},
H:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fx:function(a){return a.b?H.H(a).getUTCFullYear()+0:H.H(a).getFullYear()+0},
fv:function(a){return a.b?H.H(a).getUTCMonth()+1:H.H(a).getMonth()+1},
fr:function(a){return a.b?H.H(a).getUTCDate()+0:H.H(a).getDate()+0},
fs:function(a){return a.b?H.H(a).getUTCHours()+0:H.H(a).getHours()+0},
fu:function(a){return a.b?H.H(a).getUTCMinutes()+0:H.H(a).getMinutes()+0},
fw:function(a){return a.b?H.H(a).getUTCSeconds()+0:H.H(a).getSeconds()+0},
ft:function(a){return a.b?H.H(a).getUTCMilliseconds()+0:H.H(a).getMilliseconds()+0},
dm:function(a){throw H.h(H.eH(a))},
k:function(a,b){if(a==null)J.aI(a)
throw H.h(H.bn(a,b))},
bn:function(a,b){var t,s,r="index",q=null
if(!H.dN(b))return new P.Q(!0,b,r,q)
t=H.X(J.aI(a))
if(!(b<0)){if(typeof t!=="number")return H.dm(t)
s=b>=t}else s=!0
if(s)return P.e6(b,a,r,q,t)
return new P.av(q,q,!0,b,r,"Value not in range")},
eH:function(a){return new P.Q(!0,a,null,null)},
h:function(a){var t,s
if(a==null)a=new P.bI()
t=new Error()
t.dartException=a
s=H.hO
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
hO:function(){return J.aJ(this.dartException)},
aH:function(a){throw H.h(a)},
eQ:function(a){throw H.h(P.al(a))},
W:function(a){var t,s,r,q,p,o
a=H.hK(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.aG([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cK:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
el:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ee:function(a,b){return new H.bH(a,b==null?null:b.method)},
dB:function(a,b){var t=b==null,s=t?null:b.method
return new H.bD(a,s,t?null:b.receiver)},
P:function(a){if(a==null)return new H.cv(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.ah(a,a.dartException)
return H.hp(a)},
ah:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hp:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.a.aD(s,16)&8191)===10)switch(r){case 438:return H.ah(a,H.dB(H.j(t)+" (Error "+r+")",f))
case 445:case 5007:return H.ah(a,H.ee(H.j(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.eU()
p=$.eV()
o=$.eW()
n=$.eX()
m=$.f_()
l=$.f0()
k=$.eZ()
$.eY()
j=$.f2()
i=$.f1()
h=q.F(t)
if(h!=null)return H.ah(a,H.dB(H.ca(t),h))
else{h=p.F(t)
if(h!=null){h.method="call"
return H.ah(a,H.dB(H.ca(t),h))}else{h=o.F(t)
if(h==null){h=n.F(t)
if(h==null){h=m.F(t)
if(h==null){h=l.F(t)
if(h==null){h=k.F(t)
if(h==null){h=n.F(t)
if(h==null){h=j.F(t)
if(h==null){h=i.F(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.ah(a,H.ee(H.ca(t),h))}}return H.ah(a,new H.bW(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b0()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.ah(a,new P.Q(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b0()
return a},
ag:function(a){var t
if(a==null)return new H.bd(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bd(a)},
hw:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.t(0,a[t],a[s])}return b},
hD:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.cT("Unsupported number of arguments for wrapped closure"))},
Y:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hD)
a.$identity=t
return t},
fg:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bO().constructor.prototype):Object.create(new H.ak(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.S
if(typeof s!=="number")return s.A()
$.S=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.e5(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.fc(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e5(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
fc:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eM,a)
if(typeof a=="string"){if(b)throw H.h("Cannot compute signature for static tearoff.")
t=c?H.fa:H.f9
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.h("Error in functionType of tearoff")},
fd:function(a,b,c,d){var t=H.e3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
e5:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.ff(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fd(s,!q,t,b)
if(s===0){q=$.S
if(typeof q!=="number")return q.A()
$.S=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.j(H.dy())+";return "+o+"."+H.j(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.S
if(typeof q!=="number")return q.A()
$.S=q+1
n+=q
return new Function("return function("+n+"){return this."+H.j(H.dy())+"."+H.j(t)+"("+n+");}")()},
fe:function(a,b,c,d){var t=H.e3,s=H.fb
switch(b?-1:a){case 0:throw H.h(new H.bL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ff:function(a,b){var t,s,r,q,p,o,n=H.dy(),m=$.e1
if(m==null)m=$.e1=H.e0("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fe(s,!q,t,b)
if(s===1){q="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+m+");"
p=$.S
if(typeof p!=="number")return p.A()
$.S=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+m+", "+o+");"
p=$.S
if(typeof p!=="number")return p.A()
$.S=p+1
return new Function(q+p+"}")()},
dS:function(a,b,c,d,e,f,g){return H.fg(a,b,c,d,!!e,!!f,g)},
f9:function(a,b){return H.c9(v.typeUniverse,H.Z(a.a),b)},
fa:function(a,b){return H.c9(v.typeUniverse,H.Z(a.c),b)},
e3:function(a){return a.a},
fb:function(a){return a.c},
dy:function(){var t=$.e2
return t==null?$.e2=H.e0("self"):t},
e0:function(a){var t,s,r,q=new H.ak("self","target","receiver","name"),p=J.e9(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.h(P.dY("Field name "+a+" not found."))},
dQ:function(a){if(a==null)H.hq("boolean expression must not be null")
return a},
hq:function(a){throw H.h(new H.bZ(a))},
hM:function(a){throw H.h(new P.bu(a))},
hz:function(a){return v.getIsolateTag(a)},
hN:function(a){return H.aH(new H.bE(a))},
io:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hF:function(a){var t,s,r,q,p,o=H.ca($.eL.$1(a)),n=$.di[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dr[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.h0($.eG.$2(a,o))
if(r!=null){n=$.di[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dr[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dt(t)
$.di[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.dr[o]=t
return t}if(q==="-"){p=H.dt(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eO(a,t)
if(q==="*")throw H.h(P.dF(o))
if(v.leafTags[o]===true){p=H.dt(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eO(a,t)},
eO:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dU(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dt:function(a){return J.dU(a,!1,null,!!a.$iar)},
hH:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dt(t)
else return J.dU(t,c,null,null)},
hB:function(){if(!0===$.dT)return
$.dT=!0
H.hC()},
hC:function(){var t,s,r,q,p,o,n,m
$.di=Object.create(null)
$.dr=Object.create(null)
H.hA()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eP.$1(p)
if(o!=null){n=H.hH(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hA:function(){var t,s,r,q,p,o,n=C.u()
n=H.aF(C.v,H.aF(C.w,H.aF(C.p,H.aF(C.p,H.aF(C.x,H.aF(C.y,H.aF(C.z(C.o),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eL=new H.dn(q)
$.eG=new H.dp(p)
$.eP=new H.dq(o)},
aF:function(a,b){return a(b)||b},
hK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bH:function bH(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
cv:function cv(a){this.a=a},
bd:function bd(a){this.a=a
this.b=null},
a9:function a9(){},
bR:function bR(){},
bO:function bO(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a){this.a=a},
bZ:function bZ(a){this.a=a},
ac:function ac(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bn(b,a))},
bF:function bF(){},
aX:function aX(){},
au:function au(){},
aV:function aV(){},
aW:function aW(){},
aU:function aU(){},
bG:function bG(){},
b9:function b9(){},
ba:function ba(){},
bb:function bb(){},
bc:function bc(){},
fB:function(a,b){var t=b.c
return t==null?b.c=H.dK(a,b.z,!0):t},
eh:function(a,b){var t=b.c
return t==null?b.c=H.bf(a,"aa",[b.z]):t},
ei:function(a){var t=a.y
if(t===6||t===7||t===8)return H.ei(a.z)
return t===11||t===12},
fA:function(a){return a.cy},
eK:function(a){return H.db(v.typeUniverse,a,!1)},
a7:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a7(a,t,c,a0)
if(s===t)return b
return H.eu(a,s,!0)
case 7:t=b.z
s=H.a7(a,t,c,a0)
if(s===t)return b
return H.dK(a,s,!0)
case 8:t=b.z
s=H.a7(a,t,c,a0)
if(s===t)return b
return H.et(a,s,!0)
case 9:r=b.Q
q=H.bm(a,r,c,a0)
if(q===r)return b
return H.bf(a,b.z,q)
case 10:p=b.z
o=H.a7(a,p,c,a0)
n=b.Q
m=H.bm(a,n,c,a0)
if(o===p&&m===n)return b
return H.dI(a,o,m)
case 11:l=b.z
k=H.a7(a,l,c,a0)
j=b.Q
i=H.hm(a,j,c,a0)
if(k===l&&i===j)return b
return H.es(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bm(a,h,c,a0)
p=b.z
o=H.a7(a,p,c,a0)
if(g===h&&o===p)return b
return H.dJ(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.h(P.ce("Attempted to substitute unexpected RTI kind "+d))}},
bm:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a7(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hn:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a7(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hm:function(a,b,c,d){var t,s=b.a,r=H.bm(a,s,c,d),q=b.b,p=H.bm(a,q,c,d),o=b.c,n=H.hn(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.c4()
t.a=r
t.b=p
t.c=n
return t},
aG:function(a,b){a[v.arrayRti]=b
return a},
hu:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eM(t)
return a.$S()}return null},
eN:function(a,b){var t
if(H.ei(b))if(a instanceof H.a9){t=H.hu(a)
if(t!=null)return t}return H.Z(a)},
Z:function(a){var t
if(a instanceof P.o){t=a.$ti
return t!=null?t:H.dL(a)}if(Array.isArray(a))return H.bi(a)
return H.dL(J.bo(a))},
bi:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aC:function(a){var t=a.$ti
return t!=null?t:H.dL(a)},
dL:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.h8(a,t)},
h8:function(a,b){var t=a instanceof H.a9?a.__proto__.__proto__.constructor:b,s=H.fX(v.typeUniverse,t.name)
b.$ccache=s
return s},
eM:function(a){var t,s,r
H.X(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.db(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hv:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.c7(a)
r=H.db(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.c7(r):q},
h7:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bj(r,a,H.hb)
if(!H.a_(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bj(r,a,H.he)
q=r.y
t=q===6?r.z:r
if(t===u.p)s=H.dN
else if(t===u.i||t===u.q)s=H.ha
else if(t===u.R)s=H.hc
else s=t===u.y?H.de:null
if(s!=null)return H.bj(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hE)){r.r="$i"+q
return H.bj(r,a,H.hd)}}else if(q===7)return H.bj(r,a,H.h5)
return H.bj(r,a,H.h3)},
bj:function(a,b,c){a.b=c
return a.b(b)},
h6:function(a){var t,s,r=this
if(!H.a_(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.h1
else if(r===u.K)s=H.h_
else s=H.h4
r.a=s
return r.a(a)},
dP:function(a){var t,s=a.y
if(!H.a_(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.dP(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
h3:function(a){var t=this
if(a==null)return H.dP(t)
return H.x(v.typeUniverse,H.eN(a,t),null,t,null)},
h5:function(a){if(a==null)return!0
return this.z.b(a)},
hd:function(a){var t,s=this
if(a==null)return H.dP(s)
t=s.r
if(a instanceof P.o)return!!a[t]
return!!J.bo(a)[t]},
im:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
h4:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
ez:function(a,b){throw H.h(H.fN(H.en(a,H.eN(a,b),H.J(b,null))))},
en:function(a,b,c){var t=P.bx(a),s=H.J(b==null?H.Z(a):b,null)
return t+": type '"+H.j(s)+"' is not a subtype of type '"+H.j(c)+"'"},
fN:function(a){return new H.be("TypeError: "+a)},
F:function(a,b){return new H.be("TypeError: "+H.en(a,null,b))},
hb:function(a){return a!=null},
h_:function(a){return a},
he:function(a){return!0},
h1:function(a){return a},
de:function(a){return!0===a||!1===a},
ic:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.h(H.F(a,"bool"))},
ex:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.F(a,"bool"))},
id:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.F(a,"bool?"))},
ie:function(a){if(typeof a=="number")return a
throw H.h(H.F(a,"double"))},
fY:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.F(a,"double"))},
ig:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.F(a,"double?"))},
dN:function(a){return typeof a=="number"&&Math.floor(a)===a},
ih:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.h(H.F(a,"int"))},
X:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.F(a,"int"))},
ii:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.F(a,"int?"))},
ha:function(a){return typeof a=="number"},
ij:function(a){if(typeof a=="number")return a
throw H.h(H.F(a,"num"))},
fZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.F(a,"num"))},
ik:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.F(a,"num?"))},
hc:function(a){return typeof a=="string"},
il:function(a){if(typeof a=="string")return a
throw H.h(H.F(a,"String"))},
ca:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.F(a,"String"))},
h0:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.F(a,"String?"))},
hj:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.i.A(s,H.J(a[r],b))
return t},
eA:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.aG([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.b.B(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.k(a5,j)
m=C.i.A(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.i.A(" extends ",H.J(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.J(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.i.A(a2,H.J(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.i.A(a2,H.J(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.dW(H.J(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.j(a0)},
J:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.J(a.z,b)
return t}if(m===7){s=a.z
t=H.J(s,b)
r=s.y
return J.dW(r===11||r===12?C.i.A("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.j(H.J(a.z,b))+">"
if(m===9){q=H.ho(a.z)
p=a.Q
return p.length!==0?q+("<"+H.hj(p,b)+">"):q}if(m===11)return H.eA(a,b,null)
if(m===12)return H.eA(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.k(b,o)
return b[o]}return"?"},
ho:function(a){var t,s=H.eR(a)
if(s!=null)return s
t="minified:"+a
return t},
ev:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
fX:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.db(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bg(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bf(a,b,r)
o[b]=p
return p}else return n},
fV:function(a,b){return H.ew(a.tR,b)},
fU:function(a,b){return H.ew(a.eT,b)},
db:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.er(H.ep(a,null,b,c))
s.set(b,t)
return t},
c9:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.er(H.ep(a,b,c,!0))
r.set(c,s)
return s},
fW:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dI(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a6:function(a,b){b.a=H.h6
b.b=H.h7
return b},
bg:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.L(null,null)
t.y=b
t.cy=c
s=H.a6(a,t)
a.eC.set(c,s)
return s},
eu:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fS(a,b,s,c)
a.eC.set(s,t)
return t},
fS:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a_(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.L(null,null)
r.y=6
r.z=b
r.cy=c
return H.a6(a,r)},
dK:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fR(a,b,s,c)
a.eC.set(s,t)
return t},
fR:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.a_(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ds(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ds(r.z))return r
else return H.fB(a,b)}}q=new H.L(null,null)
q.y=7
q.z=b
q.cy=c
return H.a6(a,q)},
et:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fP(a,b,s,c)
a.eC.set(s,t)
return t},
fP:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a_(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bf(a,"aa",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.L(null,null)
r.y=8
r.z=b
r.cy=c
return H.a6(a,r)},
fT:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.L(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a6(a,t)
a.eC.set(r,s)
return s},
c8:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fO:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bf:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.c8(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.L(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a6(a,s)
a.eC.set(q,r)
return r},
dI:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.c8(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.L(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a6(a,p)
a.eC.set(r,o)
return o},
es:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.c8(n)
if(k>0){t=m>0?",":""
s=H.c8(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fO(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.L(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a6(a,p)
a.eC.set(r,s)
return s},
dJ:function(a,b,c,d){var t,s=b.cy+("<"+H.c8(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fQ(a,b,c,s,d)
a.eC.set(s,t)
return t},
fQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a7(a,b,s,0)
n=H.bm(a,c,s,0)
return H.dJ(a,o,n,c!==n)}}m=new H.L(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a6(a,m)},
ep:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
er:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fI(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.eq(a,s,h,g,!1)
else if(r===46)s=H.eq(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a5(a.u,a.e,g.pop()))
break
case 94:g.push(H.fT(a.u,g.pop()))
break
case 35:g.push(H.bg(a.u,5,"#"))
break
case 64:g.push(H.bg(a.u,2,"@"))
break
case 126:g.push(H.bg(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dH(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bf(q,o,p))
else{n=H.a5(q,a.e,o)
switch(n.y){case 11:g.push(H.dJ(q,n,p,a.n))
break
default:g.push(H.dI(q,n,p))
break}}break
case 38:H.fJ(a,g)
break
case 42:m=a.u
g.push(H.eu(m,H.a5(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dK(m,H.a5(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.et(m,H.a5(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.c4()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.dH(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.es(q,H.a5(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dH(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fL(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a5(a.u,a.e,i)},
fI:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
eq:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ev(t,p.z)[q]
if(o==null)H.aH('No "'+q+'" in "'+H.fA(p)+'"')
d.push(H.c9(t,p,o))}else d.push(q)
return n},
fJ:function(a,b){var t=b.pop()
if(0===t){b.push(H.bg(a.u,1,"0&"))
return}if(1===t){b.push(H.bg(a.u,4,"1&"))
return}throw H.h(P.ce("Unexpected extended operation "+H.j(t)))},
a5:function(a,b,c){if(typeof c=="string")return H.bf(a,c,a.sEA)
else if(typeof c=="number")return H.fK(a,b,c)
else return c},
dH:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a5(a,b,c[t])},
fL:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a5(a,b,c[t])},
fK:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.h(P.ce("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.h(P.ce("Bad index "+c+" for "+b.j(0)))},
x:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.a_(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.a_(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.x(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.x(a,b.z,c,d,e)
if(q===6){t=d.z
return H.x(a,b,c,t,e)}if(s===8){if(!H.x(a,b.z,c,d,e))return!1
return H.x(a,H.eh(a,b),c,d,e)}if(s===7){t=H.x(a,b.z,c,d,e)
return t}if(q===8){if(H.x(a,b,c,d.z,e))return!0
return H.x(a,b,c,H.eh(a,d),e)}if(q===7){t=H.x(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.x(a,l,c,k,e)||!H.x(a,k,e,l,c))return!1}return H.eB(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eB(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.h9(a,b,c,d,e)}return!1},
eB:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.x(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.x(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.x(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.x(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.x(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
h9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.x(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ev(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.x(a,H.c9(a,b,m[q]),c,s[q],e))return!1
return!0},
ds:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.a_(a))if(s!==7)if(!(s===6&&H.ds(a.z)))t=s===8&&H.ds(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hE:function(a){var t
if(!H.a_(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
a_:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
ew:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
c4:function c4(){this.c=this.b=this.a=null},
c7:function c7(a){this.a=a},
c2:function c2(){},
be:function be(a){this.a=a},
eR:function(a){return v.mangledGlobalNames[a]},
hI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
dU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cd:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.dT==null){H.hB()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.h(P.dF("Return interceptor for "+H.j(t(a,p))))}r=a.constructor
q=r==null?null:r[J.ea()]
if(q!=null)return q
q=H.hF(a)
if(q!=null)return q
if(typeof a=="function")return C.F
t=Object.getPrototypeOf(a)
if(t==null)return C.r
if(t===Object.prototype)return C.r
if(typeof r=="function"){Object.defineProperty(r,J.ea(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
ea:function(){var t=$.eo
return t==null?$.eo=v.getIsolateTag("_$dart_js"):t},
e8:function(a,b){if(a<0||a>4294967295)throw H.h(P.dD(a,0,4294967295,"length",null))
return J.fo(new Array(a),b)},
fo:function(a,b){return J.e9(H.aG(a,b.k("D<0>")),b)},
e9:function(a,b){a.fixed$length=Array
return a},
bo:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aR.prototype
return J.aQ.prototype}if(typeof a=="string")return J.ab.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bC.prototype
if(a.constructor==Array)return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.o)return a
return J.cd(a)},
hx:function(a){if(typeof a=="number")return J.aq.prototype
if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.o)return a
return J.cd(a)},
dj:function(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.o)return a
return J.cd(a)},
cc:function(a){if(a==null)return a
if(a.constructor==Array)return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.o)return a
return J.cd(a)},
hy:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.o)return a
return J.cd(a)},
dW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hx(a).A(a,b)},
f3:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bo(a).G(a,b)},
f4:function(a,b,c){return J.cc(a).t(a,b,c)},
f5:function(a,b,c,d){return J.hy(a).b3(a,b,c,d)},
f6:function(a,b){return J.cc(a).T(a,b)},
f7:function(a,b){return J.cc(a).a0(a,b)},
dX:function(a){return J.bo(a).gv(a)},
f8:function(a){return J.cc(a).ga1(a)},
aI:function(a){return J.dj(a).gm(a)},
aJ:function(a){return J.bo(a).j(a)},
z:function z(){},
bC:function bC(){},
ap:function ap(){},
a3:function a3(){},
bJ:function bJ(){},
b5:function b5(){},
M:function M(){},
D:function D(a){this.$ti=a},
cq:function cq(a){this.$ti=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
aR:function aR(){},
aQ:function aQ(){},
ab:function ab(){}},P={
fE:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.Y(new P.cP(r),1)).observe(t,{childList:true})
return new P.cO(r,t,s)}else if(self.setImmediate!=null)return P.hs()
return P.ht()},
fF:function(a){self.scheduleImmediate(H.Y(new P.cQ(u.M.a(a)),0))},
fG:function(a){self.setImmediate(H.Y(new P.cR(u.M.a(a)),0))},
fH:function(a){u.M.a(a)
P.fM(0,a)},
fM:function(a,b){var t=new P.d9()
t.b2(a,b)
return t},
cf:function(a,b){var t=H.dR(a,"error",u.K)
return new P.aL(t,b==null?P.e_(a):b)},
e_:function(a){var t
if(u.C.b(a)){t=a.gac()
if(t!=null)return t}return C.A},
dG:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.a5()
b.a=a.a
b.c=a.c
P.aB(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.aC(r)}},
aB:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.df(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aB(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.df(d,d,l.b,k.a,k.b)
return}g=$.t
if(g!==h)$.t=h
else g=d
b=b.c
if((b&15)===8)new P.d3(q,c,p).$0()
else if(j){if((b&1)!==0)new P.d2(q,k).$0()}else if((b&2)!==0)new P.d1(c,q).$0()
if(g!=null)$.t=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.k("aa<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.B)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.a6(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dG(b,f)
else f.az(b)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.a6(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
hh:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.h(P.dZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hg:function(){var t,s
for(t=$.aD;t!=null;t=$.aD){$.bl=null
s=t.b
$.aD=s
if(s==null)$.bk=null
t.a.$0()}},
hl:function(){$.dM=!0
try{P.hg()}finally{$.bl=null
$.dM=!1
if($.aD!=null)$.dV().$1(P.eI())}},
eE:function(a){var t=new P.c_(a),s=$.bk
if(s==null){$.aD=$.bk=t
if(!$.dM)$.dV().$1(P.eI())}else $.bk=s.b=t},
hk:function(a){var t,s,r,q=$.aD
if(q==null){P.eE(a)
$.bl=$.bk
return}t=new P.c_(a)
s=$.bl
if(s==null){t.b=q
$.aD=$.bl=t}else{r=s.b
t.b=r
$.bl=s.b=t
if(r==null)$.bk=t}},
hL:function(a){var t=null,s=$.t
if(C.e===s){P.aE(t,t,C.e,a)
return}P.aE(t,t,s,u.M.a(s.aE(a)))},
df:function(a,b,c,d,e){P.hk(new P.dg(d,e))},
eC:function(a,b,c,d,e){var t,s=$.t
if(s===c)return d.$0()
$.t=c
t=s
try{s=d.$0()
return s}finally{$.t=t}},
eD:function(a,b,c,d,e,f,g){var t,s=$.t
if(s===c)return d.$1(e)
$.t=c
t=s
try{s=d.$1(e)
return s}finally{$.t=t}},
hi:function(a,b,c,d,e,f,g,h,i){var t,s=$.t
if(s===c)return d.$2(e,f)
$.t=c
t=s
try{s=d.$2(e,f)
return s}finally{$.t=t}},
aE:function(a,b,c,d){var t
u.M.a(d)
t=C.e!==c
if(t)d=!(!t||!1)?c.aE(d):c.bi(d,u.H)
P.eE(d)},
cP:function cP(a){this.a=a},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
d9:function d9(){},
da:function da(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
c0:function c0(){},
ae:function ae(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cU:function cU(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.a=a},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a
this.b=null},
b2:function b2(){},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
bP:function bP(){},
bh:function bh(){},
dg:function dg(a,b){this.a=a
this.b=b},
c5:function c5(){},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function(a,b,c){return b.k("@<0>").E(c).k("eb<1,2>").a(H.hw(a,new H.ac(b.k("@<0>").E(c).k("ac<1,2>"))))},
fp:function(a,b){return new H.ac(a.k("@<0>").E(b).k("ac<1,2>"))},
fm:function(a,b,c){var t,s
if(P.dO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.aG([],u.s)
C.b.B($.K,a)
try{P.hf(a,t)}finally{if(0>=$.K.length)return H.k($.K,-1)
$.K.pop()}s=P.ek(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
e7:function(a,b,c){var t,s
if(P.dO(a))return b+"..."+c
t=new P.bQ(b)
C.b.B($.K,a)
try{s=t
s.a=P.ek(s.a,a,", ")}finally{if(0>=$.K.length)return H.k($.K,-1)
$.K.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dO:function(a){var t,s
for(t=$.K.length,s=0;s<t;++s)if(a===$.K[s])return!0
return!1},
hf:function(a,b){var t,s,r,q,p,o,n,m=a.ga1(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.H())return
t=H.j(m.gK())
C.b.B(b,t)
l+=t.length+2;++k}if(!m.H()){if(k<=5)return
if(0>=b.length)return H.k(b,-1)
s=b.pop()
if(0>=b.length)return H.k(b,-1)
r=b.pop()}else{q=m.gK();++k
if(!m.H()){if(k<=4){C.b.B(b,H.j(q))
return}s=H.j(q)
if(0>=b.length)return H.k(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gK();++k
for(;m.H();q=p,p=o){o=m.gK();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2;--k}C.b.B(b,"...")
return}}r=H.j(q)
s=H.j(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.b.B(b,n)
C.b.B(b,r)
C.b.B(b,s)},
ed:function(a){var t,s={}
if(P.dO(a))return"{...}"
t=new P.bQ("")
try{C.b.B($.K,a)
t.a+="{"
s.a=!0
a.a0(0,new P.cu(s,t))
t.a+="}"}finally{if(0>=$.K.length)return H.k($.K,-1)
$.K.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
A:function A(){},
aT:function aT(){},
cu:function cu(a,b){this.a=a
this.b=b},
at:function at(){},
fj:function(a){if(a instanceof H.a9)return a.j(0)
return"Instance of '"+H.j(H.cz(a))+"'"},
dC:function(a,b,c,d){var t,s=J.e8(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
ek:function(a,b,c){var t=J.f8(b)
if(!t.H())return a
if(c.length===0){do a+=H.j(t.gK())
while(t.H())}else{a+=H.j(t.gK())
for(;t.H();)a=a+c+H.j(t.gK())}return a},
fh:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bw:function(a){if(a>=10)return""+a
return"0"+a},
bx:function(a){if(typeof a=="number"||H.de(a)||null==a)return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fj(a)},
ce:function(a){return new P.aK(a)},
dY:function(a){return new P.Q(!1,null,null,a)},
dZ:function(a,b,c){return new P.Q(!0,a,b,c)},
fy:function(a){var t=null
return new P.av(t,t,!1,t,t,a)},
dD:function(a,b,c,d,e){return new P.av(b,c,!0,a,d,"Invalid value")},
fz:function(a,b,c){if(a>c)throw H.h(P.dD(a,0,c,"start",null))
if(a>b||b>c)throw H.h(P.dD(b,a,c,"end",null))
return b},
eg:function(a,b){return a},
e6:function(a,b,c,d,e){var t=H.X(e==null?J.aI(b):e)
return new P.bB(t,!0,a,c,"Index out of range")},
b6:function(a){return new P.bX(a)},
dF:function(a){return new P.bV(a)},
ej:function(a){return new P.b1(a)},
al:function(a){return new P.bt(a)},
du:function(a){H.hI(H.j(J.aJ(a)))},
bv:function bv(a,b){this.a=a
this.b=b},
q:function q(){},
aK:function aK(a){this.a=a},
bT:function bT(){},
bI:function bI(){},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bB:function bB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bX:function bX(a){this.a=a},
bV:function bV(a){this.a=a},
b1:function b1(a){this.a=a},
bt:function bt(a){this.a=a},
b0:function b0(){},
bu:function bu(a){this.a=a},
cT:function cT(a){this.a=a},
w:function w(){},
u:function u(){},
o:function o(){},
c6:function c6(){},
bQ:function bQ(a){this.a=a},
ey:function(a){var t
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.de(a))return a
if(u.J.b(a))return P.eJ(a)
if(u.j.b(a)){t=[]
J.f7(a,new P.dd(t))
a=t}return a},
eJ:function(a){var t={}
a.a0(0,new P.dh(t))
return t},
cL:function cL(){},
cN:function cN(a,b){this.a=a
this.b=b},
dd:function dd(a){this.a=a},
dh:function dh(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b
this.c=!1},
hJ:function(a,b){var t=new P.B($.t,b.k("B<0>")),s=new P.ae(t,b.k("ae<0>"))
a.then(H.Y(new P.dv(s,b),1),H.Y(new P.dw(s),1))
return t},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a},
d5:function d5(){},
G:function G(){},
ai:function ai(){},
aj:function aj(){},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
m:function m(){},
R:function R(){},
aM:function aM(){},
an:function an(){},
bs:function bs(){},
bK:function bK(){},
aw:function aw(){},
bS:function bS(){},
bU:function bU(){}},W={
aA:function(a,b,c,d,e){var t=W.eF(new W.cS(c),u.B),s=t!=null
if(s&&!0){u.o.a(t)
if(s)J.f5(a,b,t,!1)}return new W.c3(a,b,t,!1,e.k("c3<0>"))},
h2:function(a){var t
if(u.I.b(a))return a
t=new P.cM([],[])
t.c=!0
return t.as(a)},
eF:function(a,b){var t=$.t
if(t===C.e)return a
return t.bj(a,b)},
f:function f(){},
bp:function bp(){},
bq:function bq(){},
a8:function a8(){},
T:function T(){},
a1:function a1(){},
d:function d(){},
e:function e(){},
r:function r(){},
bz:function bz(){},
ao:function ao(){},
aO:function aO(){},
aP:function aP(){},
U:function U(){},
aY:function aY(){},
I:function I(){},
bM:function bM(){},
E:function E(){},
az:function az(){},
dz:function dz(a,b){this.a=a
this.$ti=b},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c3:function c3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cS:function cS(a){this.a=a}},A={
dk:function(a){var t,s=C.l.br(a,0,new A.dl(),u.p)
if(typeof s!=="number")return H.dm(s)
t=s+((s&67108863)<<3)&536870911
t^=t>>>11
return t+((t&16383)<<15)&536870911},
dl:function dl(){}},T={O:function O(a){this.a=a},l:function l(a){this.a=a},b:function b(a){this.a=a},a:function a(a){this.a=a}},M={
hG:function(){var t,s,r
try{s=new M.bA()
s.aV(0)
$.c=s}catch(r){t=H.P(r)
throw H.h(t)}},
C:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=a.length,s=c*1.5,r=b.a,q=c/1.2,p=0;p<t;++p){o=C.i.b8(a,p)-32
n=C.j.L(o/16)
o=C.a.l(o,16)
m=$.c.b
l=$.p()
k=new Float32Array(4)
k[3]=9
k[2]=6
k[1]=n*9
k[0]=o*6+160
o=new Float32Array(4)
o[3]=0
o[2]=0
o[1]=0
o[0]=0
o=new Float32Array(4)
o[3]=1
o[2]=1
o[1]=1
o[0]=1
o=r[0]
n=r[1]
j=r[2]
i=new Float32Array(3)
i[0]=o+p*q
i[1]=n
i[2]=j
o=new Float32Array(2)
o[0]=c
o[1]=s
n=new Float32Array(3)
n[0]=0
n[1]=0
n[2]=0
j=new Float32Array(3)
j[0]=0
j[1]=0
j[2]=0
m.u(l,new T.b(i),new T.l(o),new T.a(k),new T.b(n),new T.b(j),d)}},
fD:function(a){var t=new M.cG()
t.b1(a)
return t},
cw:function(a,b){var t,s=null
new T.b(new Float32Array(3)).i(0,0,0)
new T.l(new Float32Array(2)).q(0,0)
new T.b(new Float32Array(3)).i(0,0,0)
t=new T.b(new Float32Array(3))
t.i(0,0,0)
t=new M.ad(a,s,s,b,s,t)
t.ad(a,b,s,s,s)
return t},
ay:function(a){var t,s=null
new T.b(new Float32Array(3)).i(0,0,0)
new T.l(new Float32Array(2)).q(0,0)
new T.b(new Float32Array(3)).i(0,0,0)
t=new T.b(new Float32Array(3))
t.i(0,0,0)
t=new M.bY(a,s,s,s,s,t)
t.ad(a,s,s,s,s)
return t},
af:function(a,b){var t,s=a.a,r=s[0],q=s[2]
b=b.a
t=b[0]
if(r+q>=t)if(r<=t+b[2]){r=s[1]
s=s[3]
q=b[1]
s=r+s>=q&&r<=q+b[3]}else s=!1
else s=!1
if(s)return!0
else return!1},
dx:function(a,b){return C.a.n(C.a.l(C.c.p(1e5),b-a+1)+a)},
a4:function a4(a){var _=this
_.a=a
_.c=_.b=null
_.e=_.d=!1
_.f=null},
cD:function cD(a){this.a=a},
cC:function cC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
bA:function bA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null
_.dx=_.db=_.cy=_.ch=_.Q=_.z=_.y=0
_.dy="null"
_.go=_.fy=_.fx=_.fr=!1},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.r=!1
_.y=!0},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cA:function cA(a,b,c,d,e,f,g){var _=this
_.cx=_.Q=_.z=_.y=_.x=_.f=_.e=_.c=_.b=_.a=null
_.cy=a
_.db=b
_.dx=c
_.fy=_.fr=_.dy=null
_.id=0
_.k1=!1
_.r2=_.r1=_.k4=_.k3=0
_.ry=d
_.x1=e
_.x2=f
_.y1=0
_.y2=g
_.ab=!1},
ck:function ck(){this.a=null},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
n:function n(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(){},
cG:function cG(){this.a=null
this.c=this.b=0},
cH:function cH(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.f=_.e=0
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=100
_.ch=0
_.cx=h},
by:function by(a,b,c,d,e,f){var _=this
_.r=!1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m},
cs:function cs(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null
_.r=!0},
ad:function ad(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cy:function cy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.x=_.r=!1
_.y=0
_.Q=_.z=100
_.ch=60},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=0
_.f=c
_.r=!1
_.y=_.x=0
_.Q=_.z=!1
_.dx=_.db=_.cy=_.cx=_.ch=0
_.dy=60
_.fr=!1
_.fx=d
_.fy=0},
bY:function bY(a,b,c,d,e,f){var _=this
_.r=!0
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}}
var w=[C,H,J,P,W,A,T,M]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dA.prototype={}
J.z.prototype={
G:function(a,b){return a===b},
gv:function(a){return H.b_(a)},
j:function(a){return"Instance of '"+H.j(H.cz(a))+"'"}}
J.bC.prototype={
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$icb:1}
J.ap.prototype={
G:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$iu:1}
J.a3.prototype={
gv:function(a){return 0},
j:function(a){return String(a)}}
J.bJ.prototype={}
J.b5.prototype={}
J.M.prototype={
j:function(a){var t=a[$.eT()]
if(t==null)return this.aX(a)
return"JavaScript function for "+H.j(J.aJ(t))},
$iam:1}
J.D.prototype={
B:function(a,b){H.bi(a).c.a(b)
if(!!a.fixed$length)H.aH(P.b6("add"))
a.push(b)},
a0:function(a,b){var t,s
H.bi(a).k("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.h(P.al(a))}},
T:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
j:function(a){return P.e7(a,"[","]")},
ga1:function(a){return new J.br(a,a.length,H.bi(a).k("br<1>"))},
gv:function(a){return H.b_(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.aH(P.b6("set length"))
a.length=b},
P:function(a,b){if(b>=a.length||b<0)throw H.h(H.bn(a,b))
return a[b]},
t:function(a,b,c){H.X(b)
H.bi(a).c.a(c)
if(!!a.immutable$list)H.aH(P.b6("indexed set"))
if(!H.dN(b))throw H.h(H.bn(a,b))
if(b>=a.length||b<0)throw H.h(H.bn(a,b))
a[b]=c},
$iw:1,
$iN:1}
J.cq.prototype={}
J.br.prototype={
gK:function(){return this.d},
H:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.h(H.eQ(r))
t=s.c
if(t>=q){s.saB(null)
return!1}s.saB(r[t]);++s.c
return!0},
saB:function(a){this.d=this.$ti.k("1?").a(a)}}
J.aq.prototype={
n:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.h(P.b6(""+a+".toInt()"))},
L:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.h(P.b6(""+a+".floor()"))},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
l:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aD:function(a,b){var t
if(a>0)t=this.bg(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
bg:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia0:1}
J.aR.prototype={$iv:1}
J.aQ.prototype={}
J.ab.prototype={
b8:function(a,b){if(b>=a.length)throw H.h(H.bn(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.h(P.dZ(b,null,null))
return a+b},
j:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm:function(a){return a.length},
$iV:1}
H.bE.prototype={
j:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.aZ.prototype={
j:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hv(this.$ti.c).j(0)+"'"}}
H.aN.prototype={}
H.aS.prototype={
ga1:function(a){var t=this
return new H.as(t,t.gm(t),t.$ti.k("as<1>"))}}
H.b3.prototype={
gbb:function(){var t=J.aI(this.a)
return t},
gbh:function(){var t=J.aI(this.a),s=this.b
if(s>t)return t
return s},
gm:function(a){var t=J.aI(this.a),s=this.b
if(s>=t)return 0
return t-s},
T:function(a,b){var t=this,s=t.gbh()+b
if(b<0||s>=t.gbb())throw H.h(P.e6(b,t,"index",null,null))
return J.f6(t.a,s)},
bF:function(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.dj(o),m=n.gm(o)
q.c
t=m-p
if(t<=0){o=J.e8(0,q.$ti.c)
return o}s=P.dC(t,n.T(o,p),!1,q.$ti.c)
for(r=1;r<t;++r){C.b.t(s,r,n.T(o,p+r))
if(n.gm(o)<m)throw H.h(P.al(q))}return s}}
H.as.prototype={
gK:function(){return this.d},
H:function(){var t,s=this,r=s.a,q=J.dj(r),p=q.gm(r)
if(s.b!==p)throw H.h(P.al(r))
t=s.c
if(t>=p){s.saw(null)
return!1}s.saw(q.T(r,t));++s.c
return!0},
saw:function(a){this.d=this.$ti.k("1?").a(a)}}
H.a2.prototype={}
H.cJ.prototype={
F:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.bH.prototype={
j:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bD.prototype={
j:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.j(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.j(s.a)+")"
return r+q+"' on '"+t+"' ("+H.j(s.a)+")"}}
H.bW.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cv.prototype={
j:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bd.prototype={
j:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iax:1}
H.a9.prototype={
j:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eS(s==null?"unknown":s)+"'"},
$iam:1,
gbI:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bR.prototype={}
H.bO.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eS(t)+"'"}}
H.ak.prototype={
G:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.ak))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gv:function(a){var t,s=this.c
if(s==null)t=H.b_(this.a)
else t=typeof s!=="object"?J.dX(s):H.b_(s)
return(t^H.b_(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.j(H.cz(t))+"'")}}
H.bL.prototype={
j:function(a){return"RuntimeError: "+this.a}}
H.bZ.prototype={
j:function(a){return"Assertion failed: "+P.bx(this.a)}}
H.ac.prototype={
gm:function(a){return this.a},
t:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.aC(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.ax(t==null?n.b=n.ah():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.ax(s==null?n.c=n.ah():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.ah()
q=J.dX(b)&0x3ffffff
p=n.bd(r,q)
if(p==null)n.aj(r,q,[n.ai(b,c)])
else{o=n.bv(p,b)
if(o>=0)p[o].b=c
else p.push(n.ai(b,c))}}},
a0:function(a,b){var t,s,r=this
H.aC(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.h(P.al(r))
t=t.c}},
ax:function(a,b,c){var t,s=this,r=H.aC(s)
r.c.a(b)
r.Q[1].a(c)
t=s.be(a,b)
if(t==null)s.aj(a,b,s.ai(b,c))
else t.b=c},
ai:function(a,b){var t=this,s=H.aC(t),r=new H.cr(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
bv:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.f3(a[s].a,b))return s
return-1},
j:function(a){return P.ed(this)},
be:function(a,b){return a[b]},
bd:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
ba:function(a,b){delete a[b]},
ah:function(){var t="<non-identifier-key>",s=Object.create(null)
this.aj(s,t,s)
this.ba(s,t)
return s},
$ieb:1}
H.cr.prototype={}
H.dn.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.dp.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.dq.prototype={
$1:function(a){return this.a(H.ca(a))},
$S:9}
H.bF.prototype={$ie4:1}
H.aX.prototype={$ib4:1}
H.au.prototype={
gm:function(a){return a.length},
$iar:1}
H.aV.prototype={
P:function(a,b){H.dc(b,a,a.length)
return a[b]},
t:function(a,b,c){H.X(b)
H.fY(c)
H.dc(b,a,a.length)
a[b]=c},
av:function(a,b,c,d){u.r.a(d)
this.aY(a,b,c,d,0)},
$iw:1,
$iN:1}
H.aW.prototype={
t:function(a,b,c){H.X(b)
H.X(c)
H.dc(b,a,a.length)
a[b]=c},
$iw:1,
$iN:1}
H.aU.prototype={$ifk:1}
H.bG.prototype={
P:function(a,b){H.dc(b,a,a.length)
return a[b]},
$ifl:1}
H.b9.prototype={}
H.ba.prototype={}
H.bb.prototype={}
H.bc.prototype={}
H.L.prototype={
k:function(a){return H.c9(v.typeUniverse,this,a)},
E:function(a){return H.fW(v.typeUniverse,this,a)}}
H.c4.prototype={}
H.c7.prototype={
j:function(a){return H.J(this.a,null)}}
H.c2.prototype={
j:function(a){return this.a}}
H.be.prototype={}
P.cP.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.cO.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
P.cQ.prototype={
$0:function(){this.a.$0()},
$S:4}
P.cR.prototype={
$0:function(){this.a.$0()},
$S:4}
P.d9.prototype={
b2:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.Y(new P.da(this,b),0),a)
else throw H.h(P.b6("`setTimeout()` not found."))}}
P.da.prototype={
$0:function(){this.b.$0()},
$S:0}
P.aL.prototype={
j:function(a){return H.j(this.a)},
$iq:1,
gac:function(){return this.b}}
P.c0.prototype={
al:function(a){var t,s
H.dR(a,"error",u.K)
t=this.a
if(t.a!==0)throw H.h(P.ej("Future already completed"))
s=P.e_(a)
t.b5(a,s)}}
P.ae.prototype={
aI:function(a,b){var t,s=this.$ti
s.k("1/?").a(b)
t=this.a
if(t.a!==0)throw H.h(P.ej("Future already completed"))
t.b4(s.k("1/").a(b))}}
P.b8.prototype={
bz:function(a){if((this.c&15)!==6)return!0
return this.b.b.ap(u.W.a(this.d),a.a,u.y,u.K)},
bt:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.k("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.bB(t,a.a,a.b,s,r,u.l))
else return q.a(p.ap(u.v.a(t),a.a,s,r))}}
P.B.prototype={
aP:function(a,b,c){var t,s,r,q=this.$ti
q.E(c).k("1/(2)").a(a)
t=$.t
if(t!==C.e){c.k("@<0/>").E(q.c).k("1(2)").a(a)
if(b!=null)b=P.hh(b,t)}s=new P.B(t,c.k("B<0>"))
r=b==null?1:3
this.ay(new P.b8(s,r,a,b,q.k("@<1>").E(c).k("b8<1,2>")))
return s},
aO:function(a,b){return this.aP(a,null,b)},
ay:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.ay(a)
return}s.a=r
s.c=t.c}P.aE(null,null,s.b,u.M.a(new P.cU(s,a)))}},
aC:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.aC(a)
return}n.a=t
n.c=o.c}m.a=n.a6(a)
P.aE(null,null,n.b,u.M.a(new P.d0(m,n)))}},
a5:function(){var t=u.F.a(this.c)
this.c=null
return this.a6(t)},
a6:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
az:function(a){var t,s,r,q=this
q.a=1
try{a.aP(new P.cX(q),new P.cY(q),u.P)}catch(r){t=H.P(r)
s=H.ag(r)
P.hL(new P.cZ(q,t,s))}},
aA:function(a){var t,s=this
s.$ti.c.a(a)
t=s.a5()
s.a=4
s.c=a
P.aB(s,t)},
a4:function(a,b){var t,s,r=this
u.l.a(b)
t=r.a5()
s=P.cf(a,b)
r.a=8
r.c=s
P.aB(r,t)},
b4:function(a){var t=this.$ti
t.k("1/").a(a)
if(t.k("aa<1>").b(a)){this.b7(a)
return}this.b6(t.c.a(a))},
b6:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.aE(null,null,t.b,u.M.a(new P.cW(t,a)))},
b7:function(a){var t=this,s=t.$ti
s.k("aa<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.aE(null,null,t.b,u.M.a(new P.d_(t,a)))}else P.dG(a,t)
return}t.az(a)},
b5:function(a,b){this.a=1
P.aE(null,null,this.b,u.M.a(new P.cV(this,a,b)))},
$iaa:1}
P.cU.prototype={
$0:function(){P.aB(this.a,this.b)},
$S:0}
P.d0.prototype={
$0:function(){P.aB(this.b,this.a.a)},
$S:0}
P.cX.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.aA(q.$ti.c.a(a))}catch(r){t=H.P(r)
s=H.ag(r)
q.a4(t,s)}},
$S:3}
P.cY.prototype={
$2:function(a,b){this.a.a4(a,u.l.a(b))},
$S:11}
P.cZ.prototype={
$0:function(){this.a.a4(this.b,this.c)},
$S:0}
P.cW.prototype={
$0:function(){this.a.aA(this.b)},
$S:0}
P.d_.prototype={
$0:function(){P.dG(this.b,this.a)},
$S:0}
P.cV.prototype={
$0:function(){this.a.a4(this.b,this.c)},
$S:0}
P.d3.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.aN(u.O.a(r.d),u.z)}catch(q){t=H.P(q)
s=H.ag(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.cf(t,s)
p.b=!0
return}if(m instanceof P.B&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.aO(new P.d4(o),u.z)
r.b=!1}},
$S:0}
P.d4.prototype={
$1:function(a){return this.a},
$S:12}
P.d2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.ap(p.k("2/(1)").a(q.d),n,p.k("2/"),o)}catch(m){t=H.P(m)
s=H.ag(m)
r=this.a
r.c=P.cf(t,s)
r.b=!0}},
$S:0}
P.d1.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.dQ(q.a.bz(t))&&q.a.e!=null){q.c=q.a.bt(t)
q.b=!1}}catch(p){s=H.P(p)
r=H.ag(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.cf(s,r)
m.b=!0}},
$S:0}
P.c_.prototype={}
P.b2.prototype={
gm:function(a){var t,s,r=this,q={},p=new P.B($.t,u.a)
q.a=0
t=H.aC(r)
s=t.k("~(1)?").a(new P.cE(q,r))
u.Z.a(new P.cF(q,p))
W.aA(r.a,r.b,s,!1,t.c)
return p}}
P.cE.prototype={
$1:function(a){H.aC(this.b).c.a(a);++this.a.a},
$S:function(){return H.aC(this.b).k("~(1)")}}
P.cF.prototype={
$0:function(){var t=this.b,s=t.$ti,r=s.k("1/").a(this.a.a),q=t.a5()
s.c.a(r)
t.a=4
t.c=r
P.aB(t,q)},
$S:0}
P.bP.prototype={}
P.bh.prototype={$iem:1}
P.dg.prototype={
$0:function(){var t=H.h(this.a)
t.stack=J.aJ(this.b)
throw t},
$S:0}
P.c5.prototype={
bC:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.e===$.t){a.$0()
return}P.eC(q,q,this,a,u.H)}catch(r){t=H.P(r)
s=H.ag(r)
P.df(q,q,this,t,u.l.a(s))}},
bD:function(a,b,c){var t,s,r,q=null
c.k("~(0)").a(a)
c.a(b)
try{if(C.e===$.t){a.$1(b)
return}P.eD(q,q,this,a,b,u.H,c)}catch(r){t=H.P(r)
s=H.ag(r)
P.df(q,q,this,t,u.l.a(s))}},
bi:function(a,b){return new P.d7(this,b.k("0()").a(a),b)},
aE:function(a){return new P.d6(this,u.M.a(a))},
bj:function(a,b){return new P.d8(this,b.k("~(0)").a(a),b)},
aN:function(a,b){b.k("0()").a(a)
if($.t===C.e)return a.$0()
return P.eC(null,null,this,a,b)},
ap:function(a,b,c,d){c.k("@<0>").E(d).k("1(2)").a(a)
d.a(b)
if($.t===C.e)return a.$1(b)
return P.eD(null,null,this,a,b,c,d)},
bB:function(a,b,c,d,e,f){d.k("@<0>").E(e).E(f).k("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.t===C.e)return a.$2(b,c)
return P.hi(null,null,this,a,b,c,d,e,f)}}
P.d7.prototype={
$0:function(){return this.a.aN(this.b,this.c)},
$S:function(){return this.c.k("0()")}}
P.d6.prototype={
$0:function(){return this.a.bC(this.b)},
$S:0}
P.d8.prototype={
$1:function(a){var t=this.c
return this.a.bD(this.b,t.a(a),t)},
$S:function(){return this.c.k("~(0)")}}
P.A.prototype={
ga1:function(a){return new H.as(a,this.gm(a),H.Z(a).k("as<A.E>"))},
T:function(a,b){return this.P(a,b)},
a0:function(a,b){var t,s
H.Z(a).k("~(A.E)").a(b)
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.P(a,s))
if(t!==this.gm(a))throw H.h(P.al(a))}},
br:function(a,b,c,d){var t,s,r
d.a(b)
H.Z(a).E(d).k("1(1,A.E)").a(c)
t=this.gm(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.P(a,r))
if(t!==this.gm(a))throw H.h(P.al(a))}return s},
aT:function(a,b,c,d,e){var t,s,r,q,p=H.Z(a)
p.k("w<A.E>").a(d)
P.fz(b,c,this.gm(a))
t=c-b
if(t===0)return
P.eg(e,"skipCount")
if(p.k("N<A.E>").b(d)){s=e
r=d}else{r=H.fC(d,e,null,H.bi(d).c).bF(0,!1)
s=0}if(s+t>r.length)throw H.h(H.fn())
if(s<b)for(q=t-1;q>=0;--q){p=s+q
if(p>=r.length)return H.k(r,p)
this.t(a,b+q,r[p])}else for(q=0;q<t;++q){p=s+q
if(p>=r.length)return H.k(r,p)
this.t(a,b+q,r[p])}},
j:function(a){return P.e7(a,"[","]")}}
P.aT.prototype={}
P.cu.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.j(a)
s.a=t+": "
s.a+=H.j(b)},
$S:13}
P.at.prototype={
gm:function(a){return this.a},
j:function(a){return P.ed(this)},
$ict:1}
P.bv.prototype={
G:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a&&this.b===b.b},
gv:function(a){var t=this.a
return(t^C.a.aD(t,30))&1073741823},
j:function(a){var t=this,s=P.fh(H.fx(t)),r=P.bw(H.fv(t)),q=P.bw(H.fr(t)),p=P.bw(H.fs(t)),o=P.bw(H.fu(t)),n=P.bw(H.fw(t)),m=P.fi(H.ft(t))
if(t.b)return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m+"Z"
else return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m}}
P.q.prototype={
gac:function(){return H.ag(this.$thrownJsError)}}
P.aK.prototype={
j:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bx(t)
return"Assertion failed"}}
P.bT.prototype={}
P.bI.prototype={
j:function(a){return"Throw of null."}}
P.Q.prototype={
gag:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaf:function(){return""},
j:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+H.j(o),m=r.gag()+p+n
if(!r.a)return m
t=r.gaf()
s=P.bx(r.b)
return m+t+": "+s}}
P.av.prototype={
gag:function(){return"RangeError"},
gaf:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.j(r):""
else if(r==null)t=": Not greater than or equal to "+H.j(s)
else if(r>s)t=": Not in inclusive range "+H.j(s)+".."+H.j(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.j(s)
return t}}
P.bB.prototype={
gag:function(){return"RangeError"},
gaf:function(){var t,s=H.X(this.b)
if(typeof s!=="number")return s.bK()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.bX.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.bV.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
j:function(a){return"Bad state: "+this.a}}
P.bt.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bx(t)+"."}}
P.b0.prototype={
j:function(a){return"Stack Overflow"},
gac:function(){return null},
$iq:1}
P.bu.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cT.prototype={
j:function(a){return"Exception: "+this.a}}
P.w.prototype={
gm:function(a){var t,s=this.ga1(this)
for(t=0;s.H();)++t
return t},
j:function(a){return P.fm(this,"(",")")}}
P.u.prototype={
gv:function(a){return P.o.prototype.gv.call(C.E,this)},
j:function(a){return"null"}}
P.o.prototype={constructor:P.o,$io:1,
G:function(a,b){return this===b},
gv:function(a){return H.b_(this)},
j:function(a){return"Instance of '"+H.j(H.cz(this))+"'"},
toString:function(){return this.j(this)}}
P.c6.prototype={
j:function(a){return""},
$iax:1}
P.bQ.prototype={
gm:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.f.prototype={}
W.bp.prototype={
j:function(a){return String(a)}}
W.bq.prototype={
j:function(a){return String(a)}}
W.a8.prototype={
au:function(a,b,c){var t=a.getContext(b,P.eJ(c))
return t},
$ia8:1}
W.T.prototype={$iT:1}
W.a1.prototype={
j:function(a){return String(a)},
$ia1:1}
W.d.prototype={
j:function(a){return a.localName},
$id:1}
W.e.prototype={$ie:1}
W.r.prototype={
b3:function(a,b,c,d){return a.addEventListener(b,H.Y(u.o.a(c),1),!1)},
$ir:1}
W.bz.prototype={
gm:function(a){return a.length}}
W.ao.prototype={
ao:function(a,b,c,d){return a.open(b,c,d)},
$iao:1}
W.aO.prototype={}
W.aP.prototype={
saU:function(a,b){a.src=b}}
W.U.prototype={$iU:1}
W.aY.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.aW(a):t}}
W.I.prototype={$iI:1}
W.bM.prototype={
gm:function(a){return a.length}}
W.E.prototype={}
W.az.prototype={
aL:function(a,b){var t
u.f.a(b)
this.bc(a)
t=W.eF(b,u.q)
t.toString
return this.bf(a,t)},
bf:function(a,b){return a.requestAnimationFrame(H.Y(u.f.a(b),1))},
bc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dz.prototype={}
W.b7.prototype={}
W.c1.prototype={}
W.c3.prototype={}
W.cS.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:14}
P.cL.prototype={
aK:function(a){var t,s=this.a,r=s.length
for(t=0;t<r;++t)if(s[t]===a)return t
C.b.B(s,a)
C.b.B(this.b,null)
return r},
as:function(a){var t,s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(H.de(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){t=a.getTime()
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.aH(P.dY("DateTime is outside valid range: "+t))
H.dR(!0,"isUtc",u.y)
return new P.bv(t,!0)}if(a instanceof RegExp)throw H.h(P.dF("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.hJ(a,u.z)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=k.aK(a)
s=k.b
if(q>=s.length)return H.k(s,q)
p=j.a=s[q]
if(p!=null)return p
o=u.z
p=P.fp(o,o)
j.a=p
C.b.t(s,q,p)
k.bs(a,new P.cN(j,k))
return j.a}if(a instanceof Array){n=a
q=k.aK(n)
s=k.b
if(q>=s.length)return H.k(s,q)
p=s[q]
if(p!=null)return p
o=J.dj(n)
m=o.gm(n)
p=k.c?new Array(m):n
C.b.t(s,q,p)
for(s=J.cc(p),l=0;l<m;++l)s.t(p,l,k.as(o.P(n,l)))
return p}return a}}
P.cN.prototype={
$2:function(a,b){var t=this.a.a,s=this.b.as(b)
J.f4(t,a,s)
return s},
$S:15}
P.dd.prototype={
$1:function(a){this.a.push(P.ey(a))},
$S:1}
P.dh.prototype={
$2:function(a,b){this.a[a]=P.ey(b)},
$S:16}
P.cM.prototype={
bs:function(a,b){var t,s,r,q
u.e.a(b)
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.eQ)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.dv.prototype={
$1:function(a){return this.a.aI(0,this.b.k("0/?").a(a))},
$S:1}
P.dw.prototype={
$1:function(a){return this.a.al(a)},
$S:1}
P.d5.prototype={
p:function(a){if(a<=0||a>4294967296)throw H.h(P.fy("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.G.prototype={
gm:function(a){return a.length},
$iG:1}
P.ai.prototype={
saF:function(a,b){a.buffer=b},
sby:function(a,b){a.loop=!0},
V:function(a,b){return a.start(b)},
$iai:1}
P.aj.prototype={
bl:function(a){if(a.createGain!==undefined)return a.createGain()
else return a.createGainNode()},
b9:function(a,b,c,d){u.cE.a(c)
u.t.a(d)
return a.decodeAudioData(b,H.Y(c,1),H.Y(d,1))},
bm:function(a,b){var t=new P.B($.t,u.x),s=new P.ae(t,u.k)
this.b9(a,b,new P.cg(s),new P.ch(s))
return t}}
P.cg.prototype={
$1:function(a){this.a.aI(0,u.G.a(a))},
$S:17}
P.ch.prototype={
$1:function(a){var t
u.w.a(a)
t=this.a
if(a==null)t.al("")
else t.al(a)},
$S:18}
P.m.prototype={
ae:function(a,b,c,d){return a.connect(b,c,d)},
$im:1}
P.R.prototype={}
P.aM.prototype={}
P.an.prototype={}
P.bs.prototype={$ibs:1}
P.bK.prototype={$ibK:1}
P.aw.prototype={
Z:function(a,b,c){return a.bindBuffer(b,c)},
ak:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b,c,d,e,f,g){a.texImage2D(b,c,d,e,f,g)
return},
bG:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ar:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bH:function(a,b){return a.useProgram(b)},
$iaw:1}
P.bS.prototype={$ibS:1}
P.bU.prototype={$ibU:1}
A.dl.prototype={
$2:function(a,b){var t,s
H.X(a)
t=C.h.gv(b)
if(typeof a!=="number")return a.A()
s=a+t&536870911
s=s+((s&524287)<<10)&536870911
return s^s>>>6},
$S:19}
T.O.prototype={
j:function(a){var t=this
return"[0] "+t.a2(0).j(0)+"\n[1] "+t.a2(1).j(0)+"\n[2] "+t.a2(2).j(0)+"\n[3] "+t.a2(3).j(0)+"\n"},
G:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.O){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dk(this.a)},
a2:function(a){var t,s=new Float32Array(4),r=this.a
if(a>=16)return H.k(r,a)
s[0]=r[a]
t=4+a
if(t>=16)return H.k(r,t)
s[1]=r[t]
t=8+a
if(t>=16)return H.k(r,t)
s[2]=r[t]
t=12+a
if(t>=16)return H.k(r,t)
s[3]=r[t]
return new T.a(s)},
aq:function(a,b,c,a0){var t=this.a,s=t[0],r=t[4],q=t[8],p=t[12],o=t[1],n=t[5],m=t[9],l=t[13],k=t[2],j=t[6],i=t[10],h=t[14],g=t[3],f=t[7],e=t[11],d=t[15]
t[12]=s*b+r*c+q*a0+p
t[13]=o*b+n*c+m*a0+l
t[14]=k*b+j*c+i*a0+h
t[15]=g*b+f*c+e*a0+d},
aM:function(a){var t=Math.cos(a),s=Math.sin(a),r=this.a,q=r[0],p=r[8],o=-s,n=r[1],m=r[9],l=r[2],k=r[10],j=r[3],i=r[11]
r[0]=q*t+p*o
r[1]=n*t+m*o
r[2]=l*t+k*o
r[3]=j*t+i*o
r[8]=q*s+p*t
r[9]=n*s+m*t
r[10]=l*s+k*t
r[11]=j*s+i*t},
R:function(){var t=this.a
t[0]=1
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=1
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=1
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=1}}
T.l.prototype={
q:function(a,b){var t=this.a
t[0]=a
t[1]=b},
a3:function(a){var t=a.a,s=this.a
s[1]=t[1]
s[0]=t[0]},
j:function(a){var t=this.a
return"["+H.j(t[0])+","+H.j(t[1])+"]"},
G:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.l){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dk(this.a)},
I:function(a,b){var t=new Float32Array(2),s=new T.l(t)
s.a3(this)
t[1]=t[1]*b
t[0]=t[0]*b
return s},
gm:function(a){var t=this.a,s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
sw:function(a,b){this.a[0]=b},
sM:function(a,b){this.a[1]=b}}
T.b.prototype={
i:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
a3:function(a){var t=a.a,s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.j(t[0])+","+H.j(t[1])+","+H.j(t[2])+"]"},
G:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dk(this.a)},
gm:function(a){var t=this.a,s=t[0],r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
gbx:function(){var t=this.a,s=t[0],r=t[1]
t=t[2]
return s*s+r*r+t*t},
an:function(a){var t,s,r=Math.sqrt(this.gbx())
if(r===0)return 0
t=1/r
s=this.a
s[0]=s[0]*t
s[1]=s[1]*t
s[2]=s[2]*t
return r},
am:function(a){var t=a.a,s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
aJ:function(a){var t=this.a,s=t[0],r=t[1],q=t[2],p=a.a,o=p[0],n=p[1],m=p[2]
t=new T.b(new Float32Array(3))
t.i(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
J:function(a){var t=new Float32Array(3),s=new T.b(t)
s.a3(this)
t[2]=t[2]*a
t[1]=t[1]*a
t[0]=t[0]*a
return s},
sw:function(a,b){this.a[0]=b},
sM:function(a,b){this.a[1]=b},
sC:function(a,b){this.a[2]=b}}
T.a.prototype={
h:function(a,b,c,d){var t=this.a
t[3]=d
t[2]=c
t[1]=b
t[0]=a},
j:function(a){var t=this.a
return H.j(t[0])+","+H.j(t[1])+","+H.j(t[2])+","+H.j(t[3])},
G:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dk(this.a)},
gm:function(a){var t=this.a,s=t[0],r=t[1],q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
M.a4.prototype={
X:function(){var t,s,r,q,p=this
try{s=new XMLHttpRequest()
p.b=s
s.responseType="arraybuffer"
s=p.b
s.toString
r=u.u.a(p.gaR())
u.Z.a(null)
W.aA(s,"load",r,!1,u.V)
r=p.b;(r&&C.k).ao(r,"GET",p.a,!0)
p.b.send()}catch(q){t=H.P(q)
P.du(t)}},
aS:function(a){var t
u.V.a(a)
t=$.bN;(t&&C.n).bm(t,u.a5.a(W.h2(this.b.response))).aO(new M.cD(this),u.P)},
Y:function(){var t,s,r,q,p=this
if(p.d){$.c.f.toString
s=!1}else s=!0
if(s)return
try{s=$.bN.createBufferSource()
p.f=s
r=$.dE
s.toString
C.f.ae(s,r,0,0)
r=p.f;(r&&C.f).saF(r,p.c)
r=p.f;(r&&C.f).V(r,0)}catch(q){t=H.P(q)
P.du(t)}},
b_:function(a){var t,s,r,q,p=this
if(p.d){$.c.f.toString
s=p.e}else s=!0
if(s)return
try{s=$.bN.createBufferSource()
p.f=s
r=$.dE
s.toString
C.f.ae(s,r,0,0)
r=p.f;(r&&C.f).saF(r,p.c)
r=p.f;(r&&C.f).sby(r,!0)
p.e=!0
r=p.f;(r&&C.f).V(r,0)}catch(q){t=H.P(q)
P.du(t)}},
W:function(){var t=new (window.AudioContext||window.webkitAudioContext)()
$.bN=t
t=C.n.bl(t)
$.dE=t
C.B.ae(t,$.bN.destination,0,0)}}
M.cD.prototype={
$1:function(a){var t=this.a
t.c=u.h.a(a)
t.d=!0},
$S:21}
M.cC.prototype={}
M.bA.prototype={
V:function(c0,c1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=!c1
if(b9){t=u.aS.a(document.querySelector("#game"))
b8.a=t
s=u.z
r=u.D
t=r.a((t&&C.q).au(t,"webgl",P.ec(["antialias",!1,"depth",!0],s,s)))
$.i=t
if(t==null){t=b8.a
s=$.i=r.a((t&&C.q).au(t,"experimental-webgl",P.ec(["antialias",!1,"depth",!0],s,s)))
t=s}s=b8.a
t.viewport(0,0,s.width,s.height)
$.i.clearColor(0,0,0,1)
$.i.clear(16640)
t=new T.O(new Float32Array(16))
t.R()
s=new T.O(new Float32Array(16))
s.R()
r=new T.O(new Float32Array(16))
r.R()
q=new T.b(new Float32Array(3))
q.i(0,0,0)
p=new T.a(new Float32Array(4))
p.h(0,0,0,0)
o=new T.a(new Float32Array(4))
o.h(0,0,0,0)
n=new T.l(new Float32Array(2))
n.q(0,0)
n=new M.cA(t,s,r,q,p,o,n)
o=new M.ck()
o.b0("shaders/VertexShader.vert","shaders/FragmentShader.frag")
n.fy=o
n.bu()
b8.b=n
n=u.c5
n=new M.cn(P.dC(256,!1,!1,n),P.dC(256,!1,!1,n))
b8.c=n
n.bw()
n=new M.a4("sfx/hurt.wav")
n.W()
n.X()
o=new M.a4("sfx/beat.wav")
o.W()
o.X()
p=new M.a4("sfx/swing.wav")
p.W()
p.X()
q=new M.a4("sfx/damage.wav")
q.W()
q.X()
r=new M.a4("sfx/funky_chunk.ogg")
r.W()
r.X()
b8.f=new M.cC(n,o,p,q,r)
b8.go=!1}t=new T.b(new Float32Array(3))
t.i(0,0,-1)
s=new T.l(new Float32Array(2))
s.q(0,0)
r=new T.b(new Float32Array(3))
r.i(0,0,0)
q=new T.b(new Float32Array(3))
q.i(0,0,0)
p=new T.b(new Float32Array(3))
p.i(0,0,0)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
m=new M.cx(r,q,p,o,n,m)
s=new M.cy(t,s,m)
t=new T.b(new Float32Array(3))
t.i(7,0,-7)
m.a=t
t=new T.l(new Float32Array(2))
t.q(0,-3.9269908169872414)
s.b=t
b8.d=s
t=new T.b(new Float32Array(3))
t.i(0,0,0)
s=$.p()
r=new T.a(new Float32Array(4))
r.h(0,36,1,1)
q=new T.a(new Float32Array(4))
q.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
p=$.p()
o=new T.a(new Float32Array(4))
o.h(0,39,29,11)
n=new T.a(new Float32Array(4))
n.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
m=$.p()
l=new T.a(new Float32Array(4))
l.h(1,53,35,7)
k=new T.a(new Float32Array(4))
k.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
j=$.p()
i=new T.a(new Float32Array(4))
i.h(3,62,31,3)
h=new T.a(new Float32Array(4))
h.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
g=$.p()
f=new T.a(new Float32Array(4))
f.h(123,2,9,53)
e=new T.a(new Float32Array(4))
e.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
d=$.p()
c=new T.a(new Float32Array(4))
c.h(135,5,3,47)
b=new T.a(new Float32Array(4))
b.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
a=$.p()
a0=new T.a(new Float32Array(4))
a0.h(150,2,9,53)
a1=new T.a(new Float32Array(4))
a1.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
a2=$.p()
a3=new T.a(new Float32Array(4))
a3.h(142,5,3,47)
a4=new T.a(new Float32Array(4))
a4.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
a5=$.p()
a6=new T.a(new Float32Array(4))
a6.h(7,81,128,75)
a7=new T.a(new Float32Array(4))
a7.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
a8=$.p()
a9=new T.a(new Float32Array(4))
a9.h(79,31,1,1)
b0=new T.a(new Float32Array(4))
b0.h(0.2,0.3,0.49999999999999994,0.9)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
b1=$.p()
b2=new T.a(new Float32Array(4))
b2.h(42,41,9,8)
b3=new T.a(new Float32Array(4))
b3.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
b4=$.p()
b5=new T.a(new Float32Array(4))
b5.h(56,37,63,40)
b6=new T.a(new Float32Array(4))
b6.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
b7=new T.l(new Float32Array(2))
b7.q(0,0)
b8.e=new M.cB(t,new M.cj(new M.n(s,r,q),new M.n(p,o,n),new M.n(m,l,k),new M.n(j,i,h),new M.n(g,f,e),new M.n(d,c,b),new M.n(a,a0,a1),new M.n(a2,a3,a4),new M.n(a5,a6,a7),new M.n(a8,a9,b0),new M.n(b1,b2,b3),new M.n(b4,b5,b6),new M.cI()),b7,-1.5707963267948966)
b7=new M.cs([],[],[],[])
b7.aZ()
b8.r=b7
b8.cy=Date.now()
if(b9)C.t.aL(window,b8.gat())},
aV:function(a){return this.V(a,!1)},
aQ:function(a){var t,s,r,q,p,o,n,m,l=this
H.fZ(a);++l.ch;++l.z
if(Date.now()-l.Q>=1000){l.y=l.z
l.z=0
l.Q=Date.now()
t="FPS: "+C.a.j(l.y)+", render count: "+C.a.j(l.b.r2)+", batches: "+C.a.j(l.b.k3)+", batch size: "
l.b.toString
P.du(t+C.a.j(1024)+", render time: "+C.a.j(l.b.k4)+" ms")}if(!l.go&&$.c.ch>120){l.f.f.b_(239999)
if(l.f.f.d)l.go=!0}if(l.e.cx===2)$.c.f.c.Y()
t=$.c
if(t.d.z<=0&&!l.fr){l.fr=!0
l.c.y=!1}s=!t.fr
if(s)t.dy="A massive heart attack"
if(!l.r.r&&t.fx&&s){t.fr=t.fy=!0
l.c.y=!1}l.e.toString
t=document
s=t.querySelector("body")
t=t.documentElement.clientWidth
r=$.c.a.width
if(typeof t!=="number")return t.bL()
if(typeof r!=="number")return H.dm(r)
s.setAttribute("style","margin-left:"+C.j.j((t-r)/2)+"px")
r=$.c
t=r.d
t.x=t.r=!1
s=r.fx
if(s&&!r.fr){s=r.c.a
r=s[39]
if(!(r&&s[37])){if(r){t=t.b
t.sM(0,t.a[1]-0.01)
t=$.c.d
t.r=!0
s=t.c.d
s.sw(0,s.a[0]+0.03*Math.sin(t.b.a[1]))
t=$.c.d
s=t.c.d
s.sC(0,s.a[2]+0.03*Math.cos(t.b.a[1]))}t=$.c
if(t.c.a[37]){t=t.d.b
t.sM(0,t.a[1]+0.01)
t=$.c.d
t.r=!0
s=t.c.d
s.sw(0,s.a[0]+0.03*Math.sin(t.b.a[1]))
t=$.c.d
s=t.c.d
s.sC(0,s.a[2]+0.03*Math.cos(t.b.a[1]))}}t=$.c
s=t.c
r=s.a
if(r[39]&&r[37]){t=t.d
r=Math.min(t.y+0.02,1)
t.y=r
if(s.r&&r===1){s.r=!1
t.x=!0}}else{s.r=!0
t.d.y=0}}else{t=r.c
q=t.a
if(q[39]||q[37]){if(t.y){if(!s)r.fx=!0
if(r.fr){r.fy=r.fr=!1
r.dx=0
r.db=60
r.cy=Date.now()
$.c.V(0,!0)}}}else t.y=!0}t=$.c.d
t.bk()
s=t.Q
r=60/Math.max(0.1,s/100)
t.ch=r
if(r>200)$.c.b.y1=0.2
if(s<100){s+=0.1
t.Q=s}if(t.r)s=t.Q=s-0.15
if(t.x){t.Q=s-14
$.c.f.d.Y()}s=t.z=t.z-Math.max(0,t.ch/200-1)
if(s<100&&!$.c.fr)t.z=s+0.05
s=t.c
r=s.d
q=r.a
r.sw(0,0.9*q[0]*Math.max(0.8,t.Q/100))
r.sC(0,0.9*q[2]*Math.max(0.8,t.Q/100))
p=s.a.a
o=p[0]
n=p[1]
p=p[2]
m=new T.b(new Float32Array(3))
m.i(o,n,p)
s.b=m
m=s.f.a
r.sw(0,q[0]+m[0])
r.sM(0,q[1]+m[1])
r.sC(0,q[2]+m[2])
m=s.a
m.sw(0,m.a[0]+q[0])
m=s.a
m.sM(0,m.a[1]+q[1])
m=s.a
m.sC(0,m.a[2]+q[2])
m=q[0]
r=q[1]
q=q[2]
p=new T.b(new Float32Array(3))
p.i(m,r,q)
s.e=p
t.a=s.b
t.z=Math.max(0,t.z)
t.Q=Math.max(0,t.Q)
$.i.clear(16640)
t=l.b
t.k1=!0
t.r2=t.k3=0
t.r1=Date.now()
t=$.c
t.b.ab=!1
s=l.r
s.r=!1
if(t.fx)s.bn()
s.bp()
s.bq()
s.bo()
s.f.a8()
s.f.a9()
s.f.a_()
s.f.aa()
t=$.c.b
s=$.p()
r=new T.a(new Float32Array(4))
r.h(7,81,1,1)
q=new T.a(new Float32Array(4))
q.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
p=new T.b(new Float32Array(3))
p.i(-10,-15,-22.5)
o=new T.l(new Float32Array(2))
o.q(100,100)
n=new T.b(new Float32Array(3))
n.i(1.5707963267948966,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
t.u(s,p,o,r,n,m,q)
t=$.c
if(C.a.l(t.ch,30)===0)t.b.y1=0
l.b.y2.sw(0,M.dx(0,100)/100*l.b.y1)
l.b.y2.sM(0,M.dx(0,100)/100*l.b.y1)
t=l.e
t.toString
$.c.b.U()
$.c.b.ab=!0
s=t.e=-Math.abs(Math.sin(++t.x/10)*0.2)
r=$.c.d
q=r.r
if(q)t.r=!0
if((!q||r.x)&&s<0.01&&s>-0.01)t.r=!1
if(!t.r)t.x=t.e=0
if(t.y>3.141592653589793){s=t.f.a[0]
s=s<0.05&&s>-0.05}else s=!1
if(s)t.f.sw(0,0)
if(t.y>3.141592653589793){s=t.f.a[1]
s=s<0.05&&s>-0.05}else s=!1
if(s)t.f.sM(0,0)
s=t.f
r=s.a
q=r[0]===0
if(q&&r[1]===0){t.y=0.16666666666666666
t.z=!1}r=t.y+=0.16666666666666666
if(r<=3.141592653589793||!q)s.sw(0,Math.cos(r))
s=t.y
if(s<=3.141592653589793||t.f.a[1]!==0)t.f.sM(0,-Math.abs(Math.sin(s)*0.5))
s=$.c
r=s.d
if(r.y===1){t.z=!0
s.c.r=!0
r.y=0}if(!t.z){s=new T.l(new Float32Array(2))
s.q(0,0)
t.f=s}s=$.c.b
r=t.d
q=r.a
p=new T.b(new Float32Array(3))
p.i(0,0,-1)
o=new T.l(new Float32Array(2))
o.q(0.01,0.01)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
s.u(q.a,p,o,q.b,n,m,q.c)
q=$.c.b
m=r.b
n=t.f.a
o=n[0]
p=t.e
n=n[1]
s=new T.b(new Float32Array(3))
s.i(-1+o,0.7+p+n,-2)
s=s.J(0.56)
p=new T.l(new Float32Array(2))
p.q(2,1)
p=p.I(0,0.56)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
q.u(m.a,s,p,m.b,o,n,m.c)
s=$.c
q=s.c.a
p=q[39]
if(p&&t.ch>-1.5707963267948966)t.ch-=0.1
q=q[37]
if(q&&t.ch<1.5707963267948966)t.ch+=0.1
if(!q&&!p){q=t.ch
if(q<0)q=t.ch=q+0.1
if(q>0)t.ch=q-0.1}if(s.d.y>0.1){s=s.b
q=r.c
p=Math.sin(t.ch)
o=new T.b(new Float32Array(3))
o.i(-0.4+p*0.05,-0.3,-1)
o=o.J(0.56)
p=new T.l(new Float32Array(2))
p.q(0.8,0.15)
p=p.I(0,0.56)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
s.u(q.a,o,p,q.b,n,m,q.c)
q=$.c.b
m=r.d
n=Math.sin(t.ch)
s=new T.b(new Float32Array(3))
s.i(-0.36285714199999997+n*0.05,-0.257142858,-1)
s=s.J(0.56)
n=Math.max(0,0.885714299*($.c.d.y/1)-0.15)
p=new T.l(new Float32Array(2))
p.q(n,0.0642857)
p=p.I(0,0.56)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
q.u(m.a,s,p,m.b,o,n,m.c)}s=$.c.b
q=r.e
p=Math.sin(t.ch)
o=new T.b(new Float32Array(3))
o.i(-0.9+p*0.05,-0.5,-1)
o=o.J(0.56)
p=new T.l(new Float32Array(2))
p.q(0.2,1)
p=p.I(0,0.56)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
s.u(q.a,o,p,q.b,n,m,q.c)
q=$.c.b
m=r.f
n=Math.sin(t.ch)
s=new T.b(new Float32Array(3))
s.i(-0.8400000000000001+n*0.05,0.5,-1)
s=s.J(0.56)
n=$.c.d.Q
p=new T.l(new Float32Array(2))
p.q(0.09,0.99*(-n/100))
p=p.I(0,0.56)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
q.u(m.a,s,p,m.b,o,n,m.c)
m=$.c.b
n=r.r
o=Math.sin(t.ch)
s=new T.b(new Float32Array(3))
s.i(0.7+o*0.05,-0.5,-1)
s=s.J(0.56)
q=new T.l(new Float32Array(2))
q.q(0.2,1)
q=q.I(0,0.56)
p=new T.b(new Float32Array(3))
p.i(0,0,0)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
m.u(n.a,s,q,n.b,p,o,n.c)
n=$.c.b
o=r.x
p=Math.sin(t.ch)
s=new T.b(new Float32Array(3))
s.i(0.76+p*0.05,0.5,-1)
s=s.J(0.56)
p=Math.max(0,0.99)
q=$.c.d.z
m=new T.l(new Float32Array(2))
m.q(0.09,p*(-q/100))
m=m.I(0,0.56)
q=new T.b(new Float32Array(3))
q.i(0,0,0)
p=new T.b(new Float32Array(3))
p.i(0,0,0)
n.u(o.a,s,m,o.b,q,p,o.c)
o=$.c.b
p=r.Q
q=Math.sin(t.ch)
m=t.cx*0.01
s=new T.b(new Float32Array(3))
s.i(-0.3+q*0.05-m,-0.5-m,-1)
s=s.J(0.56)
m=t.cx*0.02
q=new T.l(new Float32Array(2))
q.q(0.132+m,0.12+m)
q=q.I(0,0.56)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
o.u(p.a,s,q,p.b,n,m,p.c)
if(t.Q){s=$.c.b
q=r.z
p=new T.b(new Float32Array(3))
p.i(-2,-2,-0.55)
o=new T.l(new Float32Array(2))
o.q(10,10)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
s.u(q.a,p,o,q.b,n,m,q.c)}s=$.c
if(C.a.l(s.ch,180)===0)t.dy=s.d.ch
if(C.a.l(++t.cy,C.j.L(60/t.dy*60))<=3)t.cx=2
else t.cx=0
s=$.c
q=!s.fr
if(!q||!s.fx)t.Q=!0
else t.Q=!1
if(q)t.fy=Date.now()
s=$.c
if(!s.fx){q=t.fx
if(q<0)q=t.fx=q+0.02
s=s.b
r=r.ch
q=Math.cos(q)
p=new T.b(new Float32Array(3))
p.i(-0.25+q-1,-0.25,-0.5)
q=new T.l(new Float32Array(2))
q.q(0.5,0.3)
o=new T.b(new Float32Array(3))
o.i(0,0,0)
n=new T.b(new Float32Array(3))
n.i(0,0,0)
s.u(r.a,p,q,r.b,o,n,r.c)
r=Math.sin(t.ch)
n=Math.cos(t.fx)
s=new T.b(new Float32Array(3))
s.i(-(23*((0.025+r*0.05)/1.2))/5-0.25+n-1+0.1,0.08,-0.5)
r=new T.a(new Float32Array(4))
r.h(0.333,0.6745,0.9333,1)
M.C("by Roninkoi (@Roninkoi)",s,0.025,r)
if(C.a.l($.c.ch,30)>=15){s=Math.sin(t.ch)
r=new T.b(new Float32Array(3))
r.i(0-29*((0.025+s*0.05)/1.2)/5-0.25,0.18,-0.5)
s=new T.a(new Float32Array(4))
s.h(1,1,1,1)
M.C("Press right or left arrow to start.",r,0.025,s)}}s=$.c
if(s.fr){if(s.fy){s=new T.b(new Float32Array(3))
s.i(-0.10416666666666669,-0.27,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C("Lovely!",s,0.025,r)
s=new T.b(new Float32Array(3))
s.i(-0.4541666666666667,-0.16999999999999998,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C("You wiped the floor with those ducks, dear.",s,0.025,r)}else{s=new T.b(new Float32Array(3))
s.i(-0.10833333333333334,-0.27,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C("Oh dear!",s,0.025,r)
r=$.c.dy
s="Cause of death: "+r
r="Cause of death: as"+r
q=new T.b(new Float32Array(3))
q.i(0-r.length*0.020833333333333336/5-0.25,-0.16999999999999998,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C(s,q,0.025,r)}s="You did it in: "+C.a.j(t.fy-$.c.cy)+" milliseconds"
r="You did it in: millisec"+C.a.j(t.fy-$.c.cy)+" se"
q=new T.b(new Float32Array(3))
q.i(0-r.length*0.020833333333333336/5-0.25,-0.04000000000000001,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C(s,q,0.025,r)
r="Heart attacks: "+C.a.j($.c.dx)
q="Heart attack"+C.a.j($.c.dx)
s=new T.b(new Float32Array(3))
s.i(0-q.length*0.020833333333333336/5-0.15,0.03,-0.5)
q=new T.a(new Float32Array(4))
q.h(1,1,1,1)
M.C(r,s,0.025,q)
s=$.c.db
if(s<600){s="Max BPM: "+C.a.j(C.h.L(s))
r=C.a.j(C.h.L($.c.db))
q=new T.b(new Float32Array(3))
q.i(0-r.length*0.020833333333333336/5-0.15,0.09,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C(s,q,0.025,r)}else{s=new T.b(new Float32Array(3))
s.i(-0.20833333333333331,0.09,-0.5)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
M.C("Max BPM: NaNananananana",s,0.025,r)}if(C.a.l($.c.ch,30)>=15){s=Math.sin(t.ch)
r=new T.b(new Float32Array(3))
r.i(0-36*((0.025+s*0.05)/1.2)/5-0.25,0.18,-0.5)
s=new T.a(new Float32Array(4))
s.h(1,1,1,1)
M.C("Press right or left arrow to restart.",r,0.025,s)}}s=C.a.j(C.h.L($.c.d.ch))+" BPM"
r=Math.sin(t.ch)
q=new T.b(new Float32Array(3))
q.i(-0.1+r*0.05,-0.48,-1)
r=new T.a(new Float32Array(4))
r.h(0.5,0,0,1)
M.C(s,q,0.06,r)
s=$.c
if(s.d.ch>=150){if(C.a.l(s.ch,30)<=20){s=Math.sin(t.ch)
r=new T.b(new Float32Array(3))
r.i(-0.5833333333333334+s*0.05,0.1,-1)
s=new T.a(new Float32Array(4))
s.h(1,0.7,0,1)
M.C("You're having a heart attack!",r,0.05,s)
if(t.fr){++$.c.dx
t.fr=!1}}}else t.fr=!0
if(t.db>0&&C.a.l($.c.ch,30)<=20){s=Math.sin(t.ch)
r=new T.b(new Float32Array(3))
r.i(-0.5625000000000001+s*0.05,0.1,-1)
s=new T.a(new Float32Array(4))
s.h(1,0.7,0,1)
M.C("You're going to get a cold!",r,0.05,s)}if(t.dx>0&&C.a.l($.c.ch,30)<=20){s=Math.sin(t.ch)
r=new T.b(new Float32Array(3))
r.i(-0.43750000000000006+s*0.05,0.1,-1)
s=new T.a(new Float32Array(4))
s.h(1,0.7,0,1)
M.C("Don't break your hip!",r,0.05,s)}s=t.db
if(s>=0)t.db=s-1
s=t.dx
if(s>=0)t.dx=s-1
s=$.c
r=s.d
q=r.ch
if(q>s.db)s.db=q
s=C.a.j(C.h.L(r.Q))+"%"
r=Math.sin(t.ch)
q=new T.b(new Float32Array(3))
q.i(-0.7+r*0.05,-0.03,-1)
r=new T.a(new Float32Array(4))
r.h(1,1,1,0.5)
M.C(s,q,0.05,r)
r=C.a.j(C.h.L($.c.d.z))+"%"
t=Math.sin(t.ch)
q=C.a.j(C.h.L($.c.d.z))+"%"
s=new T.b(new Float32Array(3))
s.i(0.65+t*0.05-q.length*0.04166666666666667,-0.03,-1)
t=new T.a(new Float32Array(4))
t.h(1,1,1,0.5)
M.C(r,s,0.05,t)
$.c.b.U()
$.c.b.ab=!1
l.b.U()
l.b.k4=Date.now()-l.b.r1
C.t.aL(window,l.gat())}}
M.cn.prototype={
bw:function(){var t,s=window,r=u.bH,q=r.a(new M.co(this))
u.Z.a(null)
t=u.S
W.aA(s,"keydown",q,!1,t)
W.aA(window,"keyup",r.a(new M.cp(this)),!1,t)}}
M.co.prototype={
$1:function(a){var t,s
u.S.a(a)
t=a.keyCode
if(t===8||t===32)a.preventDefault()
for(t=this.a.a,s=0;s<256;++s)if(a.keyCode===s)C.b.t(t,s,!0)},
$S:5}
M.cp.prototype={
$1:function(a){var t,s
u.S.a(a)
if(a.keyCode===8)a.preventDefault()
for(t=this.a.a,s=0;s<256;++s)if(a.keyCode===s)C.b.t(t,s,!1)},
$S:5}
M.cx.prototype={}
M.cA.prototype={
u:function(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this;++g.r2
if(g.id<1024){t=e.a
s=t[0]
r=g.ry.a
if(s===r[0])if(t[1]===r[1])if(t[2]===r[2]){t=a0.a
s=t[0]
r=g.x1.a
t=s!==r[0]||t[1]!==r[1]||t[2]!==r[2]||t[3]!==r[3]||g.k1}else t=!0
else t=!0
else t=!0}else t=!0
if(t){g.U();++g.k3
g.id=0
g.k1=!1
g.ry=e
g.x2=g.x1=a0
t=new T.O(new Float32Array(16))
t.R()
g.cy=t
s=f.a
t.aq(0,s[0],s[1],s[2])
s=g.cy
t=e.a
r=t[0]
q=Math.cos(r)
p=Math.sin(r)
s=s.a
r=s[4]
o=s[8]
n=s[5]
m=s[9]
l=s[6]
k=s[10]
j=s[7]
i=s[11]
h=-p
s[4]=r*q+o*p
s[5]=n*q+m*p
s[6]=l*q+k*p
s[7]=j*q+i*p
s[8]=r*h+o*q
s[9]=n*h+m*q
s[10]=l*h+k*q
s[11]=j*h+i*q
g.cy.aM(t[1])
i=g.cy
t=t[2]
q=Math.cos(t)
p=Math.sin(t)
i=i.a
t=i[0]
h=i[4]
j=i[1]
s=i[5]
k=i[2]
l=i[6]
m=i[3]
n=i[7]
o=-p
i[0]=t*q+h*p
i[1]=j*q+s*p
i[2]=k*q+l*p
i[3]=m*q+n*p
i[4]=t*o+h*q
i[5]=j*o+s*q
i[6]=k*o+l*q
i[7]=m*o+n*q}t=g.f
s=12*g.id
r=b.a
o=r[0]
n=r[1]
m=c.a
l=m[1]
n=-(n+l)
l=n+l
k=r[2]
j=o+m[0]
i=u.m;(t&&C.l).av(t,s,12+s,H.aG([o,l,k,j,l,k,j,n,k,o,n,k],i))
k=g.x
n=16*g.id
o=r[0]
j=d.a
l=j[0]
s=a.b
t=j[2]/s/m[0]
s=o-l/s/t
l=j[1]
o=a.c
m=j[3]/o/m[1]
r=l/o/m-r[1];(k&&C.l).av(k,n,16+n,H.aG([s,r,t,m,s,r,t,m,s,r,t,m,s,r,t,m],i));++g.id},
U:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962
$.i.enable(3042)
$.i.enable(2929)
$.i.depthMask(!0)
$.i.depthFunc(513)
$.i.activeTexture(33984)
t=$.i;(t&&C.d).ak(t,3553,$.p().a)
$.i.blendFunc(770,771)
t=new T.O(new Float32Array(16))
t.R()
b.dx=t
if(!b.ab){t=$.c.e.a
s=new Float32Array(3)
new T.b(s).i(0,0,1)
r=new T.b(new Float32Array(3))
r.i(0,1,0)
q=new Float32Array(16)
p=new T.O(q)
o=new Float32Array(3)
n=new T.b(o)
n.a3(t)
o[0]=o[0]-s[0]
o[1]=o[1]-s[1]
o[2]=o[2]-s[2]
n.an(0)
m=r.aJ(n)
m.an(0)
l=n.aJ(m)
l.an(0)
r=m.am(t)
s=l.am(t)
t=n.am(t)
k=m.a
j=k[0]
i=l.a
h=i[0]
g=o[0]
f=k[1]
e=i[1]
d=o[1]
k=k[2]
i=i[2]
o=o[2]
q[15]=1
q[14]=-t
q[13]=-s
q[12]=-r
q[11]=0
q[10]=o
q[9]=i
q[8]=k
q[7]=0
q[6]=d
q[5]=e
q[4]=f
q[3]=0
q[2]=g
q[1]=h
q[0]=j
b.dx=p
p.aM(-$.c.d.b.a[1])
j=b.dx
q=$.c
h=q.d.a.a
j.aq(0,-h[0],-h[1]+q.e.e*2,-h[2])
h=b.y2.a
b.dx.aq(0,h[0],h[1],0)}t=new Float32Array(16)
new T.O(t).R()
s=$.c.a
r=s.width
s=s.height
if(typeof r!=="number")return r.bJ()
if(typeof s!=="number")return H.dm(s)
c=Math.tan(0.5235987755982988)
t[0]=0
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=0
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=0
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=0
t[0]=1/(c*(r/s))
t[5]=1/c
t[10]=-1.0077220077220077
t[11]=-1
t[14]=-1.0038610038610039
$.i.depthRange(0.2,130)
s=$.i;(s&&C.d).ar(s,b.Q,!1,t)
t=$.i;(t&&C.d).ar(t,b.y,!1,b.cy.a)
t=$.i;(t&&C.d).ar(t,b.z,!1,b.dx.a)
t=$.i
s=b.cx
r=b.x2.a;(t&&C.d).bG(t,s,r[0],r[1],r[2],r[3])
r=$.i;(r&&C.d).Z(r,a,b.a)
$.i.bufferData(a,b.f,35048)
r=$.i;(r&&C.d).Z(r,a,b.c)
$.i.bufferData(a,b.x,35048)
$.i.drawElements(4,6*b.id,5123,0)
b.id=0},
bu:function(){var t,s,r,q,p,o,n=this,m=34962
n.Q=$.i.getUniformLocation(n.fy.a,"perspectiveMatrix")
n.y=$.i.getUniformLocation(n.fy.a,"objectMatrix")
n.z=$.i.getUniformLocation(n.fy.a,"viewMatrix")
t=n.fy
s=$.i;(s&&C.d).bH(s,t.a)
n.cx=$.i.getUniformLocation(n.fy.a,"u_col")
n.dy=$.i.getAttribLocation(n.fy.a,"a_pos")
n.fr=$.i.getAttribLocation(n.fy.a,"a_sprite")
$.i.enableVertexAttribArray(n.dy)
$.i.enableVertexAttribArray(n.fr)
n.a=$.i.createBuffer()
n.c=$.i.createBuffer()
n.b=$.i.createBuffer()
t=n.e=new Int16Array(6144)
n.f=new Float32Array(12288)
n.x=new Float32Array(16384)
for(r=0;r<1024;++r){s=r*6
q=4*r
if(s>=6144)return H.k(t,s)
t[s]=q
p=s+1
o=2+q
if(p>=6144)return H.k(t,p)
t[p]=o
p=s+2
if(p>=6144)return H.k(t,p)
t[p]=3+q
p=s+3
if(p>=6144)return H.k(t,p)
t[p]=q
p=s+4
if(p>=6144)return H.k(t,p)
t[p]=1+q
s+=5
if(s>=6144)return H.k(t,s)
t[s]=o}t=$.i;(t&&C.d).Z(t,34963,n.b)
$.i.bufferData(34963,n.e,35048)
t=$.i;(t&&C.d).Z(t,m,n.a)
$.i.bufferData(m,n.f,35048)
$.i.vertexAttribPointer(n.dy,3,5126,!1,0,0)
t=$.i;(t&&C.d).Z(t,m,n.c)
$.i.bufferData(m,n.x,35048)
$.i.vertexAttribPointer(n.fr,4,5126,!1,0,0)}}
M.ck.prototype={
b0:function(a,b){var t,s,r,q,p,o,n,m={}
m.a=m.b=null
t=new XMLHttpRequest()
m.c=t
s=u.u
r=s.a(new M.cl(m))
u.Z.a(null)
q=u.V
W.aA(t,"load",r,!1,q)
C.k.ao(m.c,"GET",a,!1)
m.c.send()
t=new XMLHttpRequest()
m.c=t
W.aA(t,"load",s.a(new M.cm(m)),!1,q)
C.k.ao(m.c,"GET",b,!1)
m.c.send()
p=this.aH(m.b,35633)
o=this.aH(m.a,35632)
n=$.i.createProgram()
$.i.attachShader(n,p)
$.i.attachShader(n,o)
$.i.linkProgram(n)
if(!H.dQ(H.ex($.i.getProgramParameter(n,35714))))H.aH($.i.getProgramInfoLog(n))
this.a=n},
aH:function(a,b){var t=$.i.createShader(b)
$.i.shaderSource(t,a)
$.i.compileShader(t)
if(!H.dQ(H.ex($.i.getShaderParameter(t,35713))))throw H.h($.i.getShaderInfoLog(t))
return t}}
M.cl.prototype={
$1:function(a){var t
u.V.a(a)
t=this.a
return t.b=t.c.responseText},
$S:6}
M.cm.prototype={
$1:function(a){var t
u.V.a(a)
t=this.a
return t.a=t.c.responseText},
$S:6}
M.n.prototype={}
M.cI.prototype={}
M.cG.prototype={
b1:function(a){var t,s,r=document.createElement("img")
this.a=$.i.createTexture()
C.C.saU(r,a)
t=u.L
s=t.k("~(1)?").a(new M.cH(this,r))
u.Z.a(null)
W.aA(r,"load",s,!1,t.c)}}
M.cH.prototype={
$1:function(a){var t,s=3553,r=$.i,q=this.a;(r&&C.d).ak(r,s,q.a)
$.i.pixelStorei(37440,1)
r=$.i
t=this.b;(r&&C.d).bE(r,s,0,6408,6408,5121,t)
$.i.texParameteri(s,10240,9728)
$.i.texParameteri(s,10241,9728)
r=t.width
r.toString
q.b=r
t=t.height
t.toString
q.c=t
t=$.i;(t&&C.d).ak(t,s,null)},
$S:23}
M.ci.prototype={
a7:function(){return Math.sqrt(Math.pow($.c.d.a.a[0]-this.r.a[0],2)+Math.pow($.c.d.a.a[2]-this.r.a[2],2))},
bA:function(){var t,s,r=this
if(r.a7()<=4)return
if(C.a.l($.c.ch,60)===0){t=r.z
t.sw(0,M.dx(-100,100)/100*0.02)
t.sC(0,M.dx(-100,100)/100*0.02)}t=r.r
s=r.z.a
t.sw(0,t.a[0]+s[0])
t=r.r
t.sC(0,t.a[2]+s[2])
t=r.r
s=t.a[0]
if(s<$.c.d.a.a[0])t.sw(0,s+0.02)
t=r.r
s=t.a[0]
if(s>$.c.d.a.a[0])t.sw(0,s-0.02)
t=r.r
s=t.a[2]
if(s<$.c.d.a.a[2])t.sC(0,s+0.02)
t=r.r
s=t.a[2]
if(s>$.c.d.a.a[2])t.sC(0,s-0.02)},
D:function(a,b,c){this.r=a
this.x=b
this.y=c}}
M.by.prototype={
O:function(a,b,c){var t,s=this,r=s.b.a,q=r[0],p=r[2]
r=r[1]
t=new T.b(new Float32Array(3))
t.i(q,p,r)
s.N(t,s.c,s.e)},
S:function(a,b){var t,s,r,q,p=this,o=p.b.a,n=o[0]
o=o[2]
t=p.c.a[0]
s=new T.a(new Float32Array(4))
s.h(n,-o,t,t)
t=a.a
o=t[0]
n=t[2]
r=new T.a(new Float32Array(4))
r.h(o-1.25,n+1.25,2.5,2.5)
if(M.af(s,r)){o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,-o,s,s)
s=b.a[0]
o=t[2]
n=new T.a(new Float32Array(4))
n.h(s-1.25,o+1.25,2.5,2.5)
n=!M.af(r,n)
o=n}else o=!1
q=o?0:-1
o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,-o,s,s)
s=t[0]
o=t[2]
n=new T.a(new Float32Array(4))
n.h(s-1.25,o+1.25,2.5,2.5)
if(M.af(r,n)){o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,-o,s,s)
t=t[0]
s=b.a[2]
o=new T.a(new Float32Array(4))
o.h(t-1.25,s+1.25,2.5,2.5)
o=!M.af(r,o)}else o=!1
return o?1:q},
gaG:function(){return this.r}}
M.cj.prototype={}
M.cs.prototype={
bn:function(){var t,s,r,q,p,o,n,m,l,k
for(t=this.e,s=0;s<t.length;++s){r=t[s]
if(r.Q>0){$.c.r.r=!0
if(r.a7()<8){r.d=!0
q=$.c
if(q.d.x){r.Q-=50
r.ch=100
q.f.e.Y()}}else r.d=!1
q=r.ch
q=(q>0?r.ch=q-1:q)>0&&C.a.l($.c.ch,15)>7.5
p=r.a
if(q){q=new Float32Array(4)
q[3]=1
q[2]=0
q[1]=0
q[0]=1
p.c=new T.a(q)
q=r.b
o=new Float32Array(4)
o[3]=1
o[2]=0
o[1]=0
o[0]=1
q.c=new T.a(o)
o=r.c
n=new Float32Array(4)
n[3]=1
n[2]=0
n[1]=0
n[0]=1
o.c=new T.a(n)}else{q=new Float32Array(4)
q[3]=1
q[2]=1
q[1]=1
q[0]=1
p.c=new T.a(q)
q=r.b
o=new Float32Array(4)
o[3]=1
o[2]=1
o[1]=1
o[0]=1
q.c=new T.a(o)
o=r.c
n=new Float32Array(4)
n[3]=1
n[2]=1
n[1]=1
n[0]=1
o.c=new T.a(n)}r.y.a[1]=$.c.d.b.a[1]
r.bA()
n=++r.f
if(r.d)r.cx=[0,2]
else r.cx=[0,1]
if(n>10){r.f=0;++r.e}if(r.e>1)r.e=0
if(r.a7()<4){n=$.c
n.d.z-=0.1
n.e.dx=50
if(!n.fr)n.dy="Multiple injuries"
if(C.a.l(n.ch,30)===0)n.f.b.Y()}if(r.a7()<32){$.c.b.U()
n=r.cx
m=r.e
if(m>=2)return H.k(n,m)
m=n[m]
if(m===0){q=$.c.b
o=r.x
n=o.a[0]
m=r.r.a
l=m[1]
k=new Float32Array(3)
k[0]=-n/2
k[1]=l
k[2]=0
r=r.y
l=m[0]
m=m[2]
n=new Float32Array(3)
n[0]=l
n[1]=0
n[2]=m
q.u(p.a,new T.b(k),o,p.b,r,new T.b(n),p.c)}else if(m===1){p=$.c.b
o=r.x
n=o.a[0]
m=r.r.a
l=m[1]
k=new Float32Array(3)
k[0]=-n/2
k[1]=l
k[2]=0
r=r.y
l=m[0]
m=m[2]
n=new Float32Array(3)
n[0]=l
n[1]=0
n[2]=m
p.u(q.a,new T.b(k),o,q.b,r,new T.b(n),q.c)}else if(m===2){q=$.c.b
p=r.x
n=p.a[0]
m=r.r.a
l=m[1]
k=new Float32Array(3)
k[0]=-n/2
k[1]=l
k[2]=0
r=r.y
l=m[0]
m=m[2]
n=new Float32Array(3)
n[0]=l
n[1]=0
n[2]=m
q.u(o.a,new T.b(k),p,o.b,r,new T.b(n),o.c)}$.c.b.U()
$.c.b.k1=!0}}}},
bp:function(){var t,s,r,q
for(t=this.b,s=0;r=t.length,q=C.j.n(r/2),s<q;++s){if(s>=r)return H.k(t,s)
r=t[s]
if(r!=null)r.a8()}for(s=q;r=t.length,s<r;++s){if(s<0)return H.k(t,s)
r=t[s]
if(r!=null)r.a_()}},
bq:function(){var t,s,r
for(t=this.c,s=0;s<t.length;++s){r=t[s]
if(r!=null){r.a8()
if(s>=t.length)return H.k(t,s)
t[s].a9()}}for(s=0;s<t.length;++s){r=t[s]
if(r!=null){r.a_()
if(s>=t.length)return H.k(t,s)
t[s].aa()}}},
bo:function(){var t,s,r,q,p,o,n
for(t=this.d,s=0;s<t.length;++s){r=t[s]
if(r!=null){q=r.b.a
p=q[0]
o=q[2]
q=q[1]
n=new Float32Array(3)
n[0]=p
n[1]=o
n[2]=q
r.N(new T.b(n),r.c,r.e)}}},
aZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=1e5,a1=2001,a2=-319
for(t=b.d,s=0;s<20;++s)for(r=s*4,q=0;q<20;++q){p=C.a.n(C.a.l(C.c.p(a0),33))
o=p>=10&&p<20?2:0
if(p>=20&&p<30)o=5
if(p>=30&&p<33)o=7
C.b.sm(t,t.length+1)
n=t.length
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
m=new Float32Array(2)
m[0]=0
m[1]=0
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
m=new M.by(o,a,a,a,a,new T.b(m))
m.ad(o,a,a,a,a)
C.b.t(t,n-1,m)
if(o===7){n=t.length
m=n-1
if(m<0)return H.k(t,m)
t[m].r=!0}n=t.length
m=n-1
if(m<0)return H.k(t,m)
m=t[m]
n=new Float32Array(3)
n[0]=r
n[1]=2
n[2]=q*4
l=new Float32Array(2)
l[0]=4
l[1]=4
k=new Float32Array(3)
k[0]=1.5707963267948966
k[1]=0
k[2]=0
m.b=new T.b(n)
m.c=new T.l(l)
m.e=new T.b(k)}for(t=b.c,s=0;s<20;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(1))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=new Float32Array(3)
r[0]=s*4
r[1]=-2
r[2]=0
m=new Float32Array(2)
m[0]=4
m[1]=4
l=new Float32Array(3)
l[0]=0
l[1]=0
l[2]=0
n.D(new T.b(r),new T.l(m),new T.b(l))}for(s=0;s<20;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(1))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=new Float32Array(3)
r[0]=s*4
r[1]=-2
r[2]=-80
m=new Float32Array(2)
m[0]=4
m[1]=4
l=new Float32Array(3)
l[0]=0
l[1]=0
l[2]=0
n.D(new T.b(r),new T.l(m),new T.b(l))}for(s=0;s<20;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(1))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=new Float32Array(3)
r[0]=0
r[1]=-2
r[2]=-s*4
m=new Float32Array(2)
m[0]=4
m[1]=4
l=new Float32Array(3)
l[0]=0
l[1]=0
l[2]=0
n.D(new T.b(r),new T.l(m),new T.b(l))}for(s=0;s<20;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(1))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=new Float32Array(3)
r[0]=80
r[1]=-2
r[2]=-s*4
m=new Float32Array(2)
m[0]=4
m[1]=4
l=new Float32Array(3)
l[0]=0
l[1]=0
l[2]=0
n.D(new T.b(r),new T.l(m),new T.b(l))}for(s=0;s<40;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(8))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=C.a.n(C.a.l(C.c.p(a0),36)+5)
m=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),36)+5)
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/2*4+m/1000*0.1
j[1]=-2
j[2]=-l/2*4+k/1000*0.1
r=new Float32Array(2)
r[0]=2
r[1]=4
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
n.D(new T.b(j),new T.l(r),new T.b(m))}for(s=0;s<40;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(6))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=C.a.n(C.a.l(C.c.p(a0),30)+8)
m=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),36)+5)
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/2*4+0.14+m/1000*0.1
j[1]=-2
j[2]=-l/2*4+0.21+k/1000*0.1
r=new Float32Array(2)
r[0]=4
r[1]=4
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
n.D(new T.b(j),new T.l(r),new T.b(m))}for(s=0;s<20;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.ay(4))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=C.a.n(C.a.l(C.c.p(a0),32)+7)
m=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),36)+5)
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/2*4+m/1000*0.1
j[1]=-2
j[2]=-l/2*4+k/1000*0.1
r=new Float32Array(2)
r[0]=4
r[1]=4
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
n.D(new T.b(j),new T.l(r),new T.b(m))}for(t=b.b,s=0;s<200;++s){C.b.sm(t,t.length+1)
r=t.length
n=$.p()
m=new Float32Array(4)
m[3]=16
m[2]=16
m[1]=18
m[0]=36
l=new Float32Array(4)
l[3]=1
l[2]=1
l[1]=1
l[0]=1
k=new Float32Array(4)
k[3]=0
k[2]=0
k[1]=0
k[0]=0
k=new Float32Array(4)
k[3]=1
k[2]=1
k[1]=1
k[0]=1
C.b.t(t,r-1,M.cw(1,new M.n(n,new T.a(m),new T.a(l))))
l=t.length
m=l-1
if(m<0)return H.k(t,m)
m=t[m]
r=C.a.n(C.a.l(C.c.p(a0),a2))
n=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),a2))
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/4+n/1000*0.1
j[1]=0
j[2]=-l/4+k/1000*0.1
r=new Float32Array(2)
r[0]=2
r[1]=2
n=new Float32Array(3)
n[0]=0
n[1]=0
n[2]=0
m.b=new T.b(j)
m.c=new T.l(r)
m.e=new T.b(n)}for(s=0;s<100;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.cw(9,a))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=C.a.n(C.a.l(C.c.p(a0),a2))
m=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),a2))
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/4+m/1000*0.1
j[1]=0
j[2]=-l/4+k/1000*0.1
r=new Float32Array(2)
r[0]=2
r[1]=2
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
n.b=new T.b(j)
n.c=new T.l(r)
n.e=new T.b(m)}for(s=0;s<50;++s){C.b.sm(t,t.length+1)
C.b.t(t,t.length-1,M.cw(10,a))
r=t.length
n=r-1
if(n<0)return H.k(t,n)
n=t[n]
r=C.a.n(C.a.l(C.c.p(a0),a2))
m=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
l=C.a.n(C.a.l(C.c.p(a0),a2))
k=C.a.n(C.a.l(C.c.p(a0),a1)+-1000)
j=new Float32Array(3)
j[0]=r/4+m/1000*0.1
j[1]=-2.125
j[2]=-l/4+k/1000*0.1
r=new Float32Array(2)
r[0]=2.875
r[1]=4.25
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
n.b=new T.b(j)
n.c=new T.l(r)
n.e=new T.b(m)}t=$.p()
r=new T.a(new Float32Array(4))
r.h(7,81,128,75)
n=new T.a(new Float32Array(4))
n.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
t=M.cw(0,new M.n(t,r,n))
b.f=t
r=new T.b(new Float32Array(3))
r.i(-10,-23,-85)
n=new T.l(new Float32Array(2))
n.q(100,30)
m=new T.b(new Float32Array(3))
m.i(0,0,0)
t.D(r,n,m)
for(t=b.e,s=0;s<40;++s){C.b.sm(t,t.length+1)
r=t.length
n=$.p()
m=new Float32Array(4)
m[3]=17
m[2]=25
m[1]=62
m[0]=150
l=new Float32Array(4)
l[3]=1
l[2]=1
l[1]=1
l[0]=1
k=new Float32Array(4)
k[3]=0
k[2]=0
k[1]=0
k[0]=0
k=new Float32Array(4)
k[3]=1
k[2]=1
k[1]=1
k[0]=1
k=new Float32Array(4)
k[3]=17
k[2]=25
k[1]=86
k[0]=150
j=new Float32Array(4)
j[3]=1
j[2]=1
j[1]=1
j[0]=1
i=new Float32Array(4)
i[3]=0
i[2]=0
i[1]=0
i[0]=0
i=new Float32Array(4)
i[3]=1
i[2]=1
i[1]=1
i[0]=1
i=new Float32Array(4)
i[3]=17
i[2]=25
i[1]=62
i[0]=187
h=new Float32Array(4)
h[3]=1
h[2]=1
h[1]=1
h[0]=1
g=new Float32Array(4)
g[3]=0
g[2]=0
g[1]=0
g[0]=0
g=new Float32Array(4)
g[3]=1
g[2]=1
g[1]=1
g[0]=1
g=new Float32Array(3)
g[0]=0
g[1]=0
g[2]=0
f=new Float32Array(2)
f[0]=0
f[1]=0
e=new Float32Array(3)
e[0]=0
e[1]=0
e[2]=0
d=new Float32Array(3)
d[0]=0
d[1]=0
d[2]=0
c=new Array(2)
c.fixed$length=Array
C.b.t(t,r-1,new M.ci(new M.n(n,new T.a(m),new T.a(l)),new M.n(n,new T.a(k),new T.a(j)),new M.n(n,new T.a(i),new T.a(h)),new T.b(g),new T.l(f),new T.b(e),new T.b(d),c))
c=t.length
d=c-1
if(d<0)return H.k(t,d)
d=t[d]
r=C.a.n(C.a.l(C.c.p(a0),36)+5)
n=C.a.n(C.a.l(C.c.p(a0),36)+5)
m=new Float32Array(3)
m[0]=r/2*4
m[1]=-0.019999999999999907
m[2]=-n/2*4
r=new Float32Array(2)
r[0]=3
r[1]=2.04
n=new Float32Array(3)
n[0]=0
n[1]=0
n[2]=0
d.D(new T.b(m),new T.l(r),new T.b(n))}}}
M.ad.prototype={
O:function(a,b,c){var t,s,r=this,q=a!=null&&b!=null&&c!=null,p=$.c,o=r.d,n=r.f
if(q){q=p.b
q.toString
q.u(o.a,a,b,o.b,c,n,o.c)}else{q=p.b
p=r.b
t=r.c
s=r.e
q.toString
q.u(o.a,p,t,o.b,s,n,o.c)}},
a8:function(){var t,s=this,r=s.b.a,q=r[0],p=r[1]
r=r[2]
t=new T.b(new Float32Array(3))
t.i(q,p,r)
r=s.c.a
p=r[0]
r=r[1]
q=new T.l(new Float32Array(2))
q.q(p,r)
s.O(t,q,s.e)},
a9:function(){var t,s,r=this,q=r.b.a,p=q[0],o=q[1]
q=q[2]
t=r.c.a[0]
s=new T.b(new Float32Array(3))
s.i(p,o,q+t)
t=r.c.a
q=t[0]
t=t[1]
p=new T.l(new Float32Array(2))
p.q(q,t)
r.O(s,p,r.e)},
a_:function(){var t,s,r=this,q=r.b.a,p=q[2],o=r.c.a[0],n=q[1]
q=q[0]
t=new T.b(new Float32Array(3))
t.i(-p-o,n,q)
q=r.c.a
n=q[0]
q=q[1]
p=new T.l(new Float32Array(2))
p.q(n,q)
q=r.e.a
n=q[0]
o=q[1]
q=q[2]
s=new T.b(new Float32Array(3))
s.i(n,o+1.5707963267948966,q)
r.O(t,p,s)},
aa:function(){var t,s,r=this,q=r.b.a,p=q[2],o=r.c.a[0],n=q[1]
q=q[0]
t=new T.b(new Float32Array(3))
t.i(-p-o,n,q+o)
o=r.c.a
q=o[0]
o=o[1]
p=new T.l(new Float32Array(2))
p.q(q,o)
o=r.e.a
q=o[0]
n=o[1]
o=o[2]
s=new T.b(new Float32Array(3))
s.i(q,n+1.5707963267948966,o)
r.O(t,p,s)},
D:function(a,b,c){this.b=a
this.c=b
this.e=c},
ad:function(a,b,c,d,e){var t,s,r,q=this
if(q.d==null)switch(q.a){case 0:t=$.p()
s=new T.a(new Float32Array(4))
s.h(0,0,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 1:t=$.p()
s=new T.a(new Float32Array(4))
s.h(36,0,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 2:t=$.p()
s=new T.a(new Float32Array(4))
s.h(18,0,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 3:t=$.p()
s=new T.a(new Float32Array(4))
s.h(36,0,16,16)
r=new T.a(new Float32Array(4))
r.h(0.5,0.3,0.2,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 4:t=$.p()
s=new T.a(new Float32Array(4))
s.h(18,18,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 5:t=$.p()
s=new T.a(new Float32Array(4))
s.h(0,18,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 6:t=$.p()
s=new T.a(new Float32Array(4))
s.h(54,18,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 7:t=$.p()
s=new T.a(new Float32Array(4))
s.h(54,0,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 8:t=$.p()
s=new T.a(new Float32Array(4))
s.h(72,0,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 9:t=$.p()
s=new T.a(new Float32Array(4))
s.h(72,18,16,16)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break
case 10:t=$.p()
s=new T.a(new Float32Array(4))
s.h(93,0,23,34)
r=new T.a(new Float32Array(4))
r.h(1,1,1,1)
new T.a(new Float32Array(4)).h(0,0,0,0)
new T.a(new Float32Array(4)).h(1,1,1,1)
q.d=new M.n(t,s,r)
break}}}
M.cy.prototype={
bk:function(){var t,s,r,q
for(t=this.c,s=-1,r=0;q=$.c.r.c,r<q.length;++r)if(q[r].gaG()){q=$.c.r.c
if(r>=q.length)return H.k(q,r)
if(q[r].S(t.a,t.b)===1&&s===-1)s=1
q=$.c.r.c
if(r>=q.length)return H.k(q,r)
if(q[r].S(t.a,t.b)===0&&s===-1)s=0
q=$.c.r.c
if(r>=q.length)return H.k(q,r)
if(q[r].S(t.a,t.b)!==-1){q=$.c.r.c
if(r>=q.length)return H.k(q,r)
q=s!==q[r].S(t.a,t.b)}else q=!1
if(q)s=2}for(r=0;q=$.c.r.d,r<q.length;++r){q=q[r]
if(q.r)if(q.S(t.a,t.b)!==-1){this.z-=10
$.c.f.b.Y()
q=$.c
q.b.y1=0.4
q.e.db=100
if(!q.fr)q.dy="Pneumonia"}}}}
M.cB.prototype={}
M.bY.prototype={
O:function(a,b,c){var t=this
t.N(null,null,null)
t.a9()
t.a_()
t.aa()},
a8:function(){this.N(null,null,null)},
a9:function(){var t,s,r=this,q=r.b.a,p=q[0],o=q[1]
q=q[2]
t=r.c.a[0]
s=new T.b(new Float32Array(3))
s.i(p,o,q+t)
t=r.c.a
q=t[0]
t=t[1]
p=new T.l(new Float32Array(2))
p.q(q,t)
r.N(s,p,r.e)},
a_:function(){var t,s,r=this,q=r.b.a,p=q[2],o=r.c.a[0],n=q[1]
q=q[0]
t=new T.b(new Float32Array(3))
t.i(-p-o,n,q)
q=r.c.a
n=q[0]
q=q[1]
p=new T.l(new Float32Array(2))
p.q(n,q)
q=r.e.a
n=q[0]
o=q[1]
q=q[2]
s=new T.b(new Float32Array(3))
s.i(n,o+1.5707963267948966,q)
r.N(t,p,s)},
aa:function(){var t,s,r=this,q=r.b.a,p=q[2],o=r.c.a[0],n=q[1]
q=q[0]
t=new T.b(new Float32Array(3))
t.i(-p-o,n,q+o)
o=r.c.a
q=o[0]
o=o[1]
p=new T.l(new Float32Array(2))
p.q(q,o)
o=r.e.a
q=o[0]
n=o[1]
o=o[2]
s=new T.b(new Float32Array(3))
s.i(q,n+1.5707963267948966,o)
r.N(t,p,s)},
S:function(a,b){var t,s,r,q,p=this,o=p.b.a,n=o[0]
o=o[2]
t=p.c.a[0]
s=new T.a(new Float32Array(4))
s.h(n,o,t,t)
t=a.a
o=t[0]
n=t[2]
r=new T.a(new Float32Array(4))
r.h(o-1.25,n-1.25,2.5,2.5)
if(M.af(s,r)){o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,o,s,s)
s=b.a[0]
o=t[2]
n=new T.a(new Float32Array(4))
n.h(s-1.25,o-1.25,2.5,2.5)
n=!M.af(r,n)
o=n}else o=!1
if(o){o=$.c.d.c
o.a.sw(0,o.b.a[0])
$.c.d.c.d.sw(0,0)
q=0}else q=-1
o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,o,s,s)
s=t[0]
o=t[2]
n=new T.a(new Float32Array(4))
n.h(s-1.25,o-1.25,2.5,2.5)
if(M.af(r,n)){o=p.b.a
n=o[0]
o=o[2]
s=p.c.a[0]
r=new T.a(new Float32Array(4))
r.h(n,o,s,s)
t=t[0]
s=b.a[2]
o=new T.a(new Float32Array(4))
o.h(t-1.25,s-1.25,2.5,2.5)
o=!M.af(r,o)}else o=!1
if(o){o=$.c.d.c
o.a.sC(0,o.b.a[2])
$.c.d.c.d.sC(0,0)
q=1}return q},
gaG:function(){return this.r}};(function aliases(){var t=J.z.prototype
t.aW=t.j
t=J.a3.prototype
t.aX=t.j
t=P.A.prototype
t.aY=t.aT
t=M.ad.prototype
t.N=t.O})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"hr","fF",2)
t(P,"hs","fG",2)
t(P,"ht","fH",2)
s(P,"eI","hl",0)
r(M.a4.prototype,"gaR","aS",20)
r(M.bA.prototype,"gat","aQ",22)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.o,null)
r(P.o,[H.dA,J.z,J.br,P.q,P.w,H.as,H.a2,H.cJ,H.cv,H.bd,H.a9,P.at,H.cr,H.L,H.c4,H.c7,P.d9,P.aL,P.c0,P.b8,P.B,P.c_,P.b2,P.bP,P.bh,P.A,P.bv,P.b0,P.cT,P.u,P.c6,P.bQ,W.dz,P.cL,P.d5,T.O,T.l,T.b,T.a,M.a4,M.cC,M.bA,M.cn,M.cx,M.cA,M.ck,M.n,M.cI,M.cG,M.ci,M.ad,M.cj,M.cs,M.cy,M.cB])
r(J.z,[J.bC,J.ap,J.a3,J.D,J.aq,J.ab,H.bF,H.aX,W.r,W.a1,W.e,P.G,P.bs,P.bK,P.aw,P.bS,P.bU])
r(J.a3,[J.bJ,J.b5,J.M])
s(J.cq,J.D)
r(J.aq,[J.aR,J.aQ])
r(P.q,[H.bE,H.aZ,P.bT,H.bD,H.bW,H.bL,P.aK,H.c2,P.bI,P.Q,P.bX,P.bV,P.b1,P.bt,P.bu])
s(H.aN,P.w)
s(H.aS,H.aN)
s(H.b3,H.aS)
s(H.bH,P.bT)
r(H.a9,[H.bR,H.dn,H.dp,H.dq,P.cP,P.cO,P.cQ,P.cR,P.da,P.cU,P.d0,P.cX,P.cY,P.cZ,P.cW,P.d_,P.cV,P.d3,P.d4,P.d2,P.d1,P.cE,P.cF,P.dg,P.d7,P.d6,P.d8,P.cu,W.cS,P.cN,P.dd,P.dh,P.dv,P.dw,P.cg,P.ch,A.dl,M.cD,M.co,M.cp,M.cl,M.cm,M.cH])
r(H.bR,[H.bO,H.ak])
s(H.bZ,P.aK)
s(P.aT,P.at)
s(H.ac,P.aT)
s(H.au,H.aX)
r(H.au,[H.b9,H.bb])
s(H.ba,H.b9)
s(H.aV,H.ba)
s(H.bc,H.bb)
s(H.aW,H.bc)
s(H.aU,H.aV)
s(H.bG,H.aW)
s(H.be,H.c2)
s(P.ae,P.c0)
s(P.c5,P.bh)
r(P.Q,[P.av,P.bB])
r(W.r,[W.aY,W.aO,W.az,P.m,P.aM])
r(W.aY,[W.d,W.T])
s(W.f,W.d)
r(W.f,[W.bp,W.bq,W.a8,W.bz,W.aP,W.bM])
s(W.ao,W.aO)
r(W.e,[W.E,W.I])
s(W.U,W.E)
s(W.b7,P.b2)
s(W.c1,W.b7)
s(W.c3,P.bP)
s(P.cM,P.cL)
r(P.m,[P.R,P.an])
s(P.ai,P.R)
s(P.aj,P.aM)
r(M.ad,[M.by,M.bY])
t(H.b9,P.A)
t(H.ba,H.a2)
t(H.bb,P.A)
t(H.bc,H.a2)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{v:"int",y:"double",a0:"num",V:"String",cb:"bool",u:"Null",N:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(@)","~(~())","u(@)","u()","u(U*)","V*(I*)","@(@)","@(@,V)","@(V)","u(~())","u(o,ax)","B<@>(@)","~(o?,o?)","~(e)","@(@,@)","~(@,@)","~(G)","~(a1)","v(v,o)","~(I*)","u(G*)","~(a0*)","u(e*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fV(v.typeUniverse,JSON.parse('{"M":"a3","bJ":"a3","b5":"a3","hQ":"e","hW":"e","hR":"m","hU":"R","hP":"d","hX":"d","i_":"d","ib":"I","hS":"f","hZ":"f","hY":"T","hT":"E","bC":{"cb":[]},"ap":{"u":[]},"a3":{"am":[]},"D":{"N":["1"],"w":["1"]},"cq":{"D":["1"],"N":["1"],"w":["1"]},"aq":{"y":[],"a0":[]},"aR":{"y":[],"v":[],"a0":[]},"aQ":{"y":[],"a0":[]},"ab":{"V":[]},"bE":{"q":[]},"aZ":{"q":[]},"aN":{"w":["1"]},"aS":{"w":["1"]},"b3":{"aS":["1"],"w":["1"]},"bH":{"q":[]},"bD":{"q":[]},"bW":{"q":[]},"bd":{"ax":[]},"a9":{"am":[]},"bR":{"am":[]},"bO":{"am":[]},"ak":{"am":[]},"bL":{"q":[]},"bZ":{"q":[]},"ac":{"at":["1","2"],"eb":["1","2"],"ct":["1","2"]},"bF":{"e4":[]},"aX":{"b4":[]},"au":{"ar":["1"],"b4":[]},"aV":{"A":["y"],"ar":["y"],"N":["y"],"b4":[],"w":["y"],"a2":["y"]},"aW":{"A":["v"],"ar":["v"],"N":["v"],"b4":[],"w":["v"],"a2":["v"]},"aU":{"A":["y"],"fk":[],"ar":["y"],"N":["y"],"b4":[],"w":["y"],"a2":["y"],"A.E":"y"},"bG":{"A":["v"],"fl":[],"ar":["v"],"N":["v"],"b4":[],"w":["v"],"a2":["v"],"A.E":"v"},"c2":{"q":[]},"be":{"q":[]},"aL":{"q":[]},"ae":{"c0":["1"]},"B":{"aa":["1"]},"bh":{"em":[]},"c5":{"bh":[],"em":[]},"aT":{"at":["1","2"],"ct":["1","2"]},"at":{"ct":["1","2"]},"y":{"a0":[]},"v":{"a0":[]},"aK":{"q":[]},"bT":{"q":[]},"bI":{"q":[]},"Q":{"q":[]},"av":{"q":[]},"bB":{"q":[]},"bX":{"q":[]},"bV":{"q":[]},"b1":{"q":[]},"bt":{"q":[]},"b0":{"q":[]},"bu":{"q":[]},"c6":{"ax":[]},"f":{"d":[],"r":[]},"bp":{"d":[],"r":[]},"bq":{"d":[],"r":[]},"a8":{"d":[],"r":[]},"T":{"r":[]},"d":{"r":[]},"bz":{"d":[],"r":[]},"ao":{"r":[]},"aO":{"r":[]},"aP":{"d":[],"r":[]},"U":{"e":[]},"aY":{"r":[]},"I":{"e":[]},"bM":{"d":[],"r":[]},"E":{"e":[]},"az":{"r":[]},"b7":{"b2":["1"]},"c1":{"b7":["1"],"b2":["1"]},"ai":{"m":[],"r":[]},"aj":{"r":[]},"m":{"r":[]},"R":{"m":[],"r":[]},"aM":{"r":[]},"an":{"m":[],"r":[]},"by":{"ad":[]},"bY":{"ad":[]}}'))
H.fU(v.typeUniverse,JSON.parse('{"aN":1,"au":1,"bP":1,"aT":2}'))
0
var u=(function rtii(){var t=H.eK
return{n:t("aL"),G:t("G"),I:t("T"),w:t("a1"),C:t("q"),B:t("e"),Y:t("am"),d:t("aa<@>"),r:t("w<y>"),N:t("w<@>"),s:t("D<V>"),b:t("D<@>"),m:t("D<y*>"),T:t("ap"),g:t("M"),E:t("ar<@>"),j:t("N<@>"),J:t("ct<@,@>"),P:t("u"),K:t("o"),l:t("ax"),R:t("V"),U:t("b5"),k:t("ae<G>"),L:t("c1<e*>"),x:t("B<G>"),c:t("B<@>"),a:t("B<v>"),y:t("cb"),W:t("cb(o)"),i:t("y"),z:t("@"),O:t("@()"),v:t("@(o)"),Q:t("@(o,ax)"),e:t("@(@,@)"),p:t("v"),h:t("G*"),a5:t("e4*"),aS:t("a8*"),S:t("U*"),A:t("0&*"),_:t("o*"),V:t("I*"),D:t("aw*"),c5:t("cb*"),bc:t("aa<u>?"),X:t("o?"),F:t("b8<@,@>?"),o:t("@(e)?"),Z:t("~()?"),cE:t("~(G)?"),t:t("~(a1)?"),bH:t("~(U*)?"),u:t("~(I*)?"),q:t("a0"),H:t("~"),M:t("~()"),f:t("~(a0)")}})();(function constants(){C.f=P.ai.prototype
C.n=P.aj.prototype
C.q=W.a8.prototype
C.B=P.an.prototype
C.k=W.ao.prototype
C.C=W.aP.prototype
C.D=J.z.prototype
C.b=J.D.prototype
C.j=J.aQ.prototype
C.a=J.aR.prototype
C.E=J.ap.prototype
C.h=J.aq.prototype
C.i=J.ab.prototype
C.F=J.M.prototype
C.l=H.aU.prototype
C.r=J.bJ.prototype
C.d=P.aw.prototype
C.m=J.b5.prototype
C.t=W.az.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.y=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.x=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.p=function(hooks) { return hooks; }

C.c=new P.d5()
C.e=new P.c5()
C.A=new P.c6()})();(function staticFields(){$.eo=null
$.S=0
$.e2=null
$.e1=null
$.eL=null
$.eG=null
$.eP=null
$.di=null
$.dr=null
$.dT=null
$.aD=null
$.bk=null
$.bl=null
$.dM=!1
$.t=C.e
$.K=H.aG([],H.eK("D<o>"))
$.bN=null
$.dE=null
$.i=null
$.c=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazyOld
t($,"hV","eT",function(){return H.hz("_$dart_dartClosure")})
t($,"i0","eU",function(){return H.W(H.cK({
toString:function(){return"$receiver$"}}))})
t($,"i1","eV",function(){return H.W(H.cK({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"i2","eW",function(){return H.W(H.cK(null))})
t($,"i3","eX",function(){return H.W(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"i6","f_",function(){return H.W(H.cK(void 0))})
t($,"i7","f0",function(){return H.W(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"i5","eZ",function(){return H.W(H.el(null))})
t($,"i4","eY",function(){return H.W(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"i9","f2",function(){return H.W(H.el(void 0))})
t($,"i8","f1",function(){return H.W(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"ia","dV",function(){return P.fE()})
s($,"iq","p",function(){return M.fD("../gfx/Sprites.png")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({Blob:J.z,CanvasRenderingContext2D:J.z,DOMError:J.z,File:J.z,MediaError:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,WebGL2RenderingContext:J.z,WebGLShader:J.z,SQLError:J.z,ArrayBuffer:H.bF,ArrayBufferView:H.aX,Float32Array:H.aU,Int16Array:H.bG,HTMLAudioElement:W.f,HTMLBRElement:W.f,HTMLBaseElement:W.f,HTMLBodyElement:W.f,HTMLButtonElement:W.f,HTMLContentElement:W.f,HTMLDListElement:W.f,HTMLDataElement:W.f,HTMLDataListElement:W.f,HTMLDetailsElement:W.f,HTMLDialogElement:W.f,HTMLDivElement:W.f,HTMLEmbedElement:W.f,HTMLFieldSetElement:W.f,HTMLHRElement:W.f,HTMLHeadElement:W.f,HTMLHeadingElement:W.f,HTMLHtmlElement:W.f,HTMLIFrameElement:W.f,HTMLInputElement:W.f,HTMLLIElement:W.f,HTMLLabelElement:W.f,HTMLLegendElement:W.f,HTMLLinkElement:W.f,HTMLMapElement:W.f,HTMLMediaElement:W.f,HTMLMenuElement:W.f,HTMLMetaElement:W.f,HTMLMeterElement:W.f,HTMLModElement:W.f,HTMLOListElement:W.f,HTMLObjectElement:W.f,HTMLOptGroupElement:W.f,HTMLOptionElement:W.f,HTMLOutputElement:W.f,HTMLParagraphElement:W.f,HTMLParamElement:W.f,HTMLPictureElement:W.f,HTMLPreElement:W.f,HTMLProgressElement:W.f,HTMLQuoteElement:W.f,HTMLScriptElement:W.f,HTMLShadowElement:W.f,HTMLSlotElement:W.f,HTMLSourceElement:W.f,HTMLSpanElement:W.f,HTMLStyleElement:W.f,HTMLTableCaptionElement:W.f,HTMLTableCellElement:W.f,HTMLTableDataCellElement:W.f,HTMLTableHeaderCellElement:W.f,HTMLTableColElement:W.f,HTMLTableElement:W.f,HTMLTableRowElement:W.f,HTMLTableSectionElement:W.f,HTMLTemplateElement:W.f,HTMLTextAreaElement:W.f,HTMLTimeElement:W.f,HTMLTitleElement:W.f,HTMLTrackElement:W.f,HTMLUListElement:W.f,HTMLUnknownElement:W.f,HTMLVideoElement:W.f,HTMLDirectoryElement:W.f,HTMLFontElement:W.f,HTMLFrameElement:W.f,HTMLFrameSetElement:W.f,HTMLMarqueeElement:W.f,HTMLElement:W.f,HTMLAnchorElement:W.bp,HTMLAreaElement:W.bq,HTMLCanvasElement:W.a8,Document:W.T,HTMLDocument:W.T,XMLDocument:W.T,DOMException:W.a1,SVGAElement:W.d,SVGAnimateElement:W.d,SVGAnimateMotionElement:W.d,SVGAnimateTransformElement:W.d,SVGAnimationElement:W.d,SVGCircleElement:W.d,SVGClipPathElement:W.d,SVGDefsElement:W.d,SVGDescElement:W.d,SVGDiscardElement:W.d,SVGEllipseElement:W.d,SVGFEBlendElement:W.d,SVGFEColorMatrixElement:W.d,SVGFEComponentTransferElement:W.d,SVGFECompositeElement:W.d,SVGFEConvolveMatrixElement:W.d,SVGFEDiffuseLightingElement:W.d,SVGFEDisplacementMapElement:W.d,SVGFEDistantLightElement:W.d,SVGFEFloodElement:W.d,SVGFEFuncAElement:W.d,SVGFEFuncBElement:W.d,SVGFEFuncGElement:W.d,SVGFEFuncRElement:W.d,SVGFEGaussianBlurElement:W.d,SVGFEImageElement:W.d,SVGFEMergeElement:W.d,SVGFEMergeNodeElement:W.d,SVGFEMorphologyElement:W.d,SVGFEOffsetElement:W.d,SVGFEPointLightElement:W.d,SVGFESpecularLightingElement:W.d,SVGFESpotLightElement:W.d,SVGFETileElement:W.d,SVGFETurbulenceElement:W.d,SVGFilterElement:W.d,SVGForeignObjectElement:W.d,SVGGElement:W.d,SVGGeometryElement:W.d,SVGGraphicsElement:W.d,SVGImageElement:W.d,SVGLineElement:W.d,SVGLinearGradientElement:W.d,SVGMarkerElement:W.d,SVGMaskElement:W.d,SVGMetadataElement:W.d,SVGPathElement:W.d,SVGPatternElement:W.d,SVGPolygonElement:W.d,SVGPolylineElement:W.d,SVGRadialGradientElement:W.d,SVGRectElement:W.d,SVGScriptElement:W.d,SVGSetElement:W.d,SVGStopElement:W.d,SVGStyleElement:W.d,SVGElement:W.d,SVGSVGElement:W.d,SVGSwitchElement:W.d,SVGSymbolElement:W.d,SVGTSpanElement:W.d,SVGTextContentElement:W.d,SVGTextElement:W.d,SVGTextPathElement:W.d,SVGTextPositioningElement:W.d,SVGTitleElement:W.d,SVGUseElement:W.d,SVGViewElement:W.d,SVGGradientElement:W.d,SVGComponentTransferFunctionElement:W.d,SVGFEDropShadowElement:W.d,SVGMPathElement:W.d,Element:W.d,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,SubmitEvent:W.e,EventTarget:W.r,HTMLFormElement:W.bz,XMLHttpRequest:W.ao,XMLHttpRequestEventTarget:W.aO,HTMLImageElement:W.aP,KeyboardEvent:W.U,Node:W.aY,ProgressEvent:W.I,ResourceProgressEvent:W.I,HTMLSelectElement:W.bM,CompositionEvent:W.E,FocusEvent:W.E,MouseEvent:W.E,DragEvent:W.E,PointerEvent:W.E,TextEvent:W.E,TouchEvent:W.E,WheelEvent:W.E,UIEvent:W.E,Window:W.az,DOMWindow:W.az,AudioBuffer:P.G,AudioBufferSourceNode:P.ai,AudioContext:P.aj,webkitAudioContext:P.aj,AnalyserNode:P.m,RealtimeAnalyserNode:P.m,AudioDestinationNode:P.m,AudioWorkletNode:P.m,BiquadFilterNode:P.m,ChannelMergerNode:P.m,AudioChannelMerger:P.m,ChannelSplitterNode:P.m,AudioChannelSplitter:P.m,ConvolverNode:P.m,DelayNode:P.m,DynamicsCompressorNode:P.m,IIRFilterNode:P.m,MediaElementAudioSourceNode:P.m,MediaStreamAudioDestinationNode:P.m,MediaStreamAudioSourceNode:P.m,PannerNode:P.m,AudioPannerNode:P.m,webkitAudioPannerNode:P.m,ScriptProcessorNode:P.m,JavaScriptAudioNode:P.m,StereoPannerNode:P.m,WaveShaperNode:P.m,AudioNode:P.m,ConstantSourceNode:P.R,OscillatorNode:P.R,Oscillator:P.R,AudioScheduledSourceNode:P.R,BaseAudioContext:P.aM,GainNode:P.an,AudioGainNode:P.an,WebGLBuffer:P.bs,WebGLProgram:P.bK,WebGLRenderingContext:P.aw,WebGLTexture:P.bS,WebGLUniformLocation:P.bU})
hunkHelpers.setOrUpdateLeafTags({Blob:true,CanvasRenderingContext2D:true,DOMError:true,File:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Node:false,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,BaseAudioContext:false,GainNode:true,AudioGainNode:true,WebGLBuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.au.$nativeSuperclassTag="ArrayBufferView"
H.b9.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.aV.$nativeSuperclassTag="ArrayBufferView"
H.bb.$nativeSuperclassTag="ArrayBufferView"
H.bc.$nativeSuperclassTag="ArrayBufferView"
H.aW.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=M.hG
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=Main.dart.js.map
