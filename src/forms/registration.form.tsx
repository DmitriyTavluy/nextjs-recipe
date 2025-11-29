'use client';
import { registerUser } from '@/actions/register';
import { Button, Form, Input } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    const result = await registerUser(formData);
    console.log(result);

    onClose();
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введите email"
        type="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        validate={(value) => {
          if (!value) {
            return 'Email обязателен';
          }
          if (!validateEmail(value)) {
            return 'Некорректный Email';
          }
          return null;
        }}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus: outline-none',
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Введите пароль"
        type="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
        validate={(value) => {
          if (!value) {
            return 'Пароль обязателен';
          }
          if (value.length < 6) {
            return 'Пароль должен быть не менее 6 символов';
          }
          return null;
        }}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus: outline-none',
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
        validate={(value) => {
          if (!value) {
            return 'Пароль для подтверждения обязателен';
          }
          if (value !== formData.password) {
            return 'Пароли не совпадают';
          }
          return null;
        }}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus: outline-none',
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
