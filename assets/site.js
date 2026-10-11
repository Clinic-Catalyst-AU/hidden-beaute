document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  var b=document.querySelector('.burger'),u=document.querySelector('.nav ul');
  if(b&&u){b.addEventListener('click',function(){u.classList.toggle('open')})}
  document.querySelectorAll('.clist a').forEach(function(a){
    a.addEventListener('mouseenter',function(){
      document.querySelectorAll('.clist a').forEach(function(x){x.classList.remove('on')});
      document.querySelectorAll('.cpeek img').forEach(function(x){x.classList.remove('on')});
      a.classList.add('on');var t=document.getElementById(a.dataset.peek);if(t)t.classList.add('on');
    });
  });
  document.querySelectorAll('.copy').forEach(function(btn){
    btn.addEventListener('click',function(){
      var box=btn.closest('.email');var c=box.cloneNode(true);c.querySelectorAll('.copy,.meta').forEach(function(x){x.remove()});
      navigator.clipboard.writeText(c.innerText.trim()).then(function(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy'},1600)});
    });
  });
});
