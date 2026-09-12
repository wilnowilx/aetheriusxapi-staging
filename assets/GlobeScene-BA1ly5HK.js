import{r as u,j as e,C as J,S as $,O as K,u as j}from"./r3f-C0dCSPeq.js";import{q as R,p as P,F as N,e as O,r as q,s as H,h as w}from"./three-BuKzPtX4.js";const Q=({liveData:d})=>{const v=u.useRef(),n=u.useRef(0),b=u.useMemo(()=>{const i=d||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${i.endpoints||"100+"} ENDPOINTS   ${i.freeEndpoints||"40"} FREE   ${i.latency||"—"}   `}]},[d]),x=u.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height);const M=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=M,o.textAlign="center",o.textBaseline="middle";const l=i.text,f=o.measureText(l).width,c=Math.ceil((t.width+f)/f),y=(t.width-f*c)/2+f/2;o.shadowColor=i.color,o.shadowBlur=48,o.fillStyle=i.color;for(let g=0;g<c;g++)o.fillText(l,y+g*f,t.height/2);o.shadowBlur=22;for(let g=0;g<c;g++)o.fillText(l,y+g*f,t.height/2);o.shadowBlur=0,o.fillStyle=i.color==="#ffffff"?"#ffffff":i.color;for(let g=0;g<c;g++)o.fillText(l,y+g*f,t.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let g=0;g<c;g++)o.fillText(l,y+g*f,t.height/2);o.globalAlpha=1;const h=new R(t);return h.anisotropy=8,h.minFilter=H,h.magFilter=H,h}),[b]),p=u.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.font=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const M=i.text,l=o.measureText(M).width,f=Math.ceil((t.width+l)/l),c=(t.width-l*f)/2+l/2;o.shadowColor=i.color,o.shadowBlur=28,o.fillStyle=i.color,o.globalAlpha=.35;for(let h=0;h<f;h++)o.fillText(M,c+h*l,t.height/2);o.globalAlpha=1;const y=new R(t);return y.anisotropy=4,y}),[b]),[a,m]=u.useState(null),r=u.useRef(0);return j((i,t)=>{n.current+=t,r.current+=t,v.current&&b.forEach((o,M)=>{const l=v.current.children[M];if(l){a===M||(l.rotation.y+=t*o.speed);const c=l.children[0];if(c!=null&&c.material){const y=.88+.12*Math.sin(r.current*.7+M*1.2);c.material.opacity=(a===M?1:o.opacity)*y}}})}),e.jsx("group",{ref:v,children:b.map((i,t)=>e.jsxs("group",{position:[0,i.yOffset,0],rotation:[i.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),m(t),document.body.style.cursor="pointer"},onPointerOut:()=>{m(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new w(i.radius,i.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:x[t],transparent:!0,opacity:i.opacity,side:N,depthWrite:!1,blending:P,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:p[t],transparent:!0,opacity:.22,side:q,depthWrite:!1,blending:P,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[i.radius,i.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:i.color,transparent:!0,opacity:i.opacity*.12,depthWrite:!1})]})]},t))})};function Y(){const d=u.useMemo(()=>({time:{value:0},colorA:{value:new O(2282478)},colorB:{value:new O(11032055)},colorC:{value:new O(14239471)}}),[]);return j((v,n)=>{d.time.value+=n*.6}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,28,20]}),e.jsx("shaderMaterial",{uniforms:d,vertexShader:`
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
        `,side:q,transparent:!0,depthWrite:!1,blending:P})]})}function Z(){const d=u.useMemo(()=>({time:{value:0}}),[]);return j((v,n)=>{d.time.value+=n*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:d,vertexShader:`
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
        `,side:N,transparent:!0,depthWrite:!1,blending:P})]})}function X({impactPoints:d}){const v=u.useRef(),n=u.useMemo(()=>({time:{value:0},impact0:{value:new w(0,0,0)},i0t:{value:0},impact1:{value:new w(0,0,0)},i1t:{value:0},impact2:{value:new w(0,0,0)},i2t:{value:0},impact3:{value:new w(0,0,0)},i3t:{value:0},impact4:{value:new w(0,0,0)},i4t:{value:0},impact5:{value:new w(0,0,0)},i5t:{value:0},impact6:{value:new w(0,0,0)},i6t:{value:0},impact7:{value:new w(0,0,0)},i7t:{value:0}}),[]);return j((b,x)=>{if(n.time.value+=x*.5,d)for(let p=0;p<8&&p<d.length;p++){const a=d[p];n[`impact${p}`].value.copy(a.position),n[`i${p}t`].value=a.intensity}}),e.jsxs("mesh",{ref:v,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function tt({flowRef:d}){const v=u.useRef(),n=u.useRef(0),b=u.useMemo(()=>{const p=document.createElement("canvas");p.width=512,p.height=128;const a=p.getContext("2d");return a.clearRect(0,0,512,128),a.font="bold 72px monospace",a.textAlign="center",a.textBaseline="middle",a.fillStyle="#0052FF",a.shadowColor="#0052FF",a.shadowBlur=30,a.fillText("BASE",256,64),a.shadowBlur=0,a.fillText("BASE",256,64),new R(p)},[]);j((p,a)=>{var r;n.current+=a;const m=(d==null?void 0:d.current)||{intensity:1,pulse:.3};if(m.pulse=Math.max(.25,(m.pulse||0)-a*1.8),v.current){v.current.rotation.y=n.current*(.15+.15*m.intensity),v.current.rotation.x=n.current*.1;const i=Math.sin(n.current*1.8),t=1+.06*i+.22*m.pulse;v.current.scale.set(t,t,t);const o=(r=v.current.children[0])==null?void 0:r.material;o&&(o.opacity=.75+.2*i+.15*m.pulse)}});const x=u.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return j((p,a)=>{var m,r;x.time.value+=a*.5,x.flow.value=((m=d==null?void 0:d.current)==null?void 0:m.intensity)||1,x.pulse.value=((r=d==null?void 0:d.current)==null?void 0:r.pulse)||.3}),e.jsxs("group",{ref:v,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:b,transparent:!0,blending:P,opacity:.9,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.75,32,24]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.75;
              float radial = pow(1.0 - dist, 1.9);
              float swirl = sin(vPos.x*6.0+time*0.6)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.5);
              float noise = 0.75 + 0.25*swirl;
              float beat = 0.55 + 0.45*pulse;
              vec3 deepBlue = vec3(0.0,0.18,0.85);
              vec3 coreCyan = vec3(0.1,0.65,1.0);
              vec3 col = mix(deepBlue, coreCyan, (1.0-dist)*0.5 + noise*0.2);
              // Profundidad: centro más saturado, borde más frío
              col += vec3(0.2,0.1,0.4) * (1.0-dist) * 0.3;
              float alpha = radial * 0.52 * noise * (0.7 + 0.5*flow) * beat;
              alpha *= smoothstep(1.0, 0.55, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:N})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.15,24,18]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.15;
              float radial = pow(1.0 - dist, 2.0);
              float pulse = 0.6 + 0.4*pulse;
              vec3 col = mix(vec3(0.08,0.45,0.95), vec3(0.55,0.25,0.92), dist*0.6);
              float alpha = radial * 0.20 * pulse * (0.7+0.4*flow);
              alpha *= smoothstep(1.0, 0.45, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:N})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.55,16,12]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.55;
              float radial = pow(1.0 - dist, 3.0);
              float beat = 0.45 + 0.55*pulse;
              vec3 col = mix(vec3(0.5,0.2,0.9), vec3(0.8,0.3,0.7), dist*0.4);
              float alpha = radial * 0.12 * beat;
              alpha *= smoothstep(1.0, 0.35, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:P,side:N})]})]})}function et({liveData:d,onImpact:v,flowRef:n}){const x=u.useRef(0),p=u.useRef(),a=2.2,m=a*a,r=l=>{var g;const f=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((g=n==null?void 0:n.current)==null?void 0:g.intensity)||1)),h=(1.6+Math.random()*1)*(.9+.3*y);l[0]=Math.sin(c)*Math.cos(f)*h,l[1]=Math.sin(c)*Math.sin(f)*h,l[2]=Math.cos(c)*h},i=(l,f,c)=>{if(Math.random()<.42)l[c*3]=.08,l[c*3+1]=.85,l[c*3+2]=.55,f[c]=.055+Math.random()*.045;else{const y=Math.random();l[c*3]=.15*(1-y)+.78*y,l[c*3+1]=.45*(1-y)+.35*y,l[c*3+2]=1*(1-y)+.97*y,f[c]=.04+Math.random()*.04}},t=u.useMemo(()=>{const l=new Float32Array(156),f=new Float32Array(156),c=new Float32Array(156),y=new Float32Array(52),h=new Float32Array(52),g=new Float32Array(52),B=new Uint8Array(52);for(let C=0;C<52;C++){const A=Math.random()*.08,T=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);l[C*3]=A*Math.sin(S)*Math.cos(T),l[C*3+1]=A*Math.sin(S)*Math.sin(T),l[C*3+2]=A*Math.cos(S);const _=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1),F=1.6+Math.random()*1;f[C*3]=Math.sin(z)*Math.cos(_)*F,f[C*3+1]=Math.sin(z)*Math.sin(_)*F,f[C*3+2]=Math.cos(z)*F,i(c,y,C),h[C]=Math.random()*1.5,g[C]=1.8+Math.random()*.8}return{positions:l,velocities:f,colors:c,sizes:y,lifetimes:h,maxLifetimes:g,hit:B}},[]),o=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),M=u.useRef(0);return j((l,f)=>{var L,G;x.current+=f,o.time.value=x.current;const c=Math.max(.5,Math.min(1.8,((L=n==null?void 0:n.current)==null?void 0:L.intensity)||1));o.flow.value=c;const y=((G=n==null?void 0:n.current)==null?void 0:G.pulse)>.95&&x.current-M.current>1.2;y&&(M.current=x.current);const{positions:h,velocities:g,colors:B,sizes:C,lifetimes:A,maxLifetimes:T,hit:S}=t,_=[0,0,0];let z=!1,F=y?8:0;for(let s=0;s<52;s++){A[s]+=f;const V=F>0&&A[s]>.15;if(A[s]>=T[s]||V){V&&F--;const I=Math.random()*.08,W=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1);h[s*3]=I*Math.sin(U)*Math.cos(W),h[s*3+1]=I*Math.sin(U)*Math.sin(W),h[s*3+2]=I*Math.cos(U),r(_),g[s*3]=_[0],g[s*3+1]=_[1],g[s*3+2]=_[2],i(B,C,s),z=!0,A[s]=0,T[s]=1.8+Math.random()*.8,S[s]=0;continue}const k=Math.sqrt(h[s*3]*h[s*3]+h[s*3+1]*h[s*3+1]+h[s*3+2]*h[s*3+2]),E=k>1.6?(k-1.6)/.6:0;E>0&&(g[s*3]*=1-E*.08,g[s*3+1]*=1-E*.08,g[s*3+2]*=1-E*.08,C[s]=C[s]*(1+E*.8)),h[s*3]+=g[s*3]*f,h[s*3+1]+=g[s*3+1]*f,h[s*3+2]+=g[s*3+2]*f;const D=h[s*3]*h[s*3]+h[s*3+1]*h[s*3+1]+h[s*3+2]*h[s*3+2];if(D>=m)if(S[s])C[s]*=1.06;else{S[s]=1;const I=Math.sqrt(D),W=a/I;h[s*3]*=W,h[s*3+1]*=W,h[s*3+2]*=W,g[s*3]=0,g[s*3+1]=0,g[s*3+2]=0,v&&v({position:new w(h[s*3],h[s*3+1],h[s*3+2]),intensity:1}),A[s]=T[s]-.35}}p.current&&(p.current.geometry.attributes.position.needsUpdate=!0,z&&(p.current.geometry.attributes.aColor.needsUpdate=!0,p.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:p,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:o,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:P})]})}function ot(){const{positions:v,colors:n,sizes:b}=u.useMemo(()=>{const p=new Float32Array(180),a=new Float32Array(180),m=new Float32Array(60);for(let r=0;r<60;r++){const i=Math.acos(-1+2*r/60),t=Math.sqrt(60*Math.PI)*i,o=2.35;p[r*3]=o*Math.cos(t)*Math.sin(i),p[r*3+1]=o*Math.sin(t)*Math.sin(i),p[r*3+2]=o*Math.cos(i);const M=r>=36;if(M)a[r*3]=.133,a[r*3+1]=.827,a[r*3+2]=.933;else{const l=new O().setHSL(.75+Math.random()*.1,.7,.6);a[r*3]=l.r,a[r*3+1]=l.g,a[r*3+2]=l.b}m[r]=M?.09:.055}return{positions:p,colors:a,sizes:m}},[]),x=u.useMemo(()=>({time:{value:0}}),[]);return j((p,a)=>{x.time.value+=a*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[v,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[n,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:P})]})}function at(){const d=u.useRef(),v=u.useMemo(()=>({time:{value:0}}),[]),n=u.useRef(0);j((a,m)=>{n.current+=m,v.time.value=n.current,d.current&&(d.current.rotation.y=n.current*.06)});const{positions:b,colors:x,sizes:p}=u.useMemo(()=>{const m=new Float32Array(150),r=new Float32Array(150),i=new Float32Array(50);for(let t=0;t<50;t++){const o=t/50*Math.PI*2,M=t%3,l=2.55+M*.22,f=.15*M;m[t*3]=l*Math.cos(o),m[t*3+1]=l*Math.sin(o)*Math.sin(f),m[t*3+2]=l*Math.sin(o)*Math.cos(f);const c=t/50;r[t*3]=.659*(1-c)+.133*c,r[t*3+1]=.333*(1-c)+.827*c,r[t*3+2]=.969*(1-c)+.933*c,i[t]=.015+Math.random()*.025}return{positions:m,colors:r,sizes:i}},[]);return e.jsx("group",{ref:d,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]})]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:P})]})})}function it({onImpactsReady:d}){const v=u.useRef([]),n=u.useRef(Array.from({length:8},()=>({position:new w,intensity:0,active:!1,age:0})));return j((b,x)=>{for(;v.current.length>0&&n.current.some(a=>!a.active);){const a=v.current.shift(),m=n.current.find(r=>!r.active);m&&(m.position.copy(a.position),m.intensity=a.intensity,m.active=!0,m.age=0)}const p=1.5;n.current.forEach(a=>{a.active&&(a.age+=x,a.intensity=Math.max(0,1-a.age*p),a.intensity<=0&&(a.active=!1))}),d(n.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=b=>{v.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function st(){const[d,v]=u.useState([]),n=u.useRef(""),b=u.useCallback(x=>{let p=x.length+":";for(let a=0;a<x.length;a++){const m=x[a];p+=m.position.x.toFixed(1)+","+m.position.y.toFixed(1)+","+m.position.z.toFixed(1)+","+m.intensity.toFixed(2)+";"}p!==n.current&&(n.current=p,v(x))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(X,{impactPoints:d}),e.jsx(it,{onImpactsReady:b})]})}function rt(){const d=u.useRef(),v=u.useRef(0),{positions:n,colors:b,sizes:x}=u.useMemo(()=>{const m=new Float32Array(24),r=new Float32Array(24),i=new Float32Array(8);for(let t=0;t<8;t++){const o=t/8*Math.PI*2+Math.random()*.5,M=4+Math.random()*2;m[t*3]=M*Math.cos(o),m[t*3+1]=(Math.random()-.5)*3,m[t*3+2]=M*Math.sin(o);const l=Math.random();l<.4?(r[t*3]=.13,r[t*3+1]=.82,r[t*3+2]=.93):l<.7?(r[t*3]=.84,r[t*3+1]=.27,r[t*3+2]=.93):(r[t*3]=.83,r[t*3+1]=.66,r[t*3+2]=.32),i[t]=.08+Math.random()*.06}return{positions:m,colors:r,sizes:i}},[]),p=u.useMemo(()=>({time:{value:0}}),[]);return j((a,m)=>{var i,t,o;v.current+=m,p.time.value=v.current,d.current&&(d.current.rotation.y=v.current*.02);const r=(o=(t=(i=d.current)==null?void 0:i.geometry)==null?void 0:t.attributes)==null?void 0:o.aSize;if(r){for(let M=0;M<8;M++)r.array[M]=.06+.05*Math.sin(v.current*2+M*1.5);r.needsUpdate=!0}}),e.jsxs("points",{ref:d,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[n,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:P})]})}function ct({liveData:d,paused:v}){const n=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=u.useCallback(i=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(i)},[]),x=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const i=()=>{const o=d||{},M=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,l=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let f=.9+Math.min(M/500,.5)+Math.min(l/50,.25)+Math.random()*.15;f=Math.max(.6,Math.min(1.8,f));const c=x.current;c.intensity=f,o.block&&o.block!=="—"&&o.block!==c.block?(c.block=o.block,c.pulse=1):c.pulse=Math.max(.3,(c.pulse||.3)*.94)};i();const t=setInterval(i,400);return()=>clearInterval(t)},[d]);const p=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=u.useMemo(()=>({alpha:!0,antialias:!n,powerPreference:"high-performance"}),[n]),m=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=u.useMemo(()=>[1,1.5],[]);return e.jsxs(J,{camera:p,gl:a,onCreated:({gl:i})=>i.setClearColor(0,0),style:m,dpr:r,frameloop:v?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(st,{}),e.jsx(tt,{flowRef:x}),e.jsx(et,{liveData:d,onImpact:b,flowRef:x}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(ot,{}),e.jsx(Q,{liveData:d}),e.jsx(at,{})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx($,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),e.jsx($,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),e.jsx(rt,{})]}),e.jsx(K,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ct as default};
