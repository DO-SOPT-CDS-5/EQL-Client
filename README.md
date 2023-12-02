<div align='center'>

# EQL-Client

EQL 리디자인 합동 세미나 5조

## 👜EQL👢

<img width='400' height='250' src='https://cdn.eqlstore.com/goods/EQLEGR/169048207484015.jpg' />
<br/>
<b>WE ARE ALL EQL!
<br/>
<br/>

‘EQL’은 EQUAL의 철자를 축약한 신조어로, <br/> 어떠한 편견이나 선입견 없이 자유롭게 표현할 수 있는 패션을 지지하는 온라인 편집숍입니다.</br>

## 👩🏻‍💻 팀원 소개 및 역할 분담

| 신수연 [@SooY2](https://github.com/SooY2) | 이시연 [@SynthiaLee](https://github.com/SynthiaLee) | 이재훈[@ljh0608](https://github.com/ljh0608) | 최준민 [@Jun-min2](https://github.com/Jun-min2) |
| :---------------------------------------: | :-------------------------------------------------: | :------------------------------------------: | :---------------------------------------------: |
|               Category Page               |                    Product Page                     |                  Order Page                  |                    Home Page                    |
| 상품 전체 조회 API GET <br/>페이지네이션  |   상품 상세보기 API Get<br/>장바구니 추가 API Put   |            주문 정보 조회 API Get            |     컨텐츠 조회 API GET <br/>이미지 캐러셀      |

<br />

## 🛠 기술 스택

| 역할                 | 종류                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework            | ![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=white)                                                                                                                                                                                                                               |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                                                                                                                                              |
| Programming Language | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)                                                                                                                                                                                                             |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![StyleLint](https://img.shields.io/badge/stylelint-263238.svg?style=for-the-badge&logo=stylelint&logoColor=white) |
| Package Manager      | ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                                                                                                                               |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                                                                                                                               |
| Deployment           | ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)                                                                                                                                                                                                                            |
| Library              | React-Slick                                                                                                                                                                                                                                                                                                                          |

<br />

## 📂 폴더 구조

<div align='left'>

```
|-- 📁 node_modules
|-- 📁 src
  ┃ ┣ 📂assets
 	┃ ┣ 📂images
 	┃ ┣ 📂svgs
  ┃ ┣ 📂components
 	┃ ┣ 📂Category
 	┃ ┣ 📂common
 	┃ ┣ 📂footer
 	┃ ┣ 📂header
 	┃ ┣ 📂home
 	┃ ┣ 📂order
 	┃ ┣ 📂topButton
  ┃ ┣ 📂constants
  ┃ ┣ 📂pages
 	┃ ┣ 📂Category
 	┃ ┣ 📂Home
 	┃ ┣ 📂Order
 	┃ ┣ 📂Product
  ┃ ┣ 📂styles
 	┃ ┣ globalStyle.ts
 	┃ ┣ style.d.ts
 	┃ ┣ theme.ts
  ┃ ┣ 📂types
 	┃ ┣ image.d.ts
 	┃ ┣ product.ts
  ┃ ┣ 📂utils
 	┃ ┣ 📂api
 	┃ ┃ ┗ axios.ts
  ┃ ┣ App.tsx
  ┃ ┣ main.tsx
  ┃ ┣ Router.tsx
  ┃ ┣ svg.d.ts
└── 📜각종 세팅 파일
```

## 🚧 컨벤션

### Branch Convention

`feat/#이슈번호/이슈이름`

### Commit Convention

<img width='500' height='400' src='https://file.notion.so/f/f/7364d05f-d620-466c-9013-da1551ba128c/934abb5d-d094-4741-b246-c495e17a2df0/Untitled.png?id=e2a62020-71e2-4ab7-a307-f7b6b0aeaf09&table=block&spaceId=7364d05f-d620-466c-9013-da1551ba128c&expirationTimestamp=1701518400000&signature=vf0j4SL4lUtnAiALZwUwk7ZbCiOYqqA9jOMPUJgY_Qc&downloadName=Untitled.png' alt='commit convention'>

### Coding Convention

#### 컴포넌트

- `rafce`/`rsc`
- 컴포넌트만 `PascalCase` 사용 : PascalCase
  - 그 외에는 `camelCase`
  - 유틸함수나 custom hooks 는 export function 을 사용한다 (rfc)
- Interface 선언시
  - 컴포넌트의 인자 : `~PropsType(s)`
    - 이때의 Interface는 type 폴더로 분리 금지
  - 함수의 인자 : `~Type(s)`

#### 변수

- var 금지
- `const` → `let` 순서로 위부터 선언.
- 변수를 조합하여 문자열 생성시 “+ “ 금지. → 리터럴 사용(백틱 ```)
- 상수는 영문 대문자 스네이크 : `API_KEY`
- 변수명 : 의미 + 간결함. “알잘딱”
  - 예시 : 배열에 Arr 보다는 변수s
- `구조분해할당`을 적극 이용하자
- 변수 등을 조합해서 문자열을 생성할 때는 `무조건 리터럴`을 이용한다
  - X) var1 + “ “ + var2
  - O) `${var1} ${var2}`
