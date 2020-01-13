const openModal = () => {
    let createModalTag = document.createElement("div")

    createModalTag.setAttribute("class", "openModal");
    createModalTag.innerHTML = `
        <div class="openModal-content">
            <button type="button" class="close">&times;</button>

            <div class="openModal-body">
                <h3>Hello!</h3>
                <p>How are you?</p>            
            </div>
        </div>
    `;
    document.body.appendChild(createModalTag);

    const closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.addEventListener("click", () => document.body.removeChild(createModalTag));
}

document.getElementById("openModal").addEventListener("click", openModal);
