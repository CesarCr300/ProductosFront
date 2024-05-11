import { List, ListItemButton, ListItemText } from "@mui/material";
import { CustomeLink } from "../CustomeLink";

export const SidebarLinks = () => {
  return (
    <div>
      <List>
        <ListItemButton sx={{ padding: 0 }} key="Starred">
          <ListItemText>
            <CustomeLink to="/products" text="Productos" />
          </ListItemText>
        </ListItemButton>
      </List>
    </div>
  );
};
