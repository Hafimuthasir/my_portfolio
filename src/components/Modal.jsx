import * as React from 'react';
import { Modal, Typography, Box, Button } from '@mui/material';


const ModalExample = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen}
      >
        {props.button}
      </button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#000123',
            boxShadow: 24,
            p: 4,
            borderRadius: '12px',
            // minWidth: '500px',
            textAlign: 'center',
            maxHeight:"90vh",
            // maxWidth:"90vw",
            overflow:"auto"
          }}
        >
          <Typography variant="h4" mb={2}>
            {props.head}
          </Typography>
          <div className="flex flex-row justify-around">
          <Typography variant="body1" sx={{textAlign:"left"}} component="ul">
            {props.points.map((obj)=>{
                console.log(obj);
                return(
                    <>
                    {obj.length === 2?                   
                        // <li className="flex items-center py-2"><i className={obj[0]} style={{fontSize:"2rem",marginTop:"1px"}}></i>&nbsp;{obj[1]}</li>
                        
  <div className="flex items-center">
    <img src={obj[0]} alt="icon" className="h-12 w-auto mr-2" />
    <span className="text-base">{obj[1]}</span>
  </div>

                        :<li>{obj[0]}</li>
                    }
                    </>
                )
            })
            }
          </Typography>
          {/* <Typography variant="body1" sx={{textAlign:"left"}} component="ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
          </Typography> */}
          </div>
          <Box mt={2}>
            {/* <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
              
            >
              Close
            </button> */}
            <Button variant='contained' color="error" onClick={handleClose} >Close</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalExample;
