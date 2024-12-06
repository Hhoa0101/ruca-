// script.js

// Đơn giản hóa việc thêm sản phẩm vào giỏ
const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Sản phẩm đã được thêm vào giỏ hàng');
    });
});
