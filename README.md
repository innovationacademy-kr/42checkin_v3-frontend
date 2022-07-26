# 24HANE (42Checkin_v3-frontend)

# 프로젝트 실행 방법

해당 앱은 벡엔드 서버와, env 설정이 필요합니다.
벡엔드 설정을 아래의 링크를 따라가서 설정해 주시고 env설정은 `env.sample` 을 참고하여 작성 하여 주시기 바랍니다.

### 앱 실행

- 해당 레포를 clone 받습니다.
- [벡엔드 레포](https://github.com/innovationacademy-kr/42checkin_v3-backend) 를 클론 받습니다.

```
//의존성 패키지 설정
npm install

//코드를 실행 합니다
npm run start
```

# 프로젝트 배포 방법

### GithubActions 설정

배포자동화를 통해서 아래 와 같이 연동 되어 있습니다.

- main 브랜치는 상용 서버와 연동
- develop 브랜치는 개발 서버와 연동

배포 자동화에 대한 yml 파일은 [링크](https://github.com/innovationacademy-kr/42checkin_v3-frontend/tree/master/.github/workflows)에서 확인 가능 합니다. 해당 파일의 env 값들은 `Actions secrets` 을 이용하여 변경 가능 합니다.

```
AWS_ACCESS_KEY_ID //AWS CLI 사용하기 위한 access key
AWS_SECRET_ACCESS_KEY //AWS CLI 사용하기 위한 secret access key
DEFAULT_BUCKET_REGION //S3 버킷 위치 아시아 태평양 (서울) "ap-northeast-2"
CLOUDFRONT_DISTRIBUTION_ID //CloudFront ID 상용
CLOUDFRONT_DISTRIBUTION_ID_DEV //CloudFront ID 개발용
S3_BUCKET  //S3 Bucket 이름 상용
S3_BUCKET_DEV  //S3 Bucket 이름 개발용

REACT_APP_ENV //개발 환경 (ex: development,local,production)
REACT_APP_API_URL_DEV //server url (ex. https://localhost:3000)
REACT_APP_SENTRY_DSN = Sentry DSN key (ex: Sentry credential 파일 확인)
```

# 프로젝트 소개

**24 HANE(24 hours are not enough)**

```
카뎃 여러분이 직접 클러스터 출입 누적 시간을 확인할 수 있는 24 HANE 서비스를 소개합니다.
 - 클러스터 출입태깅이 잘 됐는지 궁금한가요?
 - 클러스터 출입 누적 시간이 궁금한가요?

 24HANE 서비스를 이용해서 확인 할 수 있습니다.
 - 클러스터 출입 누적 시간을 오늘/이번 달 기준으로 한 눈에 볼 수 있습니다.
 - 상세한 클러스터 출입 기록을 확인할 수 있습니다.
 - 자정 전후로 별도 태깅 없이 학습에만 몰입 할 수 있습니다.
```

 <div align="center">
<a align="center" href="https://24hoursarenotenough.42seoul.kr/">
  <img width="522" alt="스크린샷 2022-10-02 오후 5 04 40" src="https://user-images.githubusercontent.com/61973070/193444442-3f718559-06b5-43d5-bd31-6f91e9ee4194.png"></a></br>

위의 로고를 클릭하여, 24HANE 으로 접속하세요!
[사이트 링크](https://24hoursarenotenough.42seoul.kr/)

 </div>

# 기술 스택

 <p>
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"> 
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black"> 
    <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=black">

</p>

# 기능 소개

- **로그인**
  - Intra 로그인을 통해 서비스 로그인이 가능합니다.
- **MainPage**

  - 로그인 후 바로 보이는 페이지로 본인의 정보와 출입 누적 시간(오늘, 이번 달) 현황을 한 눈에 볼 수 있습니다.
  - **`개인 정보`** 본인의 인트라 사진과 아이디를 통해 본인의 정보를 확인합니다.
  - **`입출입 여부`** 인트라 사진의 우측 상단에 있는 작은 원으로 입 출입 여부가 표시됩니다.
    - **(초록색🟢)** 정상적으로 입실(check-in) 되었음을 의미합니다.
    - **(회색⚪)** 정상적으로 퇴실(check-out) 되었음을 의미합니다.
  - **`오늘 누적시간`** 오늘의 클러스터 누적 시간을 표시합니다.
    - 단, 개인별 사진 출입 카드의 ‘입실’ 과 ‘퇴실’ 태깅 짝이 일치하는 경우에만 ‘오늘 누적 시간’이 기록됩니다.
    - 따라서, 입실(check-in) 중일 경우 오늘 누적 시간은 기록되지 않으며 퇴실(check-out) 태깅이 확인 된 후 누적 시간이 기록됩니다.
  - **`이번 달 누적시간`** 이번 달 클러스터 누적 시간을 표시합니다.
  - 우측 상단에 있는 버튼을 클릭🖱️하면 SUB PAGE로 이동합니다! 🚀🪂🌌
  <p align="center"><img width="640" alt="메인페이지 스크린샷" src="https://user-images.githubusercontent.com/61973070/193443447-ef653232-7d9d-4b11-a598-5aaed1a243ad.png"></p>

- **SubPage**
  - 이번 달 총 입, 퇴실 기록을 확인할 수 있는 페이지 입니다.
  - **`입-퇴실 상세 내역`** 입-퇴실 별 상세 기록과 입-퇴실에 따른 체류 시간을 확인할 수 있습니다. 데이터가 많을 경우 스크롤을 내려 정보를 확인하시면 됩니다.
  - **`문의하기`** 입-퇴실 내역에 궁금한 점이 있거나, 기타 서비스 관련 문의 사항이 있을 경우 문의하기 버튼을 눌러 설문을 작성해주세요.
  - SUB PAGE 우측 상단에 있는 버튼을 클릭🖱️하면 다시 MAIN PAGE로 이동합니다! 🚀🪂🌌

<p align="center"><img width="320" alt="서브페이지 스크린샷" src="https://user-images.githubusercontent.com/61973070/193443620-5e48da91-5391-4b5e-b1a2-f603293c7ed4.png"></p>
