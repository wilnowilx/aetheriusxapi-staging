import{r as s,j as a,C as W,S as N,O as z,u as w}from"./r3f-CdH6mNND.js";import{q as F,p as S,e as T,r as R,F as O,D as U,h as C}from"./three--5aOfyF1.js";const B=({liveData:m})=>{const u=s.useRef(),i=s.useRef(0),M=s.useMemo(()=>{const t=m||{};return[{radius:3.4,tilt:Math.PI/2.2,speed:.03,bandWidth:.55,color:"#ffffff",opacity:.82,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:2.85,tilt:Math.PI/2.1,speed:.05,bandWidth:.45,color:"#d946ef",opacity:.72,fontSize:36,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.35,tilt:Math.PI/2,speed:.07,bandWidth:.38,color:"#22d3ee",opacity:.62,fontSize:30,text:`${t.endpoints||"100+"} ENDPOINTS   ${t.freeEndpoints||"40"} FREE   ${t.latency||"—"}   `}]},[m]),h=s.useMemo(()=>M.map(t=>{const e=document.createElement("canvas");e.width=2048,e.height=128;const r=e.getContext("2d");r.clearRect(0,0,e.width,e.height);const c=`bold ${t.fontSize}px 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace`;r.font=c,r.textAlign="center",r.textBaseline="middle";const f=t.text,p=r.measureText(f).width,g=Math.ceil((e.width+p)/p),v=(e.width-p*g)/2+p/2;r.fillStyle=t.color,r.shadowColor=t.color,r.shadowBlur=24;for(let n=0;n<g;n++)r.fillText(f,v+n*p,e.height/2);r.shadowBlur=0;for(let n=0;n<g;n++)r.fillText(f,v+n*p,e.height/2);return new F(e)}),[M]);return w((t,e)=>{i.current+=e,u.current&&M.forEach((r,c)=>{const f=u.current.children[c];f&&(f.rotation.y=i.current*r.speed)})}),a.jsx("group",{ref:u,children:M.map((t,e)=>a.jsxs("group",{rotation:[t.tilt,0,0],children:[a.jsxs("mesh",{children:[a.jsx("cylinderGeometry",{args:[t.radius,t.radius,t.bandWidth,128,1,!0]}),a.jsx("meshBasicMaterial",{map:h[e],transparent:!0,opacity:t.opacity,side:U,depthWrite:!1,blending:S})]}),a.jsxs("mesh",{children:[a.jsx("torusGeometry",{args:[t.radius,t.bandWidth*.06,6,128]}),a.jsx("meshBasicMaterial",{color:t.color,transparent:!0,opacity:t.opacity*.12,depthWrite:!1})]})]},e))})};function L(){const m=s.useMemo(()=>({time:{value:0},colorA:{value:new T(2282478)},colorB:{value:new T(11032055)},colorC:{value:new T(14239471)}}),[]);return w((u,i)=>{m.time.value+=i*.6}),a.jsxs("mesh",{scale:1.15,children:[a.jsx("sphereGeometry",{args:[2.2,28,20]}),a.jsx("shaderMaterial",{uniforms:m,vertexShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          uniform float time; uniform vec3 colorA; uniform vec3 colorB; uniform vec3 colorC;
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 1.8);
            float pulse = 0.85 + 0.15 * sin(time * 0.6 + vWorldPos.y * 1.5);
            float wave = 0.5 + 0.5 * sin(time * 0.4 + vWorldPos.x * 2.0 + vWorldPos.z * 1.2);
            vec3 col = mix(colorA, colorB, wave * 0.3);
            col = mix(col, colorC, 0.15 * sin(time * 0.3 + vWorldPos.y));
            gl_FragColor = vec4(col, fresnel * pulse * 0.08);
          }
        `,side:R,transparent:!0,depthWrite:!1,blending:S})]})}function G(){const m=s.useMemo(()=>({time:{value:0}}),[]);return w((u,i)=>{m.time.value+=i*.4}),a.jsxs("mesh",{scale:.85,children:[a.jsx("sphereGeometry",{args:[2.2,32,32]}),a.jsx("shaderMaterial",{uniforms:m,vertexShader:`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal; uniform float time;
          void main() {
            float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 2.0);
            float pulse = 0.85 + 0.15 * sin(time * 0.4);
            vec3 col = vec3(0.659, 0.333, 0.969);
            gl_FragColor = vec4(col, rim * pulse * 0.04);
          }
        `,side:O,transparent:!0,depthWrite:!1,blending:S})]})}function k({impactPoints:m}){const u=s.useRef(),i=s.useMemo(()=>({time:{value:0},impact0:{value:new C(0,0,0)},i0t:{value:0},impact1:{value:new C(0,0,0)},i1t:{value:0},impact2:{value:new C(0,0,0)},i2t:{value:0},impact3:{value:new C(0,0,0)},i3t:{value:0},impact4:{value:new C(0,0,0)},i4t:{value:0},impact5:{value:new C(0,0,0)},i5t:{value:0},impact6:{value:new C(0,0,0)},i6t:{value:0},impact7:{value:new C(0,0,0)},i7t:{value:0}}),[]);return w((M,h)=>{if(i.time.value+=h*.5,m)for(let t=0;t<8&&t<m.length;t++){const e=m[t];i[`impact${t}`].value.copy(e.position),i[`i${t}t`].value=e.intensity}}),a.jsxs("mesh",{ref:u,children:[a.jsx("sphereGeometry",{args:[2.2,36,24]}),a.jsx("shaderMaterial",{uniforms:i,vertexShader:`
          varying vec3 vPos; varying vec3 vWorldPos;
          uniform float time;
          uniform vec3 impact0, impact1, impact2, impact3, impact4, impact5, impact6, impact7;
          uniform float i0t, i1t, i2t, i3t, i4t, i5t, i6t, i7t;
          void main() {
            vPos = position;
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vPos; varying vec3 vWorldPos;
          uniform float time;
          uniform vec3 impact0, impact1, impact2, impact3, impact4, impact5, impact6, impact7;
          uniform float i0t, i1t, i2t, i3t, i4t, i5t, i6t, i7t;

          float impactPulse(vec3 worldPos, vec3 impactPos, float intensity) {
            float dist = length(worldPos - impactPos);
            // Expanding ring from impact point
            float ring = abs(dist - time * 1.5 * intensity);
            float ringPulse = exp(-ring * 3.0) * intensity;
            // Proximity glow
            float prox = exp(-dist * 1.8) * intensity * 0.5;
            return ringPulse + prox;
          }

          void main() {
            float pulse = 0.6 + 0.4 * sin(time * 0.5 + vWorldPos.y * 2.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));

            // Accumulate impact pulses
            float impacts = 0.0;
            impacts += impactPulse(vWorldPos, impact0, i0t);
            impacts += impactPulse(vWorldPos, impact1, i1t);
            impacts += impactPulse(vWorldPos, impact2, i2t);
            impacts += impactPulse(vWorldPos, impact3, i3t);
            impacts += impactPulse(vWorldPos, impact4, i4t);
            impacts += impactPulse(vWorldPos, impact5, i5t);
            impacts += impactPulse(vWorldPos, impact6, i6t);
            impacts += impactPulse(vWorldPos, impact7, i7t);
            impacts = clamp(impacts, 0.0, 1.5);

            // Base wireframe color (purple → cyan)
            vec3 baseCol = mix(vec3(0.659, 0.333, 0.969), vec3(0.133, 0.827, 0.933), 0.3 + 0.2 * sin(time * 0.3));
            // Impact color (white-blue flash)
            vec3 impactCol = mix(vec3(0.0, 0.322, 1.0), vec3(1.0, 1.0, 1.0), 0.6);
            vec3 col = mix(baseCol, impactCol, impacts * 0.7);
            col += vec3(0.10, 0.06, 0.015) * impacts; // filo ámbar duna en la captura

            float alpha = 0.045 * pulse * fade + impacts * 0.15;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function D({flowRef:m}){const u=s.useRef(),i=s.useRef(0),M=s.useMemo(()=>{const h=document.createElement("canvas");h.width=512,h.height=128;const t=h.getContext("2d");return t.clearRect(0,0,512,128),t.font="bold 72px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#0052FF",t.shadowColor="#0052FF",t.shadowBlur=30,t.fillText("BASE",256,64),t.shadowBlur=0,t.fillText("BASE",256,64),new F(h)},[]);return w((h,t)=>{i.current+=t;const e=(m==null?void 0:m.current)||{intensity:1,pulse:.3};if(e.pulse=Math.max(.25,(e.pulse||0)-t*1.8),u.current){u.current.rotation.y=i.current*(.15+.15*e.intensity),u.current.rotation.x=i.current*.1;const c=1+.02*Math.sin(i.current*1.5)+.1*e.pulse;u.current.scale.set(c,c,c)}}),a.jsxs("group",{ref:u,scale:1.3,children:[a.jsx("sprite",{scale:[2.2,.55,1],children:a.jsx("spriteMaterial",{map:M,transparent:!0,blending:S,opacity:.85,depthWrite:!1})}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[.4,16,12]}),a.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function V({liveData:m,onImpact:u,flowRef:i}){const h=s.useRef(0),t=s.useRef(),e=2.2,r=e*e,c=v=>{var A;const n=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),o=Math.max(.5,Math.min(1.8,((A=i==null?void 0:i.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*o);v[0]=Math.sin(d)*Math.cos(n)*y,v[1]=Math.sin(d)*Math.sin(n)*y,v[2]=Math.cos(d)*y},f=(v,n,d)=>{if(Math.random()<.38)v[d*3]=.063,v[d*3+1]=.725,v[d*3+2]=.506,n[d]=.03+Math.random()*.035;else{const o=Math.random();v[d*3]=0*(1-o)+.659*o,v[d*3+1]=.322*(1-o)+.333*o,v[d*3+2]=1*(1-o)+.969*o,n[d]=.02+Math.random()*.03}},p=s.useMemo(()=>{const v=new Float32Array(108),n=new Float32Array(108),d=new Float32Array(108),o=new Float32Array(36),y=new Float32Array(36),A=new Float32Array(36),E=new Uint8Array(36);for(let x=0;x<36;x++){v[x*3]=(Math.random()-.5)*.3,v[x*3+1]=(Math.random()-.5)*.3,v[x*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,j=Math.acos(2*Math.random()-1),P=1.1+Math.random()*.8;n[x*3]=Math.sin(j)*Math.cos(_)*P,n[x*3+1]=Math.sin(j)*Math.sin(_)*P,n[x*3+2]=Math.cos(j)*P;const b=Math.random();Math.random()<.38?(d[x*3]=.063,d[x*3+1]=.725,d[x*3+2]=.506,o[x]=.03+Math.random()*.035):(d[x*3]=0*(1-b)+.659*b,d[x*3+1]=.322*(1-b)+.333*b,d[x*3+2]=1*(1-b)+.969*b,o[x]=.02+Math.random()*.03),y[x]=Math.random()*3,A[x]=1.6+Math.random()*1}return{positions:v,velocities:n,colors:d,sizes:o,lifetimes:y,maxLifetimes:A,hit:E}},[]),g=s.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return w((v,n)=>{var I;h.current+=n,g.time.value=h.current;const d=Math.max(.5,Math.min(1.8,((I=i==null?void 0:i.current)==null?void 0:I.intensity)||1));g.flow.value=d;const{positions:o,velocities:y,colors:A,sizes:E,lifetimes:x,maxLifetimes:_,hit:j}=p,P=[0,0,0];let b=!1;for(let l=0;l<36;l++){if(x[l]+=n,x[l]>=_[l]){o[l*3]=(Math.random()-.5)*.3,o[l*3+1]=(Math.random()-.5)*.3,o[l*3+2]=(Math.random()-.5)*.3,c(P),y[l*3]=P[0],y[l*3+1]=P[1],y[l*3+2]=P[2],f(A,E,l),b=!0,x[l]=0,_[l]=1.6+Math.random()*1,j[l]=0;continue}o[l*3]+=y[l*3]*n,o[l*3+1]+=y[l*3+1]*n,o[l*3+2]+=y[l*3+2]*n,o[l*3]*o[l*3]+o[l*3+1]*o[l*3+1]+o[l*3+2]*o[l*3+2]>=r&&!j[l]&&(j[l]=1,u&&u({position:new C(o[l*3],o[l*3+1],o[l*3+2]),intensity:1}))}t.current&&(t.current.geometry.attributes.position.needsUpdate=!0,b&&(t.current.geometry.attributes.aColor.needsUpdate=!0,t.current.geometry.attributes.aSize.needsUpdate=!0))}),a.jsxs("points",{ref:t,children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]})]}),a.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            vAlpha = (0.55 + 0.45 * sin(time * 3.0 + position.x * 5.0)) * (0.8 + 0.3 * flow);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (0.75 + 0.5 * flow) * (400.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = pow(1.0 - d * 2.0, 2.0);
            gl_FragColor = vec4(vColor, glow * vAlpha * 0.8);
          }
        `,transparent:!0,depthWrite:!1,blending:S})]})}function $(){const{positions:u,colors:i,sizes:M}=s.useMemo(()=>{const t=new Float32Array(180),e=new Float32Array(180),r=new Float32Array(60);for(let c=0;c<60;c++){const f=Math.acos(-1+2*c/60),p=Math.sqrt(60*Math.PI)*f,g=2.35;t[c*3]=g*Math.cos(p)*Math.sin(f),t[c*3+1]=g*Math.sin(p)*Math.sin(f),t[c*3+2]=g*Math.cos(f);const v=c>=36;if(v)e[c*3]=.133,e[c*3+1]=.827,e[c*3+2]=.933;else{const n=new T().setHSL(.75+Math.random()*.1,.7,.6);e[c*3]=n.r,e[c*3+1]=n.g,e[c*3+2]=n.b}r[c]=v?.09:.055}return{positions:t,colors:e,sizes:r}},[]),h=s.useMemo(()=>({time:{value:0}}),[]);return w((t,e)=>{h.time.value+=e*1.5}),a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[u,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),a.jsx("shaderMaterial",{uniforms:h,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time;
          void main() {
            vColor = aColor;
            vec3 pos = position;
            pos += normalize(position) * sin(time * 1.0 + position.x * 2.5) * 0.025;
            vAlpha = 0.5 + 0.5 * sin(time * 1.6 + position.y * 1.8);
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = aSize * (360.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = pow(1.0 - d * 2.0, 2.0);
            gl_FragColor = vec4(vColor, glow * vAlpha * 0.8);
          }
        `,transparent:!0,depthWrite:!1,blending:S})]})}function H(){const m=s.useRef(),u=s.useMemo(()=>({time:{value:0}}),[]),i=s.useRef(0);w((e,r)=>{i.current+=r,u.time.value=i.current,m.current&&(m.current.rotation.y=i.current*.06)});const{positions:M,colors:h,sizes:t}=s.useMemo(()=>{const r=new Float32Array(150),c=new Float32Array(150),f=new Float32Array(50);for(let p=0;p<50;p++){const g=p/50*Math.PI*2,v=p%3,n=2.55+v*.22,d=.15*v;r[p*3]=n*Math.cos(g),r[p*3+1]=n*Math.sin(g)*Math.sin(d),r[p*3+2]=n*Math.sin(g)*Math.cos(d);const o=p/50;c[p*3]=.659*(1-o)+.133*o,c[p*3+1]=.333*(1-o)+.827*o,c[p*3+2]=.969*(1-o)+.933*o,f[p]=.015+Math.random()*.025}return{positions:r,colors:c,sizes:f}},[]);return a.jsx("group",{ref:m,children:a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t,1]})]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:`
            attribute float aSize; attribute vec3 aColor;
            varying vec3 vColor; varying float vAlpha; uniform float time;
            void main() {
              vColor = aColor;
              vAlpha = 0.4 + 0.6 * sin(time * 2.0 + position.x * 3.0);
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = aSize * (280.0 / -mv.z);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying vec3 vColor; varying float vAlpha;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float glow = pow(1.0 - d * 2.0, 1.5);
              gl_FragColor = vec4(vColor, glow * vAlpha * 0.7);
            }
          `,transparent:!0,depthWrite:!1,blending:S})]})})}function q({onImpactsReady:m}){const u=s.useRef([]),i=s.useRef(Array.from({length:8},()=>({position:new C,intensity:0,active:!1,age:0})));return w((M,h)=>{for(;u.current.length>0&&i.current.some(e=>!e.active);){const e=u.current.shift(),r=i.current.find(c=>!c.active);r&&(r.position.copy(e.position),r.intensity=e.intensity,r.active=!0,r.age=0)}const t=1.5;i.current.forEach(e=>{e.active&&(e.age+=h,e.intensity=Math.max(0,1-e.age*t),e.intensity<=0&&(e.active=!1))}),m(i.current.filter(e=>e.active).map(e=>({position:e.position,intensity:e.intensity})))}),s.useEffect(()=>(window.__aetherius_addImpact=M=>{u.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function K(){const[m,u]=s.useState([]),i=s.useRef(""),M=s.useCallback(h=>{let t=h.length+":";for(let e=0;e<h.length;e++){const r=h[e];t+=r.position.x.toFixed(1)+","+r.position.y.toFixed(1)+","+r.position.z.toFixed(1)+","+r.intensity.toFixed(2)+";"}t!==i.current&&(i.current=t,u(h))},[]);return a.jsxs(a.Fragment,{children:[a.jsx(k,{impactPoints:m}),a.jsx(q,{onImpactsReady:M})]})}function Z({liveData:m,paused:u}){const i=s.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=s.useCallback(f=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(f)},[]),h=s.useRef({intensity:1,pulse:.4,block:null});s.useEffect(()=>{const f=()=>{const g=m||{},v=parseFloat(String(g.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(g.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(v/500,.5)+Math.min(n/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const o=h.current;o.intensity=d,g.block&&g.block!=="—"&&g.block!==o.block?(o.block=g.block,o.pulse=1):o.pulse=Math.max(.3,(o.pulse||.3)*.94)};f();const p=setInterval(f,400);return()=>clearInterval(p)},[m]);const t=s.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),e=s.useMemo(()=>({alpha:!0,antialias:!i,powerPreference:"high-performance"}),[i]),r=s.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),c=s.useMemo(()=>[1,1.5],[]);return a.jsxs(W,{camera:t,gl:e,onCreated:({gl:f})=>f.setClearColor(0,0),style:r,dpr:c,frameloop:u?"demand":"always",children:[a.jsx("ambientLight",{intensity:.05}),a.jsxs("group",{scale:1.3,children:[a.jsx(K,{}),a.jsx(D,{flowRef:h}),a.jsx(V,{liveData:m,onImpact:M,flowRef:h}),a.jsx(L,{}),a.jsx(G,{}),a.jsx($,{}),a.jsx(B,{liveData:m}),a.jsx(H,{})]}),!i&&a.jsx(N,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),a.jsx(z,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Z as default};
