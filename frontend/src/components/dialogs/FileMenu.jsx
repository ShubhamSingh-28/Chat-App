import { Menu } from "@mui/material";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu
      open={false}
      anchorEl={anchorE1}
      style={{
        width: "10rem",
      }}
    >
      <div>
        accusamus aspernatur ipsum earum in excepturi, quam aperiam perferendis,
        dolores omnis nihil cumque voluptatibus, aut itaque quae!
      </div>
    </Menu>
  );
};

export default FileMenu;
