import{r as u,j as e,C as Y,S as L,O as K,u as P}from"./r3f-BFDIpzVt.js";import{q as k,r as q,p as w,F as O,e as U,s as $,h as z,D as Q}from"./three-DAA57BSS.js";const X=({liveData:x})=>{const M=u.useRef(),f=u.useRef(0),y=u.useMemo(()=>{const o=x||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:42,text:"   THE MARKETPLACE   —   THAT LIVES   —   THE MARKETPLACE   —   THAT LIVES   —   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.82,fontSize:34,text:"   API INFRASTRUCTURE   —   FOR AI AGENTS   —   THAT PAY   —   API INFRASTRUCTURE   —   FOR AI AGENTS   —   THAT PAY   —   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.75,fontSize:28,text:`   ${o.endpoints||"100+"} ENDPOINTS   —   ${o.freeEndpoints||"40"} FREE   —   ${o.latency||"—"}   —   ${o.endpoints||"100+"} ENDPOINTS   —   ${o.freeEndpoints||"40"} FREE   —   ${o.latency||"—"}   —   `}]},[x]),h=u.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);const d=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=d,a.textAlign="center",a.textBaseline="middle";const s=o.text,p=a.measureText(s).width,n=Math.ceil((t.width+p)/p),b=(t.width-p*n)/2+p/2;a.shadowColor=o.color,a.shadowBlur=48,a.fillStyle=o.color;for(let c=0;c<n;c++)a.fillText(s,b+c*p,t.height/2);a.shadowBlur=22;for(let c=0;c<n;c++)a.fillText(s,b+c*p,t.height/2);a.shadowBlur=0,a.fillStyle=o.color==="#ffffff"?"#ffffff":o.color;for(let c=0;c<n;c++)a.fillText(s,b+c*p,t.height/2);a.fillStyle="#ffffff",a.globalAlpha=.85;for(let c=0;c<n;c++)a.fillText(s,b+c*p,t.height/2);a.globalAlpha=1;const v=new k(t);return v.anisotropy=8,v.minFilter=$,v.magFilter=$,v}),[y]),m=u.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.font=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const d=o.text,s=a.measureText(d).width,p=Math.ceil((t.width+s)/s),n=(t.width-s*p)/2+s/2;a.shadowColor=o.color,a.shadowBlur=28,a.fillStyle=o.color,a.globalAlpha=.35;for(let v=0;v<p;v++)a.fillText(d,n+v*s,t.height/2);a.globalAlpha=1;const b=new k(t);return b.anisotropy=4,b}),[y]),[l,i]=u.useState(null),r=u.useRef(0);return P((o,t)=>{f.current+=t,r.current+=t,M.current&&y.forEach((a,d)=>{const s=M.current.children[d];if(s){l===d||(s.rotation.y+=t*a.speed);const n=s.children[0];if(n!=null&&n.material){const b=.88+.12*Math.sin(r.current*.7+d*1.2);n.material.opacity=(l===d?1:a.opacity)*b}}})}),e.jsx("group",{ref:M,children:y.map((o,t)=>e.jsxs("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),i(t),document.body.style.cursor="pointer"},onPointerOut:()=>{i(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(o.radius,o.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:h[t],transparent:!0,opacity:o.opacity,side:O,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:m[t],transparent:!0,opacity:.22,side:q,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[o.radius,o.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:o.color,transparent:!0,opacity:o.opacity*.12,depthWrite:!1})]})]},t))})};function J(){const x=u.useMemo(()=>({time:{value:0},colorA:{value:new U(2282478)},colorB:{value:new U(11032055)},colorC:{value:new U(14239471)}}),[]);return P((M,f)=>{x.time.value+=f*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
          varying vec3 vPos; varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vPos = position;
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vPos; varying vec3 vNormal; varying vec3 vWorldPos;
          uniform float time; uniform vec3 colorA; uniform vec3 colorB; uniform vec3 colorC;
          void main() {
            float dist = length(vPos) / 2.65;
            float radial = pow(1.0 - dist, 2.0);
            // Sombra que emana hacia afuera desde la superficie, sin borde contenido
            float pulse = 0.7 + 0.3 * sin(time * 0.5 + vWorldPos.y * 1.2);
            float wave = 0.5 + 0.5 * sin(time * 0.3 + vWorldPos.x * 1.5);
            float polar = pow(abs(vPos.y / 2.65), 2.0);
            vec3 col = mix(colorA, colorB, wave * 0.3);
            col = mix(col, colorC, 0.15 * sin(time * 0.3 + vWorldPos.y));
            col += polar * vec3(0.2, 0.08, 0.35) * 0.5;
            float alpha = radial * 0.10 * pulse * (1.0 + polar * 0.8);
            alpha *= smoothstep(1.0, 0.3, dist);
            gl_FragColor = vec4(col, alpha);
          }
        `,side:O,transparent:!0,depthWrite:!1,blending:w})]})}function Z(){const x=u.useMemo(()=>({time:{value:0}}),[]);return P((M,f)=>{x.time.value+=f*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:w})]})}function tt({impactPoints:x}){const M=u.useRef(),f=u.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return P((y,h)=>{if(f.time.value+=h*.5,x)for(let m=0;m<8&&m<x.length;m++){const l=x[m];f[`impact${m}`].value.copy(l.position),f[`i${m}t`].value=l.intensity}}),e.jsxs("mesh",{ref:M,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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

          // Collision glow: localized bright point where spark hits wireframe
          float impactPulse(vec3 worldPos, vec3 impactPos, float intensity) {
            float dist = length(worldPos - impactPos);
            // Tight ring expanding from impact point
            float ring = abs(dist - time * 0.8 * intensity);
            float ringGlow = exp(-ring * 1.5) * intensity * 1.5;
            // Proximity glow (bright at impact, fades radially)
            float prox = exp(-dist * 2.5) * intensity * 1.5;
            // Hot center flash — BRIGHT
            float hotCenter = exp(-dist * 6.0) * intensity * 2.0;
            return (ringGlow * 0.7 + prox + hotCenter) * intensity;
          }

          float polarGlow(vec3 pos) {
            return pow(abs(pos.y / 2.2), 2.5) * 0.6;
          }

          // Ambient sparkle: makes wireframe feel alive even without impacts
          float ambientSparkle(vec3 pos, float t) {
            float s = 0.0;
            // Traveling sparkles along wireframe edges
            float angle = atan(pos.z, pos.x);
            float lat = asin(pos.y / 2.2);
            s += pow(sin(angle * 12.0 + t * 1.5) * 0.5 + 0.5, 8.0) * 0.15;
            s += pow(sin(lat * 8.0 - t * 0.8) * 0.5 + 0.5, 10.0) * 0.1;
            // Random micro-sparkles
            float hash = fract(sin(dot(floor(pos * 20.0), vec3(12.9898,78.233,45.164))) * 43758.5453);
            s += step(0.97, hash) * 0.3 * (0.5 + 0.5 * sin(t * 5.0 + hash * 20.0));
            return s;
          }

          void main() {
            float pulse = 0.5 + 0.5 * sin(time * 0.8 + vWorldPos.y * 3.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));

            // Accumulate impact pulses — enhanced collision glow
            float impacts = 0.0;
            impacts += impactPulse(vWorldPos, impact0, i0t);
            impacts += impactPulse(vWorldPos, impact1, i1t);
            impacts += impactPulse(vWorldPos, impact2, i2t);
            impacts += impactPulse(vWorldPos, impact3, i3t);
            impacts += impactPulse(vWorldPos, impact4, i4t);
            impacts += impactPulse(vWorldPos, impact5, i5t);
            impacts += impactPulse(vWorldPos, impact6, i6t);
            impacts += impactPulse(vWorldPos, impact7, i7t);
            impacts = clamp(impacts, 0.0, 2.0);

            // Ambient sparkle on wireframe
            float sparkle = ambientSparkle(vPos, time * 2.0);

            // Wireframe base: CYAN pulse (the dominant read)
            vec3 cyanBase = vec3(0.0, 0.75, 1.0);
            vec3 purpleAccent = vec3(0.55, 0.25, 0.9);
            float cyanPulse = 0.6 + 0.4 * sin(time * 0.6 + vPos.x * 2.0);
            vec3 baseCol = mix(cyanBase, purpleAccent, 0.25 + 0.15 * sin(time * 0.25));
            baseCol *= (0.7 + 0.3 * cyanPulse);

            float polar = polarGlow(vPos);
            baseCol += polar * vec3(0.1, 0.05, 0.3);

            // Impact: hot cyan-white flash at collision — VIVID
            vec3 impactCol = vec3(0.4, 1.0, 1.0); // bright cyan
            vec3 col = mix(baseCol, impactCol, impacts * 0.9);
            col += vec3(0.3, 0.6, 0.8) * impacts;

            // Sparkle
            col += vec3(0.3, 0.6, 0.8) * sparkle;

            float alpha = (0.10 + polar * 0.05 + cyanPulse * 0.04) * pulse * fade + impacts * 0.85 + sparkle * 0.18;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function et({gasUniforms:x}){const f=u.useRef(),y=u.useRef(0),h=u.useMemo(()=>{const m=new Float32Array(120),l=new Float32Array(120),i=new Float32Array(120),r=new Float32Array(40);for(let o=0;o<40;o++){const t=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),d=.15+Math.random()*.5;m[o*3]=d*Math.sin(a)*Math.cos(t)*2,m[o*3+1]=d*Math.cos(a)*.7,m[o*3+2]=d*Math.sin(a)*Math.sin(t)*.9,l[o*3]=1.5+Math.random()*5,l[o*3+1]=1+Math.random()*4,l[o*3+2]=1.5+Math.random()*4.5;const s=Math.random();s<.4?(i[o*3]=.1+s*.2,i[o*3+1]=.7+s*.3,i[o*3+2]=.9+s*.1):s<.7?(i[o*3]=.8,i[o*3+1]=.9,i[o*3+2]=1):(i[o*3]=.05,i[o*3+1]=.5+s*.3,i[o*3+2]=.9+s*.1),r[o]=.025+Math.random()*.04}return{positions:m,seeds:l,colors:i,sizes:r}},[]);return P((m,l)=>{var o,t,a,d;y.current+=l;const i=y.current,r=(d=(a=(t=(o=f.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.position)==null?void 0:d.array;if(r){for(let s=0;s<40;s++){const p=h.seeds[s*3],n=h.seeds[s*3+1],b=h.seeds[s*3+2];r[s*3]=h.positions[s*3]+Math.sin(i*p+s*.7)*.05,r[s*3+1]=h.positions[s*3+1]+Math.cos(i*n+s*1.1)*.035,r[s*3+2]=h.positions[s*3+2]+Math.sin(i*b+s*.9)*.04}f.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:f,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[h.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float pulse;
          void main() {
            vColor = aColor;
            float beat = 0.5 + 0.5 * pulse;
            vAlpha = beat;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (220.0 / -mv.z) * (0.9 + 0.5 * beat);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            float d = abs(uv.x) + abs(uv.y) * 0.5; // tiny diamond
            if (d > 1.0) discard;
            float glow = pow(1.0 - d, 2.0);
            float core = pow(1.0 - d, 6.0); // hot white center
            vec3 col = mix(vColor, vec3(1.0), core * 0.7);
            col += vec3(0.3, 0.6, 0.8) * glow * 0.4;
            gl_FragColor = vec4(col, glow * vAlpha * 0.9);
          }
        `,transparent:!0,depthWrite:!1,blending:w})]})}function ot({flowRef:x}){const M=u.useRef(),f=u.useRef(0),y=u.useMemo(()=>{const m=document.createElement("canvas");m.width=512,m.height=128;const l=m.getContext("2d");return l.clearRect(0,0,512,128),l.font="bold 72px monospace",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#0052FF",l.shadowColor="#0052FF",l.shadowBlur=30,l.fillText("BASE",256,64),l.shadowBlur=0,l.fillText("BASE",256,64),new k(m)},[]);P((m,l)=>{var r;f.current+=l;const i=(x==null?void 0:x.current)||{pulse:.3};if(i.pulse=Math.max(.25,(i.pulse||0)-l*1.6),M.current){M.current.rotation.y=f.current*.08,M.current.rotation.x=Math.sin(f.current*.12)*.08;const o=Math.sin(f.current*1.5),t=Math.sin(f.current*.9)*.03,a=i.pulse,d=1+.04*o+.18*a;M.current.scale.set(d,d,d),M.current.position.y=t;const s=(r=M.current.children[0])==null?void 0:r.material;s&&(s.opacity=.7+.18*o+.18*a)}});const h=u.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((m,l)=>{var i,r;h.time.value+=l*.5,h.flow.value=((i=x==null?void 0:x.current)==null?void 0:i.intensity)||1,h.pulse.value=((r=x==null?void 0:x.current)==null?void 0:r.pulse)||.3}),e.jsxs("group",{ref:M,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.5 + 0.5 * swirl;
              float beat = 0.4 + 0.6 * pulse;
              // Efecto neón cian y azul base puro
              vec3 col = mix(vec3(0.0,0.3,1.0), vec3(0.0,0.85,1.0), dist*0.5);
              col += vec3(0.0,0.5,1.0) * (1.0-dist) * 0.4;
              float alpha = fog * turbulence * 0.18 * beat * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:q})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.4 + 0.6 * swirl;
              float noise = tendrils * 0.7 + 0.3;
              float beat = 0.3 + 0.7 * pulse;
              // Efecto neón cian y azul base
              vec3 col = mix(vec3(0.0,0.4,1.0), vec3(0.0,0.9,1.0), noise*0.5);
              col += vec3(0.0,0.5,1.0) * (1.0-dist) * 0.4;
              float alpha = radial * noise * 0.20 * beat * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:O})]}),e.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:e.jsx("spriteMaterial",{map:y,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),e.jsx(et,{gasUniforms:h}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.38;
              float radial = pow(1.0 - dist, 3.0);
              float swirl = sin(vPos.x*8.0+time*0.8)*sin(vPos.y*6.0+time*0.5)*sin(vPos.z*5.0+time*0.6);
              float noise = 0.7 + 0.3*swirl;
              float beat = 0.6 + 0.4*pulse;
              vec3 deepBlue = vec3(0.0,0.2,0.85);
              vec3 coreCyan = vec3(0.0,0.65,1.0);
              vec3 col = mix(deepBlue, coreCyan, (1.0-dist)*0.6 + noise*0.15);
              col += vec3(0.05,0.25,0.35) * (1.0-dist) * 0.4;
              float alpha = radial * 0.88 * noise * (0.75 + 0.4*flow) * beat;
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:O})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:O})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:O})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:O})]}),e.jsx(at,{gasUniforms:h})]})}function at({gasUniforms:x}){const m=4.840000000000001,l=u.useRef(),i=u.useRef([]),r=u.useMemo(()=>{const a=new Float32Array(216),d=new Float32Array(216),s=new Float32Array(360),p=new Float32Array(216);for(let n=0;n<72;n++){const b=n>=48;s[n*5]=1.5+Math.random()*2,s[n*5+1]=1+Math.random()*2.5,s[n*5+2]=Math.random()*3,s[n*5+3]=b?1:0,s[n*5+4]=1;const v=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),S=s[n*5];if(d[n*3]=Math.sin(c)*Math.cos(v)*S,d[n*3+1]=Math.sin(c)*Math.sin(v)*S,d[n*3+2]=Math.cos(c)*S,a[n*3]=(Math.random()-.5)*.04,a[n*3+1]=(Math.random()-.5)*.04,a[n*3+2]=(Math.random()-.5)*.04,b){const C=Math.random();p[n*3]=0,p[n*3+1]=.5+C*.4,p[n*3+2]=.95+C*.05}else{const C=Math.random();p[n*3]=0,p[n*3+1]=.75+C*.25,p[n*3+2]=1}}return{positions:a,velocities:d,seeds:s,colors:p}},[]);return P((a,d)=>{if(!l.current)return;const{positions:s,velocities:p,seeds:n,colors:b}=r;x.time.value,x.pulse.value;const v=[];for(let c=0;c<72;c++){const S=n[c*5+3]>.5;n[c*5+2]+=d;const C=n[c*5+2],j=n[c*5+1];if(C>=j){const T=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),_=1.5+Math.random()*2;p[c*3]=Math.sin(A)*Math.cos(T)*_,p[c*3+1]=Math.sin(A)*Math.sin(T)*_,p[c*3+2]=Math.cos(A)*_,s[c*3]=(Math.random()-.5)*.04,s[c*3+1]=(Math.random()-.5)*.04,s[c*3+2]=(Math.random()-.5)*.04,n[c*5]=_,n[c*5+2]=0,n[c*5+4]=1;continue}if(n[c*5+4]<.5)continue;s[c*3]+=p[c*3]*d,s[c*3+1]+=p[c*3+1]*d,s[c*3+2]+=p[c*3+2]*d;const F=S?.97:.992;p[c*3]*=F,p[c*3+1]*=F,p[c*3+2]*=F;const R=s[c*3]**2+s[c*3+1]**2+s[c*3+2]**2;if(R>=m&&n[c*5+4]>.5){const A=2.2/Math.sqrt(R);s[c*3]*=A,s[c*3+1]*=A,s[c*3+2]*=A,v.push({x:s[c*3],y:s[c*3+1],z:s[c*3+2],intensity:S?.6:1}),S?(p[c*3]*=-.3,p[c*3+1]*=-.3,p[c*3+2]*=-.3,n[c*5+2]=n[c*5+1]-.2):(n[c*5+4]=0,n[c*5+2]=n[c*5+1]-.1)}}i.current=v,l.current.geometry.attributes.position.needsUpdate=!0}),e.jsxs("points",{ref:l,renderOrder:10,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[r.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-seeds",args:[r.seeds,5]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[r.colors,3]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
    attribute vec5 seeds;
    attribute vec3 aColor;
    uniform float time;
    uniform float pulse;
    varying vec3 vColor;
    varying float vAlpha;
    varying float vType;
    varying float vAge;

    void main() {
      vColor = aColor;
      float speed = seeds.x;
      float maxLife = seeds.y;
      float age = seeds.z;
      float type = seeds.w;
      float alive = seeds.a;

      vType = type;
      float lifeRatio = clamp(age / maxLife, 0.0, 1.0);
      vAge = lifeRatio;

      // Fade: sharp birth, aggressive death
      float birth = smoothstep(0.0, 0.08, lifeRatio);
      float death = 1.0 - smoothstep(0.6, 1.0, lifeRatio);
      float alive_f = step(0.5, alive);

      // Size: sparks microscopic — tiny pinpricks
      float baseSize = type < 0.5 ? 0.05 : 0.02;
      // Distance-based scaling
      float dist = length(position);
      float perspScale = 18.0 / (-mvPos.z);

      vAlpha = birth * death * alive_f * (0.7 + 0.3 * pulse);
      gl_PointSize = baseSize * perspScale * (1.0 - lifeRatio * 0.4);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vType;
    varying float vAge;

    void main() {
      vec2 uv = gl_PointCoord * 2.0 - 1.0;
      float r = length(uv);
      if (r > 1.0) discard; // MÁSCARA CIRCULAR ESTRICTA — IMPOSIBLE QUE SEAN CUADRADOS

      float ax = abs(uv.x);
      float ay = abs(uv.y);

      // Estrella de 4 puntas orgánica dentro de límite circular
      float spikeX = smoothstep(0.20, 0.0, ay) * pow(1.0 - ax, 2.0);
      float spikeY = smoothstep(0.20, 0.0, ax) * pow(1.0 - ay, 2.0);
      float starCross = max(spikeX, spikeY);

      float centerGlow = pow(1.0 - r, 2.5);
      float hotCore = pow(1.0 - r, 10.0);

      vec3 hotColor = mix(vColor, vec3(1.0), hotCore * 0.85);
      float alpha = (starCross * 0.6 + centerGlow * 0.4) * vAlpha;

      gl_FragColor = vec4(hotColor, alpha);
    }
  `,transparent:!0,depthWrite:!1,blending:w})]})}function st(){const f=u.useRef(),y=u.useRef([]),h=u.useRef(0),m=u.useMemo(()=>{const i=new Float32Array(1950),r=new Float32Array(650*3),o=new Float32Array(650);for(let t=0;t<650;t++){const a=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),s=4.8+Math.random()*12;i[t*3]=s*Math.sin(d)*Math.cos(a),i[t*3+1]=s*Math.sin(d)*Math.sin(a),i[t*3+2]=s*Math.cos(d);const p=Math.random();p<.5?(r[t*3]=0,r[t*3+1]=.85,r[t*3+2]=1):p<.8?(r[t*3]=0,r[t*3+1]=.4,r[t*3+2]=1):(r[t*3]=.1,r[t*3+1]=.9,r[t*3+2]=.7),o[t]=.02+Math.random()*.035}return{positions:i,colors:r,sizes:o}},[]),l=u.useMemo(()=>Array.from({length:16},()=>{const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=5.5+Math.random()*8.5,t=Math.random();let a;return t<.4?a=[0,.82,1]:t<.7?a=[0,.45,.95]:a=[.1,.88,.72],{position:[o*Math.sin(r)*Math.cos(i),o*Math.sin(r)*Math.sin(i),o*Math.cos(r)],scale:1.8+Math.random()*2.5,color:a,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return P((i,r)=>{h.current+=r,f.current&&(f.current.rotation.y=h.current*.008),y.current.forEach((o,t)=>{if(!o)return;const a=l[t],d=h.current;o.position.x=a.position[0]+Math.sin(d*a.rotSpeed+a.phase)*a.bobAmp,o.position.y=a.position[1]+Math.cos(d*a.bobSpeed+a.phase)*a.bobAmp*.6,o.position.z=a.position[2]+Math.sin(d*a.rotSpeed*.7+a.phase*1.3)*a.bobAmp*.4})}),e.jsxs("group",{ref:f,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize; attribute vec3 aColor; varying vec3 vColor;
            void main() {
              vColor = aColor;
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = aSize * (350.0 / -mv.z);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float g = pow(1.0 - d * 2.0, 1.8);
              gl_FragColor = vec4(vColor, g * 0.55);
            }
          `,transparent:!0,depthWrite:!1,blending:w})]}),l.map((i,r)=>e.jsxs("mesh",{ref:o=>y.current[r]=o,position:i.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new U(i.color[0],i.color[1],i.color[2])},scaleVal:{value:i.scale}},vertexShader:`
              uniform float scaleVal;
              varying vec2 vUv;
              void main() {
                vUv = uv;
                vec4 mvPos = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                mvPos.xy += (uv - 0.5) * scaleVal;
                gl_Position = projectionMatrix * mvPos;
              }
            `,fragmentShader:`
              uniform vec3 color;
              varying vec2 vUv;
              void main() {
                vec2 center = vUv - 0.5;
                float dist = length(center);
                // ESTRICTO MÁSCARA CIRCULAR: obliga a alpha 0.0 antes de dist = 0.45
                float edgeMask = smoothstep(0.45, 0.12, dist);
                float radial = pow(max(0.0, 1.0 - dist * 2.1), 2.2);
                float turb = sin(vUv.x * 12.0) * sin(vUv.y * 10.0) * 0.25 + 0.75;
                float alpha = radial * turb * 0.22 * edgeMask;
                if (alpha < 0.002) discard;
                gl_FragColor = vec4(color, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:Q})]},r))]})}function it({liveData:x,onImpact:M,flowRef:f}){const h=u.useRef(0),m=u.useRef(),l=2.2,i=l*l,r=s=>{var c;const p=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((c=f==null?void 0:f.current)==null?void 0:c.intensity)||1)),v=(1.6+Math.random()*1)*(.9+.3*b);s[0]=Math.sin(n)*Math.cos(p)*v,s[1]=Math.sin(n)*Math.sin(p)*v,s[2]=Math.cos(n)*v},o=(s,p,n)=>{Math.random()<.5?(s[n*3]=0,s[n*3+1]=.85,s[n*3+2]=1,p[n]=.04+Math.random()*.03):(s[n*3]=0,s[n*3+1]=.4,s[n*3+2]=1,p[n]=.035+Math.random()*.03)},t=u.useMemo(()=>{const s=new Float32Array(156),p=new Float32Array(156),n=new Float32Array(156),b=new Float32Array(52),v=new Float32Array(52),c=new Float32Array(52),S=new Uint8Array(52);for(let C=0;C<52;C++){const j=Math.random()*.08,F=Math.random()*Math.PI*2,R=Math.acos(2*Math.random()-1);s[C*3]=j*Math.sin(R)*Math.cos(F),s[C*3+1]=j*Math.sin(R)*Math.sin(F),s[C*3+2]=j*Math.cos(R);const T=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),_=1.6+Math.random()*1;p[C*3]=Math.sin(A)*Math.cos(T)*_,p[C*3+1]=Math.sin(A)*Math.sin(T)*_,p[C*3+2]=Math.cos(A)*_,o(n,b,C),v[C]=Math.random()*1.5,c[C]=1.8+Math.random()*.8}return{positions:s,velocities:p,colors:n,sizes:b,lifetimes:v,maxLifetimes:c,hit:S}},[]),a=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),d=u.useRef(0);return P((s,p)=>{var G,D;h.current+=p,a.time.value=h.current;const n=Math.max(.5,Math.min(1.8,((G=f==null?void 0:f.current)==null?void 0:G.intensity)||1));a.flow.value=n;const b=((D=f==null?void 0:f.current)==null?void 0:D.pulse)>.95&&h.current-d.current>1.2;b&&(d.current=h.current);const{positions:v,velocities:c,colors:S,sizes:C,lifetimes:j,maxLifetimes:F,hit:R}=t,T=[0,0,0];let A=!1,_=b?8:0;for(let g=0;g<52;g++){j[g]+=p;const B=_>0&&j[g]>.15;if(j[g]>=F[g]||B){B&&_--;const I=Math.random()*.08,N=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);v[g*3]=I*Math.sin(W)*Math.cos(N),v[g*3+1]=I*Math.sin(W)*Math.sin(N),v[g*3+2]=I*Math.cos(W),r(T),c[g*3]=T[0],c[g*3+1]=T[1],c[g*3+2]=T[2],o(S,C,g),A=!0,j[g]=0,F[g]=1.8+Math.random()*.8,R[g]=0;continue}const V=Math.sqrt(v[g*3]*v[g*3]+v[g*3+1]*v[g*3+1]+v[g*3+2]*v[g*3+2]),E=V>1.6?(V-1.6)/.6:0;E>0&&(c[g*3]*=1-E*.08,c[g*3+1]*=1-E*.08,c[g*3+2]*=1-E*.08,C[g]=C[g]*(1+E*.8)),v[g*3]+=c[g*3]*p,v[g*3+1]+=c[g*3+1]*p,v[g*3+2]+=c[g*3+2]*p;const H=v[g*3]*v[g*3]+v[g*3+1]*v[g*3+1]+v[g*3+2]*v[g*3+2];if(H>=i)if(R[g])C[g]*=1.06;else{R[g]=1;const I=Math.sqrt(H),N=l/I;v[g*3]*=N,v[g*3+1]*=N,v[g*3+2]*=N,c[g*3]=0,c[g*3+1]=0,c[g*3+2]=0,M&&M({position:new z(v[g*3],v[g*3+1],v[g*3+2]),intensity:1}),j[g]=F[g]-.8}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,A&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:m,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:a,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            // PARTS visible through entire journey — fade gently at edge, don't vanish
            float edgeFade = 1.0 - smoothstep(0.7, 1.05, travel) * 0.4;
            vAlpha = (0.8 + 0.2 * sin(time * 2.0 + dist * 4.0)) * (0.9 + 0.25 * flow) * edgeFade;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            float sz = aSize * (1.0 + travel * 0.8);
            gl_PointSize = sz * (1.0 + 0.6 * flow) * (220.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            float r = length(uv);
            if (r > 1.0) discard; // Strict circular boundary — NO SQUARES

            float ax = abs(uv.x);
            float ay = abs(uv.y);
            float spikeX = smoothstep(0.18, 0.0, ay) * pow(1.0 - ax, 2.0);
            float spikeY = smoothstep(0.18, 0.0, ax) * pow(1.0 - ay, 2.0);
            float starCross = max(spikeX, spikeY);

            float centerGlow = pow(1.0 - r, 2.5);
            float hotCore = pow(1.0 - r, 10.0);
            vec3 hotColor = mix(vColor, vec3(1.0), hotCore * 0.8);
            float alpha = (starCross * 0.6 + centerGlow * 0.4) * vAlpha;

            gl_FragColor = vec4(hotColor, alpha);
          }
        `,transparent:!0,depthWrite:!1,blending:w})]})}function rt(){const{positions:M,colors:f,sizes:y}=u.useMemo(()=>{const m=new Float32Array(180),l=new Float32Array(180),i=new Float32Array(60);for(let r=0;r<60;r++){const o=Math.acos(-1+2*r/60),t=Math.sqrt(60*Math.PI)*o,a=2.35;m[r*3]=a*Math.cos(t)*Math.sin(o),m[r*3+1]=a*Math.sin(t)*Math.sin(o),m[r*3+2]=a*Math.cos(o);const d=r>=36;if(d)l[r*3]=.133,l[r*3+1]=.827,l[r*3+2]=.933;else{const s=new U().setHSL(.75+Math.random()*.1,.7,.6);l[r*3]=s.r,l[r*3+1]=s.g,l[r*3+2]=s.b}i[r]=d?.09:.055}return{positions:m,colors:l,sizes:i}},[]),h=u.useMemo(()=>({time:{value:0}}),[]);return P((m,l)=>{h.time.value+=l*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function nt(){const x=u.useRef(),M=u.useMemo(()=>({time:{value:0}}),[]),f=u.useRef(0);P((l,i)=>{f.current+=i,M.time.value=f.current,x.current&&(x.current.rotation.y=f.current*.06)});const{positions:y,colors:h,sizes:m}=u.useMemo(()=>{const i=new Float32Array(150),r=new Float32Array(150),o=new Float32Array(50);for(let t=0;t<50;t++){const a=t/50*Math.PI*2,d=t%3,s=2.55+d*.22,p=.15*d;i[t*3]=s*Math.cos(a),i[t*3+1]=s*Math.sin(a)*Math.sin(p),i[t*3+2]=s*Math.sin(a)*Math.cos(p);const n=t/50;r[t*3]=.659*(1-n)+.133*n,r[t*3+1]=.333*(1-n)+.827*n,r[t*3+2]=.969*(1-n)+.933*n,o[t]=.015+Math.random()*.025}return{positions:i,colors:r,sizes:o}},[]);return e.jsx("group",{ref:x,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function lt({onImpactsReady:x}){const M=u.useRef([]),f=u.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return P((y,h)=>{for(;M.current.length>0&&f.current.some(l=>!l.active);){const l=M.current.shift(),i=f.current.find(r=>!r.active);i&&(i.position.copy(l.position),i.intensity=l.intensity,i.active=!0,i.age=0)}const m=.8;f.current.forEach(l=>{l.active&&(l.age+=h,l.intensity=Math.max(0,1-l.age*m),l.intensity<=0&&(l.active=!1))}),x(f.current.filter(l=>l.active).map(l=>({position:l.position,intensity:l.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=y=>{M.current.push(y)},()=>{delete window.__aetherius_addImpact}),[]),null}function ct(){const[x,M]=u.useState([]),f=u.useRef(""),y=u.useCallback(h=>{let m=h.length+":";for(let l=0;l<h.length;l++){const i=h[l];m+=i.position.x.toFixed(1)+","+i.position.y.toFixed(1)+","+i.position.z.toFixed(1)+","+i.intensity.toFixed(2)+";"}m!==f.current&&(f.current=m,M(h))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(tt,{impactPoints:x}),e.jsx(lt,{onImpactsReady:y})]})}function dt(){const x=u.useRef(),M=u.useRef(0),{positions:f,colors:y,sizes:h}=u.useMemo(()=>{const i=new Float32Array(24),r=new Float32Array(24),o=new Float32Array(8);for(let t=0;t<8;t++){const a=t/8*Math.PI*2+Math.random()*.5,d=4+Math.random()*2;i[t*3]=d*Math.cos(a),i[t*3+1]=(Math.random()-.5)*3,i[t*3+2]=d*Math.sin(a);const s=Math.random();s<.4?(r[t*3]=.13,r[t*3+1]=.82,r[t*3+2]=.93):s<.7?(r[t*3]=.84,r[t*3+1]=.27,r[t*3+2]=.93):(r[t*3]=.83,r[t*3+1]=.66,r[t*3+2]=.32),o[t]=.08+Math.random()*.06}return{positions:i,colors:r,sizes:o}},[]),m=u.useMemo(()=>({time:{value:0}}),[]);return P((l,i)=>{var o,t,a;M.current+=i,m.time.value=M.current,x.current&&(x.current.rotation.y=M.current*.02);const r=(a=(t=(o=x.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.aSize;if(r){for(let d=0;d<8;d++)r.array[d]=.06+.05*Math.sin(M.current*2+d*1.5);r.needsUpdate=!0}}),e.jsxs("points",{ref:x,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h,1]})]}),e.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function pt(){const M=u.useRef();u.useRef([]);const f=u.useRef(0),y=u.useMemo(()=>{const l=new Float32Array(3600),i=new Float32Array(1200*3),r=new Float32Array(1200),o=()=>Math.random();for(let t=0;t<1200;t++){const a=o()*Math.PI*2,d=Math.acos(2*o()-1),s=o();let p,n;s<.45?(p=6+o()*6,n=.07):s<.8?(p=12+o()*8,n=.05):(p=20+o()*8,n=.035),l[t*3]=p*Math.sin(d)*Math.cos(a),l[t*3+1]=p*Math.sin(d)*Math.sin(a),l[t*3+2]=p*Math.cos(d);const b=o();b<.4?(i[t*3]=.95,i[t*3+1]=.97,i[t*3+2]=1):b<.55?(i[t*3]=.3,i[t*3+1]=.95,i[t*3+2]=1):b<.68?(i[t*3]=1,i[t*3+1]=1,i[t*3+2]=1):b<.78?(i[t*3]=.6,i[t*3+1]=.8,i[t*3+2]=1):b<.88?(i[t*3]=.95,i[t*3+1]=.35,i[t*3+2]=.9):(i[t*3]=1,i[t*3+1]=.82,i[t*3+2]=.55),r[t]=n+o()*.035}return{positions:l,colors:i,sizes:r}},[]),h=u.useMemo(()=>{const i=new Float32Array(96),r=new Float32Array(96),o=new Float32Array(32),t=new Float32Array(64),a=()=>Math.random();for(let d=0;d<32;d++){const s=a()*Math.PI*2,p=Math.acos(2*a()-1),n=a()<.65?6+a()*8:14+a()*9;i[d*3]=n*Math.sin(p)*Math.cos(s),i[d*3+1]=n*Math.sin(p)*Math.sin(s),i[d*3+2]=n*Math.cos(p);const b=a();let v=[0,.8,1];b<.25?v=[0,.82,1]:b<.45?v=[.1,.92,.7]:b<.6?v=[.05,.55,.95]:b<.78?v=[.15,.75,.88]:v=[.35,.15,.8],r[d*3]=v[0],r[d*3+1]=v[1],r[d*3+2]=v[2],o[d]=220+a()*260,t[d*2]=2+a()*3,t[d*2+1]=a()*100}return{positions:i,colors:r,sizes:o,noise:t}},[]);return P((l,i)=>{f.current+=i;const r=f.current;M.current&&(M.current.rotation.y=r*.0018,M.current.rotation.x=Math.sin(r*.0012)*.012)}),e.jsxs("group",{ref:M,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize;
            attribute vec3 aColor;
            varying vec3 vColor;
            varying float vDist;
            void main() {
              vColor = aColor;
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vDist = -mv.z;
              gl_PointSize = aSize * (380.0 / vDist);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            varying float vDist;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float glow = pow(1.0 - d * 2.0, 1.8);
              float core = pow(1.0 - d * 2.0, 8.0);
              vec3 col = vColor + vec3(1.0) * core * 0.4;
              float distFade = clamp(1.0 - (vDist - 6.0) / 30.0, 0.35, 1.0);
              gl_FragColor = vec4(col, glow * distFade);
            }
          `,transparent:!0,depthWrite:!1,blending:w})]}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[h.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h.sizes,1]}),e.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[h.noise,2]})]}),e.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize;
            attribute vec3 aColor;
            attribute vec2 aNoise;
            varying vec3 vColor;
            varying vec2 vNoiseParams;
            varying float vDist;
            void main() {
              vColor = aColor;
              vNoiseParams = aNoise;
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vDist = -mv.z;
              gl_PointSize = aSize * (320.0 / vDist);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            varying vec2 vNoiseParams;
            varying float vDist;

            
    float hash21(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
        mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x),
        f.y
      );
    }
    float fbm(vec2 p) {
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 4; i++) {
        v += a * vnoise(p);
        p = p * 2.1 + vec2(37.0, 17.0);
        a *= 0.5;
      }
      return v;
    }
  

            void main() {
              vec2 coord = gl_PointCoord - vec2(0.5);
              float dist = length(coord);
              if (dist > 0.5) discard; // Hardware circular clip — ZERO square artifacts!

              float uvDist = dist * 2.0;
              vec2 noiseCoord = coord * vNoiseParams.x + vNoiseParams.y;
              float n = fbm(noiseCoord);

              float warpedDist = uvDist + n * 0.45 - 0.2;
              float radial = pow(max(0.0, 1.0 - warpedDist * 2.0), 2.2);

              float filaments = fbm(noiseCoord * 1.8);
              filaments = smoothstep(0.2, 0.8, filaments);

              float edgeMask = smoothstep(1.0, 0.15, uvDist);
              float alpha = radial * (0.35 + filaments * 0.65) * 0.26 * edgeMask;
              if (alpha < 0.001) discard;

              float distFade = clamp(1.0 - (vDist - 6.0) / 28.0, 0.3, 1.0);
              alpha *= distFade;

              vec3 col = vColor + vec3(filaments * 0.1, n * 0.05, filaments * 0.08);
              gl_FragColor = vec4(col, alpha);
            }
          `,transparent:!0,depthWrite:!1,blending:w})]})]})}function ht({liveData:x,paused:M}){const f=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=u.useCallback(o=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(o)},[]),h=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const o=()=>{const a=x||{},d=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,s=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(d/500,.5)+Math.min(s/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const n=h.current;n.intensity=p,a.block&&a.block!=="—"&&a.block!==n.block?(n.block=a.block,n.pulse=1):n.pulse=Math.max(.3,(n.pulse||.3)*.94)};o();const t=setInterval(o,400);return()=>clearInterval(t)},[x]);const m=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),l=u.useMemo(()=>({alpha:!0,antialias:!f,powerPreference:"high-performance"}),[f]),i=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=u.useMemo(()=>[1,1.5],[]);return e.jsxs(Y,{camera:m,gl:l,onCreated:({gl:o})=>o.setClearColor(0,0),style:i,dpr:r,frameloop:M?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(ot,{flowRef:h}),e.jsx(ct,{}),e.jsx(it,{liveData:x,onImpact:y,flowRef:h}),e.jsx(J,{}),e.jsx(Z,{}),e.jsx(rt,{}),e.jsx(X,{liveData:x}),e.jsx(nt,{})]}),!f&&e.jsxs(e.Fragment,{children:[e.jsx(pt,{}),e.jsx(L,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(L,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(L,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(st,{}),e.jsx(dt,{})]}),e.jsx(K,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ht as default};
