/*Code en JavaScript pour les modals*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.querySelector('.overlay');  

  const homemod = document.querySelector("#homemod");
  const home = document.querySelector("#home");
  const close = document.querySelector('.close-modal');

  const profilmod = document.querySelector("#profilmod");
  const profil = document.querySelector("#profil");
  const close2 = document.querySelector('.close-modal2');

  const skillsmod = document.querySelector("#hiddenskillsmod");
  const skills = document.querySelector("#skills");
  const close3 = document.querySelector('.close-modal3');

  const projectmod = document.querySelector("#projectmod");
  const project = document.querySelector("#project");
  const close4 = document.querySelector('.close-modal4');

  const contactmod = document.querySelector("#contactmod");
  const contact = document.querySelector("#contact");
  const close5 = document.querySelector('.close-modal5');


  overlay.addEventListener('click', function(){
    overlay.classList.add('hidden');
    profilmod.classList.add("hidden");
    homemod.classList.add("hidden");
    skillsmod.id = 'hiddenskillsmod';
    projectmod.classList.add("hidden");
    contactmod.classList.add("hidden");
  });




  home.addEventListener("click", function () {
    homemod.classList.remove("hidden");
    overlay.classList.remove('hidden');
  });
  close.addEventListener("click", function () {
    homemod.classList.add("hidden");
    overlay.classList.add('hidden');
  });


  
  
  profil.addEventListener("click", function () {
    profilmod.classList.remove("hidden");
    overlay.classList.remove('hidden');
  });
  close2.addEventListener("click", function () {
    profilmod.classList.add("hidden");
    overlay.classList.add('hidden');
  });




  skills.addEventListener("click", function () {
    skillsmod.id = 'skillsmod';
    overlay.classList.remove('hidden');
  });
  close3.addEventListener("click", function () {
    skillsmod.id = 'hiddenskillsmod';
    overlay.classList.add('hidden');
  });


  

  project.addEventListener("click", function () {
    projectmod.classList.remove("hidden");
    overlay.classList.remove('hidden');
  });
  close4.addEventListener("click", function () {
    projectmod.classList.add("hidden");
    overlay.classList.add('hidden');
  });



  contact.addEventListener("click", function () {
    contactmod.classList.remove("hidden");
    overlay.classList.remove('hidden');
  });
  close5.addEventListener("click", function () {
    contactmod.classList.add("hidden");
    overlay.classList.add('hidden');
  });
  
});
