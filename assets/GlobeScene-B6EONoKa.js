import{r as l,j as t,C as S,S as z,O as N,u as y}from"./r3f-CWToFXIM.js";import{h as M,q as A,p as w,e as b,r as _,F as R}from"./three-D-ovYI32.js";function W(){const r=l.useMemo(()=>({time:{value:0},colorA:{value:new b(11032055)},colorB:{value:new b(14239471)}}),[]);return y((c,m)=>{r.time.value+=m*.4}),t.jsxs("mesh",{scale:1.4,children:[t.jsx("sphereGeometry",{args:[2.2,24,18]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:w})]})}function F(){const r=l.useMemo(()=>({time:{value:0},colorA:{value:new b(2282478)},colorB:{value:new b(11032055)}}),[]);return y((c,m)=>{r.time.value+=m*.8}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,32,24]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:w})]})}function I(){const r=l.useMemo(()=>({time:{value:0}}),[]);return y((c,m)=>{r.time.value+=m*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function O({impactPoints:r}){const c=l.useRef(),m=l.useMemo(()=>({time:{value:0},impact0:{value:new M(0,0,0)},i0t:{value:0},impact1:{value:new M(0,0,0)},i1t:{value:0},impact2:{value:new M(0,0,0)},i2t:{value:0},impact3:{value:new M(0,0,0)},i3t:{value:0},impact4:{value:new M(0,0,0)},i4t:{value:0},impact5:{value:new M(0,0,0)},i5t:{value:0},impact6:{value:new M(0,0,0)},i6t:{value:0},impact7:{value:new M(0,0,0)},i7t:{value:0}}),[]);return y((v,n)=>{if(m.time.value+=n*.5,r)for(let u=0;u<8&&u<r.length;u++){const a=r[u];m[`impact${u}`].value.copy(a.position),m[`${u}t`].value=a.intensity}}),t.jsxs("mesh",{ref:c,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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

            float alpha = 0.045 * pulse * fade + impacts * 0.15;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function T(){const r=l.useRef(),c=l.useRef(0),m=l.useMemo(()=>{const v=document.createElement("canvas");v.width=512,v.height=128;const n=v.getContext("2d");return n.clearRect(0,0,512,128),n.font="bold 72px monospace",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#0052FF",n.shadowColor="#0052FF",n.shadowBlur=30,n.fillText("BASE",256,64),n.shadowBlur=0,n.fillText("BASE",256,64),new A(v)},[]);return y((v,n)=>{if(c.current+=n,r.current){r.current.rotation.y=c.current*.2;const u=1+.03*Math.sin(c.current*2);r.current.scale.set(u,u,u)}}),t.jsxs("group",{ref:r,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:m,transparent:!0,blending:w,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function E({liveData:r,onImpact:c}){const v=l.useRef(0),n=l.useRef(),u=2.2,a=l.useMemo(()=>{const i=new Float32Array(120),s=new Float32Array(120),e=new Float32Array(120),p=new Float32Array(40),f=new Float32Array(40),h=new Float32Array(40),g=new Uint8Array(40);for(let o=0;o<40;o++){i[o*3]=(Math.random()-.5)*.3,i[o*3+1]=(Math.random()-.5)*.3,i[o*3+2]=(Math.random()-.5)*.3;const j=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1),P=1+Math.random()*.7;s[o*3]=Math.sin(C)*Math.cos(j)*P,s[o*3+1]=Math.sin(C)*Math.sin(j)*P,s[o*3+2]=Math.cos(C)*P;const x=Math.random();e[o*3]=0*(1-x)+.659*x,e[o*3+1]=.322*(1-x)+.333*x,e[o*3+2]=1*(1-x)+.969*x,p[o]=.02+Math.random()*.03,f[o]=Math.random()*3,h[o]=2.5+Math.random()*1.5}return{positions:i,velocities:s,colors:e,sizes:p,lifetimes:f,maxLifetimes:h,hit:g}},[]),d=l.useMemo(()=>({time:{value:0}}),[]);return y((i,s)=>{v.current+=s,d.time.value=v.current;const{positions:e,velocities:p,lifetimes:f,maxLifetimes:h,hit:g}=a;for(let o=0;o<40;o++){if(f[o]+=s,f[o]>=h[o]){e[o*3]=(Math.random()-.5)*.3,e[o*3+1]=(Math.random()-.5)*.3,e[o*3+2]=(Math.random()-.5)*.3;const C=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),x=1+Math.random()*.7;p[o*3]=Math.sin(P)*Math.cos(C)*x,p[o*3+1]=Math.sin(P)*Math.sin(C)*x,p[o*3+2]=Math.cos(P)*x,f[o]=0,h[o]=2.5+Math.random()*1.5,g[o]=0;continue}e[o*3]+=p[o*3]*s,e[o*3+1]+=p[o*3+1]*s,e[o*3+2]+=p[o*3+2]*s,Math.sqrt(e[o*3]**2+e[o*3+1]**2+e[o*3+2]**2)>=u&&!g[o]&&(g[o]=1,c&&c({position:new M(e[o*3],e[o*3+1],e[o*3+2]),intensity:1}))}n.current&&(n.current.geometry.attributes.position.needsUpdate=!0)}),t.jsxs("points",{ref:n,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[a.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[a.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[a.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:d,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time;
          void main() {
            vColor = aColor;
            vAlpha = 0.6 + 0.4 * sin(time * 3.0 + position.x * 5.0);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (400.0 / -mv.z);
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function U(){const{positions:c,colors:m,sizes:v}=l.useMemo(()=>{const u=new Float32Array(300),a=new Float32Array(300),d=new Float32Array(100);for(let i=0;i<100;i++){const s=Math.acos(-1+2*i/100),e=Math.sqrt(100*Math.PI)*s,p=2.35;u[i*3]=p*Math.cos(e)*Math.sin(s),u[i*3+1]=p*Math.sin(e)*Math.sin(s),u[i*3+2]=p*Math.cos(s);const f=i>=60;if(f)a[i*3]=.133,a[i*3+1]=.827,a[i*3+2]=.933;else{const h=new b().setHSL(.75+Math.random()*.1,.7,.6);a[i*3]=h.r,a[i*3+1]=h.g,a[i*3+2]=h.b}d[i]=f?.09:.055}return{positions:u,colors:a,sizes:d}},[]),n=l.useMemo(()=>({time:{value:0}}),[]);return y((u,a)=>{n.time.value+=a*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v,1]})]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function B(){return t.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((r,c)=>t.jsxs("mesh",{rotation:[r.tilt,0,c*.3],children:[t.jsx("torusGeometry",{args:[r.radius,.005,8,160]}),t.jsx("meshBasicMaterial",{color:r.color,transparent:!0,opacity:r.opacity})]},c))})}function L({liveData:r}){const c=l.useRef(),m=l.useRef([]),v=l.useRef(0),[n,u]=l.useState(null),a=l.useMemo(()=>{const i=r||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${i.block||"—"}`,color:"#0052FF",size:.65},{text:`${i.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:i.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[r]),d=l.useMemo(()=>a.map(i=>{const s=document.createElement("canvas");s.width=512,s.height=128;const e=s.getContext("2d");return e.clearRect(0,0,512,128),e.font=`bold ${Math.round(i.size*80)}px monospace`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=i.color,e.shadowColor=i.color,e.shadowBlur=20,e.fillText(i.text,256,64),new A(s)}),[a]);return y((i,s)=>{v.current+=s,c.current&&(c.current.rotation.y=v.current*.12),m.current.forEach((e,p)=>{if(e){const f=n===p;e.material.opacity=f?.9:.45+.2*Math.sin(v.current*1.5+p*1.2);const h=f?a[p].size*2.4:a[p].size*1.8;e.scale.x+=(h-e.scale.x)*.1}})}),t.jsx("group",{ref:c,children:d.map((i,s)=>{const e=s/d.length*Math.PI*2,p=s%3,f=2.6+p*.25,h=.12*p;return t.jsx("sprite",{ref:g=>{m.current[s]=g},position:[f*Math.cos(e),f*Math.sin(e)*Math.sin(h),f*Math.sin(e)*Math.cos(h)],scale:[a[s].size*1.8,a[s].size*.45,1],onPointerOver:g=>{g.stopPropagation(),u(s),document.body.style.cursor="pointer"},onPointerOut:()=>{u(null),document.body.style.cursor="auto"},children:t.jsx("spriteMaterial",{map:i,transparent:!0,blending:w,opacity:.35,depthWrite:!1})},s)})})}function D(){const r=l.useRef(),c=l.useMemo(()=>({time:{value:0}}),[]),m=l.useRef(0);y((a,d)=>{m.current+=d,c.time.value=m.current,r.current&&(r.current.rotation.y=m.current*.06)});const{positions:v,colors:n,sizes:u}=l.useMemo(()=>{const d=new Float32Array(240),i=new Float32Array(240),s=new Float32Array(80);for(let e=0;e<80;e++){const p=e/80*Math.PI*2,f=e%3,h=2.55+f*.22,g=.15*f;d[e*3]=h*Math.cos(p),d[e*3+1]=h*Math.sin(p)*Math.sin(g),d[e*3+2]=h*Math.sin(p)*Math.cos(g);const o=e/80;i[e*3]=.659*(1-o)+.133*o,i[e*3+1]=.333*(1-o)+.827*o,i[e*3+2]=.969*(1-o)+.933*o,s[e]=.015+Math.random()*.025}return{positions:d,colors:i,sizes:s}},[]);return t.jsx("group",{ref:r,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[v,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[n,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),t.jsx("shaderMaterial",{uniforms:c,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function G({onImpactsReady:r}){const c=l.useRef([]),m=l.useRef(Array.from({length:8},()=>({position:new M,intensity:0,active:!1,age:0})));return y((v,n)=>{for(;c.current.length>0&&m.current.some(a=>!a.active);){const a=c.current.shift(),d=m.current.find(i=>!i.active);d&&(d.position.copy(a.position),d.intensity=a.intensity,d.active=!0,d.age=0)}const u=1.5;m.current.forEach(a=>{a.active&&(a.age+=n,a.intensity=Math.max(0,1-a.age*u),a.intensity<=0&&(a.active=!1))}),r(m.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),l.useEffect(()=>(window.__aetherius_addImpact=v=>{c.current.push(v)},()=>{delete window.__aetherius_addImpact}),[]),null}function k({liveData:r,paused:c}){const[m,v]=l.useState([]),n=l.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),u=l.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]);return t.jsxs(S,{camera:{position:[0,.3,10.5],fov:40},gl:{alpha:!0,antialias:!n,powerPreference:"high-performance"},onCreated:({gl:a})=>a.setClearColor(0,0),style:{position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"},dpr:[1,1.5],frameloop:c?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(O,{impactPoints:m}),t.jsx(T,{}),t.jsx(E,{liveData:r,onImpact:u}),t.jsx(G,{onImpactsReady:v}),t.jsx(W,{}),t.jsx(F,{}),t.jsx(I,{}),t.jsx(U,{}),t.jsx(B,{}),t.jsx(L,{liveData:r}),t.jsx(D,{})]}),!n&&t.jsx(z,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),t.jsx(N,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{k as default};
