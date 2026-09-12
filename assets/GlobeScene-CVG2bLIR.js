import{r as u,j as e,C as q,S as D,O as J,u as j}from"./r3f-C0dCSPeq.js";import{q as U,p as P,F as E,e as I,r as H,s as $,h as w}from"./three-BuKzPtX4.js";const K=({liveData:p})=>{const v=u.useRef(),r=u.useRef(0),b=u.useMemo(()=>{const i=p||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${i.endpoints||"100+"} ENDPOINTS   ${i.freeEndpoints||"40"} FREE   ${i.latency||"—"}   `}]},[p]),g=u.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height);const M=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=M,o.textAlign="center",o.textBaseline="middle";const n=i.text,f=o.measureText(n).width,l=Math.ceil((t.width+f)/f),y=(t.width-f*l)/2+f/2;o.shadowColor=i.color,o.shadowBlur=48,o.fillStyle=i.color;for(let x=0;x<l;x++)o.fillText(n,y+x*f,t.height/2);o.shadowBlur=22;for(let x=0;x<l;x++)o.fillText(n,y+x*f,t.height/2);o.shadowBlur=0,o.fillStyle=i.color==="#ffffff"?"#ffffff":i.color;for(let x=0;x<l;x++)o.fillText(n,y+x*f,t.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let x=0;x<l;x++)o.fillText(n,y+x*f,t.height/2);o.globalAlpha=1;const h=new U(t);return h.anisotropy=8,h.minFilter=$,h.magFilter=$,h}),[b]),d=u.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.font=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const M=i.text,n=o.measureText(M).width,f=Math.ceil((t.width+n)/n),l=(t.width-n*f)/2+n/2;o.shadowColor=i.color,o.shadowBlur=28,o.fillStyle=i.color,o.globalAlpha=.35;for(let h=0;h<f;h++)o.fillText(M,l+h*n,t.height/2);o.globalAlpha=1;const y=new U(t);return y.anisotropy=4,y}),[b]),[a,m]=u.useState(null),s=u.useRef(0);return j((i,t)=>{r.current+=t,s.current+=t,v.current&&b.forEach((o,M)=>{const n=v.current.children[M];if(n){a===M||(n.rotation.y+=t*o.speed);const l=n.children[0];if(l!=null&&l.material){const y=.88+.12*Math.sin(s.current*.7+M*1.2);l.material.opacity=(a===M?1:o.opacity)*y}}})}),e.jsx("group",{ref:v,children:b.map((i,t)=>e.jsxs("group",{position:[0,i.yOffset,0],rotation:[i.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),m(t),document.body.style.cursor="pointer"},onPointerOut:()=>{m(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new w(i.radius,i.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:g[t],transparent:!0,opacity:i.opacity,side:E,depthWrite:!1,blending:P,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:d[t],transparent:!0,opacity:.22,side:H,depthWrite:!1,blending:P,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[i.radius,i.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:i.color,transparent:!0,opacity:i.opacity*.12,depthWrite:!1})]})]},t))})};function Q(){const p=u.useMemo(()=>({time:{value:0},colorA:{value:new I(2282478)},colorB:{value:new I(11032055)},colorC:{value:new I(14239471)}}),[]);return j((v,r)=>{p.time.value+=r*.6}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,28,20]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,side:H,transparent:!0,depthWrite:!1,blending:P})]})}function Y(){const p=u.useMemo(()=>({time:{value:0}}),[]);return j((v,r)=>{p.time.value+=r*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,side:E,transparent:!0,depthWrite:!1,blending:P})]})}function Z({impactPoints:p}){const v=u.useRef(),r=u.useMemo(()=>({time:{value:0},impact0:{value:new w(0,0,0)},i0t:{value:0},impact1:{value:new w(0,0,0)},i1t:{value:0},impact2:{value:new w(0,0,0)},i2t:{value:0},impact3:{value:new w(0,0,0)},i3t:{value:0},impact4:{value:new w(0,0,0)},i4t:{value:0},impact5:{value:new w(0,0,0)},i5t:{value:0},impact6:{value:new w(0,0,0)},i6t:{value:0},impact7:{value:new w(0,0,0)},i7t:{value:0}}),[]);return j((b,g)=>{if(r.time.value+=g*.5,p)for(let d=0;d<8&&d<p.length;d++){const a=p[d];r[`impact${d}`].value.copy(a.position),r[`i${d}t`].value=a.intensity}}),e.jsxs("mesh",{ref:v,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
            float ring = abs(dist - time * 0.9 * intensity);
            float ringPulse = exp(-ring * 1.5) * intensity;
            float prox = exp(-dist * 0.9) * intensity * 0.7;
            return (ringPulse*0.6 + prox) * intensity;
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

            float alpha = 0.045 * pulse * fade + impacts * 0.38;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function X({flowRef:p}){const v=u.useRef(),r=u.useRef(0),b=u.useMemo(()=>{const d=document.createElement("canvas");d.width=512,d.height=128;const a=d.getContext("2d");return a.clearRect(0,0,512,128),a.font="bold 72px monospace",a.textAlign="center",a.textBaseline="middle",a.fillStyle="#0052FF",a.shadowColor="#0052FF",a.shadowBlur=30,a.fillText("BASE",256,64),a.shadowBlur=0,a.fillText("BASE",256,64),new U(d)},[]);j((d,a)=>{var s;r.current+=a;const m=(p==null?void 0:p.current)||{intensity:1,pulse:.3};if(m.pulse=Math.max(.25,(m.pulse||0)-a*1.8),v.current){v.current.rotation.y=r.current*(.15+.15*m.intensity),v.current.rotation.x=r.current*.1;const i=Math.sin(r.current*1.8),t=1+.06*i+.22*m.pulse;v.current.scale.set(t,t,t);const o=(s=v.current.children[0])==null?void 0:s.material;o&&(o.opacity=.75+.2*i+.15*m.pulse)}});const g=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return j((d,a)=>{var m;g.time.value+=a*.5,g.flow.value=((m=p==null?void 0:p.current)==null?void 0:m.intensity)||1}),e.jsxs("group",{ref:v,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:b,transparent:!0,blending:P,opacity:.9,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.85,32,24]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; varying vec3 vNormal; void main(){ vPos=position; vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; varying vec3 vNormal; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 0.85;
              float radial = pow(1.0 - dist, 2.2);
              float noise = sin(vPos.x*5.0+time*0.7)*0.5+0.5;
              noise *= sin(vPos.y*4.0+time*0.4)*0.5+0.5;
              noise = 0.7 + 0.3*noise;
              float pulse = 0.75 + 0.25*sin(time*1.1);
              vec3 col = mix(vec3(0.02,0.32,1.0), vec3(0.55,0.3,1.0), dist*0.5 + noise*0.15);
              float alpha = radial * 0.38 * pulse * noise * (0.85+0.3*flow);
              // Suaviza el borde externo a cero absoluto
              alpha *= smoothstep(1.0, 0.65, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:E})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.25,24,18]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.25;
              float radial = pow(1.0 - dist, 1.8);
              float pulse = 0.65 + 0.35*sin(time*0.8+1.2);
              vec3 col = vec3(0.12,0.5,1.0);
              float alpha = radial * 0.16 * pulse * (0.75+0.35*flow);
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:E})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.65,16,12]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 1.65;
              float radial = pow(1.0 - dist, 2.8);
              float pulse = 0.5 + 0.5*sin(time*0.5+2.5);
              vec3 col = vec3(0.65,0.33,0.97);
              float alpha = radial * 0.10 * pulse;
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:E})]})]})}function tt({liveData:p,onImpact:v,flowRef:r}){const g=u.useRef(0),d=u.useRef(),a=2.2,m=a*a,s=n=>{var x;const f=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((x=r==null?void 0:r.current)==null?void 0:x.intensity)||1)),h=(1.6+Math.random()*1)*(.9+.3*y);n[0]=Math.sin(l)*Math.cos(f)*h,n[1]=Math.sin(l)*Math.sin(f)*h,n[2]=Math.cos(l)*h},i=(n,f,l)=>{if(Math.random()<.42)n[l*3]=.08,n[l*3+1]=.85,n[l*3+2]=.55,f[l]=.055+Math.random()*.045;else{const y=Math.random();n[l*3]=.15*(1-y)+.78*y,n[l*3+1]=.45*(1-y)+.35*y,n[l*3+2]=1*(1-y)+.97*y,f[l]=.04+Math.random()*.04}},t=u.useMemo(()=>{const n=new Float32Array(156),f=new Float32Array(156),l=new Float32Array(156),y=new Float32Array(52),h=new Float32Array(52),x=new Float32Array(52),N=new Uint8Array(52);for(let C=0;C<52;C++){const A=Math.random()*.08,F=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);n[C*3]=A*Math.sin(S)*Math.cos(F),n[C*3+1]=A*Math.sin(S)*Math.sin(F),n[C*3+2]=A*Math.cos(S);const _=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;f[C*3]=Math.sin(z)*Math.cos(_)*T,f[C*3+1]=Math.sin(z)*Math.sin(_)*T,f[C*3+2]=Math.cos(z)*T,i(l,y,C),h[C]=Math.random()*1.5,x[C]=1.8+Math.random()*.8}return{positions:n,velocities:f,colors:l,sizes:y,lifetimes:h,maxLifetimes:x,hit:N}},[]),o=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),M=u.useRef(0);return j((n,f)=>{var B,L;g.current+=f,o.time.value=g.current;const l=Math.max(.5,Math.min(1.8,((B=r==null?void 0:r.current)==null?void 0:B.intensity)||1));o.flow.value=l;const y=((L=r==null?void 0:r.current)==null?void 0:L.pulse)>.95&&g.current-M.current>1.2;y&&(M.current=g.current);const{positions:h,velocities:x,colors:N,sizes:C,lifetimes:A,maxLifetimes:F,hit:S}=t,_=[0,0,0];let z=!1,T=y?8:0;for(let c=0;c<52;c++){A[c]+=f;const G=T>0&&A[c]>.15;if(A[c]>=F[c]||G){G&&T--;const O=Math.random()*.08,k=Math.random()*Math.PI*2,R=Math.acos(2*Math.random()-1);h[c*3]=O*Math.sin(R)*Math.cos(k),h[c*3+1]=O*Math.sin(R)*Math.sin(k),h[c*3+2]=O*Math.cos(R),s(_),x[c*3]=_[0],x[c*3+1]=_[1],x[c*3+2]=_[2],i(N,C,c),z=!0,A[c]=0,F[c]=1.8+Math.random()*.8,S[c]=0;continue}const V=Math.sqrt(h[c*3]*h[c*3]+h[c*3+1]*h[c*3+1]+h[c*3+2]*h[c*3+2]),W=V>1.6?(V-1.6)/.6:0;W>0&&(x[c*3]*=1-W*.08,x[c*3+1]*=1-W*.08,x[c*3+2]*=1-W*.08,C[c]=C[c]*(1+W*.8)),h[c*3]+=x[c*3]*f,h[c*3+1]+=x[c*3+1]*f,h[c*3+2]+=x[c*3+2]*f,h[c*3]*h[c*3]+h[c*3+1]*h[c*3+1]+h[c*3+2]*h[c*3+2]>=m&&!S[c]&&(S[c]=1,v&&v({position:new w(h[c*3],h[c*3+1],h[c*3+2]),intensity:1}))}d.current&&(d.current.geometry.attributes.position.needsUpdate=!0,z&&(d.current.geometry.attributes.aColor.needsUpdate=!0,d.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:d,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:o,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            float edgeDissolve = 1.0 - smoothstep(0.65, 1.0, travel);
            vAlpha = (0.7 + 0.3 * sin(time * 2.0 + dist * 4.0)) * (0.9 + 0.25 * flow) * (0.3 + 0.7 * edgeDissolve);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            float sz = aSize * (1.0 + travel * 1.2);
            gl_PointSize = sz * (0.9 + 0.6 * flow) * (480.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = pow(1.0 - d * 2.0, 1.4);
            float core = 1.0 - smoothstep(0.0, 0.3, d);
            vec3 col = vColor + core * 0.6;
            gl_FragColor = vec4(col, glow * vAlpha);
          }
        `,transparent:!0,depthWrite:!1,blending:P})]})}function et(){const{positions:v,colors:r,sizes:b}=u.useMemo(()=>{const d=new Float32Array(180),a=new Float32Array(180),m=new Float32Array(60);for(let s=0;s<60;s++){const i=Math.acos(-1+2*s/60),t=Math.sqrt(60*Math.PI)*i,o=2.35;d[s*3]=o*Math.cos(t)*Math.sin(i),d[s*3+1]=o*Math.sin(t)*Math.sin(i),d[s*3+2]=o*Math.cos(i);const M=s>=36;if(M)a[s*3]=.133,a[s*3+1]=.827,a[s*3+2]=.933;else{const n=new I().setHSL(.75+Math.random()*.1,.7,.6);a[s*3]=n.r,a[s*3+1]=n.g,a[s*3+2]=n.b}m[s]=M?.09:.055}return{positions:d,colors:a,sizes:m}},[]),g=u.useMemo(()=>({time:{value:0}}),[]);return j((d,a)=>{g.time.value+=a*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[v,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[r,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:P})]})}function ot(){const p=u.useRef(),v=u.useMemo(()=>({time:{value:0}}),[]),r=u.useRef(0);j((a,m)=>{r.current+=m,v.time.value=r.current,p.current&&(p.current.rotation.y=r.current*.06)});const{positions:b,colors:g,sizes:d}=u.useMemo(()=>{const m=new Float32Array(150),s=new Float32Array(150),i=new Float32Array(50);for(let t=0;t<50;t++){const o=t/50*Math.PI*2,M=t%3,n=2.55+M*.22,f=.15*M;m[t*3]=n*Math.cos(o),m[t*3+1]=n*Math.sin(o)*Math.sin(f),m[t*3+2]=n*Math.sin(o)*Math.cos(f);const l=t/50;s[t*3]=.659*(1-l)+.133*l,s[t*3+1]=.333*(1-l)+.827*l,s[t*3+2]=.969*(1-l)+.933*l,i[t]=.015+Math.random()*.025}return{positions:m,colors:s,sizes:i}},[]);return e.jsx("group",{ref:p,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[g,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[d,1]})]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:P})]})})}function at({onImpactsReady:p}){const v=u.useRef([]),r=u.useRef(Array.from({length:8},()=>({position:new w,intensity:0,active:!1,age:0})));return j((b,g)=>{for(;v.current.length>0&&r.current.some(a=>!a.active);){const a=v.current.shift(),m=r.current.find(s=>!s.active);m&&(m.position.copy(a.position),m.intensity=a.intensity,m.active=!0,m.age=0)}const d=1.5;r.current.forEach(a=>{a.active&&(a.age+=g,a.intensity=Math.max(0,1-a.age*d),a.intensity<=0&&(a.active=!1))}),p(r.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=b=>{v.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function it(){const[p,v]=u.useState([]),r=u.useRef(""),b=u.useCallback(g=>{let d=g.length+":";for(let a=0;a<g.length;a++){const m=g[a];d+=m.position.x.toFixed(1)+","+m.position.y.toFixed(1)+","+m.position.z.toFixed(1)+","+m.intensity.toFixed(2)+";"}d!==r.current&&(r.current=d,v(g))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(Z,{impactPoints:p}),e.jsx(at,{onImpactsReady:b})]})}function st(){const p=u.useRef(),v=u.useRef(0),{positions:r,colors:b,sizes:g}=u.useMemo(()=>{const m=new Float32Array(24),s=new Float32Array(24),i=new Float32Array(8);for(let t=0;t<8;t++){const o=t/8*Math.PI*2+Math.random()*.5,M=4+Math.random()*2;m[t*3]=M*Math.cos(o),m[t*3+1]=(Math.random()-.5)*3,m[t*3+2]=M*Math.sin(o);const n=Math.random();n<.4?(s[t*3]=.13,s[t*3+1]=.82,s[t*3+2]=.93):n<.7?(s[t*3]=.84,s[t*3+1]=.27,s[t*3+2]=.93):(s[t*3]=.83,s[t*3+1]=.66,s[t*3+2]=.32),i[t]=.08+Math.random()*.06}return{positions:m,colors:s,sizes:i}},[]),d=u.useMemo(()=>({time:{value:0}}),[]);return j((a,m)=>{var i,t,o;v.current+=m,d.time.value=v.current,p.current&&(p.current.rotation.y=v.current*.02);const s=(o=(t=(i=p.current)==null?void 0:i.geometry)==null?void 0:t.attributes)==null?void 0:o.aSize;if(s){for(let M=0;M<8;M++)s.array[M]=.06+.05*Math.sin(v.current*2+M*1.5);s.needsUpdate=!0}}),e.jsxs("points",{ref:p,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[r,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),e.jsx("shaderMaterial",{uniforms:d,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:P})]})}function ct({liveData:p,paused:v}){const r=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=u.useCallback(i=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(i)},[]),g=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const i=()=>{const o=p||{},M=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let f=.9+Math.min(M/500,.5)+Math.min(n/50,.25)+Math.random()*.15;f=Math.max(.6,Math.min(1.8,f));const l=g.current;l.intensity=f,o.block&&o.block!=="—"&&o.block!==l.block?(l.block=o.block,l.pulse=1):l.pulse=Math.max(.3,(l.pulse||.3)*.94)};i();const t=setInterval(i,400);return()=>clearInterval(t)},[p]);const d=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=u.useMemo(()=>({alpha:!0,antialias:!r,powerPreference:"high-performance"}),[r]),m=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),s=u.useMemo(()=>[1,1.5],[]);return e.jsxs(q,{camera:d,gl:a,onCreated:({gl:i})=>i.setClearColor(0,0),style:m,dpr:s,frameloop:v?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(it,{}),e.jsx(X,{flowRef:g}),e.jsx(tt,{liveData:p,onImpact:b,flowRef:g}),e.jsx(Q,{}),e.jsx(Y,{}),e.jsx(et,{}),e.jsx(K,{liveData:p}),e.jsx(ot,{})]}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(D,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),e.jsx(D,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),e.jsx(st,{})]}),e.jsx(J,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ct as default};
