document.addEventListener('DOMContentLoaded', () => {
    console.log('====================================');
    console.log('Portfolio của Nguyễn Văn A đã load xong!');
    console.log('Triển khai thành công trên GitHub Pages');
    console.log('====================================');

    // Hiệu ứng xuất hiện nhẹ cho các thẻ dự án
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // In ra thông báo chào mừng trong console
    setTimeout(() => {
        console.log('Cảm ơn bạn đã ghé thăm portfolio của mình!');
    }, 800);
});
