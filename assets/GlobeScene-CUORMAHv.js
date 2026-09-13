import{r as f,j as e,C as J,S as B,O as Q,u as P}from"./r3f-BlJf2meZ.js";import{q as L,r as K,s as $,F as R,p as w,e as U,t as H,h as z,D as Y}from"./three-Czb7hWnE.js";const Z=({liveData:g})=>{const x=f.useRef(),h=f.useRef(0),y=f.useMemo(()=>{const o=g||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${o.endpoints||"100+"} ENDPOINTS   ${o.freeEndpoints||"40"} FREE   ${o.latency||"—"}   `}]},[g]),u=f.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);const d=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=d,a.textAlign="center",a.textBaseline="middle";const s=o.text,p=a.measureText(s).width,n=Math.ceil((t.width+p)/p),b=(t.width-p*n)/2+p/2;a.shadowColor=o.color,a.shadowBlur=48,a.fillStyle=o.color;for(let l=0;l<n;l++)a.fillText(s,b+l*p,t.height/2);a.shadowBlur=22;for(let l=0;l<n;l++)a.fillText(s,b+l*p,t.height/2);a.shadowBlur=0,a.fillStyle=o.color==="#ffffff"?"#ffffff":o.color;for(let l=0;l<n;l++)a.fillText(s,b+l*p,t.height/2);a.fillStyle="#ffffff",a.globalAlpha=.85;for(let l=0;l<n;l++)a.fillText(s,b+l*p,t.height/2);a.globalAlpha=1;const M=new L(t);return M.anisotropy=8,M.minFilter=H,M.magFilter=H,M}),[y]),m=f.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=160;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.font=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const d=o.text,s=a.measureText(d).width,p=Math.ceil((t.width+s)/s),n=(t.width-s*p)/2+s/2;a.shadowColor=o.color,a.shadowBlur=28,a.fillStyle=o.color,a.globalAlpha=.35;for(let M=0;M<p;M++)a.fillText(d,n+M*s,t.height/2);a.globalAlpha=1;const b=new L(t);return b.anisotropy=4,b}),[y]),[c,i]=f.useState(null),r=f.useRef(0);return P((o,t)=>{h.current+=t,r.current+=t,x.current&&y.forEach((a,d)=>{const s=x.current.children[d];if(s){c===d||(s.rotation.y+=t*a.speed);const n=s.children[0];if(n!=null&&n.material){const b=.88+.12*Math.sin(r.current*.7+d*1.2);n.material.opacity=(c===d?1:a.opacity)*b}}})}),e.jsx("group",{ref:x,children:y.map((o,t)=>e.jsxs("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),i(t),document.body.style.cursor="pointer"},onPointerOut:()=>{i(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(o.radius,o.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:u[t],transparent:!0,opacity:o.opacity,side:R,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:m[t],transparent:!0,opacity:.22,side:K,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[o.radius,o.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:o.color,transparent:!0,opacity:o.opacity*.12,depthWrite:!1})]})]},t))})};function X(){const g=f.useMemo(()=>({time:{value:0},colorA:{value:new U(2282478)},colorB:{value:new U(11032055)},colorC:{value:new U(14239471)}}),[]);return P((x,h)=>{g.time.value+=h*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function tt(){const g=f.useMemo(()=>({time:{value:0}}),[]);return P((x,h)=>{g.time.value+=h*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function et({impactPoints:g}){const x=f.useRef(),h=f.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return P((y,u)=>{if(h.time.value+=u*.5,g)for(let m=0;m<8&&m<g.length;m++){const c=g[m];h[`impact${m}`].value.copy(c.position),h[`i${m}t`].value=c.intensity}}),e.jsxs("mesh",{ref:x,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
            float ringGlow = exp(-ring * 1.5) * intensity;
            // Proximity glow (bright at impact, fades radially)
            float prox = exp(-dist * 2.0) * intensity * 0.8;
            // Hot center flash
            float hotCenter = exp(-dist * 4.0) * intensity * 0.5;
            return (ringGlow * 0.5 + prox + hotCenter) * intensity;
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

            // Impact: hot cyan-white flash at collision
            vec3 impactCol = vec3(0.3, 1.0, 1.0); // bright cyan
            vec3 col = mix(baseCol, impactCol, impacts * 0.85);
            col += vec3(0.2, 0.4, 0.5) * impacts;

            // Sparkle
            col += vec3(0.2, 0.5, 0.7) * sparkle;

            float alpha = (0.06 + polar * 0.03 + cyanPulse * 0.02) * pulse * fade + impacts * 0.6 + sparkle * 0.12;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function ot({gasUniforms:g}){const h=f.useRef(),y=f.useRef(0),u=f.useMemo(()=>{const m=new Float32Array(120),c=new Float32Array(120),i=new Float32Array(120),r=new Float32Array(40);for(let o=0;o<40;o++){const t=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),d=.15+Math.random()*.5;m[o*3]=d*Math.sin(a)*Math.cos(t)*2,m[o*3+1]=d*Math.cos(a)*.7,m[o*3+2]=d*Math.sin(a)*Math.sin(t)*.9,c[o*3]=1.5+Math.random()*5,c[o*3+1]=1+Math.random()*4,c[o*3+2]=1.5+Math.random()*4.5;const s=Math.random();s<.4?(i[o*3]=.1+s*.2,i[o*3+1]=.7+s*.3,i[o*3+2]=.9+s*.1):s<.7?(i[o*3]=.8,i[o*3+1]=.9,i[o*3+2]=1):(i[o*3]=.05,i[o*3+1]=.5+s*.3,i[o*3+2]=.9+s*.1),r[o]=.025+Math.random()*.04}return{positions:m,seeds:c,colors:i,sizes:r}},[]);return P((m,c)=>{var o,t,a,d;y.current+=c;const i=y.current,r=(d=(a=(t=(o=h.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.position)==null?void 0:d.array;if(r){for(let s=0;s<40;s++){const p=u.seeds[s*3],n=u.seeds[s*3+1],b=u.seeds[s*3+2];r[s*3]=u.positions[s*3]+Math.sin(i*p+s*.7)*.05,r[s*3+1]=u.positions[s*3+1]+Math.cos(i*n+s*1.1)*.035,r[s*3+2]=u.positions[s*3+2]+Math.sin(i*b+s*.9)*.04}h.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:h,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function at({flowRef:g}){const x=f.useRef(),h=f.useRef(0),y=f.useMemo(()=>{const m=document.createElement("canvas");m.width=512,m.height=128;const c=m.getContext("2d");return c.clearRect(0,0,512,128),c.font="bold 72px monospace",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#0052FF",c.shadowColor="#0052FF",c.shadowBlur=30,c.fillText("BASE",256,64),c.shadowBlur=0,c.fillText("BASE",256,64),new L(m)},[]);P((m,c)=>{var r;h.current+=c;const i=(g==null?void 0:g.current)||{pulse:.3};if(i.pulse=Math.max(.25,(i.pulse||0)-c*1.6),x.current){x.current.rotation.y=h.current*.08,x.current.rotation.x=Math.sin(h.current*.12)*.08;const o=Math.sin(h.current*1.5),t=Math.sin(h.current*.9)*.03,a=i.pulse,d=1+.04*o+.18*a;x.current.scale.set(d,d,d),x.current.position.y=t;const s=(r=x.current.children[0])==null?void 0:r.material;s&&(s.opacity=.7+.18*o+.18*a)}});const u=f.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((m,c)=>{var i,r;u.time.value+=c*.5,u.flow.value=((i=g==null?void 0:g.current)==null?void 0:i.intensity)||1,u.pulse.value=((r=g==null?void 0:g.current)==null?void 0:r.pulse)||.3}),e.jsxs("group",{ref:x,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.5 + 0.5 * swirl;
              float beat = 0.4 + 0.6 * pulse;
              // Cyan-green-blue Argua tones
              vec3 col = mix(vec3(0.0,0.15,0.5), vec3(0.06,0.4,0.65), dist*0.5);
              col += vec3(0.05,0.15,0.25) * (1.0-dist) * 0.3;
              // SUTIL: alpha bajo para que no compita con wireframe
              float alpha = fog * turbulence * 0.06 * beat * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:$,side:K})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.4 + 0.6 * swirl;
              float noise = tendrils * 0.7 + 0.3;
              float beat = 0.3 + 0.7 * pulse;
              // Cyan-green-blue Argua tones
              vec3 col = mix(vec3(0.0,0.3,0.6), vec3(0.08,0.55,0.6), noise*0.5);
              col += vec3(0.05,0.2,0.3) * (1.0-dist) * 0.4;
              // SUTIL — lower alpha, NormalBlending preserves cosmic background
              float alpha = radial * noise * 0.06 * beat * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:$,side:R})]}),e.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:e.jsx("spriteMaterial",{map:y,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),e.jsx(ot,{gasUniforms:u}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.5,0.85), vec3(0.08,0.35,0.7), dist*0.5);
              float alpha = radial * 0.28 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.4,0.75), vec3(0.08,0.55,0.6), dist*0.4);
              float alpha = radial * 0.14 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.35,0.7), vec3(0.08,0.5,0.6), dist*0.5+phase*0.15);
              float alpha = radial * 0.07 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsx(rt,{gasUniforms:u})]})}function rt({gasUniforms:g}){const m=4.840000000000001,c=f.useRef(),i=f.useRef([]),r=f.useMemo(()=>{const a=new Float32Array(216),d=new Float32Array(216),s=new Float32Array(360),p=new Float32Array(216);for(let n=0;n<72;n++){const b=n>=48;s[n*5]=1.5+Math.random()*2,s[n*5+1]=1+Math.random()*2.5,s[n*5+2]=Math.random()*3,s[n*5+3]=b?1:0,s[n*5+4]=1;const M=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),S=s[n*5];if(d[n*3]=Math.sin(l)*Math.cos(M)*S,d[n*3+1]=Math.sin(l)*Math.sin(M)*S,d[n*3+2]=Math.cos(l)*S,a[n*3]=(Math.random()-.5)*.04,a[n*3+1]=(Math.random()-.5)*.04,a[n*3+2]=(Math.random()-.5)*.04,b){const C=Math.random();p[n*3]=.6+C*.3,p[n*3+1]=.15+C*.2,p[n*3+2]=.85+C*.15}else{const C=Math.random();p[n*3]=.1+C*.9,p[n*3+1]=.6+C*.4,p[n*3+2]=.8+C*.2}}return{positions:a,velocities:d,seeds:s,colors:p}},[]);return P((a,d)=>{if(!c.current)return;const{positions:s,velocities:p,seeds:n,colors:b}=r;g.time.value,g.pulse.value;const M=[];for(let l=0;l<72;l++){const S=n[l*5+3]>.5;n[l*5+2]+=d;const C=n[l*5+2],j=n[l*5+1];if(C>=j){const _=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;p[l*3]=Math.sin(A)*Math.cos(_)*T,p[l*3+1]=Math.sin(A)*Math.sin(_)*T,p[l*3+2]=Math.cos(A)*T,s[l*3]=(Math.random()-.5)*.04,s[l*3+1]=(Math.random()-.5)*.04,s[l*3+2]=(Math.random()-.5)*.04,n[l*5]=T,n[l*5+2]=0,n[l*5+4]=1;continue}if(n[l*5+4]<.5)continue;s[l*3]+=p[l*3]*d,s[l*3+1]+=p[l*3+1]*d,s[l*3+2]+=p[l*3+2]*d;const F=S?.97:.992;p[l*3]*=F,p[l*3+1]*=F,p[l*3+2]*=F;const O=s[l*3]**2+s[l*3+1]**2+s[l*3+2]**2;if(O>=m&&n[l*5+4]>.5){const A=2.2/Math.sqrt(O);s[l*3]*=A,s[l*3+1]*=A,s[l*3+2]*=A,M.push({x:s[l*3],y:s[l*3+1],z:s[l*3+2],intensity:S?.6:1}),S?(p[l*3]*=-.3,p[l*3+1]*=-.3,p[l*3+2]*=-.3,n[l*5+2]=n[l*5+1]-.2):(n[l*5+4]=0,n[l*5+2]=n[l*5+1]-.1)}}i.current=M,c.current.geometry.attributes.position.needsUpdate=!0}),e.jsxs("points",{ref:c,renderOrder:10,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[r.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-seeds",args:[r.seeds,5]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[r.colors,3]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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

      // Size: sparks small, trails very thin
      float baseSize = type < 0.5 ? 2.0 : 0.8;
      // Distance-based scaling
      float dist = length(position);
      float perspScale = 200.0 / (-mvPos.z);

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

      // PURE 4-POINTED STAR: cross shape, thin and sharp
      float ax = abs(uv.x);
      float ay = abs(uv.y);
      // Star = cross pattern (thin arms extending from center)
      float star = min(ax, ay);
      float arm = max(ax, ay);
      // Thin cross: arms are narrow, center is tight
      float d = star * 0.8 + arm * 0.15;

      if (d > 1.0) discard;

      // Sharp edges: steep falloff, minimal diffusion
      float sharp = pow(1.0 - d, 2.0);
      float core = pow(1.0 - d, 8.0); // tiny hot center

      // White-hot center → colored arms
      vec3 hotCore = vec3(1.0, 1.0, 1.0);
      vec3 col = mix(vColor, hotCore, core * 0.8);

      // Minimal glow — keep it sharp
      float glow = exp(-d * 5.0) * 0.15;

      gl_FragColor = vec4(col, (sharp * 0.9 + glow) * vAlpha);
    }
  `,transparent:!0,depthWrite:!1,blending:w})]})}function st(){const h=f.useRef(),y=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const i=new Float32Array(600),r=new Float32Array(600),o=new Float32Array(200);for(let t=0;t<200;t++){const a=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),s=3+Math.random()*12;i[t*3]=s*Math.sin(d)*Math.cos(a),i[t*3+1]=s*Math.sin(d)*Math.sin(a),i[t*3+2]=s*Math.cos(d);const p=Math.random();p<.5?(r[t*3]=.3,r[t*3+1]=.15,r[t*3+2]=.5):p<.8?(r[t*3]=.1,r[t*3+1]=.4,r[t*3+2]=.5):(r[t*3]=.5,r[t*3+1]=.5,r[t*3+2]=.55),o[t]=.02+Math.random()*.03}return{positions:i,colors:r,sizes:o}},[]),c=f.useMemo(()=>Array.from({length:8},()=>{const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=5+Math.random()*8,t=Math.random();let a;return t<.25?a=[0,.55,.7]:t<.45?a=[.08,.65,.55]:t<.65?a=[.05,.35,.65]:t<.82?a=[.12,.5,.65]:a=[.1,.4,.55],{position:[o*Math.sin(r)*Math.cos(i),o*Math.sin(r)*Math.sin(i),o*Math.cos(r)],scale:1.5+Math.random()*2.5,color:a,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.5,phase:Math.random()*Math.PI*2}}),[]);return P((i,r)=>{u.current+=r,h.current&&(h.current.rotation.y=u.current*.008),y.current.forEach((o,t)=>{if(!o)return;const a=c[t],d=u.current;o.position.x=a.position[0]+Math.sin(d*a.rotSpeed+a.phase)*a.bobAmp,o.position.y=a.position[1]+Math.cos(d*a.bobSpeed+a.phase)*a.bobAmp*.6,o.position.z=a.position[2]+Math.sin(d*a.rotSpeed*.7+a.phase*1.3)*a.bobAmp*.4,o.rotation.y=d*a.rotSpeed*.5,o.rotation.x=Math.sin(d*.1)*.1})}),e.jsxs("group",{ref:h,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; void main(){vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(300.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,2.0); gl_FragColor=vec4(vColor,g*0.35);}",transparent:!0,depthWrite:!1,blending:w})]}),c.map((i,r)=>e.jsxs("mesh",{ref:o=>y.current[r]=o,position:i.position,children:[e.jsx("planeGeometry",{args:[i.scale,i.scale]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new U(i.color[0],i.color[1],i.color[2])}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                // Billboard: face camera
                vec4 mvPos = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                mvPos.xy += (uv - 0.5) * vec2(${i.scale.toFixed(1)});
                gl_Position = projectionMatrix * mvPos;
              }
            `,fragmentShader:`
              uniform vec3 color;
              varying vec2 vUv;
              void main() {
                vec2 center = vUv - 0.5;
                float dist = length(center);
                // Sutil radial nebula cloud
                float alpha = pow(max(0.0, 1.0 - dist * 2.0), 3.0) * 0.06;
                float turb = sin(vUv.x * 8.0) * sin(vUv.y * 6.0) * 0.3 + 0.7;
                alpha *= turb;
                if (alpha < 0.003) discard;
                gl_FragColor = vec4(color, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:Y})]},r))]})}function it({liveData:g,onImpact:x,flowRef:h}){const u=f.useRef(0),m=f.useRef(),c=2.2,i=c*c,r=s=>{var l;const p=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((l=h==null?void 0:h.current)==null?void 0:l.intensity)||1)),M=(1.6+Math.random()*1)*(.9+.3*b);s[0]=Math.sin(n)*Math.cos(p)*M,s[1]=Math.sin(n)*Math.sin(p)*M,s[2]=Math.cos(n)*M},o=(s,p,n)=>{if(Math.random()<.42)s[n*3]=.08,s[n*3+1]=.85,s[n*3+2]=.55,p[n]=.055+Math.random()*.045;else{const b=Math.random();s[n*3]=.15*(1-b)+.78*b,s[n*3+1]=.45*(1-b)+.35*b,s[n*3+2]=1*(1-b)+.97*b,p[n]=.04+Math.random()*.04}},t=f.useMemo(()=>{const s=new Float32Array(156),p=new Float32Array(156),n=new Float32Array(156),b=new Float32Array(52),M=new Float32Array(52),l=new Float32Array(52),S=new Uint8Array(52);for(let C=0;C<52;C++){const j=Math.random()*.08,F=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);s[C*3]=j*Math.sin(O)*Math.cos(F),s[C*3+1]=j*Math.sin(O)*Math.sin(F),s[C*3+2]=j*Math.cos(O);const _=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;p[C*3]=Math.sin(A)*Math.cos(_)*T,p[C*3+1]=Math.sin(A)*Math.sin(_)*T,p[C*3+2]=Math.cos(A)*T,o(n,b,C),M[C]=Math.random()*1.5,l[C]=1.8+Math.random()*.8}return{positions:s,velocities:p,colors:n,sizes:b,lifetimes:M,maxLifetimes:l,hit:S}},[]),a=f.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),d=f.useRef(0);return P((s,p)=>{var G,k;u.current+=p,a.time.value=u.current;const n=Math.max(.5,Math.min(1.8,((G=h==null?void 0:h.current)==null?void 0:G.intensity)||1));a.flow.value=n;const b=((k=h==null?void 0:h.current)==null?void 0:k.pulse)>.95&&u.current-d.current>1.2;b&&(d.current=u.current);const{positions:M,velocities:l,colors:S,sizes:C,lifetimes:j,maxLifetimes:F,hit:O}=t,_=[0,0,0];let A=!1,T=b?8:0;for(let v=0;v<52;v++){j[v]+=p;const V=T>0&&j[v]>.15;if(j[v]>=F[v]||V){V&&T--;const W=Math.random()*.08,N=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1);M[v*3]=W*Math.sin(E)*Math.cos(N),M[v*3+1]=W*Math.sin(E)*Math.sin(N),M[v*3+2]=W*Math.cos(E),r(_),l[v*3]=_[0],l[v*3+1]=_[1],l[v*3+2]=_[2],o(S,C,v),A=!0,j[v]=0,F[v]=1.8+Math.random()*.8,O[v]=0;continue}const D=Math.sqrt(M[v*3]*M[v*3]+M[v*3+1]*M[v*3+1]+M[v*3+2]*M[v*3+2]),I=D>1.6?(D-1.6)/.6:0;I>0&&(l[v*3]*=1-I*.08,l[v*3+1]*=1-I*.08,l[v*3+2]*=1-I*.08,C[v]=C[v]*(1+I*.8)),M[v*3]+=l[v*3]*p,M[v*3+1]+=l[v*3+1]*p,M[v*3+2]+=l[v*3+2]*p;const q=M[v*3]*M[v*3]+M[v*3+1]*M[v*3+1]+M[v*3+2]*M[v*3+2];if(q>=i)if(O[v])C[v]*=1.06;else{O[v]=1;const W=Math.sqrt(q),N=c/W;M[v*3]*=N,M[v*3+1]*=N,M[v*3+2]*=N,l[v*3]=0,l[v*3+1]=0,l[v*3+2]=0,x&&x({position:new z(M[v*3],M[v*3+1],M[v*3+2]),intensity:1}),j[v]=F[v]-.35}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,A&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:m,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:a,vertexShader:`
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
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            // Thin 4-pointed star
            float ax = abs(uv.x);
            float ay = abs(uv.y);
            float star = min(ax, ay);
            float arm = max(ax, ay);
            float d = star * 0.8 + arm * 0.15;
            if (d > 1.0) discard;
            float sharp = pow(1.0 - d, 2.0);
            float core = pow(1.0 - d, 8.0);
            vec3 hotCore = vec3(1.0, 1.0, 1.0);
            vec3 col = mix(vColor, hotCore, core * 0.6);
            float glow = exp(-d * 5.0) * 0.1;
            gl_FragColor = vec4(col, (sharp * 0.85 + glow) * vAlpha);
          }
        `,transparent:!0,depthWrite:!1,blending:w})]})}function nt(){const{positions:x,colors:h,sizes:y}=f.useMemo(()=>{const m=new Float32Array(180),c=new Float32Array(180),i=new Float32Array(60);for(let r=0;r<60;r++){const o=Math.acos(-1+2*r/60),t=Math.sqrt(60*Math.PI)*o,a=2.35;m[r*3]=a*Math.cos(t)*Math.sin(o),m[r*3+1]=a*Math.sin(t)*Math.sin(o),m[r*3+2]=a*Math.cos(o);const d=r>=36;if(d)c[r*3]=.133,c[r*3+1]=.827,c[r*3+2]=.933;else{const s=new U().setHSL(.75+Math.random()*.1,.7,.6);c[r*3]=s.r,c[r*3+1]=s.g,c[r*3+2]=s.b}i[r]=d?.09:.055}return{positions:m,colors:c,sizes:i}},[]),u=f.useMemo(()=>({time:{value:0}}),[]);return P((m,c)=>{u.time.value+=c*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function lt(){const g=f.useRef(),x=f.useMemo(()=>({time:{value:0}}),[]),h=f.useRef(0);P((c,i)=>{h.current+=i,x.time.value=h.current,g.current&&(g.current.rotation.y=h.current*.06)});const{positions:y,colors:u,sizes:m}=f.useMemo(()=>{const i=new Float32Array(150),r=new Float32Array(150),o=new Float32Array(50);for(let t=0;t<50;t++){const a=t/50*Math.PI*2,d=t%3,s=2.55+d*.22,p=.15*d;i[t*3]=s*Math.cos(a),i[t*3+1]=s*Math.sin(a)*Math.sin(p),i[t*3+2]=s*Math.sin(a)*Math.cos(p);const n=t/50;r[t*3]=.659*(1-n)+.133*n,r[t*3+1]=.333*(1-n)+.827*n,r[t*3+2]=.969*(1-n)+.933*n,o[t]=.015+Math.random()*.025}return{positions:i,colors:r,sizes:o}},[]);return e.jsx("group",{ref:g,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function ct({onImpactsReady:g}){const x=f.useRef([]),h=f.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return P((y,u)=>{for(;x.current.length>0&&h.current.some(c=>!c.active);){const c=x.current.shift(),i=h.current.find(r=>!r.active);i&&(i.position.copy(c.position),i.intensity=c.intensity,i.active=!0,i.age=0)}const m=1.5;h.current.forEach(c=>{c.active&&(c.age+=u,c.intensity=Math.max(0,1-c.age*m),c.intensity<=0&&(c.active=!1))}),g(h.current.filter(c=>c.active).map(c=>({position:c.position,intensity:c.intensity})))}),f.useEffect(()=>(window.__aetherius_addImpact=y=>{x.current.push(y)},()=>{delete window.__aetherius_addImpact}),[]),null}function dt(){const[g,x]=f.useState([]),h=f.useRef(""),y=f.useCallback(u=>{let m=u.length+":";for(let c=0;c<u.length;c++){const i=u[c];m+=i.position.x.toFixed(1)+","+i.position.y.toFixed(1)+","+i.position.z.toFixed(1)+","+i.intensity.toFixed(2)+";"}m!==h.current&&(h.current=m,x(u))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(et,{impactPoints:g}),e.jsx(ct,{onImpactsReady:y})]})}function pt(){const g=f.useRef(),x=f.useRef(0),{positions:h,colors:y,sizes:u}=f.useMemo(()=>{const i=new Float32Array(24),r=new Float32Array(24),o=new Float32Array(8);for(let t=0;t<8;t++){const a=t/8*Math.PI*2+Math.random()*.5,d=4+Math.random()*2;i[t*3]=d*Math.cos(a),i[t*3+1]=(Math.random()-.5)*3,i[t*3+2]=d*Math.sin(a);const s=Math.random();s<.4?(r[t*3]=.13,r[t*3+1]=.82,r[t*3+2]=.93):s<.7?(r[t*3]=.84,r[t*3+1]=.27,r[t*3+2]=.93):(r[t*3]=.83,r[t*3+1]=.66,r[t*3+2]=.32),o[t]=.08+Math.random()*.06}return{positions:i,colors:r,sizes:o}},[]),m=f.useMemo(()=>({time:{value:0}}),[]);return P((c,i)=>{var o,t,a;x.current+=i,m.time.value=x.current,g.current&&(g.current.rotation.y=x.current*.02);const r=(a=(t=(o=g.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.aSize;if(r){for(let d=0;d<8;d++)r.array[d]=.06+.05*Math.sin(x.current*2+d*1.5);r.needsUpdate=!0}}),e.jsxs("points",{ref:g,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[h,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),e.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function ht(){const h=f.useRef(),y=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const i=new Float32Array(2400),r=new Float32Array(800*3),o=new Float32Array(800);for(let t=0;t<800;t++){const a=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),s=Math.random();let p;s<.4?p=20+Math.random()*15:s<.8?p=35+Math.random()*20:p=55+Math.random()*15,i[t*3]=p*Math.sin(d)*Math.cos(a),i[t*3+1]=p*Math.sin(d)*Math.sin(a),i[t*3+2]=p*Math.cos(d);const n=Math.random();n<.6?(r[t*3]=.8,r[t*3+1]=.85,r[t*3+2]=1):n<.8?(r[t*3]=.5,r[t*3+1]=.9,r[t*3+2]=1):n<.92?(r[t*3]=.9,r[t*3+1]=.9,r[t*3+2]=.95):(r[t*3]=1,r[t*3+1]=.85,r[t*3+2]=.7);const b=(p-20)/50;o[t]=.015-b*.008+Math.random()*.01}return{positions:i,colors:r,sizes:o}},[]),c=f.useMemo(()=>Array.from({length:12},()=>{const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=Math.random()<.65?10+Math.random()*10:20+Math.random()*15,t=Math.random();let a;return t<.3?a=[0,.55,.7]:t<.5?a=[.08,.65,.55]:t<.7?a=[.05,.35,.65]:t<.85?a=[.12,.5,.65]:a=[.15,.3,.55],{position:[o*Math.sin(r)*Math.cos(i),o*Math.sin(r)*Math.sin(i),o*Math.cos(r)],scale:3+Math.random()*5,color:a,rotSpeed:(Math.random()-.5)*.015,bobSpeed:.05+Math.random()*.12,bobAmp:.3+Math.random()*.8,phase:Math.random()*Math.PI*2,noiseScale:3+Math.random()*4,noiseOffset:Math.random()*100}}),[]);return P((i,r)=>{u.current+=r;const o=u.current;h.current&&(h.current.rotation.y=o*.003,h.current.rotation.x=Math.sin(o*.002)*.02),y.current.forEach((t,a)=>{if(!t)return;const d=c[a];t.position.x=d.position[0]+Math.sin(o*d.rotSpeed+d.phase)*d.bobAmp,t.position.y=d.position[1]+Math.cos(o*d.bobSpeed+d.phase)*d.bobAmp*.6,t.position.z=d.position[2]+Math.sin(o*d.rotSpeed*.7+d.phase*1.3)*d.bobAmp*.4,t.rotation.y=o*d.rotSpeed*.3,t.rotation.x=Math.sin(o*.05)*.08})}),e.jsxs("group",{ref:h,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize; attribute vec3 aColor;
            varying vec3 vColor; varying float vAlpha;
            void main() {
              vColor = aColor;
              vAlpha = 0.5 + 0.3 * sin(position.x * 0.3 + position.z * 0.2);
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = aSize * (180.0 / -mv.z);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying vec3 vColor; varying float vAlpha;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float glow = pow(1.0 - d * 2.0, 2.5);
              gl_FragColor = vec4(vColor, glow * vAlpha * 0.7);
            }
          `,transparent:!0,depthWrite:!1,blending:w})]}),c.map((i,r)=>e.jsxs("mesh",{ref:o=>y.current[r]=o,position:i.position,scale:[i.scale,i.scale,1],children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new U(i.color[0],i.color[1],i.color[2])},noiseScale:{value:i.noiseScale},noiseOffset:{value:i.noiseOffset},time:{value:0}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPos;
              }
            `,fragmentShader:`
              uniform vec3 color;
              uniform float noiseScale;
              uniform float noiseOffset;
              uniform float time;
              varying vec2 vUv;

              // Simplex-like noise for organic FBM shape
              float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
              }
              float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
              }
              float fbm(vec2 p) {
                float v = 0.0;
                float a = 0.5;
                vec2 shift = vec2(100.0);
                for (int i = 0; i < 4; i++) {
                  v += a * noise(p);
                  p = p * 2.0 + shift;
                  a *= 0.5;
                }
                return v;
              }

              void main() {
                vec2 center = vUv - 0.5;
                float dist = length(center);

                // FBM noise for organic nebula shape — NOT a smooth sphere
                vec2 noiseCoord = center * noiseScale + noiseOffset;
                float n = fbm(noiseCoord + time * 0.03);

                // Asymmetric tendrils: warp the distance field with noise
                float angle = atan(center.y, center.x);
                float warpedDist = dist + n * 0.35 - 0.15;

                // Radial falloff — denser center, organic edges
                float radial = pow(max(0.0, 1.0 - warpedDist * 1.8), 2.5);

                // Extra turbulence for nebula filaments
                float tendrils = fbm(noiseCoord * 1.5 + vec2(cos(angle), sin(angle)) * 0.5);
                tendrils = smoothstep(0.3, 0.7, tendrils);

                float alpha = radial * tendrils * 0.12;
                if (alpha < 0.003) discard;

                // Color variation: shift hue slightly with noise
                vec3 col = color + vec3(tendrils * 0.1, n * 0.05, tendrils * 0.08);

                gl_FragColor = vec4(col, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:Y})]},r))]})}function mt({liveData:g,paused:x}){const h=f.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=f.useCallback(o=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(o)},[]),u=f.useRef({intensity:1,pulse:.4,block:null});f.useEffect(()=>{const o=()=>{const a=g||{},d=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,s=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(d/500,.5)+Math.min(s/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const n=u.current;n.intensity=p,a.block&&a.block!=="—"&&a.block!==n.block?(n.block=a.block,n.pulse=1):n.pulse=Math.max(.3,(n.pulse||.3)*.94)};o();const t=setInterval(o,400);return()=>clearInterval(t)},[g]);const m=f.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),c=f.useMemo(()=>({alpha:!0,antialias:!h,powerPreference:"high-performance"}),[h]),i=f.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=f.useMemo(()=>[1,1.5],[]);return e.jsxs(J,{camera:m,gl:c,onCreated:({gl:o})=>o.setClearColor(0,0),style:i,dpr:r,frameloop:x?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(at,{flowRef:u}),e.jsx(dt,{}),e.jsx(it,{liveData:g,onImpact:y,flowRef:u}),e.jsx(X,{}),e.jsx(tt,{}),e.jsx(nt,{}),e.jsx(Z,{liveData:g}),e.jsx(lt,{})]}),!h&&e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),e.jsx(B,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(B,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(B,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(st,{}),e.jsx(pt,{})]}),e.jsx(Q,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{mt as default};
