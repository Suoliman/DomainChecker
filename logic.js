// Domain Management System JavaScript Code

// ===== HISTORY AND STORAGE FUNCTIONS =====

// Save domain information to localStorage
function saveInfo() {
    // Get all input values
    const domainName = document.getElementById('domainName').value.trim();
    const sv = document.getElementById('sv').value;
    const cpc = document.getElementById('cpc').value;
    const googleMapsPages = document.getElementById('google-maps-pages').value;
    const cityPopulation = document.getElementById('city-population').value;
    const godaddyAppraisal = document.getElementById('godaddy-appraisal').value;
    const dotdb = document.getElementById('dotdb').value;
    const NameBio = document.getElementById('NameBio').value;
    const whois = document.getElementById('whois').value;
    const archive = document.getElementById('archive').value;
    

    // Validate domain name
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }

    // Create data object
    const domainData = {
        domainName,
        sv,
        cpc,
        googleMapsPages,
        cityPopulation,
        godaddyAppraisal,
        dotdb,
        NameBio,
        whois,
        archive
    };

    // Get and update localStorage
    let history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    history.push(domainData);
    localStorage.setItem('domainHistory', JSON.stringify(history));
    
    displayHistory();
}

// Delete domain from history
function deleteDomain(id) {
    let history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    history = history.filter(item => item.id !== id);
    localStorage.setItem('domainHistory', JSON.stringify(history));
    displayHistory();
}

// Display saved domain history
function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    const history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    
    history.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                <strong>Domain:</strong> ${item.domainName} | 
                <strong>SV:</strong> ${item.sv} | 
                <strong>CPC:</strong> ${item.cpc} | 
                <strong>Google Maps Pages:</strong> ${item.googleMapsPages} | 
                <strong>City Population:</strong> ${item.cityPopulation} | 
                <strong>Godaddy Appraisal:</strong> ${item.godaddyAppraisal} |
                <strong>dotdb:</strong> ${item.dotdb} |
                <strong>NameBio:</strong> ${item.NameBio} |
                <strong>whois:</strong> ${item.whois} |
                <strong>archive:</strong> ${item.archive} 

                <button onclick="deleteDomain(${item.id})" class="delete-btn">❌</button>
            </span>
        `;
        historyList.appendChild(li);
    });
}


// ===== UTILITY FUNCTIONS =====

// Format domain name for display
function formatDomainName(domain) {
    const cleanedDomain = domain.replace(/\.(com|net|org|edu|gov|io|info|biz|co|me|us|ai|co.uk)$/i, '');
    const words = cleanedDomain.split(/(?=[A-Z])/);
    return words.join(" ");
}

// Extract first word from string
function getFirstWord(str) {
    const words = str.split(/(?=[A-Z])/);
    return words[0];
}

// ===== EXTERNAL SERVICE FUNCTIONS =====

// Open Google Maps search
function openGoogleMapsPages() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const formattedDomain = formatDomainName(domainName);
    const url = `https://www.google.com/search?sz=0&tbs=lf:1,lf_ui:14&tbm=lcl&q=${encodeURIComponent(formattedDomain)}`;
    window.open(url, '_blank');
}

// Open Google Keyword Planner
function openKeywordPlanner() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const keyword = getFirstWord(domainName);
    const url = `https://ads.google.com/aw/keywordplanner/ideas/new?keyword=${encodeURIComponent(keyword)}`;
    window.open(url, '_blank');
}

// Open city population search
function openCityPopulationSearch() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const keyword = getFirstWord(domainName);
    const url = `https://www.google.com/search?q=${encodeURIComponent(keyword)}+population`;
    window.open(url, '_blank');
}

// Open GoDaddy appraisal
function openAppraisal() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://ca.godaddy.com/domain-value-appraisal/appraisal/`;
    window.open(url, '_blank');
}

// Open NameBio search
function openNamebio() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const keyword = getFirstWord(domainName);
    const url = `https://namebio.com/?keyword=${encodeURIComponent(keyword)}`;
    window.open(url, '_blank');
}

// Open WHOIS lookup
function whois() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://www.whoxy.com/${encodeURIComponent(domainName)}`;
    window.open(url, '_blank');
}

// Open Web Archive
function arch() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://web.archive.org/web/20240000000000*/${domainName}`;
    window.open(url, '_blank');
}

// ===== EVENT LISTENERS =====

// Domain availability check
document.getElementById('checkDomainAvailability').addEventListener('click', function(event) {
    event.preventDefault();
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(domainName)}`;
    window.open(url, '_blank');
});



// Function to save domain information
function saveInfo() {
    const domainName = document.getElementById('domainName').value;
    const sv = document.getElementById('sv').value;
    const cpc = document.getElementById('cpc').value;
    const googleMapsPages = document.getElementById('google-maps-pages').value;
    const cityPopulation = document.getElementById('city-population').value;
    const godaddyAppraisal = document.getElementById('godaddy-appraisal').value;
    const dotdb = document.getElementById('dotdb').value;
    const NameBio = document.getElementById('NameBio').value;
    const whois = document.getElementById('whois').value;
    const archive = document.getElementById('archive').value;

    if (!domainName) {
        alert("Please enter a domain name");
        return;
    }

    const domainInfo = {
        id: Date.now(), // Unique identifier
        domainName,
        sv,
        cpc,
        googleMapsPages,
        cityPopulation,
        godaddyAppraisal,
        dotdb,
        NameBio,
        whois,
        archive
    };

    let history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    history.push(domainInfo);
    localStorage.setItem('domainHistory', JSON.stringify(history));
    
    displayHistory();
}

    

// Function to display the history
function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    const history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                <strong>Domain:</strong> ${item.domainName} | 
                <strong>SV:</strong> ${item.sv} | 
                <strong>CPC:</strong> ${item.cpc} | 
                <strong>Google Maps Pages:</strong> ${item.googleMapsPages} | 
                <strong>City Population:</strong> ${item.cityPopulation} | 
                <strong>Godaddy Appraisal:</strong> ${item.godaddyAppraisal}|
                <strong>dotdb:</strong> ${item.dotdb}|
                 <strong>NameBio:</strong> ${item.NameBio}|
                 <strong>whois:</strong> ${item.whois}|
                 <strong>archive:</strong> ${item.archive}|

                <button onclick="deleteDomain(${index})" class="delete-btn">❌</button>
            </span>
        `;
        historyList.appendChild(li);
    });
}

// Function to delete a domain
function deleteDomain(id) {
    let history = JSON.parse(localStorage.getItem('domainHistory')) || [];
    history = history.filter(item => item.id !== id); // Use 'id' for filtering
    localStorage.setItem('domainHistory', JSON.stringify(history));
    displayHistory();
}


// Initialize history display when page loads
window.onload = function() {
    displayHistory();
};


// Initialize history display on page load
window.onload = displayHistory;
