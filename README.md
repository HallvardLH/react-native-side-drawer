# react-native-side-drawer

A customizable side drawer component for React Native. The drawer has no boilerplate, just functionality. It's animated, and can be dismissed by outside click, user swipe or function call.

[![npm version](https://badge.fury.io/js/hallvardlh-react-native-drawer.svg)](https://badge.fury.io/js/hallvardlh-react-native-drawer)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Contribution](#contribution)
- [License](#license)

## Installation

```
npm install hallvardlh-react-native-drawer
```

## Usage
Basic component with a drawer using default settings.
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import { Drawer } from 'hallvardlh-react-native-drawer';

export default function MyComponent() {
    const drawerRef1 = useRef(null);
    return (
        <View>
            <TouchableOpacity onPress={() => drawerRef1.current?.openDrawer()}>
                <Text>Open Drawer 1</Text>
            </TouchableOpacity>

            <Drawer ref={drawerRef1}>
                <TouchableOpacity onPress={() => drawerRef1.current?.closeDrawer()}>
                    <Text>Close drawer</Text>
                </TouchableOpacity>
                <Text>Drawer 1 content</Text>
            </Drawer>
        </View>
    );
}
```


## Props
| Prop           | Type           | Default       | Description
| ------------   | -------------- | ------------- | -
| children       | ReactNode      | null          | The content of the drawer.
| onStateChange   | function| -             | Callback function that gets triggered when the drawer state changes. It receives a boolean indicating the drawer's state. |
| side           | string         | 'right'       | The side to which the drawer will be aligned, which side it will come from. Accepts: 'left' or 'right'.
| width          | string         | '85%'         | Specifies the width of the drawer. Accepts strings ending in either "px" or "%". Percentage values represent percentage of the screen's width.
| maxWidth       | string         | '500px'       | Specifies the maxium width of the drawer. This is inteded to avoid ridiculously long drawers on wider screens. Accepts strings ending in either "px" or "%".
| containerStyle | StyleProp       | null         | Allows setting custom styles on the view that containing the children.
| backgroundColor | string         | 'white'      | The background color of the view containing children. Accepts any CSS color value as a string.

## Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

