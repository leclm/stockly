import { SxProps, Theme } from "@mui/material/styles";

export const productListStyles = {
  paper: {
    p: { xs: 1.5, sm: 3 },
    width: { xs: '95%', sm: '96%' },
    borderRadius: 2,
    boxShadow: { xs: 0, sm: 3 },
    backgroundColor: 'background.paper',
    overflowX: 'auto',
    border: { xs: 'none', sm: 'initial' },
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
      fontSize: { xs: '0.75rem', sm: 'inherit' },
      px: { xs: 1, sm: 2 },
      py: { xs: 1, sm: 1.5 },
    },
  } as SxProps<Theme>,

  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: 'action.hover',
    },
    '&:hover': {
      backgroundColor: 'action.selected',
    },
    '& .MuiTableCell-body': {
      px: { xs: 1, sm: 2 },
      py: { xs: 1.5, sm: 1.5 },
    },
  } as SxProps<Theme>,

  avatar: {
    width: { xs: 48, sm: 56 },
    height: { xs: 48, sm: 56 },
    boxShadow: 1,
    border: '1px solid',
    borderColor: 'divider',
  } as SxProps<Theme>,

  detailButton: {
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: 1.5,
    px: { xs: 1.5, sm: 2 },
    py: { xs: 0.75, sm: 1 },
    fontSize: { xs: '0.8125rem', sm: 'inherit' },
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  } as SxProps<Theme>,

  pagination: {
    '& .MuiTablePagination-toolbar': {
      paddingRight: { xs: 0, sm: 2 },
      flexWrap: 'wrap',
      '& .MuiTablePagination-actions': {
        marginLeft: 0,
      },
    },
    '& .MuiTablePagination-displayedRows': {
      fontSize: { xs: '0.8125rem', sm: 'inherit' },
    },
    '& .MuiIconButton-root': {
      padding: { xs: 0.5, sm: 1 },
    },
  } as SxProps<Theme>,

  responsiveTableCell: {
    display: { xs: 'none', sm: 'table-cell' },
  } as SxProps<Theme>,

  mobileLabel: {
    display: { xs: 'inline-block', sm: 'none' },
    fontWeight: 600,
    mr: 1,
    minWidth: 60,
    color: 'text.secondary',
  } as SxProps<Theme>,

  mobileRow: {
    display: { xs: 'flex', sm: 'table-row' },
    flexDirection: { xs: 'column', sm: 'row' },
    border: { xs: '2px solid', sm: 'none' },
    borderColor: { xs: 'divider', sm: 'none' },
    p: { xs: 2, sm: 0 },
    mb: { xs: 3, sm: 0 },
    borderRadius: { xs: 3, sm: 0 },
    backgroundColor: { xs: 'background.paper', sm: 'inherit' },
    boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.08)', sm: 'none' },
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: { xs: 4, sm: 0 },
      background: 'linear-gradient(90deg, primary.main 0%, secondary.main 100%)',
      borderRadius: '3px 3px 0 0',
    },
    '& .MuiTableCell-root': {
      display: { xs: 'flex', sm: 'table-cell' },
      alignItems: { xs: 'center', sm: 'initial' },
      borderBottom: 'none',
      py: { xs: 1.25, sm: 'inherit' },
      px: { xs: 0, sm: 'inherit' },
      width: { xs: '100%', sm: 'auto' },
      '&:not(:last-child)': {
        borderBottom: { xs: '1px dashed', sm: 'none' },
        borderColor: { xs: 'action.disabledBackground', sm: 'none' },
        pb: { xs: 1.5, sm: 'inherit' },
      }
    },
    '&:hover': {
      borderColor: { xs: 'primary.light', sm: 'none' },
      boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.12)', sm: 'none' },
    }
  } as SxProps<Theme>,

  mobileRowHeader: {
    display: { xs: 'flex', sm: 'none' },
    alignItems: 'center',
    mb: 1,
    gap: 2,
  } as SxProps<Theme>,

  mobileProductName: {
    fontWeight: 600,
    fontSize: '1rem',
    flexGrow: 1,
  } as SxProps<Theme>,

  mobileDetailButton: {
    mt: 1,
    alignSelf: 'flex-start',
  } as SxProps<Theme>,
};