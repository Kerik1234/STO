 document.querySelectorAll('.dropdown').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.dropdown-content').style.display = 'block';
            });
            
            item.addEventListener('mouseleave', () => {
                item.querySelector('.dropdown-content').style.display = 'none';
            });
        });