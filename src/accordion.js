const header = document.querySelectorAll(".header");
header.forEach(head => {
    head.addEventListener("click", () => {
        const content = head.nextElementSibling;
        document.querySelectorAll(".content").forEach((c) => {
          if (c !== content) {
            c.style.maxHeight = null;
          }
        });
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});