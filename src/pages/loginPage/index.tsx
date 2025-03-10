import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Avatar,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import loginIcon from "../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooke";
import { loginFetch } from "../../redux/slices/adminSlice/fetchService";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const error = useAppSelector((state) => state.admin.error);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginFetch({ email, password }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(loginFetch({ email, password }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#08412E",
      }}
    >
      <Avatar
        src={loginIcon}
        sx={{ width: 150, height: 100, marginBottom: "20px" }}
        variant="square"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Մուտք
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Օգտվողի անունը"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            onKeyDown={handleKeyDown}
            margin="normal"
          />
          <TextField
            label="Գաղտնաբառ"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            onKeyDown={handleKeyDown}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "white" }}>
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: 2, backgroundColor: "#08412E" }}
            fullWidth
          >
            Մուտք գործել
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
