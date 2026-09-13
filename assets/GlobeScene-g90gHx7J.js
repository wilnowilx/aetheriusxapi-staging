import{r as f,j as t,C as J,S as q,O as K,u as S}from"./r3f-DkpgSMZU.js";import{q as R,r as H,p as C,F,e as U,s as $,h as _}from"./three-BuKzPtX4.js";const Q=({liveData:h})=>{const y=f.useRef(),v=f.useRef(0),b=f.useMemo(()=>{const r=h||{};return[{radius:3.6,tilt:.18,yOffset:.45,speed:.025,bandWidth:.42,color:"#ffffff",opacity:.9,fontSize:44,text:"THE MARKETPLACE   THAT LIVES   "},{radius:3.05,tilt:.32,yOffset:-.15,speed:-.035,bandWidth:.36,color:"#d946ef",opacity:.78,fontSize:34,text:"API INFRASTRUCTURE   FOR AI AGENTS   THAT PAY   "},{radius:2.55,tilt:.12,yOffset:-.55,speed:.04,bandWidth:.32,color:"#22d3ee",opacity:.68,fontSize:28,text:`${r.endpoints||"100+"} ENDPOINTS   ${r.freeEndpoints||"40"} FREE   ${r.latency||"—"}   `}]},[h]),x=f.useMemo(()=>b.map(r=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height);const n=`900 ${r.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`;a.font=n,a.textAlign="center",a.textBaseline="middle";const o=r.text,c=a.measureText(o).width,s=Math.ceil((e.width+c)/c),p=(e.width-c*s)/2+c/2;a.shadowColor=r.color,a.shadowBlur=48,a.fillStyle=r.color;for(let M=0;M<s;M++)a.fillText(o,p+M*c,e.height/2);a.shadowBlur=22;for(let M=0;M<s;M++)a.fillText(o,p+M*c,e.height/2);a.shadowBlur=0,a.fillStyle=r.color==="#ffffff"?"#ffffff":r.color;for(let M=0;M<s;M++)a.fillText(o,p+M*c,e.height/2);a.fillStyle="#ffffff",a.globalAlpha=.85;for(let M=0;M<s;M++)a.fillText(o,p+M*c,e.height/2);a.globalAlpha=1;const m=new R(e);return m.anisotropy=8,m.minFilter=$,m.magFilter=$,m}),[b]),g=f.useMemo(()=>b.map(r=>{const e=document.createElement("canvas");e.width=4096,e.height=160;const a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.font=`900 ${r.fontSize*1.35}px 'JetBrains Mono', 'Fira Code', monospace`,a.textAlign="center",a.textBaseline="middle";const n=r.text,o=a.measureText(n).width,c=Math.ceil((e.width+o)/o),s=(e.width-o*c)/2+o/2;a.shadowColor=r.color,a.shadowBlur=28,a.fillStyle=r.color,a.globalAlpha=.35;for(let m=0;m<c;m++)a.fillText(n,s+m*o,e.height/2);a.globalAlpha=1;const p=new R(e);return p.anisotropy=4,p}),[b]),[i,u]=f.useState(null),d=f.useRef(0);return S((r,e)=>{v.current+=e,d.current+=e,y.current&&b.forEach((a,n)=>{const o=y.current.children[n];if(o){i===n||(o.rotation.y+=e*a.speed);const s=o.children[0];if(s!=null&&s.material){const p=.88+.12*Math.sin(d.current*.7+n*1.2);s.material.opacity=(i===n?1:a.opacity)*p}}})}),t.jsx("group",{ref:y,children:b.map((r,e)=>t.jsxs("group",{position:[0,r.yOffset,0],rotation:[r.tilt,0,0],children:[t.jsxs("mesh",{onPointerOver:a=>{a.stopPropagation(),u(e),document.body.style.cursor="pointer"},onPointerOut:()=>{u(null),document.body.style.cursor="auto"},onClick:()=>{window.__aetherius_addImpact&&window.__aetherius_addImpact({position:new _(r.radius,r.yOffset,0),intensity:.8})},children:[t.jsx("cylinderGeometry",{args:[r.radius,r.radius,r.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:x[e],transparent:!0,opacity:r.opacity,side:F,depthWrite:!1,blending:C,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("cylinderGeometry",{args:[r.radius,r.radius,r.bandWidth,128,1,!0]}),t.jsx("meshBasicMaterial",{map:g[e],transparent:!0,opacity:.22,side:H,depthWrite:!1,blending:C,toneMapped:!1})]}),t.jsxs("mesh",{children:[t.jsx("torusGeometry",{args:[r.radius,r.bandWidth*.06,6,128]}),t.jsx("meshBasicMaterial",{color:r.color,transparent:!0,opacity:r.opacity*.12,depthWrite:!1})]})]},e))})};function Z(){const h=f.useMemo(()=>({time:{value:0},colorA:{value:new U(2282478)},colorB:{value:new U(11032055)},colorC:{value:new U(14239471)}}),[]);return S((y,v)=>{h.time.value+=v*.6}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[2.65,28,20]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:C})]})}function X(){const h=f.useMemo(()=>({time:{value:0}}),[]);return S((y,v)=>{h.time.value+=v*.4}),t.jsxs("mesh",{scale:.85,children:[t.jsx("sphereGeometry",{args:[2.2,32,32]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
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
        `,side:F,transparent:!0,depthWrite:!1,blending:C})]})}function Y({impactPoints:h}){const y=f.useRef(),v=f.useMemo(()=>({time:{value:0},impact0:{value:new _(0,0,0)},i0t:{value:0},impact1:{value:new _(0,0,0)},i1t:{value:0},impact2:{value:new _(0,0,0)},i2t:{value:0},impact3:{value:new _(0,0,0)},i3t:{value:0},impact4:{value:new _(0,0,0)},i4t:{value:0},impact5:{value:new _(0,0,0)},i5t:{value:0},impact6:{value:new _(0,0,0)},i6t:{value:0},impact7:{value:new _(0,0,0)},i7t:{value:0}}),[]);return S((b,x)=>{if(v.time.value+=x*.5,h)for(let g=0;g<8&&g<h.length;g++){const i=h[g];v[`impact${g}`].value.copy(i.position),v[`i${g}t`].value=i.intensity}}),t.jsxs("mesh",{ref:y,children:[t.jsx("sphereGeometry",{args:[2.2,36,24]}),t.jsx("shaderMaterial",{uniforms:v,vertexShader:`
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
            float ring = abs(dist - time * 0.5 * intensity);
            float ringPulse = exp(-ring * 0.8) * intensity;
            float prox = exp(-dist * 1.2) * intensity * 0.5;
            return (ringPulse*0.4 + prox) * intensity;
          }
          float polarGlow(vec3 pos) {
            return pow(abs(pos.y / 2.2), 2.5) * 0.6;
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
            float polar = polarGlow(vPos);
            baseCol += polar * vec3(0.25, 0.1, 0.4);
            // Impact color (white-blue flash)
            vec3 impactCol = mix(vec3(0.0, 0.322, 1.0), vec3(1.0, 1.0, 1.0), 0.6);
            vec3 col = mix(baseCol, impactCol, impacts * 0.7);
            col += vec3(0.10, 0.06, 0.015) * impacts;

            float alpha = (0.045 + polar * 0.025) * pulse * fade + impacts * 0.38;
            gl_FragColor = vec4(col, alpha);
          }
        `,wireframe:!0,transparent:!0,depthWrite:!0})]})}function tt({flowRef:h}){const y=f.useRef(),v=f.useRef(0),b=f.useMemo(()=>{const g=document.createElement("canvas");g.width=512,g.height=128;const i=g.getContext("2d");return i.clearRect(0,0,512,128),i.font="bold 72px monospace",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#0052FF",i.shadowColor="#0052FF",i.shadowBlur=30,i.fillText("BASE",256,64),i.shadowBlur=0,i.fillText("BASE",256,64),new R(g)},[]);S((g,i)=>{var d;v.current+=i;const u=(h==null?void 0:h.current)||{pulse:.3};if(u.pulse=Math.max(.25,(u.pulse||0)-i*1.6),y.current){y.current.rotation.y=v.current*.08,y.current.rotation.x=Math.sin(v.current*.12)*.08;const r=Math.sin(v.current*1.5),e=u.pulse,a=1+.04*r+.18*e;y.current.scale.set(a,a,a);const n=(d=y.current.children[0])==null?void 0:d.material;n&&(n.opacity=.7+.18*r+.18*e)}});const x=f.useMemo(()=>({time:{value:0},flow:{value:1},pulse:{value:0}}),[]);return S((g,i)=>{var u,d;x.time.value+=i*.5,x.flow.value=((u=h==null?void 0:h.current)==null?void 0:u.intensity)||1,x.pulse.value=((d=h==null?void 0:h.current)==null?void 0:d.pulse)||.3}),t.jsxs("group",{ref:y,scale:1.3,children:[t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.4,20,16]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.4;
              float fog = pow(dist, 1.5) * (1.0 - dist) * 2.0;
              float beat = 0.5 + 0.5*pulse;
              vec3 col = vec3(0.08,0.25,0.7);
              float alpha = fog * 0.04 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:H})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.1,16,12]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.1;
              float radial = pow(1.0 - dist, 2.5);
              float swirl = sin(vPos.x*4.0+time*0.3)*sin(vPos.y*3.0+time*0.2)*sin(vPos.z*2.5+time*0.25);
              float noise = 0.6 + 0.4*swirl;
              float beat = 0.4 + 0.6*pulse;
              vec3 col = mix(vec3(0.05,0.15,0.5), vec3(0.1,0.4,0.9), noise*0.3);
              float alpha = radial * 0.06 * noise * (0.6 + 0.4*flow) * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:F})]}),t.jsx("sprite",{scale:[2.2,.55,1],renderOrder:-1,children:t.jsx("spriteMaterial",{map:b,transparent:!0,blending:C,opacity:.85,depthWrite:!1,depthTest:!0})}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.38,32,24]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
            }`,transparent:!0,depthWrite:!1,blending:C,side:F})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.62,24,18]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float flow; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.62;
              float radial = pow(1.0 - dist, 2.4);
              float beat = 0.55 + 0.45*pulse;
              vec3 col = mix(vec3(0.06,0.42,0.92), vec3(0.5,0.22,0.88), dist*0.5);
              float alpha = radial * 0.28 * beat * (0.7+0.35*flow);
              alpha *= smoothstep(1.0, 0.4, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:F})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[.88,16,12]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 0.88;
              float radial = pow(1.0 - dist, 3.2);
              float beat = 0.5 + 0.5*pulse;
              vec3 col = mix(vec3(0.45,0.2,0.85), vec3(0.75,0.28,0.65), dist*0.4);
              float alpha = radial * 0.14 * beat;
              alpha *= smoothstep(1.0, 0.3, dist);
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:F})]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.45,20,16]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
            varying vec3 vPos; uniform float time; uniform float pulse;
            void main(){
              float dist = length(vPos) / 1.45;
              float radial = pow(1.0 - dist, 2.0) * pow(dist, 0.3);
              float beat = 0.4 + 0.6*pulse;
              float phase = sin(time*0.4 + 2.0)*0.5+0.5;
              vec3 col = mix(vec3(0.12,0.3,0.8), vec3(0.45,0.2,0.75), dist*0.5+phase*0.15);
              float alpha = radial * 0.07 * beat;
              gl_FragColor = vec4(col, alpha);
            }`,transparent:!0,depthWrite:!1,blending:C,side:F})]}),t.jsx(et,{gasUniforms:x})]})}function et({gasUniforms:h}){const g=f.useRef(),{positions:i,seeds:u}=f.useMemo(()=>{const e=new Float32Array(144),a=new Float32Array(192);for(let n=0;n<24;n++){const o=Math.floor(n/8),c=n%8/8*Math.PI*2,s=.55+n%3*.18,p=o*.3;e[n*3]=Math.cos(c)*s,e[n*3+1]=Math.sin(c)*s*.4,e[n*3+2]=p*Math.sin(c)*.3,a[n*4]=.15+Math.random()*.25,a[n*4+1]=s,a[n*4+2]=c,a[n*4+3]=0}for(let n=0;n<16;n++){const o=24+n,c=Math.random()*Math.PI*2,s=Math.random()*Math.PI,p=.4+Math.random()*.8;e[o*3]=p*Math.sin(s)*Math.cos(c),e[o*3+1]=p*Math.sin(s)*Math.sin(c),e[o*3+2]=p*Math.cos(s),a[o*4]=.02+Math.random()*.06,a[o*4+1]=p,a[o*4+2]=Math.random()*Math.PI*2,a[o*4+3]=1}for(let n=0;n<8;n++){const o=40+n,c=Math.random()*Math.PI*2,s=Math.random()*Math.PI,p=1+Math.random()*.3;e[o*3]=p*Math.sin(s)*Math.cos(c),e[o*3+1]=p*Math.sin(s)*Math.sin(c),e[o*3+2]=p*Math.cos(s),a[o*4]=.3+Math.random()*.5,a[o*4+1]=p,a[o*4+2]=Math.random()*Math.PI*2,a[o*4+3]=2}return{positions:e,seeds:a}},[]);return S((e,a)=>{if(!g.current)return;const n=g.current.geometry.getAttribute("position"),o=n.array,c=h.time.value;h.pulse.value;for(let s=0;s<24;s++){const p=u[s*4],m=u[s*4+1],M=u[s*4+2],P=Math.floor(s/8)*.4-.4,w=M+c*p,T=Math.cos(w)*m,j=Math.sin(w)*m*.35,A=Math.sin(w)*P*.2;o[s*3]=T,o[s*3+1]=j,o[s*3+2]=A}for(let s=0;s<16;s++){const p=24+s,m=u[p*4],M=u[p*4+2],z=Math.sin(c*m+M)*.15,P=Math.cos(c*m*.7+M*1.3)*.12,w=Math.sin(c*m*.5+M*.7)*.1;o[p*3]+=z*a,o[p*3+1]+=P*a,o[p*3+2]+=w*a;const T=Math.sqrt(o[p*3]**2+o[p*3+1]**2+o[p*3+2]**2);if(T>1.5||T<.2){const j=Math.random()*Math.PI*2,A=Math.random()*Math.PI,O=.4+Math.random()*.8;o[p*3]=O*Math.sin(A)*Math.cos(j),o[p*3+1]=O*Math.sin(A)*Math.sin(j),o[p*3+2]=O*Math.cos(A)}}n.needsUpdate=!0}),t.jsxs("points",{ref:g,renderOrder:5,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",count:48,array:i,itemSize:3}),t.jsx("bufferAttribute",{attach:"attributes-seeds",count:48,array:u,itemSize:4})]}),t.jsx("shaderMaterial",{uniforms:h,vertexShader:`
    attribute vec4 seeds;
    uniform float time;
    uniform float pulse;
    varying float vAlpha;
    varying float vDist;
    varying float vType;

    void main() {
      vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
      vDist = length(position);

      float type = seeds.w;
      vType = type;

      // Tamaño base por tipo
      float baseSize = 1.0;
      if (type < 0.5) baseSize = 2.0;       // orbital: pequeñas
      else if (type < 1.5) baseSize = 1.5;  // float: tiny
      else baseSize = 3.0;                   // pulse: más grandes

      // Pulse sync para estrellas
      float pulseGlow = 1.0;
      if (type > 1.5) {
        float sync = seeds.x;
        pulseGlow = 0.4 + 0.6 * pulse * sync;
      }

      vAlpha = pulseGlow;
      gl_PointSize = baseSize * (200.0 / -mvPos.z) * pulseGlow;
      gl_Position = projectionMatrix * mvPos;
    }
  `,fragmentShader:`
    varying float vAlpha;
    varying float vDist;
    varying float vType;

    void main() {
      // Forma circular suave
      vec2 uv = gl_PointCoord * 2.0 - 1.0;
      float d = length(uv);
      if (d > 1.0) discard;

      float softEdge = 1.0 - d * d;

      // Color por tipo
      vec3 col;
      float alpha;

      if (vType < 0.5) {
        // Orbital: cian→turquesa
        col = mix(vec3(0.0, 0.7, 0.9), vec3(0.2, 0.9, 0.7), vDist * 0.8);
        alpha = softEdge * 0.6 * vAlpha;
      } else if (vType < 1.5) {
        // Float: púrpura suave
        col = vec3(0.55, 0.3, 0.85);
        alpha = softEdge * 0.35 * vAlpha;
      } else {
        // Pulse star: blanco→cyan brillante
        col = mix(vec3(0.8, 0.95, 1.0), vec3(0.0, 0.8, 1.0), 0.5);
        alpha = softEdge * softEdge * 0.85 * vAlpha; // más brillante
      }

      gl_FragColor = vec4(col, alpha);
    }
  `,transparent:!0,depthWrite:!1,blending:C})]})}function at({liveData:h,onImpact:y,flowRef:v}){const x=f.useRef(0),g=f.useRef(),i=2.2,u=i*i,d=o=>{var M;const c=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),p=Math.max(.5,Math.min(1.8,((M=v==null?void 0:v.current)==null?void 0:M.intensity)||1)),m=(1.6+Math.random()*1)*(.9+.3*p);o[0]=Math.sin(s)*Math.cos(c)*m,o[1]=Math.sin(s)*Math.sin(c)*m,o[2]=Math.cos(s)*m},r=(o,c,s)=>{if(Math.random()<.42)o[s*3]=.08,o[s*3+1]=.85,o[s*3+2]=.55,c[s]=.055+Math.random()*.045;else{const p=Math.random();o[s*3]=.15*(1-p)+.78*p,o[s*3+1]=.45*(1-p)+.35*p,o[s*3+2]=1*(1-p)+.97*p,c[s]=.04+Math.random()*.04}},e=f.useMemo(()=>{const o=new Float32Array(156),c=new Float32Array(156),s=new Float32Array(156),p=new Float32Array(52),m=new Float32Array(52),M=new Float32Array(52),z=new Uint8Array(52);for(let P=0;P<52;P++){const w=Math.random()*.08,T=Math.random()*Math.PI*2,j=Math.acos(2*Math.random()-1);o[P*3]=w*Math.sin(j)*Math.cos(T),o[P*3+1]=w*Math.sin(j)*Math.sin(T),o[P*3+2]=w*Math.cos(j);const A=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1),I=1.6+Math.random()*1;c[P*3]=Math.sin(O)*Math.cos(A)*I,c[P*3+1]=Math.sin(O)*Math.sin(A)*I,c[P*3+2]=Math.cos(O)*I,r(s,p,P),m[P]=Math.random()*1.5,M[P]=1.8+Math.random()*.8}return{positions:o,velocities:c,colors:s,sizes:p,lifetimes:m,maxLifetimes:M,hit:z}},[]),a=f.useMemo(()=>({time:{value:0},flow:{value:1}}),[]),n=f.useRef(0);return S((o,c)=>{var B,G;x.current+=c,a.time.value=x.current;const s=Math.max(.5,Math.min(1.8,((B=v==null?void 0:v.current)==null?void 0:B.intensity)||1));a.flow.value=s;const p=((G=v==null?void 0:v.current)==null?void 0:G.pulse)>.95&&x.current-n.current>1.2;p&&(n.current=x.current);const{positions:m,velocities:M,colors:z,sizes:P,lifetimes:w,maxLifetimes:T,hit:j}=e,A=[0,0,0];let O=!1,I=p?8:0;for(let l=0;l<52;l++){w[l]+=c;const V=I>0&&w[l]>.15;if(w[l]>=T[l]||V){V&&I--;const W=Math.random()*.08,N=Math.random()*Math.PI*2,L=Math.acos(2*Math.random()-1);m[l*3]=W*Math.sin(L)*Math.cos(N),m[l*3+1]=W*Math.sin(L)*Math.sin(N),m[l*3+2]=W*Math.cos(L),d(A),M[l*3]=A[0],M[l*3+1]=A[1],M[l*3+2]=A[2],r(z,P,l),O=!0,w[l]=0,T[l]=1.8+Math.random()*.8,j[l]=0;continue}const D=Math.sqrt(m[l*3]*m[l*3]+m[l*3+1]*m[l*3+1]+m[l*3+2]*m[l*3+2]),E=D>1.6?(D-1.6)/.6:0;E>0&&(M[l*3]*=1-E*.08,M[l*3+1]*=1-E*.08,M[l*3+2]*=1-E*.08,P[l]=P[l]*(1+E*.8)),m[l*3]+=M[l*3]*c,m[l*3+1]+=M[l*3+1]*c,m[l*3+2]+=M[l*3+2]*c;const k=m[l*3]*m[l*3]+m[l*3+1]*m[l*3+1]+m[l*3+2]*m[l*3+2];if(k>=u)if(j[l])P[l]*=1.06;else{j[l]=1;const W=Math.sqrt(k),N=i/W;m[l*3]*=N,m[l*3+1]*=N,m[l*3+2]*=N,M[l*3]=0,M[l*3+1]=0,M[l*3+2]=0,y&&y({position:new _(m[l*3],m[l*3+1],m[l*3+2]),intensity:1}),w[l]=T[l]-.35}}g.current&&(g.current.geometry.attributes.position.needsUpdate=!0,O&&(g.current.geometry.attributes.aColor.needsUpdate=!0,g.current.geometry.attributes.aSize.needsUpdate=!0))}),t.jsxs("points",{ref:g,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[e.positions,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[e.colors,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[e.sizes,1]})]}),t.jsx("shaderMaterial",{uniforms:a,vertexShader:`
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
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = pow(1.0 - d * 2.0, 1.4);
            float core = 1.0 - smoothstep(0.0, 0.3, d);
            vec3 col = vColor + core * 0.6;
            gl_FragColor = vec4(col, glow * vAlpha);
          }
        `,transparent:!0,depthWrite:!1,blending:C})]})}function ot(){const{positions:y,colors:v,sizes:b}=f.useMemo(()=>{const g=new Float32Array(180),i=new Float32Array(180),u=new Float32Array(60);for(let d=0;d<60;d++){const r=Math.acos(-1+2*d/60),e=Math.sqrt(60*Math.PI)*r,a=2.35;g[d*3]=a*Math.cos(e)*Math.sin(r),g[d*3+1]=a*Math.sin(e)*Math.sin(r),g[d*3+2]=a*Math.cos(r);const n=d>=36;if(n)i[d*3]=.133,i[d*3+1]=.827,i[d*3+2]=.933;else{const o=new U().setHSL(.75+Math.random()*.1,.7,.6);i[d*3]=o.r,i[d*3+1]=o.g,i[d*3+2]=o.b}u[d]=n?.09:.055}return{positions:g,colors:i,sizes:u}},[]),x=f.useMemo(()=>({time:{value:0}}),[]);return S((g,i)=>{x.time.value+=i*1.5}),t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[y,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[v,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[b,1]})]}),t.jsx("shaderMaterial",{uniforms:x,vertexShader:`
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
        `,transparent:!0,depthWrite:!1,blending:C})]})}function st(){const h=f.useRef(),y=f.useMemo(()=>({time:{value:0}}),[]),v=f.useRef(0);S((i,u)=>{v.current+=u,y.time.value=v.current,h.current&&(h.current.rotation.y=v.current*.06)});const{positions:b,colors:x,sizes:g}=f.useMemo(()=>{const u=new Float32Array(150),d=new Float32Array(150),r=new Float32Array(50);for(let e=0;e<50;e++){const a=e/50*Math.PI*2,n=e%3,o=2.55+n*.22,c=.15*n;u[e*3]=o*Math.cos(a),u[e*3+1]=o*Math.sin(a)*Math.sin(c),u[e*3+2]=o*Math.sin(a)*Math.cos(c);const s=e/50;d[e*3]=.659*(1-s)+.133*s,d[e*3+1]=.333*(1-s)+.827*s,d[e*3+2]=.969*(1-s)+.933*s,r[e]=.015+Math.random()*.025}return{positions:u,colors:d,sizes:r}},[]);return t.jsx("group",{ref:h,children:t.jsxs("points",{children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[x,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[g,1]})]}),t.jsx("shaderMaterial",{uniforms:y,vertexShader:`
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
          `,transparent:!0,depthWrite:!1,blending:C})]})})}function it({onImpactsReady:h}){const y=f.useRef([]),v=f.useRef(Array.from({length:8},()=>({position:new _,intensity:0,active:!1,age:0})));return S((b,x)=>{for(;y.current.length>0&&v.current.some(i=>!i.active);){const i=y.current.shift(),u=v.current.find(d=>!d.active);u&&(u.position.copy(i.position),u.intensity=i.intensity,u.active=!0,u.age=0)}const g=1.5;v.current.forEach(i=>{i.active&&(i.age+=x,i.intensity=Math.max(0,1-i.age*g),i.intensity<=0&&(i.active=!1))}),h(v.current.filter(i=>i.active).map(i=>({position:i.position,intensity:i.intensity})))}),f.useEffect(()=>(window.__aetherius_addImpact=b=>{y.current.push(b)},()=>{delete window.__aetherius_addImpact}),[]),null}function rt(){const[h,y]=f.useState([]),v=f.useRef(""),b=f.useCallback(x=>{let g=x.length+":";for(let i=0;i<x.length;i++){const u=x[i];g+=u.position.x.toFixed(1)+","+u.position.y.toFixed(1)+","+u.position.z.toFixed(1)+","+u.intensity.toFixed(2)+";"}g!==v.current&&(v.current=g,y(x))},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Y,{impactPoints:h}),t.jsx(it,{onImpactsReady:b})]})}function nt(){const h=f.useRef(),y=f.useRef(0),{positions:v,colors:b,sizes:x}=f.useMemo(()=>{const u=new Float32Array(24),d=new Float32Array(24),r=new Float32Array(8);for(let e=0;e<8;e++){const a=e/8*Math.PI*2+Math.random()*.5,n=4+Math.random()*2;u[e*3]=n*Math.cos(a),u[e*3+1]=(Math.random()-.5)*3,u[e*3+2]=n*Math.sin(a);const o=Math.random();o<.4?(d[e*3]=.13,d[e*3+1]=.82,d[e*3+2]=.93):o<.7?(d[e*3]=.84,d[e*3+1]=.27,d[e*3+2]=.93):(d[e*3]=.83,d[e*3+1]=.66,d[e*3+2]=.32),r[e]=.08+Math.random()*.06}return{positions:u,colors:d,sizes:r}},[]),g=f.useMemo(()=>({time:{value:0}}),[]);return S((i,u)=>{var r,e,a;y.current+=u,g.time.value=y.current,h.current&&(h.current.rotation.y=y.current*.02);const d=(a=(e=(r=h.current)==null?void 0:r.geometry)==null?void 0:e.attributes)==null?void 0:a.aSize;if(d){for(let n=0;n<8;n++)d.array[n]=.06+.05*Math.sin(y.current*2+n*1.5);d.needsUpdate=!0}}),t.jsxs("points",{ref:h,children:[t.jsxs("bufferGeometry",{children:[t.jsx("bufferAttribute",{attach:"attributes-position",args:[v,3]}),t.jsx("bufferAttribute",{attach:"attributes-aColor",args:[b,3]}),t.jsx("bufferAttribute",{attach:"attributes-aSize",args:[x,1]})]}),t.jsx("shaderMaterial",{uniforms:g,vertexShader:"attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vAlpha; uniform float time; void main(){vColor=aColor; vAlpha=0.6+0.4*sin(time*1.2+position.x*2.0); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(500.0/-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor; varying float vAlpha; void main(){ float d=length(gl_PointCoord-vec2(0.5)); if(d>0.5)discard; float g=pow(1.0-d*2.0,1.5); gl_FragColor=vec4(vColor,g*vAlpha);}",transparent:!0,depthWrite:!1,blending:C})]})}function dt({liveData:h,paused:y}){const v=f.useMemo(()=>typeof window>"u"?!1:window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768,[]),b=f.useCallback(r=>{window.__aetherius_addImpact&&window.__aetherius_addImpact(r)},[]),x=f.useRef({intensity:1,pulse:.4,block:null});f.useEffect(()=>{const r=()=>{const a=h||{},n=parseFloat(String(a.volume||"").replace(/[^0-9.]/g,""))||0,o=parseFloat(String(a.gas||"").replace(/[^0-9.]/g,""))||0;let c=.9+Math.min(n/500,.5)+Math.min(o/50,.25)+Math.random()*.15;c=Math.max(.6,Math.min(1.8,c));const s=x.current;s.intensity=c,a.block&&a.block!=="—"&&a.block!==s.block?(s.block=a.block,s.pulse=1):s.pulse=Math.max(.3,(s.pulse||.3)*.94)};r();const e=setInterval(r,400);return()=>clearInterval(e)},[h]);const g=f.useMemo(()=>({position:[0,.3,10.5],fov:40}),[]),i=f.useMemo(()=>({alpha:!0,antialias:!v,powerPreference:"high-performance"}),[v]),u=f.useMemo(()=>({position:"absolute",inset:0,width:"100%",height:"100%",background:"transparent"}),[]),d=f.useMemo(()=>[1,1.5],[]);return t.jsxs(J,{camera:g,gl:i,onCreated:({gl:r})=>r.setClearColor(0,0),style:u,dpr:d,frameloop:y?"demand":"always",children:[t.jsx("ambientLight",{intensity:.05}),t.jsxs("group",{scale:1.3,children:[t.jsx(tt,{flowRef:x}),t.jsx(rt,{}),t.jsx(at,{liveData:h,onImpact:b,flowRef:x}),t.jsx(Z,{}),t.jsx(X,{}),t.jsx(ot,{}),t.jsx(Q,{liveData:h}),t.jsx(st,{})]}),!v&&t.jsxs(t.Fragment,{children:[t.jsx(q,{radius:12,depth:30,count:600,factor:3,saturation:.3,fade:!0,speed:.12}),t.jsx(q,{radius:8,depth:15,count:300,factor:1.5,saturation:.5,fade:!0,speed:.08}),t.jsx(nt,{})]}),t.jsx(K,{autoRotate:!0,autoRotateSpeed:1,enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,minPolarAngle:Math.PI*.25,maxPolarAngle:Math.PI*.75})]})}export{dt as default};
