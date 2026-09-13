import{r as f,j as e,C as Y,S as B,O as J,u as P}from"./r3f-BFDIpzVt.js";import{q as L,r as H,p as w,F as R,e as N,s as q,h as z,D as K}from"./three-DAA57BSS.js";const Q=({liveData:M})=>{const x=f.useRef(),p=f.useRef(0),b=f.useMemo(()=>{const t=M||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${t.endpoints||"100+"} ENDPOINTS   ${t.freeEndpoints||"40"} FREE   ${t.latency||"—"}   `}]},[M]),u=f.useMemo(()=>b.map(t=>{const a=document.createElement("canvas");a.width=4096,a.height=160;const o=a.getContext("2d");o.clearRect(0,0,a.width,a.height);const r=`900 ${t.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=r,o.textAlign="center",o.textBaseline="middle";const i=t.text,h=o.measureText(i).width,l=Math.ceil((a.width+h)/h),y=(a.width-h*l)/2+h/2;o.shadowColor=t.color,o.shadowBlur=48,o.fillStyle=t.color;for(let n=0;n<l;n++)o.fillText(i,y+n*h,a.height/2);o.shadowBlur=22;for(let n=0;n<l;n++)o.fillText(i,y+n*h,a.height/2);o.shadowBlur=0,o.fillStyle=t.color==="#ffffff"?"#ffffff":t.color;for(let n=0;n<l;n++)o.fillText(i,y+n*h,a.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let n=0;n<l;n++)o.fillText(i,y+n*h,a.height/2);o.globalAlpha=1;const g=new L(a);return g.anisotropy=8,g.minFilter=q,g.magFilter=q,g}),[b]),m=f.useMemo(()=>b.map(t=>{const a=document.createElement("canvas");a.width=4096,a.height=160;const o=a.getContext("2d");o.clearRect(0,0,a.width,a.height),o.font=`900 ${t.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const r=t.text,i=o.measureText(r).width,h=Math.ceil((a.width+i)/i),l=(a.width-i*h)/2+i/2;o.shadowColor=t.color,o.shadowBlur=28,o.fillStyle=t.color,o.globalAlpha=.35;for(let g=0;g<h;g++)o.fillText(r,l+g*i,a.height/2);o.globalAlpha=1;const y=new L(a);return y.anisotropy=4,y}),[b]),[c,d]=f.useState(null),s=f.useRef(0);return P((t,a)=>{p.current+=a,s.current+=a,x.current&&b.forEach((o,r)=>{const i=x.current.children[r];if(i){c===r||(i.rotation.y+=a*o.speed);const l=i.children[0];if(l!=null&&l.material){const y=.88+.12*Math.sin(s.current*.7+r*1.2);l.material.opacity=(c===r?1:o.opacity)*y}}})}),e.jsx("group",{ref:x,children:b.map((t,a)=>e.jsxs("group",{position:[0,t.yOffset,0],rotation:[t.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),d(a),document.body.style.cursor="pointer"},onPointerOut:()=>{d(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(t.radius,t.yOffset,0),intensity:.8})},children:[e.jsx("cylinderGeometry",{args:[t.radius,t.radius,t.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:u[a],transparent:!0,opacity:t.opacity,side:R,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[t.radius,t.radius,t.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:m[a],transparent:!0,opacity:.22,side:H,depthWrite:!1,blending:w,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[t.radius,t.bandWidth*.06,6,128]}),e.jsx("meshBasicMaterial",{color:t.color,transparent:!0,opacity:t.opacity*.12,depthWrite:!1})]})]},a))})};function Z(){const M=f.useMemo(()=>({time:{value:0},colorA:{value:new N(2282478)},colorB:{value:new N(11032055)},colorC:{value:new N(14239471)}}),[]);return P((x,p)=>{M.time.value+=p*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function X(){const M=f.useMemo(()=>({time:{value:0}}),[]);return P((x,p)=>{M.time.value+=p*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function tt({impactPoints:M}){const x=f.useRef(),p=f.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return P((b,u)=>{if(p.time.value+=u*.5,M)for(let m=0;m<8&&m<M.length;m++){const c=M[m];p[`impact${m}`].value.copy(c.position),p[`i${m}t`].value=c.intensity}}),e.jsxs("mesh",{ref:x,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function et({gasUniforms:M}){const p=f.useRef(),b=f.useRef(0),u=f.useMemo(()=>{const m=new Float32Array(120),c=new Float32Array(120),d=new Float32Array(120),s=new Float32Array(40);for(let t=0;t<40;t++){const a=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),r=.15+Math.random()*.5;m[t*3]=r*Math.sin(o)*Math.cos(a)*2,m[t*3+1]=r*Math.cos(o)*.7,m[t*3+2]=r*Math.sin(o)*Math.sin(a)*.9,c[t*3]=1.5+Math.random()*5,c[t*3+1]=1+Math.random()*4,c[t*3+2]=1.5+Math.random()*4.5;const i=Math.random();i<.4?(d[t*3]=.1+i*.2,d[t*3+1]=.7+i*.3,d[t*3+2]=.9+i*.1):i<.7?(d[t*3]=.8,d[t*3+1]=.9,d[t*3+2]=1):(d[t*3]=.05,d[t*3+1]=.5+i*.3,d[t*3+2]=.9+i*.1),s[t]=.025+Math.random()*.04}return{positions:m,seeds:c,colors:d,sizes:s}},[]);return P((m,c)=>{var t,a,o,r;b.current+=c;const d=b.current,s=(r=(o=(a=(t=p.current)==null?void 0:t.geometry)==null?void 0:a.attributes)==null?void 0:o.position)==null?void 0:r.array;if(s){for(let i=0;i<40;i++){const h=u.seeds[i*3],l=u.seeds[i*3+1],y=u.seeds[i*3+2];s[i*3]=u.positions[i*3]+Math.sin(d*h+i*.7)*.05,s[i*3+1]=u.positions[i*3+1]+Math.cos(d*l+i*1.1)*.035,s[i*3+2]=u.positions[i*3+2]+Math.sin(d*y+i*.9)*.04}p.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:p,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function at({flowRef:M}){const x=f.useRef(),p=f.useRef(0),b=f.useMemo(()=>{const m=document.createElement("canvas");m.width=512,m.height=128;const c=m.getContext("2d");return c.clearRect(0,0,512,128),c.font="bold 72px monospace",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#0052FF",c.shadowColor="#0052FF",c.shadowBlur=30,c.fillText("BASE",256,64),c.shadowBlur=0,c.fillText("BASE",256,64),new L(m)},[]);P((m,c)=>{var s;p.current+=c;const d=(M==null?void 0:M.current)||{pulse:.3};if(d.pulse=Math.max(.25,(d.pulse||0)-c*1.6),x.current){x.current.rotation.y=p.current*.08,x.current.rotation.x=Math.sin(p.current*.12)*.08;const t=Math.sin(p.current*1.5),a=Math.sin(p.current*.9)*.03,o=d.pulse,r=1+.04*t+.18*o;x.current.scale.set(r,r,r),x.current.position.y=a;const i=(s=x.current.children[0])==null?void 0:s.material;i&&(i.opacity=.7+.18*t+.18*o)}});const u=f.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((m,c)=>{var d,s;u.time.value+=c*.5,u.flow.value=((d=M==null?void 0:M.current)==null?void 0:d.intensity)||1,u.pulse.value=((s=M==null?void 0:M.current)==null?void 0:s.pulse)||.3}),e.jsxs("group",{ref:x,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:w,side:H})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:e.jsx("spriteMaterial",{map:b,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),e.jsx(et,{gasUniforms:u}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),e.jsx(ot,{gasUniforms:u})]})}function ot({gasUniforms:M}){const m=4.840000000000001,c=f.useRef(),d=f.useRef([]),s=f.useMemo(()=>{const o=new Float32Array(216),r=new Float32Array(216),i=new Float32Array(360),h=new Float32Array(216);for(let l=0;l<72;l++){const y=l>=48;i[l*5]=1.5+Math.random()*2,i[l*5+1]=1+Math.random()*2.5,i[l*5+2]=Math.random()*3,i[l*5+3]=y?1:0,i[l*5+4]=1;const g=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),S=i[l*5];if(r[l*3]=Math.sin(n)*Math.cos(g)*S,r[l*3+1]=Math.sin(n)*Math.sin(g)*S,r[l*3+2]=Math.cos(n)*S,o[l*3]=(Math.random()-.5)*.04,o[l*3+1]=(Math.random()-.5)*.04,o[l*3+2]=(Math.random()-.5)*.04,y){const C=Math.random();h[l*3]=.6+C*.3,h[l*3+1]=.15+C*.2,h[l*3+2]=.85+C*.15}else{const C=Math.random();h[l*3]=.1+C*.9,h[l*3+1]=.6+C*.4,h[l*3+2]=.8+C*.2}}return{positions:o,velocities:r,seeds:i,colors:h}},[]);return P((o,r)=>{if(!c.current)return;const{positions:i,velocities:h,seeds:l,colors:y}=s;M.time.value,M.pulse.value;const g=[];for(let n=0;n<72;n++){const S=l[n*5+3]>.5;l[n*5+2]+=r;const C=l[n*5+2],j=l[n*5+1];if(C>=j){const _=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;h[n*3]=Math.sin(A)*Math.cos(_)*T,h[n*3+1]=Math.sin(A)*Math.sin(_)*T,h[n*3+2]=Math.cos(A)*T,i[n*3]=(Math.random()-.5)*.04,i[n*3+1]=(Math.random()-.5)*.04,i[n*3+2]=(Math.random()-.5)*.04,l[n*5]=T,l[n*5+2]=0,l[n*5+4]=1;continue}if(l[n*5+4]<.5)continue;i[n*3]+=h[n*3]*r,i[n*3+1]+=h[n*3+1]*r,i[n*3+2]+=h[n*3+2]*r;const F=S?.97:.992;h[n*3]*=F,h[n*3+1]*=F,h[n*3+2]*=F;const O=i[n*3]**2+i[n*3+1]**2+i[n*3+2]**2;if(O>=m&&l[n*5+4]>.5){const A=2.2/Math.sqrt(O);i[n*3]*=A,i[n*3+1]*=A,i[n*3+2]*=A,g.push({x:i[n*3],y:i[n*3+1],z:i[n*3+2],intensity:S?.6:1}),S?(h[n*3]*=-.3,h[n*3+1]*=-.3,h[n*3+2]*=-.3,l[n*5+2]=l[n*5+1]-.2):(l[n*5+4]=0,l[n*5+2]=l[n*5+1]-.1)}}d.current=g,c.current.geometry.attributes.position.needsUpdate=!0}),e.jsxs("points",{ref:c,renderOrder:10,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[s.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-seeds",args:[s.seeds,5]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s.colors,3]})]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
  `,transparent:!0,depthWrite:!1,blending:w})]})}function it(){const p=f.useRef(),b=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const d=new Float32Array(600),s=new Float32Array(600),t=new Float32Array(200);for(let a=0;a<200;a++){const o=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),i=3+Math.random()*12;d[a*3]=i*Math.sin(r)*Math.cos(o),d[a*3+1]=i*Math.sin(r)*Math.sin(o),d[a*3+2]=i*Math.cos(r);const h=Math.random();h<.5?(s[a*3]=.3,s[a*3+1]=.15,s[a*3+2]=.5):h<.8?(s[a*3]=.1,s[a*3+1]=.4,s[a*3+2]=.5):(s[a*3]=.5,s[a*3+1]=.5,s[a*3+2]=.55),t[a]=.02+Math.random()*.03}return{positions:d,colors:s,sizes:t}},[]),c=f.useMemo(()=>Array.from({length:8},()=>{const d=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),t=5+Math.random()*8,a=Math.random();let o;return a<.25?o=[0,.75,1]:a<.45?o=[.1,.85,.7]:a<.65?o=[.05,.5,.9]:a<.82?o=[.15,.7,.85]:o=[.3,.15,.7],{position:[t*Math.sin(s)*Math.cos(d),t*Math.sin(s)*Math.sin(d),t*Math.cos(s)],scale:1.5+Math.random()*2.5,color:o,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.5,phase:Math.random()*Math.PI*2}}),[]);return P((d,s)=>{u.current+=s,p.current&&(p.current.rotation.y=u.current*.008),b.current.forEach((t,a)=>{if(!t)return;const o=c[a],r=u.current;t.position.x=o.position[0]+Math.sin(r*o.rotSpeed+o.phase)*o.bobAmp,t.position.y=o.position[1]+Math.cos(r*o.bobSpeed+o.phase)*o.bobAmp*.6,t.position.z=o.position[2]+Math.sin(r*o.rotSpeed*.7+o.phase*1.3)*o.bobAmp*.4,t.rotation.y=r*o.rotSpeed*.5,t.rotation.x=Math.sin(r*.1)*.1})}),e.jsxs("group",{ref:p,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; void main(){vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(300.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,2.0); gl_FragColor=vec4(vColor,g*0.35);}",transparent:!0,depthWrite:!1,blending:w})]}),c.map((d,s)=>e.jsxs("mesh",{ref:t=>b.current[s]=t,position:d.position,children:[e.jsx("planeGeometry",{args:[d.scale,d.scale]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new N(d.color[0],d.color[1],d.color[2])}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                // Billboard: face camera
                vec4 mvPos = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                mvPos.xy += (uv - 0.5) * vec2(${d.scale.toFixed(1)});
                gl_Position = projectionMatrix * mvPos;
              }
            `,fragmentShader:`
              uniform vec3 color;
              varying vec2 vUv;
              void main() {
                vec2 center = vUv - 0.5;
                float dist = length(center);
              // Brighter nebula cloud
              float alpha = pow(max(0.0, 1.0 - dist * 2.0), 3.0) * 0.15;
                float turb = sin(vUv.x * 8.0) * sin(vUv.y * 6.0) * 0.3 + 0.7;
                alpha *= turb;
                if (alpha < 0.003) discard;
                gl_FragColor = vec4(color, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:K})]},s))]})}function st({liveData:M,onImpact:x,flowRef:p}){const u=f.useRef(0),m=f.useRef(),c=2.2,d=c*c,s=i=>{var n;const h=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((n=p==null?void 0:p.current)==null?void 0:n.intensity)||1)),g=(1.6+Math.random()*1)*(.9+.3*y);i[0]=Math.sin(l)*Math.cos(h)*g,i[1]=Math.sin(l)*Math.sin(h)*g,i[2]=Math.cos(l)*g},t=(i,h,l)=>{if(Math.random()<.42)i[l*3]=.08,i[l*3+1]=.85,i[l*3+2]=.55,h[l]=.055+Math.random()*.045;else{const y=Math.random();i[l*3]=.15*(1-y)+.78*y,i[l*3+1]=.45*(1-y)+.35*y,i[l*3+2]=1*(1-y)+.97*y,h[l]=.04+Math.random()*.04}},a=f.useMemo(()=>{const i=new Float32Array(156),h=new Float32Array(156),l=new Float32Array(156),y=new Float32Array(52),g=new Float32Array(52),n=new Float32Array(52),S=new Uint8Array(52);for(let C=0;C<52;C++){const j=Math.random()*.08,F=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);i[C*3]=j*Math.sin(O)*Math.cos(F),i[C*3+1]=j*Math.sin(O)*Math.sin(F),i[C*3+2]=j*Math.cos(O);const _=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;h[C*3]=Math.sin(A)*Math.cos(_)*T,h[C*3+1]=Math.sin(A)*Math.sin(_)*T,h[C*3+2]=Math.cos(A)*T,t(l,y,C),g[C]=Math.random()*1.5,n[C]=1.8+Math.random()*.8}return{positions:i,velocities:h,colors:l,sizes:y,lifetimes:g,maxLifetimes:n,hit:S}},[]),o=f.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),r=f.useRef(0);return P((i,h)=>{var G,D;u.current+=h,o.time.value=u.current;const l=Math.max(.5,Math.min(1.8,((G=p==null?void 0:p.current)==null?void 0:G.intensity)||1));o.flow.value=l;const y=((D=p==null?void 0:p.current)==null?void 0:D.pulse)>.95&&u.current-r.current>1.2;y&&(r.current=u.current);const{positions:g,velocities:n,colors:S,sizes:C,lifetimes:j,maxLifetimes:F,hit:O}=a,_=[0,0,0];let A=!1,T=y?8:0;for(let v=0;v<52;v++){j[v]+=h;const k=T>0&&j[v]>.15;if(j[v]>=F[v]||k){k&&T--;const W=Math.random()*.08,U=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1);g[v*3]=W*Math.sin(E)*Math.cos(U),g[v*3+1]=W*Math.sin(E)*Math.sin(U),g[v*3+2]=W*Math.cos(E),s(_),n[v*3]=_[0],n[v*3+1]=_[1],n[v*3+2]=_[2],t(S,C,v),A=!0,j[v]=0,F[v]=1.8+Math.random()*.8,O[v]=0;continue}const V=Math.sqrt(g[v*3]*g[v*3]+g[v*3+1]*g[v*3+1]+g[v*3+2]*g[v*3+2]),I=V>1.6?(V-1.6)/.6:0;I>0&&(n[v*3]*=1-I*.08,n[v*3+1]*=1-I*.08,n[v*3+2]*=1-I*.08,C[v]=C[v]*(1+I*.8)),g[v*3]+=n[v*3]*h,g[v*3+1]+=n[v*3+1]*h,g[v*3+2]+=n[v*3+2]*h;const $=g[v*3]*g[v*3]+g[v*3+1]*g[v*3+1]+g[v*3+2]*g[v*3+2];if($>=d)if(O[v])C[v]*=1.06;else{O[v]=1;const W=Math.sqrt($),U=c/W;g[v*3]*=U,g[v*3+1]*=U,g[v*3+2]*=U,n[v*3]=0,n[v*3+1]=0,n[v*3+2]=0,x&&x({position:new z(g[v*3],g[v*3+1],g[v*3+2]),intensity:1}),j[v]=F[v]-.8}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,A&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:m,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[a.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[a.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[a.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:o,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function rt(){const{positions:x,colors:p,sizes:b}=f.useMemo(()=>{const m=new Float32Array(180),c=new Float32Array(180),d=new Float32Array(60);for(let s=0;s<60;s++){const t=Math.acos(-1+2*s/60),a=Math.sqrt(60*Math.PI)*t,o=2.35;m[s*3]=o*Math.cos(a)*Math.sin(t),m[s*3+1]=o*Math.sin(a)*Math.sin(t),m[s*3+2]=o*Math.cos(t);const r=s>=36;if(r)c[s*3]=.133,c[s*3+1]=.827,c[s*3+2]=.933;else{const i=new N().setHSL(.75+Math.random()*.1,.7,.6);c[s*3]=i.r,c[s*3+1]=i.g,c[s*3+2]=i.b}d[s]=r?.09:.055}return{positions:m,colors:c,sizes:d}},[]),u=f.useMemo(()=>({time:{value:0}}),[]);return P((m,c)=>{u.time.value+=c*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),e.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function nt(){const M=f.useRef(),x=f.useMemo(()=>({time:{value:0}}),[]),p=f.useRef(0);P((c,d)=>{p.current+=d,x.time.value=p.current,M.current&&(M.current.rotation.y=p.current*.06)});const{positions:b,colors:u,sizes:m}=f.useMemo(()=>{const d=new Float32Array(150),s=new Float32Array(150),t=new Float32Array(50);for(let a=0;a<50;a++){const o=a/50*Math.PI*2,r=a%3,i=2.55+r*.22,h=.15*r;d[a*3]=i*Math.cos(o),d[a*3+1]=i*Math.sin(o)*Math.sin(h),d[a*3+2]=i*Math.sin(o)*Math.cos(h);const l=a/50;s[a*3]=.659*(1-l)+.133*l,s[a*3+1]=.333*(1-l)+.827*l,s[a*3+2]=.969*(1-l)+.933*l,t[a]=.015+Math.random()*.025}return{positions:d,colors:s,sizes:t}},[]);return e.jsx("group",{ref:M,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function lt({onImpactsReady:M}){const x=f.useRef([]),p=f.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return P((b,u)=>{for(;x.current.length>0&&p.current.some(c=>!c.active);){const c=x.current.shift(),d=p.current.find(s=>!s.active);d&&(d.position.copy(c.position),d.intensity=c.intensity,d.active=!0,d.age=0)}const m=.8;p.current.forEach(c=>{c.active&&(c.age+=u,c.intensity=Math.max(0,1-c.age*m),c.intensity<=0&&(c.active=!1))}),M(p.current.filter(c=>c.active).map(c=>({position:c.position,intensity:c.intensity})))}),f.useEffect(()=>(window.__aetherius_addImpact=b=>{x.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function ct(){const[M,x]=f.useState([]),p=f.useRef(""),b=f.useCallback(u=>{let m=u.length+":";for(let c=0;c<u.length;c++){const d=u[c];m+=d.position.x.toFixed(1)+","+d.position.y.toFixed(1)+","+d.position.z.toFixed(1)+","+d.intensity.toFixed(2)+";"}m!==p.current&&(p.current=m,x(u))},[]);return e.jsxs(e.Fragment,{children:[e.jsx(tt,{impactPoints:M}),e.jsx(lt,{onImpactsReady:b})]})}function dt(){const M=f.useRef(),x=f.useRef(0),{positions:p,colors:b,sizes:u}=f.useMemo(()=>{const d=new Float32Array(24),s=new Float32Array(24),t=new Float32Array(8);for(let a=0;a<8;a++){const o=a/8*Math.PI*2+Math.random()*.5,r=4+Math.random()*2;d[a*3]=r*Math.cos(o),d[a*3+1]=(Math.random()-.5)*3,d[a*3+2]=r*Math.sin(o);const i=Math.random();i<.4?(s[a*3]=.13,s[a*3+1]=.82,s[a*3+2]=.93):i<.7?(s[a*3]=.84,s[a*3+1]=.27,s[a*3+2]=.93):(s[a*3]=.83,s[a*3+1]=.66,s[a*3+2]=.32),t[a]=.08+Math.random()*.06}return{positions:d,colors:s,sizes:t}},[]),m=f.useMemo(()=>({time:{value:0}}),[]);return P((c,d)=>{var t,a,o;x.current+=d,m.time.value=x.current,M.current&&(M.current.rotation.y=x.current*.02);const s=(o=(a=(t=M.current)==null?void 0:t.geometry)==null?void 0:a.attributes)==null?void 0:o.aSize;if(s){for(let r=0;r<8;r++)s.array[r]=.06+.05*Math.sin(x.current*2+r*1.5);s.needsUpdate=!0}}),e.jsxs("points",{ref:M,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),e.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function ht(){const p=f.useRef(),b=f.useRef([]),u=f.useRef(0),m=f.useMemo(()=>{const s=new Float32Array(2700),t=new Float32Array(900*3),a=new Float32Array(900),o=()=>Math.random();for(let r=0;r<900;r++){const i=o()*Math.PI*2,h=Math.acos(2*o()-1),l=o();let y,g;l<.45?(y=6+o()*6,g=.07):l<.8?(y=12+o()*8,g=.05):(y=20+o()*8,g=.035),s[r*3]=y*Math.sin(h)*Math.cos(i),s[r*3+1]=y*Math.sin(h)*Math.sin(i),s[r*3+2]=y*Math.cos(h);const n=o();n<.4?(t[r*3]=.95,t[r*3+1]=.97,t[r*3+2]=1):n<.55?(t[r*3]=.3,t[r*3+1]=.95,t[r*3+2]=1):n<.68?(t[r*3]=1,t[r*3+1]=1,t[r*3+2]=1):n<.78?(t[r*3]=.6,t[r*3+1]=.8,t[r*3+2]=1):n<.88?(t[r*3]=.95,t[r*3+1]=.35,t[r*3+2]=.9):(t[r*3]=1,t[r*3+1]=.82,t[r*3+2]=.55),a[r]=g+o()*.035}return{positions:s,colors:t,sizes:a}},[]),c=f.useMemo(()=>Array.from({length:14},()=>{const s=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),a=Math.random()<.6?7+Math.random()*8:15+Math.random()*7,o=Math.random();let r;return o<.25?r=[0,.8,1]:o<.45?r=[.1,.9,.7]:o<.6?r=[.05,.55,.95]:o<.78?r=[.15,.75,.88]:o<.9?r=[.3,.15,.75]:r=[0,.6,.8],{position:[a*Math.sin(t)*Math.cos(s),a*Math.sin(t)*Math.sin(s),a*Math.cos(t)],billboardSize:3.5+Math.random()*4.5,color:r,bobSpeed:.04+Math.random()*.1,bobAmp:.2+Math.random()*.6,phase:Math.random()*Math.PI*2,noiseScale:2.5+Math.random()*3.5,noiseOffset:Math.random()*100}}),[]);P((s,t)=>{u.current+=t;const a=u.current;p.current&&(p.current.rotation.y=a*.002,p.current.rotation.x=Math.sin(a*.0015)*.015),b.current.forEach((o,r)=>{if(!o)return;const i=c[r];o.position.x=i.position[0]+Math.sin(a*.03+i.phase)*i.bobAmp,o.position.y=i.position[1]+Math.cos(a*i.bobSpeed+i.phase)*i.bobAmp*.5,o.position.z=i.position[2]+Math.sin(a*.02+i.phase*1.3)*i.bobAmp*.3})});const d=`
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
  `;return e.jsxs("group",{ref:p,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]}),c.map((s,t)=>e.jsxs("mesh",{ref:a=>b.current[t]=a,position:s.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new N(s.color[0],s.color[1],s.color[2])},billboardSize:{value:s.billboardSize},noiseScale:{value:s.noiseScale},noiseOffset:{value:s.noiseOffset},time:{value:0}},vertexShader:`
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

                // Combine: radial base × filament detail
                float alpha = radial * (0.4 + filaments * 0.6) * 0.30;
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
            `,transparent:!0,depthWrite:!1,blending:w,side:K})]},t))]})}function ut({liveData:M,paused:x}){const p=f.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=f.useCallback(t=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(t)},[]),u=f.useRef({intensity:1,pulse:.4,block:null});f.useEffect(()=>{const t=()=>{const o=M||{},r=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,i=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let h=.9+Math.min(r/500,.5)+Math.min(i/50,.25)+Math.random()*.15;h=Math.max(.6,Math.min(1.8,h));const l=u.current;l.intensity=h,o.block&&o.block!=="—"&&o.block!==l.block?(l.block=o.block,l.pulse=1):l.pulse=Math.max(.3,(l.pulse||.3)*.94)};t();const a=setInterval(t,400);return()=>clearInterval(a)},[M]);const m=f.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),c=f.useMemo(()=>({alpha:!0,antialias:!p,powerPreference:"high-performance"}),[p]),d=f.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),s=f.useMemo(()=>[1,1.5],[]);return e.jsxs(Y,{camera:m,gl:c,onCreated:({gl:t})=>t.setClearColor(0,0),style:d,dpr:s,frameloop:x?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(at,{flowRef:u}),e.jsx(ct,{}),e.jsx(st,{liveData:M,onImpact:b,flowRef:u}),e.jsx(Z,{}),e.jsx(X,{}),e.jsx(rt,{}),e.jsx(Q,{liveData:M}),e.jsx(nt,{})]}),!p&&e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),e.jsx(B,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(B,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(B,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(it,{}),e.jsx(dt,{})]}),e.jsx(J,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ut as default};
