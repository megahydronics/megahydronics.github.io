import{s as S,n as I}from"../chunks/scheduler.ce710c66.js";import{S as q,i as O,g as m,s as V,h as f,j as g,f as v,c as C,z as H,k as x,a as j,x as c,y as M,m as T,n as $}from"../chunks/index.a52f3f09.js";import{e as z}from"../chunks/each.e59479a4.js";import{d as P}from"../chunks/data.be1daf50.js";function A(s,e,a){const l=s.slice();return l[0]=e[a],l[2]=a,l}function B(s,e,a){const l=s.slice();return l[3]=e[a],l[2]=a,l}function F(s){let e,a,l,h=s[3].title+"",w,p,o,_=s[3].description+"",u,y,r,k=`<img src="${s[3].image}" alt="${s[3].title}" class="h-full w-full object-cover object-center"/>`,d;return{c(){e=m("div"),a=m("div"),l=m("h2"),w=T(h),p=V(),o=m("p"),u=T(_),y=V(),r=m("div"),r.innerHTML=k,d=V(),this.h()},l(t){e=f(t,"DIV",{"data-label":!0,class:!0});var n=g(e);a=f(n,"DIV",{});var i=g(a);l=f(i,"H2",{class:!0});var D=g(l);w=$(D,h),D.forEach(v),p=C(i),o=f(i,"P",{class:!0});var E=g(o);u=$(E,_),E.forEach(v),i.forEach(v),y=C(n),r=f(n,"DIV",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-1tdug55"&&(r.innerHTML=k),d=C(n),n.forEach(v),this.h()},h(){x(l,"class","mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"),x(o,"class","leading-8 text-gray-600"),x(r,"class","flex-shrink-0 overflow-hidden rounded-md h-80 w-full md:w-[30rem]"),x(e,"data-label","services."+s[2]),x(e,"class","flex gap-10 flex-col items-center lg:items-start "+(s[2]%2==0?"lg:flex-row":"lg:flex-row-reverse"))},m(t,n){j(t,e,n),c(e,a),c(a,l),c(l,w),c(a,p),c(a,o),c(o,u),c(e,y),c(e,r),c(e,d)},p:I,d(t){t&&v(e)}}}function G(s){let e,a=`<img class="max-h-20 object-contain" src="${s[0].logo}" alt="${s[0].name}"/> `;return{c(){e=m("div"),e.innerHTML=a,this.h()},l(l){e=f(l,"DIV",{"data-label":!0,"data-svelte-h":!0}),H(e)!=="svelte-gtyubz"&&(e.innerHTML=a),this.h()},h(){x(e,"data-label","emblems."+s[2])},m(l,h){j(l,e,h)},p:I,d(l){l&&v(e)}}}function J(s){let e,a,l,h,w="Our accreditations",p,o,_,u,y=z(P.services),r=[];for(let t=0;t<y.length;t+=1)r[t]=F(B(s,y,t));let k=z(P.emblems),d=[];for(let t=0;t<k.length;t+=1)d[t]=G(A(s,k,t));return{c(){e=m("div"),a=m("div");for(let t=0;t<r.length;t+=1)r[t].c();l=V(),h=m("h2"),h.textContent=w,p=V(),o=m("div"),_=m("div"),u=m("div");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var n=g(e);a=f(n,"DIV",{class:!0});var i=g(a);for(let b=0;b<r.length;b+=1)r[b].l(i);i.forEach(v),l=C(n),h=f(n,"H2",{class:!0,"data-svelte-h":!0}),H(h)!=="svelte-1klmxi7"&&(h.textContent=w),p=C(n),o=f(n,"DIV",{class:!0});var D=g(o);_=f(D,"DIV",{class:!0});var E=g(_);u=f(E,"DIV",{class:!0});var L=g(u);for(let b=0;b<d.length;b+=1)d[b].l(L);L.forEach(v),E.forEach(v),D.forEach(v),n.forEach(v),this.h()},h(){x(a,"class","flex flex-col gap-32 max-w-5xl mx-auto"),x(h,"class","text-center text-3xl mt-32 font-bold tracking-tight text-gray-900 sm:text-4xl"),x(u,"class","flex flex-wrap max-w-lg items-center justify-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none"),x(_,"class","max-w-7xl px-6 lg:px-8"),x(o,"class","bg-white mt-12 sm:mt-14"),x(e,"class","mx-auto max-w-7xl py-12 md:py-20 px-4 lg:px-8")},m(t,n){j(t,e,n),c(e,a);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(a,null);c(e,l),c(e,h),c(e,p),c(e,o),c(o,_),c(_,u);for(let i=0;i<d.length;i+=1)d[i]&&d[i].m(u,null)},p:I,i:I,o:I,d(t){t&&v(e),M(r,t),M(d,t)}}}class U extends q{constructor(e){super(),O(this,e,null,J,S,{})}}export{U as component};
