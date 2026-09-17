import{j as e,r as v,u as P,C as $,S as D,O as q}from"./r3f-Cah4C2bQ.js";import{u as X}from"./index-CrgQ794b.js";import{p as C,e as O,q as K,F as _,r as Q,s as H,D as Y,h as Z}from"./three-C2wmJeoR.js";import"./gsap-CzGW6FVa.js";const S=500;function J({reputationParticles:h}){const g=v.useRef();h.length;const{positions:m,colors:M,sizes:p,alphas:x,types:f}=v.useMemo(()=>{const r=new Float32Array(S*3),o=new Float32Array(S*3),a=new Float32Array(S),t=new Float32Array(S),s=new Float32Array(S);for(let i=0;i<S;i++)r[i*3]=0,r[i*3+1]=0,r[i*3+2]=0,o[i*3]=0,o[i*3+1]=0,o[i*3+2]=0,a[i]=0,t[i]=0,s[i]=0;return{positions:r,colors:o,sizes:a,alphas:t,types:s}},[]);return P((r,o)=>{if(!g.current)return;const{positions:a,colors:t,sizes:s,alphas:i,types:n}=g.current.geometry.attributes;for(let l=0;l<Math.min(h.length,S);l++){const u=h[l];a.array[l*3]=u.position[0],a.array[l*3+1]=u.position[1],a.array[l*3+2]=u.position[2];const b=new O(u.color);t.array[l*3]=b.r,t.array[l*3+1]=b.g,t.array[l*3+2]=b.b;const c=u.age/u.maxAge,y=c<.1?c/.1:1,E=c>.7?(1-c)/.3:1,A=Math.min(y,E);s.array[l]=u.size*(1+c*.5)*A,i.array[l]=A*(.6+.4*Math.sin(Date.now()*.003+l)),n.array[l]=u.isBatch?1:0}for(let l=h.length;l<S;l++)i.array[l]=0,s.array[l]=0;a.needsUpdate=!0,t.needsUpdate=!0,s.needsUpdate=!0,i.needsUpdate=!0,n.needsUpdate=!0}),e.jsxs("points",{ref:g,renderOrder:15,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]}),e.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[x,1]}),e.jsx("bufferAttribute",{attach:"attributes-aType",args:[f,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function tt(){const h=X();return h.length===0?null:e.jsx(J,{reputationParticles:h})}const et=({liveData:h})=>{const g=v.useRef(),m=v.useRef(0),M=v.useMemo(()=>{const o=h||{};return[{radius:2,tilt:.15,yOffset:.4,speed:.015,bandWidth:.18,color:"#ffffff",opacity:.85,fontSize:30,text:"   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   "},{radius:1.7,tilt:-.1,yOffset:0,speed:-.025,bandWidth:.14,color:"#d946ef",opacity:.8,fontSize:24,text:"   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   "},{radius:1.4,tilt:.06,yOffset:-.4,speed:.035,bandWidth:.1,color:"#22d3ee",opacity:.75,fontSize:20,text:`   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   `}]},[h]),p=v.useMemo(()=>M.map(o=>{const a=document.createElement("canvas");a.width=2048,a.height=64;const t=a.getContext("2d");t.clearRect(0,0,a.width,a.height);const s=`900 ${o.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;t.font=s,t.textAlign="center",t.textBaseline="middle";const i=o.text,n=t.measureText(i).width,l=Math.ceil((a.width+n)/n),u=(a.width-n*l)/2+n/2;t.shadowColor=o.color,t.shadowBlur=32,t.fillStyle=o.color,t.globalAlpha=.4;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=14,t.globalAlpha=.7;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=3,t.globalAlpha=1,t.fillStyle=o.color;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=0,t.fillStyle="#ffffff",t.globalAlpha=.55;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.globalAlpha=1;const b=new Q(a);return b.anisotropy=4,b.minFilter=H,b.magFilter=H,b}),[M]),[x,f]=v.useState(null),r=v.useRef(0);return P((o,a)=>{m.current+=a,r.current+=a,g.current&&M.forEach((t,s)=>{const i=g.current.children[s];if(i){x===s||(i.rotation.y+=a*t.speed);const l=i.children[0];if(l!=null&&l.material){const u=.88+.12*Math.sin(r.current*.6+s*1.5);l.material.opacity=(x===s?1:t.opacity)*u}}})}),e.jsx("group",{ref:g,children:M.map((o,a)=>e.jsx("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:e.jsxs("mesh",{onPointerOver:t=>{t.stopPropagation(),f(a),document.body.style.cursor="pointer"},onPointerOut:()=>{f(null),document.body.style.cursor="auto"},onClick:()=>{},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:p[a],transparent:!0,opacity:o.opacity,side:Y,depthWrite:!1,blending:C,toneMapped:!1})]})},a))})};function ot(){const h=v.useMemo(()=>({time:{value:0},colorA:{value:new O(2282478)},colorB:{value:new O(11032055)},colorC:{value:new O(14239471)}}),[]);return P((g,m)=>{h.time.value+=m*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:C})]})}function at(){const h=v.useMemo(()=>({time:{value:0}}),[]);return P((g,m)=>{h.time.value+=m*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:_,transparent:!0,depthWrite:!1,blending:C})]})}function rt(){const h=v.useRef(),g=v.useMemo(()=>({time:{value:0}}),[]);return P((m,M)=>{g.time.value+=M*.5}),e.jsxs("mesh",{ref:h,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function st({gasUniforms:h}){const m=v.useRef(),M=v.useRef(0),p=v.useMemo(()=>{const x=new Float32Array(120),f=new Float32Array(120),r=new Float32Array(120),o=new Float32Array(40);for(let a=0;a<40;a++){const t=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),i=.15+Math.random()*.5;x[a*3]=i*Math.sin(s)*Math.cos(t)*2,x[a*3+1]=i*Math.cos(s)*.7,x[a*3+2]=i*Math.sin(s)*Math.sin(t)*.9,f[a*3]=1.5+Math.random()*5,f[a*3+1]=1+Math.random()*4,f[a*3+2]=1.5+Math.random()*4.5;const n=Math.random();n<.4?(r[a*3]=.1+n*.2,r[a*3+1]=.7+n*.3,r[a*3+2]=.9+n*.1):n<.7?(r[a*3]=.8,r[a*3+1]=.9,r[a*3+2]=1):(r[a*3]=.05,r[a*3+1]=.5+n*.3,r[a*3+2]=.9+n*.1),o[a]=.025+Math.random()*.04}return{positions:x,seeds:f,colors:r,sizes:o}},[]);return P((x,f)=>{var a,t,s,i;M.current+=f;const r=M.current,o=(i=(s=(t=(a=m.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:s.position)==null?void 0:i.array;if(o){for(let n=0;n<40;n++){const l=p.seeds[n*3],u=p.seeds[n*3+1],b=p.seeds[n*3+2];o[n*3]=p.positions[n*3]+Math.sin(r*l+n*.7)*.05,o[n*3+1]=p.positions[n*3+1]+Math.cos(r*u+n*1.1)*.035,o[n*3+2]=p.positions[n*3+2]+Math.sin(r*b+n*.9)*.04}m.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:m,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function it({flowRef:h}){const g=v.useRef(),m=v.useRef(0),M=v.useMemo(()=>{const s=-.6880000000000001;return[{pos:[s+.32/2,0,0],size:[.32,.32,.1]},{pos:[s+.1344/2,.2272,0],size:[.1344,.1344,.1]},{pos:[s+.32+.032+.32/2,0,0],size:[.32,.32,.1]},{pos:[s+2*(.32+.032)+.32/2,0,0],size:[.32,.32,.1]},{pos:[s+3*(.32+.032)+.32/2,0,0],size:[.32,.32,.1]}]},[]);P((x,f)=>{m.current+=f;const r=(h==null?void 0:h.current)||{pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-f*1.6),g.current){g.current.rotation.y=m.current*.08,g.current.rotation.x=Math.sin(m.current*.12)*.08;const o=Math.sin(m.current*1.5),a=Math.sin(m.current*.9)*.03,t=r.pulse,s=1+.04*o+.18*t;g.current.scale.set(s,s,s),g.current.position.y=a;const i=g.current.children[0];i!=null&&i.isGroup&&i.children.forEach(n=>{n!=null&&n.material&&(n.material.opacity=.65+.2*o+.2*t)})}});const p=v.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((x,f)=>{var r,o;p.time.value+=f*.5,p.flow.value=((r=h==null?void 0:h.current)==null?void 0:r.intensity)||1,p.pulse.value=((o=h==null?void 0:h.current)==null?void 0:o.pulse)||.3}),e.jsxs("group",{ref:g,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:K})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:_})]}),e.jsx("group",{renderOrder:-1,children:M.map((x,f)=>e.jsxs("mesh",{position:x.pos,children:[e.jsx("boxGeometry",{args:x.size}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.85,blending:C,depthWrite:!1,toneMapped:!1})]},f))}),e.jsx(st,{gasUniforms:p}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:_})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:_})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:_})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:_})]})]})}function nt(){const m=v.useRef(),M=v.useRef([]),p=v.useRef(0),x=v.useMemo(()=>{const r=new Float32Array(600),o=new Float32Array(600),a=new Float32Array(200);for(let t=0;t<200;t++){const s=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),n=4.8+Math.random()*12;r[t*3]=n*Math.sin(i)*Math.cos(s),r[t*3+1]=n*Math.sin(i)*Math.sin(s),r[t*3+2]=n*Math.cos(i);const l=Math.random();l<.5?(o[t*3]=0,o[t*3+1]=.85,o[t*3+2]=1):l<.8?(o[t*3]=0,o[t*3+1]=.4,o[t*3+2]=1):(o[t*3]=.1,o[t*3+1]=.9,o[t*3+2]=.7),a[t]=.012+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),f=v.useMemo(()=>Array.from({length:6},()=>{const r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=5.5+Math.random()*8.5,t=Math.random();let s;return t<.4?s=[0,.82,1]:t<.7?s=[0,.45,.95]:s=[.1,.88,.72],{position:[a*Math.sin(o)*Math.cos(r),a*Math.sin(o)*Math.sin(r),a*Math.cos(o)],scale:1.8+Math.random()*2.5,color:s,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return P((r,o)=>{p.current+=o,m.current&&(m.current.rotation.y=p.current*.008),M.current.forEach((a,t)=>{if(!a)return;const s=f[t],i=p.current;a.position.x=s.position[0]+Math.sin(i*s.rotSpeed+s.phase)*s.bobAmp,a.position.y=s.position[1]+Math.cos(i*s.bobSpeed+s.phase)*s.bobAmp*.6,a.position.z=s.position[2]+Math.sin(i*s.rotSpeed*.7+s.phase*1.3)*s.bobAmp*.4})}),e.jsxs("group",{ref:m,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[x.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),f.map((r,o)=>e.jsxs("mesh",{ref:a=>M.current[o]=a,position:r.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new O(r.color[0],r.color[1],r.color[2])},scaleVal:{value:r.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:C,side:Y})]},o))]})}function lt({liveData:h,onImpact:g,flowRef:m}){const p=v.useRef(0),x=v.useRef(),f=2.2,r=f*f,o=n=>{var y;const l=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((y=m==null?void 0:m.current)==null?void 0:y.intensity)||1)),c=(1.6+Math.random()*1)*(.9+.3*b);n[0]=Math.sin(u)*Math.cos(l)*c,n[1]=Math.sin(u)*Math.sin(l)*c,n[2]=Math.cos(u)*c},a=(n,l,u)=>{Math.random()<.5?(n[u*3]=0,n[u*3+1]=.85,n[u*3+2]=1,l[u]=.04+Math.random()*.03):(n[u*3]=0,n[u*3+1]=.4,n[u*3+2]=1,l[u]=.035+Math.random()*.03)},t=v.useMemo(()=>{const n=new Float32Array(105),l=new Float32Array(105),u=new Float32Array(105),b=new Float32Array(35),c=new Float32Array(35),y=new Float32Array(35),E=new Uint8Array(35);for(let A=0;A<35;A++){const j=Math.random()*.08,T=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1);n[A*3]=j*Math.sin(w)*Math.cos(T),n[A*3+1]=j*Math.sin(w)*Math.sin(T),n[A*3+2]=j*Math.cos(w);const z=Math.random()*Math.PI*2,F=Math.acos(2*Math.random()-1),N=1.6+Math.random()*1;l[A*3]=Math.sin(F)*Math.cos(z)*N,l[A*3+1]=Math.sin(F)*Math.sin(z)*N,l[A*3+2]=Math.cos(F)*N,a(u,b,A),c[A]=Math.random()*1.5,y[A]=1.8+Math.random()*.8}return{positions:n,velocities:l,colors:u,sizes:b,lifetimes:c,maxLifetimes:y,hit:E}},[]),s=v.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),i=v.useRef(0);return P((n,l)=>{var k,G;p.current+=l,s.time.value=p.current;const u=Math.max(.5,Math.min(1.8,((k=m==null?void 0:m.current)==null?void 0:k.intensity)||1));s.flow.value=u;const b=((G=m==null?void 0:m.current)==null?void 0:G.pulse)>.95&&p.current-i.current>1.2;b&&(i.current=p.current);const{positions:c,velocities:y,colors:E,sizes:A,lifetimes:j,maxLifetimes:T,hit:w}=t,z=[0,0,0];let F=!1,N=b?8:0;for(let d=0;d<35;d++){j[d]+=l;const L=N>0&&j[d]>.15;if(j[d]>=T[d]||L){L&&N--;const I=Math.random()*.08,U=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);c[d*3]=I*Math.sin(W)*Math.cos(U),c[d*3+1]=I*Math.sin(W)*Math.sin(U),c[d*3+2]=I*Math.cos(W),o(z),y[d*3]=z[0],y[d*3+1]=z[1],y[d*3+2]=z[2],a(E,A,d),F=!0,j[d]=0,T[d]=1.8+Math.random()*.8,w[d]=0;continue}const V=Math.sqrt(c[d*3]*c[d*3]+c[d*3+1]*c[d*3+1]+c[d*3+2]*c[d*3+2]),R=V>1.6?(V-1.6)/.6:0;R>0&&(y[d*3]*=1-R*.08,y[d*3+1]*=1-R*.08,y[d*3+2]*=1-R*.08,A[d]=A[d]*(1+R*.8)),c[d*3]+=y[d*3]*l,c[d*3+1]+=y[d*3+1]*l,c[d*3+2]+=y[d*3+2]*l;const B=c[d*3]*c[d*3]+c[d*3+1]*c[d*3+1]+c[d*3+2]*c[d*3+2];if(B>=r)if(w[d])A[d]*=1.06;else{w[d]=1;const I=Math.sqrt(B),U=f/I;c[d*3]*=U,c[d*3+1]*=U,c[d*3+2]*=U,y[d*3]=0,y[d*3+1]=0,y[d*3+2]=0,g&&g({position:new Z(c[d*3],c[d*3+1],c[d*3+2]),intensity:1}),j[d]=T[d]-.8}}x.current&&(x.current.geometry.attributes.position.needsUpdate=!0,F&&(x.current.geometry.attributes.aColor.needsUpdate=!0,x.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:x,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ct(){const{positions:g,colors:m,sizes:M}=v.useMemo(()=>{const x=new Float32Array(135),f=new Float32Array(135),r=new Float32Array(45);for(let o=0;o<45;o++){const a=Math.acos(-1+2*o/45),t=Math.sqrt(45*Math.PI)*a,s=2.35;x[o*3]=s*Math.cos(t)*Math.sin(a),x[o*3+1]=s*Math.sin(t)*Math.sin(a),x[o*3+2]=s*Math.cos(a);const i=o>=36;if(i)f[o*3]=.133,f[o*3+1]=.827,f[o*3+2]=.933;else{const n=new O().setHSL(.75+Math.random()*.1,.7,.6);f[o*3]=n.r,f[o*3+1]=n.g,f[o*3+2]=n.b}r[o]=i?.09:.055}return{positions:x,colors:f,sizes:r}},[]),p=v.useMemo(()=>({time:{value:0}}),[]);return P((x,f)=>{p.time.value+=f*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[g,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ut(){const h=v.useRef(),g=v.useMemo(()=>({time:{value:0}}),[]),m=v.useRef(0);P((f,r)=>{m.current+=r,g.time.value=m.current,h.current&&(h.current.rotation.y=m.current*.06)});const{positions:M,colors:p,sizes:x}=v.useMemo(()=>{const r=new Float32Array(90),o=new Float32Array(90),a=new Float32Array(30);for(let t=0;t<30;t++){const s=t/30*Math.PI*2,i=t%3,n=2.55+i*.22,l=.15*i;r[t*3]=n*Math.cos(s),r[t*3+1]=n*Math.sin(s)*Math.sin(l),r[t*3+2]=n*Math.sin(s)*Math.cos(l);const u=t/30;o[t*3]=.659*(1-u)+.133*u,o[t*3+1]=.333*(1-u)+.827*u,o[t*3+2]=.969*(1-u)+.933*u,a[t]=.015+Math.random()*.025}return{positions:r,colors:o,sizes:a}},[]);return e.jsx("group",{ref:h,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function dt(){const h=v.useRef(),g=v.useRef(0),{positions:m,colors:M,sizes:p}=v.useMemo(()=>{const r=new Float32Array(6),o=new Float32Array(6),a=new Float32Array(2);for(let t=0;t<2;t++){const s=t/2*Math.PI*2+Math.random()*.5,i=4+Math.random()*2;r[t*3]=i*Math.cos(s),r[t*3+1]=(Math.random()-.5)*3,r[t*3+2]=i*Math.sin(s);const n=Math.random();n<.4?(o[t*3]=.13,o[t*3+1]=.82,o[t*3+2]=.93):n<.7?(o[t*3]=.84,o[t*3+1]=.27,o[t*3+2]=.93):(o[t*3]=.83,o[t*3+1]=.66,o[t*3+2]=.32),a[t]=.03+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),x=v.useMemo(()=>({time:{value:0}}),[]);return P((f,r)=>{var a,t,s;g.current+=r,x.time.value=g.current,h.current&&(h.current.rotation.y=g.current*.02);const o=(s=(t=(a=h.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:s.aSize;if(o){for(let i=0;i<2;i++)o.array[i]=.02+.02*Math.sin(g.current*2+i*1.5);o.needsUpdate=!0}}),e.jsxs("points",{ref:h,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function vt(){const g=v.useRef();v.useRef([]);const m=v.useRef(0),M=v.useMemo(()=>{const f=new Float32Array(1200),r=new Float32Array(400*3),o=new Float32Array(400),a=()=>Math.random();for(let t=0;t<400;t++){const s=a()*Math.PI*2,i=Math.acos(2*a()-1),n=a();let l,u;n<.45?(l=6+a()*6,u=.03):n<.8?(l=12+a()*8,u=.02):(l=20+a()*8,u=.015),f[t*3]=l*Math.sin(i)*Math.cos(s),f[t*3+1]=l*Math.sin(i)*Math.sin(s),f[t*3+2]=l*Math.cos(i);const b=a();b<.4?(r[t*3]=.95,r[t*3+1]=.97,r[t*3+2]=1):b<.55?(r[t*3]=.3,r[t*3+1]=.95,r[t*3+2]=1):b<.68?(r[t*3]=1,r[t*3+1]=1,r[t*3+2]=1):b<.78?(r[t*3]=.6,r[t*3+1]=.8,r[t*3+2]=1):b<.88?(r[t*3]=.95,r[t*3+1]=.35,r[t*3+2]=.9):(r[t*3]=1,r[t*3+1]=.82,r[t*3+2]=.55),o[t]=u+a()*.015}return{positions:f,colors:r,sizes:o}},[]),p=v.useMemo(()=>{const r=new Float32Array(36),o=new Float32Array(36),a=new Float32Array(12),t=new Float32Array(24),s=()=>Math.random();for(let i=0;i<12;i++){const n=s()*Math.PI*2,l=Math.acos(2*s()-1),u=s()<.65?6+s()*8:14+s()*9;r[i*3]=u*Math.sin(l)*Math.cos(n),r[i*3+1]=u*Math.sin(l)*Math.sin(n),r[i*3+2]=u*Math.cos(l);const b=s();let c=[0,.8,1];b<.25?c=[0,.82,1]:b<.45?c=[.1,.92,.7]:b<.6?c=[.05,.55,.95]:b<.78?c=[.15,.75,.88]:c=[.35,.15,.8],o[i*3]=c[0],o[i*3+1]=c[1],o[i*3+2]=c[2],a[i]=120+s()*140,t[i*2]=2+s()*3,t[i*2+1]=s()*100}return{positions:r,colors:o,sizes:a,noise:t}},[]);return P((f,r)=>{m.current+=r;const o=m.current;g.current&&(g.current.rotation.y=o*.0018,g.current.rotation.x=Math.sin(o*.0012)*.012)}),e.jsxs("group",{ref:g,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})]})}function gt({liveData:h,paused:g}){const m=v.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=v.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]),p=v.useRef({intensity:1,pulse:.4,block:null});v.useEffect(()=>{const a=()=>{const s=h||{},i=parseFloat(String(s.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(s.gas||"").replace(/[^0-9.]/g,""))||0;let l=.9+Math.min(i/500,.5)+Math.min(n/50,.25)+Math.random()*.15;l=Math.max(.6,Math.min(1.8,l));const u=p.current;u.intensity=l,s.block&&s.block!=="—"&&s.block!==u.block?(u.block=s.block,u.pulse=1):u.pulse=Math.max(.3,(u.pulse||.3)*.94)};a();const t=setInterval(a,400);return()=>clearInterval(t)},[h]);const x=v.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),f=v.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),r=v.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),o=v.useMemo(()=>[1,1.5],[]);return e.jsxs($,{camera:x,gl:f,onCreated:({gl:a})=>a.setClearColor(0,0),style:r,dpr:o,frameloop:g?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(it,{flowRef:p}),e.jsx(rt,{}),e.jsx(lt,{liveData:h,onImpact:M,flowRef:p}),e.jsx(ot,{}),e.jsx(at,{}),e.jsx(ct,{}),e.jsx(et,{liveData:h}),e.jsx(ut,{}),e.jsx(tt,{})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(vt,{}),e.jsx(D,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(D,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(D,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(nt,{}),e.jsx(dt,{})]}),e.jsx(q,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{gt as default};
