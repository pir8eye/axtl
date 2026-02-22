const jsonPath = 'axtl-tags.json';

async function loadSpec(){
  const res = await fetch(jsonPath);
  if(!res.ok) throw new Error('Could not load spec');
  return res.json();
}

function el(tag, cls, text){ const e = document.createElement(tag); if(cls) e.className = cls; if(text!=null) e.textContent = text; return e }

function renderLayers(spec){
  const layers = [...new Set(spec.tags.map(t=>t.layer))].sort();
  const nav = document.getElementById('layers');
  nav.innerHTML = '';
  nav.appendChild(el('h3',null,'Layers'));
  const ul = el('ul');
  layers.forEach(l=>{
    const li = el('li',null,l);
    li.onclick = ()=>{ document.getElementById('search').value = l; doSearch(); };
    ul.appendChild(li);
  });
  nav.appendChild(ul);
}

function renderTag(t){
  const c = el('div','tag');
  c.appendChild(el('h2',null,`<${t.name}>`));
  c.appendChild(el('div','meta', `${t.layer} — ${t.purpose || ''}`));
  if(t.attributes && t.attributes.length){
    const a = el('div','attrs'); a.appendChild(el('strong',null,'Attributes:'));
    t.attributes.forEach(attr=> a.appendChild(el('span','pill', `${attr.name}: ${attr.type || 'string'}`)));
    c.appendChild(a);
  }
  if(t.children && t.children.length){
    const ch = el('div','children'); ch.appendChild(el('strong',null,'Child Elements:'));
    t.children.forEach(child=> ch.appendChild(el('span','pill', child)));
    c.appendChild(ch);
  }
  if(t.purpose) c.appendChild(el('div','purpose', t.purpose));
  return c;
}

function renderTags(spec, filter){
  const container = document.getElementById('tags');
  container.innerHTML = '';
  const tags = spec.tags.filter(t=>{
    if(!filter) return true;
    const q = filter.toLowerCase();
    return t.name.toLowerCase().includes(q) || (t.purpose||'').toLowerCase().includes(q) || (t.attributes||[]).some(a=>a.name.toLowerCase().includes(q));
  });
  if(tags.length===0) container.appendChild(el('div',null,'No tags match your query.'));
  tags.forEach(t=> container.appendChild(renderTag(t)));
}

function hookControls(spec){
  const input = document.getElementById('search');
  window.doSearch = ()=> renderTags(spec, input.value.trim());
  input.addEventListener('input', ()=> doSearch());

  document.getElementById('download-json').onclick = ()=>{
    const blob = new Blob([JSON.stringify(spec,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'axtl-tags.json'; a.click(); URL.revokeObjectURL(url);
  };

  document.getElementById('copy-json').onclick = async ()=>{
    try{ await navigator.clipboard.writeText(JSON.stringify(spec,null,2)); alert('JSON copied to clipboard'); }
    catch(e){ alert('Copy failed'); }
  };
}

(async ()=>{
  try{
    const spec = await loadSpec();
    renderLayers(spec);
    renderTags(spec);
    hookControls(spec);
  }catch(err){ document.getElementById('tags').textContent = 'Failed to load spec: '+err.message }
})();
