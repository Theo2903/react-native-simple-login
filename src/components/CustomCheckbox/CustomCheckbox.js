import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./CustomCheckbox.style";
import Icon from "react-native-vector-icons/FontAwesome"; // Utilisez le nom de la bibliothèque d'icônes que vous avez installée

const CustomCheckbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.containerCheckbox} onPress={toggleCheckbox}>
        <View style={[s.checkbox, isChecked && s.checkedBox]}>
          {isChecked && <Icon name="check" size={12} color="white" />}
        </View>
      </TouchableOpacity>
      <Text style={s.label}>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
