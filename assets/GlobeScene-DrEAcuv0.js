import{r as u,j as t,C as N,S as E,O,u as w}from"./r3f-C0dCSPeq.js";import{q as I,p as C,e as T,r as U,F as R,s as W,h as b}from"./three-BuKzPtX4.js";const B=({liveData:m})=>{const p=u.useRef(),c=u.useRef(0),M=u.useMemo(()=>{const o=m||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${o.endpoints||"100+"} ENDPOINTS   ${o.freeEndpoints||"40"} FREE   ${o.latency||"—"}   `}]},[m]),g=u.useMemo(()=>M.map(o=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const s=e.getContext("2d");s.clearRect(0,0,e.width,e.height);const i=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;s.font=i,s.textAlign="center",s.textBaseline="middle";const h=o.text,l=s.measureText(h).width,d=Math.ceil((e.width+l)/l),f=(e.width-l*d)/2+l/2;s.fillStyle=o.color,s.shadowColor=o.color,s.shadowBlur=32;for(let x=0;x<d;x++)s.fillText(h,f+x*l,e.height/2);s.shadowBlur=16;for(let x=0;x<d;x++)s.fillText(h,f+x*l,e.height/2);if(s.shadowBlur=0,s.fillStyle="#ffffff",o.color==="#ffffff")for(let x=0;x<d;x++)s.fillText(h,f+x*l,e.height/2);else{s.fillStyle=o.color;for(let x=0;x<d;x++)s.fillText(h,f+x*l,e.height/2)}const n=new I(e);return n.anisotropy=8,n.minFilter=W,n.magFilter=W,n}),[M]),[r,a]=u.useState(null);return w((o,e)=>{c.current+=e,p.current&&M.forEach((s,i)=>{const h=p.current.children[i];h&&(r===i||(h.rotation.y+=e*s.speed))})}),t.jsx("group",{ref:p,children:M.map((o,e)=>t.jsxs("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:s=>{s.stopPropagation(),a(e),document.body.style.cursor="pointer"},onPointerOut:()=>{a(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new b(o.radius,o.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:g[e],transparent:!0,opacity:r===e?1:o.opacity,side:R,depthWrite:!1,blending:C})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[o.radius,o.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:o.color,transparent:!0,opacity:o.opacity*.12,depthWrite:!1})]})]},e))})};function L(){const m=u.useMemo(()=>({time:{value:0},colorA:{value:new T(2282478)},colorB:{value:new T(11032055)},colorC:{value:new T(14239471)}}),[]);return w((p,c)=>{m.time.value+=c*.6}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,28,20]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
        `,side:U,transparent:!0,depthWrite:!1,blending:C})]})}function G(){const m=u.useMemo(()=>({time:{value:0}}),[]);return w((p,c)=>{m.time.value+=c*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:C})]})}function k({impactPoints:m}){const p=u.useRef(),c=u.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return w((M,g)=>{if(c.time.value+=g*.5,m)for(let r=0;r<8&&r<m.length;r++){const a=m[r];c[`impact${r}`].value.copy(a.position),c[`i${r}t`].value=a.intensity}}),t.jsxs("mesh",{ref:p,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:c,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function V({flowRef:m}){const p=u.useRef(),c=u.useRef(0),M=u.useMemo(()=>{const g=document.createElement("canvas");g.width=512,g.height=128;const r=g.getContext("2d");return r.clearRect(0,0,512,128),r.font="bold 72px monospace",r.textAlign="center",r.textBaseline="middle",r.fillStyle="#0052FF",r.shadowColor="#0052FF",r.shadowBlur=30,r.fillText("BASE",256,64),r.shadowBlur=0,r.fillText("BASE",256,64),new I(g)},[]);return w((g,r)=>{var o;c.current+=r;const a=(m==null?void 0:m.current)||{intensity:1,pulse:.3};if(a.pulse=Math.max(.25,(a.pulse||0)-r*1.8),p.current){p.current.rotation.y=c.current*(.15+.15*a.intensity),p.current.rotation.x=c.current*.1;const e=Math.sin(c.current*1.8),s=1+.06*e+.22*a.pulse;p.current.scale.set(s,s,s);const i=(o=p.current.children[0])==null?void 0:o.material;i&&(i.opacity=.75+.2*e+.15*a.pulse)}}),t.jsxs("group",{ref:p,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:M,transparent:!0,blending:C,opacity:.9,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.42,20,16]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.14,depthWrite:!1,blending:C})]}),t.jsxs("mesh",{scale:1.6,children:[t.jsx("sphereGeometry",{args:[.42,16,12]}),t.jsx("meshBasicMaterial",{color:2282478,transparent:!0,opacity:.04,depthWrite:!1,blending:C})]})]})}function D({liveData:m,onImpact:p,flowRef:c}){const g=u.useRef(0),r=u.useRef(),a=2.2,o=a*a,e=l=>{var A;const d=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1),n=Math.max(.5,Math.min(1.8,((A=c==null?void 0:c.current)==null?void 0:A.intensity)||1)),x=(1.1+Math.random()*.8)*(.75+.45*n);l[0]=Math.sin(f)*Math.cos(d)*x,l[1]=Math.sin(f)*Math.sin(d)*x,l[2]=Math.cos(f)*x},s=(l,d,f)=>{if(Math.random()<.42)l[f*3]=.08,l[f*3+1]=.85,l[f*3+2]=.55,d[f]=.055+Math.random()*.045;else{const n=Math.random();l[f*3]=.15*(1-n)+.78*n,l[f*3+1]=.45*(1-n)+.35*n,l[f*3+2]=1*(1-n)+.97*n,d[f]=.04+Math.random()*.04}},i=u.useMemo(()=>{const l=new Float32Array(156),d=new Float32Array(156),f=new Float32Array(156),n=new Float32Array(52),x=new Float32Array(52),A=new Float32Array(52),z=new Uint8Array(52);for(let y=0;y<52;y++){l[y*3]=(Math.random()-.5)*.3,l[y*3+1]=(Math.random()-.5)*.3,l[y*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),j=1.1+Math.random()*.8;d[y*3]=Math.sin(S)*Math.cos(_)*j,d[y*3+1]=Math.sin(S)*Math.sin(_)*j,d[y*3+2]=Math.cos(S)*j;const P=Math.random();Math.random()<.38?(f[y*3]=.063,f[y*3+1]=.725,f[y*3+2]=.506,n[y]=.03+Math.random()*.035):(f[y*3]=0*(1-P)+.659*P,f[y*3+1]=.322*(1-P)+.333*P,f[y*3+2]=1*(1-P)+.969*P,n[y]=.02+Math.random()*.03),x[y]=Math.random()*3,A[y]=1.6+Math.random()*1}return{positions:l,velocities:d,colors:f,sizes:n,lifetimes:x,maxLifetimes:A,hit:z}},[]),h=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return w((l,d)=>{var F;g.current+=d,h.time.value=g.current;const f=Math.max(.5,Math.min(1.8,((F=c==null?void 0:c.current)==null?void 0:F.intensity)||1));h.flow.value=f;const{positions:n,velocities:x,colors:A,sizes:z,lifetimes:y,maxLifetimes:_,hit:S}=i,j=[0,0,0];let P=!1;for(let v=0;v<52;v++){if(y[v]+=d,y[v]>=_[v]){n[v*3]=(Math.random()-.5)*.3,n[v*3+1]=(Math.random()-.5)*.3,n[v*3+2]=(Math.random()-.5)*.3,e(j),x[v*3]=j[0],x[v*3+1]=j[1],x[v*3+2]=j[2],s(A,z,v),P=!0,y[v]=0,_[v]=1.6+Math.random()*1,S[v]=0;continue}n[v*3]+=x[v*3]*d,n[v*3+1]+=x[v*3+1]*d,n[v*3+2]+=x[v*3+2]*d,n[v*3]*n[v*3]+n[v*3+1]*n[v*3+1]+n[v*3+2]*n[v*3+2]>=o&&!S[v]&&(S[v]=1,p&&p({position:new b(n[v*3],n[v*3+1],n[v*3+2]),intensity:1}))}r.current&&(r.current.geometry.attributes.position.needsUpdate=!0,P&&(r.current.geometry.attributes.aColor.needsUpdate=!0,r.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:r,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[i.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[i.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function H(){const{positions:p,colors:c,sizes:M}=u.useMemo(()=>{const r=new Float32Array(180),a=new Float32Array(180),o=new Float32Array(60);for(let e=0;e<60;e++){const s=Math.acos(-1+2*e/60),i=Math.sqrt(60*Math.PI)*s,h=2.35;r[e*3]=h*Math.cos(i)*Math.sin(s),r[e*3+1]=h*Math.sin(i)*Math.sin(s),r[e*3+2]=h*Math.cos(s);const l=e>=36;if(l)a[e*3]=.133,a[e*3+1]=.827,a[e*3+2]=.933;else{const d=new T().setHSL(.75+Math.random()*.1,.7,.6);a[e*3]=d.r,a[e*3+1]=d.g,a[e*3+2]=d.b}o[e]=l?.09:.055}return{positions:r,colors:a,sizes:o}},[]),g=u.useMemo(()=>({time:{value:0}}),[]);return w((r,a)=>{g.time.value+=a*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[p,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function $(){const m=u.useRef(),p=u.useMemo(()=>({time:{value:0}}),[]),c=u.useRef(0);w((a,o)=>{c.current+=o,p.time.value=c.current,m.current&&(m.current.rotation.y=c.current*.06)});const{positions:M,colors:g,sizes:r}=u.useMemo(()=>{const o=new Float32Array(150),e=new Float32Array(150),s=new Float32Array(50);for(let i=0;i<50;i++){const h=i/50*Math.PI*2,l=i%3,d=2.55+l*.22,f=.15*l;o[i*3]=d*Math.cos(h),o[i*3+1]=d*Math.sin(h)*Math.sin(f),o[i*3+2]=d*Math.sin(h)*Math.cos(f);const n=i/50;e[i*3]=.659*(1-n)+.133*n,e[i*3+1]=.333*(1-n)+.827*n,e[i*3+2]=.969*(1-n)+.933*n,s[i]=.015+Math.random()*.025}return{positions:o,colors:e,sizes:s}},[]);return t.jsx("group",{ref:m,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[g,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[r,1]})]}),t.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function q({onImpactsReady:m}){const p=u.useRef([]),c=u.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return w((M,g)=>{for(;p.current.length>0&&c.current.some(a=>!a.active);){const a=p.current.shift(),o=c.current.find(e=>!e.active);o&&(o.position.copy(a.position),o.intensity=a.intensity,o.active=!0,o.age=0)}const r=1.5;c.current.forEach(a=>{a.active&&(a.age+=g,a.intensity=Math.max(0,1-a.age*r),a.intensity<=0&&(a.active=!1))}),m(c.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=M=>{p.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function K(){const[m,p]=u.useState([]),c=u.useRef(""),M=u.useCallback(g=>{let r=g.length+":";for(let a=0;a<g.length;a++){const o=g[a];r+=o.position.x.toFixed(1)+","+o.position.y.toFixed(1)+","+o.position.z.toFixed(1)+","+o.intensity.toFixed(2)+";"}r!==c.current&&(c.current=r,p(g))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{impactPoints:m}),t.jsx(q,{onImpactsReady:M})]})}function Q(){const m=u.useRef(),p=u.useRef(0),{positions:c,colors:M,sizes:g}=u.useMemo(()=>{const o=new Float32Array(24),e=new Float32Array(24),s=new Float32Array(8);for(let i=0;i<8;i++){const h=i/8*Math.PI*2+Math.random()*.5,l=4+Math.random()*2;o[i*3]=l*Math.cos(h),o[i*3+1]=(Math.random()-.5)*3,o[i*3+2]=l*Math.sin(h);const d=Math.random();d<.4?(e[i*3]=.13,e[i*3+1]=.82,e[i*3+2]=.93):d<.7?(e[i*3]=.84,e[i*3+1]=.27,e[i*3+2]=.93):(e[i*3]=.83,e[i*3+1]=.66,e[i*3+2]=.32),s[i]=.08+Math.random()*.06}return{positions:o,colors:e,sizes:s}},[]),r=u.useMemo(()=>({time:{value:0}}),[]);return w((a,o)=>{var s,i,h;p.current+=o,r.time.value=p.current,m.current&&(m.current.rotation.y=p.current*.02);const e=(h=(i=(s=m.current)==null?void 0:s.geometry)==null?void 0:i.attributes)==null?void 0:h.aSize;if(e){for(let l=0;l<8;l++)e.array[l]=.06+.05*Math.sin(p.current*2+l*1.5);e.needsUpdate=!0}}),t.jsxs("points",{ref:m,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function X({liveData:m,paused:p}){const c=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=u.useCallback(s=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(s)},[]),g=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const s=()=>{const h=m||{},l=parseFloat(String(h.volume||"").replace(/[^0-9.]/g,""))||0,d=parseFloat(String(h.gas||"").replace(/[^0-9.]/g,""))||0;let f=.9+Math.min(l/500,.5)+Math.min(d/50,.25)+Math.random()*.15;f=Math.max(.6,Math.min(1.8,f));const n=g.current;n.intensity=f,h.block&&h.block!=="—"&&h.block!==n.block?(n.block=h.block,n.pulse=1):n.pulse=Math.max(.3,(n.pulse||.3)*.94)};s();const i=setInterval(s,400);return()=>clearInterval(i)},[m]);const r=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=u.useMemo(()=>({alpha:!0,antialias:!c,powerPreference:"high-performance"}),[c]),o=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),e=u.useMemo(()=>[1,1.5],[]);return t.jsxs(N,{camera:r,gl:a,onCreated:({gl:s})=>s.setClearColor(0,0),style:o,dpr:e,frameloop:p?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(K,{}),t.jsx(V,{flowRef:g}),t.jsx(D,{liveData:m,onImpact:M,flowRef:g}),t.jsx(L,{}),t.jsx(G,{}),t.jsx(H,{}),t.jsx(B,{liveData:m}),t.jsx($,{})]}),!c&&t.jsxs(t.Fragment,{children:[t.jsx(E,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(E,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(Q,{})]}),t.jsx(O,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{X as default};
