const data = JSON.parse(localStorage.getItem("user")) || null;

if (data !== null) {
    if (data.role === "hr" || data.role === "admin") {
        document.getElementById("content").style.display = "block";
    } else {
        window.location.href = "../404.html";
    }
} else {
    window.location.href = "../404.html";
}
