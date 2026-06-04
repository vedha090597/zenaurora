document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("enquiryModal");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("enquiryForm");
    const loading = document.getElementById("loading");

     // Function to show loading
     function showLoading() {
        loading.style.display = "block";
    }

    // Function to hide loading
    function hideLoading() {
        loading.style.display = "none";
    }

    // Function to open modal with loading effect
    function openModal() {
        loading.style.display = "block"; // Show loading
        setTimeout(() => {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent background scrolling
            loading.style.display = "none"; // Hide loading after opening
        }, 800); // Simulating loading delay
    }

    // Function to close modal with loading effect
    function closeModal() {
        // loading.style.display = "block"; 
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restore scrolling
            // loading.style.display = "none";
        }, 0); // Simulating loading delay
    }

    // Open modal on button click
    openFormBtn.addEventListener("click", openModal);

    // Close modal on close button click
    closeBtn.addEventListener("click", closeModal);

    // Close modal when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });


    // Handle Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // showLoading()
        if (!this.checkValidity()) {
            alert('Please fill out all required fields.');
        } else {
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                location: document.getElementById("location").value
            };
    
            // console.log("Form Submitted!", formData);
    
            // Construct Telegram message
            const telegramMessage = `📩 *New Enquiry*\n` +
            `---------------------------\n` +
            `👤 *Name:* ${formData.name}\n\n` +
            `📧 *Email:* ${formData.email}\n\n` +
            `📱 *Mobile:* ${formData.phone}\n\n` +
            `📌 *Location:* ${formData.location}\n\n`;

            
            // `✉ *Course:* ${course}\n\n`
// console.log(telegramMessage);
// console.log(event);
            // Telegram API URL
            const token = '7483395723:AAF-k2p0kMmjzOXLbbkA8JyOSsAnxMKQCrA'
            const zentoken = '8087874221:AAHpuw6BWUzI9oRDStedu4JZpLbQLCiUWDY'
            const chat_ID = 1198072586
            const zenchat_ID = 5594056661
            //const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_ID}&text=${telegramMessage}&parse_mode=Markdown`;
            const telegramAPI = `https://api.telegram.org/bot${zentoken}/sendMessage?chat_id=${zenchat_ID}&text=${telegramMessage}&parse_mode=Markdown`;

            // Send data to Telegram
            fetch(telegramAPI)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        form.reset();
                        alert('Form submitted successfully! We will contact you soon.');
                        console.log(data);
            
                        modal.style.display = "none";
                        setTimeout(() => {
                            // alert("Thank you for your enquiry!");
                            // hideLoading();
                        }, 1000); 
                        closeModal();
                        form.reset();
                        // document.getElementById('contactForm').reset();
                    } else {
                        alert('Failed to send message. Try again later.');
                    }
                })
                .catch(error => console.error('Error:', error));
    
            // alert("Thank you for your enquiry!");
    
            // Close modal after submission
            
    
            // Reset form fields


        }
        
    });
});