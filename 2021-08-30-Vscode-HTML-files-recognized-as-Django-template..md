## Vscode에서 HTML 확장자를 Django로 인식

html 확장자에 Material Icon Theme가 적용이 안될 때

### 해결책

1. Setting -> Files: Associations -> Add Item -> Item : **\*.html**, Value: **html**
2. settings.json

```json
  "files.associations": {
    "*.html": "html",
    "**/templates/**/*.html": "django-html"
  },
```
