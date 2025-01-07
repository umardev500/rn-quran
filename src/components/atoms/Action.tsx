import {GlyphName, MsRoundedAutoFill} from '@components/atoms/Icon';
import {StyleSheet, TouchableOpacity} from 'react-native';

type ActionProps = {
  onPress?: () => void;
  icon: GlyphName;
  color?: string;
  size?: number;
};

export const Action: React.FC<ActionProps> = ({onPress, icon, color, size}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.6}>
      <MsRoundedAutoFill focused={true} name={icon} color={color} size={size} />
    </TouchableOpacity>
  );
};

type BackActionProps = {
  onPress?: () => void;
  icon?: GlyphName;
  color?: string;
  size?: number;
};

export const BackAction: React.FC<BackActionProps> = ({
  icon,
  color,
  size,
  onPress,
}) => {
  const backIcon: GlyphName = 'arrow_back';

  return (
    <TouchableOpacity
      style={styles.container}
      className="mr-2"
      onPress={onPress}
      activeOpacity={0.6}>
      <MsRoundedAutoFill
        focused={true}
        name={icon || backIcon}
        color={color}
        size={size}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 35,
    minHeight: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingBottom: 2,
  },
});
