!function(){!function(){var e=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),t=document.querySelector("[data-menu]");document.querySelector("body");function n(){t.classList.toggle("is-open")}e.addEventListener("click",n),o.addEventListener("click",n)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}();
//# sourceMappingURL=index.9cba1871.js.map
