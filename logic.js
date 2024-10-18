

// Function to open the Google Maps search for the full domain name
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

// Function to format the domain name into a readable phrase
function formatDomainName(domain) {
    // Remove common domain suffixes
    const cleanedDomain = domain.replace(/\.(com|net|org|edu|gov|io|info|biz|co|me|us)$/i, '');
    // Split the cleaned domain name into words based on uppercase letters
    const words = cleanedDomain.split(/(?=[A-Z])/);
    return words.join(" "); // Join the words with a space
}

// Function to open the Keyword Planner
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

// Function to open the city population Google search
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

// Function to get the first word from a string based on capitalization
function getFirstWord(str) {
    const words = str.split(/(?=[A-Z])/);
    return words[0];
}

// Event listener for domain availability check
document.getElementById('checkDomainAvailability').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default form submit/refresh behavior
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(domainName)}`;
    window.open(url, '_blank');  // Open the URL in a new tab
});

function openAppraisal() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const keyword = getFirstWord(domainName);
    const url = `https://ca.godaddy.com/domain-value-appraisal/appraisal/${domainName}`;
    window.open(url, '_blank');
}

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

function openNamebio() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const keyword = getFirstWord(domainName);
    const url = `https://dotdb.com/search?keyword=${domainName}.com&position=any`;
    window.open(url, '_blank');
}

function whois() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://www.whoxy.com/${encodeURIComponent(domainName)}`;
    window.open(url, '_blank');  // Open the URL in a new tab
}

function arch() {
    const domainName = document.getElementById('domainName').value.trim();
    if (!domainName) {
        alert("Please enter a domain name.");
        return;
    }
    const url = `https://web.archive.org/web/20240000000000*/${domainName}`;
    window.open(url, '_blank');  // Open the URL in a new tab
}
