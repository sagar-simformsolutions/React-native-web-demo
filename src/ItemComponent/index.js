import React, {useState} from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  Image,
} from 'native-base';
import {AppState, TouchableOpacity, useWindowDimensions} from 'react-native';
import {capitalize} from 'lodash';
import {useFocusEffect} from '@react-navigation/native';

const ItemCard = item => {
  const {title, images, brand, description} = item;
  const image = images[Math.floor(Math.random() * images.length)];
  const {width} = useWindowDimensions();
  console.log(image, '<== image');
  return (
    <Box alignItems="center">
      <Box
        maxW={['100%', width / 2, '80']}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: image,
              }}
              alt="Alternate Text"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {capitalize(brand)}
            </Text>
          </Stack>
          <Text fontWeight="400">{description}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ItemCard;
