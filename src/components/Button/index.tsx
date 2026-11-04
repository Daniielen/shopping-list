import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";


type Props = {
    title: string
    onPress?: () => void
    activeOpacity?: number
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}