import{j as t,r as u,u as A,C as q,S as L,O as H,T as K}from"./r3f--LKKjn6r.js";import{u as Z,a as X}from"./index-Dro2HUBn.js";import{K as j,e as E,X as J,Y as T,Z as O,G as W,_ as Q,D as tt,h as et}from"./three-Ds4l45Xa.js";import"./gsap-CzGW6FVa.js";const z=500;function ot({reputationParticles:x}){const M=u.useRef();x.length;const{positions:m,colors:c,sizes:f,alphas:g,types:d}=u.useMemo(()=>{const o=new Float32Array(z*3),a=new Float32Array(z*3),s=new Float32Array(z),e=new Float32Array(z),r=new Float32Array(z);for(let n=0;n<z;n++)o[n*3]=0,o[n*3+1]=0,o[n*3+2]=0,a[n*3]=0,a[n*3+1]=0,a[n*3+2]=0,s[n]=0,e[n]=0,r[n]=0;return{positions:o,colors:a,sizes:s,alphas:e,types:r}},[]);return A((o,a)=>{if(!M.current)return;const{positions:s,colors:e,sizes:r,alphas:n,types:l}=M.current.geometry.attributes;for(let i=0;i<Math.min(x.length,z);i++){const v=x[i];s.array[i*3]=v.position[0],s.array[i*3+1]=v.position[1],s.array[i*3+2]=v.position[2];const y=new E(v.color);e.array[i*3]=y.r,e.array[i*3+1]=y.g,e.array[i*3+2]=y.b;const p=v.age/v.maxAge,b=p<.1?p/.1:1,P=p>.7?(1-p)/.3:1,C=Math.min(b,P);r.array[i]=v.size*(1+p*.5)*C,n.array[i]=C*(.6+.4*Math.sin(Date.now()*.003+i)),l.array[i]=v.isBatch?1:0}for(let i=x.length;i<z;i++)n.array[i]=0,r.array[i]=0;s.needsUpdate=!0,e.needsUpdate=!0,r.needsUpdate=!0,n.needsUpdate=!0,l.needsUpdate=!0}),t.jsxs("points",{ref:M,renderOrder:15,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]}),t.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[g,1]}),t.jsx("bufferAttribute",{attach:"attributes-aType",args:[d,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function at(){const x=Z();return x.length===0?null:t.jsx(ot,{reputationParticles:x})}const rt="https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2";function st({radius:x,tilt:M,yOffset:m,speed:c,fontSize:f,color:g,opacity:d,phrase:o,repeatCount:a=5,hovered:s}){const e=u.useRef(),r=u.useMemo(()=>{const l=[];for(let i=0;i<a;i++)l.push(o);return l.join("       ")},[o,a]);A((l,i)=>{e.current&&!s&&(e.current.rotation.y+=i*c)});const n=f/200;return t.jsx("group",{ref:e,position:[0,m,0],rotation:[M,0,0],children:t.jsx(K,{font:rt,fontSize:n,color:g,anchorX:"center",anchorY:"middle",curveRadius:-x,letterSpacing:.08,fillOpacity:d,depthWrite:!1,renderOrder:10,children:r})})}const it=({liveData:x})=>{const[M,m]=u.useState("70+ ENDPOINTS  40 FREE  VM ONLINE"),{params:c}=X()||{params:{}},[f,g]=u.useState(null);u.useEffect(()=>{let o=!0;const a=async()=>{try{const e="https://34-156-149-38.sslip.io/aetherapi",[r,n]=await Promise.allSettled([fetch(`${e}/v1/telemetry`),fetch(`${e}/v1/x402/base-stats`)]);if(!o)return;const l=r.status==="fulfilled"&&r.value.ok?await r.value.json():{},i=n.status==="fulfilled"&&n.value.ok?await n.value.json():{},v=l.totals||{},y=v.calls||0,p=v.avg_latency_ms||0,b=Object.keys(l.endpoint_hits||{}).length||70,P=i.block_number||i.block||"",C=i.gas_price_gwei||i.gas_price||"",S=[];S.push(`${b}+ ENDPOINTS`),S.push("40 FREE"),p>0&&S.push(`${Math.round(p)}ms`),P&&S.push(`BLK ${P}`),C&&S.push(`GAS ${C}`),y>0&&S.push(`${y} CALLS`);const w=S.join("  ");m(w)}catch{}};a();const s=setInterval(a,500);return()=>{o=!1,clearInterval(s)}},[]);const d=u.useMemo(()=>[{radius:c.ring0Radius??2.8,tilt:.22,yOffset:c.ring0YOffset??.55,speed:c.ring0Speed??.012,color:"#ffffff",opacity:c.ring0Opacity??.85,fontSize:c.ring0FontSize??56,phrase:"THE MARKETPLACE THAT LIVES",repeatCount:5},{radius:c.ring1Radius??2.55,tilt:-.12,yOffset:c.ring1YOffset??-.15,speed:c.ring1Speed??-.018,color:"#d946ef",opacity:c.ring1Opacity??.75,fontSize:c.ring1FontSize??48,phrase:"API INFRASTRUCTURE FOR AI AGENTS THAT PAY",repeatCount:4},{radius:c.ring2Radius??2.35,tilt:.06,yOffset:c.ring2YOffset??-.65,speed:c.ring2Speed??.035,color:"#22d3ee",opacity:c.ring2Opacity??.68,fontSize:c.ring2FontSize??36,phrase:M,repeatCount:4}],[M,c.ring0Radius,c.ring0Speed,c.ring0FontSize,c.ring0Opacity,c.ring0YOffset,c.ring1Radius,c.ring1Speed,c.ring1FontSize,c.ring1Opacity,c.ring1YOffset,c.ring2Radius,c.ring2Speed,c.ring2FontSize,c.ring2Opacity,c.ring2YOffset]);return t.jsx("group",{children:d.map((o,a)=>t.jsx(st,{...o,hovered:f===a},a))})};function nt(){const x=u.useMemo(()=>({colorA:{value:new E(2282478)},colorB:{value:new E(11032055)},colorC:{value:new E(14239471)}}),[]);return t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:j})]})}function lt(){return t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:j})]})}function ct(){const x=u.useRef();return t.jsxs("mesh",{ref:x,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function dt({gasUniforms:x}){const m=u.useRef(),c=u.useRef(0),f=u.useMemo(()=>{const g=new Float32Array(30),d=new Float32Array(30),o=new Float32Array(30),a=new Float32Array(10);for(let s=0;s<10;s++){const e=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),n=.2+Math.random()*.4;g[s*3]=n*Math.sin(r)*Math.cos(e)*1.8,g[s*3+1]=n*Math.cos(r)*.6,g[s*3+2]=n*Math.sin(r)*Math.sin(e)*.8,d[s*3]=1+Math.random()*2.5,d[s*3+1]=.8+Math.random()*2,d[s*3+2]=1+Math.random()*2.5,o[s*3]=.1,o[s*3+1]=.5,o[s*3+2]=.7,a[s]=.012+Math.random()*.015}return{positions:g,seeds:d,colors:o,sizes:a}},[]);return A((g,d)=>{var s,e,r,n;c.current+=d;const o=c.current,a=(n=(r=(e=(s=m.current)==null?void 0:s.geometry)==null?void 0:e.attributes)==null?void 0:r.position)==null?void 0:n.array;if(a){for(let l=0;l<10;l++){const i=f.seeds[l*3],v=f.seeds[l*3+1],y=f.seeds[l*3+2];a[l*3]=f.positions[l*3]+Math.sin(o*i+l*.7)*.015,a[l*3+1]=f.positions[l*3+1]+Math.cos(o*v+l*1.1)*.012,a[l*3+2]=f.positions[l*3+2]+Math.sin(o*y+l*.9)*.015}m.current.geometry.attributes.position.needsUpdate=!0}}),t.jsxs("points",{ref:m,renderOrder:2,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j,toneMapped:!1})]})}function vt({flowRef:x}){const M=u.useRef(),m=u.useRef(0),{params:c}=X()||{params:{}},f=u.useMemo(()=>{const d=c.logoSize??.22,o=c.logoGap??.05,a=.07,e=-(4*d+3*o)/2+d/2,r=d*.42;return{size:[d,d,a],lMainPos:[e,d/2,0],lTabPos:[e-d/2+r/2,d-r/2,0],tabSize:[r,r,a],squares:[{pos:[e+(d+o),d/2,0]},{pos:[e+2*(d+o),d/2,0]},{pos:[e+3*(d+o),d/2,0]}]}},[c.logoSize,c.logoGap]);A((d,o)=>{m.current+=o;const a=(x==null?void 0:x.current)||{pulse:.3};if(a.pulse=Math.max(.25,(a.pulse||0)-o*1.6),M.current){M.current.rotation.y=m.current*.08,M.current.rotation.x=Math.sin(m.current*.12)*.08;const s=Math.sin(m.current*1.5),e=Math.sin(m.current*.9)*(c.coreBreathing??.03),l=(c.coreScale??1.3)*(1+.03*s+.08*0);M.current.scale.set(l,l,l),M.current.position.y=e;const i=M.current.children[0];i!=null&&i.isGroup&&i.children.forEach(v=>{v!=null&&v.material&&(v.material.opacity=1)})}});const g=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return A((d,o)=>{var a;g.time.value+=o*(c.gasSpeed??.08),g.flow.value=((a=x==null?void 0:x.current)==null?void 0:a.intensity)||1}),t.jsxs("group",{ref:M,scale:1.3,children:[t.jsxs("mesh",{renderOrder:0,children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*3.0+time*0.2)*sin(vPos.y*2.5+time*0.15)*sin(vPos.z*2.0+time*0.18);
              float turbulence = 0.7 + 0.15 * swirl; // barely moves
              vec3 col = mix(vec3(0.0,0.25,0.8), vec3(0.0,0.6,0.9), dist*0.5);
              float alpha = fog * turbulence * ${(c.gasAlpha??.12).toFixed(3)} * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:J})]}),t.jsxs("mesh",{renderOrder:1,children:[t.jsx("sphereGeometry",{args:[1.2,20,14]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*3.0+time*0.25)*sin(vPos.y*2.5+time*0.2)*sin(vPos.z*2.0+time*0.22);
              float tendrils = 0.7 + 0.15 * swirl; // barely moves
              float noise = tendrils * 0.7 + 0.3;
              vec3 col = mix(vec3(0.0,0.3,0.8), vec3(0.0,0.7,0.9), noise*0.3);
              float alpha = radial * noise * ${(c.gasAlpha??.12).toFixed(3)} * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:O})]}),t.jsxs("group",{renderOrder:-1,position:[0,c.logoY??-.1,0],children:[t.jsxs("mesh",{position:f.lMainPos,children:[t.jsx("boxGeometry",{args:f.size}),t.jsx("meshBasicMaterial",{color:c.logoColor??"#0052FF",transparent:!0,opacity:.95,side:W,depthWrite:!1,toneMapped:!1})]}),t.jsxs("mesh",{position:f.lTabPos,children:[t.jsx("boxGeometry",{args:f.tabSize}),t.jsx("meshBasicMaterial",{color:c.logoColor??"#0052FF",transparent:!0,opacity:.95,side:W,depthWrite:!1,toneMapped:!1})]}),f.squares.map((d,o)=>t.jsxs("mesh",{position:d.pos,children:[t.jsx("boxGeometry",{args:f.size}),t.jsx("meshBasicMaterial",{color:c.logoColor??"#0052FF",transparent:!0,opacity:.95,side:W,depthWrite:!1,toneMapped:!1})]},o)),t.jsx("sprite",{position:[0,-.22,0],scale:[.45,.1,1],children:t.jsx("spriteMaterial",{map:(()=>{const d=document.createElement("canvas");d.width=256,d.height=64;const o=d.getContext("2d");o.clearRect(0,0,256,64),o.font="bold 38px 'JetBrains Mono', monospace",o.textAlign="center",o.textBaseline="middle",o.shadowColor="#0052FF",o.shadowBlur=8,o.fillStyle="#0052FF",o.globalAlpha=.9,o.fillText("BASE",128,32);const a=new Q(d);return a.minFilter=tt,a})(),transparent:!0,depthWrite:!1,blending:j})})]}),t.jsx(dt,{gasUniforms:g}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:T,side:O})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.35 * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:O})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.20;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:O})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float phase = sin(time*0.2 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.10);
              float alpha = radial * 0.10;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:T,side:O})]})]})}function ht(){const m=u.useRef(),c=u.useRef([]),f=u.useRef(0),g=u.useMemo(()=>{const o=new Float32Array(600),a=new Float32Array(600),s=new Float32Array(200);for(let e=0;e<200;e++){const r=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),l=4.8+Math.random()*12;o[e*3]=l*Math.sin(n)*Math.cos(r),o[e*3+1]=l*Math.sin(n)*Math.sin(r),o[e*3+2]=l*Math.cos(n);const i=Math.random();i<.5?(a[e*3]=0,a[e*3+1]=.85,a[e*3+2]=1):i<.8?(a[e*3]=0,a[e*3+1]=.4,a[e*3+2]=1):(a[e*3]=.1,a[e*3+1]=.9,a[e*3+2]=.7),s[e]=.012+Math.random()*.02}return{positions:o,colors:a,sizes:s}},[]),d=u.useMemo(()=>Array.from({length:6},()=>{const o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),s=5.5+Math.random()*8.5,e=Math.random();let r;return e<.4?r=[0,.82,1]:e<.7?r=[0,.45,.95]:r=[.1,.88,.72],{position:[s*Math.sin(a)*Math.cos(o),s*Math.sin(a)*Math.sin(o),s*Math.cos(a)],scale:1.8+Math.random()*2.5,color:r,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return A((o,a)=>{f.current+=a,m.current&&(m.current.rotation.y=f.current*.008),c.current.forEach((s,e)=>{if(!s)return;const r=d[e],n=f.current;s.position.x=r.position[0]+Math.sin(n*r.rotSpeed+r.phase)*r.bobAmp,s.position.y=r.position[1]+Math.cos(n*r.bobSpeed+r.phase)*r.bobAmp*.6,s.position.z=r.position[2]+Math.sin(n*r.rotSpeed*.7+r.phase*1.3)*r.bobAmp*.4})}),t.jsxs("group",{ref:m,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[g.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[g.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]}),d.map((o,a)=>t.jsxs("mesh",{ref:s=>c.current[a]=s,position:o.position,children:[t.jsx("planeGeometry",{args:[1,1]}),t.jsx("shaderMaterial",{uniforms:{color:{value:new E(o.color[0],o.color[1],o.color[2])},scaleVal:{value:o.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:T,side:W})]},a))]})}function ut({liveData:x,onImpact:M,flowRef:m}){const f=u.useRef(0),g=u.useRef(),d=2.2,o=d*d,a=l=>{var b;const i=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((b=m==null?void 0:m.current)==null?void 0:b.intensity)||1)),p=(1.6+Math.random()*1)*(.9+.3*y);l[0]=Math.sin(v)*Math.cos(i)*p,l[1]=Math.sin(v)*Math.sin(i)*p,l[2]=Math.cos(v)*p},s=(l,i,v)=>{Math.random()<.5?(l[v*3]=0,l[v*3+1]=.85,l[v*3+2]=1,i[v]=.04+Math.random()*.03):(l[v*3]=0,l[v*3+1]=.4,l[v*3+2]=1,i[v]=.035+Math.random()*.03)},e=u.useMemo(()=>{const l=new Float32Array(60),i=new Float32Array(60),v=new Float32Array(60),y=new Float32Array(20),p=new Float32Array(20),b=new Float32Array(20),P=new Uint8Array(20);for(let C=0;C<20;C++){const S=Math.random()*.08,w=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);l[C*3]=S*Math.sin(_)*Math.cos(w),l[C*3+1]=S*Math.sin(_)*Math.sin(w),l[C*3+2]=S*Math.cos(_);const F=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1),R=1.6+Math.random()*1;i[C*3]=Math.sin(N)*Math.cos(F)*R,i[C*3+1]=Math.sin(N)*Math.sin(F)*R,i[C*3+2]=Math.cos(N)*R,s(v,y,C),p[C]=Math.random()*1.5,b[C]=1.8+Math.random()*.8}return{positions:l,velocities:i,colors:v,sizes:y,lifetimes:p,maxLifetimes:b,hit:P}},[]),r=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),n=u.useRef(0);return A((l,i)=>{var k,B;f.current+=i,r.time.value=f.current;const v=Math.max(.5,Math.min(1.8,((k=m==null?void 0:m.current)==null?void 0:k.intensity)||1));r.flow.value=v;const y=((B=m==null?void 0:m.current)==null?void 0:B.pulse)>.95&&f.current-n.current>1.2;y&&(n.current=f.current);const{positions:p,velocities:b,colors:P,sizes:C,lifetimes:S,maxLifetimes:w,hit:_}=e,F=[0,0,0];let N=!1,R=y?2:0;for(let h=0;h<20;h++){S[h]+=i;const V=R>0&&S[h]>.15;if(S[h]>=w[h]||V){V&&R--;const D=Math.random()*.08,U=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);p[h*3]=D*Math.sin(G)*Math.cos(U),p[h*3+1]=D*Math.sin(G)*Math.sin(U),p[h*3+2]=D*Math.cos(G),a(F),b[h*3]=F[0],b[h*3+1]=F[1],b[h*3+2]=F[2],s(P,C,h),N=!0,S[h]=0,w[h]=1.8+Math.random()*.8,_[h]=0;continue}const Y=Math.sqrt(p[h*3]*p[h*3]+p[h*3+1]*p[h*3+1]+p[h*3+2]*p[h*3+2]),I=Y>1.6?(Y-1.6)/.6:0;I>0&&(b[h*3]*=1-I*.08,b[h*3+1]*=1-I*.08,b[h*3+2]*=1-I*.08,C[h]=C[h]*(1+I*.8)),p[h*3]+=b[h*3]*i,p[h*3+1]+=b[h*3+1]*i,p[h*3+2]+=b[h*3+2]*i;const $=p[h*3]*p[h*3]+p[h*3+1]*p[h*3+1]+p[h*3+2]*p[h*3+2];if($>=o)if(_[h])C[h]*=.92;else{_[h]=1;const D=Math.sqrt($),U=d/D;p[h*3]*=U,p[h*3+1]*=U,p[h*3+2]*=U,b[h*3]=0,b[h*3+1]=0,b[h*3+2]=0,M&&M({position:new et(p[h*3],p[h*3+1],p[h*3+2]),intensity:1}),S[h]=w[h]-.8}}g.current&&(g.current.geometry.attributes.position.needsUpdate=!0,N&&(g.current.geometry.attributes.aColor.needsUpdate=!0,g.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:g,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:r,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function pt(){const{positions:M,colors:m,sizes:c}=u.useMemo(()=>{const g=new Float32Array(135),d=new Float32Array(135),o=new Float32Array(45);for(let a=0;a<45;a++){const s=Math.acos(-1+2*a/45),e=Math.sqrt(45*Math.PI)*s,r=2.35;g[a*3]=r*Math.cos(e)*Math.sin(s),g[a*3+1]=r*Math.sin(e)*Math.sin(s),g[a*3+2]=r*Math.cos(s);const n=a>=36;if(n)d[a*3]=.133,d[a*3+1]=.827,d[a*3+2]=.933;else{const l=new E().setHSL(.75+Math.random()*.1,.7,.6);d[a*3]=l.r,d[a*3+1]=l.g,d[a*3+2]=l.b}o[a]=n?.09:.055}return{positions:g,colors:d,sizes:o}},[]),f=u.useMemo(()=>({time:{value:0}}),[]);return A((g,d)=>{f.time.value+=d*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[c,1]})]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:j})]})}function ft(){const x=u.useRef(),M=u.useMemo(()=>({time:{value:0}}),[]),m=u.useRef(0);A((d,o)=>{m.current+=o,M.time.value=m.current,x.current&&(x.current.rotation.y=m.current*.06)});const{positions:c,colors:f,sizes:g}=u.useMemo(()=>{const o=new Float32Array(90),a=new Float32Array(90),s=new Float32Array(30);for(let e=0;e<30;e++){const r=e/30*Math.PI*2,n=e%3,l=2.55+n*.22,i=.15*n;o[e*3]=l*Math.cos(r),o[e*3+1]=l*Math.sin(r)*Math.sin(i),o[e*3+2]=l*Math.sin(r)*Math.cos(i);const v=e/30;a[e*3]=.659*(1-v)+.133*v,a[e*3+1]=.333*(1-v)+.827*v,a[e*3+2]=.969*(1-v)+.933*v,s[e]=.015+Math.random()*.025}return{positions:o,colors:a,sizes:s}},[]);return t.jsx("group",{ref:x,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),t.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})})}function mt(){const x=u.useRef(),M=u.useRef(0),{positions:m,colors:c,sizes:f}=u.useMemo(()=>{const o=new Float32Array(6),a=new Float32Array(6),s=new Float32Array(2);for(let e=0;e<2;e++){const r=e/2*Math.PI*2+Math.random()*.5,n=4+Math.random()*2;o[e*3]=n*Math.cos(r),o[e*3+1]=(Math.random()-.5)*3,o[e*3+2]=n*Math.sin(r);const l=Math.random();l<.4?(a[e*3]=.13,a[e*3+1]=.82,a[e*3+2]=.93):l<.7?(a[e*3]=.84,a[e*3+1]=.27,a[e*3+2]=.93):(a[e*3]=.83,a[e*3+1]=.66,a[e*3+2]=.32),s[e]=.03+Math.random()*.02}return{positions:o,colors:a,sizes:s}},[]),g=u.useMemo(()=>({time:{value:0}}),[]);return A((d,o)=>{var s,e,r;M.current+=o,g.time.value=M.current,x.current&&(x.current.rotation.y=M.current*.02);const a=(r=(e=(s=x.current)==null?void 0:s.geometry)==null?void 0:e.attributes)==null?void 0:r.aSize;if(a){for(let n=0;n<2;n++)a.array[n]=.03;a.needsUpdate=!0}}),t.jsxs("points",{ref:x,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; void main(){vColor=aColor; vAlpha=0.6; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:j})]})}function gt(){const M=u.useRef();u.useRef([]);const m=u.useRef(0),c=u.useMemo(()=>{const d=new Float32Array(1200),o=new Float32Array(400*3),a=new Float32Array(400),s=()=>Math.random();for(let e=0;e<400;e++){const r=s()*Math.PI*2,n=Math.acos(2*s()-1),l=s();let i,v;l<.45?(i=6+s()*6,v=.03):l<.8?(i=12+s()*8,v=.02):(i=20+s()*8,v=.015),d[e*3]=i*Math.sin(n)*Math.cos(r),d[e*3+1]=i*Math.sin(n)*Math.sin(r),d[e*3+2]=i*Math.cos(n);const y=s();y<.4?(o[e*3]=.95,o[e*3+1]=.97,o[e*3+2]=1):y<.55?(o[e*3]=.3,o[e*3+1]=.95,o[e*3+2]=1):y<.68?(o[e*3]=1,o[e*3+1]=1,o[e*3+2]=1):y<.78?(o[e*3]=.6,o[e*3+1]=.8,o[e*3+2]=1):y<.88?(o[e*3]=.95,o[e*3+1]=.35,o[e*3+2]=.9):(o[e*3]=1,o[e*3+1]=.82,o[e*3+2]=.55),a[e]=v+s()*.015}return{positions:d,colors:o,sizes:a}},[]),f=u.useMemo(()=>{const o=new Float32Array(36),a=new Float32Array(36),s=new Float32Array(12),e=new Float32Array(24),r=()=>Math.random();for(let n=0;n<12;n++){const l=r()*Math.PI*2,i=Math.acos(2*r()-1),v=r()<.65?6+r()*8:14+r()*9;o[n*3]=v*Math.sin(i)*Math.cos(l),o[n*3+1]=v*Math.sin(i)*Math.sin(l),o[n*3+2]=v*Math.cos(i);const y=r();let p=[0,.8,1];y<.25?p=[0,.82,1]:y<.45?p=[.1,.92,.7]:y<.6?p=[.05,.55,.95]:y<.78?p=[.15,.75,.88]:p=[.35,.15,.8],a[n*3]=p[0],a[n*3+1]=p[1],a[n*3+2]=p[2],s[n]=120+r()*140,e[n*2]=2+r()*3,e[n*2+1]=r()*100}return{positions:o,colors:a,sizes:s,noise:e}},[]);return A((d,o)=>{m.current+=o;const a=m.current;M.current&&(M.current.rotation.y=a*.0018,M.current.rotation.x=Math.sin(a*.0012)*.012)}),t.jsxs("group",{ref:M,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[c.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[c.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[f.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[f.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[f.sizes,1]}),t.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[f.noise,2]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:j})]})]})}function Ct({liveData:x,paused:M}){const m=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),c=u.useCallback(s=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(s)},[]),f=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const s=()=>{const r=x||{},n=parseFloat(String(r.volume||"").replace(/[^0-9.]/g,""))||0,l=parseFloat(String(r.gas||"").replace(/[^0-9.]/g,""))||0;let i=.9+Math.min(n/500,.5)+Math.min(l/50,.25)+Math.random()*.15;i=Math.max(.6,Math.min(1.8,i));const v=f.current;v.intensity=i,r.block&&r.block!=="—"&&r.block!==v.block?(v.block=r.block,v.pulse=1):v.pulse=Math.max(.3,(v.pulse||.3)*.94)};s();const e=setInterval(s,400);return()=>clearInterval(e)},[x]);const g=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),d=u.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),o=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),a=u.useMemo(()=>[1,1.5],[]);return t.jsxs(q,{camera:g,gl:d,onCreated:({gl:s})=>s.setClearColor(0,0),style:o,dpr:a,frameloop:M?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(vt,{flowRef:f}),t.jsx(ut,{liveData:x,onImpact:c,flowRef:f}),t.jsx(it,{liveData:x}),t.jsx(ct,{}),t.jsx(nt,{}),t.jsx(lt,{}),t.jsx(pt,{}),t.jsx(ft,{}),t.jsx(at,{})]}),!m&&t.jsxs(t.Fragment,{children:[t.jsx(gt,{}),t.jsx(L,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),t.jsx(L,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),t.jsx(L,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),t.jsx(ht,{}),t.jsx(mt,{})]}),t.jsx(H,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Ct as default};
