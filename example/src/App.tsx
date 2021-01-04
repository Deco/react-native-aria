//@ts-nocheck
import { OverlayProvider } from '@react-aria/overlays';
import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, ToggleButton } from './components';
import { Checkbox } from './components/checkbox/Checkbox';
import { CheckboxGroup } from './components/checkbox/CheckboxGroup';
import { PopoverExample } from './components/popover';
import { Radio, RadioGroup } from './components/radio';
import { SelectExample } from './components/select';
import { ControlledSwitch } from './components/switch';

export default function App() {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        paddingTop: 100,
        flex: 1,
      }}
    >
      {/* <Text>Button with hover and focus visible example</Text>
      <View style={{ marginVertical: 10, marginBottom: 40 }}>
        <Button>
          <Text style={{ color: 'white' }}>Test</Text>
        </Button>
      </View>

      <Text>
        Toggle button which sets aria-pressed in browser and AccessibilityState
        in RN
      </Text>
      <View style={{ marginVertical: 10 }}>
        <ToggleButton>
          <Text style={{ color: 'white' }}>Test</Text>
        </ToggleButton>
      </View>
      <CheckboxExample />

      <RadioExample /> */}

      {/* <SwitchExample /> */}
      <SafeAreaView>{/* <SelectExample /> */}</SafeAreaView>
      {/* {/* <ScrollView horizontal> */}
      <View style={{ marginTop: 150 }}>
        <PopoverExample />
      </View>
      {/* <View style={{ height: 10 }}></View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const CheckboxExample = () => {
  const [state, setCheckbox] = React.useState([]);

  return (
    <CheckboxGroup
      label="Favorite sports"
      value={state}
      onChange={(val: any) => {
        setCheckbox(val);
      }}
    >
      <Checkbox value="soccer">
        <Text>Soccer</Text>
      </Checkbox>
      <Checkbox value="baseball" isSelected>
        <Text>Baseball</Text>
      </Checkbox>
      <Checkbox value="basketball" autoFocus>
        <Text>Basketball</Text>
      </Checkbox>
    </CheckboxGroup>
  );
};

const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};

const SwitchExample = () => {
  return <ControlledSwitch />;
};
