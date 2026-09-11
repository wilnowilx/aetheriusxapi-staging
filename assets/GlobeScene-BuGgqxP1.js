import{r as l,j as t,C as N,S as R,O as W,u as P}from"./r3f-CWToFXIM.js";import{q as E,p as C,e as _,r as F,F as O,h as b}from"./three-D-ovYI32.js";const U=({liveData:s})=>{const m=l.useRef(),i=l.useRef(0),g=l.useMemo(()=>{const e=s||{};return[{radius:3.2,tilt:Math.PI/2,speed:.04,color:"#c084fc",opacity:.55,fontSize:1.15,segments:["THE","MARKETPLACE","THAT","LIVES"]},{radius:2.75,tilt:Math.PI/2+.15,speed:.06,color:"#d946ef",opacity:.45,fontSize:.75,segments:["API","INFRASTRUCTURE","FOR","AI","AGENTS","THAT","PAY"]},{radius:2.35,tilt:Math.PI/2+.28,speed:.09,color:"#22d3ee",opacity:.5,fontSize:.55,segments:[`${e.endpoints||"100+"}`,"ENDPOINTS","·",`${e.freeEndpoints||"40"}`,"FREE","·",`${e.latency||"—"}`]}]},[s]),f=l.useMemo(()=>g.map(e=>e.segments.map(o=>{const u=document.createElement("canvas"),a=o==="·";u.width=a?128:512,u.height=128;const r=u.getContext("2d");r.clearRect(0,0,u.width,u.height);const n=Math.round(e.fontSize*(a?60:80));return r.font=`bold ${n}px 'JetBrains Mono', monospace`,r.textAlign="center",r.textBaseline="middle",r.fillStyle=e.color,r.shadowColor=e.color,r.shadowBlur=a?8:20,r.fillText(o,u.width/2,u.height/2),new E(u)})),[g]);return P((e,o)=>{i.current+=o,m.current&&g.forEach((u,a)=>{const r=m.current.children[a];r&&(r.rotation.y=i.current*u.speed)})}),t.jsx("group",{ref:m,children:g.map((e,o)=>t.jsxs("group",{rotation:[e.tilt,0,0],children:[e.segments.map((u,a)=>{const r=a/e.segments.length*Math.PI*2;return t.jsx("sprite",{position:[e.radius*Math.cos(r),e.radius*Math.sin(r)*Math.sin(e.tilt),e.radius*Math.sin(r)*Math.cos(e.tilt)],scale:[e.fontSize*(u==="·"?.6:1.8),e.fontSize*.45,1],children:t.jsx("spriteMaterial",{map:f[o][a],transparent:!0,blending:C,opacity:e.opacity,depthWrite:!1})},`${o}-${a}`)}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[e.radius,.0025,8,160]}),t.jsx("meshBasicMaterial",{color:e.color,transparent:!0,opacity:e.opacity*.15,depthWrite:!1})]})]},o))})};function B(){const s=l.useMemo(()=>({time:{value:0},colorA:{value:new _(11032055)},colorB:{value:new _(14239471)}}),[]);return P((m,i)=>{s.time.value+=i*.4}),t.jsxs("mesh",{scale:1.4,children:[t.jsx("sphereGeometry",{args:[2.2,24,18]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:C})]})}function L(){const s=l.useMemo(()=>({time:{value:0},colorA:{value:new _(2282478)},colorB:{value:new _(11032055)}}),[]);return P((m,i)=>{s.time.value+=i*.8}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,32,24]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:C})]})}function G(){const s=l.useMemo(()=>({time:{value:0}}),[]);return P((m,i)=>{s.time.value+=i*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:C})]})}function k({impactPoints:s}){const m=l.useRef(),i=l.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return P((g,f)=>{if(i.time.value+=f*.5,s)for(let e=0;e<8&&e<s.length;e++){const o=s[e];i[`impact${e}`].value.copy(o.position),i[`i${e}t`].value=o.intensity}}),t.jsxs("mesh",{ref:m,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:i,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function $({flowRef:s}){const m=l.useRef(),i=l.useRef(0),g=l.useMemo(()=>{const f=document.createElement("canvas");f.width=512,f.height=128;const e=f.getContext("2d");return e.clearRect(0,0,512,128),e.font="bold 72px monospace",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#0052FF",e.shadowColor="#0052FF",e.shadowBlur=30,e.fillText("BASE",256,64),e.shadowBlur=0,e.fillText("BASE",256,64),new E(f)},[]);return P((f,e)=>{i.current+=e;const o=(s==null?void 0:s.current)||{intensity:1,pulse:.3};if(o.pulse=Math.max(.25,(o.pulse||0)-e*1.8),m.current){m.current.rotation.y=i.current*(.15+.15*o.intensity),m.current.rotation.x=i.current*.1;const a=1+.02*Math.sin(i.current*1.5)+.1*o.pulse;m.current.scale.set(a,a,a)}}),t.jsxs("group",{ref:m,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:g,transparent:!0,blending:C,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function D({liveData:s,onImpact:m,flowRef:i}){const f=l.useRef(0),e=l.useRef(),o=2.2,u=o*o,a=h=>{var A;const v=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),c=Math.max(.5,Math.min(1.8,((A=i==null?void 0:i.current)==null?void 0:A.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*c);h[0]=Math.sin(p)*Math.cos(v)*y,h[1]=Math.sin(p)*Math.sin(v)*y,h[2]=Math.cos(p)*y},r=(h,v,p)=>{if(Math.random()<.38)h[p*3]=.063,h[p*3+1]=.725,h[p*3+2]=.506,v[p]=.03+Math.random()*.035;else{const c=Math.random();h[p*3]=0*(1-c)+.659*c,h[p*3+1]=.322*(1-c)+.333*c,h[p*3+2]=1*(1-c)+.969*c,v[p]=.02+Math.random()*.03}},n=l.useMemo(()=>{const h=new Float32Array(168),v=new Float32Array(168),p=new Float32Array(168),c=new Float32Array(56),y=new Float32Array(56),A=new Float32Array(56),T=new Uint8Array(56);for(let M=0;M<56;M++){h[M*3]=(Math.random()-.5)*.3,h[M*3+1]=(Math.random()-.5)*.3,h[M*3+2]=(Math.random()-.5)*.3;const z=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),j=1.1+Math.random()*.8;v[M*3]=Math.sin(S)*Math.cos(z)*j,v[M*3+1]=Math.sin(S)*Math.sin(z)*j,v[M*3+2]=Math.cos(S)*j;const w=Math.random();Math.random()<.38?(p[M*3]=.063,p[M*3+1]=.725,p[M*3+2]=.506,c[M]=.03+Math.random()*.035):(p[M*3]=0*(1-w)+.659*w,p[M*3+1]=.322*(1-w)+.333*w,p[M*3+2]=1*(1-w)+.969*w,c[M]=.02+Math.random()*.03),y[M]=Math.random()*3,A[M]=1.6+Math.random()*1}return{positions:h,velocities:v,colors:p,sizes:c,lifetimes:y,maxLifetimes:A,hit:T}},[]),x=l.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return P((h,v)=>{var I;f.current+=v,x.time.value=f.current;const p=Math.max(.5,Math.min(1.8,((I=i==null?void 0:i.current)==null?void 0:I.intensity)||1));x.flow.value=p;const{positions:c,velocities:y,colors:A,sizes:T,lifetimes:M,maxLifetimes:z,hit:S}=n,j=[0,0,0];let w=!1;for(let d=0;d<56;d++){if(M[d]+=v,M[d]>=z[d]){c[d*3]=(Math.random()-.5)*.3,c[d*3+1]=(Math.random()-.5)*.3,c[d*3+2]=(Math.random()-.5)*.3,a(j),y[d*3]=j[0],y[d*3+1]=j[1],y[d*3+2]=j[2],r(A,T,d),w=!0,M[d]=0,z[d]=1.6+Math.random()*1,S[d]=0;continue}c[d*3]+=y[d*3]*v,c[d*3+1]+=y[d*3+1]*v,c[d*3+2]+=y[d*3+2]*v,c[d*3]*c[d*3]+c[d*3+1]*c[d*3+1]+c[d*3+2]*c[d*3+2]>=u&&!S[d]&&(S[d]=1,m&&m({position:new b(c[d*3],c[d*3+1],c[d*3+2]),intensity:1}))}e.current&&(e.current.geometry.attributes.position.needsUpdate=!0,w&&(e.current.geometry.attributes.aColor.needsUpdate=!0,e.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:e,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[n.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[n.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[n.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function V(){const{positions:m,colors:i,sizes:g}=l.useMemo(()=>{const e=new Float32Array(300),o=new Float32Array(300),u=new Float32Array(100);for(let a=0;a<100;a++){const r=Math.acos(-1+2*a/100),n=Math.sqrt(100*Math.PI)*r,x=2.35;e[a*3]=x*Math.cos(n)*Math.sin(r),e[a*3+1]=x*Math.sin(n)*Math.sin(r),e[a*3+2]=x*Math.cos(r);const h=a>=60;if(h)o[a*3]=.133,o[a*3+1]=.827,o[a*3+2]=.933;else{const v=new _().setHSL(.75+Math.random()*.1,.7,.6);o[a*3]=v.r,o[a*3+1]=v.g,o[a*3+2]=v.b}u[a]=h?.09:.055}return{positions:e,colors:o,sizes:u}},[]),f=l.useMemo(()=>({time:{value:0}}),[]);return P((e,o)=>{f.time.value+=o*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function H(){return t.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((s,m)=>t.jsxs("mesh",{rotation:[s.tilt,0,m*.3],children:[t.jsx("torusGeometry",{args:[s.radius,.005,8,160]}),t.jsx("meshBasicMaterial",{color:s.color,transparent:!0,opacity:s.opacity})]},m))})}function q({liveData:s}){const m=l.useRef(),i=l.useRef([]),g=l.useRef(0),[f,e]=l.useState(null),o=l.useMemo(()=>{const a=s||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${a.block||"—"}`,color:"#0052FF",size:.65},{text:`${a.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:a.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[s]),u=l.useMemo(()=>o.map(a=>{const r=document.createElement("canvas");r.width=512,r.height=128;const n=r.getContext("2d");return n.clearRect(0,0,512,128),n.font=`bold ${Math.round(a.size*80)}px monospace`,n.textAlign="center",n.textBaseline="middle",n.fillStyle=a.color,n.shadowColor=a.color,n.shadowBlur=20,n.fillText(a.text,256,64),new E(r)}),[o]);return P((a,r)=>{g.current+=r,m.current&&(m.current.rotation.y=g.current*.12),i.current.forEach((n,x)=>{if(n){const h=f===x;n.material.opacity=h?.9:.45+.2*Math.sin(g.current*1.5+x*1.2);const v=h?o[x].size*2.4:o[x].size*1.8;n.scale.x+=(v-n.scale.x)*.1}})}),t.jsx("group",{ref:m,children:u.map((a,r)=>{const n=r/u.length*Math.PI*2,x=r%3,h=2.6+x*.25,v=.12*x;return t.jsx("sprite",{ref:p=>{i.current[r]=p},position:[h*Math.cos(n),h*Math.sin(n)*Math.sin(v),h*Math.sin(n)*Math.cos(v)],scale:[o[r].size*1.8,o[r].size*.45,1],onPointerOver:p=>{p.stopPropagation(),e(r),document.body.style.cursor="pointer"},onPointerOut:()=>{e(null),document.body.style.cursor="auto"},children:t.jsx("spriteMaterial",{map:a,transparent:!0,blending:C,opacity:.35,depthWrite:!1})},r)})})}function K(){const s=l.useRef(),m=l.useMemo(()=>({time:{value:0}}),[]),i=l.useRef(0);P((o,u)=>{i.current+=u,m.time.value=i.current,s.current&&(s.current.rotation.y=i.current*.06)});const{positions:g,colors:f,sizes:e}=l.useMemo(()=>{const u=new Float32Array(240),a=new Float32Array(240),r=new Float32Array(80);for(let n=0;n<80;n++){const x=n/80*Math.PI*2,h=n%3,v=2.55+h*.22,p=.15*h;u[n*3]=v*Math.cos(x),u[n*3+1]=v*Math.sin(x)*Math.sin(p),u[n*3+2]=v*Math.sin(x)*Math.cos(p);const c=n/80;a[n*3]=.659*(1-c)+.133*c,a[n*3+1]=.333*(1-c)+.827*c,a[n*3+2]=.969*(1-c)+.933*c,r[n]=.015+Math.random()*.025}return{positions:u,colors:a,sizes:r}},[]);return t.jsx("group",{ref:s,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[g,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function Q({onImpactsReady:s}){const m=l.useRef([]),i=l.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return P((g,f)=>{for(;m.current.length>0&&i.current.some(o=>!o.active);){const o=m.current.shift(),u=i.current.find(a=>!a.active);u&&(u.position.copy(o.position),u.intensity=o.intensity,u.active=!0,u.age=0)}const e=1.5;i.current.forEach(o=>{o.active&&(o.age+=f,o.intensity=Math.max(0,1-o.age*e),o.intensity<=0&&(o.active=!1))}),s(i.current.filter(o=>o.active).map(o=>({position:o.position,intensity:o.intensity})))}),l.useEffect(()=>(window.__aetherius_addImpact=g=>{m.current.push(g)},()=>{delete window.__aetherius_addImpact}),[]),null}function J(){const[s,m]=l.useState([]),i=l.useRef(""),g=l.useCallback(f=>{let e=f.length+":";for(let o=0;o<f.length;o++){const u=f[o];e+=u.position.x.toFixed(1)+","+u.position.y.toFixed(1)+","+u.position.z.toFixed(1)+","+u.intensity.toFixed(2)+";"}e!==i.current&&(i.current=e,m(f))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{impactPoints:s}),t.jsx(Q,{onImpactsReady:g})]})}function tt({liveData:s,paused:m}){const i=l.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),g=l.useCallback(r=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(r)},[]),f=l.useRef({intensity:1,pulse:.4,block:null});l.useEffect(()=>{const r=()=>{const x=s||{},h=parseFloat(String(x.volume||"").replace(/[^0-9.]/g,""))||0,v=parseFloat(String(x.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(h/500,.5)+Math.min(v/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const c=f.current;c.intensity=p,x.block&&x.block!=="—"&&x.block!==c.block?(c.block=x.block,c.pulse=1):c.pulse=Math.max(.3,(c.pulse||.3)*.94)};r();const n=setInterval(r,400);return()=>clearInterval(n)},[s]);const e=l.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),o=l.useMemo(()=>({alpha:!0,antialias:!i,powerPreference:"high-performance"}),[i]),u=l.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),a=l.useMemo(()=>[1,1.5],[]);return t.jsxs(N,{camera:e,gl:o,onCreated:({gl:r})=>r.setClearColor(0,0),style:u,dpr:a,frameloop:m?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(J,{}),t.jsx($,{flowRef:f}),t.jsx(D,{liveData:s,onImpact:g,flowRef:f}),t.jsx(B,{}),t.jsx(L,{}),t.jsx(G,{}),t.jsx(V,{}),t.jsx(H,{}),t.jsx(U,{liveData:s}),t.jsx(q,{liveData:s}),t.jsx(K,{})]}),!i&&t.jsx(R,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),t.jsx(W,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{tt as default};
