// Datos provisionales: sustituir por los nombres reales del equipo.
const desarrolladores=[
 {nombre:'Desarrollador 1',rol:'Desarrollo frontend',lenguajes:'HTML, CSS y JavaScript',formacion:'Formación por completar',experiencia:'Experiencia por completar',proyectos:'Proyecto por completar'},
 {nombre:'Desarrollador 2',rol:'Desarrollo backend',lenguajes:'Java y SQL',formacion:'Formación por completar',experiencia:'Experiencia por completar',proyectos:'Proyecto por completar'},
 {nombre:'Desarrollador 3',rol:'Diseño de interfaces',lenguajes:'HTML, CSS y JavaScript',formacion:'Formación por completar',experiencia:'Experiencia por completar',proyectos:'Proyecto por completar'},
 {nombre:'Desarrollador 4',rol:'Desarrollo web',lenguajes:'HTML, CSS y JavaScript',formacion:'Formación por completar',experiencia:'Experiencia por completar',proyectos:'Proyecto por completar'}
];
// Mostrar las cuatro tarjetas en la página del equipo.
const equipo=document.querySelector('#tarjetas-equipo');
if(equipo){equipo.innerHTML=desarrolladores.map((d,i)=>`<article class="card"><div class="avatar">👨‍💻</div><h3>${d.nombre}</h3><p>${d.rol}</p><a class="btn" href="perfil${i+1}.html">Ver perfil</a></article>`).join('');}
// Completar el perfil correspondiente según la página abierta.
const perfil=document.querySelector('#perfil');
if(perfil){const i=Number(perfil.dataset.numero)-1,d=desarrolladores[i];if(d){perfil.innerHTML=`<div class="avatar">👨‍💻</div><div><span class="tag">${d.rol}</span><h1>${d.nombre}</h1><p>Presentación profesional pendiente de completar.</p><h2>Lenguajes</h2><p>${d.lenguajes}</p><h2>Formación</h2><p>${d.formacion}</p><h2>Experiencia laboral</h2><p>${d.experiencia}</p><h2>Proyectos</h2><p>${d.proyectos}</p><a class="btn" href="contacto.html">Contactar</a></div>`;}}
// Rellenar el selector de contacto con los cuatro desarrolladores.
const selector=document.querySelector('#desarrollador');
if(selector){desarrolladores.forEach((d,i)=>{const opt=document.createElement('option');opt.value=String(i+1);opt.textContent=d.nombre;selector.appendChild(opt);});const seleccionado=new URLSearchParams(location.search).get('dev');if(seleccionado&&[...selector.options].some(o=>o.value===seleccionado))selector.value=seleccionado;}
// El formulario es una demostración: NO envía correos todavía.
const form=document.querySelector('#form-contacto');
if(form){form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#mensaje').textContent='Formulario validado correctamente. El envío real todavía no está configurado.';});}
