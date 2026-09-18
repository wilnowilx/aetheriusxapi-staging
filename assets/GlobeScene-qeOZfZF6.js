import{j as t,r as u,u as w,C as Y,S as k,O as K}from"./r3f-CuQJPTf_.js";import{u as J}from"./index-ANHLpCwf.js";import{p as A,e as E,q as Q,r as T,F as N,D,s as H,t as L,u as Z,v as tt,h as et}from"./three-D5fvuNmv.js";import"./gsap-CzGW6FVa.js";const z=500;function ot({reputationParticles:g}){const x=u.useRef();g.length;const{positions:f,colors:b,sizes:h,alphas:m,types:d}=u.useMemo(()=>{const r=new Float32Array(z*3),o=new Float32Array(z*3),a=new Float32Array(z),e=new Float32Array(z),s=new Float32Array(z);for(let i=0;i<z;i++)r[i*3]=0,r[i*3+1]=0,r[i*3+2]=0,o[i*3]=0,o[i*3+1]=0,o[i*3+2]=0,a[i]=0,e[i]=0,s[i]=0;return{positions:r,colors:o,sizes:a,alphas:e,types:s}},[]);return w((r,o)=>{if(!x.current)return;const{positions:a,colors:e,sizes:s,alphas:i,types:n}=x.current.geometry.attributes;for(let l=0;l<Math.min(g.length,z);l++){const c=g[l];a.array[l*3]=c.position[0],a.array[l*3+1]=c.position[1],a.array[l*3+2]=c.position[2];const M=new E(c.color);e.array[l*3]=M.r,e.array[l*3+1]=M.g,e.array[l*3+2]=M.b;const p=c.age/c.maxAge,y=p<.1?p/.1:1,_=p>.7?(1-p)/.3:1,C=Math.min(y,_);s.array[l]=c.size*(1+p*.5)*C,i.array[l]=C*(.6+.4*Math.sin(Date.now()*.003+l)),n.array[l]=c.isBatch?1:0}for(let l=g.length;l<z;l++)i.array[l]=0,s.array[l]=0;a.needsUpdate=!0,e.needsUpdate=!0,s.needsUpdate=!0,i.needsUpdate=!0,n.needsUpdate=!0}),t.jsxs("points",{ref:x,renderOrder:15,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h,1]}),t.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[m,1]}),t.jsx("bufferAttribute",{attach:"attributes-aType",args:[d,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:A})]})}function at(){const g=J();return g.length===0?null:t.jsx(ot,{reputationParticles:g})}const rt=({liveData:g})=>{const x=u.useRef(),[f,b]=u.useState("70+ ENDPOINTS  40 FREE  VM ONLINE");u.useEffect(()=>{let o=!0;const a=async()=>{try{const s="https://34-156-149-38.sslip.io/aetherapi",[i,n]=await Promise.allSettled([fetch(`${s}/v1/telemetry`),fetch(`${s}/v1/x402/base-stats`)]);if(!o)return;const l=i.status==="fulfilled"&&i.value.ok?await i.value.json():{},c=n.status==="fulfilled"&&n.value.ok?await n.value.json():{},M=l.totals||{},p=M.calls||0,y=M.avg_latency_ms||0,_=Object.keys(l.endpoint_hits||{}).length||70,C=c.block_number||c.block||"",S=c.gas_price_gwei||c.gas_price||"",j=[];j.push(`${_}+ ENDPOINTS`),j.push("40 FREE"),y>0&&j.push(`${Math.round(y)}ms`),C&&j.push(`BLK ${C}`),S&&j.push(`GAS ${S}`),p>0&&j.push(`${p} CALLS`);const P=j.join("  ");b(P)}catch{}};a();const e=setInterval(a,500);return()=>{o=!1,clearInterval(e)}},[]);const h=u.useMemo(()=>[{radius:2.8,tilt:.22,yOffset:.55,speed:.012,bandWidth:.38,color:"#ffffff",opacity:.85,fontSize:56,phrase:"THE MARKETPLACE THAT LIVES"},{radius:2.55,tilt:-.12,yOffset:-.15,speed:-.018,bandWidth:.3,color:"#d946ef",opacity:.75,fontSize:48,phrase:"API INFRASTRUCTURE FOR AI AGENTS THAT PAY"},{radius:2.35,tilt:.06,yOffset:-.65,speed:.035,bandWidth:.24,color:"#22d3ee",opacity:.68,fontSize:36,phrase:f}],[f]),m=u.useMemo(()=>h.map(o=>{const a=document.createElement("canvas");a.width=2048,a.height=120;const e=a.getContext("2d");e.clearRect(0,0,a.width,a.height);const s=`900 ${o.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;e.font=s,e.textAlign="left",e.textBaseline="middle";const i=e.measureText(o.phrase).width,n=Math.max(160,i*.45),l=i+n;e.shadowBlur=10,e.shadowColor=o.color,e.fillStyle=o.color,e.globalAlpha=.3;for(let M=0;M<a.width+l;M+=l)e.fillText(o.phrase,M,a.height/2);e.shadowBlur=0,e.globalAlpha=1,e.fillStyle="#ffffff";for(let M=0;M<a.width+l;M+=l)e.fillText(o.phrase,M,a.height/2);e.globalAlpha=1;const c=new H(a);return c.wrapS=Z,c.wrapT=tt,c.repeat.set(1,1),c.anisotropy=4,c.minFilter=L,c.magFilter=L,c}),[h]),[d,r]=u.useState(null);return w((o,a)=>{x.current&&h.forEach((e,s)=>{const i=x.current.children[s];i&&(d===s||(i.rotation.y+=a*e.speed))})}),t.jsx("group",{ref:x,children:h.map((o,a)=>t.jsx("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:t.jsxs("mesh",{onPointerOver:e=>{e.stopPropagation(),r(a),document.body.style.cursor="pointer"},onPointerOut:()=>{r(null),document.body.style.cursor="auto"},onClick:()=>{},children:[t.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),t.jsx("shaderMaterial",{uniforms:{uMap:{value:m[a]},uOpacity:{value:o.opacity}},vertexShader:`
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
                  float faceFactor = gl_FrontFacing ? 1.0 : 0.05; // backface nearly invisible — no shadows
                  gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity * faceFactor);
                }
              `,transparent:!0,side:D,depthWrite:!1,blending:A,toneMapped:!1})]})},a))})};function st(){const g=u.useMemo(()=>({colorA:{value:new E(2282478)},colorB:{value:new E(11032055)},colorC:{value:new E(14239471)}}),[]);return t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:N,transparent:!0,depthWrite:!1,blending:A})]})}function it(){return t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,side:N,transparent:!0,depthWrite:!1,blending:A})]})}function nt(){const g=u.useRef();return t.jsxs("mesh",{ref:g,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function lt({gasUniforms:g}){const f=u.useRef(),b=u.useRef(0),h=u.useMemo(()=>{const m=new Float32Array(30),d=new Float32Array(30),r=new Float32Array(30),o=new Float32Array(10);for(let a=0;a<10;a++){const e=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),i=.2+Math.random()*.4;m[a*3]=i*Math.sin(s)*Math.cos(e)*1.8,m[a*3+1]=i*Math.cos(s)*.6,m[a*3+2]=i*Math.sin(s)*Math.sin(e)*.8,d[a*3]=1+Math.random()*2.5,d[a*3+1]=.8+Math.random()*2,d[a*3+2]=1+Math.random()*2.5,r[a*3]=.1,r[a*3+1]=.5,r[a*3+2]=.7,o[a]=.012+Math.random()*.015}return{positions:m,seeds:d,colors:r,sizes:o}},[]);return w((m,d)=>{var a,e,s,i;b.current+=d;const r=b.current,o=(i=(s=(e=(a=f.current)==null?void 0:a.geometry)==null?void 0:e.attributes)==null?void 0:s.position)==null?void 0:i.array;if(o){for(let n=0;n<10;n++){const l=h.seeds[n*3],c=h.seeds[n*3+1],M=h.seeds[n*3+2];o[n*3]=h.positions[n*3]+Math.sin(r*l+n*.7)*.015,o[n*3+1]=h.positions[n*3+1]+Math.cos(r*c+n*1.1)*.012,o[n*3+2]=h.positions[n*3+2]+Math.sin(r*M+n*.9)*.015}f.current.geometry.attributes.position.needsUpdate=!0}}),t.jsxs("points",{ref:f,renderOrder:2,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[h.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:A,toneMapped:!1})]})}function ct({flowRef:g}){const x=u.useRef(),f=u.useRef(0),b=u.useMemo(()=>({size:[.22,.22,.07],lMainPos:[-.405,.22/2,0],lTabPos:[-.405-.22/2+.0924/2,.22-.0924/2,0],tabSize:[.0924,.0924,.07],squares:[{pos:[-.405+(.22+.05),.22/2,0]},{pos:[-.405+2*(.22+.05),.22/2,0]},{pos:[-.405+3*(.22+.05),.22/2,0]}]}),[]);w((m,d)=>{f.current+=d;const r=(g==null?void 0:g.current)||{pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-d*1.6),x.current){x.current.rotation.y=f.current*.08,x.current.rotation.x=Math.sin(f.current*.12)*.08;const o=Math.sin(f.current*1.5),a=Math.sin(f.current*.9)*.03,s=1+.03*o+.08*0;x.current.scale.set(s,s,s),x.current.position.y=a;const i=x.current.children[0];i!=null&&i.isGroup&&i.children.forEach(n=>{n!=null&&n.material&&(n.material.opacity=1)})}});const h=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return w((m,d)=>{var r;h.time.value+=d*.08,h.flow.value=((r=g==null?void 0:g.current)==null?void 0:r.intensity)||1}),t.jsxs("group",{ref:x,scale:1.3,children:[t.jsxs("mesh",{renderOrder:0,children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*3.0+time*0.2)*sin(vPos.y*2.5+time*0.15)*sin(vPos.z*2.0+time*0.18);
              float turbulence = 0.7 + 0.15 * swirl; // barely moves
              vec3 col = mix(vec3(0.0,0.25,0.8), vec3(0.0,0.6,0.9), dist*0.5);
              float alpha = fog * turbulence * 0.12 * (0.5 + 0.5*flow); // boosted from 0.08
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:Q})]}),t.jsxs("mesh",{renderOrder:1,children:[t.jsx("sphereGeometry",{args:[1.2,20,14]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*3.0+time*0.25)*sin(vPos.y*2.5+time*0.2)*sin(vPos.z*2.0+time*0.22);
              float tendrils = 0.7 + 0.15 * swirl; // barely moves
              float noise = tendrils * 0.7 + 0.3;
              vec3 col = mix(vec3(0.0,0.3,0.8), vec3(0.0,0.7,0.9), noise*0.3);
              float alpha = radial * noise * 0.12 * (0.4 + 0.6*flow); // boosted from 0.08
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:N})]}),t.jsxs("group",{renderOrder:-1,position:[0,-.1,0],children:[t.jsxs("mesh",{position:b.lMainPos,children:[t.jsx("boxGeometry",{args:b.size}),t.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.95,side:D,depthWrite:!1,toneMapped:!1})]}),t.jsxs("mesh",{position:b.lTabPos,children:[t.jsx("boxGeometry",{args:b.tabSize}),t.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.95,side:D,depthWrite:!1,toneMapped:!1})]}),b.squares.map((m,d)=>t.jsxs("mesh",{position:m.pos,children:[t.jsx("boxGeometry",{args:b.size}),t.jsx("meshBasicMaterial",{color:"#0052FF",transparent:!0,opacity:.95,side:D,depthWrite:!1,toneMapped:!1})]},d)),t.jsx("sprite",{position:[0,-.22,0],scale:[.45,.1,1],children:t.jsx("spriteMaterial",{map:(()=>{const m=document.createElement("canvas");m.width=256,m.height=64;const d=m.getContext("2d");d.clearRect(0,0,256,64),d.font="bold 38px 'JetBrains Mono', monospace",d.textAlign="center",d.textBaseline="middle",d.shadowColor="#0052FF",d.shadowBlur=8,d.fillStyle="#0052FF",d.globalAlpha=.9,d.fillText("BASE",128,32);const r=new H(m);return r.minFilter=L,r})(),transparent:!0,depthWrite:!1,blending:A})})]}),t.jsx(lt,{gasUniforms:h}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
              float alpha = radial * 0.85 * noise * (0.75 + 0.25*flow);
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:N})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.35 * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:N})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.20;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:N})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float phase = sin(time*0.2 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.10);
              float alpha = radial * 0.10;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:N})]})]})}function dt(){const f=u.useRef(),b=u.useRef([]),h=u.useRef(0),m=u.useMemo(()=>{const r=new Float32Array(600),o=new Float32Array(600),a=new Float32Array(200);for(let e=0;e<200;e++){const s=Math.random()*Math.PI*2,i=Math.acos(2*Math.random()-1),n=4.8+Math.random()*12;r[e*3]=n*Math.sin(i)*Math.cos(s),r[e*3+1]=n*Math.sin(i)*Math.sin(s),r[e*3+2]=n*Math.cos(i);const l=Math.random();l<.5?(o[e*3]=0,o[e*3+1]=.85,o[e*3+2]=1):l<.8?(o[e*3]=0,o[e*3+1]=.4,o[e*3+2]=1):(o[e*3]=.1,o[e*3+1]=.9,o[e*3+2]=.7),a[e]=.012+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),d=u.useMemo(()=>Array.from({length:6},()=>{const r=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=5.5+Math.random()*8.5,e=Math.random();let s;return e<.4?s=[0,.82,1]:e<.7?s=[0,.45,.95]:s=[.1,.88,.72],{position:[a*Math.sin(o)*Math.cos(r),a*Math.sin(o)*Math.sin(r),a*Math.cos(o)],scale:1.8+Math.random()*2.5,color:s,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return w((r,o)=>{h.current+=o,f.current&&(f.current.rotation.y=h.current*.008),b.current.forEach((a,e)=>{if(!a)return;const s=d[e],i=h.current;a.position.x=s.position[0]+Math.sin(i*s.rotSpeed+s.phase)*s.bobAmp,a.position.y=s.position[1]+Math.cos(i*s.bobSpeed+s.phase)*s.bobAmp*.6,a.position.z=s.position[2]+Math.sin(i*s.rotSpeed*.7+s.phase*1.3)*s.bobAmp*.4})}),t.jsxs("group",{ref:f,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:A})]}),d.map((r,o)=>t.jsxs("mesh",{ref:a=>b.current[o]=a,position:r.position,children:[t.jsx("planeGeometry",{args:[1,1]}),t.jsx("shaderMaterial",{uniforms:{color:{value:new E(r.color[0],r.color[1],r.color[2])},scaleVal:{value:r.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:T,side:D})]},o))]})}function vt({liveData:g,onImpact:x,flowRef:f}){const h=u.useRef(0),m=u.useRef(),d=2.2,r=d*d,o=n=>{var y;const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),M=Math.max(.5,Math.min(1.8,((y=f==null?void 0:f.current)==null?void 0:y.intensity)||1)),p=(1.6+Math.random()*1)*(.9+.3*M);n[0]=Math.sin(c)*Math.cos(l)*p,n[1]=Math.sin(c)*Math.sin(l)*p,n[2]=Math.cos(c)*p},a=(n,l,c)=>{Math.random()<.5?(n[c*3]=0,n[c*3+1]=.85,n[c*3+2]=1,l[c]=.04+Math.random()*.03):(n[c*3]=0,n[c*3+1]=.4,n[c*3+2]=1,l[c]=.035+Math.random()*.03)},e=u.useMemo(()=>{const n=new Float32Array(60),l=new Float32Array(60),c=new Float32Array(60),M=new Float32Array(20),p=new Float32Array(20),y=new Float32Array(20),_=new Uint8Array(20);for(let C=0;C<20;C++){const S=Math.random()*.08,j=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1);n[C*3]=S*Math.sin(P)*Math.cos(j),n[C*3+1]=S*Math.sin(P)*Math.sin(j),n[C*3+2]=S*Math.cos(P);const F=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1),O=1.6+Math.random()*1;l[C*3]=Math.sin(U)*Math.cos(F)*O,l[C*3+1]=Math.sin(U)*Math.sin(F)*O,l[C*3+2]=Math.cos(U)*O,a(c,M,C),p[C]=Math.random()*1.5,y[C]=1.8+Math.random()*.8}return{positions:n,velocities:l,colors:c,sizes:M,lifetimes:p,maxLifetimes:y,hit:_}},[]),s=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),i=u.useRef(0);return w((n,l)=>{var B,V;h.current+=l,s.time.value=h.current;const c=Math.max(.5,Math.min(1.8,((B=f==null?void 0:f.current)==null?void 0:B.intensity)||1));s.flow.value=c;const M=((V=f==null?void 0:f.current)==null?void 0:V.pulse)>.95&&h.current-i.current>1.2;M&&(i.current=h.current);const{positions:p,velocities:y,colors:_,sizes:C,lifetimes:S,maxLifetimes:j,hit:P}=e,F=[0,0,0];let U=!1,O=M?2:0;for(let v=0;v<20;v++){S[v]+=l;const X=O>0&&S[v]>.15;if(S[v]>=j[v]||X){X&&O--;const W=Math.random()*.08,R=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);p[v*3]=W*Math.sin(G)*Math.cos(R),p[v*3+1]=W*Math.sin(G)*Math.sin(R),p[v*3+2]=W*Math.cos(G),o(F),y[v*3]=F[0],y[v*3+1]=F[1],y[v*3+2]=F[2],a(_,C,v),U=!0,S[v]=0,j[v]=1.8+Math.random()*.8,P[v]=0;continue}const $=Math.sqrt(p[v*3]*p[v*3]+p[v*3+1]*p[v*3+1]+p[v*3+2]*p[v*3+2]),I=$>1.6?($-1.6)/.6:0;I>0&&(y[v*3]*=1-I*.08,y[v*3+1]*=1-I*.08,y[v*3+2]*=1-I*.08,C[v]=C[v]*(1+I*.8)),p[v*3]+=y[v*3]*l,p[v*3+1]+=y[v*3+1]*l,p[v*3+2]+=y[v*3+2]*l;const q=p[v*3]*p[v*3]+p[v*3+1]*p[v*3+1]+p[v*3+2]*p[v*3+2];if(q>=r)if(P[v])C[v]*=.92;else{P[v]=1;const W=Math.sqrt(q),R=d/W;p[v*3]*=R,p[v*3+1]*=R,p[v*3+2]*=R,y[v*3]=0,y[v*3+1]=0,y[v*3+2]=0,x&&x({position:new et(p[v*3],p[v*3+1],p[v*3+2]),intensity:1}),S[v]=j[v]-.8}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,U&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:m,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            // PARTS visible through entire journey — fade gently at edge, don't vanish
            float edgeFade = 1.0 - smoothstep(0.5, 0.95, travel) * 0.6;
            vAlpha = 0.5 * (0.8 + 0.15 * flow) * edgeFade; // reduced from 0.8
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
            float alpha = (starCross * 0.15 + centerGlow * 0.2) * vAlpha; // reduced from 0.3+0.3

            gl_FragColor = vec4(hotColor, alpha);
          }
        `,transparent:!0,depthWrite:!1,blending:A})]})}function ht(){const{positions:x,colors:f,sizes:b}=u.useMemo(()=>{const m=new Float32Array(135),d=new Float32Array(135),r=new Float32Array(45);for(let o=0;o<45;o++){const a=Math.acos(-1+2*o/45),e=Math.sqrt(45*Math.PI)*a,s=2.35;m[o*3]=s*Math.cos(e)*Math.sin(a),m[o*3+1]=s*Math.sin(e)*Math.sin(a),m[o*3+2]=s*Math.cos(a);const i=o>=36;if(i)d[o*3]=.133,d[o*3+1]=.827,d[o*3+2]=.933;else{const n=new E().setHSL(.75+Math.random()*.1,.7,.6);d[o*3]=n.r,d[o*3+1]=n.g,d[o*3+2]=n.b}r[o]=i?.09:.055}return{positions:m,colors:d,sizes:r}},[]),h=u.useMemo(()=>({time:{value:0}}),[]);return w((m,d)=>{h.time.value+=d*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:A})]})}function ut(){const g=u.useRef(),x=u.useMemo(()=>({time:{value:0}}),[]),f=u.useRef(0);w((d,r)=>{f.current+=r,x.time.value=f.current,g.current&&(g.current.rotation.y=f.current*.06)});const{positions:b,colors:h,sizes:m}=u.useMemo(()=>{const r=new Float32Array(90),o=new Float32Array(90),a=new Float32Array(30);for(let e=0;e<30;e++){const s=e/30*Math.PI*2,i=e%3,n=2.55+i*.22,l=.15*i;r[e*3]=n*Math.cos(s),r[e*3+1]=n*Math.sin(s)*Math.sin(l),r[e*3+2]=n*Math.sin(s)*Math.cos(l);const c=e/30;o[e*3]=.659*(1-c)+.133*c,o[e*3+1]=.333*(1-c)+.827*c,o[e*3+2]=.969*(1-c)+.933*c,a[e]=.015+Math.random()*.025}return{positions:r,colors:o,sizes:a}},[]);return t.jsx("group",{ref:g,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:A})]})})}function pt(){const g=u.useRef(),x=u.useRef(0),{positions:f,colors:b,sizes:h}=u.useMemo(()=>{const r=new Float32Array(6),o=new Float32Array(6),a=new Float32Array(2);for(let e=0;e<2;e++){const s=e/2*Math.PI*2+Math.random()*.5,i=4+Math.random()*2;r[e*3]=i*Math.cos(s),r[e*3+1]=(Math.random()-.5)*3,r[e*3+2]=i*Math.sin(s);const n=Math.random();n<.4?(o[e*3]=.13,o[e*3+1]=.82,o[e*3+2]=.93):n<.7?(o[e*3]=.84,o[e*3+1]=.27,o[e*3+2]=.93):(o[e*3]=.83,o[e*3+1]=.66,o[e*3+2]=.32),a[e]=.03+Math.random()*.02}return{positions:r,colors:o,sizes:a}},[]),m=u.useMemo(()=>({time:{value:0}}),[]);return w((d,r)=>{var a,e,s;x.current+=r,m.time.value=x.current,g.current&&(g.current.rotation.y=x.current*.02);const o=(s=(e=(a=g.current)==null?void 0:a.geometry)==null?void 0:e.attributes)==null?void 0:s.aSize;if(o){for(let i=0;i<2;i++)o.array[i]=.03;o.needsUpdate=!0}}),t.jsxs("points",{ref:g,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; void main(){vColor=aColor; vAlpha=0.6; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:A})]})}function ft(){const x=u.useRef();u.useRef([]);const f=u.useRef(0),b=u.useMemo(()=>{const d=new Float32Array(1200),r=new Float32Array(400*3),o=new Float32Array(400),a=()=>Math.random();for(let e=0;e<400;e++){const s=a()*Math.PI*2,i=Math.acos(2*a()-1),n=a();let l,c;n<.45?(l=6+a()*6,c=.03):n<.8?(l=12+a()*8,c=.02):(l=20+a()*8,c=.015),d[e*3]=l*Math.sin(i)*Math.cos(s),d[e*3+1]=l*Math.sin(i)*Math.sin(s),d[e*3+2]=l*Math.cos(i);const M=a();M<.4?(r[e*3]=.95,r[e*3+1]=.97,r[e*3+2]=1):M<.55?(r[e*3]=.3,r[e*3+1]=.95,r[e*3+2]=1):M<.68?(r[e*3]=1,r[e*3+1]=1,r[e*3+2]=1):M<.78?(r[e*3]=.6,r[e*3+1]=.8,r[e*3+2]=1):M<.88?(r[e*3]=.95,r[e*3+1]=.35,r[e*3+2]=.9):(r[e*3]=1,r[e*3+1]=.82,r[e*3+2]=.55),o[e]=c+a()*.015}return{positions:d,colors:r,sizes:o}},[]),h=u.useMemo(()=>{const r=new Float32Array(36),o=new Float32Array(36),a=new Float32Array(12),e=new Float32Array(24),s=()=>Math.random();for(let i=0;i<12;i++){const n=s()*Math.PI*2,l=Math.acos(2*s()-1),c=s()<.65?6+s()*8:14+s()*9;r[i*3]=c*Math.sin(l)*Math.cos(n),r[i*3+1]=c*Math.sin(l)*Math.sin(n),r[i*3+2]=c*Math.cos(l);const M=s();let p=[0,.8,1];M<.25?p=[0,.82,1]:M<.45?p=[.1,.92,.7]:M<.6?p=[.05,.55,.95]:M<.78?p=[.15,.75,.88]:p=[.35,.15,.8],o[i*3]=p[0],o[i*3+1]=p[1],o[i*3+2]=p[2],a[i]=120+s()*140,e[i*2]=2+s()*3,e[i*2+1]=s()*100}return{positions:r,colors:o,sizes:a,noise:e}},[]);return w((d,r)=>{f.current+=r;const o=f.current;x.current&&(x.current.rotation.y=o*.0018,x.current.rotation.x=Math.sin(o*.0012)*.012)}),t.jsxs("group",{ref:x,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[b.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:A})]}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[h.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h.sizes,1]}),t.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[h.noise,2]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:A})]})]})}function bt({liveData:g,paused:x}){const f=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=u.useCallback(a=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(a)},[]),h=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const a=()=>{const s=g||{},i=parseFloat(String(s.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(s.gas||"").replace(/[^0-9.]/g,""))||0;let l=.9+Math.min(i/500,.5)+Math.min(n/50,.25)+Math.random()*.15;l=Math.max(.6,Math.min(1.8,l));const c=h.current;c.intensity=l,s.block&&s.block!=="—"&&s.block!==c.block?(c.block=s.block,c.pulse=1):c.pulse=Math.max(.3,(c.pulse||.3)*.94)};a();const e=setInterval(a,400);return()=>clearInterval(e)},[g]);const m=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),d=u.useMemo(()=>({alpha:!0,antialias:!f,powerPreference:"high-performance"}),[f]),r=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),o=u.useMemo(()=>[1,1.5],[]);return t.jsxs(Y,{camera:m,gl:d,onCreated:({gl:a})=>a.setClearColor(0,0),style:r,dpr:o,frameloop:x?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(ct,{flowRef:h}),t.jsx(vt,{liveData:g,onImpact:b,flowRef:h}),t.jsx(rt,{liveData:g}),t.jsx(nt,{}),t.jsx(st,{}),t.jsx(it,{}),t.jsx(ht,{}),t.jsx(ut,{}),t.jsx(at,{})]}),!f&&t.jsxs(t.Fragment,{children:[t.jsx(ft,{}),t.jsx(k,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),t.jsx(k,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),t.jsx(k,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),t.jsx(dt,{}),t.jsx(pt,{})]}),t.jsx(K,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{bt as default};
