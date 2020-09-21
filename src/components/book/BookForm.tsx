import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { Button, Grid, Typography, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

interface FormValues {
  email: string,
  name: string,
}

const BookForm = () => {
  const { t } = useTranslation();

  const onSubmit = (data: FormValues): void => {
    console.log('submit', data);
  }

  const validate = () => {};

  return (
    <Form<FormValues> onSubmit={onSubmit} validate={validate} render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>{t('book_a_table')}</Typography>
            <Typography variant="h6" gutterBottom>The Office - Craft Beer Pub</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="email">{t('email')}</InputLabel>
              <Input id="email" aria-describedby="email-helper" />
              <FormHelperText id="email-helper">{t('email_hint')}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="name">{t('name')}</InputLabel>
              <Input id="name" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">{t('name_hint')}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {t('book')}
            </Button>
          </Grid>
        </Grid>
      </form>
    )} />
  )
}

export { BookForm }
