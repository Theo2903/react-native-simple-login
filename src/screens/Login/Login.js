import * as React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s } from "./Login.style";

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import CustomIconButton from "../../components/CustomIconButton/CustomIconButton";

// Icon
import iconMail from "../../../assets/iconmail.png";
import iconLock from "../../../assets/iconlock.png";
import iconEyeOff from "../../../assets/iconeyeoff.png";
import vector from "../../../assets/vector-2.png";
import iconFacebook from "../../../assets/logofacebook-1.png";
import iconGoogle from "../../../assets/logogoogle--g--logo-1.png";
import iconLinkedin from "../../../assets/logolinkedin-1.png";

import { WebView } from "react-native-webview";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={s.login}>
      <Text style={s.title}>Connexion</Text>

      <View style={s.frameParent}>
        <View style={s.containerTextField}>
          <Text style={s.header}>E-mail</Text>
          <CustomInput
            placeholder="Votre email"
            keyboardType="email-address"
            iconLeft={iconMail}
          />
          <View style={{ paddingTop: 15 }}>
            <Text style={s.header}>Mot de passe</Text>
            <CustomInput
              placeholder="Mot de passe"
              iconLeft={iconLock}
              iconRight={iconEyeOff}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={s.frameGroup}>
          <CustomCheckbox label="Se rappeler ?" />
          <Text style={s.forgotPassword}>Mot de passe oublié ?</Text>
        </View>
      </View>

      <Pressable
        style={s.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={s.buttonLabel}>Se connecter</Text>
      </Pressable>

      <View style={s.vectorContainer}>
        <Image style={s.frameLayout} contentFit="cover" source={vector} />
        <Text style={s.orContinueWith}>ou continuer avec</Text>
        <Image style={s.frameLayout} contentFit="cover" source={vector} />
      </View>

      <View style={s.signupContainer}>
        <CustomIconButton
          style={{ marginRight: 5 }}
          icon={iconFacebook}
          onPress={() => console.log("Connexion avec Facebook")}
        />
        <CustomIconButton
          style={{ marginRight: 5 }}
          icon={iconGoogle}
          onPress={() => console.log("Connexion avec Google")}
        />
        <CustomIconButton
          style={{ marginRight: 5 }}
          icon={iconLinkedin}
          onPress={() => console.log("Connexion avec Linkedin")}
        />
      </View>

      <Pressable
        style={s.footerContainer}
        onPress={() => navigation.navigate("Signup1")}
      >
        <Text style={s.label2}>Pas de compte ?</Text>
        <Text style={s.label3}>S'inscrire</Text>
      </Pressable>
    </View>
  );
};

export default Login;
