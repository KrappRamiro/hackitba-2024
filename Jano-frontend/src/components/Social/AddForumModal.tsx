import * as React from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from '@mui/material/Modal';
import AddForumForm from './AddForumForm';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AddForumModal({handleForumUpload}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleModalUponCompletion = () => {
        handleClose();
        handleForumUpload();
    }
    
    return (
        <div > 
            <AddCircleIcon style={{ color: "#3b82f6" }} onClick={handleOpen} />
            <Modal
                open={open}
                className=""
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="">
                    <AddForumForm handleForumUpload={handleModalUponCompletion}></AddForumForm>
                </Box>
            </Modal>
        </div>            
    )
}