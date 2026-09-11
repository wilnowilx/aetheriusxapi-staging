import{r as s,j as t,C as S,S as z,O as R,u as y}from"./r3f-CWToFXIM.js";import{q as A,p as w,e as b,r as _,F,h as M}from"./three-D-ovYI32.js";function N(){const r=s.useMemo(()=>({time:{value:0},colorA:{value:new b(11032055)},colorB:{value:new b(14239471)}}),[]);return y((m,n)=>{r.time.value+=n*.4}),t.jsxs("mesh",{scale:1.4,children:[t.jsx("sphereGeometry",{args:[2.2,24,18]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:w})]})}function W(){const r=s.useMemo(()=>({time:{value:0},colorA:{value:new b(2282478)},colorB:{value:new b(11032055)}}),[]);return y((m,n)=>{r.time.value+=n*.8}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,32,24]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:w})]})}function I(){const r=s.useMemo(()=>({time:{value:0}}),[]);return y((m,n)=>{r.time.value+=n*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:w})]})}function O({impactPoints:r}){const m=s.useRef(),n=s.useMemo(()=>({time:{value:0},impact0:{value:new M(0,0,0)},i0t:{value:0},impact1:{value:new M(0,0,0)},i1t:{value:0},impact2:{value:new M(0,0,0)},i2t:{value:0},impact3:{value:new M(0,0,0)},i3t:{value:0},impact4:{value:new M(0,0,0)},i4t:{value:0},impact5:{value:new M(0,0,0)},i5t:{value:0},impact6:{value:new M(0,0,0)},i6t:{value:0},impact7:{value:new M(0,0,0)},i7t:{value:0}}),[]);return y((d,c)=>{if(n.time.value+=c*.5,r)for(let u=0;u<8&&u<r.length;u++){const a=r[u];n[`impact${u}`].value.copy(a.position),n[`i${u}t`].value=a.intensity}}),t.jsxs("mesh",{ref:m,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function T(){const r=s.useRef(),m=s.useRef(0),n=s.useMemo(()=>{const d=document.createElement("canvas");d.width=512,d.height=128;const c=d.getContext("2d");return c.clearRect(0,0,512,128),c.font="bold 72px monospace",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#0052FF",c.shadowColor="#0052FF",c.shadowBlur=30,c.fillText("BASE",256,64),c.shadowBlur=0,c.fillText("BASE",256,64),new A(d)},[]);return y((d,c)=>{if(m.current+=c,r.current){r.current.rotation.y=m.current*.2;const u=1+.03*Math.sin(m.current*2);r.current.scale.set(u,u,u)}}),t.jsxs("group",{ref:r,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:n,transparent:!0,blending:w,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function E({liveData:r,onImpact:m}){const d=s.useRef(0),c=s.useRef(),u=2.2,a=s.useMemo(()=>{const i=new Float32Array(120),l=new Float32Array(120),e=new Float32Array(120),v=new Float32Array(40),f=new Float32Array(40),h=new Float32Array(40),g=new Uint8Array(40);for(let o=0;o<40;o++){i[o*3]=(Math.random()-.5)*.3,i[o*3+1]=(Math.random()-.5)*.3,i[o*3+2]=(Math.random()-.5)*.3;const j=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1),P=1+Math.random()*.7;l[o*3]=Math.sin(C)*Math.cos(j)*P,l[o*3+1]=Math.sin(C)*Math.sin(j)*P,l[o*3+2]=Math.cos(C)*P;const x=Math.random();e[o*3]=0*(1-x)+.659*x,e[o*3+1]=.322*(1-x)+.333*x,e[o*3+2]=1*(1-x)+.969*x,v[o]=.02+Math.random()*.03,f[o]=Math.random()*3,h[o]=2.5+Math.random()*1.5}return{positions:i,velocities:l,colors:e,sizes:v,lifetimes:f,maxLifetimes:h,hit:g}},[]),p=s.useMemo(()=>({time:{value:0}}),[]);return y((i,l)=>{d.current+=l,p.time.value=d.current;const{positions:e,velocities:v,lifetimes:f,maxLifetimes:h,hit:g}=a;for(let o=0;o<40;o++){if(f[o]+=l,f[o]>=h[o]){e[o*3]=(Math.random()-.5)*.3,e[o*3+1]=(Math.random()-.5)*.3,e[o*3+2]=(Math.random()-.5)*.3;const C=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),x=1+Math.random()*.7;v[o*3]=Math.sin(P)*Math.cos(C)*x,v[o*3+1]=Math.sin(P)*Math.sin(C)*x,v[o*3+2]=Math.cos(P)*x,f[o]=0,h[o]=2.5+Math.random()*1.5,g[o]=0;continue}e[o*3]+=v[o*3]*l,e[o*3+1]+=v[o*3+1]*l,e[o*3+2]+=v[o*3+2]*l,Math.sqrt(e[o*3]**2+e[o*3+1]**2+e[o*3+2]**2)>=u&&!g[o]&&(g[o]=1,m&&m({position:new M(e[o*3],e[o*3+1],e[o*3+2]),intensity:1}))}c.current&&(c.current.geometry.attributes.position.needsUpdate=!0)}),t.jsxs("points",{ref:c,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[a.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[a.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[a.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function U(){const{positions:m,colors:n,sizes:d}=s.useMemo(()=>{const u=new Float32Array(300),a=new Float32Array(300),p=new Float32Array(100);for(let i=0;i<100;i++){const l=Math.acos(-1+2*i/100),e=Math.sqrt(100*Math.PI)*l,v=2.35;u[i*3]=v*Math.cos(e)*Math.sin(l),u[i*3+1]=v*Math.sin(e)*Math.sin(l),u[i*3+2]=v*Math.cos(l);const f=i>=60;if(f)a[i*3]=.133,a[i*3+1]=.827,a[i*3+2]=.933;else{const h=new b().setHSL(.75+Math.random()*.1,.7,.6);a[i*3]=h.r,a[i*3+1]=h.g,a[i*3+2]=h.b}p[i]=f?.09:.055}return{positions:u,colors:a,sizes:p}},[]),c=s.useMemo(()=>({time:{value:0}}),[]);return y((u,a)=>{c.time.value+=a*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[n,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[d,1]})]}),t.jsx("shaderMaterial",{uniforms:c,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function B(){return t.jsx("group",{children:[{radius:2.5,tilt:Math.PI/2,color:11032055,opacity:.07},{radius:2.7,tilt:Math.PI/2+.18,color:2282478,opacity:.05},{radius:2.9,tilt:Math.PI/2+.35,color:14239471,opacity:.04}].map((r,m)=>t.jsxs("mesh",{rotation:[r.tilt,0,m*.3],children:[t.jsx("torusGeometry",{args:[r.radius,.005,8,160]}),t.jsx("meshBasicMaterial",{color:r.color,transparent:!0,opacity:r.opacity})]},m))})}function L({liveData:r}){const m=s.useRef(),n=s.useRef([]),d=s.useRef(0),[c,u]=s.useState(null),a=s.useMemo(()=>{const i=r||{};return[{text:"x402",color:"#c084fc",size:1.2},{text:`#${i.block||"—"}`,color:"#0052FF",size:.65},{text:`${i.gas||"—"} gwei`,color:"#c084fc",size:.55},{text:i.volume||"$0.00",color:"#d946ef",size:.6},{text:"USDC",color:"#10b981",size:.7},{text:"BASE",color:"#0052FF",size:.85}]},[r]),p=s.useMemo(()=>a.map(i=>{const l=document.createElement("canvas");l.width=512,l.height=128;const e=l.getContext("2d");return e.clearRect(0,0,512,128),e.font=`bold ${Math.round(i.size*80)}px monospace`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=i.color,e.shadowColor=i.color,e.shadowBlur=20,e.fillText(i.text,256,64),new A(l)}),[a]);return y((i,l)=>{d.current+=l,m.current&&(m.current.rotation.y=d.current*.12),n.current.forEach((e,v)=>{if(e){const f=c===v;e.material.opacity=f?.9:.45+.2*Math.sin(d.current*1.5+v*1.2);const h=f?a[v].size*2.4:a[v].size*1.8;e.scale.x+=(h-e.scale.x)*.1}})}),t.jsx("group",{ref:m,children:p.map((i,l)=>{const e=l/p.length*Math.PI*2,v=l%3,f=2.6+v*.25,h=.12*v;return t.jsx("sprite",{ref:g=>{n.current[l]=g},position:[f*Math.cos(e),f*Math.sin(e)*Math.sin(h),f*Math.sin(e)*Math.cos(h)],scale:[a[l].size*1.8,a[l].size*.45,1],onPointerOver:g=>{g.stopPropagation(),u(l),document.body.style.cursor="pointer"},onPointerOut:()=>{u(null),document.body.style.cursor="auto"},children:t.jsx("spriteMaterial",{map:i,transparent:!0,blending:w,opacity:.35,depthWrite:!1})},l)})})}function G(){const r=s.useRef(),m=s.useMemo(()=>({time:{value:0}}),[]),n=s.useRef(0);y((a,p)=>{n.current+=p,m.time.value=n.current,r.current&&(r.current.rotation.y=n.current*.06)});const{positions:d,colors:c,sizes:u}=s.useMemo(()=>{const p=new Float32Array(240),i=new Float32Array(240),l=new Float32Array(80);for(let e=0;e<80;e++){const v=e/80*Math.PI*2,f=e%3,h=2.55+f*.22,g=.15*f;p[e*3]=h*Math.cos(v),p[e*3+1]=h*Math.sin(v)*Math.sin(g),p[e*3+2]=h*Math.sin(v)*Math.cos(g);const o=e/80;i[e*3]=.659*(1-o)+.133*o,i[e*3+1]=.333*(1-o)+.827*o,i[e*3+2]=.969*(1-o)+.933*o,l[e]=.015+Math.random()*.025}return{positions:p,colors:i,sizes:l}},[]);return t.jsx("group",{ref:r,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[d,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function D({onImpactsReady:r}){const m=s.useRef([]),n=s.useRef(Array.from({length:8},()=>({position:new M,intensity:0,active:!1,age:0})));return y((d,c)=>{for(;m.current.length>0&&n.current.some(a=>!a.active);){const a=m.current.shift(),p=n.current.find(i=>!i.active);p&&(p.position.copy(a.position),p.intensity=a.intensity,p.active=!0,p.age=0)}const u=1.5;n.current.forEach(a=>{a.active&&(a.age+=c,a.intensity=Math.max(0,1-a.age*u),a.intensity<=0&&(a.active=!1))}),r(n.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),s.useEffect(()=>(window.__aetherius_addImpact=d=>{m.current.push(d)},()=>{delete window.__aetherius_addImpact}),[]),null}function V(){const[r,m]=s.useState([]),n=s.useRef(""),d=s.useCallback(c=>{let u=c.length+":";for(let a=0;a<c.length;a++){const p=c[a];u+=p.position.x.toFixed(1)+","+p.position.y.toFixed(1)+","+p.position.z.toFixed(1)+","+p.intensity.toFixed(2)+";"}u!==n.current&&(n.current=u,m(c))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(O,{impactPoints:r}),t.jsx(D,{onImpactsReady:d})]})}function H({liveData:r,paused:m}){const n=s.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),d=s.useCallback(i=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(i)},[]),c=s.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),u=s.useMemo(()=>({alpha:!0,antialias:!n,powerPreference:"high-performance"}),[n]),a=s.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),p=s.useMemo(()=>[1,1.5],[]);return t.jsxs(S,{camera:c,gl:u,onCreated:({gl:i})=>i.setClearColor(0,0),style:a,dpr:p,frameloop:m?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(V,{}),t.jsx(T,{}),t.jsx(E,{liveData:r,onImpact:d}),t.jsx(N,{}),t.jsx(W,{}),t.jsx(I,{}),t.jsx(U,{}),t.jsx(B,{}),t.jsx(L,{liveData:r}),t.jsx(G,{})]}),!n&&t.jsx(z,{radius:10,depth:20,count:250,factor:2,saturation:.25,fade:!0,speed:.15}),t.jsx(R,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{H as default};
