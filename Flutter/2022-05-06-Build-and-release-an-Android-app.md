# Build and release an Android app

## .apk 파일로 빌드

- Android Studio 우측 상단 Project Structure 아이콘 클릭
- Project SDK 버전이 NO SDK로 되어있으면, 현재 사용하는 안드로이드 SDK 버전으로 변경 -> OK
- Android Studio 상단 메뉴 -> Build -> Flutter -> Build APK -> .apk 파일로 빌드

## 구글 플레이 스토어 빌드 (key로 서명, .aab 파일)

1. Powershell 터미널 오픈

2. `flutter doctor -v` 입력

3. Java binary 프로그램 경로 확인
   `C:\Program Files\Android\Android Studio\jre\bin`

```powershell
PS C:\Users\username> flutter doctor -v

(...)

[√] Android toolchain - develop for Android devices (Android SDK version 32.1.0-rc1)
    • Android SDK at C:\Users\username\AppData\Local\Android\sdk
    • Platform android-32, build-tools 32.1.0-rc1
    • Java binary at: C:\Program Files\Android\Android Studio\jre\bin\java
    • Java version OpenJDK Runtime Environment (build 11.0.11+9-b60-7590822)
    • All Android licenses accepted.

(...)
```

4. 터미널에 다음과 같이 입력

`Java-binary의bin까지경로\keytool -genkey -v -keystore c:\keystore저장할폴더경로\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload`

### 실제 입력 코드

```powershell
> C:\"Program Files"\Android\"Android Studio"\jre\bin\keytool -genkey -v -keystore C:\Users\username\flutter_keys\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

5. 개발자 정보 입력 및 비번1, 비번2 생성

```
이름과 성을 입력하십시오.
  [Unknown]:
조직 단위 이름을 입력하십시오.
  [Unknown]:
조직 이름을 입력하십시오.
  [Unknown]:
구/군/시 이름을 입력하십시오?
  [Unknown]:
시/도 이름을 입력하십시오.
  [Unknown]:
이 조직의 두 자리 국가 코드를 입력하십시오.
  [Unknown]:
CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown이(가) 맞습니까?
  [아니오]:  y

# 비번1, 비번2 생성
```

6. Android/key.properties 파일 생성

- 위에서 정한 경로 그대로 입력<br/>
- `\`가 아닌 `/`로 입력<br/>
- 폴더명 띄어쓰기는 `" "`로 감싼다.

```
storePassword = 입력한비번1
keyPassword = 입력한비번2
keyAlias = upload
storeFile = 생성한keystore경로/upload-keystore.jks
```

7. 프로젝트의 android/app/build.gradle 파일에 다음 코드 추가

```groovy
// 속성 파일로부터 keystore 정보를 가져올 수 있도록 변경

def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
  (...)
}
```

```groovy
android {
  (...)

  signingConfigs {
    release {
      keyAlias keystoreProperties['keyAlias']
      keyPassword keystoreProperties['keyPassword']
      storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
      storePassword keystoreProperties['storePassword']
      }
    }
  (...)
}
```

```groovy

buildTypes {
    release {
         // TODO: Add your own signing config for the release build.
        signingConfig signingConfigs.release // debug를 release로 수정
    }
}

```

8. Android Studio 상단 메뉴 -> Build -> Flutter -> Build App Bundle -> .aab 파일로 빌드

9. `build\app\outputs\bundle\release\app-release.aab` 경로 복사해서 구글 플레이스토어에 등록 (개발자 계정 필요)

Related Link : [flutter.dev](https://flutter-ko.dev/docs/deployment/android)
