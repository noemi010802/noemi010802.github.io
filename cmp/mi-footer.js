class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML=/*hmtl*/
      "Copyright &copy; 2021 Noemi Morales Andrade.";
  }
}
custoElements.define("mi-footer", Mifooter);
