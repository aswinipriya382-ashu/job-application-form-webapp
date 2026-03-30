const form = document.getElementById("jobForm");
const message = document.getElementById("message");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let experience = document.getElementById("experience");
    let resume = document.getElementById("resume");
    let cover = document.getElementById("messageBox");

    let gender = document.querySelector('input[name="gender"]:checked');
    let skills = document.querySelectorAll('input[type="checkbox"]:checked');

    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    message.innerText = "";

    if (name.value.trim() === "") {
        document.getElementById("nameError").innerText = "Enter your name";
        isValid = false;
    }

    if (!email.value.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    if (phone.value.length !== 10 || isNaN(phone.value)) {
        document.getElementById("phoneError").innerText = "Enter valid phone";
        isValid = false;
    }

    if (!gender) {
        message.innerText = "Please select gender";
        message.style.color = "red";
        isValid = false;
    }

    if (skills.length === 0) {
        message.innerText = "Select at least one skill";
        message.style.color = "red";
        isValid = false;
    }

    if (experience.value === "") {
        document.getElementById("expError").innerText = "Select experience";
        isValid = false;
    }

    if (resume.files.length === 0) {
        document.getElementById("resumeError").innerText = "Upload resume";
        isValid = false;
    }

    if (!isValid) return;

    let skillList = Array.from(skills).map(s => s.value).join(", ");

    output.innerHTML = `
        <h4>Submitted Data:</h4>
        <p><b>Name:</b> ${name.value}</p>
        <p><b>Email:</b> ${email.value}</p>
        <p><b>Phone:</b> ${phone.value}</p>
        <p><b>Gender:</b> ${gender.value}</p>
        <p><b>Skills:</b> ${skillList}</p>
        <p><b>Experience:</b> ${experience.value}</p>
        <p><b>Resume:</b> ${resume.files[0].name}</p>
        <p><b>Cover Letter:</b> ${cover.value || "N/A"}</p>
    `;

    // Show output
    output.classList.remove("d-none");

    // Success message
    message.innerText = "Application submitted successfully!";
    message.style.color = "green";

    // Scroll to output smoothly
    output.scrollIntoView({ behavior: "smooth" });

    form.reset();
});