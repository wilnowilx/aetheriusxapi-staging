import{r as c,j as t,C as W,S as E,O as N,u as C}from"./r3f-CdH6mNND.js";import{q as I,p as A,e as z,r as R,F as O,D as U,h as b}from"./three--5aOfyF1.js";const B=({liveData:u})=>{const m=c.useRef(),s=c.useRef(0),M=c.useMemo(()=>{const e=u||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${e.endpoints||"100+"} ENDPOINTS   ${e.freeEndpoints||"40"} FREE   ${e.latency||"—"}   `}]},[u]),h=c.useMemo(()=>M.map(e=>{const o=document.createElement("canvas");o.width=2048,o.height=128;const i=o.getContext("2d");i.clearRect(0,0,o.width,o.height);const r=`bold ${e.fontSize}px 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace`;i.font=r,i.textAlign="center",i.textBaseline="middle";const d=e.text,a=i.measureText(d).width,g=Math.ceil((o.width+a)/a),p=(o.width-a*g)/2+a/2;i.fillStyle=e.color,i.shadowColor=e.color,i.shadowBlur=24;for(let l=0;l<g;l++)i.fillText(d,p+l*a,o.height/2);i.shadowBlur=0;for(let l=0;l<g;l++)i.fillText(d,p+l*a,o.height/2);return new I(o)}),[M]);return C((e,o)=>{s.current+=o,m.current&&M.forEach((i,r)=>{const d=m.current.children[r];d&&(d.rotation.y=s.current*i.speed)})}),t.jsx("group",{ref:m,children:M.map((e,o)=>t.jsxs("group",{position:[0,e.yOffset,0],rotation:[e.tilt,0,0],children:[t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[e.radius,e.radius,e.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:h[o],transparent:!0,opacity:e.opacity,side:U,depthWrite:!1,blending:A})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[e.radius,e.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:e.color,transparent:!0,opacity:e.opacity*.12,depthWrite:!1})]})]},o))})};function L(){const u=c.useMemo(()=>({time:{value:0},colorA:{value:new z(2282478)},colorB:{value:new z(11032055)},colorC:{value:new z(14239471)}}),[]);return C((m,s)=>{u.time.value+=s*.6}),t.jsxs("mesh",{scale:1.15,children:[t.jsx("sphereGeometry",{args:[2.2,28,20]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:A})]})}function G(){const u=c.useMemo(()=>({time:{value:0}}),[]);return C((m,s)=>{u.time.value+=s*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:u,vertexShader:`
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
        `,side:O,transparent:!0,depthWrite:!1,blending:A})]})}function k({impactPoints:u}){const m=c.useRef(),s=c.useMemo(()=>({time:{value:0},impact0:{value:new b(0,0,0)},i0t:{value:0},impact1:{value:new b(0,0,0)},i1t:{value:0},impact2:{value:new b(0,0,0)},i2t:{value:0},impact3:{value:new b(0,0,0)},i3t:{value:0},impact4:{value:new b(0,0,0)},i4t:{value:0},impact5:{value:new b(0,0,0)},i5t:{value:0},impact6:{value:new b(0,0,0)},i6t:{value:0},impact7:{value:new b(0,0,0)},i7t:{value:0}}),[]);return C((M,h)=>{if(s.time.value+=h*.5,u)for(let e=0;e<8&&e<u.length;e++){const o=u[e];s[`impact${e}`].value.copy(o.position),s[`i${e}t`].value=o.intensity}}),t.jsxs("mesh",{ref:m,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:s,vertexShader:`
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
        `,wireframe:!0,transparent:!0,depthWrite:!1})]})}function D({flowRef:u}){const m=c.useRef(),s=c.useRef(0),M=c.useMemo(()=>{const h=document.createElement("canvas");h.width=512,h.height=128;const e=h.getContext("2d");return e.clearRect(0,0,512,128),e.font="bold 72px monospace",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#0052FF",e.shadowColor="#0052FF",e.shadowBlur=30,e.fillText("BASE",256,64),e.shadowBlur=0,e.fillText("BASE",256,64),new I(h)},[]);return C((h,e)=>{var i;s.current+=e;const o=(u==null?void 0:u.current)||{intensity:1,pulse:.3};if(o.pulse=Math.max(.25,(o.pulse||0)-e*1.8),m.current){m.current.rotation.y=s.current*(.15+.15*o.intensity),m.current.rotation.x=s.current*.1;const r=Math.sin(s.current*1.8),d=1+.06*r+.22*o.pulse;m.current.scale.set(d,d,d);const a=(i=m.current.children[0])==null?void 0:i.material;a&&(a.opacity=.75+.2*r+.15*o.pulse)}}),t.jsxs("group",{ref:m,scale:1.3,children:[t.jsx("sprite",{scale:[2.2,.55,1],children:t.jsx("spriteMaterial",{map:M,transparent:!0,blending:A,opacity:.85,depthWrite:!1})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.4,16,12]}),t.jsx("meshBasicMaterial",{color:21247,transparent:!0,opacity:.08})]})]})}function V({liveData:u,onImpact:m,flowRef:s}){const h=c.useRef(0),e=c.useRef(),o=2.2,i=o*o,r=p=>{var j;const l=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1),n=Math.max(.5,Math.min(1.8,((j=s==null?void 0:s.current)==null?void 0:j.intensity)||1)),y=(1.1+Math.random()*.8)*(.75+.45*n);p[0]=Math.sin(v)*Math.cos(l)*y,p[1]=Math.sin(v)*Math.sin(l)*y,p[2]=Math.cos(v)*y},d=(p,l,v)=>{if(Math.random()<.38)p[v*3]=.063,p[v*3+1]=.725,p[v*3+2]=.506,l[v]=.03+Math.random()*.035;else{const n=Math.random();p[v*3]=0*(1-n)+.659*n,p[v*3+1]=.322*(1-n)+.333*n,p[v*3+2]=1*(1-n)+.969*n,l[v]=.02+Math.random()*.03}},a=c.useMemo(()=>{const p=new Float32Array(156),l=new Float32Array(156),v=new Float32Array(156),n=new Float32Array(52),y=new Float32Array(52),j=new Float32Array(52),T=new Uint8Array(52);for(let x=0;x<52;x++){p[x*3]=(Math.random()-.5)*.3,p[x*3+1]=(Math.random()-.5)*.3,p[x*3+2]=(Math.random()-.5)*.3;const _=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),P=1.1+Math.random()*.8;l[x*3]=Math.sin(S)*Math.cos(_)*P,l[x*3+1]=Math.sin(S)*Math.sin(_)*P,l[x*3+2]=Math.cos(S)*P;const w=Math.random();Math.random()<.38?(v[x*3]=.063,v[x*3+1]=.725,v[x*3+2]=.506,n[x]=.03+Math.random()*.035):(v[x*3]=0*(1-w)+.659*w,v[x*3+1]=.322*(1-w)+.333*w,v[x*3+2]=1*(1-w)+.969*w,n[x]=.02+Math.random()*.03),y[x]=Math.random()*3,j[x]=1.6+Math.random()*1}return{positions:p,velocities:l,colors:v,sizes:n,lifetimes:y,maxLifetimes:j,hit:T}},[]),g=c.useMemo(()=>({time:{value:0},flow:{value:1}}),[]);return C((p,l)=>{var F;h.current+=l,g.time.value=h.current;const v=Math.max(.5,Math.min(1.8,((F=s==null?void 0:s.current)==null?void 0:F.intensity)||1));g.flow.value=v;const{positions:n,velocities:y,colors:j,sizes:T,lifetimes:x,maxLifetimes:_,hit:S}=a,P=[0,0,0];let w=!1;for(let f=0;f<52;f++){if(x[f]+=l,x[f]>=_[f]){n[f*3]=(Math.random()-.5)*.3,n[f*3+1]=(Math.random()-.5)*.3,n[f*3+2]=(Math.random()-.5)*.3,r(P),y[f*3]=P[0],y[f*3+1]=P[1],y[f*3+2]=P[2],d(j,T,f),w=!0,x[f]=0,_[f]=1.6+Math.random()*1,S[f]=0;continue}n[f*3]+=y[f*3]*l,n[f*3+1]+=y[f*3+1]*l,n[f*3+2]+=y[f*3+2]*l,n[f*3]*n[f*3]+n[f*3+1]*n[f*3+1]+n[f*3+2]*n[f*3+2]>=i&&!S[f]&&(S[f]=1,m&&m({position:new b(n[f*3],n[f*3+1],n[f*3+2]),intensity:1}))}e.current&&(e.current.geometry.attributes.position.needsUpdate=!0,w&&(e.current.geometry.attributes.aColor.needsUpdate=!0,e.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:e,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[a.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[a.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[a.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:A})]})}function $(){const{positions:m,colors:s,sizes:M}=c.useMemo(()=>{const e=new Float32Array(180),o=new Float32Array(180),i=new Float32Array(60);for(let r=0;r<60;r++){const d=Math.acos(-1+2*r/60),a=Math.sqrt(60*Math.PI)*d,g=2.35;e[r*3]=g*Math.cos(a)*Math.sin(d),e[r*3+1]=g*Math.sin(a)*Math.sin(d),e[r*3+2]=g*Math.cos(d);const p=r>=36;if(p)o[r*3]=.133,o[r*3+1]=.827,o[r*3+2]=.933;else{const l=new z().setHSL(.75+Math.random()*.1,.7,.6);o[r*3]=l.r,o[r*3+1]=l.g,o[r*3+2]=l.b}i[r]=p?.09:.055}return{positions:e,colors:o,sizes:i}},[]),h=c.useMemo(()=>({time:{value:0}}),[]);return C((e,o)=>{h.time.value+=o*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[s,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[M,1]})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:A})]})}function H(){const u=c.useRef(),m=c.useMemo(()=>({time:{value:0}}),[]),s=c.useRef(0);C((o,i)=>{s.current+=i,m.time.value=s.current,u.current&&(u.current.rotation.y=s.current*.06)});const{positions:M,colors:h,sizes:e}=c.useMemo(()=>{const i=new Float32Array(150),r=new Float32Array(150),d=new Float32Array(50);for(let a=0;a<50;a++){const g=a/50*Math.PI*2,p=a%3,l=2.55+p*.22,v=.15*p;i[a*3]=l*Math.cos(g),i[a*3+1]=l*Math.sin(g)*Math.sin(v),i[a*3+2]=l*Math.sin(g)*Math.cos(v);const n=a/50;r[a*3]=.659*(1-n)+.133*n,r[a*3+1]=.333*(1-n)+.827*n,r[a*3+2]=.969*(1-n)+.933*n,d[a]=.015+Math.random()*.025}return{positions:i,colors:r,sizes:d}},[]);return t.jsx("group",{ref:u,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e,1]})]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:A})]})})}function q({onImpactsReady:u}){const m=c.useRef([]),s=c.useRef(Array.from({length:8},()=>({position:new b,intensity:0,active:!1,age:0})));return C((M,h)=>{for(;m.current.length>0&&s.current.some(o=>!o.active);){const o=m.current.shift(),i=s.current.find(r=>!r.active);i&&(i.position.copy(o.position),i.intensity=o.intensity,i.active=!0,i.age=0)}const e=1.5;s.current.forEach(o=>{o.active&&(o.age+=h,o.intensity=Math.max(0,1-o.age*e),o.intensity<=0&&(o.active=!1))}),u(s.current.filter(o=>o.active).map(o=>({position:o.position,intensity:o.intensity})))}),c.useEffect(()=>(window.__aetherius_addImpact=M=>{m.current.push(M)},()=>{delete window.__aetherius_addImpact}),[]),null}function K(){const[u,m]=c.useState([]),s=c.useRef(""),M=c.useCallback(h=>{let e=h.length+":";for(let o=0;o<h.length;o++){const i=h[o];e+=i.position.x.toFixed(1)+","+i.position.y.toFixed(1)+","+i.position.z.toFixed(1)+","+i.intensity.toFixed(2)+";"}e!==s.current&&(s.current=e,m(h))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{impactPoints:u}),t.jsx(q,{onImpactsReady:M})]})}function Q(){const u=c.useRef(),m=c.useRef(0),{positions:s,colors:M,sizes:h}=c.useMemo(()=>{const i=new Float32Array(24),r=new Float32Array(24),d=new Float32Array(8);for(let a=0;a<8;a++){const g=a/8*Math.PI*2+Math.random()*.5,p=4+Math.random()*2;i[a*3]=p*Math.cos(g),i[a*3+1]=(Math.random()-.5)*3,i[a*3+2]=p*Math.sin(g);const l=Math.random();l<.4?(r[a*3]=.13,r[a*3+1]=.82,r[a*3+2]=.93):l<.7?(r[a*3]=.84,r[a*3+1]=.27,r[a*3+2]=.93):(r[a*3]=.83,r[a*3+1]=.66,r[a*3+2]=.32),d[a]=.08+Math.random()*.06}return{positions:i,colors:r,sizes:d}},[]),e=c.useMemo(()=>({time:{value:0}}),[]);return C((o,i)=>{var d,a,g;m.current+=i,e.time.value=m.current,u.current&&(u.current.rotation.y=m.current*.02);const r=(g=(a=(d=u.current)==null?void 0:d.geometry)==null?void 0:a.attributes)==null?void 0:g.aSize;if(r){for(let p=0;p<8;p++)r.array[p]=.06+.05*Math.sin(m.current*2+p*1.5);r.needsUpdate=!0}}),t.jsxs("points",{ref:u,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[s,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[h,1]})]}),t.jsx("shaderMaterial",{uniforms:e,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:A})]})}function X({liveData:u,paused:m}){const s=c.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),M=c.useCallback(d=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(d)},[]),h=c.useRef({intensity:1,pulse:.4,block:null});c.useEffect(()=>{const d=()=>{const g=u||{},p=parseFloat(String(g.volume||"").replace(/[^0-9.]/g,""))||0,l=parseFloat(String(g.gas||"").replace(/[^0-9.]/g,""))||0;let v=.9+Math.min(p/500,.5)+Math.min(l/50,.25)+Math.random()*.15;v=Math.max(.6,Math.min(1.8,v));const n=h.current;n.intensity=v,g.block&&g.block!=="—"&&g.block!==n.block?(n.block=g.block,n.pulse=1):n.pulse=Math.max(.3,(n.pulse||.3)*.94)};d();const a=setInterval(d,400);return()=>clearInterval(a)},[u]);const e=c.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),o=c.useMemo(()=>({alpha:!0,antialias:!s,powerPreference:"high-performance"}),[s]),i=c.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=c.useMemo(()=>[1,1.5],[]);return t.jsxs(W,{camera:e,gl:o,onCreated:({gl:d})=>d.setClearColor(0,0),style:i,dpr:r,frameloop:m?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(K,{}),t.jsx(D,{flowRef:h}),t.jsx(V,{liveData:u,onImpact:M,flowRef:h}),t.jsx(L,{}),t.jsx(G,{}),t.jsx($,{}),t.jsx(B,{liveData:u}),t.jsx(H,{})]}),!s&&t.jsxs(t.Fragment,{children:[t.jsx(E,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(E,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(Q,{})]}),t.jsx(N,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{X as default};
