import{j as e,r as p,u as P,C as $,S as D,O as q}from"./r3f-Cah4C2bQ.js";import{u as X}from"./index-DIgnk63z.js";import{p as y,e as O,q as K,F as w,r as Y,s as G,D as J,h as Q}from"./three-C2wmJeoR.js";import"./gsap-CzGW6FVa.js";const S=500;function Z({reputationParticles:h}){const x=p.useRef();h.length;const{positions:m,colors:M,sizes:f,alphas:g,types:d}=p.useMemo(()=>{const r=new Float32Array(S*3),o=new Float32Array(S*3),a=new Float32Array(S),t=new Float32Array(S),s=new Float32Array(S);for(let i=0;i<S;i++)r[i*3]=0,r[i*3+1]=0,r[i*3+2]=0,o[i*3]=0,o[i*3+1]=0,o[i*3+2]=0,a[i]=0,t[i]=0,s[i]=0;return{positions:r,colors:o,sizes:a,alphas:t,types:s}},[]);return P((r,o)=>{if(!x.current)return;const{positions:a,colors:t,sizes:s,alphas:i,types:n}=x.current.geometry.attributes;for(let l=0;l<Math.min(h.length,S);l++){const u=h[l];a.array[l*3]=u.position[0],a.array[l*3+1]=u.position[1],a.array[l*3+2]=u.position[2];const b=new O(u.color);t.array[l*3]=b.r,t.array[l*3+1]=b.g,t.array[l*3+2]=b.b;const c=u.age/u.maxAge,C=c<.1?c/.1:1,E=c>.7?(1-c)/.3:1,A=Math.min(C,E);s.array[l]=u.size*(1+c*.5)*A,i.array[l]=A*(.6+.4*Math.sin(Date.now()*.003+l)),n.array[l]=u.isBatch?1:0}for(let l=h.length;l<S;l++)i.array[l]=0,s.array[l]=0;a.needsUpdate=!0,t.needsUpdate=!0,s.needsUpdate=!0,i.needsUpdate=!0,n.needsUpdate=!0}),e.jsxs("points",{ref:x,renderOrder:15,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]}),e.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[g,1]}),e.jsx("bufferAttribute",{attach:"attributes-aType",args:[d,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:y})]})}function tt(){const h=X();return h.length===0?null:e.jsx(Z,{reputationParticles:h})}const et=({liveData:h})=>{const x=p.useRef(),m=p.useRef(0),M=p.useMemo(()=>{const o=h||{};return[{radius:2.15,tilt:.12,yOffset:.5,speed:.012,bandWidth:.28,color:"#ffffff",opacity:.85,fontSize:42,text:"   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   "},{radius:1.85,tilt:-.08,yOffset:0,speed:-.018,bandWidth:.22,color:"#d946ef",opacity:.8,fontSize:34,text:"   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   "},{radius:1.55,tilt:.05,yOffset:-.5,speed:.025,bandWidth:.16,color:"#22d3ee",opacity:.75,fontSize:28,text:`   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   `}]},[h]),f=p.useMemo(()=>M.map(o=>{const a=document.createElement("canvas");a.width=2048,a.height=96;const t=a.getContext("2d");t.clearRect(0,0,a.width,a.height);const s=`900 ${o.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;t.font=s,t.textAlign="center",t.textBaseline="middle";const i=o.text,n=t.measureText(i).width,l=Math.ceil((a.width+n)/n),u=(a.width-n*l)/2+n/2;t.shadowColor=o.color,t.shadowBlur=40,t.fillStyle=o.color,t.globalAlpha=.4;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=16,t.globalAlpha=.7;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=3,t.globalAlpha=1,t.fillStyle=o.color;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.shadowBlur=0,t.fillStyle="#ffffff",t.globalAlpha=.55;for(let c=0;c<l;c++)t.fillText(i,u+c*n,a.height/2);t.globalAlpha=1;const b=new Y(a);return b.anisotropy=4,b.minFilter=G,b.magFilter=G,b}),[M]),[g,d]=p.useState(null),r=p.useRef(0);return P((o,a)=>{m.current+=a,r.current+=a,x.current&&M.forEach((t,s)=>{const i=x.current.children[s];if(i){g===s||(i.rotation.y+=a*t.speed);const l=i.children[0];if(l!=null&&l.material){const u=.88+.12*Math.sin(r.current*.6+s*1.5);l.material.opacity=(g===s?1:t.opacity)*u}}})}),e.jsx("group",{ref:x,children:M.map((o,a)=>e.jsx("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:e.jsxs("mesh",{onPointerOver:t=>{t.stopPropagation(),d(a),document.body.style.cursor="pointer"},onPointerOut:()=>{d(null),document.body.style.cursor="auto"},onClick:()=>{},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:f[a],transparent:!0,opacity:o.opacity,side:w,depthWrite:!1,blending:y,toneMapped:!1})]})},a))})};function ot(){const h=p.useMemo(()=>({time:{value:0},colorA:{value:new O(2282478)},colorB:{value:new O(11032055)},colorC:{value:new O(14239471)}}),[]);return P((x,m)=>{h.time.value+=m*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:w,transparent:!0,depthWrite:!1,blending:y})]})}function at(){const h=p.useMemo(()=>({time:{value:0}}),[]);return P((x,m)=>{h.time.value+=m*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:w,transparent:!0,depthWrite:!1,blending:y})]})}function rt(){const h=p.useRef(),x=p.useMemo(()=>({time:{value:0}}),[]);return P((m,M)=>{x.time.value+=M*.5}),e.jsxs("mesh",{ref:h,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
            // No sparkles — clean structural grid only
            return 0.0;
          }

          void main() {
            float pulse = 0.5 + 0.5 * sin(time * 0.8 + vPos.y * 3.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));
            float sparkle = ambientSparkle(vPos, time * 2.0);

            vec3 cyanBase = vec3(0.0, 0.85, 1.0);
            vec3 purpleAccent = vec3(0.65, 0.33, 0.97);
            float cyanPulse = 0.6 + 0.4 * sin(time * 0.6 + vPos.x * 2.0);
            vec3 col = mix(cyanBase, purpleAccent, 0.3 + 0.2 * sin(time * 0.25));
            col *= (0.8 + 0.2 * cyanPulse);

            float polar = polarGlow(vPos);
            col += polar * vec3(0.15, 0.08, 0.35);
            col += vec3(0.3, 0.6, 0.8) * sparkle * 0.01;

            float alpha = (0.18 + polar * 0.08 + cyanPulse * 0.06) * pulse * fade + sparkle * 0.0005;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function st({gasUniforms:h}){const m=p.useRef(),M=p.useRef(0),f=p.useMemo(()=>{const g=new Float32Array(120),d=new Float32Array(120),r=new Float32Array(120),o=new Float32Array(40);for(let a=0;a<40;a++){const t=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),i=.15+Math.random()*.5;g[a*3]=i*Math.sin(s)*Math.cos(t)*2,g[a*3+1]=i*Math.cos(s)*.7,g[a*3+2]=i*Math.sin(s)*Math.sin(t)*.9,d[a*3]=1.5+Math.random()*5,d[a*3+1]=1+Math.random()*4,d[a*3+2]=1.5+Math.random()*4.5;const n=Math.random();n<.4?(r[a*3]=.1+n*.2,r[a*3+1]=.7+n*.3,r[a*3+2]=.9+n*.1):n<.7?(r[a*3]=.8,r[a*3+1]=.9,r[a*3+2]=1):(r[a*3]=.05,r[a*3+1]=.5+n*.3,r[a*3+2]=.9+n*.1),o[a]=.025+Math.random()*.04}return{positions:g,seeds:d,colors:r,sizes:o}},[]);return P((g,d)=>{var a,t,s,i;M.current+=d;const r=M.current,o=(i=(s=(t=(a=m.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:s.position)==null?void 0:i.array;if(o){for(let n=0;n<40;n++){const l=f.seeds[n*3],u=f.seeds[n*3+1],b=f.seeds[n*3+2];o[n*3]=f.positions[n*3]+Math.sin(r*l+n*.7)*.05,o[n*3+1]=f.positions[n*3+1]+Math.cos(r*u+n*1.1)*.035,o[n*3+2]=f.positions[n*3+2]+Math.sin(r*b+n*.9)*.04}m.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:m,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:y})]})}function it({flowRef:h}){const x=p.useRef(),m=p.useRef(0),M=p.useMemo(()=>[{pos:[-.39+.18/2,0,0],size:[.18,.18,.06]},{pos:[-.39+.0756/2,.1278,0],size:[.0756,.0756,.06]},{pos:[-.39+.18+.02+.18/2,0,0],size:[.18,.18,.06]},{pos:[-.39+2*(.18+.02)+.18/2,0,0],size:[.18,.18,.06]},{pos:[-.39+3*(.18+.02)+.18/2,0,0],size:[.18,.18,.06]}],[]);P((g,d)=>{m.current+=d;const r=(h==null?void 0:h.current)||{pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-d*1.6),x.current){x.current.rotation.y=m.current*.08,x.current.rotation.x=Math.sin(m.current*.12)*.08;const o=Math.sin(m.current*1.5),a=Math.sin(m.current*.9)*.03,t=r.pulse*.5,s=1+.03*o+.08*t;x.current.scale.set(s,s,s),x.current.position.y=a;const i=x.current.children[0];i!=null&&i.isGroup&&i.children.forEach(n=>{n!=null&&n.material&&(n.material.opacity=.65+.15*o+.1*t)})}});const f=p.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return P((g,d)=>{var r,o;f.time.value+=d*.5,f.flow.value=((r=h==null?void 0:h.current)==null?void 0:r.intensity)||1,f.pulse.value=(((o=h==null?void 0:h.current)==null?void 0:o.pulse)||.3)*.4}),e.jsxs("group",{ref:x,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:y,side:K})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:y,side:w})]}),e.jsxs("group",{renderOrder:-1,children:[M.map((g,d)=>e.jsxs("mesh",{position:g.pos,children:[e.jsx("boxGeometry",{args:g.size}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.92,blending:y,depthWrite:!1,toneMapped:!1})]},d)),e.jsx("sprite",{position:[0,-.22,0],scale:[.45,.1,1],children:e.jsx("spriteMaterial",{map:(()=>{const g=document.createElement("canvas");g.width=256,g.height=64;const d=g.getContext("2d");d.clearRect(0,0,256,64),d.font="bold 38px 'JetBrains Mono', monospace",d.textAlign="center",d.textBaseline="middle",d.shadowColor="#0052FF",d.shadowBlur=8,d.fillStyle="#0052FF",d.globalAlpha=.9,d.fillText("BASE",128,32);const r=new Y(g);return r.minFilter=G,r})(),transparent:!0,depthWrite:!1,blending:y})})]}),e.jsx(st,{gasUniforms:f}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:y,side:w})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:y,side:w})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:y,side:w})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:y,side:w})]})]})}function nt(){const m=p.useRef(),M=p.useRef([]),f=p.useRef(0),g=p.useMemo(()=>{const r=new Float32Array(600),o=new Float32Array(600),a=new Float32Array(200);for(let t=0;t<200;t++){const s=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),n=4.8+Math.random()*12;r[t*3]=n*Math.sin(i)*Math.cos(s),r[t*3+1]=n*Math.sin(i)*Math.sin(s),r[t*3+2]=n*Math.cos(i);const l=Math.random();l<.5?(o[t*3]=0,o[t*3+1]=.85,o[t*3+2]=1):l<.8?(o[t*3]=0,o[t*3+1]=.4,o[t*3+2]=1):(o[t*3]=.1,o[t*3+1]=.9,o[t*3+2]=.7),a[t]=.012+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),d=p.useMemo(()=>Array.from({length:6},()=>{const r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=5.5+Math.random()*8.5,t=Math.random();let s;return t<.4?s=[0,.82,1]:t<.7?s=[0,.45,.95]:s=[.1,.88,.72],{position:[a*Math.sin(o)*Math.cos(r),a*Math.sin(o)*Math.sin(r),a*Math.cos(o)],scale:1.8+Math.random()*2.5,color:s,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return P((r,o)=>{f.current+=o,m.current&&(m.current.rotation.y=f.current*.008),M.current.forEach((a,t)=>{if(!a)return;const s=d[t],i=f.current;a.position.x=s.position[0]+Math.sin(i*s.rotSpeed+s.phase)*s.bobAmp,a.position.y=s.position[1]+Math.cos(i*s.bobSpeed+s.phase)*s.bobAmp*.6,a.position.z=s.position[2]+Math.sin(i*s.rotSpeed*.7+s.phase*1.3)*s.bobAmp*.4})}),e.jsxs("group",{ref:m,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[g.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[g.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:y})]}),d.map((r,o)=>e.jsxs("mesh",{ref:a=>M.current[o]=a,position:r.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new O(r.color[0],r.color[1],r.color[2])},scaleVal:{value:r.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:y,side:J})]},o))]})}function lt({liveData:h,onImpact:x,flowRef:m}){const f=p.useRef(0),g=p.useRef(),d=2.2,r=d*d,o=n=>{var C;const l=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((C=m==null?void 0:m.current)==null?void 0:C.intensity)||1)),c=(1.6+Math.random()*1)*(.9+.3*b);n[0]=Math.sin(u)*Math.cos(l)*c,n[1]=Math.sin(u)*Math.sin(l)*c,n[2]=Math.cos(u)*c},a=(n,l,u)=>{Math.random()<.5?(n[u*3]=0,n[u*3+1]=.85,n[u*3+2]=1,l[u]=.04+Math.random()*.03):(n[u*3]=0,n[u*3+1]=.4,n[u*3+2]=1,l[u]=.035+Math.random()*.03)},t=p.useMemo(()=>{const n=new Float32Array(105),l=new Float32Array(105),u=new Float32Array(105),b=new Float32Array(35),c=new Float32Array(35),C=new Float32Array(35),E=new Uint8Array(35);for(let A=0;A<35;A++){const j=Math.random()*.08,T=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1);n[A*3]=j*Math.sin(z)*Math.cos(T),n[A*3+1]=j*Math.sin(z)*Math.sin(T),n[A*3+2]=j*Math.cos(z);const _=Math.random()*Math.PI*2,F=Math.acos(2*Math.random()-1),N=1.6+Math.random()*1;l[A*3]=Math.sin(F)*Math.cos(_)*N,l[A*3+1]=Math.sin(F)*Math.sin(_)*N,l[A*3+2]=Math.cos(F)*N,a(u,b,A),c[A]=Math.random()*1.5,C[A]=1.8+Math.random()*.8}return{positions:n,velocities:l,colors:u,sizes:b,lifetimes:c,maxLifetimes:C,hit:E}},[]),s=p.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),i=p.useRef(0);return P((n,l)=>{var L,k;f.current+=l,s.time.value=f.current;const u=Math.max(.5,Math.min(1.8,((L=m==null?void 0:m.current)==null?void 0:L.intensity)||1));s.flow.value=u;const b=((k=m==null?void 0:m.current)==null?void 0:k.pulse)>.95&&f.current-i.current>1.2;b&&(i.current=f.current);const{positions:c,velocities:C,colors:E,sizes:A,lifetimes:j,maxLifetimes:T,hit:z}=t,_=[0,0,0];let F=!1,N=b?2:0;for(let v=0;v<35;v++){j[v]+=l;const B=N>0&&j[v]>.15;if(j[v]>=T[v]||B){B&&N--;const I=Math.random()*.08,U=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);c[v*3]=I*Math.sin(W)*Math.cos(U),c[v*3+1]=I*Math.sin(W)*Math.sin(U),c[v*3+2]=I*Math.cos(W),o(_),C[v*3]=_[0],C[v*3+1]=_[1],C[v*3+2]=_[2],a(E,A,v),F=!0,j[v]=0,T[v]=1.8+Math.random()*.8,z[v]=0;continue}const V=Math.sqrt(c[v*3]*c[v*3]+c[v*3+1]*c[v*3+1]+c[v*3+2]*c[v*3+2]),R=V>1.6?(V-1.6)/.6:0;R>0&&(C[v*3]*=1-R*.08,C[v*3+1]*=1-R*.08,C[v*3+2]*=1-R*.08,A[v]=A[v]*(1+R*.8)),c[v*3]+=C[v*3]*l,c[v*3+1]+=C[v*3+1]*l,c[v*3+2]+=C[v*3+2]*l;const H=c[v*3]*c[v*3]+c[v*3+1]*c[v*3+1]+c[v*3+2]*c[v*3+2];if(H>=r)if(z[v])A[v]*=.92;else{z[v]=1;const I=Math.sqrt(H),U=d/I;c[v*3]*=U,c[v*3+1]*=U,c[v*3+2]*=U,C[v*3]=0,C[v*3+1]=0,C[v*3+2]=0,x&&x({position:new Q(c[v*3],c[v*3+1],c[v*3+2]),intensity:1}),j[v]=T[v]-.8}}g.current&&(g.current.geometry.attributes.position.needsUpdate=!0,F&&(g.current.geometry.attributes.aColor.needsUpdate=!0,g.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:g,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:s,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            // PARTS visible through entire journey — fade gently at edge, don't vanish
            float edgeFade = 1.0 - smoothstep(0.5, 0.95, travel) * 0.6;
            vAlpha = (0.7 + 0.2 * sin(time * 2.0 + dist * 4.0)) * (0.8 + 0.15 * flow) * edgeFade;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            float sz = aSize * (1.0 + travel * 0.3);
            gl_PointSize = sz * (1.0 + 0.3 * flow) * (220.0 / -mv.z);
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

            float centerGlow = pow(1.0 - r, 3.0);
            float hotCore = pow(1.0 - r, 8.0);
            vec3 hotColor = mix(vColor, vec3(1.0), hotCore * 0.5);
            float alpha = (starCross * 0.3 + centerGlow * 0.3) * vAlpha;

            gl_FragColor = vec4(hotColor, alpha);
          }
        `,transparent:!0,depthWrite:!1,blending:y})]})}function ct(){const{positions:x,colors:m,sizes:M}=p.useMemo(()=>{const g=new Float32Array(135),d=new Float32Array(135),r=new Float32Array(45);for(let o=0;o<45;o++){const a=Math.acos(-1+2*o/45),t=Math.sqrt(45*Math.PI)*a,s=2.35;g[o*3]=s*Math.cos(t)*Math.sin(a),g[o*3+1]=s*Math.sin(t)*Math.sin(a),g[o*3+2]=s*Math.cos(a);const i=o>=36;if(i)d[o*3]=.133,d[o*3+1]=.827,d[o*3+2]=.933;else{const n=new O().setHSL(.75+Math.random()*.1,.7,.6);d[o*3]=n.r,d[o*3+1]=n.g,d[o*3+2]=n.b}r[o]=i?.09:.055}return{positions:g,colors:d,sizes:r}},[]),f=p.useMemo(()=>({time:{value:0}}),[]);return P((g,d)=>{f.time.value+=d*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:y})]})}function dt(){const h=p.useRef(),x=p.useMemo(()=>({time:{value:0}}),[]),m=p.useRef(0);P((d,r)=>{m.current+=r,x.time.value=m.current,h.current&&(h.current.rotation.y=m.current*.06)});const{positions:M,colors:f,sizes:g}=p.useMemo(()=>{const r=new Float32Array(90),o=new Float32Array(90),a=new Float32Array(30);for(let t=0;t<30;t++){const s=t/30*Math.PI*2,i=t%3,n=2.55+i*.22,l=.15*i;r[t*3]=n*Math.cos(s),r[t*3+1]=n*Math.sin(s)*Math.sin(l),r[t*3+2]=n*Math.sin(s)*Math.cos(l);const u=t/30;o[t*3]=.659*(1-u)+.133*u,o[t*3+1]=.333*(1-u)+.827*u,o[t*3+2]=.969*(1-u)+.933*u,a[t]=.015+Math.random()*.025}return{positions:r,colors:o,sizes:a}},[]);return e.jsx("group",{ref:h,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:y})]})})}function ut(){const h=p.useRef(),x=p.useRef(0),{positions:m,colors:M,sizes:f}=p.useMemo(()=>{const r=new Float32Array(6),o=new Float32Array(6),a=new Float32Array(2);for(let t=0;t<2;t++){const s=t/2*Math.PI*2+Math.random()*.5,i=4+Math.random()*2;r[t*3]=i*Math.cos(s),r[t*3+1]=(Math.random()-.5)*3,r[t*3+2]=i*Math.sin(s);const n=Math.random();n<.4?(o[t*3]=.13,o[t*3+1]=.82,o[t*3+2]=.93):n<.7?(o[t*3]=.84,o[t*3+1]=.27,o[t*3+2]=.93):(o[t*3]=.83,o[t*3+1]=.66,o[t*3+2]=.32),a[t]=.03+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),g=p.useMemo(()=>({time:{value:0}}),[]);return P((d,r)=>{var a,t,s;x.current+=r,g.time.value=x.current,h.current&&(h.current.rotation.y=x.current*.02);const o=(s=(t=(a=h.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:s.aSize;if(o){for(let i=0;i<2;i++)o.array[i]=.02+.02*Math.sin(x.current*2+i*1.5);o.needsUpdate=!0}}),e.jsxs("points",{ref:h,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:y})]})}function vt(){const x=p.useRef();p.useRef([]);const m=p.useRef(0),M=p.useMemo(()=>{const d=new Float32Array(1200),r=new Float32Array(400*3),o=new Float32Array(400),a=()=>Math.random();for(let t=0;t<400;t++){const s=a()*Math.PI*2,i=Math.acos(2*a()-1),n=a();let l,u;n<.45?(l=6+a()*6,u=.03):n<.8?(l=12+a()*8,u=.02):(l=20+a()*8,u=.015),d[t*3]=l*Math.sin(i)*Math.cos(s),d[t*3+1]=l*Math.sin(i)*Math.sin(s),d[t*3+2]=l*Math.cos(i);const b=a();b<.4?(r[t*3]=.95,r[t*3+1]=.97,r[t*3+2]=1):b<.55?(r[t*3]=.3,r[t*3+1]=.95,r[t*3+2]=1):b<.68?(r[t*3]=1,r[t*3+1]=1,r[t*3+2]=1):b<.78?(r[t*3]=.6,r[t*3+1]=.8,r[t*3+2]=1):b<.88?(r[t*3]=.95,r[t*3+1]=.35,r[t*3+2]=.9):(r[t*3]=1,r[t*3+1]=.82,r[t*3+2]=.55),o[t]=u+a()*.015}return{positions:d,colors:r,sizes:o}},[]),f=p.useMemo(()=>{const r=new Float32Array(36),o=new Float32Array(36),a=new Float32Array(12),t=new Float32Array(24),s=()=>Math.random();for(let i=0;i<12;i++){const n=s()*Math.PI*2,l=Math.acos(2*s()-1),u=s()<.65?6+s()*8:14+s()*9;r[i*3]=u*Math.sin(l)*Math.cos(n),r[i*3+1]=u*Math.sin(l)*Math.sin(n),r[i*3+2]=u*Math.cos(l);const b=s();let c=[0,.8,1];b<.25?c=[0,.82,1]:b<.45?c=[.1,.92,.7]:b<.6?c=[.05,.55,.95]:b<.78?c=[.15,.75,.88]:c=[.35,.15,.8],o[i*3]=c[0],o[i*3+1]=c[1],o[i*3+2]=c[2],a[i]=120+s()*140,t[i*2]=2+s()*3,t[i*2+1]=s()*100}return{positions:r,colors:o,sizes:a,noise:t}},[]);return P((d,r)=>{m.current+=r;const o=m.current;x.current&&(x.current.rotation.y=o*.0018,x.current.rotation.x=Math.sin(o*.0012)*.012)}),e.jsxs("group",{ref:x,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:y})]}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]}),e.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[f.noise,2]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:y})]})]})}function gt({liveData:h,paused:x}){const m=p.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=p.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]),f=p.useRef({intensity:1,pulse:.4,block:null});p.useEffect(()=>{const a=()=>{const s=h||{},i=parseFloat(String(s.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(s.gas||"").replace(/[^0-9.]/g,""))||0;let l=.9+Math.min(i/500,.5)+Math.min(n/50,.25)+Math.random()*.15;l=Math.max(.6,Math.min(1.8,l));const u=f.current;u.intensity=l,s.block&&s.block!=="—"&&s.block!==u.block?(u.block=s.block,u.pulse=1):u.pulse=Math.max(.3,(u.pulse||.3)*.94)};a();const t=setInterval(a,400);return()=>clearInterval(t)},[h]);const g=p.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),d=p.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),r=p.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),o=p.useMemo(()=>[1,1.5],[]);return e.jsxs($,{camera:g,gl:d,onCreated:({gl:a})=>a.setClearColor(0,0),style:r,dpr:o,frameloop:x?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(it,{flowRef:f}),e.jsx(lt,{liveData:h,onImpact:M,flowRef:f}),e.jsx(et,{liveData:h}),e.jsx(rt,{}),e.jsx(ot,{}),e.jsx(at,{}),e.jsx(ct,{}),e.jsx(dt,{}),e.jsx(tt,{})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(vt,{}),e.jsx(D,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(D,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(D,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(nt,{}),e.jsx(ut,{})]}),e.jsx(q,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{gt as default};
