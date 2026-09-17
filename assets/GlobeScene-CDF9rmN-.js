import{j as t,r as h,u as j,C as X,S as D,O as $}from"./r3f-DmFIH1pg.js";import{u as K}from"./index-DTOk0fxQ.js";import{p as C,e as O,q as J,E as Q,r as Z,F as z,D as W,s as Y,t as L,h as tt}from"./three-CkYadfcZ.js";import"./gsap-CzGW6FVa.js";const P=500;function et({reputationParticles:g}){const x=h.useRef();g.length;const{positions:p,colors:M,sizes:u,alphas:m,types:l}=h.useMemo(()=>{const o=new Float32Array(P*3),a=new Float32Array(P*3),r=new Float32Array(P),e=new Float32Array(P),s=new Float32Array(P);for(let n=0;n<P;n++)o[n*3]=0,o[n*3+1]=0,o[n*3+2]=0,a[n*3]=0,a[n*3+1]=0,a[n*3+2]=0,r[n]=0,e[n]=0,s[n]=0;return{positions:o,colors:a,sizes:r,alphas:e,types:s}},[]);return j((o,a)=>{if(!x.current)return;const{positions:r,colors:e,sizes:s,alphas:n,types:i}=x.current.geometry.attributes;for(let c=0;c<Math.min(g.length,P);c++){const d=g[c];r.array[c*3]=d.position[0],r.array[c*3+1]=d.position[1],r.array[c*3+2]=d.position[2];const b=new O(d.color);e.array[c*3]=b.r,e.array[c*3+1]=b.g,e.array[c*3+2]=b.b;const f=d.age/d.maxAge,y=f<.1?f/.1:1,E=f>.7?(1-f)/.3:1,A=Math.min(y,E);s.array[c]=d.size*(1+f*.5)*A,n.array[c]=A*(.6+.4*Math.sin(Date.now()*.003+c)),i.array[c]=d.isBatch?1:0}for(let c=g.length;c<P;c++)n.array[c]=0,s.array[c]=0;r.needsUpdate=!0,e.needsUpdate=!0,s.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}),t.jsxs("points",{ref:x,renderOrder:15,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[p,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]}),t.jsx("bufferAttribute",{attach:"attributes-aAlpha",args:[m,1]}),t.jsx("bufferAttribute",{attach:"attributes-aType",args:[l,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ot(){const g=K();return g.length===0?null:t.jsx(et,{reputationParticles:g})}const at=({liveData:g})=>{const x=h.useRef();h.useRef(0);const p=h.useMemo(()=>{const l=g||{};return[{radius:2.8,tilt:.18,yOffset:.4,speed:.01,bandWidth:.35,color:"#ffffff",opacity:.9,fontSize:52,text:" THE MARKETPLACE THAT LIVES  THE MARKETPLACE THAT LIVES  THE MARKETPLACE THAT LIVES "},{radius:2.55,tilt:-.1,yOffset:-.1,speed:-.015,bandWidth:.28,color:"#d946ef",opacity:.82,fontSize:42,text:" API INFRASTRUCTURE FOR AI AGENTS THAT PAY  API INFRASTRUCTURE FOR AI AGENTS THAT PAY "},{radius:2.35,tilt:.06,yOffset:-.55,speed:.022,bandWidth:.22,color:"#22d3ee",opacity:.75,fontSize:34,text:` ${l.endpoints||"100+"} ENDPOINTS  ${l.freeEndpoints||"40"} FREE  ${l.endpoints||"100+"} ENDPOINTS  ${l.freeEndpoints||"40"} FREE `}]},[g]),M=h.useMemo(()=>p.map(l=>{const o=document.createElement("canvas");o.width=2048,o.height=96;const a=o.getContext("2d");a.clearRect(0,0,o.width,o.height);const r=`900 ${l.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=r,a.textAlign="center",a.textBaseline="middle";const e=l.text,s=a.measureText(e).width,n=Math.ceil((o.width+s)/s),i=(o.width-s*n)/2+s/2;a.shadowBlur=18,a.shadowColor=l.color,a.fillStyle=l.color,a.globalAlpha=.35;for(let d=0;d<n;d++)a.fillText(e,i+d*s,o.height/2);a.shadowBlur=0,a.globalAlpha=1;for(let d=0;d<n;d++)a.fillText(e,i+d*s,o.height/2);a.globalAlpha=1;const c=new Y(o);return c.anisotropy=4,c.minFilter=L,c.magFilter=L,c}),[p]),[u,m]=h.useState(null);return j((l,o)=>{x.current&&p.forEach((a,r)=>{const e=x.current.children[r];e&&(u===r||(e.rotation.y+=o*a.speed))})}),t.jsx("group",{ref:x,children:p.map((l,o)=>t.jsx("group",{position:[0,l.yOffset,0],rotation:[l.tilt,0,0],children:t.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),m(o),document.body.style.cursor="pointer"},onPointerOut:()=>{m(null),document.body.style.cursor="auto"},onClick:()=>{},children:[t.jsx("cylinderGeometry",{args:[l.radius,l.radius,l.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:M[o],transparent:!0,opacity:l.opacity,side:W,depthWrite:!1,blending:C,toneMapped:!1})]})},o))})};function rt(){const g=h.useMemo(()=>({colorA:{value:new O(2282478)},colorB:{value:new O(11032055)},colorC:{value:new O(14239471)}}),[]);return t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,side:z,transparent:!0,depthWrite:!1,blending:C})]})}function st(){return t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,side:z,transparent:!0,depthWrite:!1,blending:C})]})}function it(){const g=h.useRef();return t.jsxs("mesh",{ref:g,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function nt({gasUniforms:g}){const p=h.useRef(),M=h.useRef(0),u=h.useMemo(()=>{const m=new Float32Array(120),l=new Float32Array(120),o=new Float32Array(120),a=new Float32Array(40);for(let r=0;r<40;r++){const e=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),n=.15+Math.random()*.5;m[r*3]=n*Math.sin(s)*Math.cos(e)*2,m[r*3+1]=n*Math.cos(s)*.7,m[r*3+2]=n*Math.sin(s)*Math.sin(e)*.9,l[r*3]=1.5+Math.random()*5,l[r*3+1]=1+Math.random()*4,l[r*3+2]=1.5+Math.random()*4.5;const i=Math.random();i<.4?(o[r*3]=.1+i*.2,o[r*3+1]=.7+i*.3,o[r*3+2]=.9+i*.1):i<.7?(o[r*3]=.8,o[r*3+1]=.9,o[r*3+2]=1):(o[r*3]=.05,o[r*3+1]=.5+i*.3,o[r*3+2]=.9+i*.1),a[r]=.025+Math.random()*.04}return{positions:m,seeds:l,colors:o,sizes:a}},[]);return j((m,l)=>{var r,e,s,n;M.current+=l;const o=M.current,a=(n=(s=(e=(r=p.current)==null?void 0:r.geometry)==null?void 0:e.attributes)==null?void 0:s.position)==null?void 0:n.array;if(a){for(let i=0;i<40;i++){const c=u.seeds[i*3],d=u.seeds[i*3+1],b=u.seeds[i*3+2];a[i*3]=u.positions[i*3]+Math.sin(o*c+i*.7)*.05,a[i*3+1]=u.positions[i*3+1]+Math.cos(o*d+i*1.1)*.035,a[i*3+2]=u.positions[i*3+2]+Math.sin(o*b+i*.9)*.04}p.current.geometry.attributes.position.needsUpdate=!0}}),t.jsxs("points",{ref:p,renderOrder:2,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vColor = aColor;
            vAlpha = 1.0;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (220.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            float d = abs(uv.x) + abs(uv.y) * 0.5;
            if (d > 1.0) discard;
            float glow = pow(1.0 - d, 2.0);
            float core = pow(1.0 - d, 6.0);
            vec3 col = mix(vColor, vec3(1.0), core * 0.7);
            col += vec3(0.3, 0.6, 0.8) * glow * 0.4;
            gl_FragColor = vec4(col, glow * vAlpha * 0.9);
          }
        `,transparent:!0,depthWrite:!1,blending:C})]})}function lt({flowRef:g}){const x=h.useRef(),p=h.useRef(0),M=h.useMemo(()=>{const e=new J;e.moveTo(-.24/2,-.24/2),e.lineTo(.24/2,-.24/2),e.lineTo(.24/2,.24/2),e.lineTo(-.24/2+.096,.24/2),e.lineTo(-.24/2+.096,.24/2+.096),e.lineTo(-.24/2,.24/2+.096),e.lineTo(-.24/2,-.24/2);const s={depth:.08,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:2},n=new Q(e,s),i=-1.2/2+.24/2;return{lGeometry:n,lPos:[i,0,0],squares:[{pos:[i+.24/2+.08+.24/2,0,0],size:[.24,.24,.08]},{pos:[i+.24/2+.08+.24+.08+.24/2,0,0],size:[.24,.24,.08]},{pos:[i+.24/2+.08+.24+.08+.24+.08+.24/2,0,0],size:[.24,.24,.08]}]}},[]);j((m,l)=>{p.current+=l;const o=(g==null?void 0:g.current)||{pulse:.3};if(o.pulse=Math.max(.25,(o.pulse||0)-l*1.6),x.current){x.current.rotation.y=p.current*.08,x.current.rotation.x=Math.sin(p.current*.12)*.08;const a=Math.sin(p.current*1.5),r=Math.sin(p.current*.9)*.03,s=1+.03*a+.08*0;x.current.scale.set(s,s,s),x.current.position.y=r;const n=x.current.children[0];n!=null&&n.isGroup&&n.children.forEach(i=>{i!=null&&i.material&&(i.material.opacity=1)})}});const u=h.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return j((m,l)=>{var o;u.time.value+=l*.15,u.flow.value=((o=g==null?void 0:g.current)==null?void 0:o.intensity)||1}),t.jsxs("group",{ref:x,scale:1.3,children:[t.jsxs("mesh",{renderOrder:0,children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.6 + 0.3 * swirl; // reduced from 0.5+0.5*swirl
              vec3 col = mix(vec3(0.0,0.3,1.0), vec3(0.0,0.85,1.0), dist*0.5);
              col += vec3(0.0,0.5,1.0) * (1.0-dist) * 0.4;
              float alpha = fog * turbulence * 0.14 * (0.5 + 0.5*flow); // reduced from 0.18
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:Z})]}),t.jsxs("mesh",{renderOrder:1,children:[t.jsx("sphereGeometry",{args:[1.2,20,14]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.55 + 0.35 * swirl; // reduced from 0.4+0.6*swirl
              float noise = tendrils * 0.7 + 0.3;
              vec3 col = mix(vec3(0.0,0.4,1.0), vec3(0.0,0.9,1.0), noise*0.5);
              col += vec3(0.0,0.5,1.0) * (1.0-dist) * 0.4;
              float alpha = radial * noise * 0.14 * (0.4 + 0.6*flow); // reduced from 0.20
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),t.jsxs("group",{renderOrder:-1,children:[t.jsx("mesh",{geometry:M.lGeometry,position:M.lPos,children:t.jsx("meshBasicMaterial",{color:"#003399",transparent:!0,opacity:1,side:W,depthWrite:!1,toneMapped:!1})}),M.squares.map((m,l)=>t.jsxs("mesh",{position:m.pos,children:[t.jsx("boxGeometry",{args:m.size}),t.jsx("meshBasicMaterial",{color:"#003399",transparent:!0,opacity:1,side:W,depthWrite:!1,toneMapped:!1})]},l)),t.jsx("sprite",{position:[0,-.22,0],scale:[.45,.1,1],children:t.jsx("spriteMaterial",{map:(()=>{const m=document.createElement("canvas");m.width=256,m.height=64;const l=m.getContext("2d");l.clearRect(0,0,256,64),l.font="bold 38px 'JetBrains Mono', monospace",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#0052FF",l.shadowBlur=8,l.fillStyle="#0052FF",l.globalAlpha=.9,l.fillText("BASE",128,32);const o=new Y(m);return o.minFilter=L,o})(),transparent:!0,depthWrite:!1,blending:C})})]}),t.jsx(nt,{gasUniforms:u}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.0,0.7,1.0), vec3(0.12,0.5,0.9), dist*0.5);
              float alpha = radial * 0.45 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.0,0.6,1.0), vec3(0.12,0.8,0.75), dist*0.4);
              float alpha = radial * 0.25 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.0,0.55,0.95), vec3(0.12,0.75,0.8), dist*0.5+phase*0.15);
              float alpha = radial * 0.14 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:z})]})]})}function ct(){const p=h.useRef(),M=h.useRef([]),u=h.useRef(0),m=h.useMemo(()=>{const o=new Float32Array(600),a=new Float32Array(600),r=new Float32Array(200);for(let e=0;e<200;e++){const s=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),i=4.8+Math.random()*12;o[e*3]=i*Math.sin(n)*Math.cos(s),o[e*3+1]=i*Math.sin(n)*Math.sin(s),o[e*3+2]=i*Math.cos(n);const c=Math.random();c<.5?(a[e*3]=0,a[e*3+1]=.85,a[e*3+2]=1):c<.8?(a[e*3]=0,a[e*3+1]=.4,a[e*3+2]=1):(a[e*3]=.1,a[e*3+1]=.9,a[e*3+2]=.7),r[e]=.012+Math.random()*.02}return{positions:o,colors:a,sizes:r}},[]),l=h.useMemo(()=>Array.from({length:6},()=>{const o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),r=5.5+Math.random()*8.5,e=Math.random();let s;return e<.4?s=[0,.82,1]:e<.7?s=[0,.45,.95]:s=[.1,.88,.72],{position:[r*Math.sin(a)*Math.cos(o),r*Math.sin(a)*Math.sin(o),r*Math.cos(a)],scale:1.8+Math.random()*2.5,color:s,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.4,phase:Math.random()*Math.PI*2}}),[]);return j((o,a)=>{u.current+=a,p.current&&(p.current.rotation.y=u.current*.008),M.current.forEach((r,e)=>{if(!r)return;const s=l[e],n=u.current;r.position.x=s.position[0]+Math.sin(n*s.rotSpeed+s.phase)*s.bobAmp,r.position.y=s.position[1]+Math.cos(n*s.bobSpeed+s.phase)*s.bobAmp*.6,r.position.z=s.position[2]+Math.sin(n*s.rotSpeed*.7+s.phase*1.3)*s.bobAmp*.4})}),t.jsxs("group",{ref:p,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),l.map((o,a)=>t.jsxs("mesh",{ref:r=>M.current[a]=r,position:o.position,children:[t.jsx("planeGeometry",{args:[1,1]}),t.jsx("shaderMaterial",{uniforms:{color:{value:new O(o.color[0],o.color[1],o.color[2])},scaleVal:{value:o.scale}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:C,side:W})]},a))]})}function dt({liveData:g,onImpact:x,flowRef:p}){const u=h.useRef(0),m=h.useRef(),l=2.2,o=l*l,a=i=>{var y;const c=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((y=p==null?void 0:p.current)==null?void 0:y.intensity)||1)),f=(1.6+Math.random()*1)*(.9+.3*b);i[0]=Math.sin(d)*Math.cos(c)*f,i[1]=Math.sin(d)*Math.sin(c)*f,i[2]=Math.cos(d)*f},r=(i,c,d)=>{Math.random()<.5?(i[d*3]=0,i[d*3+1]=.85,i[d*3+2]=1,c[d]=.04+Math.random()*.03):(i[d*3]=0,i[d*3+1]=.4,i[d*3+2]=1,c[d]=.035+Math.random()*.03)},e=h.useMemo(()=>{const i=new Float32Array(105),c=new Float32Array(105),d=new Float32Array(105),b=new Float32Array(35),f=new Float32Array(35),y=new Float32Array(35),E=new Uint8Array(35);for(let A=0;A<35;A++){const w=Math.random()*.08,_=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);i[A*3]=w*Math.sin(S)*Math.cos(_),i[A*3+1]=w*Math.sin(S)*Math.sin(_),i[A*3+2]=w*Math.cos(S);const T=Math.random()*Math.PI*2,F=Math.acos(2*Math.random()-1),N=1.6+Math.random()*1;c[A*3]=Math.sin(F)*Math.cos(T)*N,c[A*3+1]=Math.sin(F)*Math.sin(T)*N,c[A*3+2]=Math.cos(F)*N,r(d,b,A),f[A]=Math.random()*1.5,y[A]=1.8+Math.random()*.8}return{positions:i,velocities:c,colors:d,sizes:b,lifetimes:f,maxLifetimes:y,hit:E}},[]),s=h.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),n=h.useRef(0);return j((i,c)=>{var V,B;u.current+=c,s.time.value=u.current;const d=Math.max(.5,Math.min(1.8,((V=p==null?void 0:p.current)==null?void 0:V.intensity)||1));s.flow.value=d;const b=((B=p==null?void 0:p.current)==null?void 0:B.pulse)>.95&&u.current-n.current>1.2;b&&(n.current=u.current);const{positions:f,velocities:y,colors:E,sizes:A,lifetimes:w,maxLifetimes:_,hit:S}=e,T=[0,0,0];let F=!1,N=b?2:0;for(let v=0;v<35;v++){w[v]+=c;const k=N>0&&w[v]>.15;if(w[v]>=_[v]||k){k&&N--;const I=Math.random()*.08,U=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);f[v*3]=I*Math.sin(G)*Math.cos(U),f[v*3+1]=I*Math.sin(G)*Math.sin(U),f[v*3+2]=I*Math.cos(G),a(T),y[v*3]=T[0],y[v*3+1]=T[1],y[v*3+2]=T[2],r(E,A,v),F=!0,w[v]=0,_[v]=1.8+Math.random()*.8,S[v]=0;continue}const H=Math.sqrt(f[v*3]*f[v*3]+f[v*3+1]*f[v*3+1]+f[v*3+2]*f[v*3+2]),R=H>1.6?(H-1.6)/.6:0;R>0&&(y[v*3]*=1-R*.08,y[v*3+1]*=1-R*.08,y[v*3+2]*=1-R*.08,A[v]=A[v]*(1+R*.8)),f[v*3]+=y[v*3]*c,f[v*3+1]+=y[v*3+1]*c,f[v*3+2]+=y[v*3+2]*c;const q=f[v*3]*f[v*3]+f[v*3+1]*f[v*3+1]+f[v*3+2]*f[v*3+2];if(q>=o)if(S[v])A[v]*=.92;else{S[v]=1;const I=Math.sqrt(q),U=l/I;f[v*3]*=U,f[v*3+1]*=U,f[v*3+2]*=U,y[v*3]=0,y[v*3+1]=0,y[v*3+2]=0,x&&x({position:new tt(f[v*3],f[v*3+1],f[v*3+2]),intensity:1}),w[v]=_[v]-.8}}m.current&&(m.current.geometry.attributes.position.needsUpdate=!0,F&&(m.current.geometry.attributes.aColor.needsUpdate=!0,m.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:m,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function vt(){const{positions:x,colors:p,sizes:M}=h.useMemo(()=>{const m=new Float32Array(135),l=new Float32Array(135),o=new Float32Array(45);for(let a=0;a<45;a++){const r=Math.acos(-1+2*a/45),e=Math.sqrt(45*Math.PI)*r,s=2.35;m[a*3]=s*Math.cos(e)*Math.sin(r),m[a*3+1]=s*Math.sin(e)*Math.sin(r),m[a*3+2]=s*Math.cos(r);const n=a>=36;if(n)l[a*3]=.133,l[a*3+1]=.827,l[a*3+2]=.933;else{const i=new O().setHSL(.75+Math.random()*.1,.7,.6);l[a*3]=i.r,l[a*3+1]=i.g,l[a*3+2]=i.b}o[a]=n?.09:.055}return{positions:m,colors:l,sizes:o}},[]),u=h.useMemo(()=>({time:{value:0}}),[]);return j((m,l)=>{u.time.value+=l*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[p,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ht(){const g=h.useRef(),x=h.useMemo(()=>({time:{value:0}}),[]),p=h.useRef(0);j((l,o)=>{p.current+=o,x.time.value=p.current,g.current&&(g.current.rotation.y=p.current*.06)});const{positions:M,colors:u,sizes:m}=h.useMemo(()=>{const o=new Float32Array(90),a=new Float32Array(90),r=new Float32Array(30);for(let e=0;e<30;e++){const s=e/30*Math.PI*2,n=e%3,i=2.55+n*.22,c=.15*n;o[e*3]=i*Math.cos(s),o[e*3+1]=i*Math.sin(s)*Math.sin(c),o[e*3+2]=i*Math.sin(s)*Math.cos(c);const d=e/30;a[e*3]=.659*(1-d)+.133*d,a[e*3+1]=.333*(1-d)+.827*d,a[e*3+2]=.969*(1-d)+.933*d,r[e]=.015+Math.random()*.025}return{positions:o,colors:a,sizes:r}},[]);return t.jsx("group",{ref:g,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[m,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function ut(){const g=h.useRef(),x=h.useRef(0),{positions:p,colors:M,sizes:u}=h.useMemo(()=>{const o=new Float32Array(6),a=new Float32Array(6),r=new Float32Array(2);for(let e=0;e<2;e++){const s=e/2*Math.PI*2+Math.random()*.5,n=4+Math.random()*2;o[e*3]=n*Math.cos(s),o[e*3+1]=(Math.random()-.5)*3,o[e*3+2]=n*Math.sin(s);const i=Math.random();i<.4?(a[e*3]=.13,a[e*3+1]=.82,a[e*3+2]=.93):i<.7?(a[e*3]=.84,a[e*3+1]=.27,a[e*3+2]=.93):(a[e*3]=.83,a[e*3+1]=.66,a[e*3+2]=.32),r[e]=.03+Math.random()*.02}return{positions:o,colors:a,sizes:r}},[]),m=h.useMemo(()=>({time:{value:0}}),[]);return j((l,o)=>{var r,e,s;x.current+=o,m.time.value=x.current,g.current&&(g.current.rotation.y=x.current*.02);const a=(s=(e=(r=g.current)==null?void 0:r.geometry)==null?void 0:e.attributes)==null?void 0:s.aSize;if(a){for(let n=0;n<2;n++)a.array[n]=.03;a.needsUpdate=!0}}),t.jsxs("points",{ref:g,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[p,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; void main(){vColor=aColor; vAlpha=0.6; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function ft(){const x=h.useRef();h.useRef([]);const p=h.useRef(0),M=h.useMemo(()=>{const l=new Float32Array(1200),o=new Float32Array(400*3),a=new Float32Array(400),r=()=>Math.random();for(let e=0;e<400;e++){const s=r()*Math.PI*2,n=Math.acos(2*r()-1),i=r();let c,d;i<.45?(c=6+r()*6,d=.03):i<.8?(c=12+r()*8,d=.02):(c=20+r()*8,d=.015),l[e*3]=c*Math.sin(n)*Math.cos(s),l[e*3+1]=c*Math.sin(n)*Math.sin(s),l[e*3+2]=c*Math.cos(n);const b=r();b<.4?(o[e*3]=.95,o[e*3+1]=.97,o[e*3+2]=1):b<.55?(o[e*3]=.3,o[e*3+1]=.95,o[e*3+2]=1):b<.68?(o[e*3]=1,o[e*3+1]=1,o[e*3+2]=1):b<.78?(o[e*3]=.6,o[e*3+1]=.8,o[e*3+2]=1):b<.88?(o[e*3]=.95,o[e*3+1]=.35,o[e*3+2]=.9):(o[e*3]=1,o[e*3+1]=.82,o[e*3+2]=.55),a[e]=d+r()*.015}return{positions:l,colors:o,sizes:a}},[]),u=h.useMemo(()=>{const o=new Float32Array(36),a=new Float32Array(36),r=new Float32Array(12),e=new Float32Array(24),s=()=>Math.random();for(let n=0;n<12;n++){const i=s()*Math.PI*2,c=Math.acos(2*s()-1),d=s()<.65?6+s()*8:14+s()*9;o[n*3]=d*Math.sin(c)*Math.cos(i),o[n*3+1]=d*Math.sin(c)*Math.sin(i),o[n*3+2]=d*Math.cos(c);const b=s();let f=[0,.8,1];b<.25?f=[0,.82,1]:b<.45?f=[.1,.92,.7]:b<.6?f=[.05,.55,.95]:b<.78?f=[.15,.75,.88]:f=[.35,.15,.8],a[n*3]=f[0],a[n*3+1]=f[1],a[n*3+2]=f[2],r[n]=120+s()*140,e[n*2]=2+s()*3,e[n*2+1]=s()*100}return{positions:o,colors:a,sizes:r,noise:e}},[]);return j((l,o)=>{p.current+=o;const a=p.current;x.current&&(x.current.rotation.y=a*.0018,x.current.rotation.x=Math.sin(a*.0012)*.012)}),t.jsxs("group",{ref:x,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[u.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[u.sizes,1]}),t.jsx("bufferAttribute",{attach:"attributes-aNoise",args:[u.noise,2]})]}),t.jsx("shaderMaterial",{vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})]})}function Mt({liveData:g,paused:x}){const p=h.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=h.useCallback(r=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(r)},[]),u=h.useRef({intensity:1,pulse:.4,block:null});h.useEffect(()=>{const r=()=>{const s=g||{},n=parseFloat(String(s.volume||"").replace(/[^0-9.]/g,""))||0,i=parseFloat(String(s.gas||"").replace(/[^0-9.]/g,""))||0;let c=.9+Math.min(n/500,.5)+Math.min(i/50,.25)+Math.random()*.15;c=Math.max(.6,Math.min(1.8,c));const d=u.current;d.intensity=c,s.block&&s.block!=="—"&&s.block!==d.block?(d.block=s.block,d.pulse=1):d.pulse=Math.max(.3,(d.pulse||.3)*.94)};r();const e=setInterval(r,400);return()=>clearInterval(e)},[g]);const m=h.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),l=h.useMemo(()=>({alpha:!0,antialias:!p,powerPreference:"high-performance"}),[p]),o=h.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),a=h.useMemo(()=>[1,1.5],[]);return t.jsxs(X,{camera:m,gl:l,onCreated:({gl:r})=>r.setClearColor(0,0),style:o,dpr:a,frameloop:x?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(lt,{flowRef:u}),t.jsx(dt,{liveData:g,onImpact:M,flowRef:u}),t.jsx(at,{liveData:g}),t.jsx(it,{}),t.jsx(rt,{}),t.jsx(st,{}),t.jsx(vt,{}),t.jsx(ht,{}),t.jsx(ot,{})]}),!p&&t.jsxs(t.Fragment,{children:[t.jsx(ft,{}),t.jsx(D,{radius:12,depth:30,count:350,factor:1.2,saturation:.15,fade:!0,speed:.12}),t.jsx(D,{radius:8,depth:15,count:180,factor:.6,saturation:.2,fade:!0,speed:.08}),t.jsx(D,{radius:20,depth:50,count:80,factor:.5,saturation:.1,fade:!0,speed:.05}),t.jsx(ct,{}),t.jsx(ut,{})]}),t.jsx($,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{Mt as default};
