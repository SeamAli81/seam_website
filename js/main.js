// JavaScript code for main functionalities of the website

// Add any main functionalities here
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
function openModal(modalId) {
    var modal = document.getElementById(modalId + 'Modal');
    modal.style.display = 'block';
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId + 'Modal');
    modal.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');

    const isVisible = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const onScroll = () => {
        items.forEach(item => {
            if (isVisible(item)) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check visibility on initial load
});
