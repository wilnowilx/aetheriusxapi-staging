import{j as e,r as u,u as w,C as X,S as G,O as Y}from"./r3f-DmFIH1pg.js";import{u as J}from"./index-ZDfeI_pX.js";import{p as j,e as E,q as K,E as Q,r as Z,F as T,D,s as $,t as B,h as tt}from"./three-CkYadfcZ.js";import"./gsap-CzGW6FVa.js";const P=500;function et({reputationParticles:g}){const x=u.useRef();g.length;const{positions:m,colors:y,sizes:p,alphas:f,types:d}=u.useMemo(()=>{const s=new Float32Array(P*3),r=new Float32Array(P*3),a=new Float32Array(P),t=new Float32Array(P),o=new Float32Array(P);for(let i=0;i<P;i++)s[i*3]=0,s[i*3+1]=0,s[i*3+2]=0,r[i*3]=0,r[i*3+1]=0,r[i*3+2]=0,a[i]=0,t[i]=0,o[i]=0;return{positions:s,colors:r,sizes:a,alphas:t,types:o}},[]);return w((s,r)=>{if(!x.current)return;const{positions:a,colors:t,sizes:o,alphas:i,types:n}=x.current.geometry.attributes;for(let l=0;l<Math.min(g.length,P);l++){const c=g[l];a.array[l*3]=c.position[0],a.array[l*3+1]=c.position[1],a.array[l*3+2]=c.position[2];const M=new E(c.color);t.array[l*3]=M.r,t.array[l*3+1]=M.g,t.array[l*3+2]=M.b;const v=c.age/c.maxAge,b=v<.1?v/.1:1,C=v>.7?(1-v)/.3:1,A=Math.min(b,C);o.array[l]=c.size*(1+v*.5)*A,i.array[l]=A*(.6+.4*Math.sin(Date.now()*.003+l)),n.array[l]=c.isBatch?1:0}for(let l=g.length;l<P;l++)i.array[l]=0,o.array[l]=0;a.needsUpdate=!0,t.needsUpdate=!0,o.needsUpdate=!0,i.needsUpdate=!0,n.needsUpdate=!0}),e.jsxs("points",{ref:x,renderOrder:15,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]}),e.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[f,1]}),e.jsx("bufferAttribute",{attach:"attributes-aType",args:[d,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function ot(){const g=J();return g.length===0?null:e.jsx(et,{reputationParticles:g})}const at=({liveData:g})=>{const x=u.useRef(),[m,y]=u.useState("100+ ENDPOINTS  40 FREE  0ms"),p=u.useRef(m);u.useEffect(()=>{const a=async()=>{try{const o=await fetch("https://34-156-149-38.sslip.io/aetherapi/metrics");if(o.ok){const i=await o.json(),n=i.totalEndpoints||i.endpoints||"100+",l=i.freeEndpoints||i.freeEndpoints===0?i.freeEndpoints:"40",c=i.avgLatency||i.latency||"<1",M=`${n} ENDPOINTS  ${l} FREE  ${c}ms  ${n} ENDPOINTS  ${l} FREE  ${c}ms`;p.current=M,y(M)}}catch{}};a();const t=setInterval(a,200);return()=>clearInterval(t)},[]);const f=u.useMemo(()=>[{radius:2.8,tilt:.18,yOffset:.4,speed:.012,bandWidth:.38,color:"#ffffff",opacity:.92,fontSize:56,phrase:"THE MARKETPLACE THAT LIVES"},{radius:2.55,tilt:-.1,yOffset:-.1,speed:-.018,bandWidth:.3,color:"#d946ef",opacity:.85,fontSize:48,phrase:"API INFRASTRUCTURE FOR AI AGENTS THAT PAY"},{radius:2.35,tilt:.06,yOffset:-.55,speed:.035,bandWidth:.24,color:"#22d3ee",opacity:.78,fontSize:36,phrase:m}],[m]),d=u.useMemo(()=>f.map(a=>{const t=document.createElement("canvas");t.width=2048,t.height=128;const o=t.getContext("2d");o.clearRect(0,0,t.width,t.height);const i=`900 ${a.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;o.font=i,o.textAlign="left",o.textBaseline="middle";const n=o.measureText(a.phrase).width,l=n*.35,c=n+l,M=t.width+c,v=Math.ceil(M/c);o.shadowBlur=40,o.shadowColor=a.color,o.fillStyle=a.color,o.globalAlpha=.15;for(let C=0;C<v;C++)o.fillText(a.phrase,C*c,t.height/2);o.shadowBlur=20,o.globalAlpha=.3;for(let C=0;C<v;C++)o.fillText(a.phrase,C*c,t.height/2);o.shadowBlur=8,o.globalAlpha=.6;for(let C=0;C<v;C++)o.fillText(a.phrase,C*c,t.height/2);o.shadowBlur=0,o.globalAlpha=1,o.fillStyle="#ffffff";for(let C=0;C<v;C++)o.fillText(a.phrase,C*c,t.height/2);o.globalAlpha=1;const b=new $(t);return b.anisotropy=4,b.minFilter=B,b.magFilter=B,b}),[f]),[s,r]=u.useState(null);return w((a,t)=>{x.current&&f.forEach((o,i)=>{const n=x.current.children[i];n&&(s===i||(n.rotation.y+=t*o.speed))})}),e.jsx("group",{ref:x,children:f.map((a,t)=>e.jsx("group",{position:[0,a.yOffset,0],rotation:[a.tilt,0,0],children:e.jsxs("mesh",{onPointerOver:o=>{o.stopPropagation(),r(t),document.body.style.cursor="pointer"},onPointerOut:()=>{r(null),document.body.style.cursor="auto"},onClick:()=>{},children:[e.jsx("cylinderGeometry",{args:[a.radius,a.radius,a.bandWidth,128,1,!0]}),e.jsx("shaderMaterial",{uniforms:{uMap:{value:d[t]},uOpacity:{value:a.opacity}},vertexShader:`
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,fragmentShader:`
                uniform sampler2D uMap;
                uniform float uOpacity;
                varying vec2 vUv;
                void main() {
                  vec4 texColor = texture2D(uMap, vUv);
                  float faceFactor = gl_FrontFacing ? 1.0 : 0.15;
                  gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity * faceFactor);
                }
              `,transparent:!0,side:D,depthWrite:!1,blending:j,toneMapped:!1})]})},t))})};function rt(){const g=u.useMemo(()=>({colorA:{value:new E(2282478)},colorB:{value:new E(11032055)},colorC:{value:new E(14239471)}}),[]);return e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[2.65,28,20]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          varying vec3 vPos; varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vPos = position;
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vPos; varying vec3 vNormal; varying vec3 vWorldPos;
          uniform vec3 colorA; uniform vec3 colorB; uniform vec3 colorC;
          void main() {
            float dist = length(vPos) / 2.65;
            float radial = pow(1.0 - dist, 2.0);
            float polar = pow(abs(vPos.y / 2.65), 2.0);
            vec3 col = mix(colorA, colorB, 0.15);
            col += polar * vec3(0.2, 0.08, 0.35) * 0.5;
            float alpha = radial * 0.10 * (1.0 + polar * 0.8);
            alpha *= smoothstep(1.0, 0.3, dist);
            gl_FragColor = vec4(col, alpha);
          }
        `,side:T,transparent:!0,depthWrite:!1,blending:j})]})}function st(){return e.jsxs("mesh",{scale:.85,children:[e.jsx("sphereGeometry",{args:[2.2,32,32]}),e.jsx("shaderMaterial",{vertexShader:`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          void main() {
            float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 2.0);
            vec3 col = vec3(0.659, 0.333, 0.969);
            gl_FragColor = vec4(col, rim * 0.04);
          }
        `,side:T,transparent:!0,depthWrite:!1,blending:j})]})}function it(){const g=u.useRef();return e.jsxs("mesh",{ref:g,children:[e.jsx("sphereGeometry",{args:[2.2,36,24]}),e.jsx("shaderMaterial",{vertexShader:`
          varying vec3 vPos;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vPos;

          float polarGlow(vec3 pos) {
            return pow(abs(pos.y / 2.2), 2.5) * 0.6;
          }

          void main() {
            // STATIC: no time uniform, no sin(), no pulse — fixed color
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));

            vec3 staticColor = vec3(0.0, 0.72, 0.92); // fixed cyan, no purple shift

            float polar = polarGlow(vPos);
            vec3 col = staticColor;
            col += polar * vec3(0.12, 0.06, 0.25);

            float alpha = (0.18 + polar * 0.08) * fade;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function nt({gasUniforms:g}){const m=u.useRef(),y=u.useRef(0),p=u.useMemo(()=>{const f=new Float32Array(30),d=new Float32Array(30),s=new Float32Array(30),r=new Float32Array(10);for(let a=0;a<10;a++){const t=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),i=.2+Math.random()*.4;f[a*3]=i*Math.sin(o)*Math.cos(t)*1.8,f[a*3+1]=i*Math.cos(o)*.6,f[a*3+2]=i*Math.sin(o)*Math.sin(t)*.8,d[a*3]=1+Math.random()*2.5,d[a*3+1]=.8+Math.random()*2,d[a*3+2]=1+Math.random()*2.5,s[a*3]=.1,s[a*3+1]=.5,s[a*3+2]=.7,r[a]=.012+Math.random()*.015}return{positions:f,seeds:d,colors:s,sizes:r}},[]);return w((f,d)=>{var a,t,o,i;y.current+=d;const s=y.current,r=(i=(o=(t=(a=m.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:o.position)==null?void 0:i.array;if(r){for(let n=0;n<10;n++){const l=p.seeds[n*3],c=p.seeds[n*3+1],M=p.seeds[n*3+2];r[n*3]=p.positions[n*3]+Math.sin(s*l+n*.7)*.015,r[n*3+1]=p.positions[n*3+1]+Math.cos(s*c+n*1.1)*.012,r[n*3+2]=p.positions[n*3+2]+Math.sin(s*M+n*.9)*.015}m.current.geometry.attributes.position.needsUpdate=!0}}),e.jsxs("points",{ref:m,renderOrder:2,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vColor = aColor;
            vAlpha = 1.0;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (180.0 / -mv.z); // smaller size multiplier
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            float d = abs(uv.x) + abs(uv.y) * 0.5;
            if (d > 1.0) discard;
            float glow = pow(1.0 - d, 3.0); // softer falloff
            float core = pow(1.0 - d, 8.0); // tinier core
            vec3 col = mix(vColor, vec3(1.0), core * 0.3); // less white
            col += vec3(0.2, 0.4, 0.6) * glow * 0.2; // dimmer accent
            gl_FragColor = vec4(col, glow * vAlpha * 0.35); // much dimmer
          }
        `,transparent:!0,depthWrite:!1,blending:j,toneMapped:!1})]})}function lt({flowRef:g}){const x=u.useRef(),m=u.useRef(0),y=u.useMemo(()=>{const r=.11200000000000002,a=.28*.4,t=new K;t.moveTo(-.28/2,-.28/2),t.lineTo(.28/2,-.28/2),t.lineTo(.28/2,.28/2),t.lineTo(-.28/2+r,.28/2),t.lineTo(-.28/2+r,.28/2+a),t.lineTo(-.28/2,.28/2+a),t.lineTo(-.28/2,-.28/2);const o={depth:.09,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2},i=new Q(t,o);i.computeBoundingBox();const n=i.boundingBox,l=(n.max.x+n.min.x)/2,c=(n.max.y+n.min.y)/2,M=(n.max.z+n.min.z)/2;i.translate(-l,-c,-M);const v=-1.3900000000000001/2+.28/2;return{lGeometry:i,lPos:[v,0,0],squares:[{pos:[v+.28/2+.09+.28/2,0,0],size:[.28,.28,.09]},{pos:[v+.28/2+.09+.28+.09+.28/2,0,0],size:[.28,.28,.09]},{pos:[v+.28/2+.09+.28+.09+.28+.09+.28/2,0,0],size:[.28,.28,.09]}]}},[]);w((f,d)=>{m.current+=d;const s=(g==null?void 0:g.current)||{pulse:.3};if(s.pulse=Math.max(.25,(s.pulse||0)-d*1.6),x.current){x.current.rotation.y=m.current*.08,x.current.rotation.x=Math.sin(m.current*.12)*.08;const r=Math.sin(m.current*1.5),a=Math.sin(m.current*.9)*.03,o=1+.03*r+.08*0;x.current.scale.set(o,o,o),x.current.position.y=a;const i=x.current.children[0];i!=null&&i.isGroup&&i.children.forEach(n=>{n!=null&&n.material&&(n.material.opacity=1)})}});const p=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return w((f,d)=>{var s;p.time.value+=d*.08,p.flow.value=((s=g==null?void 0:g.current)==null?void 0:s.intensity)||1}),e.jsxs("group",{ref:x,scale:1.3,children:[e.jsxs("mesh",{renderOrder:0,children:[e.jsx("sphereGeometry",{args:[1.5,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*3.0+time*0.2)*sin(vPos.y*2.5+time*0.15)*sin(vPos.z*2.0+time*0.18);
              float turbulence = 0.7 + 0.15 * swirl; // barely moves
              vec3 col = mix(vec3(0.0,0.25,0.8), vec3(0.0,0.6,0.9), dist*0.5);
              float alpha = fog * turbulence * 0.08 * (0.5 + 0.5*flow); // much dimmer
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:Z})]}),e.jsxs("mesh",{renderOrder:1,children:[e.jsx("sphereGeometry",{args:[1.2,20,14]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*3.0+time*0.25)*sin(vPos.y*2.5+time*0.2)*sin(vPos.z*2.0+time*0.22);
              float tendrils = 0.7 + 0.15 * swirl; // barely moves
              float noise = tendrils * 0.7 + 0.3;
              vec3 col = mix(vec3(0.0,0.3,0.8), vec3(0.0,0.7,0.9), noise*0.3);
              float alpha = radial * noise * 0.08 * (0.4 + 0.6*flow); // much dimmer
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:T})]}),e.jsxs("group",{renderOrder:-1,children:[e.jsx("mesh",{geometry:y.lGeometry,position:y.lPos,children:e.jsx("meshBasicMaterial",{color:"#003399",transparent:!0,opacity:1,side:D,depthWrite:!1,toneMapped:!1})}),y.squares.map((f,d)=>e.jsxs("mesh",{position:f.pos,children:[e.jsx("boxGeometry",{args:f.size}),e.jsx("meshBasicMaterial",{color:"#003399",transparent:!0,opacity:1,side:D,depthWrite:!1,toneMapped:!1})]},d)),e.jsx("sprite",{position:[0,-.22,0],scale:[.45,.1,1],children:e.jsx("spriteMaterial",{map:(()=>{const f=document.createElement("canvas");f.width=256,f.height=64;const d=f.getContext("2d");d.clearRect(0,0,256,64),d.font="bold 38px 'JetBrains Mono', monospace",d.textAlign="center",d.textBaseline="middle",d.shadowColor="#0052FF",d.shadowBlur=8,d.fillStyle="#0052FF",d.globalAlpha=.9,d.fillText("BASE",128,32);const s=new $(f);return s.minFilter=B,s})(),transparent:!0,depthWrite:!1,blending:j})})]}),e.jsx(nt,{gasUniforms:p}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.38,32,24]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 0.38;
              float radial = pow(1.0 - dist, 3.0);
              float swirl = sin(vPos.x*8.0+time*0.4)*sin(vPos.y*6.0+time*0.25)*sin(vPos.z*5.0+time*0.3);
              float noise = 0.7 + 0.3*swirl;
              vec3 deepBlue = vec3(0.0,0.2,0.85);
              vec3 coreCyan = vec3(0.0,0.65,1.0);
              vec3 col = mix(deepBlue, coreCyan, (1.0-dist)*0.6 + noise*0.15);
              col += vec3(0.05,0.25,0.35) * (1.0-dist) * 0.4;
              float alpha = radial * 0.75 * noise * (0.75 + 0.25*flow);
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:T})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.62,24,18]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.35 * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:T})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[.88,16,12]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.20;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:T})]}),e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1.45,20,16]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float phase = sin(time*0.2 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.10);
              float alpha = radial * 0.10;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:j,side:T})]})]})}function ct(){const m=u.useRef(),y=u.useRef([]),p=u.useRef(0),f=u.useMemo(()=>{const s=new Float32Array(600),r=new Float32Array(600),a=new Float32Array(200);for(let t=0;t<200;t++){const o=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),n=4.8+Math.random()*12;s[t*3]=n*Math.sin(i)*Math.cos(o),s[t*3+1]=n*Math.sin(i)*Math.sin(o),s[t*3+2]=n*Math.cos(i);const l=Math.random();l<.5?(r[t*3]=0,r[t*3+1]=.85,r[t*3+2]=1):l<.8?(r[t*3]=0,r[t*3+1]=.4,r[t*3+2]=1):(r[t*3]=.1,r[t*3+1]=.9,r[t*3+2]=.7),a[t]=.012+Math.random()*.02}return{positions:s,colors:r,sizes:a}},[]),d=u.useMemo(()=>Array.from({length:6},()=>{const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),a=5.5+Math.random()*8.5,t=Math.random();let o;return t<.4?o=[0,.82,1]:t<.7?o=[0,.45,.95]:o=[.1,.88,.72],{position:[a*Math.sin(r)*Math.cos(s),a*Math.sin(r)*Math.sin(s),a*Math.cos(r)],scale:1.8+Math.random()*2.5,color:o,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return w((s,r)=>{p.current+=r,m.current&&(m.current.rotation.y=p.current*.008),y.current.forEach((a,t)=>{if(!a)return;const o=d[t],i=p.current;a.position.x=o.position[0]+Math.sin(i*o.rotSpeed+o.phase)*o.bobAmp,a.position.y=o.position[1]+Math.cos(i*o.bobSpeed+o.phase)*o.bobAmp*.6,a.position.z=o.position[2]+Math.sin(i*o.rotSpeed*.7+o.phase*1.3)*o.bobAmp*.4})}),e.jsxs("group",{ref:m,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]}),d.map((s,r)=>e.jsxs("mesh",{ref:a=>y.current[r]=a,position:s.position,children:[e.jsx("planeGeometry",{args:[1,1]}),e.jsx("shaderMaterial",{uniforms:{color:{value:new E(s.color[0],s.color[1],s.color[2])},scaleVal:{value:s.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:j,side:D})]},r))]})}function dt({liveData:g,onImpact:x,flowRef:m}){const p=u.useRef(0),f=u.useRef(),d=2.2,s=d*d,r=n=>{var b;const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),M=Math.max(.5,Math.min(1.8,((b=m==null?void 0:m.current)==null?void 0:b.intensity)||1)),v=(1.6+Math.random()*1)*(.9+.3*M);n[0]=Math.sin(c)*Math.cos(l)*v,n[1]=Math.sin(c)*Math.sin(l)*v,n[2]=Math.cos(c)*v},a=(n,l,c)=>{Math.random()<.5?(n[c*3]=0,n[c*3+1]=.85,n[c*3+2]=1,l[c]=.04+Math.random()*.03):(n[c*3]=0,n[c*3+1]=.4,n[c*3+2]=1,l[c]=.035+Math.random()*.03)},t=u.useMemo(()=>{const n=new Float32Array(105),l=new Float32Array(105),c=new Float32Array(105),M=new Float32Array(35),v=new Float32Array(35),b=new Float32Array(35),C=new Uint8Array(35);for(let A=0;A<35;A++){const S=Math.random()*.08,F=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1);n[A*3]=S*Math.sin(z)*Math.cos(F),n[A*3+1]=S*Math.sin(z)*Math.sin(F),n[A*3+2]=S*Math.cos(z);const _=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1),U=1.6+Math.random()*1;l[A*3]=Math.sin(N)*Math.cos(_)*U,l[A*3+1]=Math.sin(N)*Math.sin(_)*U,l[A*3+2]=Math.cos(N)*U,a(c,M,A),v[A]=Math.random()*1.5,b[A]=1.8+Math.random()*.8}return{positions:n,velocities:l,colors:c,sizes:M,lifetimes:v,maxLifetimes:b,hit:C}},[]),o=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),i=u.useRef(0);return w((n,l)=>{var L,V;p.current+=l,o.time.value=p.current;const c=Math.max(.5,Math.min(1.8,((L=m==null?void 0:m.current)==null?void 0:L.intensity)||1));o.flow.value=c;const M=((V=m==null?void 0:m.current)==null?void 0:V.pulse)>.95&&p.current-i.current>1.2;M&&(i.current=p.current);const{positions:v,velocities:b,colors:C,sizes:A,lifetimes:S,maxLifetimes:F,hit:z}=t,_=[0,0,0];let N=!1,U=M?2:0;for(let h=0;h<35;h++){S[h]+=l;const k=U>0&&S[h]>.15;if(S[h]>=F[h]||k){k&&U--;const I=Math.random()*.08,O=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);v[h*3]=I*Math.sin(W)*Math.cos(O),v[h*3+1]=I*Math.sin(W)*Math.sin(O),v[h*3+2]=I*Math.cos(W),r(_),b[h*3]=_[0],b[h*3+1]=_[1],b[h*3+2]=_[2],a(C,A,h),N=!0,S[h]=0,F[h]=1.8+Math.random()*.8,z[h]=0;continue}const q=Math.sqrt(v[h*3]*v[h*3]+v[h*3+1]*v[h*3+1]+v[h*3+2]*v[h*3+2]),R=q>1.6?(q-1.6)/.6:0;R>0&&(b[h*3]*=1-R*.08,b[h*3+1]*=1-R*.08,b[h*3+2]*=1-R*.08,A[h]=A[h]*(1+R*.8)),v[h*3]+=b[h*3]*l,v[h*3+1]+=b[h*3+1]*l,v[h*3+2]+=b[h*3+2]*l;const H=v[h*3]*v[h*3]+v[h*3+1]*v[h*3+1]+v[h*3+2]*v[h*3+2];if(H>=s)if(z[h])A[h]*=.92;else{z[h]=1;const I=Math.sqrt(H),O=d/I;v[h*3]*=O,v[h*3+1]*=O,v[h*3+2]*=O,b[h*3]=0,b[h*3+1]=0,b[h*3+2]=0,x&&x({position:new tt(v[h*3],v[h*3+1],v[h*3+2]),intensity:1}),S[h]=F[h]-.8}}f.current&&(f.current.geometry.attributes.position.needsUpdate=!0,N&&(f.current.geometry.attributes.aColor.needsUpdate=!0,f.current.geometry.attributes.aSize.needsUpdate=!0))}),e.jsxs("points",{ref:f,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[t.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[t.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[t.sizes,1]})]}),e.jsx("shaderMaterial",{uniforms:o,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            // PARTS visible through entire journey — fade gently at edge, don't vanish
            float edgeFade = 1.0 - smoothstep(0.5, 0.95, travel) * 0.6;
            vAlpha = 0.8 * (0.8 + 0.15 * flow) * edgeFade;
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function vt(){const{positions:x,colors:m,sizes:y}=u.useMemo(()=>{const f=new Float32Array(135),d=new Float32Array(135),s=new Float32Array(45);for(let r=0;r<45;r++){const a=Math.acos(-1+2*r/45),t=Math.sqrt(45*Math.PI)*a,o=2.35;f[r*3]=o*Math.cos(t)*Math.sin(a),f[r*3+1]=o*Math.sin(t)*Math.sin(a),f[r*3+2]=o*Math.cos(a);const i=r>=36;if(i)d[r*3]=.133,d[r*3+1]=.827,d[r*3+2]=.933;else{const n=new E().setHSL(.75+Math.random()*.1,.7,.6);d[r*3]=n.r,d[r*3+1]=n.g,d[r*3+2]=n.b}s[r]=i?.09:.055}return{positions:f,colors:d,sizes:s}},[]),p=u.useMemo(()=>({time:{value:0}}),[]);return w((f,d)=>{p.time.value+=d*1.5}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vColor = aColor;
            vAlpha = 0.6;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function ht(){const g=u.useRef(),x=u.useMemo(()=>({time:{value:0}}),[]),m=u.useRef(0);w((d,s)=>{m.current+=s,x.time.value=m.current,g.current&&(g.current.rotation.y=m.current*.06)});const{positions:y,colors:p,sizes:f}=u.useMemo(()=>{const s=new Float32Array(90),r=new Float32Array(90),a=new Float32Array(30);for(let t=0;t<30;t++){const o=t/30*Math.PI*2,i=t%3,n=2.55+i*.22,l=.15*i;s[t*3]=n*Math.cos(o),s[t*3+1]=n*Math.sin(o)*Math.sin(l),s[t*3+2]=n*Math.sin(o)*Math.cos(l);const c=t/30;r[t*3]=.659*(1-c)+.133*c,r[t*3+1]=.333*(1-c)+.827*c,r[t*3+2]=.969*(1-c)+.933*c,a[t]=.015+Math.random()*.025}return{positions:s,colors:r,sizes:a}},[]);return e.jsx("group",{ref:g,children:e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]})]}),e.jsx("shaderMaterial",{uniforms:x,vertexShader:`
            attribute float aSize; attribute vec3 aColor;
            varying vec3 vColor; varying float vAlpha;
            void main() {
              vColor = aColor;
              vAlpha = 0.5;
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
          `,transparent:!0,depthWrite:!1,blending:j})]})})}function ut(){const g=u.useRef(),x=u.useRef(0),{positions:m,colors:y,sizes:p}=u.useMemo(()=>{const s=new Float32Array(6),r=new Float32Array(6),a=new Float32Array(2);for(let t=0;t<2;t++){const o=t/2*Math.PI*2+Math.random()*.5,i=4+Math.random()*2;s[t*3]=i*Math.cos(o),s[t*3+1]=(Math.random()-.5)*3,s[t*3+2]=i*Math.sin(o);const n=Math.random();n<.4?(r[t*3]=.13,r[t*3+1]=.82,r[t*3+2]=.93):n<.7?(r[t*3]=.84,r[t*3+1]=.27,r[t*3+2]=.93):(r[t*3]=.83,r[t*3+1]=.66,r[t*3+2]=.32),a[t]=.03+Math.random()*.02}return{positions:s,colors:r,sizes:a}},[]),f=u.useMemo(()=>({time:{value:0}}),[]);return w((d,s)=>{var a,t,o;x.current+=s,f.time.value=x.current,g.current&&(g.current.rotation.y=x.current*.02);const r=(o=(t=(a=g.current)==null?void 0:a.geometry)==null?void 0:t.attributes)==null?void 0:o.aSize;if(r){for(let i=0;i<2;i++)r.array[i]=.03;r.needsUpdate=!0}}),e.jsxs("points",{ref:g,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]})]}),e.jsx("shaderMaterial",{uniforms:f,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; void main(){vColor=aColor; vAlpha=0.6; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:j})]})}function pt(){const x=u.useRef();u.useRef([]);const m=u.useRef(0),y=u.useMemo(()=>{const d=new Float32Array(1200),s=new Float32Array(400*3),r=new Float32Array(400),a=()=>Math.random();for(let t=0;t<400;t++){const o=a()*Math.PI*2,i=Math.acos(2*a()-1),n=a();let l,c;n<.45?(l=6+a()*6,c=.03):n<.8?(l=12+a()*8,c=.02):(l=20+a()*8,c=.015),d[t*3]=l*Math.sin(i)*Math.cos(o),d[t*3+1]=l*Math.sin(i)*Math.sin(o),d[t*3+2]=l*Math.cos(i);const M=a();M<.4?(s[t*3]=.95,s[t*3+1]=.97,s[t*3+2]=1):M<.55?(s[t*3]=.3,s[t*3+1]=.95,s[t*3+2]=1):M<.68?(s[t*3]=1,s[t*3+1]=1,s[t*3+2]=1):M<.78?(s[t*3]=.6,s[t*3+1]=.8,s[t*3+2]=1):M<.88?(s[t*3]=.95,s[t*3+1]=.35,s[t*3+2]=.9):(s[t*3]=1,s[t*3+1]=.82,s[t*3+2]=.55),r[t]=c+a()*.015}return{positions:d,colors:s,sizes:r}},[]),p=u.useMemo(()=>{const s=new Float32Array(36),r=new Float32Array(36),a=new Float32Array(12),t=new Float32Array(24),o=()=>Math.random();for(let i=0;i<12;i++){const n=o()*Math.PI*2,l=Math.acos(2*o()-1),c=o()<.65?6+o()*8:14+o()*9;s[i*3]=c*Math.sin(l)*Math.cos(n),s[i*3+1]=c*Math.sin(l)*Math.sin(n),s[i*3+2]=c*Math.cos(l);const M=o();let v=[0,.8,1];M<.25?v=[0,.82,1]:M<.45?v=[.1,.92,.7]:M<.6?v=[.05,.55,.95]:M<.78?v=[.15,.75,.88]:v=[.35,.15,.8],r[i*3]=v[0],r[i*3+1]=v[1],r[i*3+2]=v[2],a[i]=120+o()*140,t[i*2]=2+o()*3,t[i*2+1]=o()*100}return{positions:s,colors:r,sizes:a,noise:t}},[]);return w((d,s)=>{m.current+=s;const r=m.current;x.current&&(x.current.rotation.y=r*.0018,x.current.rotation.x=Math.sin(r*.0012)*.012)}),e.jsxs("group",{ref:x,children:[e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[y.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y.sizes,1]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]}),e.jsxs("points",{children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",args:[p.positions,3]}),e.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p.colors,3]}),e.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p.sizes,1]}),e.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[p.noise,2]})]}),e.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})]})}function Mt({liveData:g,paused:x}){const m=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=u.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]),p=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const a=()=>{const o=g||{},i=parseFloat(String(o.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(o.gas||"").replace(/[^0-9.]/g,""))||0;let l=.9+Math.min(i/500,.5)+Math.min(n/50,.25)+Math.random()*.15;l=Math.max(.6,Math.min(1.8,l));const c=p.current;c.intensity=l,o.block&&o.block!=="—"&&o.block!==c.block?(c.block=o.block,c.pulse=1):c.pulse=Math.max(.3,(c.pulse||.3)*.94)};a();const t=setInterval(a,400);return()=>clearInterval(t)},[g]);const f=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),d=u.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),s=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=u.useMemo(()=>[1,1.5],[]);return e.jsxs(X,{camera:f,gl:d,onCreated:({gl:a})=>a.setClearColor(0,0),style:s,dpr:r,frameloop:x?"demand":"always",children:[e.jsx("ambientLight",{intensity:.05}),e.jsxs("group",{scale:1.3,children:[e.jsx(lt,{flowRef:p}),e.jsx(dt,{liveData:g,onImpact:y,flowRef:p}),e.jsx(at,{liveData:g}),e.jsx(it,{}),e.jsx(rt,{}),e.jsx(st,{}),e.jsx(vt,{}),e.jsx(ht,{}),e.jsx(ot,{})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(pt,{}),e.jsx(G,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),e.jsx(G,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),e.jsx(G,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),e.jsx(ct,{}),e.jsx(ut,{})]}),e.jsx(Y,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Mt as default};
