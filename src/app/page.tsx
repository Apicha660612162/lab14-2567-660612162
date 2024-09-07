"use client";
import { Container, Text, Title } from "@mantine/core";
import YourRating from "@components/YourRating";
export default function Home() {
  return (
    <Container size="600px">
      <Title order={2} >Food Review 🍕</Title>
      <YourRating/>
    
      <Text ta="center" my="sm" c="dimmed">
        Copyright © 2024 Apicha LErdjintanakit 660612162
      </Text>
    </Container>
  );
}
