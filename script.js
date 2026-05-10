‎const popup = document.getElementById("popup");
‎
‎function showPopup(message){
‎
‎  popup.innerText = message;
‎
‎  popup.classList.add("show");
‎
‎  setTimeout(() => {
‎    popup.classList.remove("show");
‎  },2000);
‎
‎}
‎
‎// ACTION POPUP
‎
‎const popupButtons =
‎document.querySelectorAll(".action-popup");
‎
‎popupButtons.forEach(button => {
‎
‎  button.addEventListener("click", () => {
‎
‎    showPopup(
‎      "Service disponible bientôt"
‎    );
‎
‎    if(navigator.vibrate){
‎      navigator.vibrate(40);
‎    }
‎
‎  });
‎
‎});
‎
‎// DARK MODE
‎
‎const themeBtn =
‎document.getElementById("themeBtn");
‎
‎themeBtn.addEventListener("click", () => {
‎
‎  document.body.classList.toggle(
‎    "light-mode"
‎  );
‎
‎  if(document.body.classList.contains(
‎    "light-mode"
‎  )){
‎
‎    themeBtn.innerHTML =
‎    '<i class="fa-solid fa-sun"></i>';
‎
‎  }else{
‎
‎    themeBtn.innerHTML =
‎    '<i class="fa-solid fa-moon"></i>';
‎
‎  }
‎
‎});
‎
‎// NAVIGATION
‎
‎const homeBtn =
‎document.getElementById("homeBtn");
‎
‎const giftBtn =
‎document.getElementById("giftBtn");
‎
‎const marketBtn =
‎document.getElementById("marketBtn");
‎
‎const profileBtn =
‎document.getElementById("profileBtn");
‎
‎const homeSection =
‎document.getElementById("homeSection");
‎
‎const giftSection =
‎document.getElementById("giftSection");
‎
‎const marketSection =
‎document.getElementById("marketSection");
‎
‎const profileSection =
‎document.getElementById("profileSection");
‎
‎const navButtons =
‎document.querySelectorAll(".nav-btn");
‎
‎function resetSections(){
‎
‎  homeSection.classList.add("hidden");
‎  giftSection.classList.add("hidden");
‎  marketSection.classList.add("hidden");
‎  profileSection.classList.add("hidden");
‎
‎}
‎
‎function resetNav(){
‎
‎  navButtons.forEach(btn => {
‎    btn.classList.remove("active");
‎  });
‎
‎}
‎
‎homeBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎  resetNav();
‎
‎  homeSection.classList.remove("hidden");
‎  homeBtn.classList.add("active");
‎
‎});
‎
‎giftBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎  resetNav();
‎
‎  giftSection.classList.remove("hidden");
‎  giftBtn.classList.add("active");
‎
‎});
‎
‎marketBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎  resetNav();
‎
‎  marketSection.classList.remove("hidden");
‎  marketBtn.classList.add("active");
‎
‎});
‎
‎profileBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎  resetNav();
‎
‎  profileSection.classList.remove("hidden");
‎  profileBtn.classList.add("active");
‎
‎});
‎
‎// ACCORDION
‎
‎const accordionBtns =
‎document.querySelectorAll(".accordion-btn");
‎
‎accordionBtns.forEach(btn => {
‎
‎  btn.addEventListener("click", () => {
‎
‎    const content =
‎    btn.nextElementSibling;
‎
‎    if(content.style.display === "flex"){
‎
‎      content.style.display = "none";
‎
‎    }else{
‎
‎      content.style.display = "flex";
‎
‎    }
‎
‎  });
‎
‎});
‎
‎// WHEEL
‎
‎const wheel =
‎document.getElementById("wheel");
‎
‎const spinBtn =
‎document.getElementById("spinBtn");
‎
‎let degree = 0;
‎
‎spinBtn.addEventListener("click", () => {
‎
‎  degree += 3600 + Math.floor(Math.random() * 360);
‎
‎  wheel.style.transform =
‎  `rotate(${degree}deg)`;
‎
‎  setTimeout(() => {
‎
‎    showPopup(
‎      "🎉 Bravo récompense BCC"
‎    );
‎
‎  },5000);
‎
‎});
‎
