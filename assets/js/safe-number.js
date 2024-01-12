/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    
    $('#mainNavDd').mouseover(function () {
        mainNav.classList.add('navbar-shrink');
    })


    var faqData = [
        {
            question: '특정한 통화 안내음 제공이 가능한가요?',
            answer: '5초 내외로 음원(VOX)을 제작해주시면, 통화 안내음 제공이 가능합니다.'
        },
        {
            question: '0502 번호 1회선당 최대 몇 회선까지 통화가 가능한가요?',
            answer: '0502 번호 1회선당 최대 2회선까지 통화가 가능합니다.\n예를 들어 이동전화, 유선전화 순으로 설정할 경우 먼저 이동전화로 전화가 걸리며 통화 중이거나 통화연결이 안 될 경우 다시 유선전화로 전화가 걸리게 됩니다.'
        },
        {
            question: '안심번호 가입 기준은 어떻게 되나요? 소규모 사업장도 이용이 가능한가요?',
            answer: '특별한 기준은 없으니 안심번호를 통한 통화 유발 효과가 있는지 검토하며 사업장의 규모보다 해당 기업이 안심번호와 관련하여 제공되는 API 등을 적용하여 운영할 수 있는지를 판단하게 됩니다.'
        },
        {
            question: '안심번호는 계약 기간이 있나요?',
            answer: '계약 기간은 1년 단위로 진행됩니다.'
        },
        {
            question: '0502로 전화가 걸려와 전화를 걸면 없는 번호로 나옵니다. 스팸 전화인가요?',
            answer: '0502로 전화가 걸려오는 전화를 바로 걸어서 없는 번호인 경우 전화번호를 변 조작한 전화일 확률이 높으며, 이는 발신번호 표시가 유무선 전화번호임에도 없는 번호인 스팸 전화와 동일한 경우입니다. \n0502 번호가 일정 기간이 지나 사용 목적을 다한 경우 통화가 되지 않습니다. 참고로 0502번호가 수신자에게 발신번호로 표시되려면 발신자와 수신자 모두 안심번호에 설정되어 있거나 발신자가 평생번호 사용자로서 착신번호 표시를 0502로 설정해야 가능합니다.'
        },
        {
            question: '안심번호 가입 하게 되면 요금은 얼마 내야 하나요? 요금은 어떻게 부과가 되나요?',
            answer: '안심번호는 번호당 1,100원(부가세 포함)의 기본료가 있으며, \n고객과 별도 협의에 의한 협정요금의 적용이 가능합니다.'
        },
        {
            question: '안심번호 서비스와 평생번호 서비스의 차이점은 무엇인가요?',
            answer: '안심번호 서비스는 기업이 업무상 활용하는 고객의 개인 전화번호가 외부로 노출되어 스팸 등으로 활용되지 않도록 일회성으로 제공되는 0502 형태의 임시 전화번호이며, 평생번호 서비스는 고객의 개인 전화번호가 변경되어도 변하지 않는 지속형 전화번호 서비스입니다.'
        },
        {
            question: '안심번호 서비스는 무엇인가요?',
            answer: '기업이 배송 등의 업무 진행 시 고객의 전화번호가 제3자에게 노출되는걸 방지하기 위해 0502 가상번호를 제공하여 고객의 전화번호를 보호하는 서비스입니다.'
        },
        // 다른 질문과 답 추가
    ];

    var faqList = document.getElementById('faqList');

// 반복문을 사용하여 li 태그 동적 생성
    for (var i = 0; i < faqData.length; i++) {
        var faqItem = faqData[i];

        var li = document.createElement('li');

        var a = document.createElement('a');
        a.href = '#';

        var spanQ = document.createElement('span');
        spanQ.textContent = 'Q';

        var qText = document.createTextNode(faqItem.question);

        var faqView = document.createElement('div');
        faqView.style.whiteSpace = 'pre-line';
        faqView.classList.add('faq_view');
        
        var spanA = document.createElement('span');
        spanA.textContent = 'A';
        
        var aText = document.createTextNode(faqItem.answer);
        
    // 생성된 요소를 DOM에 추가
        a.appendChild(spanQ);
        a.appendChild(qText);
        li.appendChild(a);
        faqView.appendChild(spanA);
        faqView.appendChild(aText);
        li.appendChild(faqView);
        faqList.appendChild(li);
    }

document.querySelectorAll('#faqList li a').forEach(function(faqBtn) {
    faqBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 디폴트 동작 중단
        var faqView = this.nextElementSibling; // 다음 형제 요소인 .faq_view 선택
        var faqQ = this.querySelector('span');
  
        // 클래스를 토글하여 상태를 관리
        if (faqView.classList.contains('show')) {
            // .show 클래스가 이미 적용된 경우
            faqView.classList.remove('show');
            this.style.color = '#3f3f3f';
            faqQ.style.color = '#d4d4d4';
        } else {
            // .show 클래스가 적용되지 않은 경우
            faqView.classList.add('show');
            this.style.color = '#d71827';
            faqQ.style.color = '#d71827';
        }
    });
});
    
    // 헤더 높이를 동적으로 계산하여 나머지 콘텐츠의 상단 여백을 조정
    function adjustContentMargin() {
        var headerHeight = $("#header").outerHeight();
        $("#mainNav").css("margin-top", headerHeight + "px");
    }

    // 페이지 로드 시에도 한 번 호출
    adjustContentMargin();

    // 윈도우 크기 변경 시에도 호출
    $(window).resize(function () {
        adjustContentMargin();
    });

    // // floating :: 스크롤 맨 위로 올리기
    // var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    // // 버튼 클릭 시 화면 맨 위로 스크롤
    // scrollToTopBtn.addEventListener('click', function () {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // });

});
