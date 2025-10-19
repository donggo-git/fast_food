import { CustomButtonProps } from '@/type'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const CustomButton = ({ onPress, title = "Click Me", style, textStyle, leftIcon, isLoading = false }: CustomButtonProps) => {
    return (
        <TouchableOpacity className={`custom-btn ${style}`} onPress={onPress}>
            {leftIcon}
            <View className='flex-center flex-row'>
                {isLoading ? (
                    <ActivityIndicator size="small" color='white' />
                ) : (
                    <Text className={`text-white-100 paragraph-semibold ${textStyle}`}>{title}</Text>
                )}
            </View>
            <Text>CustomButton</Text>
        </TouchableOpacity >
    )
}

export default CustomButton