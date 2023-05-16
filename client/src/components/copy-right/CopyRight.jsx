import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; 

function CopyRight(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Dev © "}
      <Link color="inherit" href="#">
        Website
      </Link>{" "}
      {/* {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

export default CopyRight;