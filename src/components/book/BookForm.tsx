import { addDays, setHours, setMinutes, setSeconds, getHours, getMinutes, isBefore } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';

interface FormValues {
  name: string,
  email: string,
};

type ValidatorResponse = undefined | string;
type Validator = (value?: string) => ValidatorResponse;

const defaultDate = addDays(new Date(), 1);
const initialValues = {
  date: defaultDate,
  time: setHours(setMinutes(defaultDate, 0), 18),
};

const composeValidators = (...validators: Array<Validator>) => (value?: string): ValidatorResponse =>
  validators.reduce((error: ValidatorResponse, validator) => error || validator(value), undefined);

const MIN_PEOPLE = 1;
const MAX_PEOPLE = 12;

const BookForm = () => {
  const { t } = useTranslation();
  const isNotEmpty: Validator = (value) => (value ? undefined : t('required'))
  const isEmail = (email?: string): ValidatorResponse => (email && email?.indexOf('@') > -1 ? undefined : t('invalid_email'))
  const isNumber = (value?: string): ValidatorResponse => (isNaN(Number(value)) ? t('invalid_number') : undefined);
  const isBetween = (min: number, max: number) => (value?: string): ValidatorResponse => (Number(value) < min || Number(value) > max ? t('not_between', { min: MIN_PEOPLE, max: MAX_PEOPLE }) : undefined);
  const isValidTime = (time: Date): ValidatorResponse => {
    const hour = getHours(time);
    const minute = getMinutes(time);
    if (hour < 16 || hour > 20 || (hour === 20 && minute > 0)) {
      return 'error';
    }
    return undefined;
  };
  const isValidDate = (date: Date): ValidatorResponse => {
    const selectedDate = setHours(setMinutes(date, 0), 16); // 16:00
    const startDate = setHours(setMinutes(setSeconds(defaultDate, 0), 59), 15); // tomorrow 16:01:00
    console.log(isBefore(selectedDate, startDate), selectedDate, startDate)
    if (isBefore(startDate, selectedDate)) {
      return 'error';
    }
    return undefined;
  };

  const onSubmit = (values: FormValues): void => {
    console.log('submit', values);
  };

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} render={({ handleSubmit }) => (
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12}>
              <Field name="date" validate={isValidDate}>
                {({ input, meta }) => (
                  <DatePicker
                    {...input}
                    margin="normal"
                    format="dd-MM-yyyy"
                    label={meta.touched && meta.error ? t('error') : t('date')}
                    error={meta.touched && !!meta.error}
                    helperText={t('date_hint')}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="time" validate={isValidTime}>
                {({ input, meta }) => (
                  <TimePicker
                    {...input}
                    ampm={false}
                    minutesStep={15}
                    margin="normal"
                    label={meta.touched && meta.error ? t('error') : t('time')}
                    error={meta.touched && !!meta.error}
                    helperText={t('time_hint')}
                  />
                )}
              </Field>
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item xs={12}>
            <Field name="people" validate={composeValidators(isNumber, isBetween(MIN_PEOPLE, MAX_PEOPLE))}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label={meta.touched && meta.error ? t('error') : t('people')}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? meta.error : t('people_hint')}
                />
              )}
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field name="people" validate={composeValidators(isNumber, isBetween(1, 12))}>
              {({ input }) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">{t('place')}</FormLabel>
                  <RadioGroup {...input}>
                    <FormControlLabel value="anywhere" control={<Radio />} label={t('place_anywhere')} checked />
                    <FormControlLabel value="upstairs" control={<Radio />} label={t('place_upstairs')} />
                    <FormControlLabel value="downstairs" control={<Radio />} label={t('place_downstairs')} />
                  </RadioGroup>
                </FormControl>
              )}
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field name="other">
              {({ input }) => (
                <TextField
                  {...input}
                  label={t('other')}
                  helperText={t('other_hint')}
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
