class Modal {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Modal.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
    this.toggleElement = toggleElement;
    this.toggledata = this.toggleElement.dataset.modal;
    this.targetdata = this.toggleElement.dataset.target;

    this.toggleElement.addEventListener("click", () => this.select());
  }

  select() {
    this.modal = document.querySelector(`${this.targetdata}`);
    console.log(this.modal);
    this.modal.classList.toggle("show");
    // this.modal.setAttribute("style", "display: block");
    this.modal.style.display = "block";
    this.dismissdata = this.modal.dataset.dismiss;

    // this.closeButton = document.querySelectorAll(
    //   `.btn[data-dismiss="${this.dismissdata}"]`
    // );
    this.closeButton = document.querySelectorAll(".close");
    this.closeButton.forEach(item =>
      item.addEventListener("click", event => {
        this.modal.classList.toggle("show");
        this.modal.style.display = "none";
        event.stopPropagation();
        console.log(this.modal);
      })
    );
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

//   modalToggles.forEach(button => new Modal(button));
// });

const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);
modalToggles.forEach(button => new Modal(button));
