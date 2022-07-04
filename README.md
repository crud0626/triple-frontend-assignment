# triple-frontend-assignment

## 실행방법

```
git clone https://github.com/crud0626/triple-frontend-assignment.git

npm install

npm start
```

## 기술스택

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="SCSS" src ="https://img.shields.io/badge/SCSS-CC6699?&style=for-the-badge&logo=sass&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>

- **SCSS**<br>
  styled-components와 고민했지만 사용법만 급하게 익힌 뒤 사용하기엔 무리가 있다고 판단하여
  가장 자신있으면서 nesting등을 이용해 전체적인 코드양을 줄일 수 있는 장점이 있기에 사용하였습니다.

- **TypeScript**<br>
  동적 타입 언어인 JS의 안정성을 위해서 TypeScript를 적용하였습니다.<br>
  프로젝트에 도입해본건 처음이였는데 동적 타입으로 인한 예기치 못한 동작을 사전에 방지하고 안정성을 확보할 수 있어 좋았습니다.

## 컴포넌트 구조

<div align=center>
  <img width=700 src=https://user-images.githubusercontent.com/72868495/177069958-5025e58f-b10d-4344-8b0f-3e00517cd9b6.png alt="컴포넌트 다이어그램"/>
</div>

## 특징

- **JS -> TS로 마이그레이션 과정 중 발생한 오류 해결**<br>
  TS로 마이그레이션 후 정상적으로 작동했었으나 다음 날 npm start 후 App 컴포넌트를 못 읽어오는 현상이 발생했습니다.<br><br>
  CRA의 공식 문서에서는 TS 추가 설치 후 별도 설정 할 필요가 없다고 되어있어 라이브러리쪽에서 꼬임 현상이 발생했다고 판단하였고<br>구글에서 원인을 파악하기 위해 찾아보았으나 원인과 해결방법이 워낙 다양해 라이브러리 재설치, 상위 디렉토리의 라이브러리 수정 등 여러 방법을 적용해보았지만 해결되지 않았습니다.<br><br>
  문득 TS문제 일 수도 있다는 생각에 tsx 확장자를 모두 jsx로 변경했더니 정상적으로 작동하는것을 확인했고<br>
  TS와 CRA의 충돌 관련 사례를 찾던 중 tsconfig를 직접 설정하는 경우가 있는것을 알게되어 적용 후 해당 에러를 해결하였습니다.

- **FadeIn 효과 적용**<br>
  초기에 FadeIn effect를 적용하기 위해 custom hook을 만들어 해당 hook내부에서 setTimeOut을 통해 delay를 주려고 했으나 리액트의 batch 현상으로 인해 delay가 반영되지 않고 모든 컴포넌트가 동시에 리렌더링이 발생했습니다.<br><br>
  트리플 홈페이지의 300ms정도의 delay라면 정상적인 동작이 가능했지만 요구조건의 100ms는 너무 짧은 딜레이이기 때문에 반영되지 않아 어쩔 수 없이 CSS의 animation-delay를 각 요소에 넣어서 딜레이를 주었습니다. <br><br>
  또한 delay시간 동안 요소가 보여지면서 깜빡이는 현상이 발생하여 클래스를 통해 조건부로 애니메이션이 적용되도록 하였고 이는 커스텀훅에서 useLayoutEffect를 사용해 DOM요소가 paint되기전에 적용되도록 하여 깜빡임 현상을 제거 했습니다.
