# Miniconda 설치
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o miniconda.sh
bash miniconda.sh -b -p ~/miniconda
rm miniconda.sh

# Miniconda를 환경 변수에 추가
echo 'export PATH="$HOME/miniconda/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 새 Conda 환경 생성 및 활성화
conda create --name envFirst3 python=3.9
conda activate envFirst3

# requirements.txt 파일로부터 패키지 설치
pip install -r requirements.txt