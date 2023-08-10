import { s } from "./CustomInput.style";

import { View, TextInput, Image } from "react-native";

const CustomInput = ({
  placeholder,
  keyboardType,
  iconLeft,
  iconRight,
  secureTextEntry,
}) => {
  return (
    <View style={s.container}>
      <Image style={s.image} contentFit="cover" source={iconLeft} />
      <TextInput
        style={s.customInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      ></TextInput>
      <Image style={s.image} contentFit="cover" source={iconRight} />
    </View>
  );
};

export default CustomInput;
