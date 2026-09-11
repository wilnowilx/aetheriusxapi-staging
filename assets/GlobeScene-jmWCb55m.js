import{r as c,j as e,C as T,S as E,O as R,u as P}from"./r3f-CWToFXIM.js";import{q as N,p as j,e as I,r as F,F as O,h as b}from"./three-D-ovYI32.js";function U(){const n=c.useMemo(()=>({time:{value:0},colorA:{value:new I(11032055)},colorB:{value:new I(14239471)}}),[]);return P((l,r)=>{n.time.value+=r*.4}),e.jsxs("mesh",{scale:1.4,children:[e.jsx("sphereGeometry",{args:[2.2,24,18]}),e.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:j})]})}function k(){const n=c.useMemo(()=>({time:{value:0},colorA:{value:new I(2282478)},colorB:{value:new I(11032055)}}),[]);return P((l,r)=>{n.time.value+=r*.8}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,32,24]}),e.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:j})]})}function B(){const n=c.useMemo(()=>({time:{value:0}}),[]);return P((l,r)=>{n.time.value+=r*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:j})]})}function L({impactPoints:n}){const l=c.useRef(),r=c.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return P((M,f)=>{if(r.time.value+=f*.5,n)for(let t=0;t<8&&t<n.length;t++){const o=n[t];r[`impact${t}`].value.copy(o.position),r[`i${t}t`].value=o.intensity}}),e.jsxs("mesh",{ref:l,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function G({flowRef:n}){const l=c.useRef(),r=c.useRef(0),M=c.useMemo(()=>{const f=document.createElement("canvas");f.width=512,f.height=512;const t=f.getContext("2d");t.clearRect(0,0,512,512);const o=t.createRadialGradient(256,256,0,256,256,256);return o.addColorStop(0,"rgba(168,85,247,0.9)"),o.addColorStop(.3,"rgba(217,70,239,0.6)"),o.addColorStop(1,"rgba(236,72,153,0.4)"),t.fillStyle=o,t.fillRect(0,0,512,512),t.save(),t.translate(256,256),t.strokeStyle="rgba(168,85,247,0.6)",t.lineWidth=3,t.beginPath(),t.arc(0,0,65,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(34,211,238,0.2)",t.beginPath(),t.arc(0,0,45,0,Math.PI*2),t.fill(),t.lineWidth=2,[0,Math.PI/4,Math.PI/2,3*Math.PI/4,Math.PI,5*Math.PI/4,3*Math.PI/2,7*Math.PI/4].forEach((a,m)=>{t.beginPath(),t.moveTo(0,0),t.rotate(a),t.lineTo(0,50),t.rotate(-a),t.strokeStyle=`rgba(236,72,153,${.5+.3*Math.sin(m*.8)})`,t.stroke()}),t.font="bold 48px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,255,255,0.4)",t.fillText("BASE",0,0),t.restore(),t.strokeStyle="rgba(168,85,247,0.4)",t.lineWidth=6,t.beginPath(),t.arc(256,256,80,0,Math.PI*2),t.stroke(),new N(f)},[]);return P((f,t)=>{r.current+=t;const o=(n==null?void 0:n.current)||{intensity:1,pulse:.3};if(o.pulse=Math.max(.25,(o.pulse||0)-t*1.8),l.current){l.current.rotation.y=r.current*(.15+.15*o.intensity),l.current.rotation.x=r.current*.1;const a=1+.02*Math.sin(r.current*1.5)+.1*o.pulse;l.current.scale.set(a,a,a)}}),e.jsxs("group",{ref:l,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:M,transparent:!0,blending:j,opacity:1,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.4,16,12]}),e.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.05})]})]})}function D({liveData:n,onImpact:l,flowRef:r}){const f=c.useRef(0),t=c.useRef(),o=2.2,h=o*o,a=d=>{var A;const v=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),i=Math.max(.5,Math.min(1.8,((A=r==null?void 0:r.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*i);d[0]=Math.sin(u)*Math.cos(v)*y,d[1]=Math.sin(u)*Math.sin(v)*y,d[2]=Math.cos(u)*y},m=(d,v,u)=>{if(Math.random()<.38)d[u*3]=.063,d[u*3+1]=.725,d[u*3+2]=.506,v[u]=.03+Math.random()*.035;else{const i=Math.random();d[u*3]=0*(1-i)+.659*i,d[u*3+1]=.322*(1-i)+.333*i,d[u*3+2]=1*(1-i)+.969*i,v[u]=.02+Math.random()*.03}},s=c.useMemo(()=>{const d=new Float32Array(168),v=new Float32Array(168),u=new Float32Array(168),i=new Float32Array(56),y=new Float32Array(56),A=new Float32Array(56),z=new Uint8Array(56);for(let x=0;x<56;x++){d[x*3]=(Math.random()-.5)*.3,d[x*3+1]=(Math.random()-.5)*.3,d[x*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),w=1.1+Math.random()*.8;v[x*3]=Math.sin(S)*Math.cos(_)*w,v[x*3+1]=Math.sin(S)*Math.sin(_)*w,v[x*3+2]=Math.cos(S)*w;const C=Math.random();Math.random()<.38?(u[x*3]=.063,u[x*3+1]=.725,u[x*3+2]=.506,i[x]=.03+Math.random()*.035):(u[x*3]=0*(1-C)+.659*C,u[x*3+1]=.322*(1-C)+.333*C,u[x*3+2]=1*(1-C)+.969*C,i[x]=.02+Math.random()*.03),y[x]=Math.random()*3,A[x]=1.6+Math.random()*1}return{positions:d,velocities:v,colors:u,sizes:i,lifetimes:y,maxLifetimes:A,hit:z}},[]),g=c.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return P((d,v)=>{var W;f.current+=v,g.time.value=f.current;const u=Math.max(.5,Math.min(1.8,((W=r==null?void 0:r.current)==null?void 0:W.intensity)||1));g.flow.value=u;const{positions:i,velocities:y,colors:A,sizes:z,lifetimes:x,maxLifetimes:_,hit:S}=s,w=[0,0,0];let C=!1;for(let p=0;p<56;p++){if(x[p]+=v,x[p]>=_[p]){i[p*3]=(Math.random()-.5)*.3,i[p*3+1]=(Math.random()-.5)*.3,i[p*3+2]=(Math.random()-.5)*.3,a(w),y[p*3]=w[0],y[p*3+1]=w[1],y[p*3+2]=w[2],m(A,z,p),C=!0,x[p]=0,_[p]=1.6+Math.random()*1,S[p]=0;continue}i[p*3]+=y[p*3]*v,i[p*3+1]+=y[p*3+1]*v,i[p*3+2]+=y[p*3+2]*v,i[p*3]*i[p*3]+i[p*3+1]*i[p*3+1]+i[p*3+2]*i[p*3+2]>=h&&!S[p]&&(S[p]=1,l&&l({position:new b(i[p*3],i[p*3+1],i[p*3+2]),intensity:1}))}t.current&&(t.current.geometry.attributes.position.needsUpdate=!0,C&&(t.current.geometry.attributes.aColor.needsUpdate=!0,t.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:t,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[s.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[s.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function V(){const{positions:l,colors:r,sizes:M}=c.useMemo(()=>{const t=new Float32Array(300),o=new Float32Array(300),h=new Float32Array(100);for(let a=0;a<100;a++){const m=Math.acos(-1+2*a/100),s=Math.sqrt(100*Math.PI)*m,g=2.35;t[a*3]=g*Math.cos(s)*Math.sin(m),t[a*3+1]=g*Math.sin(s)*Math.sin(m),t[a*3+2]=g*Math.cos(m);const d=a>=60;if(d)o[a*3]=.133,o[a*3+1]=.827,o[a*3+2]=.933;else{const v=new I().setHSL(.75+Math.random()*.1,.7,.6);o[a*3]=v.r,o[a*3+1]=v.g,o[a*3+2]=v.b}h[a]=d?.09:.055}return{positions:t,colors:o,sizes:h}},[]),f=c.useMemo(()=>({time:{value:0}}),[]);return P((t,o)=>{f.time.value+=o*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[l,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[r,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function $(){return e.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((n,l)=>e.jsxs("mesh",{rotation:[n.tilt,0,l*.3],children:[e.jsx("torusGeometry",{args:[n.radius,.005,8,160]}),e.jsx("meshBasicMaterial",{color:n.color,transparent:!0,opacity:n.opacity})]},l))})}function q({liveData:n}){const l=c.useRef(),r=c.useRef([]),M=c.useRef(0),[f,t]=c.useState(null),o=c.useMemo(()=>{const a=n||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${a.block||"—"}`,color:"#0052FF",size:.65},{text:`${a.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:a.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[n]),h=c.useMemo(()=>o.map(a=>{const m=document.createElement("canvas");m.width=512,m.height=128;const s=m.getContext("2d");return s.clearRect(0,0,512,128),s.font=`bold ${Math.round(a.size*80)}px monospace`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=a.color,s.shadowColor=a.color,s.shadowBlur=20,s.fillText(a.text,256,64),new N(m)}),[o]);return P((a,m)=>{M.current+=m,l.current&&(l.current.rotation.y=M.current*.12),r.current.forEach((s,g)=>{if(s){const d=f===g;s.material.opacity=d?.9:.45+.2*Math.sin(M.current*1.5+g*1.2);const v=d?o[g].size*2.4:o[g].size*1.8;s.scale.x+=(v-s.scale.x)*.1}})}),e.jsx("group",{ref:l,children:h.map((a,m)=>{const s=m/h.length*Math.PI*2,g=m%3,d=2.6+g*.25,v=.12*g;return e.jsx("sprite",{ref:u=>{r.current[m]=u},position:[d*Math.cos(s),d*Math.sin(s)*Math.sin(v),d*Math.sin(s)*Math.cos(v)],scale:[o[m].size*1.8,o[m].size*.45,1],onPointerOver:u=>{u.stopPropagation(),t(m),document.body.style.cursor="pointer"},onPointerOut:()=>{t(null),document.body.style.cursor="auto"},children:e.jsx("spriteMaterial",{map:a,transparent:!0,blending:j,opacity:.35,depthWrite:!1})},m)})})}function H(){const n=c.useRef(),l=c.useMemo(()=>({time:{value:0}}),[]),r=c.useRef(0);P((o,h)=>{r.current+=h,l.time.value=r.current,n.current&&(n.current.rotation.y=r.current*.06)});const{positions:M,colors:f,sizes:t}=c.useMemo(()=>{const h=new Float32Array(240),a=new Float32Array(240),m=new Float32Array(80);for(let s=0;s<80;s++){const g=s/80*Math.PI*2,d=s%3,v=2.55+d*.22,u=.15*d;h[s*3]=v*Math.cos(g),h[s*3+1]=v*Math.sin(g)*Math.sin(u),h[s*3+2]=v*Math.sin(g)*Math.cos(u);const i=s/80;a[s*3]=.659*(1-i)+.133*i,a[s*3+1]=.333*(1-i)+.827*i,a[s*3+2]=.969*(1-i)+.933*i,m[s]=.015+Math.random()*.025}return{positions:h,colors:a,sizes:m}},[]);return e.jsx("group",{ref:n,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t,1]})]}),e.jsx("shaderMaterial",{uniforms:l,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})})}function Q({onImpactsReady:n}){const l=c.useRef([]),r=c.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return P((M,f)=>{for(;l.current.length>0&&r.current.some(o=>!o.active);){const o=l.current.shift(),h=r.current.find(a=>!a.active);h&&(h.position.copy(o.position),h.intensity=o.intensity,h.active=!0,h.age=0)}const t=1.5;r.current.forEach(o=>{o.active&&(o.age+=f,o.intensity=Math.max(0,1-o.age*t),o.intensity<=0&&(o.active=!1))}),n(r.current.filter(o=>o.active).map(o=>({position:o.position,intensity:o.intensity})))}),c.useEffect(()=>(window.__aetherius_addImpact=M=>{l.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function K(){const[n,l]=c.useState([]),r=c.useRef(""),M=c.useCallback(f=>{let t=f.length+":";for(let o=0;o<f.length;o++){const h=f[o];t+=h.position.x.toFixed(1)+","+h.position.y.toFixed(1)+","+h.position.z.toFixed(1)+","+h.intensity.toFixed(2)+";"}t!==r.current&&(r.current=t,l(f))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(L,{impactPoints:n}),e.jsx(Q,{onImpactsReady:M})]})}function Y({liveData:n,paused:l}){const r=c.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=c.useCallback(m=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(m)},[]),f=c.useRef({intensity:1,pulse:.4,block:null});c.useEffect(()=>{const m=()=>{const g=n||{},d=parseFloat(String(g.volume||"").replace(/[^0-9.]/g,""))||0,v=parseFloat(String(g.gas||"").replace(/[^0-9.]/g,""))||0;let u=.9+Math.min(d/500,.5)+Math.min(v/50,.25)+Math.random()*.15;u=Math.max(.6,Math.min(1.8,u));const i=f.current;i.intensity=u,g.block&&g.block!=="—"&&g.block!==i.block?(i.block=g.block,i.pulse=1):i.pulse=Math.max(.3,(i.pulse||.3)*.94)};m();const s=setInterval(m,400);return()=>clearInterval(s)},[n]);const t=c.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),o=c.useMemo(()=>({alpha:!0,antialias:!r,powerPreference:"high-performance"}),[r]),h=c.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),a=c.useMemo(()=>[1,1.5],[]);return e.jsxs(T,{camera:t,gl:o,onCreated:({gl:m})=>m.setClearColor(0,0),style:h,dpr:a,frameloop:l?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(K,{}),e.jsx(G,{flowRef:f}),e.jsx(D,{liveData:n,onImpact:M,flowRef:f}),e.jsx(U,{}),e.jsx(k,{}),e.jsx(B,{}),e.jsx(V,{}),e.jsx($,{}),e.jsx(q,{liveData:n}),e.jsx(H,{})]}),!r&&e.jsx(E,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),e.jsx(R,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Y as default};
