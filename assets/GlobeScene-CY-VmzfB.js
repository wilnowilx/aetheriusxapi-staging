import{r as u,j as t,C as K,S as L,O as J,u as A}from"./r3f-BFDIpzVt.js";import{q as B,r as H,p as w,F as R,e as N,s as q,h as z,D as Q}from"./three-DAA57BSS.js";const Y=({liveData:f})=>{const M=u.useRef(),h=u.useRef(0),b=u.useMemo(()=>{const i=f||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${i.endpoints||"100+"} ENDPOINTS   ${i.freeEndpoints||"40"} FREE   ${i.latency||"—"}   `}]},[f]),x=u.useMemo(()=>b.map(i=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height);const m=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=m,a.textAlign="center",a.textBaseline="middle";const n=i.text,d=a.measureText(n).width,s=Math.ceil((e.width+d)/d),y=(e.width-d*s)/2+d/2;a.shadowColor=i.color,a.shadowBlur=48,a.fillStyle=i.color;for(let o=0;o<s;o++)a.fillText(n,y+o*d,e.height/2);a.shadowBlur=22;for(let o=0;o<s;o++)a.fillText(n,y+o*d,e.height/2);a.shadowBlur=0,a.fillStyle=i.color==="#ffffff"?"#ffffff":i.color;for(let o=0;o<s;o++)a.fillText(n,y+o*d,e.height/2);a.fillStyle="#ffffff",a.globalAlpha=.85;for(let o=0;o<s;o++)a.fillText(n,y+o*d,e.height/2);a.globalAlpha=1;const g=new B(e);return g.anisotropy=8,g.minFilter=q,g.magFilter=q,g}),[b]),v=u.useMemo(()=>b.map(i=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.font=`900 ${i.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const m=i.text,n=a.measureText(m).width,d=Math.ceil((e.width+n)/n),s=(e.width-n*d)/2+n/2;a.shadowColor=i.color,a.shadowBlur=28,a.fillStyle=i.color,a.globalAlpha=.35;for(let g=0;g<d;g++)a.fillText(m,s+g*n,e.height/2);a.globalAlpha=1;const y=new B(e);return y.anisotropy=4,y}),[b]),[l,c]=u.useState(null),r=u.useRef(0);return A((i,e)=>{h.current+=e,r.current+=e,M.current&&b.forEach((a,m)=>{const n=M.current.children[m];if(n){l===m||(n.rotation.y+=e*a.speed);const s=n.children[0];if(s!=null&&s.material){const y=.88+.12*Math.sin(r.current*.7+m*1.2);s.material.opacity=(l===m?1:a.opacity)*y}}})}),t.jsx("group",{ref:M,children:b.map((i,e)=>t.jsxs("group",{position:[0,i.yOffset,0],rotation:[i.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),c(e),document.body.style.cursor="pointer"},onPointerOut:()=>{c(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new z(i.radius,i.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:x[e],transparent:!0,opacity:i.opacity,side:R,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[i.radius,i.radius,i.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:v[e],transparent:!0,opacity:.22,side:H,depthWrite:!1,blending:w,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[i.radius,i.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:i.color,transparent:!0,opacity:i.opacity*.12,depthWrite:!1})]})]},e))})};function Z(){const f=u.useMemo(()=>({time:{value:0},colorA:{value:new N(2282478)},colorB:{value:new N(11032055)},colorC:{value:new N(14239471)}}),[]);return A((M,h)=>{f.time.value+=h*.6}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function X(){const f=u.useMemo(()=>({time:{value:0}}),[]);return A((M,h)=>{f.time.value+=h*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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
        `,side:R,transparent:!0,depthWrite:!1,blending:w})]})}function tt({impactPoints:f}){const M=u.useRef(),h=u.useMemo(()=>({time:{value:0},impact0:{value:new z(0,0,0)},i0t:{value:0},impact1:{value:new z(0,0,0)},i1t:{value:0},impact2:{value:new z(0,0,0)},i2t:{value:0},impact3:{value:new z(0,0,0)},i3t:{value:0},impact4:{value:new z(0,0,0)},i4t:{value:0},impact5:{value:new z(0,0,0)},i5t:{value:0},impact6:{value:new z(0,0,0)},i6t:{value:0},impact7:{value:new z(0,0,0)},i7t:{value:0}}),[]);return A((b,x)=>{if(h.time.value+=x*.5,f)for(let v=0;v<8&&v<f.length;v++){const l=f[v];h[`impact${v}`].value.copy(l.position),h[`i${v}t`].value=l.intensity}}),t.jsxs("mesh",{ref:M,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
            float pulse = 0.5 + 0.5 * sin(time * 0.8 + vWorldPos.y * 3.0);
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

            // Wireframe base: CYAN pulse (the dominant read)
            vec3 cyanBase = vec3(0.0, 0.75, 1.0);
            vec3 purpleAccent = vec3(0.55, 0.25, 0.9);
            float cyanPulse = 0.6 + 0.4 * sin(time * 0.6 + vPos.x * 2.0);
            vec3 baseCol = mix(cyanBase, purpleAccent, 0.25 + 0.15 * sin(time * 0.25));
            baseCol *= (0.7 + 0.3 * cyanPulse);

            float polar = polarGlow(vPos);
            baseCol += polar * vec3(0.1, 0.05, 0.3);

            // Impact: hot cyan-white flash at collision
            vec3 impactCol = vec3(0.3, 1.0, 1.0); // bright cyan
            vec3 col = mix(baseCol, impactCol, impacts * 0.85);
            col += vec3(0.2, 0.4, 0.5) * impacts;

            // Sparkle
            col += vec3(0.2, 0.5, 0.7) * sparkle;

            float alpha = (0.06 + polar * 0.03 + cyanPulse * 0.02) * pulse * fade + impacts * 0.6 + sparkle * 0.12;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function et({flowRef:f}){const M=u.useRef(),h=u.useRef(0),b=u.useMemo(()=>{const v=document.createElement("canvas");v.width=512,v.height=128;const l=v.getContext("2d");return l.clearRect(0,0,512,128),l.font="bold 72px monospace",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#0052FF",l.shadowColor="#0052FF",l.shadowBlur=30,l.fillText("BASE",256,64),l.shadowBlur=0,l.fillText("BASE",256,64),new B(v)},[]);A((v,l)=>{var r;h.current+=l;const c=(f==null?void 0:f.current)||{pulse:.3};if(c.pulse=Math.max(.25,(c.pulse||0)-l*1.6),M.current){M.current.rotation.y=h.current*.08,M.current.rotation.x=Math.sin(h.current*.12)*.08;const i=Math.sin(h.current*1.5),e=c.pulse,a=1+.04*i+.18*e;M.current.scale.set(a,a,a);const m=(r=M.current.children[0])==null?void 0:r.material;m&&(m.opacity=.7+.18*i+.18*e)}});const x=u.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return A((v,l)=>{var c,r;x.time.value+=l*.5,x.flow.value=((c=f==null?void 0:f.current)==null?void 0:c.intensity)||1,x.pulse.value=((r=f==null?void 0:f.current)==null?void 0:r.pulse)||.3}),t.jsxs("group",{ref:M,scale:1.3,children:[t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.5,24,18]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse; uniform float flow;
            void main(){
              float dist = length(vPos) / 1.5;
              // Multi-layer volumetric fog: dense core → wispy edges
              float fog1 = pow(1.0 - dist, 2.0) * pow(dist, 0.4) * 1.5;
              float fog2 = pow(1.0 - dist, 0.8) * 0.4;
              float fog = fog1 + fog2;

              // Swirl turbulence
              float swirl = sin(vPos.x*5.0+time*0.4)*sin(vPos.y*4.0+time*0.3)*sin(vPos.z*3.5+time*0.35);
              float turbulence = 0.5 + 0.5 * swirl;

              float beat = 0.4 + 0.6 * pulse;
              vec3 col = mix(vec3(0.05,0.15,0.5), vec3(0.1,0.35,0.8), dist*0.5);
              col += vec3(0.25,0.08,0.45) * (1.0-dist) * 0.35;
              float alpha = fog * turbulence * 0.18 * beat * (0.5 + 0.5*flow);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:H})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.2,20,14]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.2;
              float radial = pow(1.0 - dist, 2.5);
              // Swirling gas tendrils
              float swirl = sin(vPos.x*6.0+time*0.5)*sin(vPos.y*5.0+time*0.4)*sin(vPos.z*4.0+time*0.45);
              float tendrils = 0.4 + 0.6 * swirl;
              float noise = tendrils * 0.7 + 0.3;
              float beat = 0.3 + 0.7 * pulse;

              vec3 col = mix(vec3(0.03,0.1,0.4), vec3(0.06,0.25,0.7), noise*0.5);
              col += vec3(0.2,0.06,0.35) * (1.0-dist) * 0.5;

              float alpha = radial * noise * 0.22 * beat * (0.4 + 0.6*flow);
              alpha *= smoothstep(1.0, 0.15, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:t.jsx("spriteMaterial",{map:b,transparent:!0,blending:w,opacity:.85,depthWrite:!1,depthTest:!0})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.06,0.42,0.92), vec3(0.5,0.22,0.88), dist*0.5);
              float alpha = radial * 0.28 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.45,0.2,0.85), vec3(0.75,0.28,0.65), dist*0.4);
              float alpha = radial * 0.14 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.12,0.3,0.8), vec3(0.45,0.2,0.75), dist*0.5+phase*0.15);
              float alpha = radial * 0.07 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:w,side:R})]}),t.jsx(at,{gasUniforms:x})]})}function at({gasUniforms:f}){const v=4.840000000000001,l=u.useRef(),c=u.useRef([]),r=u.useMemo(()=>{const a=new Float32Array(216),m=new Float32Array(216),n=new Float32Array(360),d=new Float32Array(216);for(let s=0;s<72;s++){const y=s>=48;n[s*5]=1.5+Math.random()*2,n[s*5+1]=1+Math.random()*2.5,n[s*5+2]=Math.random()*3,n[s*5+3]=y?1:0,n[s*5+4]=1;const g=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),j=n[s*5];if(m[s*3]=Math.sin(o)*Math.cos(g)*j,m[s*3+1]=Math.sin(o)*Math.sin(g)*j,m[s*3+2]=Math.cos(o)*j,a[s*3]=(Math.random()-.5)*.04,a[s*3+1]=(Math.random()-.5)*.04,a[s*3+2]=(Math.random()-.5)*.04,y){const P=Math.random();d[s*3]=.6+P*.3,d[s*3+1]=.15+P*.2,d[s*3+2]=.85+P*.15}else{const P=Math.random();d[s*3]=.1+P*.9,d[s*3+1]=.6+P*.4,d[s*3+2]=.8+P*.2}}return{positions:a,velocities:m,seeds:n,colors:d}},[]);return A((a,m)=>{if(!l.current)return;const{positions:n,velocities:d,seeds:s,colors:y}=r;f.time.value,f.pulse.value;const g=[];for(let o=0;o<72;o++){const j=s[o*5+3]>.5;s[o*5+2]+=m;const P=s[o*5+2],S=s[o*5+1];if(P>=S){const _=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1),T=1.5+Math.random()*2;d[o*3]=Math.sin(C)*Math.cos(_)*T,d[o*3+1]=Math.sin(C)*Math.sin(_)*T,d[o*3+2]=Math.cos(C)*T,n[o*3]=(Math.random()-.5)*.04,n[o*3+1]=(Math.random()-.5)*.04,n[o*3+2]=(Math.random()-.5)*.04,s[o*5]=T,s[o*5+2]=0,s[o*5+4]=1;continue}if(s[o*5+4]<.5)continue;n[o*3]+=d[o*3]*m,n[o*3+1]+=d[o*3+1]*m,n[o*3+2]+=d[o*3+2]*m;const F=j?.97:.992;d[o*3]*=F,d[o*3+1]*=F,d[o*3+2]*=F;const O=n[o*3]**2+n[o*3+1]**2+n[o*3+2]**2;if(O>=v&&s[o*5+4]>.5){const C=2.2/Math.sqrt(O);n[o*3]*=C,n[o*3+1]*=C,n[o*3+2]*=C,g.push({x:n[o*3],y:n[o*3+1],z:n[o*3+2],intensity:j?.6:1}),j?(d[o*3]*=-.3,d[o*3+1]*=-.3,d[o*3+2]*=-.3,s[o*5+2]=s[o*5+1]-.2):(s[o*5+4]=0,s[o*5+2]=s[o*5+1]-.1)}}c.current=g,l.current.geometry.attributes.position.needsUpdate=!0}),t.jsxs("points",{ref:l,renderOrder:10,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[r.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-seeds",args:[r.seeds,5]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[r.colors,3]})]}),t.jsx("shaderMaterial",{uniforms:f,vertexShader:`
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

      // Size: sparks small, trails very thin
      float baseSize = type < 0.5 ? 2.0 : 0.8;
      // Distance-based scaling
      float dist = length(position);
      float perspScale = 200.0 / (-mvPos.z);

      vAlpha = birth * death * alive_f * (0.7 + 0.3 * pulse);
      gl_PointSize = baseSize * perspScale * (1.0 - lifeRatio * 0.4);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vType;
    varying float vAge;

    void main() {
      vec2 uv = gl_PointCoord * 2.0 - 1.0;

      // PURE 4-POINTED STAR: cross shape, thin and sharp
      float ax = abs(uv.x);
      float ay = abs(uv.y);
      // Star = cross pattern (thin arms extending from center)
      float star = min(ax, ay);
      float arm = max(ax, ay);
      // Thin cross: arms are narrow, center is tight
      float d = star * 0.8 + arm * 0.15;

      if (d > 1.0) discard;

      // Sharp edges: steep falloff, minimal diffusion
      float sharp = pow(1.0 - d, 2.0);
      float core = pow(1.0 - d, 8.0); // tiny hot center

      // White-hot center → colored arms
      vec3 hotCore = vec3(1.0, 1.0, 1.0);
      vec3 col = mix(vColor, hotCore, core * 0.8);

      // Minimal glow — keep it sharp
      float glow = exp(-d * 5.0) * 0.15;

      gl_FragColor = vec4(col, (sharp * 0.9 + glow) * vAlpha);
    }
  `,transparent:!0,depthWrite:!1,blending:w})]})}function ot(){const h=u.useRef(),b=u.useRef([]),x=u.useRef(0),v=u.useMemo(()=>{const c=new Float32Array(600),r=new Float32Array(600),i=new Float32Array(200);for(let e=0;e<200;e++){const a=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),n=3+Math.random()*12;c[e*3]=n*Math.sin(m)*Math.cos(a),c[e*3+1]=n*Math.sin(m)*Math.sin(a),c[e*3+2]=n*Math.cos(m);const d=Math.random();d<.5?(r[e*3]=.3,r[e*3+1]=.15,r[e*3+2]=.5):d<.8?(r[e*3]=.1,r[e*3+1]=.4,r[e*3+2]=.5):(r[e*3]=.5,r[e*3+1]=.5,r[e*3+2]=.55),i[e]=.02+Math.random()*.03}return{positions:c,colors:r,sizes:i}},[]),l=u.useMemo(()=>Array.from({length:8},()=>{const c=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),i=5+Math.random()*8,e=Math.random();let a;return e<.3?a=[.15,.08,.4]:e<.6?a=[.05,.2,.45]:e<.8?a=[.08,.3,.35]:a=[.2,.05,.3],{position:[i*Math.sin(r)*Math.cos(c),i*Math.sin(r)*Math.sin(c),i*Math.cos(r)],scale:1.5+Math.random()*2.5,color:a,rotSpeed:(Math.random()-.5)*.02,bobSpeed:.1+Math.random()*.2,bobAmp:.2+Math.random()*.5,phase:Math.random()*Math.PI*2}}),[]);return A((c,r)=>{x.current+=r,h.current&&(h.current.rotation.y=x.current*.008),b.current.forEach((i,e)=>{if(!i)return;const a=l[e],m=x.current;i.position.x=a.position[0]+Math.sin(m*a.rotSpeed+a.phase)*a.bobAmp,i.position.y=a.position[1]+Math.cos(m*a.bobSpeed+a.phase)*a.bobAmp*.6,i.position.z=a.position[2]+Math.sin(m*a.rotSpeed*.7+a.phase*1.3)*a.bobAmp*.4,i.rotation.y=m*a.rotSpeed*.5,i.rotation.x=Math.sin(m*.1)*.1})}),t.jsxs("group",{ref:h,children:[t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[v.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v.sizes,1]})]}),t.jsx("shaderMaterial",{vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; void main(){vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(300.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,2.0); gl_FragColor=vec4(vColor,g*0.35);}",transparent:!0,depthWrite:!1,blending:w})]}),l.map((c,r)=>t.jsxs("mesh",{ref:i=>b.current[r]=i,position:c.position,children:[t.jsx("planeGeometry",{args:[c.scale,c.scale]}),t.jsx("shaderMaterial",{uniforms:{color:{value:new N(c.color[0],c.color[1],c.color[2])}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                // Billboard: face camera
                vec4 mvPos = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
                mvPos.xy += (uv - 0.5) * vec2(${c.scale.toFixed(1)});
                gl_Position = projectionMatrix * mvPos;
              }
            `,fragmentShader:`
              uniform vec3 color;
              varying vec2 vUv;
              void main() {
                vec2 center = vUv - 0.5;
                float dist = length(center);
                // Soft radial nebula cloud
                float alpha = pow(max(0.0, 1.0 - dist * 2.0), 2.5) * 0.12;
                // Turbulence: slight irregularity
                float turb = sin(vUv.x * 8.0) * sin(vUv.y * 6.0) * 0.3 + 0.7;
                alpha *= turb;
                if (alpha < 0.005) discard;
                gl_FragColor = vec4(color, alpha);
              }
            `,transparent:!0,depthWrite:!1,blending:w,side:Q})]},r))]})}function st({liveData:f,onImpact:M,flowRef:h}){const x=u.useRef(0),v=u.useRef(),l=2.2,c=l*l,r=n=>{var o;const d=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),y=Math.max(.5,Math.min(1.8,((o=h==null?void 0:h.current)==null?void 0:o.intensity)||1)),g=(1.6+Math.random()*1)*(.9+.3*y);n[0]=Math.sin(s)*Math.cos(d)*g,n[1]=Math.sin(s)*Math.sin(d)*g,n[2]=Math.cos(s)*g},i=(n,d,s)=>{if(Math.random()<.42)n[s*3]=.08,n[s*3+1]=.85,n[s*3+2]=.55,d[s]=.055+Math.random()*.045;else{const y=Math.random();n[s*3]=.15*(1-y)+.78*y,n[s*3+1]=.45*(1-y)+.35*y,n[s*3+2]=1*(1-y)+.97*y,d[s]=.04+Math.random()*.04}},e=u.useMemo(()=>{const n=new Float32Array(156),d=new Float32Array(156),s=new Float32Array(156),y=new Float32Array(52),g=new Float32Array(52),o=new Float32Array(52),j=new Uint8Array(52);for(let P=0;P<52;P++){const S=Math.random()*.08,F=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);n[P*3]=S*Math.sin(O)*Math.cos(F),n[P*3+1]=S*Math.sin(O)*Math.sin(F),n[P*3+2]=S*Math.cos(O);const _=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1),T=1.6+Math.random()*1;d[P*3]=Math.sin(C)*Math.cos(_)*T,d[P*3+1]=Math.sin(C)*Math.sin(_)*T,d[P*3+2]=Math.cos(C)*T,i(s,y,P),g[P]=Math.random()*1.5,o[P]=1.8+Math.random()*.8}return{positions:n,velocities:d,colors:s,sizes:y,lifetimes:g,maxLifetimes:o,hit:j}},[]),a=u.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),m=u.useRef(0);return A((n,d)=>{var k,G;x.current+=d,a.time.value=x.current;const s=Math.max(.5,Math.min(1.8,((k=h==null?void 0:h.current)==null?void 0:k.intensity)||1));a.flow.value=s;const y=((G=h==null?void 0:h.current)==null?void 0:G.pulse)>.95&&x.current-m.current>1.2;y&&(m.current=x.current);const{positions:g,velocities:o,colors:j,sizes:P,lifetimes:S,maxLifetimes:F,hit:O}=e,_=[0,0,0];let C=!1,T=y?8:0;for(let p=0;p<52;p++){S[p]+=d;const V=T>0&&S[p]>.15;if(S[p]>=F[p]||V){V&&T--;const E=Math.random()*.08,W=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1);g[p*3]=E*Math.sin(U)*Math.cos(W),g[p*3+1]=E*Math.sin(U)*Math.sin(W),g[p*3+2]=E*Math.cos(U),r(_),o[p*3]=_[0],o[p*3+1]=_[1],o[p*3+2]=_[2],i(j,P,p),C=!0,S[p]=0,F[p]=1.8+Math.random()*.8,O[p]=0;continue}const D=Math.sqrt(g[p*3]*g[p*3]+g[p*3+1]*g[p*3+1]+g[p*3+2]*g[p*3+2]),I=D>1.6?(D-1.6)/.6:0;I>0&&(o[p*3]*=1-I*.08,o[p*3+1]*=1-I*.08,o[p*3+2]*=1-I*.08,P[p]=P[p]*(1+I*.8)),g[p*3]+=o[p*3]*d,g[p*3+1]+=o[p*3+1]*d,g[p*3+2]+=o[p*3+2]*d;const $=g[p*3]*g[p*3]+g[p*3+1]*g[p*3+1]+g[p*3+2]*g[p*3+2];if($>=c)if(O[p])P[p]*=1.06;else{O[p]=1;const E=Math.sqrt($),W=l/E;g[p*3]*=W,g[p*3+1]*=W,g[p*3+2]*=W,o[p*3]=0,o[p*3+1]=0,o[p*3+2]=0,M&&M({position:new z(g[p*3],g[p*3+1],g[p*3+2]),intensity:1}),S[p]=F[p]-.35}}v.current&&(v.current.geometry.attributes.position.needsUpdate=!0,C&&(v.current.geometry.attributes.aColor.needsUpdate=!0,v.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:v,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:a,vertexShader:`
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
            // Thin 4-pointed star
            float ax = abs(uv.x);
            float ay = abs(uv.y);
            float star = min(ax, ay);
            float arm = max(ax, ay);
            float d = star * 0.8 + arm * 0.15;
            if (d > 1.0) discard;
            float sharp = pow(1.0 - d, 2.0);
            float core = pow(1.0 - d, 8.0);
            vec3 hotCore = vec3(1.0, 1.0, 1.0);
            vec3 col = mix(vColor, hotCore, core * 0.6);
            float glow = exp(-d * 5.0) * 0.1;
            gl_FragColor = vec4(col, (sharp * 0.85 + glow) * vAlpha);
          }
        `,transparent:!0,depthWrite:!1,blending:w})]})}function it(){const{positions:M,colors:h,sizes:b}=u.useMemo(()=>{const v=new Float32Array(180),l=new Float32Array(180),c=new Float32Array(60);for(let r=0;r<60;r++){const i=Math.acos(-1+2*r/60),e=Math.sqrt(60*Math.PI)*i,a=2.35;v[r*3]=a*Math.cos(e)*Math.sin(i),v[r*3+1]=a*Math.sin(e)*Math.sin(i),v[r*3+2]=a*Math.cos(i);const m=r>=36;if(m)l[r*3]=.133,l[r*3+1]=.827,l[r*3+2]=.933;else{const n=new N().setHSL(.75+Math.random()*.1,.7,.6);l[r*3]=n.r,l[r*3+1]=n.g,l[r*3+2]=n.b}c[r]=m?.09:.055}return{positions:v,colors:l,sizes:c}},[]),x=u.useMemo(()=>({time:{value:0}}),[]);return A((v,l)=>{x.time.value+=l*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[M,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:w})]})}function rt(){const f=u.useRef(),M=u.useMemo(()=>({time:{value:0}}),[]),h=u.useRef(0);A((l,c)=>{h.current+=c,M.time.value=h.current,f.current&&(f.current.rotation.y=h.current*.06)});const{positions:b,colors:x,sizes:v}=u.useMemo(()=>{const c=new Float32Array(150),r=new Float32Array(150),i=new Float32Array(50);for(let e=0;e<50;e++){const a=e/50*Math.PI*2,m=e%3,n=2.55+m*.22,d=.15*m;c[e*3]=n*Math.cos(a),c[e*3+1]=n*Math.sin(a)*Math.sin(d),c[e*3+2]=n*Math.sin(a)*Math.cos(d);const s=e/50;r[e*3]=.659*(1-s)+.133*s,r[e*3+1]=.333*(1-s)+.827*s,r[e*3+2]=.969*(1-s)+.933*s,i[e]=.015+Math.random()*.025}return{positions:c,colors:r,sizes:i}},[]);return t.jsx("group",{ref:f,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[v,1]})]}),t.jsx("shaderMaterial",{uniforms:M,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:w})]})})}function nt({onImpactsReady:f}){const M=u.useRef([]),h=u.useRef(Array.from({length:8},()=>({position:new z,intensity:0,active:!1,age:0})));return A((b,x)=>{for(;M.current.length>0&&h.current.some(l=>!l.active);){const l=M.current.shift(),c=h.current.find(r=>!r.active);c&&(c.position.copy(l.position),c.intensity=l.intensity,c.active=!0,c.age=0)}const v=1.5;h.current.forEach(l=>{l.active&&(l.age+=x,l.intensity=Math.max(0,1-l.age*v),l.intensity<=0&&(l.active=!1))}),f(h.current.filter(l=>l.active).map(l=>({position:l.position,intensity:l.intensity})))}),u.useEffect(()=>(window.__aetherius_addImpact=b=>{M.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function lt(){const[f,M]=u.useState([]),h=u.useRef(""),b=u.useCallback(x=>{let v=x.length+":";for(let l=0;l<x.length;l++){const c=x[l];v+=c.position.x.toFixed(1)+","+c.position.y.toFixed(1)+","+c.position.z.toFixed(1)+","+c.intensity.toFixed(2)+";"}v!==h.current&&(h.current=v,M(x))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(tt,{impactPoints:f}),t.jsx(nt,{onImpactsReady:b})]})}function ct(){const f=u.useRef(),M=u.useRef(0),{positions:h,colors:b,sizes:x}=u.useMemo(()=>{const c=new Float32Array(24),r=new Float32Array(24),i=new Float32Array(8);for(let e=0;e<8;e++){const a=e/8*Math.PI*2+Math.random()*.5,m=4+Math.random()*2;c[e*3]=m*Math.cos(a),c[e*3+1]=(Math.random()-.5)*3,c[e*3+2]=m*Math.sin(a);const n=Math.random();n<.4?(r[e*3]=.13,r[e*3+1]=.82,r[e*3+2]=.93):n<.7?(r[e*3]=.84,r[e*3+1]=.27,r[e*3+2]=.93):(r[e*3]=.83,r[e*3+1]=.66,r[e*3+2]=.32),i[e]=.08+Math.random()*.06}return{positions:c,colors:r,sizes:i}},[]),v=u.useMemo(()=>({time:{value:0}}),[]);return A((l,c)=>{var i,e,a;M.current+=c,v.time.value=M.current,f.current&&(f.current.rotation.y=M.current*.02);const r=(a=(e=(i=f.current)==null?void 0:i.geometry)==null?void 0:e.attributes)==null?void 0:a.aSize;if(r){for(let m=0;m<8;m++)r.array[m]=.06+.05*Math.sin(M.current*2+m*1.5);r.needsUpdate=!0}}),t.jsxs("points",{ref:f,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[h,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),t.jsx("shaderMaterial",{uniforms:v,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:w})]})}function ut({liveData:f,paused:M}){const h=u.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=u.useCallback(i=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(i)},[]),x=u.useRef({intensity:1,pulse:.4,block:null});u.useEffect(()=>{const i=()=>{const a=f||{},m=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,n=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let d=.9+Math.min(m/500,.5)+Math.min(n/50,.25)+Math.random()*.15;d=Math.max(.6,Math.min(1.8,d));const s=x.current;s.intensity=d,a.block&&a.block!=="—"&&a.block!==s.block?(s.block=a.block,s.pulse=1):s.pulse=Math.max(.3,(s.pulse||.3)*.94)};i();const e=setInterval(i,400);return()=>clearInterval(e)},[f]);const v=u.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),l=u.useMemo(()=>({alpha:!0,antialias:!h,powerPreference:"high-performance"}),[h]),c=u.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),r=u.useMemo(()=>[1,1.5],[]);return t.jsxs(K,{camera:v,gl:l,onCreated:({gl:i})=>i.setClearColor(0,0),style:c,dpr:r,frameloop:M?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(et,{flowRef:x}),t.jsx(lt,{}),t.jsx(st,{liveData:f,onImpact:b,flowRef:x}),t.jsx(Z,{}),t.jsx(X,{}),t.jsx(it,{}),t.jsx(Y,{liveData:f}),t.jsx(rt,{})]}),!h&&t.jsxs(t.Fragment,{children:[t.jsx(L,{radius:12,depth:30,count:800,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(L,{radius:8,depth:15,count:400,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(L,{radius:20,depth:50,count:200,factor:1,saturation:.2,fade:!0,speed:.05}),t.jsx(ot,{}),t.jsx(ct,{})]}),t.jsx(J,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{ut as default};
