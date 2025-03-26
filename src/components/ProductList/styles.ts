import { SxProps, Theme } from "@mui/material/styles";

export const productListStyles = {
  paper: {
    p: 3,
    width: '96%',
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: 'background.paper',
  } as SxProps<Theme>,

  searchField: {
    mb: 3,
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
    },
  } as SxProps<Theme>,

  tableHeader: {
    backgroundColor: 'primary.main',
    '& .MuiTableCell-head': {
      color: 'primary.contrastText',
      fontWeight: 600,
    },
  } as SxProps<Theme>,

  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: 'action.hover',
    },
    '&:hover': {
      backgroundColor: 'action.selected',
    },
  } as SxProps<Theme>,

  avatar: {
    width: 56,
    height: 56,
  } as SxProps<Theme>,

  detailButton: {
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: 1,
    px: 2,
    py: 1,
  } as SxProps<Theme>,

  pagination: {
    '& .MuiTablePagination-toolbar': {
      paddingRight: 2,
    },
  } as SxProps<Theme>,
};