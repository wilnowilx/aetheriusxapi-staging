import{r,j as e,C as F,S as N,O as R,u as b}from"./r3f-CWToFXIM.js";import{q as z,p as S,e as T,r as W,F as O,h as C}from"./three-D-ovYI32.js";const U=({liveData:l})=>{const p=r.useRef(),i=r.useRef(0),M=r.useMemo(()=>{const t=l||{};return[{radius:3.2,tilt:Math.PI/2,speed:.04,color:"#ffffff",opacity:.7,fontSize:1.15,segments:["THE","MARKETPLACE","THAT","LIVES"]},{radius:2.75,tilt:Math.PI/2,speed:.06,color:"#d946ef",opacity:.65,fontSize:.85,segments:["API","INFRASTRUCTURE","FOR","AI","AGENTS","THAT","PAY"]},{radius:2.35,tilt:Math.PI/2+.15,speed:.09,color:"#22d3ee",opacity:.6,fontSize:.6,segments:[`${t.endpoints||"100+"}`,"ENDPOINTS","·",`${t.freeEndpoints||"40"}`,"FREE","·",`${t.latency||"—"}`]}]},[l]),h=r.useMemo(()=>M.map(t=>t.segments.map((a,u)=>{const s=a==="·",n=document.createElement("canvas");n.width=s?128:512,n.height=128;const m=n.getContext("2d");m.clearRect(0,0,n.width,n.height);const x=Math.round(t.fontSize*(s?60:90));return m.font=`bold ${x}px 'JetBrains Mono', monospace`,m.textAlign="center",m.textBaseline="middle",m.fillStyle=t.color,m.shadowColor=t.color,m.shadowBlur=s?8:24,m.fillText(a,n.width/2,n.height/2),new z(n)})),[M]);return b((t,a)=>{i.current+=a,p.current&&M.forEach((u,s)=>{const n=p.current.children[s];n&&(n.rotation.y=i.current*u.speed)})}),e.jsx("group",{ref:p,children:M.map((t,a)=>e.jsxs("group",{rotation:[t.tilt,0,0],children:[t.segments.map((u,s)=>{const n=s/t.segments.length*Math.PI*2;return e.jsx("sprite",{position:[t.radius*Math.cos(n),t.radius*Math.sin(n)*Math.sin(t.tilt),t.radius*Math.sin(n)*Math.cos(t.tilt)],scale:[t.fontSize*(u==="·"?.5:2),t.fontSize*.4,1],children:e.jsx("spriteMaterial",{map:h[a][s],transparent:!0,blending:S,opacity:t.opacity,depthWrite:!1})},`${a}-${s}`)}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[t.radius,.0018,8,160]}),e.jsx("meshBasicMaterial",{color:t.color,transparent:!0,opacity:t.opacity*.12,depthWrite:!1})]})]},a))})};function L(){const l=r.useMemo(()=>({time:{value:0},colorA:{value:new T(2282478)},colorB:{value:new T(11032055)},colorC:{value:new T(14239471)}}),[]);return b((p,i)=>{l.time.value+=i*.6}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,28,20]}),e.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
        `,side:W,transparent:!0,depthWrite:!1,blending:S})]})}function B(){const l=r.useMemo(()=>({time:{value:0}}),[]);return b((p,i)=>{l.time.value+=i*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:S})]})}function k({impactPoints:l}){const p=r.useRef(),i=r.useMemo(()=>({time:{value:0},impact0:{value:new C(0,0,0)},i0t:{value:0},impact1:{value:new C(0,0,0)},i1t:{value:0},impact2:{value:new C(0,0,0)},i2t:{value:0},impact3:{value:new C(0,0,0)},i3t:{value:0},impact4:{value:new C(0,0,0)},i4t:{value:0},impact5:{value:new C(0,0,0)},i5t:{value:0},impact6:{value:new C(0,0,0)},i6t:{value:0},impact7:{value:new C(0,0,0)},i7t:{value:0}}),[]);return b((M,h)=>{if(i.time.value+=h*.5,l)for(let t=0;t<8&&t<l.length;t++){const a=l[t];i[`impact${t}`].value.copy(a.position),i[`i${t}t`].value=a.intensity}}),e.jsxs("mesh",{ref:p,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:i,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function D({flowRef:l}){const p=r.useRef(),i=r.useRef(0),M=r.useMemo(()=>{const h=document.createElement("canvas");h.width=512,h.height=128;const t=h.getContext("2d");return t.clearRect(0,0,512,128),t.font="bold 72px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#0052FF",t.shadowColor="#0052FF",t.shadowBlur=30,t.fillText("BASE",256,64),t.shadowBlur=0,t.fillText("BASE",256,64),new z(h)},[]);return b((h,t)=>{i.current+=t;const a=(l==null?void 0:l.current)||{intensity:1,pulse:.3};if(a.pulse=Math.max(.25,(a.pulse||0)-t*1.8),p.current){p.current.rotation.y=i.current*(.15+.15*a.intensity),p.current.rotation.x=i.current*.1;const s=1+.02*Math.sin(i.current*1.5)+.1*a.pulse;p.current.scale.set(s,s,s)}}),e.jsxs("group",{ref:p,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:M,transparent:!0,blending:S,opacity:.85,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.4,16,12]}),e.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function G({liveData:l,onImpact:p,flowRef:i}){const h=r.useRef(0),t=r.useRef(),a=2.2,u=a*a,s=f=>{var A;const v=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),o=Math.max(.5,Math.min(1.8,((A=i==null?void 0:i.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*o);f[0]=Math.sin(d)*Math.cos(v)*y,f[1]=Math.sin(d)*Math.sin(v)*y,f[2]=Math.cos(d)*y},n=(f,v,d)=>{if(Math.random()<.38)f[d*3]=.063,f[d*3+1]=.725,f[d*3+2]=.506,v[d]=.03+Math.random()*.035;else{const o=Math.random();f[d*3]=0*(1-o)+.659*o,f[d*3+1]=.322*(1-o)+.333*o,f[d*3+2]=1*(1-o)+.969*o,v[d]=.02+Math.random()*.03}},m=r.useMemo(()=>{const f=new Float32Array(108),v=new Float32Array(108),d=new Float32Array(108),o=new Float32Array(36),y=new Float32Array(36),A=new Float32Array(36),E=new Uint8Array(36);for(let g=0;g<36;g++){f[g*3]=(Math.random()-.5)*.3,f[g*3+1]=(Math.random()-.5)*.3,f[g*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,j=Math.acos(2*Math.random()-1),w=1.1+Math.random()*.8;v[g*3]=Math.sin(j)*Math.cos(_)*w,v[g*3+1]=Math.sin(j)*Math.sin(_)*w,v[g*3+2]=Math.cos(j)*w;const P=Math.random();Math.random()<.38?(d[g*3]=.063,d[g*3+1]=.725,d[g*3+2]=.506,o[g]=.03+Math.random()*.035):(d[g*3]=0*(1-P)+.659*P,d[g*3+1]=.322*(1-P)+.333*P,d[g*3+2]=1*(1-P)+.969*P,o[g]=.02+Math.random()*.03),y[g]=Math.random()*3,A[g]=1.6+Math.random()*1}return{positions:f,velocities:v,colors:d,sizes:o,lifetimes:y,maxLifetimes:A,hit:E}},[]),x=r.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return b((f,v)=>{var I;h.current+=v,x.time.value=h.current;const d=Math.max(.5,Math.min(1.8,((I=i==null?void 0:i.current)==null?void 0:I.intensity)||1));x.flow.value=d;const{positions:o,velocities:y,colors:A,sizes:E,lifetimes:g,maxLifetimes:_,hit:j}=m,w=[0,0,0];let P=!1;for(let c=0;c<36;c++){if(g[c]+=v,g[c]>=_[c]){o[c*3]=(Math.random()-.5)*.3,o[c*3+1]=(Math.random()-.5)*.3,o[c*3+2]=(Math.random()-.5)*.3,s(w),y[c*3]=w[0],y[c*3+1]=w[1],y[c*3+2]=w[2],n(A,E,c),P=!0,g[c]=0,_[c]=1.6+Math.random()*1,j[c]=0;continue}o[c*3]+=y[c*3]*v,o[c*3+1]+=y[c*3+1]*v,o[c*3+2]+=y[c*3+2]*v,o[c*3]*o[c*3]+o[c*3+1]*o[c*3+1]+o[c*3+2]*o[c*3+2]>=u&&!j[c]&&(j[c]=1,p&&p({position:new C(o[c*3],o[c*3+1],o[c*3+2]),intensity:1}))}t.current&&(t.current.geometry.attributes.position.needsUpdate=!0,P&&(t.current.geometry.attributes.aColor.needsUpdate=!0,t.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:t,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:S})]})}function V(){const{positions:p,colors:i,sizes:M}=r.useMemo(()=>{const t=new Float32Array(180),a=new Float32Array(180),u=new Float32Array(60);for(let s=0;s<60;s++){const n=Math.acos(-1+2*s/60),m=Math.sqrt(60*Math.PI)*n,x=2.35;t[s*3]=x*Math.cos(m)*Math.sin(n),t[s*3+1]=x*Math.sin(m)*Math.sin(n),t[s*3+2]=x*Math.cos(n);const f=s>=36;if(f)a[s*3]=.133,a[s*3+1]=.827,a[s*3+2]=.933;else{const v=new T().setHSL(.75+Math.random()*.1,.7,.6);a[s*3]=v.r,a[s*3+1]=v.g,a[s*3+2]=v.b}u[s]=f?.09:.055}return{positions:t,colors:a,sizes:u}},[]),h=r.useMemo(()=>({time:{value:0}}),[]);return b((t,a)=>{h.time.value+=a*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:S})]})}function $(){const l=r.useRef(),p=r.useMemo(()=>({time:{value:0}}),[]),i=r.useRef(0);b((a,u)=>{i.current+=u,p.time.value=i.current,l.current&&(l.current.rotation.y=i.current*.06)});const{positions:M,colors:h,sizes:t}=r.useMemo(()=>{const u=new Float32Array(150),s=new Float32Array(150),n=new Float32Array(50);for(let m=0;m<50;m++){const x=m/50*Math.PI*2,f=m%3,v=2.55+f*.22,d=.15*f;u[m*3]=v*Math.cos(x),u[m*3+1]=v*Math.sin(x)*Math.sin(d),u[m*3+2]=v*Math.sin(x)*Math.cos(d);const o=m/50;s[m*3]=.659*(1-o)+.133*o,s[m*3+1]=.333*(1-o)+.827*o,s[m*3+2]=.969*(1-o)+.933*o,n[m]=.015+Math.random()*.025}return{positions:u,colors:s,sizes:n}},[]);return e.jsx("group",{ref:l,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t,1]})]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:S})]})})}function H({onImpactsReady:l}){const p=r.useRef([]),i=r.useRef(Array.from({length:8},()=>({position:new C,intensity:0,active:!1,age:0})));return b((M,h)=>{for(;p.current.length>0&&i.current.some(a=>!a.active);){const a=p.current.shift(),u=i.current.find(s=>!s.active);u&&(u.position.copy(a.position),u.intensity=a.intensity,u.active=!0,u.age=0)}const t=1.5;i.current.forEach(a=>{a.active&&(a.age+=h,a.intensity=Math.max(0,1-a.age*t),a.intensity<=0&&(a.active=!1))}),l(i.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),r.useEffect(()=>(window.__aetherius_addImpact=M=>{p.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function q(){const[l,p]=r.useState([]),i=r.useRef(""),M=r.useCallback(h=>{let t=h.length+":";for(let a=0;a<h.length;a++){const u=h[a];t+=u.position.x.toFixed(1)+","+u.position.y.toFixed(1)+","+u.position.z.toFixed(1)+","+u.intensity.toFixed(2)+";"}t!==i.current&&(i.current=t,p(h))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{impactPoints:l}),e.jsx(H,{onImpactsReady:M})]})}function Y({liveData:l,paused:p}){const i=r.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=r.useCallback(n=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(n)},[]),h=r.useRef({intensity:1,pulse:.4,block:null});r.useEffect(()=>{const n=()=>{const x=l||{},f=parseFloat(String(x.volume||"").replace(/[^0-9.]/g,""))||0,v=parseFloat(String(x.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(f/500,.5)+Math.min(v/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const o=h.current;o.intensity=d,x.block&&x.block!=="—"&&x.block!==o.block?(o.block=x.block,o.pulse=1):o.pulse=Math.max(.3,(o.pulse||.3)*.94)};n();const m=setInterval(n,400);return()=>clearInterval(m)},[l]);const t=r.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=r.useMemo(()=>({alpha:!0,antialias:!i,powerPreference:"high-performance"}),[i]),u=r.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),s=r.useMemo(()=>[1,1.5],[]);return e.jsxs(F,{camera:t,gl:a,onCreated:({gl:n})=>n.setClearColor(0,0),style:u,dpr:s,frameloop:p?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(q,{}),e.jsx(D,{flowRef:h}),e.jsx(G,{liveData:l,onImpact:M,flowRef:h}),e.jsx(L,{}),e.jsx(B,{}),e.jsx(V,{}),e.jsx(U,{liveData:l}),e.jsx($,{})]}),!i&&e.jsx(N,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),e.jsx(R,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Y as default};
