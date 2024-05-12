import { List, ListItemButton, ListItemText } from "@mui/material";
import { CustomeLink } from "../CustomeLink";

export const SidebarLinks = () => {
  return (
    <div>
      <List>
        <ListItemButton sx={{ padding: 0 }}>
          <ListItemText>
            <CustomeLink to="/products" text="Productos" />
          </ListItemText>
        </ListItemButton>
        <ListItemButton sx={{ padding: 0 }}>
          <ListItemText>
            <CustomeLink to="/users/update" text="Actualizar usuario" />
          </ListItemText>
        </ListItemButton>
      </List>
    </div>
  );
};
