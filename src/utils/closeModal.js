export const closeModal = (ref, close) => {
  document.addEventListener("click", (e) => {
    if (e.target === ref.current) {
      close(false);
      document.documentElement.classList.remove("overflow-hidden");
    }
  });
};
