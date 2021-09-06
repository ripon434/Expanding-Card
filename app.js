const allPanel = document.querySelectorAll('.panel');

allPanel.forEach(item => {
    item.addEventListener('click', function () {
        removeActiveItem();
        item.classList.add('active');
    });
});

function removeActiveItem() {
    allPanel.forEach(item => {
        item.classList.remove('active');
    });
}