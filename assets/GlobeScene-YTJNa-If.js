import{r as f,j as a,C as K,S as L,O as Q,u as A}from"./r3f-BFDIpzVt.js";import{q as B,r as $,p as w,F,e as I,s as H,h as z,D as Y}from"./three-DAA57BSS.js";const X=({liveData:M})=>{const x=f.useRef(),h=f.useRef(0),b=f.useMemo(()=>{const t=M||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${t.endpoints||"100+"} ENDPOINTS   ${t.freeEndpoints||"40"} FREE   ${t.latency||"—"}   `}]},[M]),u=f.useMemo(()=>b.map(t=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const o=e.getContext("2d");o.clearRect(0,0,e.width,e.height);const r=`900 ${t.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=r,o.textAlign="center",o.textBaseline="middle";const s=t.text,p=o.measureText(s).width,l=Math.ceil((e.width+p)/p),y=(e.width-p*l)/2+p/2;o.shadowColor=t.color,o.shadowBlur=48,o.fillStyle=t.color;for(let n=0;n<l;n++)o.fillText(s,y+n*p,e.height/2);o.shadowBlur=22;for(let n=0;n<l;n++)o.fillText(s,y+n*p,e.height/2);o.shadowBlur=0,o.fillStyle=t.color==="#ffffff"?"#ffffff":t.color;for(let n=0;n<l;n++)o.fillText(s,y+n*p,e.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let n=0;n<l;n++)o.fillText(s,y+n*p,e.height/2);o.globalAlpha=1;const g=new B(e);return g.anisotropy=8,g.minFilter=H,g.magFilter=H,g}),[b]),m=f.useMemo(()=>b.map(t=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const o=e.getContext("2d");o.clearRect(0,0,e.width,e.height),o.font=`900 ${t.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const r=t.text,s=o.measureText(r).width,p=Math.ceil((e.width+s)/s),l=(e.width-s*p)/2+s/2;o.shadowColor=t.color,o.shadowBlur=28,o.fillStyle=t.color,o.globalAlpha=.35;for(let g=0;g<p;g++)o.fillText(r,l+g*s,e.height/2);o.globalAlpha=1;const y=new B(e);return y.anisotropy=4,y}),[b]),[c,d]=f.useState(null),i=f.useRef(0);return A((t,e)=>{h.current+=e,i.current+=e,x.current&&b.forEach((o,r)=>{const s=x.current.children[r];if(s){c===r||(s.rotation.y+=e*o.speed);const l=s.children[0];if(l!=null&&l.material){const y=.88+.12*Math.sin(i.current*.7+r*1.2);l.material.opacity=(c===r?1:o.opacity)*y}}})}),a.jsx("group",{ref:x,children:b.map((t,e)=>a.jsxs("group",{position:[0,t.yOffset,0],rotation:[t.tilt,0,0],children:[a.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),d(e),document.body.style.cursor="pointer"},onPointerOut:()=>{d(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(t.radius,t.yOffset,0),intensity:.8})},children:[a.jsx("cylinderGeometry",{args:[t.radius,t.radius,t.bandWidth,128,1,!0]}),a.jsx("meshBasicMaterial",{map:u[e],transparent:!0,opacity:t.opacity,side:F,depthWrite:!1,blending:w,toneMapped:!1})]}),a.jsxs("mesh",{children:[a.jsx("cylinderGeometry",{args:[t.radius,t.radius,t.bandWidth,128,1,!0]}),a.jsx("meshBasicMaterial",{map:m[e],transparent:!0,opacity:.22,side:$,depthWrite:!1,blending:w,toneMapped:!1})]}),a.jsxs("mesh",{children:[a.jsx("torusGeometry",{args:[t.radius,t.bandWidth*.06,6,128]}),a.jsx("meshBasicMaterial",{color:t.color,transparent:!0,opacity:t.opacity*.12,depthWrite:!1})]})]},e))})};function J(){const M=f.useMemo(()=>({time:{value:0},colorA:{value:new I(2282478)},colorB:{value:new I(11032055)},colorC:{value:new I(14239471)}}),[]);return A((x,h)=>{M.time.value+=h*.6}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[2.65,28,20]}),a.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:w})]})}function Z(){const M=f.useMemo(()=>({time:{value:0}}),[]);return A((x,h)=>{M.time.value+=h*.4}),a.jsxs("mesh",{scale:.85,children:[a.jsx("sphereGeometry",{args:[2.2,32,32]}),a.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:w})]})}function tt({impactPoints:M}){const x=f.useRef(),h=f.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return A((b,u)=>{if(h.time.value+=u*.5,M)for(let m=0;m<8&&m<M.length;m++){const c=M[m];h[`impact${m}`].value.copy(c.position),h[`i${m}t`].value=c.intensity}}),a.jsxs("mesh",{ref:x,children:[a.jsx("sphereGeometry",{args:[2.2,36,24]}),a.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function et({gasUniforms:M}){const h=f.useRef(),b=f.useRef(0),u=f.useMemo(()=>{const m=new Float32Array(120),c=new Float32Array(120),d=new Float32Array(120),i=new Float32Array(40);for(let t=0;t<40;t++){const e=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),r=.15+Math.random()*.5;m[t*3]=r*Math.sin(o)*Math.cos(e)*2,m[t*3+1]=r*Math.cos(o)*.7,m[t*3+2]=r*Math.sin(o)*Math.sin(e)*.9,c[t*3]=1.5+Math.random()*5,c[t*3+1]=1+Math.random()*4,c[t*3+2]=1.5+Math.random()*4.5;const s=Math.random();s<.4?(d[t*3]=.1+s*.2,d[t*3+1]=.7+s*.3,d[t*3+2]=.9+s*.1):s<.7?(d[t*3]=.8,d[t*3+1]=.9,d[t*3+2]=1):(d[t*3]=.05,d[t*3+1]=.5+s*.3,d[t*3+2]=.9+s*.1),i[t]=.025+Math.random()*.04}return{positions:m,seeds:c,colors:d,sizes:i}},[]);return A((m,c)=>{var t,e,o,r;b.current+=c;const d=b.current,i=(r=(o=(e=(t=h.current)==null?void 0:t.geometry)==null?void 0:e.attributes)==null?void 0:o.position)==null?void 0:r.array;if(i){for(let s=0;s<40;s++){const p=u.seeds[s*3],l=u.seeds[s*3+1],y=u.seeds[s*3+2];i[s*3]=u.positions[s*3]+Math.sin(d*p+s*.7)*.05,i[s*3+1]=u.positions[s*3+1]+Math.cos(d*l+s*1.1)*.035,i[s*3+2]=u.positions[s*3+2]+Math.sin(d*y+s*.9)*.04}h.current.geometry.attributes.position.needsUpdate=!0}}),a.jsxs("points",{ref:h,renderOrder:2,children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u.colors,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u.sizes,1]})]}),a.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function at({flowRef:M}){const x=f.useRef(),h=f.useRef(0),b=f.useMemo(()=>{const m=document.createElement("canvas");m.width=512,m.height=128;const c=m.getContext("2d");return c.clearRect(0,0,512,128),c.font="bold 72px monospace",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#0052FF",c.shadowColor="#0052FF",c.shadowBlur=30,c.fillText("BASE",256,64),c.shadowBlur=0,c.fillText("BASE",256,64),new B(m)},[]);A((m,c)=>{var i;h.current+=c;const d=(M==null?void 0:M.current)||{pulse:.3};if(d.pulse=Math.max(.25,(d.pulse||0)-c*1.6),x.current){x.current.rotation.y=h.current*.08,x.current.rotation.x=Math.sin(h.current*.12)*.08;const t=Math.sin(h.current*1.5),e=Math.sin(h.current*.9)*.03,o=d.pulse,r=1+.04*t+.18*o;x.current.scale.set(r,r,r),x.current.position.y=e;const s=(i=x.current.children[0])==null?void 0:i.material;s&&(s.opacity=.7+.18*t+.18*o)}});const u=f.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return A((m,c)=>{var d,i;u.time.value+=c*.5,u.flow.value=((d=M==null?void 0:M.current)==null?void 0:d.intensity)||1,u.pulse.value=((i=M==null?void 0:M.current)==null?void 0:i.pulse)||.3}),a.jsxs("group",{ref:x,scale:1.3,children:[a.jsxs("mesh",{renderOrder:0,children:[a.jsx("sphereGeometry",{args:[1.5,24,18]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.5 + 0.5 * swirl;
              float beat = 0.4 + 0.6 * pulse;
              // Bright cyan-green-blue Argua tones
              vec3 col = mix(vec3(0.0,0.35,0.8), vec3(0.1,0.7,1.0), dist*0.5);
              col += vec3(0.05,0.4,0.5) * (1.0-dist) * 0.5;
              float alpha = fog * turbulence * 0.18 * beat * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:$})]}),a.jsxs("mesh",{renderOrder:1,children:[a.jsx("sphereGeometry",{args:[1.2,20,14]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.4 + 0.6 * swirl;
              float noise = tendrils * 0.7 + 0.3;
              float beat = 0.3 + 0.7 * pulse;
              // Bright cyan-green tones
              vec3 col = mix(vec3(0.0,0.5,0.9), vec3(0.1,0.8,0.75), noise*0.5);
              col += vec3(0.08,0.35,0.5) * (1.0-dist) * 0.5;
              float alpha = radial * noise * 0.20 * beat * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:F})]}),a.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:a.jsx("spriteMaterial",{map:b,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),a.jsx(et,{gasUniforms:u}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[.38,32,24]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:w,side:F})]}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[.62,24,18]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:F})]}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[.88,16,12]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:F})]}),a.jsxs("mesh",{children:[a.jsx("sphereGeometry",{args:[1.45,20,16]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:F})]}),a.jsx(ot,{gasUniforms:u})]})}function ot({gasUniforms:M}){const m=4.840000000000001,c=f.useRef(),d=f.useRef([]),i=f.useMemo(()=>{const o=new Float32Array(216),r=new Float32Array(216),s=new Float32Array(360),p=new Float32Array(216);for(let l=0;l<72;l++){const y=l>=48;s[l*5]=1.5+Math.random()*2,s[l*5+1]=1+Math.random()*2.5,s[l*5+2]=Math.random()*3,s[l*5+3]=y?1:0,s[l*5+4]=1;const g=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),S=s[l*5];if(r[l*3]=Math.sin(n)*Math.cos(g)*S,r[l*3+1]=Math.sin(n)*Math.sin(g)*S,r[l*3+2]=Math.cos(n)*S,o[l*3]=(Math.random()-.5)*.04,o[l*3+1]=(Math.random()-.5)*.04,o[l*3+2]=(Math.random()-.5)*.04,y){const C=Math.random();p[l*3]=.6+C*.3,p[l*3+1]=.15+C*.2,p[l*3+2]=.85+C*.15}else{const C=Math.random();p[l*3]=.1+C*.9,p[l*3+1]=.6+C*.4,p[l*3+2]=.8+C*.2}}return{positions:o,velocities:r,seeds:s,colors:p}},[]);return A((o,r)=>{if(!c.current)return;const{positions:s,velocities:p,seeds:l,colors:y}=i;M.time.value,M.pulse.value;const g=[];for(let n=0;n<72;n++){const S=l[n*5+3]>.5;l[n*5+2]+=r;const C=l[n*5+2],j=l[n*5+1];if(C>=j){const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;p[n*3]=Math.sin(P)*Math.cos(_)*T,p[n*3+1]=Math.sin(P)*Math.sin(_)*T,p[n*3+2]=Math.cos(P)*T,s[n*3]=(Math.random()-.5)*.04,s[n*3+1]=(Math.random()-.5)*.04,s[n*3+2]=(Math.random()-.5)*.04,l[n*5]=T,l[n*5+2]=0,l[n*5+4]=1;continue}if(l[n*5+4]<.5)continue;s[n*3]+=p[n*3]*r,s[n*3+1]+=p[n*3+1]*r,s[n*3+2]+=p[n*3+2]*r;const O=S?.97:.992;p[n*3]*=O,p[n*3+1]*=O,p[n*3+2]*=O;const R=s[n*3]**2+s[n*3+1]**2+s[n*3+2]**2;if(R>=m&&l[n*5+4]>.5){const P=2.2/Math.sqrt(R);s[n*3]*=P,s[n*3+1]*=P,s[n*3+2]*=P,g.push({x:s[n*3],y:s[n*3+1],z:s[n*3+2],intensity:S?.6:1}),S?(p[n*3]*=-.3,p[n*3+1]*=-.3,p[n*3+2]*=-.3,l[n*5+2]=l[n*5+1]-.2):(l[n*5+4]=0,l[n*5+2]=l[n*5+1]-.1)}}d.current=g,c.current.geometry.attributes.position.needsUpdate=!0}),a.jsxs("points",{ref:c,renderOrder:10,children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[i.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-seeds",args:[i.seeds,5]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i.colors,3]})]}),a.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
  `,transparent:!0,depthWrite:!1,blending:w})]})}function st(){const h=f.useRef(),b=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const d=new Float32Array(1950),i=new Float32Array(650*3),t=new Float32Array(650);for(let e=0;e<650;e++){const o=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),s=2.5+Math.random()*14;d[e*3]=s*Math.sin(r)*Math.cos(o),d[e*3+1]=s*Math.sin(r)*Math.sin(o),d[e*3+2]=s*Math.cos(r);const p=Math.random();p<.4?(i[e*3]=0,i[e*3+1]=.85,i[e*3+2]=1):p<.7?(i[e*3]=.1,i[e*3+1]=.9,i[e*3+2]=.65):p<.88?(i[e*3]=.2,i[e*3+1]=.5,i[e*3+2]=1):(i[e*3]=.8,i[e*3+1]=.3,i[e*3+2]=.9),t[e]=.03+Math.random()*.055}return{positions:d,colors:i,sizes:t}},[]),c=f.useMemo(()=>Array.from({length:16},()=>{const d=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),t=4.5+Math.random()*9.5,e=Math.random();let o;return e<.3?o=[0,.8,1]:e<.5?o=[.1,.9,.65]:e<.7?o=[.05,.5,.95]:e<.85?o=[.15,.75,.85]:o=[.4,.15,.8],{position:[t*Math.sin(i)*Math.cos(d),t*Math.sin(i)*Math.sin(d),t*Math.cos(i)],scale:2.2+Math.random()*3.2,color:o,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.5,phase:Math.random()*Math.PI*2}}),[]);return A((d,i)=>{u.current+=i,h.current&&(h.current.rotation.y=u.current*.008),b.current.forEach((t,e)=>{if(!t)return;const o=c[e],r=u.current;t.position.x=o.position[0]+Math.sin(r*o.rotSpeed+o.phase)*o.bobAmp,t.position.y=o.position[1]+Math.cos(r*o.bobSpeed+o.phase)*o.bobAmp*.6,t.position.z=o.position[2]+Math.sin(r*o.rotSpeed*.7+o.phase*1.3)*o.bobAmp*.4})}),a.jsxs("group",{ref:h,children:[a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),a.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]}),c.map((d,i)=>a.jsxs("mesh",{ref:t=>b.current[i]=t,position:d.position,children:[a.jsx("planeGeometry",{args:[1,1]}),a.jsx("shaderMaterial",{uniforms:{color:{value:new I(d.color[0],d.color[1],d.color[2])},scaleVal:{value:d.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:w,side:Y})]},i))]})}function it({liveData:M,onImpact:x,flowRef:h}){const u=f.useRef(0),m=f.useRef(),c=2.2,d=c*c,i=s=>{var n;const p=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((n=h==null?void 0:h.current)==null?void 0:n.intensity)||1)),g=(1.6+Math.random()*1)*(.9+.3*y);s[0]=Math.sin(l)*Math.cos(p)*g,s[1]=Math.sin(l)*Math.sin(p)*g,s[2]=Math.cos(l)*g},t=(s,p,l)=>{if(Math.random()<.42)s[l*3]=.08,s[l*3+1]=.85,s[l*3+2]=.55,p[l]=.055+Math.random()*.045;else{const y=Math.random();s[l*3]=.15*(1-y)+.78*y,s[l*3+1]=.45*(1-y)+.35*y,s[l*3+2]=1*(1-y)+.97*y,p[l]=.04+Math.random()*.04}},e=f.useMemo(()=>{const s=new Float32Array(156),p=new Float32Array(156),l=new Float32Array(156),y=new Float32Array(52),g=new Float32Array(52),n=new Float32Array(52),S=new Uint8Array(52);for(let C=0;C<52;C++){const j=Math.random()*.08,O=Math.random()*Math.PI*2,R=Math.acos(2*Math.random()-1);s[C*3]=j*Math.sin(R)*Math.cos(O),s[C*3+1]=j*Math.sin(R)*Math.sin(O),s[C*3+2]=j*Math.cos(R);const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;p[C*3]=Math.sin(P)*Math.cos(_)*T,p[C*3+1]=Math.sin(P)*Math.sin(_)*T,p[C*3+2]=Math.cos(P)*T,t(l,y,C),g[C]=Math.random()*1.5,n[C]=1.8+Math.random()*.8}return{positions:s,velocities:p,colors:l,sizes:y,lifetimes:g,maxLifetimes:n,hit:S}},[]),o=f.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),r=f.useRef(0);return A((s,p)=>{var k,G;u.current+=p,o.time.value=u.current;const l=Math.max(.5,Math.min(1.8,((k=h==null?void 0:h.current)==null?void 0:k.intensity)||1));o.flow.value=l;const y=((G=h==null?void 0:h.current)==null?void 0:G.pulse)>.95&&u.current-r.current>1.2;y&&(r.current=u.current);const{positions:g,velocities:n,colors:S,sizes:C,lifetimes:j,maxLifetimes:O,hit:R}=e,_=[0,0,0];let P=!1,T=y?8:0;for(let v=0;v<52;v++){j[v]+=p;const D=T>0&&j[v]>.15;if(j[v]>=O[v]||D){D&&T--;const E=Math.random()*.08,U=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);g[v*3]=E*Math.sin(W)*Math.cos(U),g[v*3+1]=E*Math.sin(W)*Math.sin(U),g[v*3+2]=E*Math.cos(W),i(_),n[v*3]=_[0],n[v*3+1]=_[1],n[v*3+2]=_[2],t(S,C,v),P=!0,j[v]=0,O[v]=1.8+Math.random()*.8,R[v]=0;continue}const V=Math.sqrt(g[v*3]*g[v*3]+g[v*3+1]*g[v*3+1]+g[v*3+2]*g[v*3+2]),N=V>1.6?(V-1.6)/.6:0;N>0&&(n[v*3]*=1-N*.08,n[v*3+1]*=1-N*.08,n[v*3+2]*=1-N*.08,C[v]=C[v]*(1+N*.8)),g[v*3]+=n[v*3]*p,g[v*3+1]+=n[v*3+1]*p,g[v*3+2]+=n[v*3+2]*p;const q=g[v*3]*g[v*3]+g[v*3+1]*g[v*3+1]+g[v*3+2]*g[v*3+2];if(q>=d)if(R[v])C[v]*=1.06;else{R[v]=1;const E=Math.sqrt(q),U=c/E;g[v*3]*=U,g[v*3+1]*=U,g[v*3+2]*=U,n[v*3]=0,n[v*3+1]=0,n[v*3+2]=0,x&&x({position:new z(g[v*3],g[v*3+1],g[v*3+2]),intensity:1}),j[v]=O[v]-.8}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,P&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),a.jsxs("points",{ref:m,children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),a.jsx("shaderMaterial",{uniforms:o,vertexShader:`
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
            gl_PointSize = sz * (1.0 + 0.6 * flow) * (480.0 / -mv.z);
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function rt(){const{positions:x,colors:h,sizes:b}=f.useMemo(()=>{const m=new Float32Array(180),c=new Float32Array(180),d=new Float32Array(60);for(let i=0;i<60;i++){const t=Math.acos(-1+2*i/60),e=Math.sqrt(60*Math.PI)*t,o=2.35;m[i*3]=o*Math.cos(e)*Math.sin(t),m[i*3+1]=o*Math.sin(e)*Math.sin(t),m[i*3+2]=o*Math.cos(t);const r=i>=36;if(r)c[i*3]=.133,c[i*3+1]=.827,c[i*3+2]=.933;else{const s=new I().setHSL(.75+Math.random()*.1,.7,.6);c[i*3]=s.r,c[i*3+1]=s.g,c[i*3+2]=s.b}d[i]=r?.09:.055}return{positions:m,colors:c,sizes:d}},[]),u=f.useMemo(()=>({time:{value:0}}),[]);return A((m,c)=>{u.time.value+=c*1.5}),a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),a.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function nt(){const M=f.useRef(),x=f.useMemo(()=>({time:{value:0}}),[]),h=f.useRef(0);A((c,d)=>{h.current+=d,x.time.value=h.current,M.current&&(M.current.rotation.y=h.current*.06)});const{positions:b,colors:u,sizes:m}=f.useMemo(()=>{const d=new Float32Array(150),i=new Float32Array(150),t=new Float32Array(50);for(let e=0;e<50;e++){const o=e/50*Math.PI*2,r=e%3,s=2.55+r*.22,p=.15*r;d[e*3]=s*Math.cos(o),d[e*3+1]=s*Math.sin(o)*Math.sin(p),d[e*3+2]=s*Math.sin(o)*Math.cos(p);const l=e/50;i[e*3]=.659*(1-l)+.133*l,i[e*3+1]=.333*(1-l)+.827*l,i[e*3+2]=.969*(1-l)+.933*l,t[e]=.015+Math.random()*.025}return{positions:d,colors:i,sizes:t}},[]);return a.jsx("group",{ref:M,children:a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),a.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function lt({onImpactsReady:M}){const x=f.useRef([]),h=f.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return A((b,u)=>{for(;x.current.length>0&&h.current.some(c=>!c.active);){const c=x.current.shift(),d=h.current.find(i=>!i.active);d&&(d.position.copy(c.position),d.intensity=c.intensity,d.active=!0,d.age=0)}const m=.8;h.current.forEach(c=>{c.active&&(c.age+=u,c.intensity=Math.max(0,1-c.age*m),c.intensity<=0&&(c.active=!1))}),M(h.current.filter(c=>c.active).map(c=>({position:c.position,intensity:c.intensity})))}),f.useEffect(()=>(window.__aetherius_addImpact=b=>{x.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function ct(){const[M,x]=f.useState([]),h=f.useRef(""),b=f.useCallback(u=>{let m=u.length+":";for(let c=0;c<u.length;c++){const d=u[c];m+=d.position.x.toFixed(1)+","+d.position.y.toFixed(1)+","+d.position.z.toFixed(1)+","+d.intensity.toFixed(2)+";"}m!==h.current&&(h.current=m,x(u))},[]);return a.jsxs(a.Fragment,{children:[a.jsx(tt,{impactPoints:M}),a.jsx(lt,{onImpactsReady:b})]})}function dt(){const M=f.useRef(),x=f.useRef(0),{positions:h,colors:b,sizes:u}=f.useMemo(()=>{const d=new Float32Array(24),i=new Float32Array(24),t=new Float32Array(8);for(let e=0;e<8;e++){const o=e/8*Math.PI*2+Math.random()*.5,r=4+Math.random()*2;d[e*3]=r*Math.cos(o),d[e*3+1]=(Math.random()-.5)*3,d[e*3+2]=r*Math.sin(o);const s=Math.random();s<.4?(i[e*3]=.13,i[e*3+1]=.82,i[e*3+2]=.93):s<.7?(i[e*3]=.84,i[e*3+1]=.27,i[e*3+2]=.93):(i[e*3]=.83,i[e*3+1]=.66,i[e*3+2]=.32),t[e]=.08+Math.random()*.06}return{positions:d,colors:i,sizes:t}},[]),m=f.useMemo(()=>({time:{value:0}}),[]);return A((c,d)=>{var t,e,o;x.current+=d,m.time.value=x.current,M.current&&(M.current.rotation.y=x.current*.02);const i=(o=(e=(t=M.current)==null?void 0:t.geometry)==null?void 0:e.attributes)==null?void 0:o.aSize;if(i){for(let r=0;r<8;r++)i.array[r]=.06+.05*Math.sin(x.current*2+r*1.5);i.needsUpdate=!0}}),a.jsxs("points",{ref:M,children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[h,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),a.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function pt(){const h=f.useRef(),b=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const i=new Float32Array(3600),t=new Float32Array(1200*3),e=new Float32Array(1200),o=()=>Math.random();for(let r=0;r<1200;r++){const s=o()*Math.PI*2,p=Math.acos(2*o()-1),l=o();let y,g;l<.45?(y=6+o()*6,g=.07):l<.8?(y=12+o()*8,g=.05):(y=20+o()*8,g=.035),i[r*3]=y*Math.sin(p)*Math.cos(s),i[r*3+1]=y*Math.sin(p)*Math.sin(s),i[r*3+2]=y*Math.cos(p);const n=o();n<.4?(t[r*3]=.95,t[r*3+1]=.97,t[r*3+2]=1):n<.55?(t[r*3]=.3,t[r*3+1]=.95,t[r*3+2]=1):n<.68?(t[r*3]=1,t[r*3+1]=1,t[r*3+2]=1):n<.78?(t[r*3]=.6,t[r*3+1]=.8,t[r*3+2]=1):n<.88?(t[r*3]=.95,t[r*3+1]=.35,t[r*3+2]=.9):(t[r*3]=1,t[r*3+1]=.82,t[r*3+2]=.55),e[r]=g+o()*.035}return{positions:i,colors:t,sizes:e}},[]),c=f.useMemo(()=>Array.from({length:24},()=>{const i=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),e=Math.random()<.6?7+Math.random()*8:15+Math.random()*7,o=Math.random();let r;return o<.25?r=[0,.8,1]:o<.45?r=[.1,.9,.7]:o<.6?r=[.05,.55,.95]:o<.78?r=[.15,.75,.88]:o<.9?r=[.3,.15,.75]:r=[0,.6,.8],{position:[e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t)],billboardSize:3.5+Math.random()*4.5,color:r,bobSpeed:.04+Math.random()*.1,bobAmp:.2+Math.random()*.6,phase:Math.random()*Math.PI*2,noiseScale:2.5+Math.random()*3.5,noiseOffset:Math.random()*100}}),[]);A((i,t)=>{u.current+=t;const e=u.current;h.current&&(h.current.rotation.y=e*.002,h.current.rotation.x=Math.sin(e*.0015)*.015),b.current.forEach((o,r)=>{if(!o)return;const s=c[r];o.position.x=s.position[0]+Math.sin(e*.03+s.phase)*s.bobAmp,o.position.y=s.position[1]+Math.cos(e*s.bobSpeed+s.phase)*s.bobAmp*.5,o.position.z=s.position[2]+Math.sin(e*.02+s.phase*1.3)*s.bobAmp*.3})});const d=`
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
      for (int i = 0; i < 5; i++) {
        v += a * vnoise(p);
        p = p * 2.05 + vec2(37.0, 17.0);
        a *= 0.48;
      }
      return v;
    }
  `;return a.jsxs("group",{ref:h,children:[a.jsxs("points",{children:[a.jsxs("bufferGeometry",{children:[a.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),a.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),a.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),a.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize;
            attribute vec3 aColor;
            varying vec3 vColor;
            varying float vDist;
            void main() {
              vColor = aColor;
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vDist = -mv.z;
              // 380.0 divisor: makes r=6-28 stars clearly visible
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
              // Slight distance dimming for depth
              float distFade = clamp(1.0 - (vDist - 6.0) / 30.0, 0.35, 1.0);
              gl_FragColor = vec4(col, glow * distFade);
            }
          `,transparent:!0,depthWrite:!1,blending:w})]}),c.map((i,t)=>a.jsxs("mesh",{ref:e=>b.current[t]=e,position:i.position,children:[a.jsx("planeGeometry",{args:[1,1]}),a.jsx("shaderMaterial",{uniforms:{color:{value:new I(i.color[0],i.color[1],i.color[2])},billboardSize:{value:i.billboardSize},noiseScale:{value:i.noiseScale},noiseOffset:{value:i.noiseOffset},time:{value:0}},vertexShader:`
              uniform float billboardSize;
              varying vec2 vUv;
              varying float vDist;
              void main() {
                vUv = uv;
                // TRUE BILLBOARD: compute center in view space, offset by UV
                // Ignores mesh rotation — always faces camera
                vec4 center = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                vDist = -center.z;
                center.xy += (uv - 0.5) * billboardSize;
                gl_Position = projectionMatrix * center;
              }
            `,fragmentShader:`
              uniform vec3 color;
              uniform float noiseScale;
              uniform float noiseOffset;
              uniform float time;
              varying vec2 vUv;
              varying float vDist;

              ${d}

              void main() {
                vec2 uv = vUv - 0.5;
                float dist = length(uv);
                float angle = atan(uv.y, uv.x);

                // Organic FBM noise — warp the distance field aggressively
                vec2 noiseCoord = uv * noiseScale + noiseOffset;
                float n = fbm(noiseCoord + time * 0.02);

                // Warp: noise displaces distance field strongly → organic tendrils
                float warpedDist = dist + n * 0.55 - 0.2;

                // Soft radial falloff
                float radial = pow(max(0.0, 1.0 - warpedDist * 2.2), 2.0);

                // Filament detail — secondary FBM at higher frequency
                float filaments = fbm(noiseCoord * 2.0 + vec2(cos(angle), sin(angle)) * 0.8);
                filaments = smoothstep(0.25, 0.75, filaments);

                // MÁSCARA CIRCULAR ESTRICTA — fuerza alpha a 0.0 antes de dist = 0.45 para eliminar bordes rectangulares
                float edgeMask = smoothstep(0.45, 0.12, dist);

                // Combine: radial base × filament detail × edgeMask
                float alpha = radial * (0.4 + filaments * 0.6) * 0.35 * edgeMask;
                if (alpha < 0.002) discard;

                // Distance dimming for depth
                float distFade = clamp(1.0 - (vDist - 7.0) / 25.0, 0.3, 1.0);
                alpha *= distFade;

                // Color variation with noise
                vec3 col = color + vec3(filaments * 0.12, n * 0.06, filaments * 0.10);
                // Brighten center slightly
                col += vec3(0.08) * radial;

                gl_FragColor = vec4(col, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:Y})]},t))]})}function ut({liveData:M,paused:x}){const h=f.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=f.useCallback(t=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(t)},[]),u=f.useRef({intensity:1,pulse:.4,block:null});f.useEffect(()=>{const t=()=>{const o=M||{},r=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,s=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let p=.9+Math.min(r/500,.5)+Math.min(s/50,.25)+Math.random()*.15;p=Math.max(.6,Math.min(1.8,p));const l=u.current;l.intensity=p,o.block&&o.block!=="—"&&o.block!==l.block?(l.block=o.block,l.pulse=1):l.pulse=Math.max(.3,(l.pulse||.3)*.94)};t();const e=setInterval(t,400);return()=>clearInterval(e)},[M]);const m=f.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),c=f.useMemo(()=>({alpha:!0,antialias:!h,powerPreference:"high-performance"}),[h]),d=f.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),i=f.useMemo(()=>[1,1.5],[]);return a.jsxs(K,{camera:m,gl:c,onCreated:({gl:t})=>t.setClearColor(0,0),style:d,dpr:i,frameloop:x?"demand":"always",children:[a.jsx("ambientLight",{intensity:.05}),a.jsxs("group",{scale:1.3,children:[a.jsx(at,{flowRef:u}),a.jsx(ct,{}),a.jsx(it,{liveData:M,onImpact:b,flowRef:u}),a.jsx(J,{}),a.jsx(Z,{}),a.jsx(rt,{}),a.jsx(X,{liveData:M}),a.jsx(nt,{})]}),!h&&a.jsxs(a.Fragment,{children:[a.jsx(pt,{}),a.jsx(L,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),a.jsx(L,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),a.jsx(L,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),a.jsx(st,{}),a.jsx(dt,{})]}),a.jsx(Q,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ut as default};
