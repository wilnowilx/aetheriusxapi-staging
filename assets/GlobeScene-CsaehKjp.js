import{j as e,r as v,u as j,C as Y,S as G,O as X}from"./r3f-CoVBa1W9.js";import{u as K}from"./index-_Vkwm2Vg.js";import{p as C,e as U,q as H,r as Q,F as z,s as Z,t as q,D as $,h as J}from"./three-DgQeLofb.js";import"./gsap-CzGW6FVa.js";const S=500;function tt({reputationParticles:h}){const x=v.useRef();h.length;const{positions:m,colors:b,sizes:f,alphas:M,types:g}=v.useMemo(()=>{const r=new Float32Array(S*3),o=new Float32Array(S*3),a=new Float32Array(S),t=new Float32Array(S),n=new Float32Array(S);for(let l=0;l<S;l++)r[l*3]=0,r[l*3+1]=0,r[l*3+2]=0,o[l*3]=0,o[l*3+1]=0,o[l*3+2]=0,a[l]=0,t[l]=0,n[l]=0;return{positions:r,colors:o,sizes:a,alphas:t,types:n}},[]);return j((r,o)=>{if(!x.current)return;const{positions:a,colors:t,sizes:n,alphas:l,types:c}=x.current.geometry.attributes;for(let s=0;s<Math.min(h.length,S);s++){const i=h[s];a.array[s*3]=i.position[0],a.array[s*3+1]=i.position[1],a.array[s*3+2]=i.position[2];const d=new U(i.color);t.array[s*3]=d.r,t.array[s*3+1]=d.g,t.array[s*3+2]=d.b;const u=i.age/i.maxAge,y=u<.1?u/.1:1,E=u>.7?(1-u)/.3:1,A=Math.min(y,E);n.array[s]=i.size*(1+u*.5)*A,l.array[s]=A*(.6+.4*Math.sin(Date.now()*.003+s)),c.array[s]=i.isBatch?1:0}for(let s=h.length;s<S;s++)l.array[s]=0,n.array[s]=0;a.needsUpdate=!0,t.needsUpdate=!0,n.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}),e.jsxs("points",{ref:x,renderOrder:15,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]}),e.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[M,1]}),e.jsx("bufferAttribute",{attach:"attributes-aType",args:[g,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function et(){const h=K();return h.length===0?null:e.jsx(tt,{reputationParticles:h})}const ot=({liveData:h})=>{const x=v.useRef(),m=v.useRef(0),b=v.useMemo(()=>{const o=h||{};return[{radius:2,tilt:.15,yOffset:.4,speed:.015,bandWidth:.18,color:"#ffffff",opacity:.85,fontSize:30,text:"   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   THE MARKETPLACE THAT LIVES   "},{radius:1.7,tilt:-.1,yOffset:0,speed:-.025,bandWidth:.14,color:"#d946ef",opacity:.8,fontSize:24,text:"   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   API INFRASTRUCTURE FOR AI AGENTS THAT PAY   "},{radius:1.4,tilt:.06,yOffset:-.4,speed:.035,bandWidth:.1,color:"#22d3ee",opacity:.75,fontSize:20,text:`   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   ${o.endpoints||"100+"} ENDPOINTS  ·  ${o.freeEndpoints||"40"} FREE  ·  ${o.latency||""}   `}]},[h]),f=v.useMemo(()=>b.map(o=>{const a=document.createElement("canvas");a.width=2048,a.height=64;const t=a.getContext("2d");t.clearRect(0,0,a.width,a.height);const n=`900 ${o.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;t.font=n,t.textAlign="center",t.textBaseline="middle";const l=o.text,c=t.measureText(l).width,s=Math.ceil((a.width+c)/c),i=(a.width-c*s)/2+c/2;t.shadowColor=o.color,t.shadowBlur=32,t.fillStyle=o.color,t.globalAlpha=.4;for(let u=0;u<s;u++)t.fillText(l,i+u*c,a.height/2);t.shadowBlur=14,t.globalAlpha=.7;for(let u=0;u<s;u++)t.fillText(l,i+u*c,a.height/2);t.shadowBlur=3,t.globalAlpha=1,t.fillStyle=o.color;for(let u=0;u<s;u++)t.fillText(l,i+u*c,a.height/2);t.shadowBlur=0,t.fillStyle="#ffffff",t.globalAlpha=.55;for(let u=0;u<s;u++)t.fillText(l,i+u*c,a.height/2);t.globalAlpha=1;const d=new Z(a);return d.anisotropy=4,d.minFilter=q,d.magFilter=q,d}),[b]),[M,g]=v.useState(null),r=v.useRef(0);return j((o,a)=>{m.current+=a,r.current+=a,x.current&&b.forEach((t,n)=>{const l=x.current.children[n];if(l){M===n||(l.rotation.y+=a*t.speed);const s=l.children[0];if(s!=null&&s.material){const i=.88+.12*Math.sin(r.current*.6+n*1.5);s.material.opacity=(M===n?1:t.opacity)*i}}})}),e.jsx("group",{ref:x,children:b.map((o,a)=>e.jsx("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:e.jsxs("mesh",{onPointerOver:t=>{t.stopPropagation(),g(a),document.body.style.cursor="pointer"},onPointerOut:()=>{g(null),document.body.style.cursor="auto"},onClick:()=>{},children:[e.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),e.jsx("meshBasicMaterial",{map:f[a],transparent:!0,opacity:o.opacity,side:$,depthWrite:!1,blending:C,toneMapped:!1})]})},a))})};function at(){const h=v.useMemo(()=>({time:{value:0},colorA:{value:new U(2282478)},colorB:{value:new U(11032055)},colorC:{value:new U(14239471)}}),[]);return j((x,m)=>{h.time.value+=m*.6}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:z,transparent:!0,depthWrite:!1,blending:C})]})}function rt(){const h=v.useMemo(()=>({time:{value:0}}),[]);return j((x,m)=>{h.time.value+=m*.4}),e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:z,transparent:!0,depthWrite:!1,blending:C})]})}function st(){const h=v.useRef(),x=v.useMemo(()=>({time:{value:0}}),[]);return j((m,b)=>{x.time.value+=b*.5}),e.jsxs("mesh",{ref:h,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function it({gasUniforms:h}){const m=v.useRef(),b=v.useRef(0),f=v.useMemo(()=>{const M=new Float32Array(120),g=new Float32Array(120),r=new Float32Array(120),o=new Float32Array(40);for(let a=0;a<40;a++){const t=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),l=.15+Math.random()*.5;M[a*3]=l*Math.sin(n)*Math.cos(t)*2,M[a*3+1]=l*Math.cos(n)*.7,M[a*3+2]=l*Math.sin(n)*Math.sin(t)*.9,g[a*3]=1.5+Math.random()*5,g[a*3+1]=1+Math.random()*4,g[a*3+2]=1.5+Math.random()*4.5;const c=Math.random();c<.4?(r[a*3]=.1+c*.2,r[a*3+1]=.7+c*.3,r[a*3+2]=.9+c*.1):c<.7?(r[a*3]=.8,r[a*3+1]=.9,r[a*3+2]=1):(r[a*3]=.05,r[a*3+1]=.5+c*.3,r[a*3+2]=.9+c*.1),o[a]=.025+Math.random()*.04}return{positions:M,seeds:g,colors:r,sizes:o}},[]);return j((M,g)=>{var a,t,n,l;b.current+=g;const r=b.current,o=(l=(n=(t=(a=m.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:n.position)==null?void 0:l.array;if(o){for(let c=0;c<40;c++){const s=f.seeds[c*3],i=f.seeds[c*3+1],d=f.seeds[c*3+2];o[c*3]=f.positions[c*3]+Math.sin(r*s+c*.7)*.05,o[c*3+1]=f.positions[c*3+1]+Math.cos(r*i+c*1.1)*.035,o[c*3+2]=f.positions[c*3+2]+Math.sin(r*d+c*.9)*.04}m.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:m,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function nt({flowRef:h}){const x=v.useRef(),m=v.useRef(0),b=v.useMemo(()=>{const n=(s,i)=>{const d=new H,u=-s/2,y=-i/2;return d.moveTo(u+.0384,y),d.lineTo(u+s-.0384,y),d.quadraticCurveTo(u+s,y,u+s,y+.0384),d.lineTo(u+s,y+i-.0384),d.quadraticCurveTo(u+s,y+i,u+s-.0384,y+i),d.lineTo(u+.0384,y+i),d.quadraticCurveTo(u,y+i,u,y+i-.0384),d.lineTo(u,y+.0384),d.quadraticCurveTo(u,y,u+.0384,y),d},l=(()=>{const s=new H,i=-.32/2,d=-.32/2;return s.moveTo(i+.0384,d),s.lineTo(i+.32-.0384,d),s.quadraticCurveTo(i+.32,d,i+.32,d+.0384),s.lineTo(i+.32,d+.32-.0384),s.quadraticCurveTo(i+.32,d+.32,i+.32-.0384,d+.32),s.lineTo(i+.1344+.0384,d+.32),s.quadraticCurveTo(i+.1344,d+.32,i+.1344,d+.32-.0384),s.lineTo(i+.1344,d+.32-.1344+.0384),s.quadraticCurveTo(i+.1344,d+.32-.1344,i+.1344-.0384,d+.32-.1344),s.lineTo(i+.0384,d+.32-.1344),s.quadraticCurveTo(i,d+.32-.1344,i,d+.32-.1344-.0384),s.lineTo(i,d+.0384),s.quadraticCurveTo(i,d,i+.0384,d),s})(),c=[-1.3760000000000001/2+.32/2,-1.3760000000000001/2+.32+.032+.32/2,-1.3760000000000001/2+2*(.32+.032)+.32/2,-1.3760000000000001/2+3*(.32+.032)+.32/2];return{lShape:l,rr:n(.32,.32),d:.1,positions:c,extrudeOpts:{depth:.1,bevelEnabled:!1}}},[]);j((M,g)=>{m.current+=g;const r=(h==null?void 0:h.current)||{pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-g*1.6),x.current){x.current.rotation.y=m.current*.08,x.current.rotation.x=Math.sin(m.current*.12)*.08;const o=Math.sin(m.current*1.5),a=Math.sin(m.current*.9)*.03,t=r.pulse,n=1+.04*o+.18*t;x.current.scale.set(n,n,n),x.current.position.y=a;const l=x.current.children[0];l!=null&&l.isGroup&&l.children.forEach(c=>{c!=null&&c.material&&(c.material.opacity=.65+.2*o+.2*t)})}});const f=v.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return j((M,g)=>{var r,o;f.time.value+=g*.5,f.flow.value=((r=h==null?void 0:h.current)==null?void 0:r.intensity)||1,f.pulse.value=((o=h==null?void 0:h.current)==null?void 0:o.pulse)||.3}),e.jsxs("group",{ref:x,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:Q})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),e.jsxs("group",{renderOrder:-1,children:[e.jsxs("mesh",{position:[b.positions[0],0,0],children:[e.jsx("extrudeGeometry",{args:[b.lShape,b.extrudeOpts]}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.85,blending:C,depthWrite:!1,toneMapped:!1})]}),e.jsxs("mesh",{position:[b.positions[1],0,0],children:[e.jsx("extrudeGeometry",{args:[b.rr,b.extrudeOpts]}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.85,blending:C,depthWrite:!1,toneMapped:!1})]}),e.jsxs("mesh",{position:[b.positions[2],0,0],children:[e.jsx("extrudeGeometry",{args:[b.rr,b.extrudeOpts]}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.85,blending:C,depthWrite:!1,toneMapped:!1})]}),e.jsxs("mesh",{position:[b.positions[3],0,0],children:[e.jsx("extrudeGeometry",{args:[b.rr,b.extrudeOpts]}),e.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.85,blending:C,depthWrite:!1,toneMapped:!1})]})]}),e.jsx(it,{gasUniforms:f}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]})]})}function lt(){const m=v.useRef(),b=v.useRef([]),f=v.useRef(0),M=v.useMemo(()=>{const r=new Float32Array(600),o=new Float32Array(600),a=new Float32Array(200);for(let t=0;t<200;t++){const n=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=4.8+Math.random()*12;r[t*3]=c*Math.sin(l)*Math.cos(n),r[t*3+1]=c*Math.sin(l)*Math.sin(n),r[t*3+2]=c*Math.cos(l);const s=Math.random();s<.5?(o[t*3]=0,o[t*3+1]=.85,o[t*3+2]=1):s<.8?(o[t*3]=0,o[t*3+1]=.4,o[t*3+2]=1):(o[t*3]=.1,o[t*3+1]=.9,o[t*3+2]=.7),a[t]=.012+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),g=v.useMemo(()=>Array.from({length:6},()=>{const r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=5.5+Math.random()*8.5,t=Math.random();let n;return t<.4?n=[0,.82,1]:t<.7?n=[0,.45,.95]:n=[.1,.88,.72],{position:[a*Math.sin(o)*Math.cos(r),a*Math.sin(o)*Math.sin(r),a*Math.cos(o)],scale:1.8+Math.random()*2.5,color:n,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return j((r,o)=>{f.current+=o,m.current&&(m.current.rotation.y=f.current*.008),b.current.forEach((a,t)=>{if(!a)return;const n=g[t],l=f.current;a.position.x=n.position[0]+Math.sin(l*n.rotSpeed+n.phase)*n.bobAmp,a.position.y=n.position[1]+Math.cos(l*n.bobSpeed+n.phase)*n.bobAmp*.6,a.position.z=n.position[2]+Math.sin(l*n.rotSpeed*.7+n.phase*1.3)*n.bobAmp*.4})}),e.jsxs("group",{ref:m,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[M.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),g.map((r,o)=>e.jsxs("mesh",{ref:a=>b.current[o]=a,position:r.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new U(r.color[0],r.color[1],r.color[2])},scaleVal:{value:r.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:C,side:$})]},o))]})}function ct({liveData:h,onImpact:x,flowRef:m}){const f=v.useRef(0),M=v.useRef(),g=2.2,r=g*g,o=c=>{var y;const s=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),d=Math.max(.5,Math.min(1.8,((y=m==null?void 0:m.current)==null?void 0:y.intensity)||1)),u=(1.6+Math.random()*1)*(.9+.3*d);c[0]=Math.sin(i)*Math.cos(s)*u,c[1]=Math.sin(i)*Math.sin(s)*u,c[2]=Math.cos(i)*u},a=(c,s,i)=>{Math.random()<.5?(c[i*3]=0,c[i*3+1]=.85,c[i*3+2]=1,s[i]=.04+Math.random()*.03):(c[i*3]=0,c[i*3+1]=.4,c[i*3+2]=1,s[i]=.035+Math.random()*.03)},t=v.useMemo(()=>{const c=new Float32Array(105),s=new Float32Array(105),i=new Float32Array(105),d=new Float32Array(35),u=new Float32Array(35),y=new Float32Array(35),E=new Uint8Array(35);for(let A=0;A<35;A++){const P=Math.random()*.08,_=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1);c[A*3]=P*Math.sin(w)*Math.cos(_),c[A*3+1]=P*Math.sin(w)*Math.sin(_),c[A*3+2]=P*Math.cos(w);const T=Math.random()*Math.PI*2,F=Math.acos(2*Math.random()-1),N=1.6+Math.random()*1;s[A*3]=Math.sin(F)*Math.cos(T)*N,s[A*3+1]=Math.sin(F)*Math.sin(T)*N,s[A*3+2]=Math.cos(F)*N,a(i,d,A),u[A]=Math.random()*1.5,y[A]=1.8+Math.random()*.8}return{positions:c,velocities:s,colors:i,sizes:d,lifetimes:u,maxLifetimes:y,hit:E}},[]),n=v.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),l=v.useRef(0);return j((c,s)=>{var D,k;f.current+=s,n.time.value=f.current;const i=Math.max(.5,Math.min(1.8,((D=m==null?void 0:m.current)==null?void 0:D.intensity)||1));n.flow.value=i;const d=((k=m==null?void 0:m.current)==null?void 0:k.pulse)>.95&&f.current-l.current>1.2;d&&(l.current=f.current);const{positions:u,velocities:y,colors:E,sizes:A,lifetimes:P,maxLifetimes:_,hit:w}=t,T=[0,0,0];let F=!1,N=d?8:0;for(let p=0;p<35;p++){P[p]+=s;const L=N>0&&P[p]>.15;if(P[p]>=_[p]||L){L&&N--;const I=Math.random()*.08,O=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);u[p*3]=I*Math.sin(W)*Math.cos(O),u[p*3+1]=I*Math.sin(W)*Math.sin(O),u[p*3+2]=I*Math.cos(W),o(T),y[p*3]=T[0],y[p*3+1]=T[1],y[p*3+2]=T[2],a(E,A,p),F=!0,P[p]=0,_[p]=1.8+Math.random()*.8,w[p]=0;continue}const B=Math.sqrt(u[p*3]*u[p*3]+u[p*3+1]*u[p*3+1]+u[p*3+2]*u[p*3+2]),R=B>1.6?(B-1.6)/.6:0;R>0&&(y[p*3]*=1-R*.08,y[p*3+1]*=1-R*.08,y[p*3+2]*=1-R*.08,A[p]=A[p]*(1+R*.8)),u[p*3]+=y[p*3]*s,u[p*3+1]+=y[p*3+1]*s,u[p*3+2]+=y[p*3+2]*s;const V=u[p*3]*u[p*3]+u[p*3+1]*u[p*3+1]+u[p*3+2]*u[p*3+2];if(V>=r)if(w[p])A[p]*=1.06;else{w[p]=1;const I=Math.sqrt(V),O=g/I;u[p*3]*=O,u[p*3+1]*=O,u[p*3+2]*=O,y[p*3]=0,y[p*3+1]=0,y[p*3+2]=0,x&&x({position:new J(u[p*3],u[p*3+1],u[p*3+2]),intensity:1}),P[p]=_[p]-.8}}M.current&&(M.current.geometry.attributes.position.needsUpdate=!0,F&&(M.current.geometry.attributes.aColor.needsUpdate=!0,M.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:M,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ut(){const{positions:x,colors:m,sizes:b}=v.useMemo(()=>{const M=new Float32Array(135),g=new Float32Array(135),r=new Float32Array(45);for(let o=0;o<45;o++){const a=Math.acos(-1+2*o/45),t=Math.sqrt(45*Math.PI)*a,n=2.35;M[o*3]=n*Math.cos(t)*Math.sin(a),M[o*3+1]=n*Math.sin(t)*Math.sin(a),M[o*3+2]=n*Math.cos(a);const l=o>=36;if(l)g[o*3]=.133,g[o*3+1]=.827,g[o*3+2]=.933;else{const c=new U().setHSL(.75+Math.random()*.1,.7,.6);g[o*3]=c.r,g[o*3+1]=c.g,g[o*3+2]=c.b}r[o]=l?.09:.055}return{positions:M,colors:g,sizes:r}},[]),f=v.useMemo(()=>({time:{value:0}}),[]);return j((M,g)=>{f.time.value+=g*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function dt(){const h=v.useRef(),x=v.useMemo(()=>({time:{value:0}}),[]),m=v.useRef(0);j((g,r)=>{m.current+=r,x.time.value=m.current,h.current&&(h.current.rotation.y=m.current*.06)});const{positions:b,colors:f,sizes:M}=v.useMemo(()=>{const r=new Float32Array(90),o=new Float32Array(90),a=new Float32Array(30);for(let t=0;t<30;t++){const n=t/30*Math.PI*2,l=t%3,c=2.55+l*.22,s=.15*l;r[t*3]=c*Math.cos(n),r[t*3+1]=c*Math.sin(n)*Math.sin(s),r[t*3+2]=c*Math.sin(n)*Math.cos(s);const i=t/30;o[t*3]=.659*(1-i)+.133*i,o[t*3+1]=.333*(1-i)+.827*i,o[t*3+2]=.969*(1-i)+.933*i,a[t]=.015+Math.random()*.025}return{positions:r,colors:o,sizes:a}},[]);return e.jsx("group",{ref:h,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function pt(){const h=v.useRef(),x=v.useRef(0),{positions:m,colors:b,sizes:f}=v.useMemo(()=>{const r=new Float32Array(6),o=new Float32Array(6),a=new Float32Array(2);for(let t=0;t<2;t++){const n=t/2*Math.PI*2+Math.random()*.5,l=4+Math.random()*2;r[t*3]=l*Math.cos(n),r[t*3+1]=(Math.random()-.5)*3,r[t*3+2]=l*Math.sin(n);const c=Math.random();c<.4?(o[t*3]=.13,o[t*3+1]=.82,o[t*3+2]=.93):c<.7?(o[t*3]=.84,o[t*3+1]=.27,o[t*3+2]=.93):(o[t*3]=.83,o[t*3+1]=.66,o[t*3+2]=.32),a[t]=.03+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),M=v.useMemo(()=>({time:{value:0}}),[]);return j((g,r)=>{var a,t,n;x.current+=r,M.time.value=x.current,h.current&&(h.current.rotation.y=x.current*.02);const o=(n=(t=(a=h.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:n.aSize;if(o){for(let l=0;l<2;l++)o.array[l]=.02+.02*Math.sin(x.current*2+l*1.5);o.needsUpdate=!0}}),e.jsxs("points",{ref:h,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]})]}),e.jsx("shaderMaterial",{uniforms:M,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function vt(){const x=v.useRef();v.useRef([]);const m=v.useRef(0),b=v.useMemo(()=>{const g=new Float32Array(1200),r=new Float32Array(400*3),o=new Float32Array(400),a=()=>Math.random();for(let t=0;t<400;t++){const n=a()*Math.PI*2,l=Math.acos(2*a()-1),c=a();let s,i;c<.45?(s=6+a()*6,i=.03):c<.8?(s=12+a()*8,i=.02):(s=20+a()*8,i=.015),g[t*3]=s*Math.sin(l)*Math.cos(n),g[t*3+1]=s*Math.sin(l)*Math.sin(n),g[t*3+2]=s*Math.cos(l);const d=a();d<.4?(r[t*3]=.95,r[t*3+1]=.97,r[t*3+2]=1):d<.55?(r[t*3]=.3,r[t*3+1]=.95,r[t*3+2]=1):d<.68?(r[t*3]=1,r[t*3+1]=1,r[t*3+2]=1):d<.78?(r[t*3]=.6,r[t*3+1]=.8,r[t*3+2]=1):d<.88?(r[t*3]=.95,r[t*3+1]=.35,r[t*3+2]=.9):(r[t*3]=1,r[t*3+1]=.82,r[t*3+2]=.55),o[t]=i+a()*.015}return{positions:g,colors:r,sizes:o}},[]),f=v.useMemo(()=>{const r=new Float32Array(36),o=new Float32Array(36),a=new Float32Array(12),t=new Float32Array(24),n=()=>Math.random();for(let l=0;l<12;l++){const c=n()*Math.PI*2,s=Math.acos(2*n()-1),i=n()<.65?6+n()*8:14+n()*9;r[l*3]=i*Math.sin(s)*Math.cos(c),r[l*3+1]=i*Math.sin(s)*Math.sin(c),r[l*3+2]=i*Math.cos(s);const d=n();let u=[0,.8,1];d<.25?u=[0,.82,1]:d<.45?u=[.1,.92,.7]:d<.6?u=[.05,.55,.95]:d<.78?u=[.15,.75,.88]:u=[.35,.15,.8],o[l*3]=u[0],o[l*3+1]=u[1],o[l*3+2]=u[2],a[l]=120+n()*140,t[l*2]=2+n()*3,t[l*2+1]=n()*100}return{positions:r,colors:o,sizes:a,noise:t}},[]);return j((g,r)=>{m.current+=r;const o=m.current;x.current&&(x.current.rotation.y=o*.0018,x.current.rotation.x=Math.sin(o*.0012)*.012)}),e.jsxs("group",{ref:x,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[b.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]}),e.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[f.noise,2]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})]})}function xt({liveData:h,paused:x}){const m=v.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=v.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]),f=v.useRef({intensity:1,pulse:.4,block:null});v.useEffect(()=>{const a=()=>{const n=h||{},l=parseFloat(String(n.volume||"").replace(/[^0-9.]/g,""))||0,c=parseFloat(String(n.gas||"").replace(/[^0-9.]/g,""))||0;let s=.9+Math.min(l/500,.5)+Math.min(c/50,.25)+Math.random()*.15;s=Math.max(.6,Math.min(1.8,s));const i=f.current;i.intensity=s,n.block&&n.block!=="—"&&n.block!==i.block?(i.block=n.block,i.pulse=1):i.pulse=Math.max(.3,(i.pulse||.3)*.94)};a();const t=setInterval(a,400);return()=>clearInterval(t)},[h]);const M=v.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),g=v.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),r=v.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),o=v.useMemo(()=>[1,1.5],[]);return e.jsxs(Y,{camera:M,gl:g,onCreated:({gl:a})=>a.setClearColor(0,0),style:r,dpr:o,frameloop:x?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(nt,{flowRef:f}),e.jsx(st,{}),e.jsx(ct,{liveData:h,onImpact:b,flowRef:f}),e.jsx(at,{}),e.jsx(rt,{}),e.jsx(ut,{}),e.jsx(ot,{liveData:h}),e.jsx(dt,{}),e.jsx(et,{})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(vt,{}),e.jsx(G,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(G,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(G,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(lt,{}),e.jsx(pt,{})]}),e.jsx(X,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{xt as default};
