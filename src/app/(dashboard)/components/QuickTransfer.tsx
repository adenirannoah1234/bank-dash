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
  useDisclosure,
} from '@chakra-ui/react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import { TransferContent } from '../../constants/data';
import { LuSend } from 'react-icons/lu';
import SendMoneyModal from './SendMoneyModal';

export default function SendFunds() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [amount, setAmount] = useState('');
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSend = () => {
    console.log('Amount sent:', amount);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <Box
      maxWidth={{ base: '100%', md: '445px', lg: '500px', xl: '600px' }}
      margin="auto"
    >
      <Heading
        as="h3"
        fontSize={{ base: '1.25rem', md: '1.375rem' }}
        fontWeight={'semibold'}
        mb={4}
        color={'#343d6bff'}
        maxW={{ base: '100%', lg: '445px' }}
      >
        Quick Transfer
      </Heading>
      <Box
        py={'4'}
        px={'6'}
        bg="white"
        borderRadius="3xl"
        boxShadow="md"
        h={{ base: 'auto', md: '276px' }}
      >
        <Flex
          align="center"
          marginTop={{ base: '4', md: '10' }}
          position="relative"
        >
          <IconButton
            position="absolute"
            left={{ base: '-19px', md: '-20px' }}
            top="50%"
            transform="translateY(-50%)"
            aria-label="Scroll left"
            icon={<FaChevronLeft />}
            onClick={scrollPrev}
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
            right={{ base: '-19px', md: '-20px' }}
            top="50%"
            transform="translateY(-50%)"
            aria-label="Scroll right"
            icon={<FaChevronRight />}
            onClick={scrollNext}
            isDisabled={!canScrollNext}
            boxShadow={'0px 0px 10px #718ebfff'}
            borderRadius={'full'}
            color={'#718ebfff'}
            zIndex={10}
          />
        </Flex>
        <HStack marginTop="4">
          <Button
            h="2.5rem"
            px={'3rem'}
            size="sm"
            borderRadius={'full'}
            bg={'#1713f2ff'}
            color={'white'}
            rightIcon={<LuSend size={20} />}
            onClick={onOpen}
          >
            Send Money
          </Button>
        </HStack>
        <SendMoneyModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
