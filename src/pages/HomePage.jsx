import React from 'react';
import { Stack } from '@mui/material';
import {
  GraceResCard,
  PastorJack,
  LivingWatersCard,
  Footer,
} from '../components';

export default function HomePage() {
  return (
    <Stack direction="column" spacing={2} justifyContent="space-around">
      <GraceResCard />
      <PastorJack />
      <LivingWatersCard />
      <Footer />
    </Stack>
  );
}
