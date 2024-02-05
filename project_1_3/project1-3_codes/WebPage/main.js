document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page");
    const adverElement = document.getElementById("adver");

    const kakaoMapImage = document.getElementById("kakao_img_tab");
    const skinCareImage = document.getElementById("skinCare_tab");
    const skinDiseaseCheckImg = document.getElementById('skinDiseaseCheckImg');
    const chatBotImg = document.getElementById('chatBotImg');
    const faqImg = document.getElementById('faqImg');
    const newsClickImg = document.getElementById('newsClickImg');

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');

    // 초기 로드 시 'Service-page'를 제외한 모든 페이지를 숨김
    pages.forEach((page) => {
        if (page.id !== "Service-page") {
            page.style.display = "none";
        }
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            displayPage(navItem, true);
        });
    });

    // 'Kakao Map' 이미지 클릭 이벤트
    if (kakaoMapImage) {
        kakaoMapImage.addEventListener("click", () => {
            const hospitalNavItem = findNavItemByDataPage("Hospital");
            displayPage(hospitalNavItem, true);
        });
    }

   // '피부관리 Tip' 이미지 클릭 이벤트
   if (skinCareImage) {
        skinCareImage.addEventListener("click", () => {
            const skinCareNavItem = findNavItemByDataPage("Skin_care");
            displayPage(skinCareNavItem, true);
        });
    }

    // 'Skin Disease Check' 이미지에 클릭 이벤트 리스너 추가
    if (skinDiseaseCheckImg) {
        skinDiseaseCheckImg.addEventListener('click', () => {
            // 새 탭에서 링크 열기
            window.open('https://skindisease2-yzavn3wtj7s7jqwf2eyqqj.streamlit.app/', '_blank');
        });
    }

    // 'Chat Bot' 이미지에 클릭 이벤트 리스너 추가
    if (chatBotImg) {
        chatBotImg.addEventListener('click', () => {
            window.open('https://skindisease2-nexfpfczcmbndwwhvdqsiv.streamlit.app/ ', '_blank');
        });
    }

    // 'FAQ' 이미지에 클릭 이벤트 리스너 추가
    if (faqImg) {
        faqImg.addEventListener('click', () => {
            window.open('https://skindisease2-6bilegak8xmyoezzxn3rzk.streamlit.app/', '_blank');
        });
    }

    // 'newsClick' 이미지에 클릭 이벤트 리스너 추가
    if (newsClickImg) {
        newsClickImg.addEventListener('click', () => {
            window.open('https://app-eyj2fztzv3fczhouwhb3sb.streamlit.app/', '_blank');
        });
    }

    // 'btn1' 이미지에 클릭 이벤트 리스너 추가
    if (btn1) {
        btn1.addEventListener('click', () => {
            window.open('http://www.instagram.com/lichtundcalla', '_blank');
        });
    }

    // 'btn2' 이미지에 클릭 이벤트 리스너 추가
    if (btn2) {
        btn2.addEventListener('click', () => {
            window.open('https://ai.ubion.co.kr/', '_blank');
        });
    }

    // 'btn3' 이미지에 클릭 이벤트 리스너 추가
    if (btn3) {
        btn3.addEventListener('click', () => {
            window.open('https://github.com/jonggu12', '_blank');
        });
    }

    // 'btn4' 이미지에 클릭 이벤트 리스너 추가
    if (btn4) {
        btn4.addEventListener('click', () => {
            window.open('https://github.com/ensrate', '_blank');
        });
    }

    function displayPage(navItem, updateNav) {
        if (!navItem) return;

        const dataPage = navItem.querySelector("a").getAttribute("data-page");
        displayPageById(dataPage, updateNav);
    }

    function displayPageById(pageId, updateNav) {
        // 모든 페이지를 숨김
        pages.forEach((page) => {
            page.style.display = "none";
        });

        // 광고 요소를 숨기거나 보여줌
        if (pageId !== "Service" && adverElement) {
            adverElement.style.display = "none";
        } else if (adverElement) {
            adverElement.style.display = "block";
        }

        // 지정된 페이지만 표시
        const currentPage = document.getElementById(pageId + "-page");
        if (currentPage) {
            currentPage.style.display = "block";
        }

        // 네비게이션 항목 업데이트
        if (updateNav) {
            updateNavItems(pageId);
        }
    }

    function updateNavItems(activePageId) {
        navItems.forEach((item) => {
            const dataPage = item.querySelector("a").getAttribute("data-page");
            item.className = dataPage === activePageId ? "nav-item active" : "nav-item";
        });
    }

    // kakaomap, 피부관리 tip 서브페이지로 이동하는 코드
    // 해당 이미지 클릭시 해당하는 nav의 dataset value를 판별한 뒤 return해 display메서드 실행키로 전달하는 코드 
    function findNavItemByDataPage(dataPage) {
        return Array.from(navItems).find(item => {
            const itemDataPage = item.querySelector("a").getAttribute("data-page");
            return itemDataPage === dataPage;
        });
    }
});
