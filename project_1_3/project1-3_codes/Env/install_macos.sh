#!/bin/bash

# Miniconda 설치
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o Miniconda3-latest-MacOSX-x86_64.sh
bash Miniconda3-latest-MacOSX-x86_64.sh -b -p ~/miniconda

# Miniconda 경로 추가
export PATH=~/miniconda/bin:$PATH

# Conda 환경 생성 및 활성화
conda create --name envFirst3 python=3.9
conda activate envFirst3

# 필요한 라이브러리 설치
pip install -r requirements.txt
