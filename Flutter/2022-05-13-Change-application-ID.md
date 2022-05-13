# Change the application ID

## App Bundle ID 바꾸기

### build.gradle

- android/app/build.gradle

```groovy
    defaultConfig {
        applicationId "com.example.instagram"  // com.회사명.앱이름 -> 일반적으로 이렇게 작성한다.
        minSdkVersion 21  // == Android 5.0 Lollipop
        // minSdkVersion flutter.minSdkVersion
        targetSdkVersion flutter.targetSdkVersion
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
```

### command

```bash
> dart pub global activate rename

> dart pub global run rename --bundleId com.company.app

# 실제 사용 명령어
# dart pub global run rename --bundleId com.greenmangosalt.instagram
```

- 회사명, 앱이름 위치에 \_ 언더바가 있으면 안된다.
