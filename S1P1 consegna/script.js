window.addEventListener('DOMContentLoaded', function() {
    var twitterLink = document.querySelector('aside .list-unstyled li:nth-child(3) a[href="#"]');
    if (twitterLink) {
        twitterLink.parentNode.remove();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var continueLink = document.querySelector('.jumbotron a.font-weight-bold');
    if (continueLink) {
        continueLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var post = this.closest('.blog-post');
            if (post) {
                post.remove();
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var authors = document.querySelectorAll('.blog-post-meta a');
    authors.forEach(function(author) {
        author.addEventListener('mouseover', function() {
            alert('Autore del post: ' + this.textContent);
        });
    });
});
