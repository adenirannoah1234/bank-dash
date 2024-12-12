'use client';
import {
  Box,
  Avatar,
  Text,
  Button,
  Input,
  Flex,
  IconButton,
  HStack,
  FormControl,
  InputRightElement,
  InputGroup,
  Heading,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import { TransferContent } from '../constants/data';

export default function SendFunds() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [amount, setAmount] = useState('');
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const handleSend = () => {
    console.log('Amount sent:', amount);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Update scroll ability
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box>
      <Heading
        as="h3"
        fontSize={'1.375rem'}
        fontWeight={'semibold'}
        mb={4}
        color={'#343d6bff'}
      >
        Quick Transfer
      </Heading>
      <Box
        maxWidth="445px"
        margin="auto"
        h={276}
        py={'4'}
        px={'6'}
        bg="white"
        borderRadius="3xl"
        boxShadow="md"
      >
        <Flex align="center" marginTop={'10'} position="relative">
          <IconButton
            position="absolute"
            left="-20px"
            top="50%"
            transform="translateY(-50%)"
            aria-label="Scroll left"
            icon={<ChevronLeftIcon />}
            onClick={scrollPrev}
            // variant="ghost"
            color={'#718ebfff'}
            boxShadow={'0px 0px 10px #718ebfff'}
            borderRadius={'full'}
            isDisabled={!canScrollPrev}
            zIndex={10}
          />

          <Box ref={emblaRef} overflow="hidden" width="100%">
            <Flex className="embla__container">
              {TransferContent.map((user, index) => (
                <Box
                  key={index}
                  flex="0 0 calc(33.333% - 16px)"
                  textAlign="center"
                  marginX="2"
                  cursor="pointer"
                >
                  <Avatar src={user.image} size="md" margin="auto" />
                  <Text fontWeight="bold" fontSize="sm" marginTop="2">
                    {user.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {user.role}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>

          <IconButton
            position="absolute"
            right="-20px"
            top="50%"
            transform="translateY(-50%)"
            aria-label="Scroll right"
            icon={<ChevronRightIcon />}
            onClick={scrollNext}
            // variant="ghost"
            isDisabled={!canScrollNext}
            boxShadow={'0px 0px 10px #718ebfff'}
            borderRadius={'full'}
            color={'#718ebfff'}
            zIndex={10}
          />
        </Flex>
        <HStack>
          <Text>Write Amount</Text>
          <Flex align="center" marginTop="4">
            <FormControl>
              <InputGroup>
                {' '}
                <Input
                  type="number"
                  placeholder="Write Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  flex="1"
                  marginRight="2"
                />
                <InputRightElement />
              </InputGroup>
            </FormControl>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
