import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

export const TodoItem = ({ todo, fetchDetailsOfCurrentTodo }) => {
  return <Card sx={{
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "18px",
    minHeight: "200px",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    border: "1px solid rgba(148, 163, 184, 0.22)",
    boxShadow: "0 16px 32px rgba(15, 23, 42, 0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }}>
    <CardContent sx={{ pb: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
        {todo?.todo}
      </Typography>
    </CardContent>

    <CardActions sx={{ px: 2, pb: 2 }}>
      <Button sx={{
        background: "linear-gradient(135deg, #111827 0%, #374151 100%)",
        color: "#fff",
        borderRadius: "999px",
        px: 2,
        py: 0.8,
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 8px 16px rgba(17, 24, 39, 0.16)",
        "&:hover": {
          background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
          color: "#fff",
          boxShadow: "0 10px 20px rgba(17, 24, 39, 0.22)"
        }
      }}
        onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
      >
        View details
      </Button>
    </CardActions>
  </Card>
}