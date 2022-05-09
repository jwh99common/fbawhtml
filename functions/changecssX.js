export function changecssX () {
  alert ('changecss: entry');

  document.getElementById('header').style.fontSize='100px';
  document.getElementById('header').style.textAlign ="left";
  
  alert ('changecss: middle');
  
  document.getElementById('header1').style.fontSize='70px';
  document.getElementById('header1').style.textAlign ="right";
  
  alert ('changecss: exit');

}
