class MyInput extends HTMLDivElement { // (1)

   connectedCallback() {
      let elBlock = this;
      this.classList.toggle("inputDivTextarea");

      let el1 = document.createElement("div");
      el1.classList.toggle("afterDivTextarea");
      el1.innerHTML = this.getAttribute('username') || "Имя не указано"

      el1.onclick = function(event){
         elBlock.style.minHeight = "20px";
         if (elBlock.style.height === el1.scrollHeight+"px") {
            elBlock.style.height = `${ elBlock.scrollHeight }px`
         } else {
            elBlock.style.height = `${ elBlock.scrollHeight }px`;
            window.getComputedStyle(elBlock, null).getPropertyValue("height");
            elBlock.style.height = el1.scrollHeight;
         }
      };
      elBlock.addEventListener("transitionend", () => {
         if (elBlock.style.height !== el1.scrollHeight+"px") {
            elBlock.style.height = "auto"
         }
      });

      this.appendChild(el1);
   }
}

class MySpan extends HTMLDivElement { // (1)

   constructor(_username=null){
      super();
      if (_username)
         this.setAttribute('username', _username)
   }
   connectedCallback() {
      this.classList.toggle("spanInputDivTextarea");
      this.innerHTML = this.getAttribute('username') || "Имя не указано"
   }
}

customElements.define("my-input", MyInput, {extends: 'div'}); // (2)
customElements.define("my-span", MySpan, {extends: 'div'}); // (2)
