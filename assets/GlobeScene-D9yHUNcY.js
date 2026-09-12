import{r,j as e,C as F,S as N,O as R,u as b}from"./r3f-CWToFXIM.js";import{q as z,p as S,e as T,r as W,F as O,h as C}from"./three-D-ovYI32.js";const U=({liveData:l})=>{const m=r.useRef(),s=r.useRef(0),M=r.useMemo(()=>{const t=l||{};return[{radius:3.4,tilt:Math.PI/2.2,speed:.03,color:"#ffffff",opacity:.85,fontSize:1.4,segments:["THE MARKETPLACE","THAT LIVES"]},{radius:2.85,tilt:Math.PI/2.1,speed:.05,color:"#d946ef",opacity:.75,fontSize:1.05,segments:["API INFRASTRUCTURE","FOR AI AGENTS","THAT PAY"]},{radius:2.35,tilt:Math.PI/2,speed:.07,color:"#22d3ee",opacity:.7,fontSize:.75,segments:[`${t.endpoints||"100+"} ENDPOINTS`,`${t.freeEndpoints||"40"} FREE`,`${t.latency||"—"}`]}]},[l]),d=r.useMemo(()=>M.map(t=>t.segments.map((a,u)=>{const o=document.createElement("canvas");o.width=768,o.height=160;const n=o.getContext("2d");n.clearRect(0,0,o.width,o.height);const v=Math.round(t.fontSize*100);return n.font=`bold ${v}px 'JetBrains Mono', monospace`,n.textAlign="center",n.textBaseline="middle",n.fillStyle=t.color,n.shadowColor=t.color,n.shadowBlur=32,n.fillText(a,o.width/2,o.height/2),n.shadowBlur=0,n.fillText(a,o.width/2,o.height/2),new z(o)})),[M]);return b((t,a)=>{s.current+=a,m.current&&M.forEach((u,o)=>{const n=m.current.children[o];n&&(n.rotation.y=s.current*u.speed)})}),e.jsx("group",{ref:m,children:M.map((t,a)=>e.jsxs("group",{rotation:[t.tilt,0,0],children:[t.segments.map((u,o)=>{const n=t.segments.length,v=o/n*Math.PI*2,x=-Math.PI/n,h=v+x;return e.jsx("sprite",{position:[t.radius*Math.cos(h),t.radius*Math.sin(h)*Math.sin(t.tilt),t.radius*Math.sin(h)*Math.cos(t.tilt)],scale:[t.fontSize*2.8,t.fontSize*.6,1],children:e.jsx("spriteMaterial",{map:d[a][o],transparent:!0,blending:S,opacity:t.opacity,depthWrite:!1})},`${a}-${o}`)}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[t.radius,.0015,8,160]}),e.jsx("meshBasicMaterial",{color:t.color,transparent:!0,opacity:t.opacity*.1,depthWrite:!1})]})]},a))})};function B(){const l=r.useMemo(()=>({time:{value:0},colorA:{value:new T(2282478)},colorB:{value:new T(11032055)},colorC:{value:new T(14239471)}}),[]);return b((m,s)=>{l.time.value+=s*.6}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,28,20]}),e.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
        `,side:W,transparent:!0,depthWrite:!1,blending:S})]})}function L(){const l=r.useMemo(()=>({time:{value:0}}),[]);return b((m,s)=>{l.time.value+=s*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:S})]})}function k({impactPoints:l}){const m=r.useRef(),s=r.useMemo(()=>({time:{value:0},impact0:{value:new C(0,0,0)},i0t:{value:0},impact1:{value:new C(0,0,0)},i1t:{value:0},impact2:{value:new C(0,0,0)},i2t:{value:0},impact3:{value:new C(0,0,0)},i3t:{value:0},impact4:{value:new C(0,0,0)},i4t:{value:0},impact5:{value:new C(0,0,0)},i5t:{value:0},impact6:{value:new C(0,0,0)},i6t:{value:0},impact7:{value:new C(0,0,0)},i7t:{value:0}}),[]);return b((M,d)=>{if(s.time.value+=d*.5,l)for(let t=0;t<8&&t<l.length;t++){const a=l[t];s[`impact${t}`].value.copy(a.position),s[`i${t}t`].value=a.intensity}}),e.jsxs("mesh",{ref:m,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function G({flowRef:l}){const m=r.useRef(),s=r.useRef(0),M=r.useMemo(()=>{const d=document.createElement("canvas");d.width=512,d.height=128;const t=d.getContext("2d");return t.clearRect(0,0,512,128),t.font="bold 72px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#0052FF",t.shadowColor="#0052FF",t.shadowBlur=30,t.fillText("BASE",256,64),t.shadowBlur=0,t.fillText("BASE",256,64),new z(d)},[]);return b((d,t)=>{s.current+=t;const a=(l==null?void 0:l.current)||{intensity:1,pulse:.3};if(a.pulse=Math.max(.25,(a.pulse||0)-t*1.8),m.current){m.current.rotation.y=s.current*(.15+.15*a.intensity),m.current.rotation.x=s.current*.1;const o=1+.02*Math.sin(s.current*1.5)+.1*a.pulse;m.current.scale.set(o,o,o)}}),e.jsxs("group",{ref:m,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:M,transparent:!0,blending:S,opacity:.85,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.4,16,12]}),e.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function D({liveData:l,onImpact:m,flowRef:s}){const d=r.useRef(0),t=r.useRef(),a=2.2,u=a*a,o=h=>{var A;const f=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),i=Math.max(.5,Math.min(1.8,((A=s==null?void 0:s.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*i);h[0]=Math.sin(p)*Math.cos(f)*y,h[1]=Math.sin(p)*Math.sin(f)*y,h[2]=Math.cos(p)*y},n=(h,f,p)=>{if(Math.random()<.38)h[p*3]=.063,h[p*3+1]=.725,h[p*3+2]=.506,f[p]=.03+Math.random()*.035;else{const i=Math.random();h[p*3]=0*(1-i)+.659*i,h[p*3+1]=.322*(1-i)+.333*i,h[p*3+2]=1*(1-i)+.969*i,f[p]=.02+Math.random()*.03}},v=r.useMemo(()=>{const h=new Float32Array(108),f=new Float32Array(108),p=new Float32Array(108),i=new Float32Array(36),y=new Float32Array(36),A=new Float32Array(36),E=new Uint8Array(36);for(let g=0;g<36;g++){h[g*3]=(Math.random()-.5)*.3,h[g*3+1]=(Math.random()-.5)*.3,h[g*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,j=Math.acos(2*Math.random()-1),w=1.1+Math.random()*.8;f[g*3]=Math.sin(j)*Math.cos(_)*w,f[g*3+1]=Math.sin(j)*Math.sin(_)*w,f[g*3+2]=Math.cos(j)*w;const P=Math.random();Math.random()<.38?(p[g*3]=.063,p[g*3+1]=.725,p[g*3+2]=.506,i[g]=.03+Math.random()*.035):(p[g*3]=0*(1-P)+.659*P,p[g*3+1]=.322*(1-P)+.333*P,p[g*3+2]=1*(1-P)+.969*P,i[g]=.02+Math.random()*.03),y[g]=Math.random()*3,A[g]=1.6+Math.random()*1}return{positions:h,velocities:f,colors:p,sizes:i,lifetimes:y,maxLifetimes:A,hit:E}},[]),x=r.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return b((h,f)=>{var I;d.current+=f,x.time.value=d.current;const p=Math.max(.5,Math.min(1.8,((I=s==null?void 0:s.current)==null?void 0:I.intensity)||1));x.flow.value=p;const{positions:i,velocities:y,colors:A,sizes:E,lifetimes:g,maxLifetimes:_,hit:j}=v,w=[0,0,0];let P=!1;for(let c=0;c<36;c++){if(g[c]+=f,g[c]>=_[c]){i[c*3]=(Math.random()-.5)*.3,i[c*3+1]=(Math.random()-.5)*.3,i[c*3+2]=(Math.random()-.5)*.3,o(w),y[c*3]=w[0],y[c*3+1]=w[1],y[c*3+2]=w[2],n(A,E,c),P=!0,g[c]=0,_[c]=1.6+Math.random()*1,j[c]=0;continue}i[c*3]+=y[c*3]*f,i[c*3+1]+=y[c*3+1]*f,i[c*3+2]+=y[c*3+2]*f,i[c*3]*i[c*3]+i[c*3+1]*i[c*3+1]+i[c*3+2]*i[c*3+2]>=u&&!j[c]&&(j[c]=1,m&&m({position:new C(i[c*3],i[c*3+1],i[c*3+2]),intensity:1}))}t.current&&(t.current.geometry.attributes.position.needsUpdate=!0,P&&(t.current.geometry.attributes.aColor.needsUpdate=!0,t.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:t,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[v.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:S})]})}function V(){const{positions:m,colors:s,sizes:M}=r.useMemo(()=>{const t=new Float32Array(180),a=new Float32Array(180),u=new Float32Array(60);for(let o=0;o<60;o++){const n=Math.acos(-1+2*o/60),v=Math.sqrt(60*Math.PI)*n,x=2.35;t[o*3]=x*Math.cos(v)*Math.sin(n),t[o*3+1]=x*Math.sin(v)*Math.sin(n),t[o*3+2]=x*Math.cos(n);const h=o>=36;if(h)a[o*3]=.133,a[o*3+1]=.827,a[o*3+2]=.933;else{const f=new T().setHSL(.75+Math.random()*.1,.7,.6);a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b}u[o]=h?.09:.055}return{positions:t,colors:a,sizes:u}},[]),d=r.useMemo(()=>({time:{value:0}}),[]);return b((t,a)=>{d.time.value+=a*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:d,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:S})]})}function $(){const l=r.useRef(),m=r.useMemo(()=>({time:{value:0}}),[]),s=r.useRef(0);b((a,u)=>{s.current+=u,m.time.value=s.current,l.current&&(l.current.rotation.y=s.current*.06)});const{positions:M,colors:d,sizes:t}=r.useMemo(()=>{const u=new Float32Array(150),o=new Float32Array(150),n=new Float32Array(50);for(let v=0;v<50;v++){const x=v/50*Math.PI*2,h=v%3,f=2.55+h*.22,p=.15*h;u[v*3]=f*Math.cos(x),u[v*3+1]=f*Math.sin(x)*Math.sin(p),u[v*3+2]=f*Math.sin(x)*Math.cos(p);const i=v/50;o[v*3]=.659*(1-i)+.133*i,o[v*3+1]=.333*(1-i)+.827*i,o[v*3+2]=.969*(1-i)+.933*i,n[v]=.015+Math.random()*.025}return{positions:u,colors:o,sizes:n}},[]);return e.jsx("group",{ref:l,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[d,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t,1]})]}),e.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:S})]})})}function H({onImpactsReady:l}){const m=r.useRef([]),s=r.useRef(Array.from({length:8},()=>({position:new C,intensity:0,active:!1,age:0})));return b((M,d)=>{for(;m.current.length>0&&s.current.some(a=>!a.active);){const a=m.current.shift(),u=s.current.find(o=>!o.active);u&&(u.position.copy(a.position),u.intensity=a.intensity,u.active=!0,u.age=0)}const t=1.5;s.current.forEach(a=>{a.active&&(a.age+=d,a.intensity=Math.max(0,1-a.age*t),a.intensity<=0&&(a.active=!1))}),l(s.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),r.useEffect(()=>(window.__aetherius_addImpact=M=>{m.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function q(){const[l,m]=r.useState([]),s=r.useRef(""),M=r.useCallback(d=>{let t=d.length+":";for(let a=0;a<d.length;a++){const u=d[a];t+=u.position.x.toFixed(1)+","+u.position.y.toFixed(1)+","+u.position.z.toFixed(1)+","+u.intensity.toFixed(2)+";"}t!==s.current&&(s.current=t,m(d))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{impactPoints:l}),e.jsx(H,{onImpactsReady:M})]})}function Y({liveData:l,paused:m}){const s=r.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=r.useCallback(n=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(n)},[]),d=r.useRef({intensity:1,pulse:.4,block:null});r.useEffect(()=>{const n=()=>{const x=l||{},h=parseFloat(String(x.volume||"").replace(/[^0-9.]/g,""))||0,f=parseFloat(String(x.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(h/500,.5)+Math.min(f/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const i=d.current;i.intensity=p,x.block&&x.block!=="—"&&x.block!==i.block?(i.block=x.block,i.pulse=1):i.pulse=Math.max(.3,(i.pulse||.3)*.94)};n();const v=setInterval(n,400);return()=>clearInterval(v)},[l]);const t=r.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=r.useMemo(()=>({alpha:!0,antialias:!s,powerPreference:"high-performance"}),[s]),u=r.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),o=r.useMemo(()=>[1,1.5],[]);return e.jsxs(F,{camera:t,gl:a,onCreated:({gl:n})=>n.setClearColor(0,0),style:u,dpr:o,frameloop:m?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(q,{}),e.jsx(G,{flowRef:d}),e.jsx(D,{liveData:l,onImpact:M,flowRef:d}),e.jsx(B,{}),e.jsx(L,{}),e.jsx(V,{}),e.jsx(U,{liveData:l}),e.jsx($,{})]}),!s&&e.jsx(N,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),e.jsx(R,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Y as default};
