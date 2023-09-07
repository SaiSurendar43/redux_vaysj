// import { Box, Button } from '@mui/material';
// import React from 'react';
// import { submit } from '../Features/Reducer';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user.value);
//   console.log('user1===>',user)

//   const handleEvent =  () => {
//     try {
//       // Assuming `submit` returns a Promise when it's done
//        dispatch(submit(user));
//       // If the submission is successful, navigate to '/table'
//       navigate('/table');
//     } catch (error) {
//       // Handle any errors here
//       console.error(error);
//     }
//   };

//   return (
//     <Box>
//       <Button onClick={handleEvent} variant="contained">
//         Submit
//       </Button>
//     </Box>
//   );
// }

// export default Register;
