import{j as e,r as f,u as P,C as q,S as B,O as X}from"./r3f-DD-zEP2Y.js";import{u as K}from"./index-CkTX_7Cg.js";import{p as C,e as O,q as G,r as Y,F as S,s as $,D as J,h as Q}from"./three-DAA57BSS.js";import"./gsap-CzGW6FVa.js";const j=500;function Z({reputationParticles:v}){const g=f.useRef();v.length;const{positions:m,colors:y,sizes:p,alphas:x,types:d}=f.useMemo(()=>{const r=new Float32Array(j*3),s=new Float32Array(j*3),o=new Float32Array(j),t=new Float32Array(j),a=new Float32Array(j);for(let n=0;n<j;n++)r[n*3]=0,r[n*3+1]=0,r[n*3+2]=0,s[n*3]=0,s[n*3+1]=0,s[n*3+2]=0,o[n]=0,t[n]=0,a[n]=0;return{positions:r,colors:s,sizes:o,alphas:t,types:a}},[]);return P((r,s)=>{if(!g.current)return;const{positions:o,colors:t,sizes:a,alphas:n,types:i}=g.current.geometry.attributes;for(let l=0;l<Math.min(v.length,j);l++){const c=v[l];o.array[l*3]=c.position[0],o.array[l*3+1]=c.position[1],o.array[l*3+2]=c.position[2];const b=new O(c.color);t.array[l*3]=b.r,t.array[l*3+1]=b.g,t.array[l*3+2]=b.b;const u=c.age/c.maxAge,M=u<.1?u/.1:1,E=u>.7?(1-u)/.3:1,A=Math.min(M,E);a.array[l]=c.size*(1+u*.5)*A,n.array[l]=A*(.6+.4*Math.sin(Date.now()*.003+l)),i.array[l]=c.isBatch?1:0}for(let l=v.length;l<j;l++)n.array[l]=0,a.array[l]=0;o.needsUpdate=!0,t.needsUpdate=!0,a.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}),e.jsxs("points",{ref:g,renderOrder:15,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]}),e.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[x,1]}),e.jsx("bufferAttribute",{attach:"attributes-aType",args:[d,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
          attribute float aSize;
          attribute vec3 aColor;
          attribute float aAlpha;
          attribute float aType;
          varying vec3 vColor;
          varying float vAlpha;
          varying float vType;
          varying float vSize;
          void main() {
            vColor = aColor;
            vAlpha = aAlpha;
            vType = aType;
            vSize = aSize;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            float perspective = 300.0 / -mv.z;
            gl_PointSize = aSize * perspective * (1.0 + vType * 0.5);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor;
          varying float vAlpha;
          varying float vType;
          varying float vSize;
          void main() {
            vec2 uv = gl_PointCoord - vec2(0.5);
            float dist = length(uv);
            if (dist > 0.5) discard;

            float ring = smoothstep(0.45, 0.0, dist);
            float core = pow(1.0 - dist * 2.0, 4.0);

            vec3 col = vColor;
            if (vType > 0.5) {
              // Batch particles: diamond/trail shape
              float ax = abs(uv.x);
              float ay = abs(uv.y);
              float diamond = 1.0 - max(ax, ay) * 2.0;
              col = mix(col, vec3(1.0), diamond * 0.5);
            } else {
              // Single particles: star shape
              float ax = abs(uv.x);
              float ay = abs(uv.y);
              float spikeX = smoothstep(0.25, 0.0, ay) * pow(1.0 - ax, 2.0);
              float spikeY = smoothstep(0.25, 0.0, ax) * pow(1.0 - ay, 2.0);
              col = mix(col, vec3(1.0), max(spikeX, spikeY) * 0.7 + core * 0.5);
            }

            float alpha = (ring * 0.6 + core * 0.4) * vAlpha;
            gl_FragColor = vec4(col, alpha);
          }
        `,transparent:!0,depthWrite:!1,blending:C})]})}function tt(){const v=K();return v.length===0?null:e.jsx(Z,{reputationParticles:v})}const et=({liveData:v})=>{const g=f.useRef(),m=f.useRef(0),y=f.useMemo(()=>{const o=v||{};return[{radius:3.3,tilt:.18,yOffset:.55,speed:.025,bandWidth:.65,color:"#ffffff",opacity:.9,fontSize:80,text:"   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   "},{radius:2.85,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.56,color:"#d946ef",opacity:.82,fontSize:48,text:"   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   "},{radius:2.45,tilt:.12,yOffset:-.75,speed:.04,bandWidth:.49,color:"#22d3ee",opacity:.75,fontSize:32,text:`   ${o.endpoints||"100+"} ENDPOINTS  ${o.freeEndpoints||"40"} FREE  ${o.latency||""}   ${o.endpoints||"100+"} ENDPOINTS  ${o.freeEndpoints||"40"} FREE  ${o.latency||""}   `}]},[v]),p=f.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=400;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);const n=`900 ${o.fontSize*1.1}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=n,a.textAlign="center",a.textBaseline="middle";const i=o.text,l=a.measureText(i).width,c=Math.ceil((t.width+l)/l),b=(t.width-l*c)/2+l/2;a.shadowColor=o.color,a.shadowBlur=64,a.fillStyle=o.color,a.globalAlpha=.5;for(let M=0;M<c;M++)a.fillText(i,b+M*l,t.height/2);a.shadowBlur=32,a.globalAlpha=.8;for(let M=0;M<c;M++)a.fillText(i,b+M*l,t.height/2);a.shadowBlur=8,a.globalAlpha=1,a.fillStyle=o.color==="#ffffff"?"#ffffff":o.color;for(let M=0;M<c;M++)a.fillText(i,b+M*l,t.height/2);a.shadowBlur=0,a.fillStyle="#ffffff",a.globalAlpha=.7;for(let M=0;M<c;M++)a.fillText(i,b+M*l,t.height/2);a.globalAlpha=1;const u=new G(t);return u.anisotropy=8,u.minFilter=$,u.magFilter=$,u}),[y]),x=f.useMemo(()=>y.map(o=>{const t=document.createElement("canvas");t.width=4096,t.height=400;const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.font=`900 ${o.fontSize*1.1}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const n=o.text,i=a.measureText(n).width,l=Math.ceil((t.width+i)/i),c=(t.width-i*l)/2+i/2;a.shadowColor=o.color,a.shadowBlur=28,a.fillStyle=o.color,a.globalAlpha=.35;for(let u=0;u<l;u++)a.fillText(n,c+u*i,t.height/2);a.globalAlpha=1;const b=new G(t);return b.anisotropy=4,b}),[y]),[d,r]=f.useState(null),s=f.useRef(0);return P((o,t)=>{m.current+=t,s.current+=t,g.current&&y.forEach((a,n)=>{const i=g.current.children[n];if(i){d===n||(i.rotation.y+=t*a.speed);const c=i.children[0];if(c!=null&&c.material){const b=.88+.12*Math.sin(s.current*.7+n*1.2);c.material.opacity=(d===n?1:a.opacity)*b}}})}),e.jsx("group",{ref:g,children:y.map((o,t)=>e.jsxs("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:[e.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),r(t),document.body.style.cursor="pointer"},onPointerOut:()=>{r(null),document.body.style.cursor="auto"},onClick:()=>{},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:p[t],transparent:!0,opacity:o.opacity,side:S,depthWrite:!1,blending:C,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:x[t],transparent:!0,opacity:.22,side:Y,depthWrite:!1,blending:C,toneMapped:!1})]}),e.jsxs("mesh",{children:[e.jsx("torusGeometry",{args:[o.radius,o.bandWidth*.03,6,128]}),e.jsx("meshBasicMaterial",{color:o.color,transparent:!0,opacity:d===t?o.opacity*.18:o.opacity*.04,depthWrite:!1})]})]},t))})};function ot(){const v=f.useMemo(()=>({time:{value:0},colorA:{value:new O(2282478)},colorB:{value:new O(11032055)},colorC:{value:new O(14239471)}}),[]);return P((g,m)=>{v.time.value+=m*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
        `,side:S,transparent:!0,depthWrite:!1,blending:C})]})}function at(){const v=f.useMemo(()=>({time:{value:0}}),[]);return P((g,m)=>{v.time.value+=m*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
        `,side:S,transparent:!0,depthWrite:!1,blending:C})]})}function rt(){const v=f.useRef(),g=f.useMemo(()=>({time:{value:0}}),[]);return P((m,y)=>{g.time.value+=y*.5}),e.jsxs("mesh",{ref:v,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          varying vec3 vPos;
          uniform float time;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vPos;
          uniform float time;

          float polarGlow(vec3 pos) {
            return pow(abs(pos.y / 2.2), 2.5) * 0.6;
          }

          float ambientSparkle(vec3 pos, float t) {
            // Dyson megastructure: no sparkles, only faint structural grid-pulse
            float s = 0.0;
            float angle = atan(pos.z, pos.x);
            float lat = asin(pos.y / 2.2);
            // Barely perceptible grid-node breathing — like distant reactor nodes
            s += pow(sin(angle * 12.0 + t * 1.5) * 0.5 + 0.5, 8.0) * 0.001;
            s += pow(sin(lat * 8.0 - t * 0.8) * 0.5 + 0.5, 10.0) * 0.0005;
            return s;
          }

          void main() {
            float pulse = 0.5 + 0.5 * sin(time * 0.8 + vPos.y * 3.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));
            float sparkle = ambientSparkle(vPos, time * 2.0);

            vec3 cyanBase = vec3(0.0, 0.75, 1.0);
            vec3 purpleAccent = vec3(0.55, 0.25, 0.9);
            float cyanPulse = 0.6 + 0.4 * sin(time * 0.6 + vPos.x * 2.0);
            vec3 col = mix(cyanBase, purpleAccent, 0.25 + 0.15 * sin(time * 0.25));
            col *= (0.7 + 0.3 * cyanPulse);

            float polar = polarGlow(vPos);
            col += polar * vec3(0.1, 0.05, 0.3);
            col += vec3(0.3, 0.6, 0.8) * sparkle * 0.01;

            float alpha = (0.10 + polar * 0.05 + cyanPulse * 0.04) * pulse * fade + sparkle * 0.0005;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function st({gasUniforms:v}){const m=f.useRef(),y=f.useRef(0),p=f.useMemo(()=>{const x=new Float32Array(120),d=new Float32Array(120),r=new Float32Array(120),s=new Float32Array(40);for(let o=0;o<40;o++){const t=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),n=.15+Math.random()*.5;x[o*3]=n*Math.sin(a)*Math.cos(t)*2,x[o*3+1]=n*Math.cos(a)*.7,x[o*3+2]=n*Math.sin(a)*Math.sin(t)*.9,d[o*3]=1.5+Math.random()*5,d[o*3+1]=1+Math.random()*4,d[o*3+2]=1.5+Math.random()*4.5;const i=Math.random();i<.4?(r[o*3]=.1+i*.2,r[o*3+1]=.7+i*.3,r[o*3+2]=.9+i*.1):i<.7?(r[o*3]=.8,r[o*3+1]=.9,r[o*3+2]=1):(r[o*3]=.05,r[o*3+1]=.5+i*.3,r[o*3+2]=.9+i*.1),s[o]=.025+Math.random()*.04}return{positions:x,seeds:d,colors:r,sizes:s}},[]);return P((x,d)=>{var o,t,a,n;y.current+=d;const r=y.current,s=(n=(a=(t=(o=m.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.position)==null?void 0:n.array;if(s){for(let i=0;i<40;i++){const l=p.seeds[i*3],c=p.seeds[i*3+1],b=p.seeds[i*3+2];s[i*3]=p.positions[i*3]+Math.sin(r*l+i*.7)*.05,s[i*3+1]=p.positions[i*3+1]+Math.cos(r*c+i*1.1)*.035,s[i*3+2]=p.positions[i*3+2]+Math.sin(r*b+i*.9)*.04}m.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:m,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function it({flowRef:v}){const g=f.useRef(),m=f.useRef(0),y=f.useMemo(()=>{const x=document.createElement("canvas");x.width=512,x.height=128;const d=x.getContext("2d");return d.clearRect(0,0,512,128),d.font="bold 72px monospace",d.textAlign="center",d.textBaseline="middle",d.fillStyle="#0052FF",d.shadowColor="#0052FF",d.shadowBlur=30,d.fillText("BASE",256,64),d.shadowBlur=0,d.fillText("BASE",256,64),new G(x)},[]);P((x,d)=>{var s;m.current+=d;const r=(v==null?void 0:v.current)||{pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-d*1.6),g.current){g.current.rotation.y=m.current*.08,g.current.rotation.x=Math.sin(m.current*.12)*.08;const o=Math.sin(m.current*1.5),t=Math.sin(m.current*.9)*.03,a=r.pulse,n=1+.04*o+.18*a;g.current.scale.set(n,n,n),g.current.position.y=t;const i=(s=g.current.children[0])==null?void 0:s.material;i&&(i.opacity=.7+.18*o+.18*a)}});const p=f.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((x,d)=>{var r,s;p.time.value+=d*.5,p.flow.value=((r=v==null?void 0:v.current)==null?void 0:r.intensity)||1,p.pulse.value=((s=v==null?void 0:v.current)==null?void 0:s.pulse)||.3}),e.jsxs("group",{ref:g,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:Y})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:S})]}),e.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:e.jsx("spriteMaterial",{map:y,transparent:!0,blending:C,opacity:.85,depthWrite:!1,depthTest:!0})}),e.jsx(st,{gasUniforms:p}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:S})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:S})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:S})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:S})]})]})}function nt(){const m=f.useRef(),y=f.useRef([]),p=f.useRef(0),x=f.useMemo(()=>{const r=new Float32Array(1050),s=new Float32Array(350*3),o=new Float32Array(350);for(let t=0;t<350;t++){const a=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),i=4.8+Math.random()*12;r[t*3]=i*Math.sin(n)*Math.cos(a),r[t*3+1]=i*Math.sin(n)*Math.sin(a),r[t*3+2]=i*Math.cos(n);const l=Math.random();l<.5?(s[t*3]=0,s[t*3+1]=.85,s[t*3+2]=1):l<.8?(s[t*3]=0,s[t*3+1]=.4,s[t*3+2]=1):(s[t*3]=.1,s[t*3+1]=.9,s[t*3+2]=.7),o[t]=.012+Math.random()*.02}return{positions:r,colors:s,sizes:o}},[]),d=f.useMemo(()=>Array.from({length:10},()=>{const r=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),o=5.5+Math.random()*8.5,t=Math.random();let a;return t<.4?a=[0,.82,1]:t<.7?a=[0,.45,.95]:a=[.1,.88,.72],{position:[o*Math.sin(s)*Math.cos(r),o*Math.sin(s)*Math.sin(r),o*Math.cos(s)],scale:1.8+Math.random()*2.5,color:a,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return P((r,s)=>{p.current+=s,m.current&&(m.current.rotation.y=p.current*.008),y.current.forEach((o,t)=>{if(!o)return;const a=d[t],n=p.current;o.position.x=a.position[0]+Math.sin(n*a.rotSpeed+a.phase)*a.bobAmp,o.position.y=a.position[1]+Math.cos(n*a.bobSpeed+a.phase)*a.bobAmp*.6,o.position.z=a.position[2]+Math.sin(n*a.rotSpeed*.7+a.phase*1.3)*a.bobAmp*.4})}),e.jsxs("group",{ref:m,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[x.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
              gl_FragColor = vec4(vColor, g * 0.2);
            }
          `,transparent:!0,depthWrite:!1,blending:C})]}),d.map((r,s)=>e.jsxs("mesh",{ref:o=>y.current[s]=o,position:r.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new O(r.color[0],r.color[1],r.color[2])},scaleVal:{value:r.scale}},vertexShader:`
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
                float alpha = radial * turb * 0.10 * edgeMask;
                if (alpha < 0.002) discard;
                gl_FragColor = vec4(color, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:C,side:J})]},s))]})}function lt({liveData:v,onImpact:g,flowRef:m}){const p=f.useRef(0),x=f.useRef(),d=2.2,r=d*d,s=i=>{var M;const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((M=m==null?void 0:m.current)==null?void 0:M.intensity)||1)),u=(1.6+Math.random()*1)*(.9+.3*b);i[0]=Math.sin(c)*Math.cos(l)*u,i[1]=Math.sin(c)*Math.sin(l)*u,i[2]=Math.cos(c)*u},o=(i,l,c)=>{Math.random()<.5?(i[c*3]=0,i[c*3+1]=.85,i[c*3+2]=1,l[c]=.04+Math.random()*.03):(i[c*3]=0,i[c*3+1]=.4,i[c*3+2]=1,l[c]=.035+Math.random()*.03)},t=f.useMemo(()=>{const i=new Float32Array(156),l=new Float32Array(156),c=new Float32Array(156),b=new Float32Array(52),u=new Float32Array(52),M=new Float32Array(52),E=new Uint8Array(52);for(let A=0;A<52;A++){const w=Math.random()*.08,_=Math.random()*Math.PI*2,T=Math.acos(2*Math.random()-1);i[A*3]=w*Math.sin(T)*Math.cos(_),i[A*3+1]=w*Math.sin(T)*Math.sin(_),i[A*3+2]=w*Math.cos(T);const z=Math.random()*Math.PI*2,F=Math.acos(2*Math.random()-1),N=1.6+Math.random()*1;l[A*3]=Math.sin(F)*Math.cos(z)*N,l[A*3+1]=Math.sin(F)*Math.sin(z)*N,l[A*3+2]=Math.cos(F)*N,o(c,b,A),u[A]=Math.random()*1.5,M[A]=1.8+Math.random()*.8}return{positions:i,velocities:l,colors:c,sizes:b,lifetimes:u,maxLifetimes:M,hit:E}},[]),a=f.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),n=f.useRef(0);return P((i,l)=>{var D,k;p.current+=l,a.time.value=p.current;const c=Math.max(.5,Math.min(1.8,((D=m==null?void 0:m.current)==null?void 0:D.intensity)||1));a.flow.value=c;const b=((k=m==null?void 0:m.current)==null?void 0:k.pulse)>.95&&p.current-n.current>1.2;b&&(n.current=p.current);const{positions:u,velocities:M,colors:E,sizes:A,lifetimes:w,maxLifetimes:_,hit:T}=t,z=[0,0,0];let F=!1,N=b?8:0;for(let h=0;h<52;h++){w[h]+=l;const L=N>0&&w[h]>.15;if(w[h]>=_[h]||L){L&&N--;const I=Math.random()*.08,U=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);u[h*3]=I*Math.sin(W)*Math.cos(U),u[h*3+1]=I*Math.sin(W)*Math.sin(U),u[h*3+2]=I*Math.cos(W),s(z),M[h*3]=z[0],M[h*3+1]=z[1],M[h*3+2]=z[2],o(E,A,h),F=!0,w[h]=0,_[h]=1.8+Math.random()*.8,T[h]=0;continue}const V=Math.sqrt(u[h*3]*u[h*3]+u[h*3+1]*u[h*3+1]+u[h*3+2]*u[h*3+2]),R=V>1.6?(V-1.6)/.6:0;R>0&&(M[h*3]*=1-R*.08,M[h*3+1]*=1-R*.08,M[h*3+2]*=1-R*.08,A[h]=A[h]*(1+R*.8)),u[h*3]+=M[h*3]*l,u[h*3+1]+=M[h*3+1]*l,u[h*3+2]+=M[h*3+2]*l;const H=u[h*3]*u[h*3]+u[h*3+1]*u[h*3+1]+u[h*3+2]*u[h*3+2];if(H>=r)if(T[h])A[h]*=1.06;else{T[h]=1;const I=Math.sqrt(H),U=d/I;u[h*3]*=U,u[h*3+1]*=U,u[h*3+2]*=U,M[h*3]=0,M[h*3+1]=0,M[h*3+2]=0,g&&g({position:new Q(u[h*3],u[h*3+1],u[h*3+2]),intensity:1}),w[h]=_[h]-.8}}x.current&&(x.current.geometry.attributes.position.needsUpdate=!0,F&&(x.current.geometry.attributes.aColor.needsUpdate=!0,x.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:x,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:a,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ct(){const{positions:g,colors:m,sizes:y}=f.useMemo(()=>{const x=new Float32Array(180),d=new Float32Array(180),r=new Float32Array(60);for(let s=0;s<60;s++){const o=Math.acos(-1+2*s/60),t=Math.sqrt(60*Math.PI)*o,a=2.35;x[s*3]=a*Math.cos(t)*Math.sin(o),x[s*3+1]=a*Math.sin(t)*Math.sin(o),x[s*3+2]=a*Math.cos(o);const n=s>=36;if(n)d[s*3]=.133,d[s*3+1]=.827,d[s*3+2]=.933;else{const i=new O().setHSL(.75+Math.random()*.1,.7,.6);d[s*3]=i.r,d[s*3+1]=i.g,d[s*3+2]=i.b}r[s]=n?.09:.055}return{positions:x,colors:d,sizes:r}},[]),p=f.useMemo(()=>({time:{value:0}}),[]);return P((x,d)=>{p.time.value+=d*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[g,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function dt(){const v=f.useRef(),g=f.useMemo(()=>({time:{value:0}}),[]),m=f.useRef(0);P((d,r)=>{m.current+=r,g.time.value=m.current,v.current&&(v.current.rotation.y=m.current*.06)});const{positions:y,colors:p,sizes:x}=f.useMemo(()=>{const r=new Float32Array(150),s=new Float32Array(150),o=new Float32Array(50);for(let t=0;t<50;t++){const a=t/50*Math.PI*2,n=t%3,i=2.55+n*.22,l=.15*n;r[t*3]=i*Math.cos(a),r[t*3+1]=i*Math.sin(a)*Math.sin(l),r[t*3+2]=i*Math.sin(a)*Math.cos(l);const c=t/50;s[t*3]=.659*(1-c)+.133*c,s[t*3+1]=.333*(1-c)+.827*c,s[t*3+2]=.969*(1-c)+.933*c,o[t]=.015+Math.random()*.025}return{positions:r,colors:s,sizes:o}},[]);return e.jsx("group",{ref:v,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function ut(){const v=f.useRef(),g=f.useRef(0),{positions:m,colors:y,sizes:p}=f.useMemo(()=>{const r=new Float32Array(6),s=new Float32Array(6),o=new Float32Array(2);for(let t=0;t<2;t++){const a=t/2*Math.PI*2+Math.random()*.5,n=4+Math.random()*2;r[t*3]=n*Math.cos(a),r[t*3+1]=(Math.random()-.5)*3,r[t*3+2]=n*Math.sin(a);const i=Math.random();i<.4?(s[t*3]=.13,s[t*3+1]=.82,s[t*3+2]=.93):i<.7?(s[t*3]=.84,s[t*3+1]=.27,s[t*3+2]=.93):(s[t*3]=.83,s[t*3+1]=.66,s[t*3+2]=.32),o[t]=.03+Math.random()*.02}return{positions:r,colors:s,sizes:o}},[]),x=f.useMemo(()=>({time:{value:0}}),[]);return P((d,r)=>{var o,t,a;g.current+=r,x.time.value=g.current,v.current&&(v.current.rotation.y=g.current*.02);const s=(a=(t=(o=v.current)==null?void 0:o.geometry)==null?void 0:t.attributes)==null?void 0:a.aSize;if(s){for(let n=0;n<2;n++)s.array[n]=.02+.02*Math.sin(g.current*2+n*1.5);s.needsUpdate=!0}}),e.jsxs("points",{ref:v,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function ht(){const g=f.useRef();f.useRef([]);const m=f.useRef(0),y=f.useMemo(()=>{const d=new Float32Array(1200),r=new Float32Array(400*3),s=new Float32Array(400),o=()=>Math.random();for(let t=0;t<400;t++){const a=o()*Math.PI*2,n=Math.acos(2*o()-1),i=o();let l,c;i<.45?(l=6+o()*6,c=.03):i<.8?(l=12+o()*8,c=.02):(l=20+o()*8,c=.015),d[t*3]=l*Math.sin(n)*Math.cos(a),d[t*3+1]=l*Math.sin(n)*Math.sin(a),d[t*3+2]=l*Math.cos(n);const b=o();b<.4?(r[t*3]=.95,r[t*3+1]=.97,r[t*3+2]=1):b<.55?(r[t*3]=.3,r[t*3+1]=.95,r[t*3+2]=1):b<.68?(r[t*3]=1,r[t*3+1]=1,r[t*3+2]=1):b<.78?(r[t*3]=.6,r[t*3+1]=.8,r[t*3+2]=1):b<.88?(r[t*3]=.95,r[t*3+1]=.35,r[t*3+2]=.9):(r[t*3]=1,r[t*3+1]=.82,r[t*3+2]=.55),s[t]=c+o()*.015}return{positions:d,colors:r,sizes:s}},[]),p=f.useMemo(()=>{const r=new Float32Array(36),s=new Float32Array(36),o=new Float32Array(12),t=new Float32Array(24),a=()=>Math.random();for(let n=0;n<12;n++){const i=a()*Math.PI*2,l=Math.acos(2*a()-1),c=a()<.65?6+a()*8:14+a()*9;r[n*3]=c*Math.sin(l)*Math.cos(i),r[n*3+1]=c*Math.sin(l)*Math.sin(i),r[n*3+2]=c*Math.cos(l);const b=a();let u=[0,.8,1];b<.25?u=[0,.82,1]:b<.45?u=[.1,.92,.7]:b<.6?u=[.05,.55,.95]:b<.78?u=[.15,.75,.88]:u=[.35,.15,.8],s[n*3]=u[0],s[n*3+1]=u[1],s[n*3+2]=u[2],o[n]=120+a()*140,t[n*2]=2+a()*3,t[n*2+1]=a()*100}return{positions:r,colors:s,sizes:o,noise:t}},[]);return P((d,r)=>{m.current+=r;const s=m.current;g.current&&(g.current.rotation.y=s*.0018,g.current.rotation.x=Math.sin(s*.0012)*.012)}),e.jsxs("group",{ref:g,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
            attribute float aSize;
            attribute vec3 aColor;
            varying vec3 vColor;
            varying float vDist;
            void main() {
              vColor = aColor;
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vDist = -mv.z;
              gl_PointSize = aSize * (500.0 / vDist);
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]}),e.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[p.noise,2]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
              gl_PointSize = aSize * (400.0 / vDist);
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
              float alpha = radial * (0.35 + filaments * 0.65) * 0.12 * edgeMask;
              if (alpha < 0.001) discard;

              float distFade = clamp(1.0 - (vDist - 6.0) / 28.0, 0.3, 1.0);
              alpha *= distFade;

              vec3 col = vColor + vec3(filaments * 0.1, n * 0.05, filaments * 0.08);
              gl_FragColor = vec4(col, alpha);
            }
          `,transparent:!0,depthWrite:!1,blending:C})]})]})}function gt({liveData:v,paused:g}){const m=f.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=f.useCallback(o=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(o)},[]),p=f.useRef({intensity:1,pulse:.4,block:null});f.useEffect(()=>{const o=()=>{const a=v||{},n=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,i=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let l=.9+Math.min(n/500,.5)+Math.min(i/50,.25)+Math.random()*.15;l=Math.max(.6,Math.min(1.8,l));const c=p.current;c.intensity=l,a.block&&a.block!=="—"&&a.block!==c.block?(c.block=a.block,c.pulse=1):c.pulse=Math.max(.3,(c.pulse||.3)*.94)};o();const t=setInterval(o,400);return()=>clearInterval(t)},[v]);const x=f.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),d=f.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),r=f.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),s=f.useMemo(()=>[1,1.5],[]);return e.jsxs(q,{camera:x,gl:d,onCreated:({gl:o})=>o.setClearColor(0,0),style:r,dpr:s,frameloop:g?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(it,{flowRef:p}),e.jsx(rt,{}),e.jsx(lt,{liveData:v,onImpact:y,flowRef:p}),e.jsx(ot,{}),e.jsx(at,{}),e.jsx(ct,{}),e.jsx(et,{liveData:v}),e.jsx(dt,{}),e.jsx(tt,{})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),e.jsx(B,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(B,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(B,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(nt,{}),e.jsx(ut,{})]}),e.jsx(X,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{gt as default};
