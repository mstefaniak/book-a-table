import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { Button, Grid, Typography, TextField } from '@material-ui/core';

interface FormValues {
  name: string,
  email: string,
};

type ValidatorResponse = undefined | string;
type Validator = (value?: string) => ValidatorResponse;

const composeValidators = (...validators: Array<Validator>) => (value?: string): ValidatorResponse =>
  validators.reduce((error: ValidatorResponse, validator) => error || validator(value), undefined);

const BookForm = () => {
  const { t } = useTranslation();
  const isNotEmpty: Validator = (value) => (value ? undefined : t('required'))
  const isEmail = (email?: string): ValidatorResponse => (email && email?.indexOf('@') > -1 ? undefined : t('invalid_email'))

  const onSubmit = (values: FormValues): void => {
    console.log('submit', values);
  }

  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>{t('book_a_table')}</Typography>
            <Typography variant="h6" gutterBottom>The Office - Craft Beer Pub</Typography>
          </Grid>
          <Grid item xs={12}>
            <Field name="email" validate={composeValidators(isNotEmpty, isEmail)}>
            {({ input, meta }) => (
              <TextField
                {...input}
                label={meta.touched && meta.error ? t('error') : t('email')}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error ? meta.error : t('email_hint')}
              />
            )}
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field name="name" validate={isNotEmpty}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label={meta.touched && meta.error ? t('error') : t('name')}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? meta.error : t('name_hint')}
                />
              )}
            </Field>
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
