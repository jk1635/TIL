```shell
#---------------------------------------------------------------------------
#  1. 프로젝트 수행 준비  
#---------------------------------------------------------------------------
#  가. 개요

# Wages and Hours 데이터로 학력과 자산, 그리고 급여의 관계를 알아본다.

#  나. 필요한 패키지 설치 및 라이브러리 로드

install.packages("dplyr")         # 여러가지 편리한 함수
install.packages("ggplot2")       # ggplot2 그림
install.packages("rrcov")         # 사용할 데이터가 있는 패키지
library(dplyr) 
library(ggplot2)
library(rrcov)

#  다. 데이터 로드

data(wages)                       # 데이터 불러오기
?wages                            # 데이터에 대한 설명이다.
head(wages)                       # 데이터의 앞 6줄을 출력해 확인

#  라. 기타 환경설정 등 

getwd()                           # 파일의 경로 설정을 확인
setwd("C:/BigdataClass")          # 원하는 경로가 아닐 시, setwd()로 경로를 재설정한다.

#---------------------------------------------------------------------------
#  2. 데이터 준비 및 전처리 (EDA, Preprocessing)
#---------------------------------------------------------------------------
#  가. 데이터 파악을 위한 사항 (구조, 결측치 유무, 이상치 확인, 통계량 확인 등)

View(wages)
str(wages)                # 구조 파악 
summary(wages)            # 통계적 기본 요약 값, NA값이 없음을 확인할 수 있다.
dim(wages) 

#  나. 기본적인 클린징 활동 (결측치 제거, 변수 형 변환, 일부변수 제거/추가등) 

is.na(wages)               # 전체 wages에서 결측치를 확인. NA의 유무를 묻는 것으로 결측치는 TRUE, 아닌것은 FALSE로 나타난다.
table(is.na(wages))        # wages에서 True와 False를 table로 보여준다. FALSE 375이고 TRUE는 15이다.
sum(is.na(wages))          # 결측치의 개수 합해서 알려준다. 결측치는 15이다.
complete.cases(wages)      # 각 행이 완전한 행인지 확인 할 수 있다. NA가 있는 행은 FALSE로 나온다.

na.omit(wages)             # 단순하게 NA를 제거할 때 사용
w <- na.omit(wages)        # NA 값이 제거된 wages를 w으로 복사
dim(w)                     # NA 값이 제거된 데이터의 행과 열의 수를 확인한다.

#  다. 데이터 확인을 위한 가시화(히스토그램, boxplot, 산점도, barplot, corplot등)

colnames(w)                                    # 변수명에 대소문자가 섞여 불편하다. 
colnames(w) <- c(tolower(colnames(w)))         # 변수명을 소문자로 바꾸는 작업을 해준다.
head(w)                                        # 소문자로 바뀐 것을 확인할 수 있다.

plot(w)                                        # 그래프로 변수의 상관관계를 알아본다.

ggplot(w, aes(rate,asset)) +                   # 산점도로 두 변수간의 관계성을 파악한다. (자산, 학력, 급여)
  geom_point(aes(colour = school))    
ggplot(w, aes(rate,asset)) +                   # 자산과 학력 그리고 비근로소득의 관계를 확인한다.
  geom_point(aes(colour = nein))               # 대체적으로 자산과 학력은 비례함을 확인
                                                                 

hist(w$asset, breaks = 15)                     # 히스토그램
hist(w$school, breaks = 15)
hist(w$rate, breaks = 15)
hist(w$nein, breaks = 15)

cor(w$rate, w$asset)                           # rate와 asset의 상관계수는 0.7983151이다. 

#---------------------------------------------------------------------------
#  3. 모형 수립 및 예측
#---------------------------------------------------------------------------
#  가. 학습할 알고리즘을 선택하여 각 알고리즘에 아래 사항 반복
#  나. train 데이터로 학습 (적절한 파라메터 선택)
#  다. test 데이터로 예측 (구축한 모형을 이용)
#---------------------------------------------------------------------------
# 수정중
#---------------------------------------------------------------------------
#  4. 예측 및 결과 비교 평가 제시 (소결론 도출)
#---------------------------------------------------------------------------
# 수정중
```