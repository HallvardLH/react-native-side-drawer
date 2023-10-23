import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Drawer from './src/Drawer';

type DrawerRef = {
    openDrawer: () => void;
    closeDrawer: () => void;
};

export default function App() {

    const drawerRef1 = useRef<DrawerRef | null>(null);
    const drawerRef2 = useRef<DrawerRef | null>(null);

    return (
        <View style={{marginTop: 100}}>
            <Pressable onPress={() => drawerRef1.current?.openDrawer()}>
                <Text>Open Drawer 1</Text>
            </Pressable>

            <Drawer
                ref={drawerRef1}
                width={"300px"}
                onStateChange={(isOpen) => {
                    if (isOpen) {
                        console.log('Drawer opened!');
                    } else {
                        console.log('Drawer closed!');
                    }
                }}
            >
                <Text>This is Drawer 1 content</Text>
                <Pressable onPress={() => drawerRef1.current?.closeDrawer()}>
                    <Text>Close drawer</Text>
                </Pressable>
            </Drawer>

            <Pressable onPress={() => drawerRef2.current?.openDrawer()}>
                <Text>Open Drawer 2</Text>
            </Pressable>

            <Drawer
                ref={drawerRef2}
                side="left"
                maxWidth="none"
                width="70%"
            >
                <Pressable onPress={() => drawerRef2.current?.closeDrawer()}>
                    <Text>Close drawer</Text>
                </Pressable>
                <Text>This is Drawer 2 content</Text>
            </Drawer>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
