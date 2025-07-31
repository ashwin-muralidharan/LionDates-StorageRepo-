import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, TextField, Button, 
  InputAdornment, IconButton, Typography 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../assets/logo.png';

// Mock user database (replace with your actual authentication API)
const users = [
  { email: 'order@example.com', password: 'order123', role: 'order', redirect: '/order' },
  { email: 'production@example.com', password: 'production123', role: 'production', redirect: '/production' },
  { email: 'warehouse@example.com', password: 'warehouse123', role: 'warehouse', redirect: '/warehouse' }
];

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Find user in mock database
    const user = users.find(u => 
      u.email === formData.email && u.password === formData.password
    );

    if (user) {
      console.log('Login successful. Role:', user.role);
      // In a real app, you would store the user token/session here
      navigate(user.redirect); // Redirect to the appropriate dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      p: 2
    }}>
      <Box 
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
          width: '100%',
          maxWidth: 450,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Logo positioned within the white box */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 4,
          pb: 2
        }}>
          <Box 
            component="img"
            src={logo}
            sx={{ 
              width: 180, 
              height: 'auto',
              maxWidth: '80%'
            }} 
            alt="Company Logo"
          />
        </Box>

        {/* Application Name */}
        <Typography 
          variant="h5" 
          component="h1" 
          align="center" 
          sx={{ 
            mb: 3,
            fontWeight: 'medium',
            color: 'text.primary'
          }}
        >
          Stock Manager
        </Typography>

        {/* Form Fields */}
        <Box sx={{ px: 4, pb: 4 }}>
          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          
          <TextField 
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }} 
            required
          />
          
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 4 }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Button 
            type="submit"
            fullWidth 
            variant="contained" 
            size="large"
            sx={{ 
              py: 1.5,
              fontWeight: 'bold'
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}