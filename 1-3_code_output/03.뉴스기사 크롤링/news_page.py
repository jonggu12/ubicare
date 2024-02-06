import streamlit as st
import pandas as pd
import mysql.connector
from datetime import datetime
from threading import Timer

import csv
import pymysql

date = datetime.today().strftime("%Y년 %m월")

st.set_page_config(page_title="피부관련 최신 뉴스기사")

# 데이터베이스 연결 설정
def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        passwd="1111",
        db="newsDB"
    )

# 데이터베이스에서 데이터 검색
def get_data():
    conn = connect_db()
    cursor = conn.cursor()
    query = "SELECT * FROM news"
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    return pd.DataFrame(result, columns=['news_title', 'link'])

# 메인 함수
def main():
    # 페이지 제목 스타일 설정
    st.markdown("""
        <style>
        .title {
            font-size: 50px;
            font-weight: bold;
            color: #333333; /* 어두운 회색 글씨 */
            text-align: center;
            margin: 20px;
            padding: 20px;
            background-color: #FFFFFF; /* 흰색 배경 */
            border-radius: 10px;
            border: 1px solid #DDDDDD; /* 연한 회색 테두리 */
            box-shadow: 3px 3px 3px #BBBBBB; /* 더 섬세한 그림자 효과 */
            font-family: 'Arial', sans-serif; /* 간결한 폰트 스타일 */
            margin-bottom: 50px;
        }
        </style>
        """, unsafe_allow_html=True)

    # 페이지 제목 추가
    st.markdown('<h1 class="title">피부 관련 최신 뉴스기사</h1>', unsafe_allow_html=True)

    # DB에서 df 가져오기
    df = get_data()
    df.index = range(1, len(df) + 1)
    df.rename(columns={'news_title': '기사제목', 'link': '기사링크'}, inplace=True)
    df_len = len(df)

    space = '&nbsp;' * 183
    st.write(f'{space}({date}자)')
    df['기사링크'] = df.apply(lambda row: f"<a href='{row['기사링크']}' target='_blank'>Click!</a>", axis=1)
    st.write(df.to_html(escape=False), unsafe_allow_html=True)
            
if __name__ == "__main__":
    main()