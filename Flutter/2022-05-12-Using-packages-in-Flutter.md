# Using Packages in Flutter

## Depend on it

- pubspec.yaml 오픈

- dependencies 하단에 `패키지 이름 : 버전` 작성

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.4
  image_picker: ^0.8.4+4
  shared_preferences: ^2.0.11
  provider: ^6.0.1
  flutter_local_notifications: ^9.1.5

  firebase_core: ^1.10.6
  firebase_auth: ^3.3.4
  cloud_firestore: ^3.1.5
```

## Install it (pub get)

- 왼쪽의 전구버튼 -> pub get 클릭&emsp;**OR**&emsp;`alt` + `f12` -> 터미널 -> flutter pub get 입력

## Import it

- 작성 중인 dart파일에 import

Related Link : [flutter.dev](https://docs.flutter.dev/development/packages-and-plugins/using-packages)
