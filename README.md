# 1. 깃허브에서 파일 전체 다운로드
# 2. '1-3_code_output/Env' 폴더에 있는 install.bat의 코드를 모두 실행해 가상환경을 구축
# 3. requirements.txt로 라이브러리 다운로드
# 4. 01. 비대면 진료 감성분석 폴더 - Codes - 앱리뷰분석.ipynb 파일 열기
    0. 폰트 설정하기 (Windows OS - malgun.ttf, macOS - apple gothic)
    1. '01.비대면진료앱 감성분석/model' 폴더에 있는 review_model.krs 폴더를 C드라이브 사용자(user) 폴더경로에 위치시키기
    2. MySQL 호스트 및 패스워드 본인 환경에 맞게 설정
    3. 코드 52번째 쉘에서 모델경로를 본인의 경로에 맞게 수정 (e.g. 'c:/Users/user/review_model.krs')
    4. 앱리뷰분석.ipynb 실행
# 5. 02. 피부제품 추천 서비스 폴더 - coupang_DBU.ipynb 파일 열기
    1. MySQL 호스트 및 패스워드 본인 환경에 맞게 설정
    2. 실행
# 6. 03. 뉴스기사 크롤링 - news_DBU.ipynb 파일 열기
    1. client_id 및 Client_secret을 아래와 같이 설정
        * client_id = "********"
        * client_secret = "********"
    2. MySQL 호스트 및 패스워드 본인 환경에 맞게 설정
    3. 실행
# 7. 05. skin_disease_detection 폴더 - Code - cnn_metadata_combined.ipynb 파일 열기
    1. 피부질환 이미지 및 메타데이터 다운 (https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000)
    2. 6번 셀에 다운받은 이미지 및 메타데이터 경로 설정
    3. 원하는 모델 아키텍처 설정 후 모델 돌리기
    4. 모델 저장 시 원하는 파일 이름으로 저장
    5. 모델 로드 시 저장했던 파일 이름 및 경로로 불러오기
# 8. 06. streamlit_hosting.files - skin_chatbot.py 열기
    1. api_key = openai_secret = "********"로 설정
