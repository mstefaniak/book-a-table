import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { BookForm } from "./components/book/BookForm";
import "./i18n";

const Root = styled("div")(({ theme }) => ({
  position: "absolute",
  flexGrow: 1,
  padding: 40,
  backgroundColor: theme.palette.grey[100],
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
}));

const Card = styled("div")({
  margin: "auto",
  maxWidth: 500,
});

const App = () => {
  return (
    <Root>
      <Card>
        <Paper sx={{ p: 4 }}>
          <BookForm />
        </Paper>
      </Card>
    </Root>
  );
};

export default App;
