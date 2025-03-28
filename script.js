document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("markdown-input");
    const preview = document.getElementById("preview");
    const clearBtn = document.getElementById("clear-btn");

    // Update preview in real-time
    input.addEventListener("input", () => {
        preview.innerHTML = marked.parse(input.value);
    });

    // Clear button functionality
    clearBtn.addEventListener("click", () => {
        input.value = "";
        preview.innerHTML = "";
    });
});
//masterjii assignment