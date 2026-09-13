import{r as h,j as t,C as K,S as L,O as Y,u as A}from"./r3f-BFDIpzVt.js";import{q as B,r as H,p as w,F as R,e as I,s as $,h as z,D as J}from"./three-DAA57BSS.js";const Q=({liveData:g})=>{const M=h.useRef(),u=h.useRef(0),y=h.useMemo(()=>{const s=g||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${s.endpoints||"100+"} ENDPOINTS   ${s.freeEndpoints||"40"} FREE   ${s.latency||"—"}   `}]},[g]),m=h.useMemo(()=>y.map(s=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const o=e.getContext("2d");o.clearRect(0,0,e.width,e.height);const p=`900 ${s.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=p,o.textAlign="center",o.textBaseline="middle";const a=s.text,d=o.measureText(a).width,r=Math.ceil((e.width+d)/d),b=(e.width-d*r)/2+d/2;o.shadowColor=s.color,o.shadowBlur=48,o.fillStyle=s.color;for(let n=0;n<r;n++)o.fillText(a,b+n*d,e.height/2);o.shadowBlur=22;for(let n=0;n<r;n++)o.fillText(a,b+n*d,e.height/2);o.shadowBlur=0,o.fillStyle=s.color==="#ffffff"?"#ffffff":s.color;for(let n=0;n<r;n++)o.fillText(a,b+n*d,e.height/2);o.fillStyle="#ffffff",o.globalAlpha=.85;for(let n=0;n<r;n++)o.fillText(a,b+n*d,e.height/2);o.globalAlpha=1;const x=new B(e);return x.anisotropy=8,x.minFilter=$,x.magFilter=$,x}),[y]),v=h.useMemo(()=>y.map(s=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const o=e.getContext("2d");o.clearRect(0,0,e.width,e.height),o.font=`900 ${s.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,o.textAlign="center",o.textBaseline="middle";const p=s.text,a=o.measureText(p).width,d=Math.ceil((e.width+a)/a),r=(e.width-a*d)/2+a/2;o.shadowColor=s.color,o.shadowBlur=28,o.fillStyle=s.color,o.globalAlpha=.35;for(let x=0;x<d;x++)o.fillText(p,r+x*a,e.height/2);o.globalAlpha=1;const b=new B(e);return b.anisotropy=4,b}),[y]),[l,c]=h.useState(null),i=h.useRef(0);return A((s,e)=>{u.current+=e,i.current+=e,M.current&&y.forEach((o,p)=>{const a=M.current.children[p];if(a){l===p||(a.rotation.y+=e*o.speed);const r=a.children[0];if(r!=null&&r.material){const b=.88+.12*Math.sin(i.current*.7+p*1.2);r.material.opacity=(l===p?1:o.opacity)*b}}})}),t.jsx("group",{ref:M,children:y.map((s,e)=>t.jsxs("group",{position:[0,s.yOffset,0],rotation:[s.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),c(e),document.body.style.cursor="pointer"},onPointerOut:()=>{c(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(s.radius,s.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[s.radius,s.radius,s.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:m[e],transparent:!0,opacity:s.opacity,side:R,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[s.radius,s.radius,s.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:v[e],transparent:!0,opacity:.22,side:H,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[s.radius,s.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:s.color,transparent:!0,opacity:s.opacity*.12,depthWrite:!1})]})]},e))})};function Z(){const g=h.useMemo(()=>({time:{value:0},colorA:{value:new I(2282478)},colorB:{value:new I(11032055)},colorC:{value:new I(14239471)}}),[]);return A((M,u)=>{g.time.value+=u*.6}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function X(){const g=h.useMemo(()=>({time:{value:0}}),[]);return A((M,u)=>{g.time.value+=u*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function tt({impactPoints:g}){const M=h.useRef(),u=h.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return A((y,m)=>{if(u.time.value+=m*.5,g)for(let v=0;v<8&&v<g.length;v++){const l=g[v];u[`impact${v}`].value.copy(l.position),u[`i${v}t`].value=l.intensity}}),t.jsxs("mesh",{ref:M,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function et({gasUniforms:g}){const u=h.useRef(),y=h.useRef(0),m=h.useMemo(()=>{const v=new Float32Array(60),l=new Float32Array(60),c=new Float32Array(60),i=new Float32Array(20);for(let s=0;s<20;s++){const e=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),p=.15+Math.random()*.3;v[s*3]=p*Math.sin(o)*Math.cos(e)*1.8,v[s*3+1]=p*Math.cos(o)*.6,v[s*3+2]=p*Math.sin(o)*Math.sin(e)*.8,l[s*3]=2+Math.random()*4,l[s*3+1]=1.5+Math.random()*3,l[s*3+2]=2+Math.random()*3.5;const a=Math.random();c[s*3]=0+a*.15,c[s*3+1]=.5+a*.4,c[s*3+2]=.8+a*.2,i[s]=.015+Math.random()*.02}return{positions:v,seeds:l,colors:c,sizes:i}},[]);return A((v,l)=>{var s,e,o,p;y.current+=l;const c=y.current,i=(p=(o=(e=(s=u.current)==null?void 0:s.geometry)==null?void 0:e.attributes)==null?void 0:o.position)==null?void 0:p.array;if(i){for(let a=0;a<20;a++){const d=m.seeds[a*3],r=m.seeds[a*3+1],b=m.seeds[a*3+2];i[a*3]=m.positions[a*3]+Math.sin(c*d+a*.7)*.04,i[a*3+1]=m.positions[a*3+1]+Math.cos(c*r+a*1.1)*.025,i[a*3+2]=m.positions[a*3+2]+Math.sin(c*b+a*.9)*.03}u.current.geometry.attributes.position.needsUpdate=!0}}),t.jsxs("points",{ref:u,renderOrder:2,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float pulse;
          void main() {
            vColor = aColor;
            float beat = 0.5 + 0.5 * pulse;
            vAlpha = beat;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (180.0 / -mv.z) * (0.8 + 0.4 * beat);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            float d = abs(uv.x) + abs(uv.y) * 0.6; // tiny diamond
            if (d > 1.0) discard;
            float glow = pow(1.0 - d, 2.5);
            vec3 col = vColor + vec3(0.3, 0.5, 0.7) * glow * 0.5;
            gl_FragColor = vec4(col, glow * vAlpha * 0.8);
          }
        `,transparent:!0,depthWrite:!1,blending:w})]})}function ot({flowRef:g}){const M=h.useRef(),u=h.useRef(0),y=h.useMemo(()=>{const v=document.createElement("canvas");v.width=512,v.height=128;const l=v.getContext("2d");return l.clearRect(0,0,512,128),l.font="bold 72px monospace",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#0052FF",l.shadowColor="#0052FF",l.shadowBlur=30,l.fillText("BASE",256,64),l.shadowBlur=0,l.fillText("BASE",256,64),new B(v)},[]);A((v,l)=>{var i;u.current+=l;const c=(g==null?void 0:g.current)||{pulse:.3};if(c.pulse=Math.max(.25,(c.pulse||0)-l*1.6),M.current){M.current.rotation.y=u.current*.08,M.current.rotation.x=Math.sin(u.current*.12)*.08;const s=Math.sin(u.current*1.5),e=Math.sin(u.current*.9)*.03,o=c.pulse,p=1+.04*s+.18*o;M.current.scale.set(p,p,p),M.current.position.y=e;const a=(i=M.current.children[0])==null?void 0:i.material;a&&(a.opacity=.7+.18*s+.18*o)}});const m=h.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return A((v,l)=>{var c,i;m.time.value+=l*.5,m.flow.value=((c=g==null?void 0:g.current)==null?void 0:c.intensity)||1,m.pulse.value=((i=g==null?void 0:g.current)==null?void 0:i.pulse)||.3}),t.jsxs("group",{ref:M,scale:1.3,children:[t.jsxs("mesh",{renderOrder:0,children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.5 + 0.5 * swirl;
              float beat = 0.4 + 0.6 * pulse;
              vec3 col = mix(vec3(0.04,0.12,0.4), vec3(0.08,0.28,0.65), dist*0.5);
              col += vec3(0.2,0.06,0.35) * (1.0-dist) * 0.3;
              // SUTIL: alpha bajo para que no compita con wireframe
              float alpha = fog * turbulence * 0.08 * beat * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:H})]}),t.jsxs("mesh",{renderOrder:1,children:[t.jsx("sphereGeometry",{args:[1.2,20,14]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.4 + 0.6 * swirl;
              float noise = tendrils * 0.7 + 0.3;
              float beat = 0.3 + 0.7 * pulse;
              vec3 col = mix(vec3(0.03,0.1,0.4), vec3(0.06,0.22,0.6), noise*0.5);
              col += vec3(0.15,0.05,0.3) * (1.0-dist) * 0.4;
              // SUTIL
              float alpha = radial * noise * 0.10 * beat * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:t.jsx("spriteMaterial",{map:y,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),t.jsx(et,{gasUniforms:m}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.38;
              float radial = pow(1.0 - dist, 3.0);
              float swirl = sin(vPos.x*8.0+time*0.8)*sin(vPos.y*6.0+time*0.5)*sin(vPos.z*5.0+time*0.6);
              float noise = 0.7 + 0.3*swirl;
              float beat = 0.6 + 0.4*pulse;
              vec3 deepBlue = vec3(0.0,0.15,0.9);
              vec3 coreCyan = vec3(0.08,0.6,1.0);
              vec3 col = mix(deepBlue, coreCyan, (1.0-dist)*0.6 + noise*0.15);
              col += vec3(0.25,0.08,0.45) * (1.0-dist) * 0.4;
              float alpha = radial * 0.88 * noise * (0.75 + 0.4*flow) * beat;
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.06,0.42,0.92), vec3(0.5,0.22,0.88), dist*0.5);
              float alpha = radial * 0.28 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.45,0.2,0.85), vec3(0.75,0.28,0.65), dist*0.4);
              float alpha = radial * 0.14 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.12,0.3,0.8), vec3(0.45,0.2,0.75), dist*0.5+phase*0.15);
              float alpha = radial * 0.07 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsx(at,{gasUniforms:m})]})}function at({gasUniforms:g}){const v=4.840000000000001,l=h.useRef(),c=h.useRef([]),i=h.useMemo(()=>{const o=new Float32Array(216),p=new Float32Array(216),a=new Float32Array(360),d=new Float32Array(216);for(let r=0;r<72;r++){const b=r>=48;a[r*5]=1.5+Math.random()*2,a[r*5+1]=1+Math.random()*2.5,a[r*5+2]=Math.random()*3,a[r*5+3]=b?1:0,a[r*5+4]=1;const x=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),j=a[r*5];if(p[r*3]=Math.sin(n)*Math.cos(x)*j,p[r*3+1]=Math.sin(n)*Math.sin(x)*j,p[r*3+2]=Math.cos(n)*j,o[r*3]=(Math.random()-.5)*.04,o[r*3+1]=(Math.random()-.5)*.04,o[r*3+2]=(Math.random()-.5)*.04,b){const C=Math.random();d[r*3]=.6+C*.3,d[r*3+1]=.15+C*.2,d[r*3+2]=.85+C*.15}else{const C=Math.random();d[r*3]=.1+C*.9,d[r*3+1]=.6+C*.4,d[r*3+2]=.8+C*.2}}return{positions:o,velocities:p,seeds:a,colors:d}},[]);return A((o,p)=>{if(!l.current)return;const{positions:a,velocities:d,seeds:r,colors:b}=i;g.time.value,g.pulse.value;const x=[];for(let n=0;n<72;n++){const j=r[n*5+3]>.5;r[n*5+2]+=p;const C=r[n*5+2],S=r[n*5+1];if(C>=S){const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;d[n*3]=Math.sin(P)*Math.cos(_)*T,d[n*3+1]=Math.sin(P)*Math.sin(_)*T,d[n*3+2]=Math.cos(P)*T,a[n*3]=(Math.random()-.5)*.04,a[n*3+1]=(Math.random()-.5)*.04,a[n*3+2]=(Math.random()-.5)*.04,r[n*5]=T,r[n*5+2]=0,r[n*5+4]=1;continue}if(r[n*5+4]<.5)continue;a[n*3]+=d[n*3]*p,a[n*3+1]+=d[n*3+1]*p,a[n*3+2]+=d[n*3+2]*p;const F=j?.97:.992;d[n*3]*=F,d[n*3+1]*=F,d[n*3+2]*=F;const O=a[n*3]**2+a[n*3+1]**2+a[n*3+2]**2;if(O>=v&&r[n*5+4]>.5){const P=2.2/Math.sqrt(O);a[n*3]*=P,a[n*3+1]*=P,a[n*3+2]*=P,x.push({x:a[n*3],y:a[n*3+1],z:a[n*3+2],intensity:j?.6:1}),j?(d[n*3]*=-.3,d[n*3+1]*=-.3,d[n*3+2]*=-.3,r[n*5+2]=r[n*5+1]-.2):(r[n*5+4]=0,r[n*5+2]=r[n*5+1]-.1)}}c.current=x,l.current.geometry.attributes.position.needsUpdate=!0}),t.jsxs("points",{ref:l,renderOrder:10,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[i.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-seeds",args:[i.seeds,5]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[i.colors,3]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
  `,transparent:!0,depthWrite:!1,blending:w})]})}function st(){const u=h.useRef(),y=h.useRef([]),m=h.useRef(0),v=h.useMemo(()=>{const c=new Float32Array(600),i=new Float32Array(600),s=new Float32Array(200);for(let e=0;e<200;e++){const o=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),a=3+Math.random()*12;c[e*3]=a*Math.sin(p)*Math.cos(o),c[e*3+1]=a*Math.sin(p)*Math.sin(o),c[e*3+2]=a*Math.cos(p);const d=Math.random();d<.5?(i[e*3]=.3,i[e*3+1]=.15,i[e*3+2]=.5):d<.8?(i[e*3]=.1,i[e*3+1]=.4,i[e*3+2]=.5):(i[e*3]=.5,i[e*3+1]=.5,i[e*3+2]=.55),s[e]=.02+Math.random()*.03}return{positions:c,colors:i,sizes:s}},[]),l=h.useMemo(()=>Array.from({length:8},()=>{const c=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),s=5+Math.random()*8,e=Math.random();let o;return e<.3?o=[.15,.08,.4]:e<.6?o=[.05,.2,.45]:e<.8?o=[.08,.3,.35]:o=[.2,.05,.3],{position:[s*Math.sin(i)*Math.cos(c),s*Math.sin(i)*Math.sin(c),s*Math.cos(i)],scale:1.5+Math.random()*2.5,color:o,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.5,phase:Math.random()*Math.PI*2}}),[]);return A((c,i)=>{m.current+=i,u.current&&(u.current.rotation.y=m.current*.008),y.current.forEach((s,e)=>{if(!s)return;const o=l[e],p=m.current;s.position.x=o.position[0]+Math.sin(p*o.rotSpeed+o.phase)*o.bobAmp,s.position.y=o.position[1]+Math.cos(p*o.bobSpeed+o.phase)*o.bobAmp*.6,s.position.z=o.position[2]+Math.sin(p*o.rotSpeed*.7+o.phase*1.3)*o.bobAmp*.4,s.rotation.y=p*o.rotSpeed*.5,s.rotation.x=Math.sin(p*.1)*.1})}),t.jsxs("group",{ref:u,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[v.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; void main(){vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(300.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,2.0); gl_FragColor=vec4(vColor,g*0.35);}",transparent:!0,depthWrite:!1,blending:w})]}),l.map((c,i)=>t.jsxs("mesh",{ref:s=>y.current[i]=s,position:c.position,children:[t.jsx("planeGeometry",{args:[c.scale,c.scale]}),t.jsx("shaderMaterial",{uniforms:{color:{value:new I(c.color[0],c.color[1],c.color[2])}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                // Billboard: face camera
                vec4 mvPos = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                mvPos.xy += (uv - 0.5) * vec2(${c.scale.toFixed(1)});
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
            `,transparent:!0,depthWrite:!1,blending:w,side:J})]},i))]})}function rt({liveData:g,onImpact:M,flowRef:u}){const m=h.useRef(0),v=h.useRef(),l=2.2,c=l*l,i=a=>{var n;const d=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((n=u==null?void 0:u.current)==null?void 0:n.intensity)||1)),x=(1.6+Math.random()*1)*(.9+.3*b);a[0]=Math.sin(r)*Math.cos(d)*x,a[1]=Math.sin(r)*Math.sin(d)*x,a[2]=Math.cos(r)*x},s=(a,d,r)=>{if(Math.random()<.42)a[r*3]=.08,a[r*3+1]=.85,a[r*3+2]=.55,d[r]=.055+Math.random()*.045;else{const b=Math.random();a[r*3]=.15*(1-b)+.78*b,a[r*3+1]=.45*(1-b)+.35*b,a[r*3+2]=1*(1-b)+.97*b,d[r]=.04+Math.random()*.04}},e=h.useMemo(()=>{const a=new Float32Array(156),d=new Float32Array(156),r=new Float32Array(156),b=new Float32Array(52),x=new Float32Array(52),n=new Float32Array(52),j=new Uint8Array(52);for(let C=0;C<52;C++){const S=Math.random()*.08,F=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);a[C*3]=S*Math.sin(O)*Math.cos(F),a[C*3+1]=S*Math.sin(O)*Math.sin(F),a[C*3+2]=S*Math.cos(O);const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;d[C*3]=Math.sin(P)*Math.cos(_)*T,d[C*3+1]=Math.sin(P)*Math.sin(_)*T,d[C*3+2]=Math.cos(P)*T,s(r,b,C),x[C]=Math.random()*1.5,n[C]=1.8+Math.random()*.8}return{positions:a,velocities:d,colors:r,sizes:b,lifetimes:x,maxLifetimes:n,hit:j}},[]),o=h.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),p=h.useRef(0);return A((a,d)=>{var G,k;m.current+=d,o.time.value=m.current;const r=Math.max(.5,Math.min(1.8,((G=u==null?void 0:u.current)==null?void 0:G.intensity)||1));o.flow.value=r;const b=((k=u==null?void 0:u.current)==null?void 0:k.pulse)>.95&&m.current-p.current>1.2;b&&(p.current=m.current);const{positions:x,velocities:n,colors:j,sizes:C,lifetimes:S,maxLifetimes:F,hit:O}=e,_=[0,0,0];let P=!1,T=b?8:0;for(let f=0;f<52;f++){S[f]+=d;const V=T>0&&S[f]>.15;if(S[f]>=F[f]||V){V&&T--;const W=Math.random()*.08,N=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1);x[f*3]=W*Math.sin(E)*Math.cos(N),x[f*3+1]=W*Math.sin(E)*Math.sin(N),x[f*3+2]=W*Math.cos(E),i(_),n[f*3]=_[0],n[f*3+1]=_[1],n[f*3+2]=_[2],s(j,C,f),P=!0,S[f]=0,F[f]=1.8+Math.random()*.8,O[f]=0;continue}const D=Math.sqrt(x[f*3]*x[f*3]+x[f*3+1]*x[f*3+1]+x[f*3+2]*x[f*3+2]),U=D>1.6?(D-1.6)/.6:0;U>0&&(n[f*3]*=1-U*.08,n[f*3+1]*=1-U*.08,n[f*3+2]*=1-U*.08,C[f]=C[f]*(1+U*.8)),x[f*3]+=n[f*3]*d,x[f*3+1]+=n[f*3+1]*d,x[f*3+2]+=n[f*3+2]*d;const q=x[f*3]*x[f*3]+x[f*3+1]*x[f*3+1]+x[f*3+2]*x[f*3+2];if(q>=c)if(O[f])C[f]*=1.06;else{O[f]=1;const W=Math.sqrt(q),N=l/W;x[f*3]*=N,x[f*3+1]*=N,x[f*3+2]*=N,n[f*3]=0,n[f*3+1]=0,n[f*3+2]=0,M&&M({position:new z(x[f*3],x[f*3+1],x[f*3+2]),intensity:1}),S[f]=F[f]-.35}}v.current&&(v.current.geometry.attributes.position.needsUpdate=!0,P&&(v.current.geometry.attributes.aColor.needsUpdate=!0,v.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:v,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:o,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function it(){const{positions:M,colors:u,sizes:y}=h.useMemo(()=>{const v=new Float32Array(180),l=new Float32Array(180),c=new Float32Array(60);for(let i=0;i<60;i++){const s=Math.acos(-1+2*i/60),e=Math.sqrt(60*Math.PI)*s,o=2.35;v[i*3]=o*Math.cos(e)*Math.sin(s),v[i*3+1]=o*Math.sin(e)*Math.sin(s),v[i*3+2]=o*Math.cos(s);const p=i>=36;if(p)l[i*3]=.133,l[i*3+1]=.827,l[i*3+2]=.933;else{const a=new I().setHSL(.75+Math.random()*.1,.7,.6);l[i*3]=a.r,l[i*3+1]=a.g,l[i*3+2]=a.b}c[i]=p?.09:.055}return{positions:v,colors:l,sizes:c}},[]),m=h.useMemo(()=>({time:{value:0}}),[]);return A((v,l)=>{m.time.value+=l*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function nt(){const g=h.useRef(),M=h.useMemo(()=>({time:{value:0}}),[]),u=h.useRef(0);A((l,c)=>{u.current+=c,M.time.value=u.current,g.current&&(g.current.rotation.y=u.current*.06)});const{positions:y,colors:m,sizes:v}=h.useMemo(()=>{const c=new Float32Array(150),i=new Float32Array(150),s=new Float32Array(50);for(let e=0;e<50;e++){const o=e/50*Math.PI*2,p=e%3,a=2.55+p*.22,d=.15*p;c[e*3]=a*Math.cos(o),c[e*3+1]=a*Math.sin(o)*Math.sin(d),c[e*3+2]=a*Math.sin(o)*Math.cos(d);const r=e/50;i[e*3]=.659*(1-r)+.133*r,i[e*3+1]=.333*(1-r)+.827*r,i[e*3+2]=.969*(1-r)+.933*r,s[e]=.015+Math.random()*.025}return{positions:c,colors:i,sizes:s}},[]);return t.jsx("group",{ref:g,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v,1]})]}),t.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function lt({onImpactsReady:g}){const M=h.useRef([]),u=h.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return A((y,m)=>{for(;M.current.length>0&&u.current.some(l=>!l.active);){const l=M.current.shift(),c=u.current.find(i=>!i.active);c&&(c.position.copy(l.position),c.intensity=l.intensity,c.active=!0,c.age=0)}const v=1.5;u.current.forEach(l=>{l.active&&(l.age+=m,l.intensity=Math.max(0,1-l.age*v),l.intensity<=0&&(l.active=!1))}),g(u.current.filter(l=>l.active).map(l=>({position:l.position,intensity:l.intensity})))}),h.useEffect(()=>(window.__aetherius_addImpact=y=>{M.current.push(y)},()=>{delete window.__aetherius_addImpact}),[]),null}function ct(){const[g,M]=h.useState([]),u=h.useRef(""),y=h.useCallback(m=>{let v=m.length+":";for(let l=0;l<m.length;l++){const c=m[l];v+=c.position.x.toFixed(1)+","+c.position.y.toFixed(1)+","+c.position.z.toFixed(1)+","+c.intensity.toFixed(2)+";"}v!==u.current&&(u.current=v,M(m))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(tt,{impactPoints:g}),t.jsx(lt,{onImpactsReady:y})]})}function dt(){const g=h.useRef(),M=h.useRef(0),{positions:u,colors:y,sizes:m}=h.useMemo(()=>{const c=new Float32Array(24),i=new Float32Array(24),s=new Float32Array(8);for(let e=0;e<8;e++){const o=e/8*Math.PI*2+Math.random()*.5,p=4+Math.random()*2;c[e*3]=p*Math.cos(o),c[e*3+1]=(Math.random()-.5)*3,c[e*3+2]=p*Math.sin(o);const a=Math.random();a<.4?(i[e*3]=.13,i[e*3+1]=.82,i[e*3+2]=.93):a<.7?(i[e*3]=.84,i[e*3+1]=.27,i[e*3+2]=.93):(i[e*3]=.83,i[e*3+1]=.66,i[e*3+2]=.32),s[e]=.08+Math.random()*.06}return{positions:c,colors:i,sizes:s}},[]),v=h.useMemo(()=>({time:{value:0}}),[]);return A((l,c)=>{var s,e,o;M.current+=c,v.time.value=M.current,g.current&&(g.current.rotation.y=M.current*.02);const i=(o=(e=(s=g.current)==null?void 0:s.geometry)==null?void 0:e.attributes)==null?void 0:o.aSize;if(i){for(let p=0;p<8;p++)i.array[p]=.06+.05*Math.sin(M.current*2+p*1.5);i.needsUpdate=!0}}),t.jsxs("points",{ref:g,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[u,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),t.jsx("shaderMaterial",{uniforms:v,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function ht({liveData:g,paused:M}){const u=h.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=h.useCallback(s=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(s)},[]),m=h.useRef({intensity:1,pulse:.4,block:null});h.useEffect(()=>{const s=()=>{const o=g||{},p=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,a=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(p/500,.5)+Math.min(a/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const r=m.current;r.intensity=d,o.block&&o.block!=="—"&&o.block!==r.block?(r.block=o.block,r.pulse=1):r.pulse=Math.max(.3,(r.pulse||.3)*.94)};s();const e=setInterval(s,400);return()=>clearInterval(e)},[g]);const v=h.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),l=h.useMemo(()=>({alpha:!0,antialias:!u,powerPreference:"high-performance"}),[u]),c=h.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),i=h.useMemo(()=>[1,1.5],[]);return t.jsxs(K,{camera:v,gl:l,onCreated:({gl:s})=>s.setClearColor(0,0),style:c,dpr:i,frameloop:M?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(ot,{flowRef:m}),t.jsx(ct,{}),t.jsx(rt,{liveData:g,onImpact:y,flowRef:m}),t.jsx(Z,{}),t.jsx(X,{}),t.jsx(it,{}),t.jsx(Q,{liveData:g}),t.jsx(nt,{})]}),!u&&t.jsxs(t.Fragment,{children:[t.jsx(L,{radius:12,depth:30,count:500,factor:2,saturation:.2,fade:!0,speed:.12}),t.jsx(L,{radius:8,depth:15,count:250,factor:1,saturation:.3,fade:!0,speed:.08}),t.jsx(L,{radius:20,depth:50,count:100,factor:.8,saturation:.15,fade:!0,speed:.05}),t.jsx(st,{}),t.jsx(dt,{})]}),t.jsx(Y,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ht as default};
