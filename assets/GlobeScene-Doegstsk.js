import{r as h,j as t,C as K,S as L,O as J,u as A}from"./r3f-DkpgSMZU.js";import{q as G,r as $,p as C,F as R,e as N,s as q,h as z}from"./three-BuKzPtX4.js";const Q=({liveData:f})=>{const x=h.useRef(),m=h.useRef(0),y=h.useMemo(()=>{const n=f||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${n.endpoints||"100+"} ENDPOINTS   ${n.freeEndpoints||"40"} FREE   ${n.latency||"—"}   `}]},[f]),g=h.useMemo(()=>y.map(n=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const i=e.getContext("2d");i.clearRect(0,0,e.width,e.height);const M=`900 ${n.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;i.font=M,i.textAlign="center",i.textBaseline="middle";const r=n.text,d=i.measureText(r).width,a=Math.ceil((e.width+d)/d),b=(e.width-d*a)/2+d/2;i.shadowColor=n.color,i.shadowBlur=48,i.fillStyle=n.color;for(let o=0;o<a;o++)i.fillText(r,b+o*d,e.height/2);i.shadowBlur=22;for(let o=0;o<a;o++)i.fillText(r,b+o*d,e.height/2);i.shadowBlur=0,i.fillStyle=n.color==="#ffffff"?"#ffffff":n.color;for(let o=0;o<a;o++)i.fillText(r,b+o*d,e.height/2);i.fillStyle="#ffffff",i.globalAlpha=.85;for(let o=0;o<a;o++)i.fillText(r,b+o*d,e.height/2);i.globalAlpha=1;const v=new G(e);return v.anisotropy=8,v.minFilter=q,v.magFilter=q,v}),[y]),p=h.useMemo(()=>y.map(n=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const i=e.getContext("2d");i.clearRect(0,0,e.width,e.height),i.font=`900 ${n.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,i.textAlign="center",i.textBaseline="middle";const M=n.text,r=i.measureText(M).width,d=Math.ceil((e.width+r)/r),a=(e.width-r*d)/2+r/2;i.shadowColor=n.color,i.shadowBlur=28,i.fillStyle=n.color,i.globalAlpha=.35;for(let v=0;v<d;v++)i.fillText(M,a+v*r,e.height/2);i.globalAlpha=1;const b=new G(e);return b.anisotropy=4,b}),[y]),[s,l]=h.useState(null),c=h.useRef(0);return A((n,e)=>{m.current+=e,c.current+=e,x.current&&y.forEach((i,M)=>{const r=x.current.children[M];if(r){s===M||(r.rotation.y+=e*i.speed);const a=r.children[0];if(a!=null&&a.material){const b=.88+.12*Math.sin(c.current*.7+M*1.2);a.material.opacity=(s===M?1:i.opacity)*b}}})}),t.jsx("group",{ref:x,children:y.map((n,e)=>t.jsxs("group",{position:[0,n.yOffset,0],rotation:[n.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:i=>{i.stopPropagation(),l(e),document.body.style.cursor="pointer"},onPointerOut:()=>{l(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(n.radius,n.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[n.radius,n.radius,n.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:g[e],transparent:!0,opacity:n.opacity,side:R,depthWrite:!1,blending:C,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[n.radius,n.radius,n.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:p[e],transparent:!0,opacity:.22,side:$,depthWrite:!1,blending:C,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[n.radius,n.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:n.color,transparent:!0,opacity:n.opacity*.12,depthWrite:!1})]})]},e))})};function Y(){const f=h.useMemo(()=>({time:{value:0},colorA:{value:new N(2282478)},colorB:{value:new N(11032055)},colorC:{value:new N(14239471)}}),[]);return A((x,m)=>{f.time.value+=m*.6}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:C})]})}function Z(){const f=h.useMemo(()=>({time:{value:0}}),[]);return A((x,m)=>{f.time.value+=m*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:C})]})}function X({impactPoints:f}){const x=h.useRef(),m=h.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return A((y,g)=>{if(m.time.value+=g*.5,f)for(let p=0;p<8&&p<f.length;p++){const s=f[p];m[`impact${p}`].value.copy(s.position),m[`i${p}t`].value=s.intensity}}),t.jsxs("mesh",{ref:x,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:m,vertexShader:`
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

          // Collision glow: localized bright point where spark hits wireframe
          float impactPulse(vec3 worldPos, vec3 impactPos, float intensity) {
            float dist = length(worldPos - impactPos);
            // Tight ring expanding from impact point
            float ring = abs(dist - time * 0.8 * intensity);
            float ringGlow = exp(-ring * 1.5) * intensity;
            // Proximity glow (bright at impact, fades radially)
            float prox = exp(-dist * 2.0) * intensity * 0.8;
            // Hot center flash
            float hotCenter = exp(-dist * 4.0) * intensity * 0.5;
            return (ringGlow * 0.5 + prox + hotCenter) * intensity;
          }

          float polarGlow(vec3 pos) {
            return pow(abs(pos.y / 2.2), 2.5) * 0.6;
          }

          // Ambient sparkle: makes wireframe feel alive even without impacts
          float ambientSparkle(vec3 pos, float t) {
            float s = 0.0;
            // Traveling sparkles along wireframe edges
            float angle = atan(pos.z, pos.x);
            float lat = asin(pos.y / 2.2);
            s += pow(sin(angle * 12.0 + t * 1.5) * 0.5 + 0.5, 8.0) * 0.15;
            s += pow(sin(lat * 8.0 - t * 0.8) * 0.5 + 0.5, 10.0) * 0.1;
            // Random micro-sparkles
            float hash = fract(sin(dot(floor(pos * 20.0), vec3(12.9898,78.233,45.164))) * 43758.5453);
            s += step(0.97, hash) * 0.3 * (0.5 + 0.5 * sin(t * 5.0 + hash * 20.0));
            return s;
          }

          void main() {
            float pulse = 0.6 + 0.4 * sin(time * 0.5 + vWorldPos.y * 2.0);
            float fade = smoothstep(0.0, 0.3, abs(vPos.y));

            // Accumulate impact pulses — enhanced collision glow
            float impacts = 0.0;
            impacts += impactPulse(vWorldPos, impact0, i0t);
            impacts += impactPulse(vWorldPos, impact1, i1t);
            impacts += impactPulse(vWorldPos, impact2, i2t);
            impacts += impactPulse(vWorldPos, impact3, i3t);
            impacts += impactPulse(vWorldPos, impact4, i4t);
            impacts += impactPulse(vWorldPos, impact5, i5t);
            impacts += impactPulse(vWorldPos, impact6, i6t);
            impacts += impactPulse(vWorldPos, impact7, i7t);
            impacts = clamp(impacts, 0.0, 2.0);

            // Ambient sparkle on wireframe
            float sparkle = ambientSparkle(vPos, time * 2.0);

            // Base wireframe color (purple → cyan, sharper)
            vec3 baseCol = mix(vec3(0.659, 0.333, 0.969), vec3(0.133, 0.827, 0.933), 0.3 + 0.2 * sin(time * 0.3));
            float polar = polarGlow(vPos);
            baseCol += polar * vec3(0.25, 0.1, 0.4);

            // Impact color: hot white-blue at collision point
            vec3 impactCol = mix(vec3(0.2, 0.5, 1.0), vec3(1.0, 1.0, 1.0), 0.7);
            vec3 col = mix(baseCol, impactCol, impacts * 0.8);
            col += vec3(0.15, 0.08, 0.02) * impacts;
            // Sparkle adds brightness
            col += vec3(0.4, 0.6, 0.9) * sparkle;

            float alpha = (0.05 + polar * 0.03) * pulse * fade + impacts * 0.5 + sparkle * 0.15;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function tt({flowRef:f}){const x=h.useRef(),m=h.useRef(0),y=h.useMemo(()=>{const p=document.createElement("canvas");p.width=512,p.height=128;const s=p.getContext("2d");return s.clearRect(0,0,512,128),s.font="bold 72px monospace",s.textAlign="center",s.textBaseline="middle",s.fillStyle="#0052FF",s.shadowColor="#0052FF",s.shadowBlur=30,s.fillText("BASE",256,64),s.shadowBlur=0,s.fillText("BASE",256,64),new G(p)},[]);A((p,s)=>{var c;m.current+=s;const l=(f==null?void 0:f.current)||{pulse:.3};if(l.pulse=Math.max(.25,(l.pulse||0)-s*1.6),x.current){x.current.rotation.y=m.current*.08,x.current.rotation.x=Math.sin(m.current*.12)*.08;const n=Math.sin(m.current*1.5),e=l.pulse,i=1+.04*n+.18*e;x.current.scale.set(i,i,i);const M=(c=x.current.children[0])==null?void 0:c.material;M&&(M.opacity=.7+.18*n+.18*e)}});const g=h.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return A((p,s)=>{var l,c;g.time.value+=s*.5,g.flow.value=((l=f==null?void 0:f.current)==null?void 0:l.intensity)||1,g.pulse.value=((c=f==null?void 0:f.current)==null?void 0:c.pulse)||.3}),t.jsxs("group",{ref:x,scale:1.3,children:[t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              // Multi-layer volumetric fog: dense core → wispy edges
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.2; // core glow
              float fog2 = pow(1.0 - dist, 0.8) * 0.3; // outer wisps
              float fog = fog1 + fog2;

              // Swirl turbulence (3D noise approximation)
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.6 + 0.4 * swirl;

              float beat = 0.45 + 0.55 * pulse;
              // Color: deep blue core → cyan → purple edges
              vec3 col = mix(vec3(0.06,0.18,0.55), vec3(0.12,0.4,0.85), dist*0.6);
              col += vec3(0.3,0.12,0.5) * (1.0-dist) * 0.3; // purple core warmth
              float alpha = fog * turbulence * 0.06 * beat * (0.6 + 0.4*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:$})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.15,16,12]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.15;
              float radial = pow(1.0 - dist, 2.8);
              // Swirling gas tendrils
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.5 + 0.5 * swirl;
              float noise = tendrils * 0.6 + 0.4;
              float beat = 0.35 + 0.65 * pulse;

              vec3 col = mix(vec3(0.04,0.12,0.45), vec3(0.08,0.3,0.75), noise*0.4);
              col += vec3(0.15,0.05,0.35) * (1.0-dist) * 0.4;

              float alpha = radial * noise * 0.08 * beat * (0.5 + 0.5*flow);
              alpha *= smoothstep(1.0, 0.2, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:R})]}),t.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:t.jsx("spriteMaterial",{map:y,transparent:!0,blending:C,opacity:.85,depthWrite:!1,depthTest:!0})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.38;
              float radial = pow(1.0 - dist, 3.0);
              float swirl = sin(vPos.x*8.0+time*0.8)*sin(vPos.y*6.0+time*0.5)*sin(vPos.z*5.0+time*0.6);
              float noise = 0.7 + 0.3*swirl;
              float beat = 0.6 + 0.4*pulse;
              vec3 deepBlue = vec3(0.0,0.15,0.9);
              vec3 coreCyan = vec3(0.08,0.6,1.0);
              vec3 col = mix(deepBlue, coreCyan, (1.0-dist)*0.6 + noise*0.15);
              col += vec3(0.25,0.08,0.45) * (1.0-dist) * 0.4;
              float alpha = radial * 0.88 * noise * (0.75 + 0.4*flow) * beat;
              alpha *= smoothstep(1.0, 0.5, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.06,0.42,0.92), vec3(0.5,0.22,0.88), dist*0.5);
              float alpha = radial * 0.28 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.45,0.2,0.85), vec3(0.75,0.28,0.65), dist*0.4);
              float alpha = radial * 0.14 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.12,0.3,0.8), vec3(0.45,0.2,0.75), dist*0.5+phase*0.15);
              float alpha = radial * 0.07 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:R})]}),t.jsx(et,{gasUniforms:g})]})}function et({gasUniforms:f}){const p=4.840000000000001,s=h.useRef(),l=h.useRef([]),c=h.useMemo(()=>{const i=new Float32Array(216),M=new Float32Array(216),r=new Float32Array(360),d=new Float32Array(216);for(let a=0;a<72;a++){const b=a>=48;r[a*5]=1.5+Math.random()*2,r[a*5+1]=1+Math.random()*2.5,r[a*5+2]=Math.random()*3,r[a*5+3]=b?1:0,r[a*5+4]=1;const v=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),j=r[a*5];if(M[a*3]=Math.sin(o)*Math.cos(v)*j,M[a*3+1]=Math.sin(o)*Math.sin(v)*j,M[a*3+2]=Math.cos(o)*j,i[a*3]=(Math.random()-.5)*.04,i[a*3+1]=(Math.random()-.5)*.04,i[a*3+2]=(Math.random()-.5)*.04,b){const w=Math.random();d[a*3]=.6+w*.3,d[a*3+1]=.15+w*.2,d[a*3+2]=.85+w*.15}else{const w=Math.random();d[a*3]=.1+w*.9,d[a*3+1]=.6+w*.4,d[a*3+2]=.8+w*.2}}return{positions:i,velocities:M,seeds:r,colors:d}},[]);return A((i,M)=>{if(!s.current)return;const{positions:r,velocities:d,seeds:a,colors:b}=c;f.time.value,f.pulse.value;const v=[];for(let o=0;o<72;o++){const j=a[o*5+3]>.5;a[o*5+2]+=M;const w=a[o*5+2],S=a[o*5+1];if(w>=S){const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;d[o*3]=Math.sin(P)*Math.cos(_)*T,d[o*3+1]=Math.sin(P)*Math.sin(_)*T,d[o*3+2]=Math.cos(P)*T,r[o*3]=(Math.random()-.5)*.04,r[o*3+1]=(Math.random()-.5)*.04,r[o*3+2]=(Math.random()-.5)*.04,a[o*5]=T,a[o*5+2]=0,a[o*5+4]=1;continue}if(a[o*5+4]<.5)continue;r[o*3]+=d[o*3]*M,r[o*3+1]+=d[o*3+1]*M,r[o*3+2]+=d[o*3+2]*M;const F=j?.97:.992;d[o*3]*=F,d[o*3+1]*=F,d[o*3+2]*=F;const O=r[o*3]**2+r[o*3+1]**2+r[o*3+2]**2;if(O>=p&&a[o*5+4]>.5){const P=2.2/Math.sqrt(O);r[o*3]*=P,r[o*3+1]*=P,r[o*3+2]*=P,v.push({x:r[o*3],y:r[o*3+1],z:r[o*3+2],intensity:j?.6:1}),j?(d[o*3]*=-.3,d[o*3+1]*=-.3,d[o*3+2]*=-.3,a[o*5+2]=a[o*5+1]-.2):(a[o*5+4]=0,a[o*5+2]=a[o*5+1]-.1)}}l.current=v,s.current.geometry.attributes.position.needsUpdate=!0}),t.jsxs("points",{ref:s,renderOrder:10,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[c.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-seeds",args:[c.seeds,5]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[c.colors,3]})]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
    attribute vec5 seeds;
    attribute vec3 aColor;
    uniform float time;
    uniform float pulse;
    varying vec3 vColor;
    varying float vAlpha;
    varying float vType;
    varying float vAge;

    void main() {
      vColor = aColor;
      float speed = seeds.x;
      float maxLife = seeds.y;
      float age = seeds.z;
      float type = seeds.w;
      float alive = seeds.a;

      vType = type;
      float lifeRatio = clamp(age / maxLife, 0.0, 1.0);
      vAge = lifeRatio;

      // Fade: sharp birth, aggressive death
      float birth = smoothstep(0.0, 0.08, lifeRatio);
      float death = 1.0 - smoothstep(0.6, 1.0, lifeRatio);
      float alive_f = step(0.5, alive);

      // Size: sparks are larger, trails are thin
      float baseSize = type < 0.5 ? 4.0 : 2.0;
      // Distance-based scaling
      float dist = length(position);
      float perspScale = 250.0 / (-mvPos.z);

      vAlpha = birth * death * alive_f * (0.7 + 0.3 * pulse);
      gl_PointSize = baseSize * perspScale * (1.0 - lifeRatio * 0.3);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vType;
    varying float vAge;

    void main() {
      vec2 uv = gl_PointCoord * 2.0 - 1.0;

      // AGGRESSIVE SHAPE: diamond/star, NOT circle
      // Spark: 4-pointed star (cross pattern)
      // Trail: elongated diamond
      float d;
      if (vType < 0.5) {
        // Spark: 4-pointed star
        float ax = abs(uv.x);
        float ay = abs(uv.y);
        // Star shape: min of diamond and cross
        float diamond = ax + ay;
        float cross = min(ax, ay) * 2.8;
        d = min(diamond, cross) * 0.7;
      } else {
        // Trail: elongated vertical diamond
        d = abs(uv.x) * 1.8 + abs(uv.y) * 0.6;
      }

      if (d > 1.0) discard;

      float sharp = pow(1.0 - d, 1.2);
      float core = pow(1.0 - d, 4.0); // hot center

      // Color: white-hot core → colored edge
      vec3 hotCore = vec3(1.0, 1.0, 1.0);
      vec3 col = mix(vColor, hotCore, core * 0.7);

      // Glow halos
      float glow = exp(-d * 2.5) * 0.4;

      gl_FragColor = vec4(col, (sharp + glow) * vAlpha);
    }
  `,transparent:!0,depthWrite:!1,blending:C})]})}function ot(){const x=h.useRef(),m=h.useRef(0),y=h.useMemo(()=>{const g=new Float32Array(600),p=new Float32Array(600),s=new Float32Array(200);for(let l=0;l<200;l++){const c=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),e=3+Math.random()*12;g[l*3]=e*Math.sin(n)*Math.cos(c),g[l*3+1]=e*Math.sin(n)*Math.sin(c),g[l*3+2]=e*Math.cos(n);const i=Math.random();i<.5?(p[l*3]=.3,p[l*3+1]=.15,p[l*3+2]=.5):i<.8?(p[l*3]=.1,p[l*3+1]=.4,p[l*3+2]=.5):(p[l*3]=.5,p[l*3+1]=.5,p[l*3+2]=.55),s[l]=.02+Math.random()*.03}return{positions:g,colors:p,sizes:s}},[]);return A((g,p)=>{m.current+=p,x.current&&(x.current.rotation.y=m.current*.008,x.current.rotation.x=Math.sin(m.current*.003)*.05)}),t.jsxs("points",{ref:x,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[y.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; void main(){vColor=aColor; vAlpha=0.35; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(300.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,2.0); gl_FragColor=vec4(vColor,g*vAlpha*0.5);}",transparent:!0,depthWrite:!1,blending:C})]})}function at({liveData:f,onImpact:x,flowRef:m}){const g=h.useRef(0),p=h.useRef(),s=2.2,l=s*s,c=r=>{var o;const d=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),b=Math.max(.5,Math.min(1.8,((o=m==null?void 0:m.current)==null?void 0:o.intensity)||1)),v=(1.6+Math.random()*1)*(.9+.3*b);r[0]=Math.sin(a)*Math.cos(d)*v,r[1]=Math.sin(a)*Math.sin(d)*v,r[2]=Math.cos(a)*v},n=(r,d,a)=>{if(Math.random()<.42)r[a*3]=.08,r[a*3+1]=.85,r[a*3+2]=.55,d[a]=.055+Math.random()*.045;else{const b=Math.random();r[a*3]=.15*(1-b)+.78*b,r[a*3+1]=.45*(1-b)+.35*b,r[a*3+2]=1*(1-b)+.97*b,d[a]=.04+Math.random()*.04}},e=h.useMemo(()=>{const r=new Float32Array(156),d=new Float32Array(156),a=new Float32Array(156),b=new Float32Array(52),v=new Float32Array(52),o=new Float32Array(52),j=new Uint8Array(52);for(let w=0;w<52;w++){const S=Math.random()*.08,F=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);r[w*3]=S*Math.sin(O)*Math.cos(F),r[w*3+1]=S*Math.sin(O)*Math.sin(F),r[w*3+2]=S*Math.cos(O);const _=Math.random()*Math.PI*2,P=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;d[w*3]=Math.sin(P)*Math.cos(_)*T,d[w*3+1]=Math.sin(P)*Math.sin(_)*T,d[w*3+2]=Math.cos(P)*T,n(a,b,w),v[w]=Math.random()*1.5,o[w]=1.8+Math.random()*.8}return{positions:r,velocities:d,colors:a,sizes:b,lifetimes:v,maxLifetimes:o,hit:j}},[]),i=h.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),M=h.useRef(0);return A((r,d)=>{var k,B;g.current+=d,i.time.value=g.current;const a=Math.max(.5,Math.min(1.8,((k=m==null?void 0:m.current)==null?void 0:k.intensity)||1));i.flow.value=a;const b=((B=m==null?void 0:m.current)==null?void 0:B.pulse)>.95&&g.current-M.current>1.2;b&&(M.current=g.current);const{positions:v,velocities:o,colors:j,sizes:w,lifetimes:S,maxLifetimes:F,hit:O}=e,_=[0,0,0];let P=!1,T=b?8:0;for(let u=0;u<52;u++){S[u]+=d;const V=T>0&&S[u]>.15;if(S[u]>=F[u]||V){V&&T--;const E=Math.random()*.08,W=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1);v[u*3]=E*Math.sin(U)*Math.cos(W),v[u*3+1]=E*Math.sin(U)*Math.sin(W),v[u*3+2]=E*Math.cos(U),c(_),o[u*3]=_[0],o[u*3+1]=_[1],o[u*3+2]=_[2],n(j,w,u),P=!0,S[u]=0,F[u]=1.8+Math.random()*.8,O[u]=0;continue}const D=Math.sqrt(v[u*3]*v[u*3]+v[u*3+1]*v[u*3+1]+v[u*3+2]*v[u*3+2]),I=D>1.6?(D-1.6)/.6:0;I>0&&(o[u*3]*=1-I*.08,o[u*3+1]*=1-I*.08,o[u*3+2]*=1-I*.08,w[u]=w[u]*(1+I*.8)),v[u*3]+=o[u*3]*d,v[u*3+1]+=o[u*3+1]*d,v[u*3+2]+=o[u*3+2]*d;const H=v[u*3]*v[u*3]+v[u*3+1]*v[u*3+1]+v[u*3+2]*v[u*3+2];if(H>=l)if(O[u])w[u]*=1.06;else{O[u]=1;const E=Math.sqrt(H),W=s/E;v[u*3]*=W,v[u*3+1]*=W,v[u*3+2]*=W,o[u*3]=0,o[u*3+1]=0,o[u*3+2]=0,x&&x({position:new z(v[u*3],v[u*3+1],v[u*3+2]),intensity:1}),S[u]=F[u]-.35}}p.current&&(p.current.geometry.attributes.position.needsUpdate=!0,P&&(p.current.geometry.attributes.aColor.needsUpdate=!0,p.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:p,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:i,vertexShader:`
          attribute float aSize; attribute vec3 aColor;
          varying vec3 vColor; varying float vAlpha; uniform float time; uniform float flow;
          void main() {
            vColor = aColor;
            float dist = length(position);
            float travel = clamp(dist / 2.2, 0.0, 1.0);
            float edgeDissolve = 1.0 - smoothstep(0.65, 1.0, travel);
            vAlpha = (0.7 + 0.3 * sin(time * 2.0 + dist * 4.0)) * (0.9 + 0.25 * flow) * (0.3 + 0.7 * edgeDissolve);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            float sz = aSize * (1.0 + travel * 1.2);
            gl_PointSize = sz * (0.9 + 0.6 * flow) * (480.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vColor; varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord * 2.0 - 1.0;
            // Angular diamond shape, NOT circle
            float d = abs(uv.x) * 1.2 + abs(uv.y) * 0.8;
            if (d > 1.0) discard;
            float sharp = pow(1.0 - d, 1.5);
            float core = pow(1.0 - d, 5.0);
            vec3 hotCore = vec3(1.0, 1.0, 1.0);
            vec3 col = mix(vColor, hotCore, core * 0.5);
            float glow = exp(-d * 3.0) * 0.3;
            gl_FragColor = vec4(col, (sharp + glow) * vAlpha);
          }
        `,transparent:!0,depthWrite:!1,blending:C})]})}function it(){const{positions:x,colors:m,sizes:y}=h.useMemo(()=>{const p=new Float32Array(180),s=new Float32Array(180),l=new Float32Array(60);for(let c=0;c<60;c++){const n=Math.acos(-1+2*c/60),e=Math.sqrt(60*Math.PI)*n,i=2.35;p[c*3]=i*Math.cos(e)*Math.sin(n),p[c*3+1]=i*Math.sin(e)*Math.sin(n),p[c*3+2]=i*Math.cos(n);const M=c>=36;if(M)s[c*3]=.133,s[c*3+1]=.827,s[c*3+2]=.933;else{const r=new N().setHSL(.75+Math.random()*.1,.7,.6);s[c*3]=r.r,s[c*3+1]=r.g,s[c*3+2]=r.b}l[c]=M?.09:.055}return{positions:p,colors:s,sizes:l}},[]),g=h.useMemo(()=>({time:{value:0}}),[]);return A((p,s)=>{g.time.value+=s*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[y,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function st(){const f=h.useRef(),x=h.useMemo(()=>({time:{value:0}}),[]),m=h.useRef(0);A((s,l)=>{m.current+=l,x.time.value=m.current,f.current&&(f.current.rotation.y=m.current*.06)});const{positions:y,colors:g,sizes:p}=h.useMemo(()=>{const l=new Float32Array(150),c=new Float32Array(150),n=new Float32Array(50);for(let e=0;e<50;e++){const i=e/50*Math.PI*2,M=e%3,r=2.55+M*.22,d=.15*M;l[e*3]=r*Math.cos(i),l[e*3+1]=r*Math.sin(i)*Math.sin(d),l[e*3+2]=r*Math.sin(i)*Math.cos(d);const a=e/50;c[e*3]=.659*(1-a)+.133*a,c[e*3+1]=.333*(1-a)+.827*a,c[e*3+2]=.969*(1-a)+.933*a,n[e]=.015+Math.random()*.025}return{positions:l,colors:c,sizes:n}},[]);return t.jsx("group",{ref:f,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[g,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[p,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function rt({onImpactsReady:f}){const x=h.useRef([]),m=h.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return A((y,g)=>{for(;x.current.length>0&&m.current.some(s=>!s.active);){const s=x.current.shift(),l=m.current.find(c=>!c.active);l&&(l.position.copy(s.position),l.intensity=s.intensity,l.active=!0,l.age=0)}const p=1.5;m.current.forEach(s=>{s.active&&(s.age+=g,s.intensity=Math.max(0,1-s.age*p),s.intensity<=0&&(s.active=!1))}),f(m.current.filter(s=>s.active).map(s=>({position:s.position,intensity:s.intensity})))}),h.useEffect(()=>(window.__aetherius_addImpact=y=>{x.current.push(y)},()=>{delete window.__aetherius_addImpact}),[]),null}function nt(){const[f,x]=h.useState([]),m=h.useRef(""),y=h.useCallback(g=>{let p=g.length+":";for(let s=0;s<g.length;s++){const l=g[s];p+=l.position.x.toFixed(1)+","+l.position.y.toFixed(1)+","+l.position.z.toFixed(1)+","+l.intensity.toFixed(2)+";"}p!==m.current&&(m.current=p,x(g))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(X,{impactPoints:f}),t.jsx(rt,{onImpactsReady:y})]})}function lt(){const f=h.useRef(),x=h.useRef(0),{positions:m,colors:y,sizes:g}=h.useMemo(()=>{const l=new Float32Array(24),c=new Float32Array(24),n=new Float32Array(8);for(let e=0;e<8;e++){const i=e/8*Math.PI*2+Math.random()*.5,M=4+Math.random()*2;l[e*3]=M*Math.cos(i),l[e*3+1]=(Math.random()-.5)*3,l[e*3+2]=M*Math.sin(i);const r=Math.random();r<.4?(c[e*3]=.13,c[e*3+1]=.82,c[e*3+2]=.93):r<.7?(c[e*3]=.84,c[e*3+1]=.27,c[e*3+2]=.93):(c[e*3]=.83,c[e*3+1]=.66,c[e*3+2]=.32),n[e]=.08+Math.random()*.06}return{positions:l,colors:c,sizes:n}},[]),p=h.useMemo(()=>({time:{value:0}}),[]);return A((s,l)=>{var n,e,i;x.current+=l,p.time.value=x.current,f.current&&(f.current.rotation.y=x.current*.02);const c=(i=(e=(n=f.current)==null?void 0:n.geometry)==null?void 0:e.attributes)==null?void 0:i.aSize;if(c){for(let M=0;M<8;M++)c.array[M]=.06+.05*Math.sin(x.current*2+M*1.5);c.needsUpdate=!0}}),t.jsxs("points",{ref:f,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[y,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),t.jsx("shaderMaterial",{uniforms:p,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function pt({liveData:f,paused:x}){const m=h.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),y=h.useCallback(n=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(n)},[]),g=h.useRef({intensity:1,pulse:.4,block:null});h.useEffect(()=>{const n=()=>{const i=f||{},M=parseFloat(String(i.volume||"").replace(/[^0-9.]/g,""))||0,r=parseFloat(String(i.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(M/500,.5)+Math.min(r/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const a=g.current;a.intensity=d,i.block&&i.block!=="—"&&i.block!==a.block?(a.block=i.block,a.pulse=1):a.pulse=Math.max(.3,(a.pulse||.3)*.94)};n();const e=setInterval(n,400);return()=>clearInterval(e)},[f]);const p=h.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),s=h.useMemo(()=>({alpha:!0,antialias:!m,powerPreference:"high-performance"}),[m]),l=h.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),c=h.useMemo(()=>[1,1.5],[]);return t.jsxs(K,{camera:p,gl:s,onCreated:({gl:n})=>n.setClearColor(0,0),style:l,dpr:c,frameloop:x?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(tt,{flowRef:g}),t.jsx(nt,{}),t.jsx(at,{liveData:f,onImpact:y,flowRef:g}),t.jsx(Y,{}),t.jsx(Z,{}),t.jsx(it,{}),t.jsx(Q,{liveData:f}),t.jsx(st,{})]}),!m&&t.jsxs(t.Fragment,{children:[t.jsx(L,{radius:12,depth:30,count:800,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(L,{radius:8,depth:15,count:400,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(L,{radius:20,depth:50,count:200,factor:1,saturation:.2,fade:!0,speed:.05}),t.jsx(ot,{}),t.jsx(lt,{})]}),t.jsx(J,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{pt as default};
