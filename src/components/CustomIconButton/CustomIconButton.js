import { s } from "./CustomIconButton.style";

import { Pressable, Image } from "react-native";

const CustomIconButton = ({icon, onPress, style}) => {
  return (
    <Pressable
      style={[s.iconButtonContainer, style]}
      onPress={onPress}
    >
      <Image
        style={s.icon}
        contentFit="cover"
        source={icon}
      />
    </Pressable>
  );
};

export default CustomIconButton;
