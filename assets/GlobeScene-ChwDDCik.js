import{r as u,j as t,C as k,S as B,O as V,u as j}from"./r3f-C0dCSPeq.js";import{q as W,p as w,e as z,r as L,F as G,s as U,h as P}from"./three-BuKzPtX4.js";const D=({liveData:p})=>{const h=u.useRef(),n=u.useRef(0),b=u.useMemo(()=>{const o=p||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${o.endpoints||"100+"} ENDPOINTS   ${o.freeEndpoints||"40"} FREE   ${o.latency||"—"}   `}]},[p]),v=u.useMemo(()=>b.map(o=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height);const g=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=g,a.textAlign="center",a.textBaseline="middle";const c=o.text,d=a.measureText(c).width,l=Math.ceil((e.width+d)/d),M=(e.width-d*l)/2+d/2;a.shadowColor=o.color,a.shadowBlur=48,a.fillStyle=o.color;for(let y=0;y<l;y++)a.fillText(c,M+y*d,e.height/2);a.shadowBlur=22;for(let y=0;y<l;y++)a.fillText(c,M+y*d,e.height/2);a.shadowBlur=0,a.fillStyle=o.color==="#ffffff"?"#ffffff":o.color;for(let y=0;y<l;y++)a.fillText(c,M+y*d,e.height/2);a.fillStyle="#ffffff",a.globalAlpha=.85;for(let y=0;y<l;y++)a.fillText(c,M+y*d,e.height/2);a.globalAlpha=1;const x=new W(e);return x.anisotropy=8,x.minFilter=U,x.magFilter=U,x}),[b]),i=u.useMemo(()=>b.map(o=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.font=`900 ${o.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const g=o.text,c=a.measureText(g).width,d=Math.ceil((e.width+c)/c),l=(e.width-c*d)/2+c/2;a.shadowColor=o.color,a.shadowBlur=28,a.fillStyle=o.color,a.globalAlpha=.35;for(let x=0;x<d;x++)a.fillText(g,l+x*c,e.height/2);a.globalAlpha=1;const M=new W(e);return M.anisotropy=4,M}),[b]),[r,m]=u.useState(null),s=u.useRef(0);return j((o,e)=>{n.current+=e,s.current+=e,h.current&&b.forEach((a,g)=>{const c=h.current.children[g];if(c){r===g||(c.rotation.y+=e*a.speed);const l=c.children[0];if(l!=null&&l.material){const M=.88+.12*Math.sin(s.current*.7+g*1.2);l.material.opacity=(r===g?1:a.opacity)*M}}})}),t.jsx("group",{ref:h,children:b.map((o,e)=>t.jsxs("group",{position:[0,o.yOffset,0],rotation:[o.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),m(e),document.body.style.cursor="pointer"},onPointerOut:()=>{m(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new P(o.radius,o.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:v[e],transparent:!0,opacity:o.opacity,side:G,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[o.radius,o.radius,o.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:i[e],transparent:!0,opacity:.22,side:L,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[o.radius,o.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:o.color,transparent:!0,opacity:o.opacity*.12,depthWrite:!1})]})]},e))})};function $(){const p=u.useMemo(()=>({time:{value:0},colorA:{value:new z(2282478)},colorB:{value:new z(11032055)},colorC:{value:new z(14239471)}}),[]);return j((h,n)=>{p.time.value+=n*.6}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,28,20]}),t.jsx("shaderMaterial",{uniforms:p,vertexShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal; varying vec3 vWorldPos;
          uniform float time; uniform vec3 colorA; uniform vec3 colorB; uniform vec3 colorC;
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 1.8);
            float pulse = 0.85 + 0.15 * sin(time * 0.6 + vWorldPos.y * 1.5);
            float wave = 0.5 + 0.5 * sin(time * 0.4 + vWorldPos.x * 2.0 + vWorldPos.z * 1.2);
            vec3 col = mix(colorA, colorB, wave * 0.3);
            col = mix(col, colorC, 0.15 * sin(time * 0.3 + vWorldPos.y));
            gl_FragColor = vec4(col, fresnel * pulse * 0.08);
          }
        `,side:L,transparent:!0,depthWrite:!1,blending:w})]})}function H(){const p=u.useMemo(()=>({time:{value:0}}),[]);return j((h,n)=>{p.time.value+=n*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:p,vertexShader:`
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
        `,side:G,transparent:!0,depthWrite:!1,blending:w})]})}function q({impactPoints:p}){const h=u.useRef(),n=u.useMemo(()=>({time:{value:0},impact0:{value:new P(0,0,0)},i0t:{value:0},impact1:{value:new P(0,0,0)},i1t:{value:0},impact2:{value:new P(0,0,0)},i2t:{value:0},impact3:{value:new P(0,0,0)},i3t:{value:0},impact4:{value:new P(0,0,0)},i4t:{value:0},impact5:{value:new P(0,0,0)},i5t:{value:0},impact6:{value:new P(0,0,0)},i6t:{value:0},impact7:{value:new P(0,0,0)},i7t:{value:0}}),[]);return j((b,v)=>{if(n.time.value+=v*.5,p)for(let i=0;i<8&&i<p.length;i++){const r=p[i];n[`impact${i}`].value.copy(r.position),n[`i${i}t`].value=r.intensity}}),t.jsxs("mesh",{ref:h,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:n,vertexShader:`
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

          float impactPulse(vec3 worldPos, vec3 impactPos, float intensity) {
            float dist = length(worldPos - impactPos);
            // Expanding ring from impact point
            float ring = abs(dist - time * 1.5 * intensity);
            float ringPulse = exp(-ring * 3.0) * intensity;
            // Proximity glow
            float prox = exp(-dist * 1.8) * intensity * 0.5;
            return ringPulse + prox;
          }

          void main() {
            float pulse = 0.6 + 0.4 * sin(time * 0.5 + vWorldPos.y * 2.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));

            // Accumulate impact pulses
            float impacts = 0.0;
            impacts += impactPulse(vWorldPos, impact0, i0t);
            impacts += impactPulse(vWorldPos, impact1, i1t);
            impacts += impactPulse(vWorldPos, impact2, i2t);
            impacts += impactPulse(vWorldPos, impact3, i3t);
            impacts += impactPulse(vWorldPos, impact4, i4t);
            impacts += impactPulse(vWorldPos, impact5, i5t);
            impacts += impactPulse(vWorldPos, impact6, i6t);
            impacts += impactPulse(vWorldPos, impact7, i7t);
            impacts = clamp(impacts, 0.0, 1.5);

            // Base wireframe color (purple → cyan)
            vec3 baseCol = mix(vec3(0.659, 0.333, 0.969), vec3(0.133, 0.827, 0.933), 0.3 + 0.2 * sin(time * 0.3));
            // Impact color (white-blue flash)
            vec3 impactCol = mix(vec3(0.0, 0.322, 1.0), vec3(1.0, 1.0, 1.0), 0.6);
            vec3 col = mix(baseCol, impactCol, impacts * 0.7);
            col += vec3(0.10, 0.06, 0.015) * impacts; // filo ámbar duna en la captura

            float alpha = 0.045 * pulse * fade + impacts * 0.15;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function J({flowRef:p}){const h=u.useRef(),n=u.useRef(0),b=u.useMemo(()=>{const v=document.createElement("canvas");v.width=512,v.height=128;const i=v.getContext("2d");return i.clearRect(0,0,512,128),i.font="bold 72px monospace",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#0052FF",i.shadowColor="#0052FF",i.shadowBlur=30,i.fillText("BASE",256,64),i.shadowBlur=0,i.fillText("BASE",256,64),new W(v)},[]);return j((v,i)=>{var m;n.current+=i;const r=(p==null?void 0:p.current)||{intensity:1,pulse:.3};if(r.pulse=Math.max(.25,(r.pulse||0)-i*1.8),h.current){h.current.rotation.y=n.current*(.15+.15*r.intensity),h.current.rotation.x=n.current*.1;const s=Math.sin(n.current*1.8),o=1+.06*s+.22*r.pulse;h.current.scale.set(o,o,o);const e=(m=h.current.children[0])==null?void 0:m.material;e&&(e.opacity=.75+.2*s+.15*r.pulse)}}),t.jsxs("group",{ref:h,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:b,transparent:!0,blending:w,opacity:.9,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.42,20,16]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.18,depthWrite:!1,blending:w})]}),t.jsxs("mesh",{scale:1.9,children:[t.jsx("sphereGeometry",{args:[.42,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.06,depthWrite:!1,blending:w})]}),t.jsxs("mesh",{scale:2.6,children:[t.jsx("sphereGeometry",{args:[.42,12,10]}),t.jsx("meshBasicMaterial",{color:11032055,transparent:!0,opacity:.025,depthWrite:!1,blending:w})]})]})}function K({liveData:p,onImpact:h,flowRef:n}){const v=u.useRef(0),i=u.useRef(),r=2.2,m=r*r,s=c=>{var y;const d=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),M=Math.max(.5,Math.min(1.8,((y=n==null?void 0:n.current)==null?void 0:y.intensity)||1)),x=(3.5+Math.random()*2.5)*(.85+.5*M);c[0]=Math.sin(l)*Math.cos(d)*x,c[1]=Math.sin(l)*Math.sin(d)*x,c[2]=Math.cos(l)*x},o=(c,d,l)=>{if(Math.random()<.42)c[l*3]=.08,c[l*3+1]=.85,c[l*3+2]=.55,d[l]=.055+Math.random()*.045;else{const M=Math.random();c[l*3]=.15*(1-M)+.78*M,c[l*3+1]=.45*(1-M)+.35*M,c[l*3+2]=1*(1-M)+.97*M,d[l]=.04+Math.random()*.04}},e=u.useMemo(()=>{const c=new Float32Array(156),d=new Float32Array(156),l=new Float32Array(156),M=new Float32Array(52),x=new Float32Array(52),y=new Float32Array(52),F=new Uint8Array(52);for(let C=0;C<52;C++){c[C*3]=(Math.random()-.5)*.25,c[C*3+1]=(Math.random()-.5)*.25,c[C*3+2]=(Math.random()-.5)*.25;const A=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1),S=3.5+Math.random()*2.5;d[C*3]=Math.sin(_)*Math.cos(A)*S,d[C*3+1]=Math.sin(_)*Math.sin(A)*S,d[C*3+2]=Math.cos(_)*S,o(l,M,C),x[C]=Math.random()*2,y[C]=.9+Math.random()*.5}return{positions:c,velocities:d,colors:l,sizes:M,lifetimes:x,maxLifetimes:y,hit:F}},[]),a=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),g=u.useRef(0);return j((c,d)=>{var N,O;v.current+=d,a.time.value=v.current;const l=Math.max(.5,Math.min(1.8,((N=n==null?void 0:n.current)==null?void 0:N.intensity)||1));a.flow.value=l;const M=((O=n==null?void 0:n.current)==null?void 0:O.pulse)>.95&&v.current-g.current>1.2;M&&(g.current=v.current);const{positions:x,velocities:y,colors:F,sizes:C,lifetimes:A,maxLifetimes:_,hit:S}=e,T=[0,0,0];let E=!1,I=M?8:0;for(let f=0;f<52;f++){A[f]+=d;const R=I>0&&A[f]>.15;if(A[f]>=_[f]||R){R&&I--,x[f*3]=(Math.random()-.5)*.2,x[f*3+1]=(Math.random()-.5)*.2,x[f*3+2]=(Math.random()-.5)*.2,s(T),y[f*3]=T[0],y[f*3+1]=T[1],y[f*3+2]=T[2],o(F,C,f),E=!0,A[f]=0,_[f]=.9+Math.random()*.5,S[f]=0;continue}x[f*3]+=y[f*3]*d,x[f*3+1]+=y[f*3+1]*d,x[f*3+2]+=y[f*3+2]*d,x[f*3]*x[f*3]+x[f*3+1]*x[f*3+1]+x[f*3+2]*x[f*3+2]>=m&&!S[f]&&(S[f]=1,h&&h({position:new P(x[f*3],x[f*3+1],x[f*3+2]),intensity:1}))}i.current&&(i.current.geometry.attributes.position.needsUpdate=!0,E&&(i.current.geometry.attributes.aColor.needsUpdate=!0,i.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:i,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:a,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            vAlpha = (0.55 + 0.45 * sin(time * 3.0 + position.x * 5.0)) * (0.8 + 0.3 * flow);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (0.75 + 0.5 * flow) * (400.0 / -mv.z);
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function Q(){const{positions:h,colors:n,sizes:b}=u.useMemo(()=>{const i=new Float32Array(180),r=new Float32Array(180),m=new Float32Array(60);for(let s=0;s<60;s++){const o=Math.acos(-1+2*s/60),e=Math.sqrt(60*Math.PI)*o,a=2.35;i[s*3]=a*Math.cos(e)*Math.sin(o),i[s*3+1]=a*Math.sin(e)*Math.sin(o),i[s*3+2]=a*Math.cos(o);const g=s>=36;if(g)r[s*3]=.133,r[s*3+1]=.827,r[s*3+2]=.933;else{const c=new z().setHSL(.75+Math.random()*.1,.7,.6);r[s*3]=c.r,r[s*3+1]=c.g,r[s*3+2]=c.b}m[s]=g?.09:.055}return{positions:i,colors:r,sizes:m}},[]),v=u.useMemo(()=>({time:{value:0}}),[]);return j((i,r)=>{v.time.value+=r*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[n,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),t.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function Y(){const p=u.useRef(),h=u.useMemo(()=>({time:{value:0}}),[]),n=u.useRef(0);j((r,m)=>{n.current+=m,h.time.value=n.current,p.current&&(p.current.rotation.y=n.current*.06)});const{positions:b,colors:v,sizes:i}=u.useMemo(()=>{const m=new Float32Array(150),s=new Float32Array(150),o=new Float32Array(50);for(let e=0;e<50;e++){const a=e/50*Math.PI*2,g=e%3,c=2.55+g*.22,d=.15*g;m[e*3]=c*Math.cos(a),m[e*3+1]=c*Math.sin(a)*Math.sin(d),m[e*3+2]=c*Math.sin(a)*Math.cos(d);const l=e/50;s[e*3]=.659*(1-l)+.133*l,s[e*3+1]=.333*(1-l)+.827*l,s[e*3+2]=.969*(1-l)+.933*l,o[e]=.015+Math.random()*.025}return{positions:m,colors:s,sizes:o}},[]);return t.jsx("group",{ref:p,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[i,1]})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function Z({onImpactsReady:p}){const h=u.useRef([]),n=u.useRef(Array.from({length:8},()=>({position:new P,intensity:0,active:!1,age:0})));return j((b,v)=>{for(;h.current.length>0&&n.current.some(r=>!r.active);){const r=h.current.shift(),m=n.current.find(s=>!s.active);m&&(m.position.copy(r.position),m.intensity=r.intensity,m.active=!0,m.age=0)}const i=1.5;n.current.forEach(r=>{r.active&&(r.age+=v,r.intensity=Math.max(0,1-r.age*i),r.intensity<=0&&(r.active=!1))}),p(n.current.filter(r=>r.active).map(r=>({position:r.position,intensity:r.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=b=>{h.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function X(){const[p,h]=u.useState([]),n=u.useRef(""),b=u.useCallback(v=>{let i=v.length+":";for(let r=0;r<v.length;r++){const m=v[r];i+=m.position.x.toFixed(1)+","+m.position.y.toFixed(1)+","+m.position.z.toFixed(1)+","+m.intensity.toFixed(2)+";"}i!==n.current&&(n.current=i,h(v))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(q,{impactPoints:p}),t.jsx(Z,{onImpactsReady:b})]})}function tt(){const p=u.useRef(),h=u.useRef(0),{positions:n,colors:b,sizes:v}=u.useMemo(()=>{const m=new Float32Array(24),s=new Float32Array(24),o=new Float32Array(8);for(let e=0;e<8;e++){const a=e/8*Math.PI*2+Math.random()*.5,g=4+Math.random()*2;m[e*3]=g*Math.cos(a),m[e*3+1]=(Math.random()-.5)*3,m[e*3+2]=g*Math.sin(a);const c=Math.random();c<.4?(s[e*3]=.13,s[e*3+1]=.82,s[e*3+2]=.93):c<.7?(s[e*3]=.84,s[e*3+1]=.27,s[e*3+2]=.93):(s[e*3]=.83,s[e*3+1]=.66,s[e*3+2]=.32),o[e]=.08+Math.random()*.06}return{positions:m,colors:s,sizes:o}},[]),i=u.useMemo(()=>({time:{value:0}}),[]);return j((r,m)=>{var o,e,a;h.current+=m,i.time.value=h.current,p.current&&(p.current.rotation.y=h.current*.02);const s=(a=(e=(o=p.current)==null?void 0:o.geometry)==null?void 0:e.attributes)==null?void 0:a.aSize;if(s){for(let g=0;g<8;g++)s.array[g]=.06+.05*Math.sin(h.current*2+g*1.5);s.needsUpdate=!0}}),t.jsxs("points",{ref:p,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[n,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v,1]})]}),t.jsx("shaderMaterial",{uniforms:i,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function rt({liveData:p,paused:h}){const n=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=u.useCallback(o=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(o)},[]),v=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const o=()=>{const a=p||{},g=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,c=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(g/500,.5)+Math.min(c/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const l=v.current;l.intensity=d,a.block&&a.block!=="—"&&a.block!==l.block?(l.block=a.block,l.pulse=1):l.pulse=Math.max(.3,(l.pulse||.3)*.94)};o();const e=setInterval(o,400);return()=>clearInterval(e)},[p]);const i=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),r=u.useMemo(()=>({alpha:!0,antialias:!n,powerPreference:"high-performance"}),[n]),m=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),s=u.useMemo(()=>[1,1.5],[]);return t.jsxs(k,{camera:i,gl:r,onCreated:({gl:o})=>o.setClearColor(0,0),style:m,dpr:s,frameloop:h?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(X,{}),t.jsx(J,{flowRef:v}),t.jsx(K,{liveData:p,onImpact:b,flowRef:v}),t.jsx($,{}),t.jsx(H,{}),t.jsx(Q,{}),t.jsx(D,{liveData:p}),t.jsx(Y,{})]}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(B,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(B,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(tt,{})]}),t.jsx(V,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{rt as default};
