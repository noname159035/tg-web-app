document.querySelectorAll(".btn_m_inf").forEach(function(element) {
    element.addEventListener('click', function() {
        window.location.href = "product_info.html";
    });
});

document.querySelector("#stash").addEventListener("click", function () {
    window.location.href = "basket.html";
});