import{r as n,j as t,C as F,S as R,O as N,u as P}from"./r3f-CWToFXIM.js";import{q as T,p as j,e as I,r as O,F as W,h as b}from"./three-D-ovYI32.js";const U=({liveData:c})=>{const u=n.useRef(),i=n.useRef(0),x=n.useMemo(()=>{const o=c||{};return["THE","MARKETPLACE","THAT","LIVES","•","API","INFRASTRUCTURE","FOR","AI","AGENTS","THAT","PAY","•",`${o.endpoints||"100+"}`,"ENDPOINTS","•",`${o.freeEndpoints||"40"}`,"FREE","•",`${o.latency||"—"}`]},[c]),f=n.useMemo(()=>x.map((o,e)=>{const m=o==="•",a=document.createElement("canvas");a.width=m?128:512,a.height=128;const l=a.getContext("2d");l.clearRect(0,0,a.width,a.height);const s=Math.round(1.1*(m?60:80));l.font=`bold ${s}px 'JetBrains Mono', monospace`,l.textAlign="center",l.textBaseline="middle";const g=e/x.length,d=Math.round(200+55*Math.sin(g*Math.PI*2)),h=Math.round(133+84*Math.sin(g*Math.PI*2+2.1)),p=Math.round(247-58*Math.sin(g*Math.PI*2+4.2)),r=`rgb(${d},${h},${p})`;return l.fillStyle=r,l.shadowColor=r,l.shadowBlur=m?8:20,l.fillText(o,a.width/2,a.height/2),new T(a)}),[x]);return P((o,e)=>{i.current+=e,u.current&&(u.current.rotation.y=i.current*.05)}),t.jsxs("group",{ref:u,rotation:[Math.PI/2,0,0],children:[x.map((o,e)=>{const m=e/x.length*Math.PI*2;return t.jsx("sprite",{position:[3*Math.cos(m),3*Math.sin(m),0],scale:[1.1*(o==="•"?.6:1.8),1.1*.45,1],children:t.jsx("spriteMaterial",{map:f[e],transparent:!0,blending:j,opacity:.55,depthWrite:!1})},e)}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[3,.002,8,160]}),t.jsx("meshBasicMaterial",{color:11032055,transparent:!0,opacity:.08,depthWrite:!1})]})]})};function B(){const c=n.useMemo(()=>({time:{value:0},colorA:{value:new I(2282478)},colorB:{value:new I(11032055)},colorC:{value:new I(14239471)}}),[]);return P((u,i)=>{c.time.value+=i*.6}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,28,20]}),t.jsx("shaderMaterial",{uniforms:c,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:j})]})}function L(){const c=n.useMemo(()=>({time:{value:0}}),[]);return P((u,i)=>{c.time.value+=i*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:c,vertexShader:`
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
        `,side:W,transparent:!0,depthWrite:!1,blending:j})]})}function k({impactPoints:c}){const u=n.useRef(),i=n.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return P((x,f)=>{if(i.time.value+=f*.5,c)for(let o=0;o<8&&o<c.length;o++){const e=c[o];i[`impact${o}`].value.copy(e.position),i[`i${o}t`].value=e.intensity}}),t.jsxs("mesh",{ref:u,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:i,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function $({flowRef:c}){const u=n.useRef(),i=n.useRef(0),x=n.useMemo(()=>{const f=document.createElement("canvas");f.width=512,f.height=128;const o=f.getContext("2d");return o.clearRect(0,0,512,128),o.font="bold 72px monospace",o.textAlign="center",o.textBaseline="middle",o.fillStyle="#0052FF",o.shadowColor="#0052FF",o.shadowBlur=30,o.fillText("BASE",256,64),o.shadowBlur=0,o.fillText("BASE",256,64),new T(f)},[]);return P((f,o)=>{i.current+=o;const e=(c==null?void 0:c.current)||{intensity:1,pulse:.3};if(e.pulse=Math.max(.25,(e.pulse||0)-o*1.8),u.current){u.current.rotation.y=i.current*(.15+.15*e.intensity),u.current.rotation.x=i.current*.1;const a=1+.02*Math.sin(i.current*1.5)+.1*e.pulse;u.current.scale.set(a,a,a)}}),t.jsxs("group",{ref:u,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:x,transparent:!0,blending:j,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function G({liveData:c,onImpact:u,flowRef:i}){const f=n.useRef(0),o=n.useRef(),e=2.2,m=e*e,a=d=>{var A;const h=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),r=Math.max(.5,Math.min(1.8,((A=i==null?void 0:i.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*r);d[0]=Math.sin(p)*Math.cos(h)*y,d[1]=Math.sin(p)*Math.sin(h)*y,d[2]=Math.cos(p)*y},l=(d,h,p)=>{if(Math.random()<.38)d[p*3]=.063,d[p*3+1]=.725,d[p*3+2]=.506,h[p]=.03+Math.random()*.035;else{const r=Math.random();d[p*3]=0*(1-r)+.659*r,d[p*3+1]=.322*(1-r)+.333*r,d[p*3+2]=1*(1-r)+.969*r,h[p]=.02+Math.random()*.03}},s=n.useMemo(()=>{const d=new Float32Array(108),h=new Float32Array(108),p=new Float32Array(108),r=new Float32Array(36),y=new Float32Array(36),A=new Float32Array(36),z=new Uint8Array(36);for(let M=0;M<36;M++){d[M*3]=(Math.random()-.5)*.3,d[M*3+1]=(Math.random()-.5)*.3,d[M*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),w=1.1+Math.random()*.8;h[M*3]=Math.sin(S)*Math.cos(_)*w,h[M*3+1]=Math.sin(S)*Math.sin(_)*w,h[M*3+2]=Math.cos(S)*w;const C=Math.random();Math.random()<.38?(p[M*3]=.063,p[M*3+1]=.725,p[M*3+2]=.506,r[M]=.03+Math.random()*.035):(p[M*3]=0*(1-C)+.659*C,p[M*3+1]=.322*(1-C)+.333*C,p[M*3+2]=1*(1-C)+.969*C,r[M]=.02+Math.random()*.03),y[M]=Math.random()*3,A[M]=1.6+Math.random()*1}return{positions:d,velocities:h,colors:p,sizes:r,lifetimes:y,maxLifetimes:A,hit:z}},[]),g=n.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return P((d,h)=>{var E;f.current+=h,g.time.value=f.current;const p=Math.max(.5,Math.min(1.8,((E=i==null?void 0:i.current)==null?void 0:E.intensity)||1));g.flow.value=p;const{positions:r,velocities:y,colors:A,sizes:z,lifetimes:M,maxLifetimes:_,hit:S}=s,w=[0,0,0];let C=!1;for(let v=0;v<36;v++){if(M[v]+=h,M[v]>=_[v]){r[v*3]=(Math.random()-.5)*.3,r[v*3+1]=(Math.random()-.5)*.3,r[v*3+2]=(Math.random()-.5)*.3,a(w),y[v*3]=w[0],y[v*3+1]=w[1],y[v*3+2]=w[2],l(A,z,v),C=!0,M[v]=0,_[v]=1.6+Math.random()*1,S[v]=0;continue}r[v*3]+=y[v*3]*h,r[v*3+1]+=y[v*3+1]*h,r[v*3+2]+=y[v*3+2]*h,r[v*3]*r[v*3]+r[v*3+1]*r[v*3+1]+r[v*3+2]*r[v*3+2]>=m&&!S[v]&&(S[v]=1,u&&u({position:new b(r[v*3],r[v*3+1],r[v*3+2]),intensity:1}))}o.current&&(o.current.geometry.attributes.position.needsUpdate=!0,C&&(o.current.geometry.attributes.aColor.needsUpdate=!0,o.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:o,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[s.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[s.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function D(){const{positions:u,colors:i,sizes:x}=n.useMemo(()=>{const o=new Float32Array(300),e=new Float32Array(300),m=new Float32Array(100);for(let a=0;a<100;a++){const l=Math.acos(-1+2*a/100),s=Math.sqrt(100*Math.PI)*l,g=2.35;o[a*3]=g*Math.cos(s)*Math.sin(l),o[a*3+1]=g*Math.sin(s)*Math.sin(l),o[a*3+2]=g*Math.cos(l);const d=a>=60;if(d)e[a*3]=.133,e[a*3+1]=.827,e[a*3+2]=.933;else{const h=new I().setHSL(.75+Math.random()*.1,.7,.6);e[a*3]=h.r,e[a*3+1]=h.g,e[a*3+2]=h.b}m[a]=d?.09:.055}return{positions:o,colors:e,sizes:m}},[]),f=n.useMemo(()=>({time:{value:0}}),[]);return P((o,e)=>{f.time.value+=e*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[u,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function V(){return t.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((c,u)=>t.jsxs("mesh",{rotation:[c.tilt,0,u*.3],children:[t.jsx("torusGeometry",{args:[c.radius,.005,8,160]}),t.jsx("meshBasicMaterial",{color:c.color,transparent:!0,opacity:c.opacity})]},u))})}function H({liveData:c}){const u=n.useRef(),i=n.useRef([]),x=n.useRef(0),[f,o]=n.useState(null),e=n.useMemo(()=>{const a=c||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${a.block||"—"}`,color:"#0052FF",size:.65},{text:`${a.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:a.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[c]),m=n.useMemo(()=>e.map(a=>{const l=document.createElement("canvas");l.width=512,l.height=128;const s=l.getContext("2d");return s.clearRect(0,0,512,128),s.font=`bold ${Math.round(a.size*80)}px monospace`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=a.color,s.shadowColor=a.color,s.shadowBlur=20,s.fillText(a.text,256,64),new T(l)}),[e]);return P((a,l)=>{x.current+=l,u.current&&(u.current.rotation.y=x.current*.12),i.current.forEach((s,g)=>{if(s){const d=f===g;s.material.opacity=d?.9:.45+.2*Math.sin(x.current*1.5+g*1.2);const h=d?e[g].size*2.4:e[g].size*1.8;s.scale.x+=(h-s.scale.x)*.1}})}),t.jsx("group",{ref:u,children:m.map((a,l)=>{const s=l/m.length*Math.PI*2,g=l%3,d=2.6+g*.25,h=.12*g;return t.jsx("sprite",{ref:p=>{i.current[l]=p},position:[d*Math.cos(s),d*Math.sin(s)*Math.sin(h),d*Math.sin(s)*Math.cos(h)],scale:[e[l].size*1.8,e[l].size*.45,1],onPointerOver:p=>{p.stopPropagation(),o(l),document.body.style.cursor="pointer"},onPointerOut:()=>{o(null),document.body.style.cursor="auto"},children:t.jsx("spriteMaterial",{map:a,transparent:!0,blending:j,opacity:.35,depthWrite:!1})},l)})})}function q(){const c=n.useRef(),u=n.useMemo(()=>({time:{value:0}}),[]),i=n.useRef(0);P((e,m)=>{i.current+=m,u.time.value=i.current,c.current&&(c.current.rotation.y=i.current*.06)});const{positions:x,colors:f,sizes:o}=n.useMemo(()=>{const m=new Float32Array(240),a=new Float32Array(240),l=new Float32Array(80);for(let s=0;s<80;s++){const g=s/80*Math.PI*2,d=s%3,h=2.55+d*.22,p=.15*d;m[s*3]=h*Math.cos(g),m[s*3+1]=h*Math.sin(g)*Math.sin(p),m[s*3+2]=h*Math.sin(g)*Math.cos(p);const r=s/80;a[s*3]=.659*(1-r)+.133*r,a[s*3+1]=.333*(1-r)+.827*r,a[s*3+2]=.969*(1-r)+.933*r,l[s]=.015+Math.random()*.025}return{positions:m,colors:a,sizes:l}},[]);return t.jsx("group",{ref:c,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[o,1]})]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})})}function K({onImpactsReady:c}){const u=n.useRef([]),i=n.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return P((x,f)=>{for(;u.current.length>0&&i.current.some(e=>!e.active);){const e=u.current.shift(),m=i.current.find(a=>!a.active);m&&(m.position.copy(e.position),m.intensity=e.intensity,m.active=!0,m.age=0)}const o=1.5;i.current.forEach(e=>{e.active&&(e.age+=f,e.intensity=Math.max(0,1-e.age*o),e.intensity<=0&&(e.active=!1))}),c(i.current.filter(e=>e.active).map(e=>({position:e.position,intensity:e.intensity})))}),n.useEffect(()=>(window.__aetherius_addImpact=x=>{u.current.push(x)},()=>{delete window.__aetherius_addImpact}),[]),null}function Q(){const[c,u]=n.useState([]),i=n.useRef(""),x=n.useCallback(f=>{let o=f.length+":";for(let e=0;e<f.length;e++){const m=f[e];o+=m.position.x.toFixed(1)+","+m.position.y.toFixed(1)+","+m.position.z.toFixed(1)+","+m.intensity.toFixed(2)+";"}o!==i.current&&(i.current=o,u(f))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{impactPoints:c}),t.jsx(K,{onImpactsReady:x})]})}function X({liveData:c,paused:u}){const i=n.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),x=n.useCallback(l=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(l)},[]),f=n.useRef({intensity:1,pulse:.4,block:null});n.useEffect(()=>{const l=()=>{const g=c||{},d=parseFloat(String(g.volume||"").replace(/[^0-9.]/g,""))||0,h=parseFloat(String(g.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(d/500,.5)+Math.min(h/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const r=f.current;r.intensity=p,g.block&&g.block!=="—"&&g.block!==r.block?(r.block=g.block,r.pulse=1):r.pulse=Math.max(.3,(r.pulse||.3)*.94)};l();const s=setInterval(l,400);return()=>clearInterval(s)},[c]);const o=n.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),e=n.useMemo(()=>({alpha:!0,antialias:!i,powerPreference:"high-performance"}),[i]),m=n.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),a=n.useMemo(()=>[1,1.5],[]);return t.jsxs(F,{camera:o,gl:e,onCreated:({gl:l})=>l.setClearColor(0,0),style:m,dpr:a,frameloop:u?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(Q,{}),t.jsx($,{flowRef:f}),t.jsx(G,{liveData:c,onImpact:x,flowRef:f}),t.jsx(B,{}),t.jsx(L,{}),t.jsx(D,{}),t.jsx(V,{}),t.jsx(U,{liveData:c}),t.jsx(H,{liveData:c}),t.jsx(q,{})]}),!i&&t.jsx(R,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),t.jsx(N,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{X as default};
