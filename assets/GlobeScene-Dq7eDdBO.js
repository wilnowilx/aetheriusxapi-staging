import{r as c,j as e,C as $,S as V,O as H,u as j}from"./r3f-C0dCSPeq.js";import{q as R,p as w,r as N,e as W,F as D,s as k,h as P}from"./three-BuKzPtX4.js";const q=({liveData:p})=>{const h=c.useRef(),s=c.useRef(0),b=c.useMemo(()=>{const i=p||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${i.endpoints||"100+"} ENDPOINTS   ${i.freeEndpoints||"40"} FREE   ${i.latency||"—"}   `}]},[p]),v=c.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height);const x=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=x,o.textAlign="center",o.textBaseline="middle";const n=i.text,d=o.measureText(n).width,l=Math.ceil((t.width+d)/d),y=(t.width-d*l)/2+d/2;o.shadowColor=i.color,o.shadowBlur=48,o.fillStyle=i.color;for(let M=0;M<l;M++)o.fillText(n,y+M*d,t.height/2);o.shadowBlur=22;for(let M=0;M<l;M++)o.fillText(n,y+M*d,t.height/2);o.shadowBlur=0,o.fillStyle=i.color==="#ffffff"?"#ffffff":i.color;for(let M=0;M<l;M++)o.fillText(n,y+M*d,t.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let M=0;M<l;M++)o.fillText(n,y+M*d,t.height/2);o.globalAlpha=1;const g=new R(t);return g.anisotropy=8,g.minFilter=k,g.magFilter=k,g}),[b]),u=c.useMemo(()=>b.map(i=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.font=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const x=i.text,n=o.measureText(x).width,d=Math.ceil((t.width+n)/n),l=(t.width-n*d)/2+n/2;o.shadowColor=i.color,o.shadowBlur=28,o.fillStyle=i.color,o.globalAlpha=.35;for(let g=0;g<d;g++)o.fillText(x,l+g*n,t.height/2);o.globalAlpha=1;const y=new R(t);return y.anisotropy=4,y}),[b]),[a,m]=c.useState(null),r=c.useRef(0);return j((i,t)=>{s.current+=t,r.current+=t,h.current&&b.forEach((o,x)=>{const n=h.current.children[x];if(n){a===x||(n.rotation.y+=t*o.speed);const l=n.children[0];if(l!=null&&l.material){const y=.88+.12*Math.sin(r.current*.7+x*1.2);l.material.opacity=(a===x?1:o.opacity)*y}}})}),e.jsx("group",{ref:h,children:b.map((i,t)=>e.jsxs("group",{position:[0,i.yOffset,0],rotation:[i.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),m(t),document.body.style.cursor="pointer"},onPointerOut:()=>{m(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new P(i.radius,i.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:v[t],transparent:!0,opacity:i.opacity,side:D,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:u[t],transparent:!0,opacity:.22,side:N,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[i.radius,i.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:i.color,transparent:!0,opacity:i.opacity*.12,depthWrite:!1})]})]},t))})};function J(){const p=c.useMemo(()=>({time:{value:0},colorA:{value:new W(2282478)},colorB:{value:new W(11032055)},colorC:{value:new W(14239471)}}),[]);return j((h,s)=>{p.time.value+=s*.6}),e.jsxs("mesh",{scale:1.15,children:[e.jsx("sphereGeometry",{args:[2.2,28,20]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,side:N,transparent:!0,depthWrite:!1,blending:w})]})}function K(){const p=c.useMemo(()=>({time:{value:0}}),[]);return j((h,s)=>{p.time.value+=s*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,side:D,transparent:!0,depthWrite:!1,blending:w})]})}function Q({impactPoints:p}){const h=c.useRef(),s=c.useMemo(()=>({time:{value:0},impact0:{value:new P(0,0,0)},i0t:{value:0},impact1:{value:new P(0,0,0)},i1t:{value:0},impact2:{value:new P(0,0,0)},i2t:{value:0},impact3:{value:new P(0,0,0)},i3t:{value:0},impact4:{value:new P(0,0,0)},i4t:{value:0},impact5:{value:new P(0,0,0)},i5t:{value:0},impact6:{value:new P(0,0,0)},i6t:{value:0},impact7:{value:new P(0,0,0)},i7t:{value:0}}),[]);return j((b,v)=>{if(s.time.value+=v*.5,p)for(let u=0;u<8&&u<p.length;u++){const a=p[u];s[`impact${u}`].value.copy(a.position),s[`i${u}t`].value=a.intensity}}),e.jsxs("mesh",{ref:h,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function Y({flowRef:p}){const h=c.useRef(),s=c.useRef(0),b=c.useMemo(()=>{const u=document.createElement("canvas");u.width=512,u.height=128;const a=u.getContext("2d");return a.clearRect(0,0,512,128),a.font="bold 72px monospace",a.textAlign="center",a.textBaseline="middle",a.fillStyle="#0052FF",a.shadowColor="#0052FF",a.shadowBlur=30,a.fillText("BASE",256,64),a.shadowBlur=0,a.fillText("BASE",256,64),new R(u)},[]);j((u,a)=>{var r;s.current+=a;const m=(p==null?void 0:p.current)||{intensity:1,pulse:.3};if(m.pulse=Math.max(.25,(m.pulse||0)-a*1.8),h.current){h.current.rotation.y=s.current*(.15+.15*m.intensity),h.current.rotation.x=s.current*.1;const i=Math.sin(s.current*1.8),t=1+.06*i+.22*m.pulse;h.current.scale.set(t,t,t);const o=(r=h.current.children[0])==null?void 0:r.material;o&&(o.opacity=.75+.2*i+.15*m.pulse)}});const v=c.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return j((u,a)=>{var m;v.time.value+=a*.5,v.flow.value=((m=p==null?void 0:p.current)==null?void 0:m.intensity)||1}),e.jsxs("group",{ref:h,scale:1.3,children:[e.jsx("sprite",{scale:[2.2,.55,1],children:e.jsx("spriteMaterial",{map:b,transparent:!0,blending:w,opacity:.9,depthWrite:!1})}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.52,32,24]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:"varying vec3 vNormal; varying vec3 vPos; void main(){ vNormal=normalize(normalMatrix*normal); vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vNormal; varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 2.2);
              float noise = sin(vPos.x*4.0+time*0.8)*0.5+0.5;
              noise *= sin(vPos.y*3.0+time*0.5)*0.5+0.5;
              float pulse = 0.7 + 0.3*sin(time*1.2);
              vec3 col = mix(vec3(0.0,0.32,1.0), vec3(0.5,0.3,1.0), noise*0.4);
              float alpha = fresnel * 0.22 * pulse * (0.8+0.3*flow) * (0.6+0.4*noise);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:N})]}),e.jsxs("mesh",{scale:1.8,children:[e.jsx("sphereGeometry",{args:[.52,24,18]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:"varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vNormal; uniform float time; uniform float flow;
            void main(){
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 3.0);
              float pulse = 0.6 + 0.4*sin(time*0.9+1.0);
              vec3 col = vec3(0.15,0.55,1.0);
              float alpha = fresnel * 0.10 * pulse * (0.7+0.4*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:N})]}),e.jsxs("mesh",{scale:2.8,children:[e.jsx("sphereGeometry",{args:[.52,16,12]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:"varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vNormal; uniform float time;
            void main(){
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 4.0);
              float pulse = 0.5 + 0.5*sin(time*0.6+2.0);
              vec3 col = vec3(0.65,0.33,0.97);
              float alpha = fresnel * 0.06 * pulse;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:N})]})]})}function Z({liveData:p,onImpact:h,flowRef:s}){const v=c.useRef(0),u=c.useRef(),a=2.2,m=a*a,r=n=>{var M;const d=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((M=s==null?void 0:s.current)==null?void 0:M.intensity)||1)),g=(1.6+Math.random()*1)*(.9+.3*y);n[0]=Math.sin(l)*Math.cos(d)*g,n[1]=Math.sin(l)*Math.sin(d)*g,n[2]=Math.cos(l)*g},i=(n,d,l)=>{if(Math.random()<.42)n[l*3]=.08,n[l*3+1]=.85,n[l*3+2]=.55,d[l]=.055+Math.random()*.045;else{const y=Math.random();n[l*3]=.15*(1-y)+.78*y,n[l*3+1]=.45*(1-y)+.35*y,n[l*3+2]=1*(1-y)+.97*y,d[l]=.04+Math.random()*.04}},t=c.useMemo(()=>{const n=new Float32Array(156),d=new Float32Array(156),l=new Float32Array(156),y=new Float32Array(52),g=new Float32Array(52),M=new Float32Array(52),E=new Uint8Array(52);for(let C=0;C<52;C++){const A=Math.random()*.08,F=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);n[C*3]=A*Math.sin(S)*Math.cos(F),n[C*3+1]=A*Math.sin(S)*Math.sin(F),n[C*3+2]=A*Math.cos(S);const _=Math.random()*Math.PI*2,T=Math.acos(2*Math.random()-1),z=1.6+Math.random()*1;d[C*3]=Math.sin(T)*Math.cos(_)*z,d[C*3+1]=Math.sin(T)*Math.sin(_)*z,d[C*3+2]=Math.cos(T)*z,i(l,y,C),g[C]=Math.random()*1.5,M[C]=1.8+Math.random()*.8}return{positions:n,velocities:d,colors:l,sizes:y,lifetimes:g,maxLifetimes:M,hit:E}},[]),o=c.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),x=c.useRef(0);return j((n,d)=>{var U,B;v.current+=d,o.time.value=v.current;const l=Math.max(.5,Math.min(1.8,((U=s==null?void 0:s.current)==null?void 0:U.intensity)||1));o.flow.value=l;const y=((B=s==null?void 0:s.current)==null?void 0:B.pulse)>.95&&v.current-x.current>1.2;y&&(x.current=v.current);const{positions:g,velocities:M,colors:E,sizes:C,lifetimes:A,maxLifetimes:F,hit:S}=t,_=[0,0,0];let T=!1,z=y?8:0;for(let f=0;f<52;f++){A[f]+=d;const L=z>0&&A[f]>.15;if(A[f]>=F[f]||L){L&&z--;const I=Math.random()*.08,G=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);g[f*3]=I*Math.sin(O)*Math.cos(G),g[f*3+1]=I*Math.sin(O)*Math.sin(G),g[f*3+2]=I*Math.cos(O),r(_),M[f*3]=_[0],M[f*3+1]=_[1],M[f*3+2]=_[2],i(E,C,f),T=!0,A[f]=0,F[f]=.9+Math.random()*.5,S[f]=0;continue}g[f*3]+=M[f*3]*d,g[f*3+1]+=M[f*3+1]*d,g[f*3+2]+=M[f*3+2]*d,g[f*3]*g[f*3]+g[f*3+1]*g[f*3+1]+g[f*3+2]*g[f*3+2]>=m&&!S[f]&&(S[f]=1,h&&h({position:new P(g[f*3],g[f*3+1],g[f*3+2]),intensity:1}))}u.current&&(u.current.geometry.attributes.position.needsUpdate=!0,T&&(u.current.geometry.attributes.aColor.needsUpdate=!0,u.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:u,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:o,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            // Más brillante al nacer y al impactar, estela visible en medio
            vAlpha = (0.7 + 0.3 * sin(time * 2.0 + dist * 4.0)) * (0.9 + 0.25 * flow) * (0.6 + 0.4 * (1.0 - travel));
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (0.9 + 0.6 * flow) * (480.0 / -mv.z);
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function X(){const{positions:h,colors:s,sizes:b}=c.useMemo(()=>{const u=new Float32Array(180),a=new Float32Array(180),m=new Float32Array(60);for(let r=0;r<60;r++){const i=Math.acos(-1+2*r/60),t=Math.sqrt(60*Math.PI)*i,o=2.35;u[r*3]=o*Math.cos(t)*Math.sin(i),u[r*3+1]=o*Math.sin(t)*Math.sin(i),u[r*3+2]=o*Math.cos(i);const x=r>=36;if(x)a[r*3]=.133,a[r*3+1]=.827,a[r*3+2]=.933;else{const n=new W().setHSL(.75+Math.random()*.1,.7,.6);a[r*3]=n.r,a[r*3+1]=n.g,a[r*3+2]=n.b}m[r]=x?.09:.055}return{positions:u,colors:a,sizes:m}},[]),v=c.useMemo(()=>({time:{value:0}}),[]);return j((u,a)=>{v.time.value+=a*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[h,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function tt(){const p=c.useRef(),h=c.useMemo(()=>({time:{value:0}}),[]),s=c.useRef(0);j((a,m)=>{s.current+=m,h.time.value=s.current,p.current&&(p.current.rotation.y=s.current*.06)});const{positions:b,colors:v,sizes:u}=c.useMemo(()=>{const m=new Float32Array(150),r=new Float32Array(150),i=new Float32Array(50);for(let t=0;t<50;t++){const o=t/50*Math.PI*2,x=t%3,n=2.55+x*.22,d=.15*x;m[t*3]=n*Math.cos(o),m[t*3+1]=n*Math.sin(o)*Math.sin(d),m[t*3+2]=n*Math.sin(o)*Math.cos(d);const l=t/50;r[t*3]=.659*(1-l)+.133*l,r[t*3+1]=.333*(1-l)+.827*l,r[t*3+2]=.969*(1-l)+.933*l,i[t]=.015+Math.random()*.025}return{positions:m,colors:r,sizes:i}},[]);return e.jsx("group",{ref:p,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function et({onImpactsReady:p}){const h=c.useRef([]),s=c.useRef(Array.from({length:8},()=>({position:new P,intensity:0,active:!1,age:0})));return j((b,v)=>{for(;h.current.length>0&&s.current.some(a=>!a.active);){const a=h.current.shift(),m=s.current.find(r=>!r.active);m&&(m.position.copy(a.position),m.intensity=a.intensity,m.active=!0,m.age=0)}const u=1.5;s.current.forEach(a=>{a.active&&(a.age+=v,a.intensity=Math.max(0,1-a.age*u),a.intensity<=0&&(a.active=!1))}),p(s.current.filter(a=>a.active).map(a=>({position:a.position,intensity:a.intensity})))}),c.useEffect(()=>(window.__aetherius_addImpact=b=>{h.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function ot(){const[p,h]=c.useState([]),s=c.useRef(""),b=c.useCallback(v=>{let u=v.length+":";for(let a=0;a<v.length;a++){const m=v[a];u+=m.position.x.toFixed(1)+","+m.position.y.toFixed(1)+","+m.position.z.toFixed(1)+","+m.intensity.toFixed(2)+";"}u!==s.current&&(s.current=u,h(v))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(Q,{impactPoints:p}),e.jsx(et,{onImpactsReady:b})]})}function at(){const p=c.useRef(),h=c.useRef(0),{positions:s,colors:b,sizes:v}=c.useMemo(()=>{const m=new Float32Array(24),r=new Float32Array(24),i=new Float32Array(8);for(let t=0;t<8;t++){const o=t/8*Math.PI*2+Math.random()*.5,x=4+Math.random()*2;m[t*3]=x*Math.cos(o),m[t*3+1]=(Math.random()-.5)*3,m[t*3+2]=x*Math.sin(o);const n=Math.random();n<.4?(r[t*3]=.13,r[t*3+1]=.82,r[t*3+2]=.93):n<.7?(r[t*3]=.84,r[t*3+1]=.27,r[t*3+2]=.93):(r[t*3]=.83,r[t*3+1]=.66,r[t*3+2]=.32),i[t]=.08+Math.random()*.06}return{positions:m,colors:r,sizes:i}},[]),u=c.useMemo(()=>({time:{value:0}}),[]);return j((a,m)=>{var i,t,o;h.current+=m,u.time.value=h.current,p.current&&(p.current.rotation.y=h.current*.02);const r=(o=(t=(i=p.current)==null?void 0:i.geometry)==null?void 0:t.attributes)==null?void 0:o.aSize;if(r){for(let x=0;x<8;x++)r.array[x]=.06+.05*Math.sin(h.current*2+x*1.5);r.needsUpdate=!0}}),e.jsxs("points",{ref:p,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[s,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v,1]})]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function nt({liveData:p,paused:h}){const s=c.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=c.useCallback(i=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(i)},[]),v=c.useRef({intensity:1,pulse:.4,block:null});c.useEffect(()=>{const i=()=>{const o=p||{},x=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(x/500,.5)+Math.min(n/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const l=v.current;l.intensity=d,o.block&&o.block!=="—"&&o.block!==l.block?(l.block=o.block,l.pulse=1):l.pulse=Math.max(.3,(l.pulse||.3)*.94)};i();const t=setInterval(i,400);return()=>clearInterval(t)},[p]);const u=c.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),a=c.useMemo(()=>({alpha:!0,antialias:!s,powerPreference:"high-performance"}),[s]),m=c.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=c.useMemo(()=>[1,1.5],[]);return e.jsxs($,{camera:u,gl:a,onCreated:({gl:i})=>i.setClearColor(0,0),style:m,dpr:r,frameloop:h?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(ot,{}),e.jsx(Y,{flowRef:v}),e.jsx(Z,{liveData:p,onImpact:b,flowRef:v}),e.jsx(J,{}),e.jsx(K,{}),e.jsx(X,{}),e.jsx(q,{liveData:p}),e.jsx(tt,{})]}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(V,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),e.jsx(V,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),e.jsx(at,{})]}),e.jsx(H,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{nt as default};
