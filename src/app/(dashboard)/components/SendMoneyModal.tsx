// components/SendMoneyModal.tsx
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Heading,
  Stack,
} from '@chakra-ui/react';

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData = {
  username: '',
  amount: '',
  remark: '',
};

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);

  const toast = useToast();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMoney = () => {
    const { username, amount, remark } = formData;
    if (!username || !amount) {
      toast({
        title: 'Error',
        description: 'Please enter both username and amount.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Success',
      description: `You sent $${amount} to ${username}.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setFormData(initialFormData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading
            as="h2"
            fontSize={{ base: '1.25rem', md: '1.375rem' }}
            fontWeight={'semibold'}
            mb={4}
            color={'#343d6bff'}
          >
            Send Money
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Stack spacing={4} as={'form'} onSubmit={handleSendMoney}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel color={'#343d6bff'}>Recipient Username</FormLabel>
                <Input
                  placeholder="Enter username"
                  value={formData.username}
                  py="1.5rem"
                  px="1rem"
                  _placeholder={{
                    color: '#595959ff',
                    fontSize: '0.875rem',
                  }}
                  border={'2px solid #d9d9d9ff'}
                  name="username"
                  _focus={{
                    borderColor: '#1713f2ff',
                  }}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="amount">
                <FormLabel color={'#343d6bff'}>Amount</FormLabel>
                <Input
                  placeholder="Enter amount"
                  type="number"
                  value={formData.amount}
                  py="1.5rem"
                  px="1rem"
                  name="amount"
                  _placeholder={{
                    color: '#595959ff',
                    fontSize: '0.875rem',
                  }}
                  border={'2px solid #d9d9d9ff'}
                  _focus={{
                    borderColor: '#1713f2ff',
                  }}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="amount">
                <FormLabel color={'#343d6bff'}>Remark(Optional)</FormLabel>
                <Input
                  placeholder="Enter remark"
                  value={formData.remark}
                  name="remark"
                  py="1.5rem"
                  px="1rem"
                  _placeholder={{
                    color: '#595959ff',
                    fontSize: '0.875rem',
                  }}
                  border={'2px solid #d9d9d9ff'}
                  _focus={{
                    borderColor: '#1713f2ff',
                  }}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={'#1713f2ff'}
              _hover={{
                bg: '#1713f2ff',
              }}
              color={'white'}
              px={'1.25rem'}
              mr={5}
              onClick={handleSendMoney}
            >
              Send
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Stack>
      </ModalContent>
    </Modal>
  );
};

export default SendMoneyModal;
