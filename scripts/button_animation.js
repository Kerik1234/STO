 document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.style.transform = 'translateY(1px)';
            });
            
            button.addEventListener('mouseup', () => {
                button.style.transform = '';
            });
        });