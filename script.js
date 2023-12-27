//Xử lý slide
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideWidth = slides[0].offsetWidth; // Thay đổi từ const thành let
const visibleSlides = 3;
let currentIndex = 0;

function slideTo(index) {
    slideWidth = slides[0].offsetWidth;

    const translateX = -index * slideWidth;
    slideContainer.style.transform = `translateX(${translateX}px)`;
}

nextButton.addEventListener('click', ()=>{
    let wi=slideContainer.offsetWidth
    console.log(wi)
    slideWidth = slides[0].offsetWidth;

    currentIndex = (currentIndex + 1) % (slides.length-wi/ slideWidth+1);

    slideTo(currentIndex);
});
prevButton.addEventListener('click',()=>{
    let wi=slideContainer.offsetWidth
    slideWidth = slides[0].offsetWidth;
    currentIndex = (currentIndex - 1) % (slides.length-wi/ slideWidth+1);

    slideTo(currentIndex)});

window.addEventListener('resize',function() {
    slideTo(currentIndex);
} );

slideTo(currentIndex);
//xử lý tự động chạy theo nút
window.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.buttons');
    var boxes = document.querySelectorAll('.box');
    var currentIndex = 0; // Chỉ số của box hiện tại
    var intervalId; // ID của setInterval

    // Hàm để chuyển đổi box và button tương ứng
    function switchBox(index) {
        // Ẩn tất cả các box và đặt tất cả các button về trạng thái không kích hoạt
        boxes.forEach(function(box) {
            box.style.display = 'none';
        });
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Hiển thị box và kích hoạt button tương ứng
        boxes[index].style.display = 'block';
        buttons[index].classList.add('active');
    }

    // Hàm để chuyển đổi tự động
    function autoSwitch() {
        currentIndex++; // Tăng chỉ số hiện tại
        if (currentIndex >= boxes.length) {
            currentIndex = 0; // Nếu chỉ số hiện tại vượt quá số lượng box, quay lại box đầu tiên
        }
        switchBox(currentIndex); // Chuyển đổi box và button tương ứng
    }

    // Mặc định hiển thị box1 và sáng button1
    switchBox(0);

    // Lặp qua từng button và gán sự kiện click
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            currentIndex = index; // Cập nhật chỉ số hiện tại khi người dùng nhấp vào button
            switchBox(currentIndex); // Chuyển đổi box và button tương ứng
        });
    });

    // Thiết lập chạy tự động sau mỗi 3 giây
    intervalId = setInterval(autoSwitch, 2500);

    // Dừng chuyển đổi tự động khi người dùng nhấp vào box hoặc button
    boxes.forEach(function(box) {
        box.addEventListener('click', stopAutoSwitch);
    });

    buttons.forEach(function(button) {
        button.addEventListener('click', stopAutoSwitch);
    });

    // Hàm để dừng chuyển đổi tự động
    function stopAutoSwitch() {
        clearInterval(intervalId);
    }
});
// Xử lý nút back to top:
window.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    // Xử lý sự kiện click trên nút "Back to Top"
    backToTopButton.addEventListener('click', function() {
        // Cuộn lên đầu trang
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Xử lý click menu
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu');
    var main = document.querySelector('.main');

    var slideContainer = document.querySelector('.list-menu');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Ngăn chặn việc lan truyền sự kiện click đến document

        slideContainer.classList.add('open'); // Thêm lớp "open" để hiển thị slide-container
        main.style.opacity="0.5"
    });

    document.addEventListener('click', function (event) {
        var targetElement = event.target;

        if (!slideContainer.contains(targetElement) && !targetElement.classList.contains('menu')) {
            slideContainer.classList.remove('open');
            main.style.opacity = "1";
        }
    });
});

var lastScrollTop = 0;
window.addEventListener("scroll", handleScroll);

function handleScroll() {
    var backToTopButton = document.querySelector(".top");
    var scrollTop = document.documentElement.scrollTop; // lấy vtri cuộn hiện tại
    if (scrollTop > 20 && scrollTop > lastScrollTop) {
        // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }

}
