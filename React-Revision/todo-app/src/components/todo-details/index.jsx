import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"

export const TodoDetails = ({ todoDetails, openDialog, setOpenDialog, setTodoDetails }) => {
  return <>
    <Dialog onClose={() => setOpenDialog(false)} open={openDialog} PaperProps={{ sx: { borderRadius: 4, px: 1, py: 1 } }}>
      <DialogTitle sx={{ color: "#111827", fontWeight: 700, pb: 1 }}>
        {todoDetails?.todo}
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" sx={{ color: "#4b5563" }}>
          {todoDetails?.completed ? "This task is completed and ready to move on from." : "This task is still pending and needs attention."}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={() => {
          setOpenDialog(false)
          setTodoDetails(null)
        }} sx={{ borderRadius: 999, px: 2, textTransform: "none" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
}


