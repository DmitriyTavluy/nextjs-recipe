'use client';
import { Button, Form, Input } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
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
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
