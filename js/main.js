document.addEventListener('DOMContentLoaded', function() {
    // Download button action
    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', function() {
        // Code to handle download action
        console.log('Download button clicked');
        // You can redirect to a download link or perform any action you wish
        // window.location.href = 'your_download_link_here';
    });

    // LinkedIn and GitHub buttons for team members
    const linkedinButtons = document.querySelectorAll('.linkedin-button');
    const githubButtons = document.querySelectorAll('.github-button');
  
    // Event listener for LinkedIn buttons
    linkedinButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
  
            // Code to handle LinkedIn action
            console.log('LinkedIn button clicked');
            // Redirect to the respective LinkedIn profile
            window.location.href = button.getAttribute('href');
        });
    });
  
    // Event listener for GitHub buttons
    githubButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
  
            // Code to handle GitHub action
            console.log('GitHub button clicked');
            // Redirect to the respective GitHub profile
            window.location.href = button.getAttribute('href');
        });
    });

  });