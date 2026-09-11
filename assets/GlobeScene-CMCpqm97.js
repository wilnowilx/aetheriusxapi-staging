import{r as c,j as t,C as E,S as T,O,u as P}from"./r3f-CWToFXIM.js";import{q as N,p as j,e as z,r as W,F as R,h as b}from"./three-D-ovYI32.js";function U(){const n=c.useMemo(()=>({time:{value:0},colorA:{value:new z(11032055)},colorB:{value:new z(14239471)}}),[]);return P((l,a)=>{n.time.value+=a*.4}),t.jsxs("mesh",{scale:1.4,children:[t.jsx("sphereGeometry",{args:[2.2,24,18]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          uniform float time; uniform vec3 colorA; uniform vec3 colorB;
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
            float pulse = 0.85 + 0.15 * sin(time * 0.4 + vWorldPos.y * 1.2);
            float wave = 0.5 + 0.5 * sin(time * 0.3 + vWorldPos.x * 1.8);
            vec3 col = mix(colorA, colorB, wave * 0.2);
            gl_FragColor = vec4(col, fresnel * pulse * 0.05);
          }
        `,side:W,transparent:!0,depthWrite:!1,blending:j})]})}function B(){const n=c.useMemo(()=>({time:{value:0},colorA:{value:new z(2282478)},colorB:{value:new z(11032055)}}),[]);return P((l,a)=>{n.time.value+=a*.8}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,32,24]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          uniform float time; uniform vec3 colorA; uniform vec3 colorB;
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 1.4);
            float pulse = 0.88 + 0.12 * sin(time * 0.8 + vWorldPos.y * 2.0);
            float wave = 0.5 + 0.5 * sin(time * 0.5 + vWorldPos.x * 2.2 + vWorldPos.z * 1.3);
            vec3 col = mix(colorA, colorB, wave * 0.25);
            gl_FragColor = vec4(col, fresnel * pulse * 0.1);
          }
        `,side:W,transparent:!0,depthWrite:!1,blending:j})]})}function L(){const n=c.useMemo(()=>({time:{value:0}}),[]);return P((l,a)=>{n.time.value+=a*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:j})]})}function k({impactPoints:n}){const l=c.useRef(),a=c.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return P((M,h)=>{if(a.time.value+=h*.5,n)for(let o=0;o<8&&o<n.length;o++){const e=n[o];a[`impact${o}`].value.copy(e.position),a[`i${o}t`].value=e.intensity}}),t.jsxs("mesh",{ref:l,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:a,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function G({flowRef:n}){const l=c.useRef(),a=c.useRef(0),M=c.useMemo(()=>{const h=document.createElement("canvas");h.width=512,h.height=128;const o=h.getContext("2d");return o.clearRect(0,0,512,128),o.font="bold 72px monospace",o.textAlign="center",o.textBaseline="middle",o.fillStyle="#0052FF",o.shadowColor="#0052FF",o.shadowBlur=30,o.fillText("BASE",256,64),o.shadowBlur=0,o.fillText("BASE",256,64),new N(h)},[]);return P((h,o)=>{a.current+=o;const e=(n==null?void 0:n.current)||{intensity:1,pulse:.3};if(e.pulse=Math.max(.25,(e.pulse||0)-o*1.8),l.current){l.current.rotation.y=a.current*(.15+.15*e.intensity),l.current.rotation.x=a.current*.1;const i=1+.02*Math.sin(a.current*1.5)+.1*e.pulse;l.current.scale.set(i,i,i)}}),t.jsxs("group",{ref:l,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:M,transparent:!0,blending:j,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function D({liveData:n,onImpact:l,flowRef:a}){const h=c.useRef(0),o=c.useRef(),e=2.2,f=e*e,i=d=>{var A;const v=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),r=Math.max(.5,Math.min(1.8,((A=a==null?void 0:a.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*r);d[0]=Math.sin(m)*Math.cos(v)*y,d[1]=Math.sin(m)*Math.sin(v)*y,d[2]=Math.cos(m)*y},p=(d,v,m)=>{if(Math.random()<.38)d[m*3]=.063,d[m*3+1]=.725,d[m*3+2]=.506,v[m]=.03+Math.random()*.035;else{const r=Math.random();d[m*3]=0*(1-r)+.659*r,d[m*3+1]=.322*(1-r)+.333*r,d[m*3+2]=1*(1-r)+.969*r,v[m]=.02+Math.random()*.03}},s=c.useMemo(()=>{const d=new Float32Array(168),v=new Float32Array(168),m=new Float32Array(168),r=new Float32Array(56),y=new Float32Array(56),A=new Float32Array(56),F=new Uint8Array(56);for(let x=0;x<56;x++){d[x*3]=(Math.random()-.5)*.3,d[x*3+1]=(Math.random()-.5)*.3,d[x*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),C=1.1+Math.random()*.8;v[x*3]=Math.sin(S)*Math.cos(_)*C,v[x*3+1]=Math.sin(S)*Math.sin(_)*C,v[x*3+2]=Math.cos(S)*C;const w=Math.random();Math.random()<.38?(m[x*3]=.063,m[x*3+1]=.725,m[x*3+2]=.506,r[x]=.03+Math.random()*.035):(m[x*3]=0*(1-w)+.659*w,m[x*3+1]=.322*(1-w)+.333*w,m[x*3+2]=1*(1-w)+.969*w,r[x]=.02+Math.random()*.03),y[x]=Math.random()*3,A[x]=1.6+Math.random()*1}return{positions:d,velocities:v,colors:m,sizes:r,lifetimes:y,maxLifetimes:A,hit:F}},[]),g=c.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return P((d,v)=>{var I;h.current+=v,g.time.value=h.current;const m=Math.max(.5,Math.min(1.8,((I=a==null?void 0:a.current)==null?void 0:I.intensity)||1));g.flow.value=m;const{positions:r,velocities:y,colors:A,sizes:F,lifetimes:x,maxLifetimes:_,hit:S}=s,C=[0,0,0];let w=!1;for(let u=0;u<56;u++){if(x[u]+=v,x[u]>=_[u]){r[u*3]=(Math.random()-.5)*.3,r[u*3+1]=(Math.random()-.5)*.3,r[u*3+2]=(Math.random()-.5)*.3,i(C),y[u*3]=C[0],y[u*3+1]=C[1],y[u*3+2]=C[2],p(A,F,u),w=!0,x[u]=0,_[u]=1.6+Math.random()*1,S[u]=0;continue}r[u*3]+=y[u*3]*v,r[u*3+1]+=y[u*3+1]*v,r[u*3+2]+=y[u*3+2]*v,r[u*3]*r[u*3]+r[u*3+1]*r[u*3+1]+r[u*3+2]*r[u*3+2]>=f&&!S[u]&&(S[u]=1,l&&l({position:new b(r[u*3],r[u*3+1],r[u*3+2]),intensity:1}))}o.current&&(o.current.geometry.attributes.position.needsUpdate=!0,w&&(o.current.geometry.attributes.aColor.needsUpdate=!0,o.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:o,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[s.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[s.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function V(){const{positions:l,colors:a,sizes:M}=c.useMemo(()=>{const o=new Float32Array(300),e=new Float32Array(300),f=new Float32Array(100);for(let i=0;i<100;i++){const p=Math.acos(-1+2*i/100),s=Math.sqrt(100*Math.PI)*p,g=2.35;o[i*3]=g*Math.cos(s)*Math.sin(p),o[i*3+1]=g*Math.sin(s)*Math.sin(p),o[i*3+2]=g*Math.cos(p);const d=i>=60;if(d)e[i*3]=.133,e[i*3+1]=.827,e[i*3+2]=.933;else{const v=new z().setHSL(.75+Math.random()*.1,.7,.6);e[i*3]=v.r,e[i*3+1]=v.g,e[i*3+2]=v.b}f[i]=d?.09:.055}return{positions:o,colors:e,sizes:f}},[]),h=c.useMemo(()=>({time:{value:0}}),[]);return P((o,e)=>{h.time.value+=e*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[l,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[a,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function $(){return t.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((n,l)=>t.jsxs("mesh",{rotation:[n.tilt,0,l*.3],children:[t.jsx("torusGeometry",{args:[n.radius,.005,8,160]}),t.jsx("meshBasicMaterial",{color:n.color,transparent:!0,opacity:n.opacity})]},l))})}function q({liveData:n}){const l=c.useRef(),a=c.useRef([]),M=c.useRef(0),[h,o]=c.useState(null),e=c.useMemo(()=>{const i=n||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${i.block||"—"}`,color:"#0052FF",size:.65},{text:`${i.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:i.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[n]),f=c.useMemo(()=>e.map(i=>{const p=document.createElement("canvas");p.width=512,p.height=128;const s=p.getContext("2d");return s.clearRect(0,0,512,128),s.font=`bold ${Math.round(i.size*80)}px monospace`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=i.color,s.shadowColor=i.color,s.shadowBlur=20,s.fillText(i.text,256,64),new N(p)}),[e]);return P((i,p)=>{M.current+=p,l.current&&(l.current.rotation.y=M.current*.12),a.current.forEach((s,g)=>{if(s){const d=h===g;s.material.opacity=d?.9:.45+.2*Math.sin(M.current*1.5+g*1.2);const v=d?e[g].size*2.4:e[g].size*1.8;s.scale.x+=(v-s.scale.x)*.1}})}),t.jsx("group",{ref:l,children:f.map((i,p)=>{const s=p/f.length*Math.PI*2,g=p%3,d=2.6+g*.25,v=.12*g;return t.jsx("sprite",{ref:m=>{a.current[p]=m},position:[d*Math.cos(s),d*Math.sin(s)*Math.sin(v),d*Math.sin(s)*Math.cos(v)],scale:[e[p].size*1.8,e[p].size*.45,1],onPointerOver:m=>{m.stopPropagation(),o(p),document.body.style.cursor="pointer"},onPointerOut:()=>{o(null),document.body.style.cursor="auto"},children:t.jsx("spriteMaterial",{map:i,transparent:!0,blending:j,opacity:.35,depthWrite:!1})},p)})})}function H(){const n=c.useRef(),l=c.useMemo(()=>({time:{value:0}}),[]),a=c.useRef(0);P((e,f)=>{a.current+=f,l.time.value=a.current,n.current&&(n.current.rotation.y=a.current*.06)});const{positions:M,colors:h,sizes:o}=c.useMemo(()=>{const f=new Float32Array(240),i=new Float32Array(240),p=new Float32Array(80);for(let s=0;s<80;s++){const g=s/80*Math.PI*2,d=s%3,v=2.55+d*.22,m=.15*d;f[s*3]=v*Math.cos(g),f[s*3+1]=v*Math.sin(g)*Math.sin(m),f[s*3+2]=v*Math.sin(g)*Math.cos(m);const r=s/80;i[s*3]=.659*(1-r)+.133*r,i[s*3+1]=.333*(1-r)+.827*r,i[s*3+2]=.969*(1-r)+.933*r,p[s]=.015+Math.random()*.025}return{positions:f,colors:i,sizes:p}},[]);return t.jsx("group",{ref:n,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[o,1]})]}),t.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})})}function Q({onImpactsReady:n}){const l=c.useRef([]),a=c.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return P((M,h)=>{for(;l.current.length>0&&a.current.some(e=>!e.active);){const e=l.current.shift(),f=a.current.find(i=>!i.active);f&&(f.position.copy(e.position),f.intensity=e.intensity,f.active=!0,f.age=0)}const o=1.5;a.current.forEach(e=>{e.active&&(e.age+=h,e.intensity=Math.max(0,1-e.age*o),e.intensity<=0&&(e.active=!1))}),n(a.current.filter(e=>e.active).map(e=>({position:e.position,intensity:e.intensity})))}),c.useEffect(()=>(window.__aetherius_addImpact=M=>{l.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function K(){const[n,l]=c.useState([]),a=c.useRef(""),M=c.useCallback(h=>{let o=h.length+":";for(let e=0;e<h.length;e++){const f=h[e];o+=f.position.x.toFixed(1)+","+f.position.y.toFixed(1)+","+f.position.z.toFixed(1)+","+f.intensity.toFixed(2)+";"}o!==a.current&&(a.current=o,l(h))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{impactPoints:n}),t.jsx(Q,{onImpactsReady:M})]})}function Y({liveData:n,paused:l}){const a=c.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=c.useCallback(p=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(p)},[]),h=c.useRef({intensity:1,pulse:.4,block:null});c.useEffect(()=>{const p=()=>{const g=n||{},d=parseFloat(String(g.volume||"").replace(/[^0-9.]/g,""))||0,v=parseFloat(String(g.gas||"").replace(/[^0-9.]/g,""))||0;let m=.9+Math.min(d/500,.5)+Math.min(v/50,.25)+Math.random()*.15;m=Math.max(.6,Math.min(1.8,m));const r=h.current;r.intensity=m,g.block&&g.block!=="—"&&g.block!==r.block?(r.block=g.block,r.pulse=1):r.pulse=Math.max(.3,(r.pulse||.3)*.94)};p();const s=setInterval(p,400);return()=>clearInterval(s)},[n]);const o=c.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),e=c.useMemo(()=>({alpha:!0,antialias:!a,powerPreference:"high-performance"}),[a]),f=c.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),i=c.useMemo(()=>[1,1.5],[]);return t.jsxs(E,{camera:o,gl:e,onCreated:({gl:p})=>p.setClearColor(0,0),style:f,dpr:i,frameloop:l?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(K,{}),t.jsx(G,{flowRef:h}),t.jsx(D,{liveData:n,onImpact:M,flowRef:h}),t.jsx(U,{}),t.jsx(B,{}),t.jsx(L,{}),t.jsx(V,{}),t.jsx($,{}),t.jsx(q,{liveData:n}),t.jsx(H,{})]}),!a&&t.jsx(T,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),t.jsx(O,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Y as default};
