#---------------------------------------------------------------------------
#  1. 프로젝트 수행 준비  
#---------------------------------------------------------------------------
#  가. 개요

# iris 데이터를 이용해 ‘Species’ 분류에 있어 정확도가 가장 높은 모델을 찾아본다.

#  나. 필요한 패키지 설치 및 라이브러리 로드

install.packages("dplyr")         # 여러가지 편리한 함수
install.packages("ggplot2")       # ggplot2 그림
install.packages("corrplot")      # 코릴레이션과 관련된 변수들과의 상관관계를 그린다.
install.packages("kernlab")       # SVM 모델을 위한 패키지는 kernlab, e1071 등이 있다. 
install.packages("rpart")         # Recussive Partitioning and regression tree (회귀나무)
install.packages("rpart.plot")    # rpart 시각화 도구 모음
install.packages("randomForest")  # randomForest
library(dplyr) 
library(ggplot2)
library(corrplot)
library(kernlab)
library(rpart)
library(rpart.plot)
library(randomForest)

#  다. 데이터 로드

data(iris)                        # 데이터 불러오기
?iris                             # 데이터에 대한 설명이다.
head(iris)                        # 데이터의 앞 6줄을 출력해 확인
dim(iris)

#  라. 기타 환경설정 등 

getwd()                           # 파일의 경로 설정을 확인
setwd("C:/Bigdata")               # 원하는 경로가 아닐 시, setwd()로 경로를 재설정한다.

#---------------------------------------------------------------------------
#  2. 데이터 준비 및 전처리 (EDA, Preprocessing)
#---------------------------------------------------------------------------
#  가. 데이터 파악을 위한 사항 (구조, 결측치 유무, 이상치 확인, 통계량 확인 등)

View(iris)
str(iris)                                         # 구조 파악 
summary(iris)                                     # 통계적 기본 요약 값, NA값이 없음을 확인할 수 있다.

#  나. 기본적인 클린징 활동 (결측치 제거, 변수 형 변환, 일부변수 제거/추가 등) 

is.na(iris)                                       # iris에서 결측치를 확인. NA의 유무를 묻는 것으로 결측치는 TRUE, 아닌것은 FALSE로 나타난다.
table(is.na(iris))                                # iris에서 True와 False를 table로 보여준다. FALSE 750이고 TRUE는 없다.
sum(is.na(iris))                                  # 결측치의 개수 합해서 알려준다. 결측치는 0이다.
complete.cases(iris)                              # 각 행이 완전한 행인지 확인 할 수 있다. NA가 있는 행은 FALSE로 나온다.

#  다. 데이터 확인을 위한 가시화 (히스토그램, boxplot, 산점도, barplot, corplot등)

prop.table(table(iris$Species))                   # 데이터를 시각화 하기 전에 종류별 비율을 알아본다.

colnames(iris)                                    # 변수명에 대소문자가 섞여 불편하다. 
colnames(iris) <- c(tolower(colnames(iris)))      # 변수명을 소문자로 바꾸는 작업을 해준다.
head(iris)                                        # 소문자로 바뀐 것을 확인할 수 있다.

hist(iris$sepal.length, breaks = 20)              # 히스토그램
hist(iris$sepal.width, breaks = 20)
hist(iris$petal.length, breaks = 20)
hist(iris$petal.width, breaks = 20)

boxplot(iris[,1:4])                               # 박스 플롯
                                                  # 데이터 결과에 크게 영향을 주는 이상치는 안보인다.

ggplot(iris, aes(sepal.length, sepal.width)) +    # 산점도로 두 변수간의 관계성을 파악한다.
  geom_point(aes(colour = species))     
ggplot(iris, aes(petal.length, petal.width)) +    # 산점도로 petal 두 변수간의 관계성을 파악한다. (선형구조)
  geom_point(aes(colour = species))   

cor(iris$sepal.length, iris$sepal.width)          # 꽃받침 sepal의 길이와 폭의 상관계수가 -0.1175이다.
cor(iris$petal.length, iris$petal.width)          # 꽃잎 petal의 길이와 폭의 상관계수가 0.9628이다.

pairs(iris[,1:4], main = "Iris 산점도 행렬")       # 여러 변수의 관계를 한꺼번에 확인한다.

icor <- cor(iris[,1:4])                           # 길어서 바꿈
corrplot(icor, method='shade',
         shade.col=NA, tl.col='black', tl.srt=45) # shade로 확인
corrplot(icor, method='circle',
         shade.col=NA, tl.col='black', tl.srt=45) # circle로 확인
corrplot(icor, method='number')                   # 숫자로 확인

#  라. 필요시 데이터 scaling, normalizing 등 

normalize <- function(x){return((x - min(x))/(max(x) - min(x)))} # normalize function 생성. 정규화로 최대값 1, 최소값 0으로 데이터의 범위를 조정한다.
                                                                 # 데이터 분포의 단순화는 비교를 용이하게 한다.
iris_norm <- as.data.frame(lapply(iris[,1:4], normalize))        # lapply를 이용하여 normalize를 적용한다. 
summary(iris_norm)                                               # 요약 값을 확인, 값이 바뀐 것을 알 수 있다. 나중에 해석할 때는 원래 단위로 환원하고 해석해야 한다.                                   
View(iris_norm)

a <- subset(iris, species == "setosa" | species == "versicolor") # iris에서 범주가 2개인 분류모형을 구축하기 위해 지정한다.
a$species <- factor(a$species)
str(a)

#  마. 훈련데이터와 검증용 데이터 분리

set.seed(123)                                                    # 결과가 일정하게 나오기 위해 지정한다.
train_idx <- sample(1:nrow(a), size = round(0.7 *nrow(a)))       # iris에서 70%의 훈련용 데이터를 추출
train_set <- a[train_idx,]                                       # train_set 데이터 생성
test_set  <- a[-train_idx,]                                      # test_set 데이터 생성
dim(train_set)
table(train_set$species)
View(train_set)

#---------------------------------------------------------------------------
#  3. 모형 수립 및 예측
#---------------------------------------------------------------------------
#  가. 학습할 알고리즘을 선택하여 각 알고리즘에 아래 사항 반복
#  나. train 데이터로 학습 (적절한 파라메터 선택)
#  다. test 데이터로 예측 (구축한 모형을 이용)
#---------------------------------------------------------------------------

# 로지스틱 회귀, 의사결정나무(디시전 트리), 랜덤포레스트 3가지 알고리즘을 사용해본다.

# 1. 로지스틱 회귀

tr <- glm(species ~ sepal.length,                  # glm 함수를 이용
          data = train_set, family = binomial)     # 계수해석 : exp(4.478) = 88, sepal.length가 1 증가시 odd가 88배 증가
      
test.probs <- predict(tr, test_set,                # test_set인 30개에 대한 예측. predict 함수를 이용하여 예측하고, 결과는 확률값으로 리턴한다.
                      type="response")
test.probs                                         # 결과 확인

cut_off <- 0.5                                     # cut off 값을 0.5로 설정
test.pred <- rep(0, length(test.probs))            # test.pred라는 예측하기 위한 벡터를 만들어 30개를 전부 0으로 채운다.
test.pred[test.probs > cut_off] <- 1               # cut off 값이 0.5보다 크면 1로 채운다.
tab <- table(test_set$species, test.pred)          # 결과를 보기위한 테이블
tab

accuracy <- sum(diag(tab))/sum(tab)                # 정확도를 계산, table의 전체 중에 정확하게 맞춘 12와 15. 즉, 정확도는 27/30인 90%이다.
accuracy

#install.packages("gmodels")                       # CrossTable 함수를 이용하면 간단하게 결과값을 찾을 수 있다.
library(gmodels)
CrossTable(x = test_set$species, y= test.pred, prop.chisq= FALSE)

# 2. 의사결정나무(디시전 트리)

set.seed(1234)
train_idx <- sample(1:nrow(iris),                  # iris에서 70%의 훈련용 데이터를 추출
                    round(nrow(iris)*0.7))
train_set <- iris[train_idx,]                      # train_set을 생성(105개)
table(train_set$species)
test_set  <- iris[-train_idx,]                     # test_set을 생성(45개)

dt_iris <- rpart(species ~., data = train_set)     # iris 데이터의 품종을 종속변수로 설정한다.
rpart.plot(dt_iris, extra = 1)                     # 의사결정나무의 시각화

predicted_result <- predict(dt_iris,newdata = test_set,
                            type = "class")        # test_set으로 예측
predicted_result                                   # test_set 예측결과를 확인, 품종이 나온다.

tab <- table(test_set$species,                     # 혼돈행렬, 실제값과 예측값이 얼마나 차이가 있는가를 확인한다.
             predicted_result) ; tab
             
accuracy <- sum(diag(tab))/sum(tab) ; accuracy     # 16,15,10을 합해 test_set의 전체 값인 45개로 나누면 91% 정도 분류 정확도가 나온다.
  
# 3. 랜덤 포레스트

set.seed(1234)
train_idx <- sample(1:nrow(iris),                  # iris에서 70%의 훈련용 데이터를 추출
                    round(nrow(iris)*0.7))
train_set <- iris[train_idx,]     
table(train_set$species)
test_set  <- iris[-train_idx,]    

rf <- randomForest(species ~., data = train_set)   # train_set으로  랜덤 포레스트를 진행
rf                                                 # 랜덤 포레스트 결과. 500개의 트리에 2개의 변수인 것을 알 수 있다.

str(rf)                                            # rf 구조를 확인, 19개의 요소로 구성된 리스트로 리턴한 것을 확인할 수 있다.
rf$err.rate                                        # OOB Err rate를 확인

p <- predict(rf, test_set)                         # 랜덤 포레스트로 test_set을 예측
p

tab_rf <- table(test_set$species, p)               # 실제 데이터와 랜덤 포레스트로 예측한 p로 테이블 생성 
tab_rf

accuracy_rf <- sum(diag(tab_rf))/                  # 43/45으로 정확도는 95.556%이다.
  sum(tab_rf) ; accuracy_rf 
  
#---------------------------------------------------------------------------
#  4. 결과 비교 평가
#---------------------------------------------------------------------------
#  가. 각 모형의 예측결과를 평가 메트릭(예: RMSE, 정확도 등)에 따라 비교
#  나. 소결론 도출 
#---------------------------------------------------------------------------

# 평가 항목은 정확도로 진행한다. 3가지 모형으로 예측을 해보았고, 정확도는 전체적으로 높은 편이었다.
# 로지스틱 회귀는 90%, 의사결정나무는 91.11%, 랜덤 포레스트는 95.56%의 정확도를 보여주었다.
# 따라서 예측력이 가장 좋았던 모형은 랜덤 포레스트였다.
# 하지만 파라미터를 정교하게 조정하면서 답을 찾은 게 아니기 때문에,
# 추가적으로 다른 모형을 다루면서 답을 찾으면 좀 더 나은 결과값을 얻을 수도 있겠다고 생각한다.

#---------------------------------------------------------------------------
