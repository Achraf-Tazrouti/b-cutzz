const titles = document.querySelectorAll(".footer-title");

titles.forEach(title => {
    title.addEventListener("click",()=>{
        console.log(title)
        const header = title.parentElement;
        console.log(header)
        document.querySelectorAll(".footer-column").forEach(column=>{
            if (column !== header) {
                column.classList.remove("active")
            }
        });
        header.classList.toggle("active")
    })
});