# react-turnable-component

양면이 회전하는 효과를 줄 수 있는 뒤집히는 컴포넌트(turnable component) 입니다.

## Installation

```
npm i react-turnable-component

or

yarn add react-turnable-component
```

## Type

| field         | type    | required     | description                                                                   |
| ------------- | ------- | ------------ | ----------------------------------------------------------------------------- |
| frontImageUrl | string  | yes          | 앞면의 이미지 URL를 설정합니다.                                               |
| backImageUrl  | string  | yes          | 뒷면의 이미지 URL를 설정합니다.                                               |
| isFirstTurned | boolean | no(optional) | 초기 기본으로 제공하는 애니메이션을 사용할지 설정합니다. 기본값은 true입니다. |
| width         | number  | no(optional) | 컴포넌트의 너비를 지정합니다. px 단위 입니다.                                 |
| height        | number  | no(optional) | 컴포넌트의 높이를 지정합니다. px 단위 입니다.                                 |
| isClickable   | boolean | no(optional) | click을 사용해 뒤집는 효과를 enable합니다. 기본값은 false입니다.              |

## Getting start

```tsx
import {TurnableComponent} from "react-turnable-component";

...

<TurnableComponent
  frontImageUrl={/* Image url for front */}
  backImageUrl={/* Image url for back */}
  isClickable>
    {children}
</TurnableComponent>
```

## About

- [npm link](https://www.npmjs.com/package/react-turnable-component?activeTab=readme)
