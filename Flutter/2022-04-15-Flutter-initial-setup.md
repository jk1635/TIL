# Flutter initial setup

[1. Flutter SDK 설치](#1-Flutter-SDK-설치)<br/>
[2. Android Studio 설치](#2-Android-Studio-설치)<br/>
[3. Android Studio 세팅](#3-Android-Studio-세팅)<br/>
[4. 환경 변수 등록](#4-환경-변수-등록)<br/>
[5. 새로운 Flutter 프로젝트 생성](#5-새로운-Flutter-프로젝트-생성)<br/>
[6. 코드 작성](#6-코드-작성)<br/>
[7. 추가 내용](#7-추가-내용)

## 1\. Flutter SDK 설치

- [Flutter 공식사이트](https://flutter.dev/docs/development/tools/sdk/releases?tab=windows)

- 2.8.0 다운로드 > 찾기 쉬운 곳에 압축 해제 (Program Files 이런 폴더에 저장하지 않는다.)

## 2\. Android Studio 설치

- Android SDK, JDK 라는게 필요 (Android Studio 라는 IDE 프로그램에 포함되어 있다.)

- [Android Studio 공식사이트](https://developer.android.com/studio)

- Android Studio 설치 (m1 이후 맥북은 ARM 다운) > Setup Wizard > Standard > Finish (AMD Hyper, Intel HAXM 나와도 무시)

## 3\. Android Studio 세팅

- VScode 쓰는 경우도, 우선 Android Studio 세팅은 필요하다.

- Android Studio > Plugins > Flutter 검색 > Install

- More Actions 버튼 > SDK Manager 클릭 (이미 프로젝트 진행 중이면 SDK Manager 버튼은 우측상단에 있다.)

- SDK Tools 탭 > Android SDK Command-line tools 부분 체크 및 적용

  - Appearance & Behavior > System Settings > Android SDK > Android SDK Command-line Tools

## 4\. 환경 변수 등록

### 윈도우의 경우

- 검색 > 시스템 환경 변수 편집 > 환경 변수 버튼 > {사용자이름}에 대한 사용자 변수 > PATH > 편집

- 새로 만들기 > 압축 푼 Flutter 폴더 안의 bin 폴더의 경로 (C:\Users\사용자이름\flutter\bin)

- 설치 내용 확인 : 검색 메뉴 > Powershell or cmd > flutter doctor > 쫘르륵

### Error

- Android license status unknown 에러

  - 터미널에 flutter doctor --android-licenses 입력하고 다 동의하면 해결

- cmdline-tools component is missing 에러

  - Android Studio 에서 SDK Manager 눌러서 설치하는 위의 과정이 잘 안된 것임

- 크롬 없다 에러

  - 크롬 브라우저 설치

- Android Studio 에러

  - Android Studio 설치하지 않은 것

## 5\. 새로운 Flutter 프로젝트 생성

- Android Studio > New Flutter Project 만들기 (프로젝트 진행 중이면 상단 메뉴에서 File - New)

- Flutter 선택 > Flutter SDK 압축 푼 경로 작성 (C:\Users\사용자이름\flutter) (점 3개 버튼 누르면 됨)

- 프로젝트 생성 폴더 및 프로젝트명 입력 (영어 소문자만 가능, 공백 대신 \_ 사용 가능) > 프로젝트 생성

- lib 폴더 > `main.dart`에 코드 작성

## 6\. 코드 작성

- `main.dart`의 샘플 코드 삭제

```dart
// lib/main.dart

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp()); // 앱 구동 함수
}

// 아래 4줄은 세팅 문법
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Text('안녕')
    );
  }
}

```

- `analysis_options.yaml`에 Lint rules 설정 (초보자는 Lint 지켜서 사용하기 어렵기 때문에 잠깐 끄는 용도이다.)

```yaml
# analysis_options.yaml

(...)
linter:
  (...)
  rules:
    prefer_const_constructors: false
    avoid_print: false
    prefer_typing_uninitialized_variables: false
    prefer_const_constructors_in_immutables: false
```

## 7\. 추가 내용

### 미리보기

- 우측 상단에서 Device를 Chrome(Web)으로 설정 > 우측 상단 재생 버튼 클릭 > 앱 실시간 미리보기 가능 (웹사이트지만 모바일 앱)

### VScode 에디터를 사용할 경우

- VScode 설치 > Extension 메뉴 > Flutter 설치

### 한글 부분 오타가 났다고 밑줄 표시 나오면

- 상단 File > Settings > Editor > Inspections > 상단 Profile을 Default로 선택 > Proofreading > Typo 부분을 체크 해제

참고 : [codingapple](https://www.youtube.com/watch?v=usE9IKaogDU&feature=emb_title)
