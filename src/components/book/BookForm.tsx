import React, { useContext, useState } from "react";
import {
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  getHours,
  getMinutes,
  isBefore,
} from "date-fns";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import {
  Alert,
  Button,
  Box,
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Link,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/lab";
import { FirebaseContext } from "../../context/firebase";
import { useGetCount } from "../../hooks";
import { combineDateTime } from "../../lib/parser";

interface FormValues {
  name: string;
  area: string;
  time: Date;
  date: Date;
  people: string;
  comment: string;
}

type ValidatorResponse = undefined | string;
type Validator = (value?: string) => ValidatorResponse;

const defaultDate = addDays(new Date(), 1);
const initialValues = {
  date: defaultDate,
  time: setHours(setMinutes(defaultDate, 0), 18),
  area: "anywhere",
};

const composeValidators =
  (...validators: Array<Validator>) =>
  (value?: string): ValidatorResponse =>
    validators.reduce(
      (error: ValidatorResponse, validator) => error || validator(value),
      undefined
    );

const MIN_PEOPLE = 1;
const MAX_PEOPLE = 12;
const MAX_PEOPLE_PER_DAY = 20;

const BookForm = (): JSX.Element => {
  const { t } = useTranslation();
  const { firebase } = useContext(FirebaseContext);
  const { getCount } = useGetCount();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const isNotEmpty: Validator = (value) => (value ? undefined : t("required"));
  const isNumber = (value?: string): ValidatorResponse =>
    isNaN(Number(value)) ? t("invalid_number") : undefined;
  const isBetween =
    (min: number, max: number) =>
    (value?: string): ValidatorResponse =>
      Number(value) < min || Number(value) > max
        ? t("not_between", { min: MIN_PEOPLE, max: MAX_PEOPLE })
        : undefined;
  const isValidTime = (time: Date): ValidatorResponse => {
    const hour = getHours(time);
    const minute = getMinutes(time);
    if (hour < 16 || hour > 20 || (hour === 20 && minute > 0)) {
      return "error";
    }
    return undefined;
  };
  const isValidDate = (date: Date): ValidatorResponse => {
    const selectedDate = setHours(setMinutes(date, 0), 16); // 16:00
    const startDate = setHours(setMinutes(setSeconds(defaultDate, 0), 59), 15); // tomorrow 15:59
    if (isBefore(selectedDate, startDate)) {
      return "error";
    }
    return undefined;
  };

  const onSubmit = async (values: FormValues) => {
    if (!firebase) {
      return;
    }

    const parsedDate = combineDateTime(values.date, values.time);
    const count = await getCount(parsedDate);

    if (count >= MAX_PEOPLE_PER_DAY) {
      return setError("too_many_bookings");
    }

    const data = {
      name: values.name,
      area: values.area,
      people: values.people,
      comment: values.comment || "",
      date: parsedDate,
      status: 0,
    };
    const result = await firebase.firestore().collection("bookings").add(data);

    if (result) {
      setSuccess(true);
    } else {
      setError("generic_error");
    }
  };

  if (error) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="error">{t(error)}</Alert>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              setError(undefined);
            }}
          >
            {t("try_again")}
          </Button>
        </Grid>
      </Grid>
    );
  }

  if (success) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="success">{t("success_message")}</Alert>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              setSuccess(false);
            }}
          >
            {t("add_new_booking")}
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} justifyContent="center">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textTransform: "uppercase" }}
              >
                {t("book_a_table")}
              </Typography>
              <Box>
                <img src="/book-a-table/apple-touch-icon.png" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Field name="name" validate={isNotEmpty}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label={meta.touched && meta.error ? t("error") : t("name")}
                    error={meta.touched && !!meta.error}
                    helperText={
                      meta.touched && meta.error ? meta.error : t("name_hint")
                    }
                  />
                )}
              </Field>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid item xs={12}>
                <Field name="date" validate={isValidDate}>
                  {({ input, meta }) => (
                    <DatePicker
                      {...input}
                      label={
                        meta.touched && meta.error ? t("error") : t("date")
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={meta.touched && !!meta.error}
                          helperText={t("date_hint")}
                        />
                      )}
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
                      label={
                        meta.touched && meta.error ? t("error") : t("time")
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={meta.touched && !!meta.error}
                          helperText={t("time_hint")}
                        />
                      )}
                    />
                  )}
                </Field>
              </Grid>
            </LocalizationProvider>
            <Grid item xs={12}>
              <Field
                name="people"
                validate={composeValidators(
                  isNumber,
                  isBetween(MIN_PEOPLE, MAX_PEOPLE)
                )}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label={
                      meta.touched && meta.error ? t("error") : t("people_hint")
                    }
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error ? meta.error : null}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="area" type="radio">
                {({ input }) => (
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{t("place")}</FormLabel>
                    <RadioGroup {...input} defaultValue={initialValues.area}>
                      <FormControlLabel
                        value="anywhere"
                        control={<Radio />}
                        label={t("place_anywhere")}
                      />
                      <FormControlLabel
                        value="upstairs"
                        control={<Radio />}
                        label={t("place_upstairs")}
                      />
                      <FormControlLabel
                        value="downstairs"
                        control={<Radio />}
                        label={t("place_downstairs")}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="comment">
                {({ input }) => (
                  <TextField
                    {...input}
                    label={t("other")}
                    helperText={t("other_hint")}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || pristine}
              >
                {t("book")}
              </Button>
            </Grid>
          </Grid>

          <Alert sx={{ marginTop: 3 }} severity="info">
            {t("beta_info")}
            <Link href="mailto:theofficeszczecin@gmail.com?subject='Book a table - error'">
              {t("beta_link")}
            </Link>
          </Alert>
        </form>
      )}
    />
  );
};

export { BookForm };
